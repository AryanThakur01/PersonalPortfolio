import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

const ProjectsCard = ({
  difficulty,
  image,
  projectName,
  description,
  location,
  sourceCode,
}) => {
  const FLEXROWPROPERTIES = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box
      data-aos="flip-left"
      data-aos-duration="500"
      // _hover={{ transform: "scale(1.1)" }}
      fontFamily="'DM Serif Display', serif"
      border="1px solid gray"
    >
      <Box
        display="flex"
        flexDir="column"
        width="226px"
        padding="10px"
        height="280px"
      >
        <Box
          width="30px"
          height="30px"
          borderRadius="50%"
          mt="-25px"
          bgColor={
            difficulty === "h"
              ? "red.500"
              : difficulty === "m"
              ? "orange.500"
              : difficulty === "e"
              ? "green.500"
              : "white"
          }
          {...FLEXROWPROPERTIES}
        />
        <Box alignSelf="center" pt="10px">
          <Image src={image} height="100px" width="200px" />
        </Box>
        <Box fontSize="25px" fontFamily="'Sriracha', cursive" mt="10px">
          {projectName}
        </Box>
        <Box color="gray">{description}</Box>
      </Box>
      <Box display="flex" gap="1" p="2px">
        <Button
          justifySelf="self-end"
          width="100%"
          borderRadius="0"
          colorScheme="blackAlpha"
          _hover={{ color: "lightgreen" }}
          onClick={() => {
            window.open(location);
          }}
        >
          Website
        </Button>
        <Button
          justifySelf="self-end"
          width="100%"
          borderRadius="0"
          colorScheme="blackAlpha"
          _hover={{ color: "lightgreen" }}
          onClick={() => {
            window.open(sourceCode);
          }}
        >
          Code
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectsCard;
