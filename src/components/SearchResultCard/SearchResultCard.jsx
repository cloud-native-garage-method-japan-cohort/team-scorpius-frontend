import React from 'react';
import { Card, CardContent, Typography, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  filename: {
    marginTop: theme.spacing(2),
  },
  highlight: {
    backgroundColor: 'lightblue',
  }
}));

const SearchResultCard = ({ passage, filename }) => {
  const classes = useStyles();

  // emタグの部分をハイライトに変える関数
  const Highlight = (text) => {
    if (!text) return null;

    const highlightedText = text.split(/(<em>.*?<\/em>)/g).map((part, index) => {
      if (part.startsWith('<em>') && part.endsWith('</em>')) {
        return (
          <span key={index} className={classes.highlight}>
            {part.replace(/<\/?em>/g, '')}
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
          <Typography className={classes.filename} variant="body2" color="textSecondary" align="left">
            {filename}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SearchResultCard;
