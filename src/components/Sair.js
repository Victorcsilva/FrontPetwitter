import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function ModalSair() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="Cyan 400" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="ghost">Sair</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalSair;
