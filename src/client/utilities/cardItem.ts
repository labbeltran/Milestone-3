export type CardItem = {
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