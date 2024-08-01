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
}));

const SearchResultCard = ({ passage, filename }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" component="p" align="left">
            {passage}
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
