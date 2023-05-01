import { Box, useDisclosure } from "@chakra-ui/react";
import React, { lazy, useEffect, useState } from "react";
const Contacts = lazy(() => import("../components/Contacts"));
const Copyright = lazy(() => import("../components/Copyright"));
const DeveloperCard = lazy(() => import("../components/DeveloperCard"));
const TechnologyModal = lazy(() =>
  import("../components/miscellaneous/TechnologyModal")
);
const Navigation = lazy(() => import("../components/Navigation"));
const SkillCloud = lazy(() => import("../components/SkillCloud"));

const Skills = ({ active, setActive }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [technology, setTechnology] = useState("");

  useEffect(() => {
    setActive("/skills");
    // eslint-disable-next-line
  }, []);

  const showTechnology = (name) => {
    setTechnology(name);
    onOpen();
  };
  return (
    <Box pt="10px">
      <Navigation active={active} setActive={setActive} />
      <Box fontFamily="'DM Serif Display', serif">
        <Box
          color="white"
          mt="80px"
          marginInline="30px"
          display="flex"
          flexWrap="wrap"
          height="500px"
        >
          <TechnologyModal
            isOpen={isOpen}
            onClose={onClose}
            technology={technology}
          />
          <SkillCloud onOpen={showTechnology} />
        </Box>
        <DeveloperCard />
      </Box>
      <Contacts />
      <Copyright />
    </Box>
  );
};

export default Skills;
