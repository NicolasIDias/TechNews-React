import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Box, useColorModeValue } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
