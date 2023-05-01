import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      paddingBlock="50vh"
      marginInline="20px"
      color="white"
      fontWeight="bold"
    >
      <Box>
        <Box fontFamily="'Sriracha', cursive" fontSize="55px">
          <Text textAlign="center" data-aos="fade-right">
            About Me
          </Text>
        </Box>
        <Box
          mt="50vh"
          fontSize="23px"
          color="whiteAlpha.600"
          display="flex"
          flexDir="column"
          fontFamily="'DM Serif Display', serif"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <p>
            Welcome to my personal portfolio website, where I showcase my
            skills, achievements, and experiences in Programming.
          </p>
          <p>
            I'm passionate about Web Development, and I believe in LEARNING BY
            DOING.
          </p>
          <p>
            Please take a moment to explore my portfolio, and feel free to
            contact me for any inquiries or collaborations.
          </p>
        </Box>
        <Button
          mt="25px"
          float="right"
          fontFamily="'DM Serif Display', serif"
          colorScheme="green"
          data-aos="flip-left"
          data-aos-duration="1000"
          onClick={() => {
            navigate("/about");
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
