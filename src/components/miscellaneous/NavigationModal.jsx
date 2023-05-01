import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ALL_LINKS from "../../constant";

const NavigationModal = ({ children, active, setActive }) => {
  const navigate = useNavigate();
  const Pages = [
    ALL_LINKS.Home_Page,
    ALL_LINKS.About_Page,
    ALL_LINKS.Skills_Page,
    ALL_LINKS.Projects_Page,
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={() => {
          if (!isOpen) onOpen();
          else onClose();
        }}
      >
        {children}
      </span>

      <Modal size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="blackAlpha.500" backdropFilter="blur(5px)">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <Box
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              height="70vh"
            >
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
                    fontSize="30px"
                    fontFamily="'Sriracha', cursive"
                  >
                    {item.PageName}
                  </Box>
                  <Box>{console.log(item)}</Box>
                </Box>
              ))}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavigationModal;
