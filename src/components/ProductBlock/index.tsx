import { Content, Img } from "./styles";
import { ProductBlockProps } from "./interface";
import { numberToReal } from '../../util/numberToReal';

export default function ProductBlock({
  id,
  productName,
  productPrice,
  productImage,
  productPriceDiscount,
  removeProduct
}: ProductBlockProps): JSX.Element {

  return (
    <Content>
      <Img src={productImage} />
      <div>
        <h1>{productName}</h1>
        <h2>{numberToReal(productPrice)}</h2>
        <h3>{numberToReal(productPriceDiscount)}</h3>
        <h4 onClick={() => removeProduct(id)}>Remover</h4>
      </div>
    </Content>
  );
}
