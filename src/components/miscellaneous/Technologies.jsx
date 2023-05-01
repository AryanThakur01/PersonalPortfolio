import frontend from "../../assets/logos/designer.png";
import backend from "../../assets/logos/backend.png";
import database from "../../assets/logos/database.png";

const TechnologyList = [
  {
    skill: "html",
  },
  {
    skill: "css",
  },
  {
    skill: "js",
  },
  {
    skill: "reactJs",
  },
  {
    skill: "nodeJs",
  },
  {
    skill: "mongoDb",
  },
  {
    skill: "expressJs",
  },
];

export const workList = [
  {
    work: "frontend",
    link: frontend,
    techs: ["HTML", "CSS", "JAVASCRIPT", "REACTJS"],
    HTML: "/logoAssets/html.glb",
    CSS: "/logoAssets/css.glb",
    JAVASCRIPT: "/logoAssets/javascript.glb",
    REACTJS: "/logoAssets/reactJs.glb",
  },
  {
    work: "backend",
    link: backend,
    techs: ["NODEJS", "EXPRESS"],
    NODEJS: "/logoAssets/nodeJs.glb",
    EXPRESS: "/logoAssets/expressJs.glb",
  },
  {
    work: "database",
    link: database,
    techs: ["MONGODB"],
    MONGODB: "/logoAssets/mongodb.glb",
  },
];

export default TechnologyList;
