import { HStack, Button, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack justify={"space-around"}>
      <Box>
        <Button colorScheme="blue">Button</Button>
        <Button colorScheme="blue">Budtton</Button>
      </Box>
      <Box>
        <Button colorScheme='blue'>Button</Button>
      </Box>
    </HStack>
  );
};

export default Header;
