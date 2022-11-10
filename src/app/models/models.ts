export interface Product {
  image: string,
  name: string,
  description: string,
  price: number,
  id: string
}

export interface CartItem {
  id: string
  name: string,
  price: number,
  quantity: number
}