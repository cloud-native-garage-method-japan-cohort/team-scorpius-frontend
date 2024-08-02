import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    position: "relative",
  },
  filename: {
    marginTop: theme.spacing(2),
  },
  highlight: {
    backgroundColor: "lightblue",
  },
  starButton: {
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
  },
}));

const SearchResultCard = ({ passage, filename }) => {
  const [favorited, setFavorited] = useState(false);
  const classes = useStyles();

  const toggleFavorite = () => {
    setFavorited((prev) => !prev);
  };

  // emタグの部分をハイライトに変える関数
  const Highlight = (text) => {
    if (!text) return null;

    const highlightedText = text
      .split(/(<em>.*?<\/em>)/g)
      .map((part, index) => {
        if (part.startsWith("<em>") && part.endsWith("</em>")) {
          return (
            <span key={index} className={classes.highlight}>
              {part.replace(/<\/?em>/g, "")}
            </span>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      });

    return <>{highlightedText}</>;
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="p" align="left">
            {Highlight(passage)}
          </Typography>
          <Divider />
          <Typography
            className={classes.filename}
            variant="body2"
            color="textSecondary"
            align="left"
          >
            {filename}
          </Typography>
        </CardContent>
        <IconButton
          className={classes.starButton}
          onClick={toggleFavorite}
          aria-label="add to favorites"
        >
          {favorited ? (
            <StarIcon color="primary" />
          ) : (
            <StarBorderIcon color="primary" />
          )}
        </IconButton>
      </Card>
    </Grid>
  );
};

export default SearchResultCard;
