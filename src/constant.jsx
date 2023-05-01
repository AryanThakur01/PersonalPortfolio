import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));

const ALL_LINKS = {
  Home_Page: {
    PageName: "Home",
    pageLink: "/",
    view: Home,
  },
  About_Page: {
    PageName: "About",
    pageLink: "/about",
    view: About,
  },
  Skills_Page: {
    PageName: "Skills",
    pageLink: "/skills",
    view: Skills,
  },
  Projects_Page: {
    PageName: "Projects",
    pageLink: "/projects",
    view: Projects,
  },
};

export default ALL_LINKS;
