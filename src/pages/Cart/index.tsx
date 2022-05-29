import { useEffect, useState } from "react";
import {
  Content,
  Title,
  TotalProducts,
  ButtonBuy,
  Total,
  FreeShipping,
  Products
} from "./styles";
import ProductBlock from "components/ProductBlock";
import { numberToReal } from "util/numberToReal";
import { Product, CartProps } from "./interface";

export default function Cart({ url }: CartProps): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [valueTotalProducts, setValueTotalProducts] = useState<number>(0);

  useEffect(() => {
    url && getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data?.items);
    setValueTotalProducts(data?.value);
  }

  function onRemoveProduct(idProduct: number) {
    const newProducts = products.filter(product => product.id !== idProduct);
    const product = products.filter(product => product.id === idProduct);
    setProducts(newProducts);
    setValueTotalProducts(valueTotalProducts - product[0]?.sellingPrice);
  }

  return (
    <>
      <Content>
        <Title>Meu carrinho</Title>
        <Products>
          {products.map((item, index) => (
            <ProductBlock
              key={index}
              id={item?.id}
              productImage={item?.imageUrl}
              productName={item?.name}
              productPrice={item?.price}
              productPriceDiscount={item?.sellingPrice}
              removeProduct={onRemoveProduct}
            />
          ))}
        </Products>
        <TotalProducts>
          <Total>
            <span>Total</span>
            <h1>{numberToReal(valueTotalProducts)}</h1>
          </Total>
          {valueTotalProducts > 1000 && (
            <FreeShipping>Parabéns, sua compra tem frete grátis !</FreeShipping>
          )}
        </TotalProducts>
        <ButtonBuy>Finalizar compra</ButtonBuy>
      </Content>
    </>
  );
}
