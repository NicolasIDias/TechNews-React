import { useEffect } from "react"
import Header from "../Components/Header"
import { useSearch } from '../store/post'

const HomePage = () => {
  
  const [fetchPosts, Posts] = useSearch()

  useEffect(()=> {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div>
      <Header />
      {Posts.map((post) => (
            <ProductCard key={post.id} product={post} />
          ))}
    </div>
  )
}

export default HomePage