import Teste from 'pages/Teste';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" component={Teste} />
      </>
    </BrowserRouter>
  );
}
