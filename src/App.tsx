import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./globals.css";
const App = () => {
  const { routes } = router;
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
