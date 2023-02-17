import {
    Box,
    Typography,
    Grid
  } from "@mui/material";
  
  import { Link } from "react-router-dom";
  import {getAllShop} from "../../setup/services/shop.service"
  import { useEffect, useState } from 'react';
  import AllCardShop from "../components/AllCardShop";
  
  const AllShopPage = () => {
    const [shops, setShops] = useState([]);
  

    useEffect(() => {
        fetchAllShops()
      }, []);
    
      const fetchAllShops = async () => {
        try{
          const response = await getAllShop()
          setShops([...response.shops]);
        } catch(err){
          console.log(err);
        }
      }
  
  
      return (
        <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
            {shops?.map((shop) => (
              <Grid key={shop._id} item xs={12} sm={6} md={4}>
                <Link to={`/${shop?._id}`} style={{ textDecoration: "none" }}>
                  <AllCardShop shop={shop} />
                </Link>
            </Grid>
          ))}
          {shops?.length === 0 && (
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Aucun résultat
            </Typography>
           )}
          </Grid>
        </Box>
      )
  }
  
  export default AllShopPage