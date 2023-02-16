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
      <Typography variant="p" to="/qhop" component={Link}>
        Créer une boutique
      </Typography>
    </Box>
  );
};

export default NavbarMain;