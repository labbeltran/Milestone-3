import React from 'react';
import { Col, Row } from "react-bootstrap";
import { useSearch } from '../context/SearchContext';
import { Cards } from './Cards';

export function SearchResultsPage() {
  const { searchResults } = useSearch();

  if (!Array.isArray(searchResults)) {
    return <div>Error: searchResults is not an array.</div>;
  }

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3 fs-3">
        {searchResults.map((item: { id: string; name: string; set: { id: string; name: string; }; rarity: string; flavorText: string; images: { small: string; large: string; }; cardmarket: { prices: { averageSellPrice: number; }; }; }) => (
          <Col key={item.id} className="fs-6">
            <div className="card-custom">
              <div className="card-content">
                <Cards {...item} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}