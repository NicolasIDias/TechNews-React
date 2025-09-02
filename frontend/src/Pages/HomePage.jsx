import { useEffect } from "react";
import Header from "../Components/Header";
import { useSearch } from "../store/post";
import PostCard from "../Components/PostCard";

const HomePage = () => {
  const { fetchPosts, Posts } = useSearch();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <Header />
      {Posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
};

export default HomePage;
