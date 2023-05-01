import { Box } from "@chakra-ui/react";
import React, { lazy } from "react";
import Typewriter from "typewriter-effect";
import {
  IntroAnimate,
  heroAnimate,
  heroAnimateSmall,
} from "../animations/HomePage";
import { motion } from "framer-motion";
const Navigation = lazy(() => import("../components/Navigation"));
const Contacts = lazy(() => import("../components/Contacts"));
const Copyright = lazy(() => import("../components/Copyright"));
const Hero = lazy(() => import("../components/Hero"));
const SkillSection = lazy(() =>
  import("../components/HomePageSections/SkillSection")
);
const AboutSection = lazy(() =>
  import("../components/HomePageSections/AboutSection")
);

const Home = ({ active, setActive }) => {
  setActive("/");
  return (
    <Box pt="10px">
      <Navigation active={active} setActive={setActive} />
      {/* LANDING SECTION */}
      <Box
        color="#cbe4de"
        pt="90px"
        paddingInline={{ sm: "50px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          fontSize="40px"
          borderLeft="3px solid #02ffc2"
          paddingInline="10px"
          borderBottomLeftRadius="10px"
          width={{ base: "fit-content", md: "400px" }}
          fontFamily="'Sriracha', cursive"
          as={motion.div}
          animation={IntroAnimate}
          marginBottom="80px"
        >
          <Box
            height="10px"
            width="10px"
            bgColor="#02ffc2"
            borderRadius="50%"
            marginLeft="-16.52px"
          ></Box>
          <Box>
            Hi! I am{" "}
            <Box display="inline-block" color="#A0FFE8">
              Aryan
            </Box>
          </Box>
          <Box>
            A{" "}
            <Box display="inline-block" color="#02FFC2">
              <Typewriter
                options={{
                  strings: ["Developer", "Designer", "Full-Stack"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* <ModelHomeCanvas /> */}
        <Box
          as={motion.div}
          animation={{ md: heroAnimate, base: heroAnimateSmall }}
        >
          <Hero />
        </Box>
      </Box>
      <AboutSection />
      <SkillSection />
      <Contacts />
      <Copyright />
    </Box>
  );
};

export default Home;
