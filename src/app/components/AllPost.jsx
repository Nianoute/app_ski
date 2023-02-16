import {
  Box,
  Typography,
  Grid,
  FormControl,
  Select,
  TextField,
  MenuItem,
  InputLabel
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleWeight = (e) => {
    setSelectedWeightIndex(e.target.value);
  };

  const handleStyle = (e) => {
    setStyle(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleOnlyAvailable = (e) => {
    setOnlyAvailable(e.target.checked);
  };


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
      <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", mb: 4, overflowX: "auto", pt: 1 }}>
        <TextField
          type="text"
          onChange={handleSearch}
          placeholder="Rechercher"
          label="Rechercher"
          sx={{ minWidth: 300 }}
        />
        <FormControl sx={{ marginX: 2, minWidth: 200 }}>
          <InputLabel id="weight">Poids</InputLabel>
          <Select
            labelId="weight"
            id="weight"
            label="weight"
          
            value={selectedWeightIndex}
            onChange={handleWeight}
          >
            <MenuItem value={0}>Tous les poids</MenuItem>
            <MenuItem value={1}>Moins de 45kg</MenuItem>
            <MenuItem value={2}>Entre 45 et 65kg</MenuItem>
            <MenuItem value={3}>Plus de 65kg</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="styles">Styles</InputLabel>
          <Select
            labelId="styles"
            id="styles"
            label="Styles"
            value={style}
            onChange={handleStyle}
          >
            <MenuItem value={"All"}>Tous les styles</MenuItem>
            {styleOptions.map((style, index) => (
              <MenuItem key={index} value={style}>
                {style}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ marginX: 2, minWidth: 200 }}>
          <InputLabel id="sizes">Tailles</InputLabel>
          <Select
            labelId="sizes"
            id="sizes"
            label="Tailles"
            value={size}
            onChange={handleSize}
          >
            <MenuItem value={0}>Toutes les tailles</MenuItem>
            {sizeOptions.map((size, index) => (
              <MenuItem key={index} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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