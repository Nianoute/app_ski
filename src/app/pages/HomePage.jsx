// import PostList from "../components/post/PostList"
import {getAllPosts} from "../../setup/services/post.service"
import { useEffect, useState } from 'react';
import { weightOptions, styleOptions, sizeOptions } from "../constants/constant";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  const [style, setStyle] = useState("All");
  const [size, setSize] = useState(0);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  useEffect(() => {
    const filter = {
      search,
      minWeight: weightOptions[selectedWeightIndex].minWeight,
      maxWeight: weightOptions[selectedWeightIndex].maxWeight,
      style,
      size,
      onlyAvailable,
    };
    getAllPosts(filter)
      .then((posts) => {
        setPosts([...posts]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, selectedWeightIndex, style, size, onlyAvailable]);


    return (
        <div>
            <h1>Liste des posts</h1>
            {posts?.length === 0 && (
            <div>Aucun résultat</div>
            )}
                    {posts.map((post) => (
                        <div>{post?.title}</div>
                ))}
        </div>
    )
}

export default HomePage