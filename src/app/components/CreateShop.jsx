import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createShop, updateShop } from "../../setup/services/shop.service";

const CreateShop = ({ data, edit, setEditShop }) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState({
    name: data?.name || "",
    address: data?.address || "",
    logo: data?.logo || "",
    password: data?.password || "",
  });

  const onChangeShop = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  const handleCreateShop = (e) => {
    e.preventDefault();
      createShop(shop)
        .then((data) => {
          navigate(`/shop/${data._id}`);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
  <>
    <Box sx={{ width: "80%" }}>
            <Typography
              variant="p"
              sx={{ fontSize: 24, fontWeight: "bold", mb: 1, display: "block" }}
            >
              Ajouter un shop
            </Typography>
            <Box component={"form"} onSubmit={handleCreateShop}>
              <TextField
                sx={{ my: 2, width: "100%" }}
                label="Nom du shop"
                variant="outlined"
                name="name"
                value={shop.name}
                onChange={onChangeShop}
              />

              <TextField
                sx={{ my: 2, width: "100%" }}
                label="Address du shop"
                name="address"
                value={shop.address}
                onChange={onChangeShop}
              />

              <TextField
                sx={{ my: 2, width: "100%" }}
                label="Url du logo"
                variant="outlined"
                name="logo"
                value={shop.logo}
                onChange={onChangeShop}
              />

              <TextField
                sx={{ my: 2, width: "100%" }}
                type="password"
                label="password"
                variant="outlined"
                name="password"
                value={shop.password}
                onChange={onChangeShop}
              />

              <Button sx={{ mt: 2 }} type="submit" variant="contained">
                Créer
              </Button>
            </Box>
    </Box>
  </>
  );
};

export default CreateShop;