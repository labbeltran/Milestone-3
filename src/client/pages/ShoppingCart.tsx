import { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from '../context/shoppingCartContext';
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem"
import { useLocalStorage } from '../hook/useLocalStorage';
import { CartItemProps } from "../utilities/cartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

type StoreItem = {
  id: string;
  name: string;
  price: number;
  // Add other properties as needed
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);
  const [cItems, setCartItems] = useLocalStorage<CartItemProps[]>("shopping-cart", []);
  console.log(cItems)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        console.log(cItems.length)
        const sItems: StoreItem[] = []
        for (let i = 0; i < cItems.length; i++){
          const response = await fetch(`api/cards/${cItems[i].id}`);
          const x = await response.json();
          console.log(x)
          const item: StoreItem = {
            "id": x.id,
            "name": x.name,
            "price": x.cardmarket.prices.averageSellPrice
          }; // Parse response as JSON
          sItems.push(item)
        }
        setStoreItems(sItems);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    };
    fetchItems();
  }, [cItems]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} price={item.price}/>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item ? item.price * cartItem.quantity: 0);
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}