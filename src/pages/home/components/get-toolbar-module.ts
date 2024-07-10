import Divider from "./ui/divider";
import Action from "./ui/action-button";
const App = () => {
  return [
    { name: "divider", defaultComponent: Divider },
    { name: "action", defaultComponent: Action },
  ];
};

export default App;
