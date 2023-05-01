import { Box, Text } from "@chakra-ui/react";
import React, { lazy, useEffect } from "react";
const Contacts = lazy(() => import("../components/Contacts"));
const Copyright = lazy(() => import("../components/Copyright"));
const Navigation = lazy(() => import("../components/Navigation"));
const SkillSetTimeline = lazy(() => import("../components/SkillSetTimeline"));

const About = ({ active, setActive }) => {
  useEffect(() => {
    setActive("/about");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Box pt="10px">
        <Navigation active={active} setActive={setActive} />
        <Box
          position="absolute"
          zIndex={1}
          top="-60px"
          left="-50px"
          height="300px"
          width="300px"
          border="3px solid #063a3c"
          borderRadius="30px"
        ></Box>
        <Box
          position="absolute"
          zIndex={1}
          top={{ base: "620px", sm: "500px" }}
          visibility={{ base: "hidden", md: "visible" }}
          display={{ base: "none", md: "unset" }}
          left="-50px"
          height="300px"
          width="300px"
          border="3px solid #063a3c"
          borderRadius="30px"
        ></Box>
        <Box
          width="98vw"
          border="3px solid #0e8388"
          margin="250px auto"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontSize="40px"
          color="whiteAlpha.700"
          borderRadius="30px"
          paddingBlock="50px"
          fontFamily="'Sriracha', cursive"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p>LOVE WHAT YOU DO,</p>
          <p>DO WHAT YOU LOVE</p>
        </Box>
      </Box>
      <Box
        paddingBlock="50vh"
        width="100vw"
        paddingInline="20px"
        fontFamily="'DM Serif Display', serif"
      >
        <Text
          fontSize="55px"
          color="white"
          fontWeight="bold"
          fontFamily="'Sriracha', cursive"
          textAlign="center"
          data-aos="fade-right"
        >
          Introduction
        </Text>
        <Box
          fontSize="23px"
          color="whiteAlpha.700"
          data-aos="flip-left"
          data-aos-duration="1000"
          mt="50vh"
        >
          <p>
            Welcome to my website! My name is Aryan Thakur, and I am a
            professional full-stack web developer with a passion for creating
            innovative and user-friendly web experiences. I have developed a
            diverse set of skills and expertise that enable me to design and
            develop websites and web applications that'd meet the unique need of
            my clients
          </p>
          <p>
            My proficiency in multiple programming languages and frameworks,
            including HTML, CSS, JavaScript, React, and Node.js, allows me to
            develop both the front-end and back-end of websites and web
            applications. I am also adept at database management, server-side
            scripting
          </p>
        </Box>
      </Box>
      <Box>
        <SkillSetTimeline />
      </Box>
      <Contacts />
      <Copyright />
    </>
  );
};

export default About;
