import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
  return (
    <Box>
      <VStack>
        <Text fontWeight={"bold"} fontSize={"1xl"}>
          {" "}
          {data.title}{" "}
        </Text>
        <Text> {data.description} </Text>
        <Text> {data.time} </Text>
        <Link to={data.slug} ><Button>Read More</Button></Link>
      </VStack>
    </Box>
  );
};

export default PostCard;
