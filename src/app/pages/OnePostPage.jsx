import { Link } from "react-router-dom";
import {
    Button,
    Box,
    CardMedia,
    Typography,
    CardContent
  } from "@mui/material";

import { useParams } from "react-router-dom";
import { getOnePost, updatePost } from "../../setup/services/post.service";
import { useEffect, useState } from "react";

const OnePostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        getOnePost(id).then((post) => {
            setPost(post)
        });
    }, [id])
    return(
    <>
     <Button component={Link} to="/" variant="contained" sx={{ mb: 2 }}>
        Retour
     </Button>
     {post && (
        <Box sx={{display: "flex", gap: 2,}}>
        <CardMedia
        sx={{ height: 280}}
        image={post.imageUrl}
        title={post.title}
        />

      <CardContent>
            <Typography variant="h1" sx={{ fontSize: 48, fontWeight: "bold" }}>
              {post.title}
            </Typography>
            <Typography variant="p" sx={{ fontSize: 32, fontWeight: "bold" }}>
              {post.price}€
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ fontSize: 18, mb: 2, display: "block" }}
            >
              Poids: {post.weight}kg - Taille: {post.size}cm - Style:{" "}
              {post.style}
            </Typography>
        </CardContent>
        </Box>
      )}
   </>
    );
}

export default OnePostPage