import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import React from "react";
import LogoForModal from "./LogoForModal";

const TechnologyModal = ({ isOpen, onClose, technology }) => {
  const linksList = {
    html: "/logoAssets/html.glb",
    css: "/logoAssets/css.glb",
    nodeJs: "/logoAssets/nodeJs.glb",
    js: "/logoAssets/javascript.glb",
    reactJs: "/logoAssets/reactJs.glb",
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(100px)" />
        <ModalContent
          bgColor="blackAlpha.500"
          backdropFilter="blur(10px)"
          mt="100px"
          color="white"
        >
          <ModalHeader>{technology.toUpperCase()}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              {linksList[technology] ? (
                <LogoForModal link={linksList[technology]} />
              ) : (
                <></>
              )}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TechnologyModal;
