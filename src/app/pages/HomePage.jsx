// import PostList from "../components/post/PostList"
import {getAllPost} from "../../setup/services/post.service"
import { useEffect, useState } from 'react';

const HomePage = () => {

    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchAllPosts()
      console.log(fetchAllPosts())
    }, []);
  
    const fetchAllPosts = async () => {
      try{
        const response = await getAllPost()
        setPosts([...response.products]);
      } catch(err){
        console.log(err);
      }
    }


    return (
        <div>
            <h1>Liste des posts</h1>
            {posts?.length === 0 && (
            <div>Aucun résultat</div>
            )}
                    {posts.map((post) => (
                        <div>{post.title}</div>
                ))}
            {/* <PostList></PostList> */}
        </div>
    )
}

export default HomePage