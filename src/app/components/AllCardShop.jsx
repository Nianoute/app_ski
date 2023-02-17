import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';



export default function AllCardShop({shop}) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={shop.logo}
        title={shop.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {shop.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
