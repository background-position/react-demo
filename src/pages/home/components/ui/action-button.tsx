import { Button } from "../../../../components";

export interface Props {
  id: string;
  name: string;
  [key: string]: unknown;
}

const App = (props: Props) => {
  const { name } = props;
  return <Button {...props}>{name}</Button>;
};

export default App;
