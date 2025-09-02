import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Box, useColorModeValue } from '@chakra-ui/react'
import RecentsPage from "./Pages/RecentsPage";
import AboutPage from "./Pages/AboutPage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recents" element={<RecentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:slug" element={<PostPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
