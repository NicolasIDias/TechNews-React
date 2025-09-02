import { useParams } from "react-router-dom";

const PostPage = () => {
  const { slug } = useParams();

  return <div>{slug}</div>;
};

export default PostPage;
