import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { Cards } from './Cards';
import './SearchResultsPage.css'

type CardItem = {
  id: string;
  name: string;
  set: {
    id: string;
    name: string;
  };
  rarity: string;
  flavorText: string;
  images: {
    small: string;
    large: string;
  };
  cardmarket: {
    prices: {
      averageSellPrice: number;
    };
  };
};

export function SearchResultsPage() {
  const { searchTerm } = useParams<{ searchTerm?: string }>(); // Use "?" to denote optional parameter
  const [cards, setCards] = useState<CardItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (!searchTerm) {
          throw new Error('Search term is not defined');
        }

        const response = await fetch(`/api/cards/name/${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setCards([json]); // Assuming json is directly the CardItem type
      } catch (error) {
        console.error("Error fetching items:", error);
        setError('Failed to fetch items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cards) return null;

  return (
    <>
      <h1>Search Results for "{searchTerm}"</h1>
      <Row md={2} xs={1} lg={3} className="g-3 fs-3">
        {cards.map(item => (
          <Col key={item.id} className="fs-6">
            <div className="card-custom">
              <div className="card-content">
                <Cards {...item} />
              </div>
              <div className="extra-text">
                {item.name}
                {item.set.id}
                {item.set.name}
                {item.flavorText}
                {item.rarity}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}
