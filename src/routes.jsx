import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "portfolio",
    path: "/porfolio",
    element: <Profile />,
  },
  {
    name: "services",
    path: "/services",
    element: <Profile />,
  },
  {
    name: "about us",
    path: "/about",
    element: <Profile />,
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
