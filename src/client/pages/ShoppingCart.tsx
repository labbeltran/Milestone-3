import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from '../context/shoppingCartContext';
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem"

type ShoppingCartProps = {
  isOpen: boolean;
};

type StoreItem = {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("api/cards/:id");
        const items: StoreItem[] = await response.json(); // Parse response as JSON
        setStoreItems(items);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
