import { Home, Portfolio, Profile, SignIn, SignUp } from "@/pages";
import ProjectDetail from "./pages/project-detail";

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
  {
    name: "Explore",
    path: "/explore",
    element: <ProjectDetail />,
    show: false,
  },
  {
    name: "services",
    path: "/services",
    element: <Profile />,
    show: true,
  },
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
