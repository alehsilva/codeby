/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import valueBelowData from "../../api/abaixo-10-reais.json";
import valueAboveData from "../../api/acima-10-reais.json";
import { ResponseJson } from "./interface";

export default function CarrinhoDeCompras(): JSX.Element {
  const [productsAbove, setProductsAbove] = useState<ResponseJson>();
  const [productsBelow, setProductsBelow] = useState<ResponseJson>();

  useEffect(() => {
    setProductsAbove(valueAboveData);
    setProductsBelow(valueBelowData);
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {productsBelow?.items.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}
