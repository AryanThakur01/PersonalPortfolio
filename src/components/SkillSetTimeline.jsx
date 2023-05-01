import { Box, Image } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Reactjs from "../assets/TechnologyIcons/React.png";
import html from "../assets/TechnologyIcons/HTML.png";
import css from "../assets/TechnologyIcons/CSS.png";
import js from "../assets/TechnologyIcons/JS.png";
import node from "../assets/TechnologyIcons/node.png";

const SkillSetTimeline = () => {
  return (
    <Box
      borderTop="3px solid #063a3c"
      borderBottom="3px solid #063a3c"
      marginInline="10px"
      borderRadius="10px"
      fontFamily="'DM Serif Display', serif"
      fontSize="18px"
    >
      <VerticalTimeline lineColor="#063a3c">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c3333", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #2c3333" }}
          date="October, 2022"
          iconStyle={{ background: "#161717" }}
          icon={<Image src={html} />}
        >
          <Box color="white" fontSize="25px" fontFamily="'Sriracha', cursive">
            HTML
          </Box>
          <Box paddingInlineStart="30px" color="whiteAlpha.700">
            <ul style={{ listStyleType: "circle" }}>
              <li>Proficient with HTML and its core principles</li>
              <li>
                Skilled in writing semantic HTML code that is accessible and
                responsive across different devices and platforms
              </li>
              <li>
                Experienced in creating user-friendly and visually appealing web
                pages using HTML and CSS
              </li>
              <li>
                Familiar with front-end frameworks like Tailwind and BootStrap
              </li>
              <li>
                Adept in working with web fonts, images, and other multimedia
                assets
              </li>
              <li>
                Adept in debugging HTML code using developer tools and browser
                extensions
              </li>
            </ul>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c3333", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #2c3333" }}
          date="November, 2022"
          iconStyle={{ background: "#161717" }}
          icon={<Image src={css} height="40px" m={{ lg: "10px" }} />}
        >
          <Box color="white" fontSize="25px" fontFamily="'Sriracha', cursive">
            CSS Developer
          </Box>
          <Box paddingInlineStart="30px" color="whiteAlpha.700">
            <ul style={{ listStyleType: "circle" }}>
              <li>Proficient in CSS and its core principles</li>
              <li>Skilled in writing efficient and maintainable CSS code</li>
              <li>
                Knowledgeable in CSS3, including animations, transitions, and
                transformations
              </li>
              <li>
                Experienced in creating responsive and mobile-friendly layouts
                using CSS frameworks like Bootstrap, Tailwind
              </li>
            </ul>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c3333", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #2c3333" }}
          date="Januray, 2023"
          iconStyle={{ background: "#161717" }}
          icon={<Image src={js} color="blue" />}
        >
          <Box color="white" fontSize="25px" fontFamily="'Sriracha', cursive">
            JAVASCRIPT DEVELOPER
          </Box>
          <Box paddingInlineStart="30px" color="whiteAlpha.700">
            <ul style={{ listStyleType: "circle" }}>
              <li>
                Proficient in JavaScript programming language and its core
                concepts
              </li>
              <li>
                Skilled in creating reusable JavaScript functions and modules
              </li>
              <li>Experienced in working with javascript react framework</li>
              <li>
                Knowledgeable in front-end web technologies such as HTML, CSS,
                and web APIs
              </li>
              <li>
                Familiar with back-end web development using Node.js and popular
                web frameworks such as Express.js
              </li>
              <li>
                Understanding of common design patterns in JavaScript and their
                application in various contexts
              </li>
              <li>
                Ability to write efficient, scalable, and maintainable code in
                JavaScript
              </li>
            </ul>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c3333", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #2c3333" }}
          date="Januray, 2023"
          iconStyle={{ background: "#161717" }}
          icon={<Image src={Reactjs} />}
        >
          <Box color="white" fontSize="25px" fontFamily="'Sriracha', cursive">
            REACTJS
          </Box>
          <Box paddingInlineStart="30px" color="whiteAlpha.700">
            <ul style={{ listStyleType: "circle" }}>
              <li>Proficient in ReactJS library and its core principles</li>
              <li>Skilled in creating reusable ReactJS components</li>
              <li>Experienced in client-side routing using React Router</li>
              <li>Proficient in HTML, CSS, and JavaScript</li>
              <li>
                Knowledgeable in front-end frameworks like tailwind and Chakra
                UI
              </li>
            </ul>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c3333", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #2c3333" }}
          date="Januray, 2023"
          iconStyle={{ background: "#161717" }}
          icon={<Image src={node} />}
        >
          <Box color="white" fontSize="25px" fontFamily="'Sriracha', cursive">
            NODEJS
          </Box>
          <Box paddingInlineStart="30px" color="whiteAlpha.700">
            <ul style={{ listStyleType: "circle" }}>
              <li>
                Proficient in Node.js and its core modules, including the
                Node.js event loop, streams, and file system.
              </li>
              <li>
                Skilled in creating scalable and efficient server-side
                applications using Node.js and popular web framework Express.js.
              </li>
              <li>Familiarity with MySql database</li>
            </ul>
          </Box>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default SkillSetTimeline;
