import React, { useState } from "react";
import Layout from "../components/layout/Layout";

import {
  makeStyles,
  Grid,
  Container,
  IconButton,
  Paper,
  InputBase,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { queryDiscovery } from "../utils/index";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    width: "100%",
    margin: 4,
  },
  grid: {
    marginTop: "48px",
    width: "100",
  },
  container: {
    // TODO: レスポンシブ対応？？？
    width: "800px"
  },
}));

const Top = () => {
  const [sendText, setSendText] = useState("");
  const [recvArticles, setRecvArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const classes = useStyles();

  const onPressQuery = async (event) => {
    event.preventDefault();
    const res = await queryDiscovery(sendText);
    setRecvArticles(res.data);
    setHasSearched(true);
  };

  return (
    <Layout>
      <form
        onSubmit={(e) => {
          onPressQuery(e);
        }}
      >
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Watson Discovery で検索！！！！！！！！！！"
            inputProps={{ "aria-label": "search watson discovery" }}
            onChange={(e) => {
              setSendText(e.target.value);
            }}
          />
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="search"
            onClick={(e) => onPressQuery(e)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      <Grid className={classes.grid}>
        <Container className={classes.container}>
          {recvArticles.length > 0 ? (
            recvArticles.map((data, index) => (
              <Grid item key={`SearchResultCard-${data.filename}-${index}`}>
                <SearchResultCard filename={data.filename} passage={data.passage} />
              </Grid>
            ))
          ) : hasSearched && (
            <Grid item>
              <Typography variant="body1">該当の資料が見つかりませんでした。</Typography>
            </Grid>
          )}
        </Container>
      </Grid>
    </Layout>
  );
};

export default Top;
