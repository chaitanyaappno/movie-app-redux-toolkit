import React from "react";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const MovieCard = ({ data }) => {
  console.log("data.....", data);
  return (
    <Card>
      <CardMedia component="img" image={data.Poster} alt="green iguana" />
      <CardContent p={5}>
        <Typography gutterBottom variant="h5" component="div">
          {data.Title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {data.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MovieCard;
