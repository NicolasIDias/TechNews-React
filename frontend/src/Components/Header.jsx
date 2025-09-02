import {
  HStack,
  Button,
  Box,
  VStack,
  Input,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <VStack>
        <HStack>
          <p>
            TechNews Learn C/C++, C#, Java, and explore the latest technologies
            in the market.
          </p>
        </HStack>
        <VStack>
          <Box>
            <Link to={"/"}>
              <Button colorScheme="blue">Home</Button>
            </Link>
            <Link to={"/recents"}>
              <Button colorScheme="blue">Recents</Button>
            </Link>
            <Link to={"/about"}>
              <Button colorScheme="blue">About</Button>
            </Link>
          </Box>
          <Box>
            <Input placeholder="Search" />
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Header;
