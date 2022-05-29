import Cart from 'pages/Cart';
import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="contentWrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/above" component={() => <Cart url="https://api.jsonbin.io/b/6293ce8a449a1f3821f4c060" />} />
        <Route exact path="/below" component={() => <Cart url="https://api.jsonbin.io/b/6293ab25449a1f3821f49940" />} />
      </div>
    </BrowserRouter>
  );
}
