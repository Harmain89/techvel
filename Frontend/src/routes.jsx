import { Home, Portfolio, Profile, SignIn, SignUp } from "@/pages";
import ProjectDetail from "./pages/project-detail";
import { Services } from "./pages/services";
import About from "./pages/about";
import GenAi from "./pages/genai";
import Contact from "./pages/contact";
import WebDev from "./pages/webdev";

export const routes = [
  {
    name: "home",
    path: "/",
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
    name: "services",
    path: "/services",
    element: <Services />,
    show: true,
  },
  {
    name: "gen ai",
    path: "/gen-ai",
    element: <GenAi />,
    show: true,
  },
  {
    name: "about us",
    path: "/about",
    element: <About />,
    show: true,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
    show: true,
  },
  // {
  //   name: "detail",
  //   path: "/explore",
  //   element: <ProjectDetail />,
  //   show: true,
  // },
 
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
