import { Menu } from "./styles";
import { useHistory } from "react-router-dom";

export default function Home(): JSX.Element {
  const history = useHistory();

  return (
    <Menu>
      <div onClick={() => history.push('/above')}>Acima 10 Reais</div>
      <div onClick={() => history.push('/below')}>Abaixo 10 Reais</div>
    </Menu>
  )
}