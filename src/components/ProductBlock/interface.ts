export interface ProductBlockProps {
  id: any;
  productName: string;
  productPrice: number | string;
  productImage: string;
  productPriceDiscount: number | string;
  removeProduct: (id: number) => void;
}