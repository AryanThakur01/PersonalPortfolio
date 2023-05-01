import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillCards from "./Cards/SkillCards";
import web from "../../assets/skills/web.jpg";

const SkillSection = () => {
  const skillSection = [
    {
      img: web,
      header: "WEB DEVELOPMENT",
      skillList: [
        ["HTML", "CSS", "JS", "React Js"],
        ["Node Js", "Express Js"],
        ["MongoDb"],
      ],
      pageLink: "/skills",
    },
  ];
  return (
    <Box
      paddingBlock="50vh"
      paddingInline="20px"
      color="white"
      fontWeight="bold"
      bgColor="rgba(22,23,23,1)"
    >
      <Box
        fontFamily="'Sriracha', cursive"
        fontSize="55px"
        bgColor="rgba(22,23,23,1)"
      >
        <Text
          cursor="pointer"
          // onClick={() => navigate("/skills")}
          textAlign="center"
          data-aos="fade-right"
        >
          Skills
        </Text>
      </Box>
      {skillSection.map((item, i) => (
        <Box
          mt="50vh"
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          key={i}
          display={{ base: "flex", sm: "block" }}
          justifyContent="center"
        >
          <SkillCards {...item} />
        </Box>
      ))}
      <Box fontSize="23px" color="whiteAlpha.600"></Box>
    </Box>
  );
};

export default SkillSection;
