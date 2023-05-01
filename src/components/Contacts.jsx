import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import contact from "../assets/logos/call.png";
import location from "../assets/logos/location.png";
import mail from "../assets/logos/envelope.png";

const Contacts = () => {
  const contactCardStyle = {
    transition: "all 0.2s ease-out",
    mb: "20px",
    color: "white",
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    width: "200px",
    cursor: "pointer",
    _hover: { transform: "scale(1.1)", boxShadow: "2px 2px 5px #d7d7d773" },
    bgColor: "#3c3c3c",
    height: "100px",
    "data-aos": "flip-left",
    "data-aos-duration": "1000",
  };
  const imageStyle = {
    height: "50px",
    filter: "invert(100%)",
    mb: "20px",
    mt: "-25px",
    transition: "all 0.2s ease-out",
    _hover: { transform: "scale(1.2)" },
  };
  return (
    <Box
      paddingBlock="50vh"
      bgColor="black"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      paddingInline="20px"
      color="white"
      fontFamily="'DM Serif Display', serif"
      fontSize="17px"
    >
      <Box>
        <Text
          fontSize={{ base: "46px", sm: "80px" }}
          textDecoration="underline"
          fontFamily="'Sriracha', cursive"
          data-aos="fade-right"
        >
          Contact Me
        </Text>
      </Box>
      <Box
        mt="50vh"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="60px"
        alignItems={{ base: "center", md: "unset" }}
        flexWrap="wrap"
        w="100%"
      >
        <a href="https://www.google.com/maps/dir//ITBP+Rd,+Sailok,+Kanwali,+Dehradun,+Uttarakhand+248146/@30.3072598,77.9983896,417m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39092a378f2e3a2d:0xd186341d6fdb0b16!2m2!1d77.9987184!2d30.3063801">
          <Box {...contactCardStyle}>
            <Image src={location} {...imageStyle}></Image>
            <Box>
              <p>Seemadwar, Dehradun</p>
              <p>Uttrakhand</p>
            </Box>
          </Box>
        </a>
        <a href="tel:8077002445">
          <Box {...contactCardStyle}>
            <Image src={contact} {...imageStyle}></Image>
            <span>8077002445</span>
          </Box>
        </a>
        <a href="mailto:aryan197297@gmail.com">
          <Box {...contactCardStyle}>
            <Image src={mail} {...imageStyle} />
            <Box>aryan197297@gmail.com</Box>
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Contacts;
