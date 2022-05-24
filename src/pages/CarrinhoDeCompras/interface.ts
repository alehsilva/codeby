export interface ResponseJson {
  itemMetadata: any;
  items: Products[];
  totalizers: Totalizers[];
  value: number
}


interface Products {
  id: string;
  imageUrl: string;
  name: string;
  price: string | number;
  productId: string;
  quantity: number;
  sellingPrice: number | string;
  }

  interface Totalizers {
   id: string;
   name: string;
   value: number; 
  }