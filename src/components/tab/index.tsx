import React, { useState } from "react";
function withStyles(Component: React.ComponentType<any>) {
  return (props: any) => {
    const style = { padding: "0.2rem", margin: "1rem" };
    return <Component style={style} {...props} />;
  };
}

const Button = () => <button>Click me!</button>;
const Text = () => <p>Hello World!</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);
const App = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [<div>tab1</div>, <div>tab2</div>, <div>tab3</div>];

  return (
    <div>
      <button onClick={() => setCurrentTab(0)}>tab1</button>
      <button onClick={() => setCurrentTab(1)}>tab2</button>
      <button onClick={() => setCurrentTab(2)}>tab3</button>
      <div>{tabs[currentTab]}</div>
    </div>
  );
};
export default App;
