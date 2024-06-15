import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from '../context/shoppingCartContext';
import { formatCurrency } from "../utilities/formatCurrency";
import React, { useEffect, useState } from "react";

  type CartItemProps = {
    id: string
    quantity: number
  };

  type ItemType = {
    id: number
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

  export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const [item, setItem] = useState<ItemType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`api/cards/${id}`);
        const json = await response.json();

        if (response.ok) {
          setItem(json);
        } else {
          setError('Failed to fetch item');
        }
      } catch (error) {
        setError('Failed to fetch item');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.images.large}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.cardmarket.prices.averageSellPrice)}
        </div>
      </div>
      <div>{formatCurrency(item.cardmarket.prices.averageSellPrice * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
