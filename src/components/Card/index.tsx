import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children, ...rest }: CardProps & BoxProps) => (
  <Box
    as="section"
    color="gray.600"
    bg="bg-surface"
    borderRadius="lg"
    p={{ base: "4", md: "6" }}
    border="1px"
    borderColor="gray.200"
    {...rest}
  >
    {children}
  </Box>
);

export default Card;
