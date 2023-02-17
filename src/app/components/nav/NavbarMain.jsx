import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        gap: 3,
      }}
    >
        
      <Typography variant="p" to="/" component={Link}>
        Home
      </Typography>
      <Typography variant="p" to="/newshop" component={Link}>
        Créer une boutique
      </Typography>
      <Typography variant="p" to="/shop" component={Link}>
        Toutes les boutiques
      </Typography>
    </Box>
  );
};

export default NavbarMain;