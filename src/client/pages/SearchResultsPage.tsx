import React, { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap"

type CardItem = {
 
  id: string
  name: string
  set: {
    id: string, 
    name: string
  }
  rarity: string
  flavorText: string
  images: {
    small: string 
    large: string
  }
  cardmarket: {
    prices: {
      averageSellPrice: number
    }
  }
}

export function SearchResultsPage() {
  const [cards, setCards] = useState<CardItem[] | null>(null);

      
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3 fs-3">
          {cards && cards.map(item => (
            <Col key={item.name} className="fs-6">
              <div className="card-custom">
                <div className="card-content">
                  <Cards  {...item} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </>
    )
  }


