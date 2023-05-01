import { Box, Image, Tooltip } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Mylogo.png";
import ALL_LINKS from "../constant";
import menu from "../assets/logos/menu.png";
import NavigationModal from "./miscellaneous/NavigationModal";

const Navigation = ({ active, setActive }) => {
  const navigate = useNavigate();
  const Pages = [
    ALL_LINKS.Home_Page,
    ALL_LINKS.About_Page,
    ALL_LINKS.Skills_Page,
    ALL_LINKS.Projects_Page,
  ];
  useEffect(() => {
    setActive(active);
    // eslint-disable-next-line
  }, []);
  return (
    <Box position="fixed" width="100vw" zIndex={9999}>
      <Box
        bgColor="#2E4F4F52"
        mx="10px"
        p="10px"
        color="white"
        display="flex"
        borderRadius="10px"
        backdropFilter="blur(10px)"
        boxShadow="0px 10px 10px #0000003b"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mx="10px">
          <Image src={Logo} boxSize="22px" alt="A" />
        </Box>

        <NavigationModal active={active} setActive={setActive}>
          <Tooltip label="MENU">
            <Image
              src={menu}
              height="30px"
              filter="invert(100%)"
              cursor="pointer"
              display={{ base: "flex", md: "none" }}
              alt="X"
            />
          </Tooltip>
        </NavigationModal>

        <Box display={{ base: "none", md: "flex" }}>
          {Pages.map((item, i) => (
            <Box
              color={active === item.pageLink ? "#14cfd5" : "white"}
              mx="10px"
              key={i}
            >
              <Box
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.pageLink);
                  navigate(item.pageLink);
                }}
              >
                {item.PageName}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
