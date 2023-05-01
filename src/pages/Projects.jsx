import { Box, Text } from "@chakra-ui/react";
import React, { lazy, useEffect } from "react";
import erp from "../assets/projects/erp.png";
import portfolio from "../assets/projects/portfolio.png";
import cashRegister from "../assets/projects/cashRegister.png";
import plCalculator from "../assets/projects/plCalculator.png";
import imageResizer from "../assets/projects/imageResizer.png";
import taskManager from "../assets/projects/taskManager.png";
const ProjectsCard = lazy(() => import("../components/Cards/ProjectsCard"));
const Contacts = lazy(() => import("../components/Contacts"));
const Copyright = lazy(() => import("../components/Copyright"));
const Navigation = lazy(() => import("../components/Navigation"));

const Projects = ({ active, setActive }) => {
  const projects = [
    {
      name: "MERN Stack Projects",
      list: [
        {
          difficulty: "h",
          image: erp,
          projectName: "ERP",
          description:
            "A project need the knowledge of frontend, backend and database",
          location: "https://erp-self.netlify.app",
          sourceCode: "https://github.com/AryanThakur01/ERP",
        },
      ],
    },
    {
      name: "Intermediate Projects",
      list: [
        {
          difficulty: "m",
          image: portfolio,
          projectName: "PORTFOLIO",
          description:
            "An Intermediate level Project, Need a good grip of html, css and javascript",
          location: "https://stellar-empanada-9c894c.netlify.app/",
          sourceCode: "https://github.com/AryanThakur01/portfolio",
        },
        {
          difficulty: "m",
          image: taskManager,
          projectName: "Task Manager",
          description: "A Backend Specific Project",
          location: "https://completeit.netlify.app/",
          sourceCode:
            "https://github.com/AryanThakur01/Web_Dev/tree/master/L3_WebDevProjects/To-do-list",
        },
      ],
    },
    {
      name: "Mini Projects",
      list: [
        {
          difficulty: "e",
          image: cashRegister,
          projectName: "CASH REGISTER",
          description:
            "A project to calculate the notes to be given when bill payed",
          location:
            "https://aryanthakur01.github.io/byteProtocol-problems/static/cashRegister.html",
          sourceCode: "https://github.com/AryanThakur01/byteProtocol-problems",
        },
        {
          difficulty: "e",
          image: plCalculator,
          projectName: "P-L Calculator",
          description:
            "A project to calculate the notes to be given when bill payed",
          location:
            "https://aryanthakur01.github.io/byteProtocol-problems/static/profitLossCalculator.html",
          sourceCode: "https://github.com/AryanThakur01/byteProtocol-problems",
        },
        {
          difficulty: "e",
          image: imageResizer,
          projectName: "Image Resizer",
          description: "A random image resizer project",
          location:
            "https://aryanthakur01.github.io/byteProtocol-problems/static/imageResizer.html",
          sourceCode: "https://github.com/AryanThakur01/byteProtocol-problems",
        },
      ],
    },
  ];
  useEffect(() => {
    setActive("/projects");
    // eslint-disable-next-line
  }, []);
  return (
    <Box pt="10px">
      <Navigation active={active} setActive={setActive} />
      <Box
        paddingBlock="50vh"
        color="white"
        fontFamily="'DM Serif Display', serif"
        paddingInline="20px"
      >
        <Text
          mb="90vh"
          fontSize={{ base: "35px", sm: "45px", md: "55px" }}
          fontFamily="'Sriracha', cursive"
          textAlign="center"
        >
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            W
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            E
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            B
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            &nbsp;
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            D
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            E
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            V
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            E
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            L
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            O
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            P
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            E
          </Box>
          <Box
            display="inline-block"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            R
          </Box>
          {/* WEB DEVELOPER */}
        </Text>
        {projects.map((item, i) => (
          <Box key={i}>
            <Text
              fontSize={{ base: "35px", sm: "45px", md: "55px" }}
              fontFamily="'Sriracha', cursive"
              textAlign="center"
              data-aos="fade-right"
            >
              {item.name}
            </Text>
            <Box
              display="flex"
              justifyContent="space-evenly"
              flexWrap="wrap"
              gap="20px"
              marginBlock="50vh"
            >
              {item.list.map((subItem, j) => (
                <ProjectsCard {...subItem} key={j} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Contacts />
      <Copyright />
    </Box>
  );
};

export default Projects;
