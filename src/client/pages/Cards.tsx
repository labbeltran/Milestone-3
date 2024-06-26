import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from "../utilities/formatCurrency"
import { CardItem } from '../utilities/cardItem'

export function Cards({ id, name, images, cardmarket }: CardItem) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img 
        
        variant="top"
        src={images.small}
        height="450px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column shadow-sm bg-light">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4">{name}</span>
          {/* <span style={{fontSize: "0.6em"}}>{set.name}</span> */}
          {/* <span className="fs-6">{rarity}</span>
          <span className="fs-6">{flavorText}</span> */}
          <span className="ms-2 text-muted">{formatCurrency(cardmarket.prices.averageSellPrice)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}