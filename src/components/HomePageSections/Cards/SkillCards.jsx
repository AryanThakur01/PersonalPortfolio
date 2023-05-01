import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SkillCards = ({ img, header, skillList, pageLink }) => {
  const navigate = useNavigate();
  return (
    <Box
      fontFamily="'DM Serif Display', serif"
      bgColor="#0d0d0d"
      display="flex"
      justifyContent={{ base: "center", sm: "unset" }}
      flexWrap="wrap"
      padding="10px"
      gap="10px"
      transition="0.2s all ease"
      _hover={{
        // transform: "scale(1.01)",
        cursor: "pointer",
        boxShadow: "0px 2px 5px 2px black",
      }}
      onClick={() => navigate(pageLink)}
      width={{ base: "260px", sm: "unset" }}
    >
      <Image src={img} height="150px" />
      <Box display="inline-block">
        <Box fontSize="25px">{header}</Box>
        {skillList.map((item, i) => (
          <Box display="flex" gap="10px" key={i} mt="5px">
            {item.map((subItem, subKey) => (
              <Badge key={subKey}>{subItem}</Badge>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCards;
