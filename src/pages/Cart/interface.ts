export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sellingPrice: number;
}

export interface CartProps {
  url: string;
}