import { BrowserRouter, Route } from 'react-router-dom';
import CarrinhoDeCompras from 'pages/CarrinhoDeCompras';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="contentWrapper">
        <Route exact path="/" component={CarrinhoDeCompras} />
      </div>
    </BrowserRouter>
  );
}
