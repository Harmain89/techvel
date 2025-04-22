import { Home, Portfolio, Profile, SignIn, SignUp } from "@/pages";
import ProjectDetail from "./pages/project-detail";
import { Services } from "./pages/services";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
    show: true,
  },
  {
    name: "portfolio",
    path: "/portfolio",
    element: <Portfolio />,
    show: true,
  },
  // {
  //   name: "Services",
  //   path: "/services",
  //   element: <Services />,
  //   show: false,
  // },
  {
    name: "about us",
    path: "/about",
    element: <Profile />,
    show: true,
  },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
];

export default routes;
