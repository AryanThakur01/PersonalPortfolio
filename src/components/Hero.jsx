import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import heroImage from "../assets/hero.jpg";
import { heroAnimateAllsizeInfinite } from "../animations/HomePage";

const Hero = () => {
  return (
    <>
      <Box
        clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        as={motion.div}
        animation={heroAnimateAllsizeInfinite}
      >
        <Image src={heroImage} height="300px" />
      </Box>
    </>
  );
};

export default Hero;
