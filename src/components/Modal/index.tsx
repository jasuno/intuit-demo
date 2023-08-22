import React, { ReactElement } from "react";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { X } from "phosphor-react";

type ModalComponentProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  FooterContent?: ReactElement;
  BodyContent: ReactElement;
  subtitle?: string;
  footerJustify?: string;
  [x: string]: unknown;
};

const ModalComponent = ({
  onClose,
  isOpen,
  title,
  FooterContent,
  BodyContent,
  subtitle,
  footerJustify,
  ...rest
}: ModalComponentProps & Partial<ModalProps>) => (
  <Modal {...rest} onClose={onClose} size="4xl" isOpen={isOpen}>
    <ModalOverlay bg="whiteAlpha.600" backdropFilter="blur(5px)" />
    <ModalContent boxShadow="lg">
      <ModalHeader px={{ md: "16", base: "8" }} pt={{ md: "16", base: "8" }}>
        <Flex justifyContent="space-between">
          <Stack spacing="1">
            <Heading
              size={useBreakpointValue({ base: "xs", md: "sm" })}
              fontWeight="700"
            >
              {title}
            </Heading>
            <Text fontWeight="normal" fontSize={16} color="muted">
              {subtitle}
            </Text>
          </Stack>
          <Button onClick={onClose} p="0" variant="ghost">
            <X
              style={{ padding: 0 }}
              color="#718096"
              width="24px"
              height="24px"
            />
          </Button>
        </Flex>
        <Divider color="gray.300" pt="6" />
      </ModalHeader>
      <ModalBody px={{ md: "16", base: "8" }}>{BodyContent}</ModalBody>
      <Divider w="full" />
      <ModalFooter
        justifyContent={footerJustify}
        px={{ md: "16", base: "8" }}
        py={{ md: "8", base: "4" }}
      >
        {FooterContent}
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalComponent;
