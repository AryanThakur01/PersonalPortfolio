import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import DeveloperCardModal from "./miscellaneous/DeveloperCardModal";

import { workList } from "./miscellaneous/Technologies";

const DeveloperCard = ({ type }) => {
  return (
    <Box paddingBlock="50vh">
      <Text
        color="white"
        fontSize={{ base: "35px", sm: "45px", md: "55px" }}
        fontFamily="'Sriracha', cursive"
        textAlign="center"
        data-aos="fade-right"
      >
        Web Development Stack
      </Text>
      <Box
        display="flex"
        gap="25px"
        flexWrap="wrap"
        mt="50vh"
        justifyContent="space-evenly"
      >
        {workList.map((item, i) => {
          return (
            <DeveloperCardModal skill={item} key={i}>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                color="white"
                border="2px solid white"
                cursor="pointer"
                transition="all 0.5s ease"
                p="10px"
                _hover={{ transform: "scale(1.1)" }}
                data-aos="flip-left"
              >
                <Image src={item.link} height="10rem" />
                <Box>{item.work.toUpperCase()}</Box>
              </Box>
            </DeveloperCardModal>
          );
        })}
      </Box>
    </Box>
  );
};

export default DeveloperCard;
