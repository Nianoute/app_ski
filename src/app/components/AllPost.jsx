import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";
import {getAllPosts} from "../../setup/services/post.service"
import { useEffect, useState } from 'react';
import { weightOptions, styleOptions, sizeOptions } from "../constants/constant";
import AllCard from "../components/AllCard";

const AllPost = () => {
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
      <Box>
        <Grid container spacing={2}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4}>
              <Link to={`/${post?._id}`} style={{ textDecoration: "none" }}>
                <AllCard post={post} />
              </Link>
          </Grid>
        ))}
        {posts?.length === 0 && (
          <Typography variant="p" sx={{ textAlign: "center" }}>
            Aucun résultat
          </Typography>
         )}
        </Grid>
      </Box>
    )
}

export default AllPost