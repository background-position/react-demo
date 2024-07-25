import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import UseMEmo from "../pages/use-memo";
import Memo from "../pages/memo";
import UseCallback from "../pages/use-callback";
import ChildMethod from "../pages/child-method";
import signature from "../pages/test";
const myRouter = createBrowserRouter([
  {
    path: "/",
    Component: signature,
  },
  {
    path: "/memo",
    Component: Memo,
    children: [],
  },
  {
    path: "/use-memo",
    Component: UseMEmo,
  },
  {
    path: "/use-callback",
    Component: UseCallback,
  },
  {
    path: "/child-method",
    Component: ChildMethod,
  },
]);
export default myRouter;
