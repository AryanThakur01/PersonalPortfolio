import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LogoForModal from "./LogoForModal";

const DeveloperCardModal = ({ children, skill }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(50px)" />
        <ModalContent bgColor="blackAlpha.500" color="white" backdropFilter="blur(80px)">
          <ModalHeader>{skill.work.toUpperCase()}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            {skill.techs.map((s) => {
              return (
                <Box display="flex" alignItems="center">
                  <Box>{s}</Box>
                  <Box>
                    {skill[s] ? (
                      <LogoForModal link={skill[s]} />
                    ) : (
                      <Box>ERROR LOADING!!</Box>
                    )}
                  </Box>
                </Box>
              );
            })}
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

export default DeveloperCardModal;
