import {
    Box,
    Button,
    CardMedia,
    TextField,
    Typography
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { createPost } from "../../setup/services/post.service";
  import { getShop } from "../../setup/services/shop.service";
  import AllCard from "../components/AllCard";
  import CreateShop from "../components/CreateShop";

const OneShopPage = () => {
    const { id } = useParams();
    const [shop, setShop] = useState(null);
    const [showShop, setShowShop] = useState(false);
    const [editShop, setEditShop] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [post, setPost] = useState({
      title: "",
      price: 0,
      imageUrl: "",
      weight: 0,
      size: 0,
      style: "",
    });

    const onChangePost = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
      };

    const onCreatePost = (e) => {
        e.preventDefault();
        const newPost = {
          ...post,
          shop: id,
        };
        createPost(newPost)
          .then(() => {
            setPost({
              title: "",
              price: 0,
              weight: 0,
              size: 0,
              style: "",
              imageUrl: "",
            });
            setEditShop(true);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const onChangePassword = (e) => {
        console.log(shop)
        setPassword(e.target.value);
        setPasswordError(false);
      };
    
      const onSubmitPassword = (e) => {
        e.preventDefault();
        if (password === shop.data.password) {
          setShowShop(true);
        } else {
          setPasswordError(true);
        }
      };

      useEffect(() => {
        if (editShop) {
          getShop(id)
            .then((data) => {
              setShop(data);
              setEditShop(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }, [id, editShop]);

      if (!showShop && shop) {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component="form"
            onSubmit={onSubmitPassword}
          >
            <Box>
              <CardMedia
                image={shop.data.logo}
                sx={{ height: 140, width: 140, mx: "auto", mb: 2 }}
              />
              <Typography
              variant="p"
              sx={{ fontSize: 24, fontWeight: "bold", mb: 1, display: "block", textAlign: "center" }}
              >
                {shop.data.name}
              </Typography>
              <TextField
                label="Mot de passe"
                value={password}
                onChange={onChangePassword}
                error={passwordError}
                helperText={passwordError && "Mot de passe incorrect"}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, display: "block", py: 2 }}
              >
                Accéder à la boutique
              </Button>
            </Box>
          </Box>
        );
      }

      
};

export default OneShopPage;