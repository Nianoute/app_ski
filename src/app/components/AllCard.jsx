import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';



export default function AllCard({post}) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post.imageUrl}
        title={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="body1" color="black">
          {post.price}€, {post.style}, {post.size}cm, {post.weight}kg
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
