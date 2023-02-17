import { Link, useParams } from "react-router-dom";
import {
    Button,
    Box,
    CardMedia,
    Typography,
    CardContent,
    Rating,
    TextField
  } from "@mui/material";

import { getOnePost, updatePost} from "../../setup/services/post.service";
import { useEffect, useState, useMemo } from "react";
import Comment from "../components/Comment";
import { createComment } from "../../setup/services/comment.service";
import { createBooking } from "../../setup/services/booking.service";


const OnePostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [editPost, setEditPost] = useState(true);
    const [comment, setComment] = useState({
      stars: 0,
      username: "",
      description: "",
    });  
    const [phone, setPhone] = useState();

    useEffect(()=>{
        getOnePost(id).then((post) => {
            setPost(post)
        });
    }, [id])

    useEffect(() => {
        if (editPost) {
          getOnePost(id)
            .then((post) => {
              setPost(post);
              setEditPost(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, [id, editPost]);

    const onChangeComment = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
      };

    const handleCreateComment = (e) => {
        e.preventDefault();
        const data = { ...comment, post: id };
        createComment(data)
          .then((res) => {
            setEditPost(true);
            setComment({ stars: 0, username: "", description: "" });
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const onChangePhone = (e) => {
        setPhone(Number(e.target.value));
      };
    
      const renderAverageStars = useMemo(() => {
        return (
          post?.comments.reduce((acc, comment) => {
            return acc + comment.stars;
          }, 0) / post?.comments.length
        );
      }, [post?.comments]);
    
      const handleBook = (e) => {
        e.preventDefault();
        createBooking({ telephoneNumber: phone, post: id })
          .then(() => {
            updatePost(id, { isAvailable: false })
              .then(() => {
                setEditPost(true);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return(
    <>
     <Button component={Link} to="/" variant="contained" sx={{ mb: 2 }}>
        Retour
     </Button>
     {post && (
        <Box sx={{display: "flex", gap: 2,}}>
        {/*///////////////////////////////////////////Comment/////////////////////////////////////// */}
            <Box sx={{ width: "80%" }}>
            <Typography
              variant="p"
              sx={{ fontSize: 24, fontWeight: "bold", mb: 1, display: "block" }}
            >
              Ajouter un commentaire
            </Typography>
            <Box component={"form"} onSubmit={handleCreateComment}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 1,
                  px: 2,
                  backgroundColor: "#3f51b5",
                  borderRadius: 1,
                  width: "fit-content",
                }}
              >
                <Rating
                  value={Number(comment.stars)}
                  name="stars"
                  onChange={onChangeComment}
                  sx={{
                    mr: 1,
                    color: "#fff616",
                  }}
                  precision={0.5}
                />
              </Box>
              <TextField
                sx={{ my: 2, width: "100%" }}
                label="Nom d'utilisateur"
                variant="outlined"
                name="username"
                value={comment.username}
                onChange={onChangeComment}
              />
              <TextField
                multiline
                minRows={4}
                label="Commentaire"
                variant="outlined"
                name="description"
                value={comment.description}
                onChange={onChangeComment}
                sx={{ width: "100%" }}
              />
              <Button sx={{ mt: 2 }} type="submit" variant="contained">
                Ajouter
              </Button>
            </Box>
            <Typography
              variant="p"
              sx={{ fontSize: 24, fontWeight: "bold", my: 2, display: "block" }}
            >
              Tous les commentaires ({post.comments.length})
            </Typography>
            {post.comments.map((comment) => (
              <Comment key={comment._id} data={comment} />
            ))}
        </Box>


            
        {/*///////////////////////////////////////////Card/////////////////////////////////////// */}
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
            <Rating
                value={renderAverageStars}
                sx={{ mr: 1, color: "#fff616"}}
                precision={0.5}
                readOnly
              />
            <br />
            <Typography
              variant="p"
              sx={{ fontSize: 18, mb: 2, display: "block" }}
            >
              Poids: {post.weight}kg - Taille: {post.size}cm - Style:{" "}
              {post.style}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: 18, mb: 2, display: "block" }}
            >
              {post.description} 
            </Typography>

              {/*///////////////////////////////////////////Booking/////////////////////////////////////// */}
            {post.isAvailable && (
              <Box
                component={"form"}
                sx={{ display: "flex", gap: 2 }}
                onSubmit={handleBook}
              >
                <TextField
                  id="phone"
                  label="Numéro de téléphone"
                  variant="filled"
                  type={"tel"}
                  sx={{ minWidth: 250 }}
                  value={phone}
                  onChange={onChangePhone}
                />
                <Button type="submit" variant="contained" sx={{ maxWidth: 250 }}>
                  Réserver
                </Button>
              </Box>
            )}
            {!post.isAvailable && (
              <Box
                component={"form"}
                sx={{ display: "flex", gap: 2 }}
              >
                <Button variant="contained" sx={{ maxWidth: 250 }}>
                  Déjà réservé
                </Button>
              </Box>
            )}
        </CardContent>
         
        </Box>
        
      )}
   </>
    );
}

export default OnePostPage