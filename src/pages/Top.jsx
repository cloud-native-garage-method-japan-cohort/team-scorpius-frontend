import React, { useState } from "react";
import Layout from "../components/layout/Layout";

import {
  makeStyles,
  Grid,
  Container,
  IconButton,
  Paper,
  InputBase,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { queryDiscovery } from "../utils/index";
import { MockSearchResult } from "../mock/MockSearchResult";

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
    // TODO: レスポンシブ対応？？
    // margin: "0 auto",
    width: "600px"
  },
  card: {
    margin: "20px auto",
  },
  filename: {
    borderTop: "1px solid grey",
    marginTop: "5px"
  }
}));

const Top = () => {
  const [sendText, setSendText] = useState("");
  const [recvText, setRecvText] = useState("");

  const classes = useStyles();

  const onPressQuery = async (event) => {
    event.preventDefault();
    const res = await queryDiscovery(sendText);
    setRecvText(res.data.responseText);
    console.log(res);
    // setSendText('');
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
            placeholder="Watson Discovery で検索"
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
          {/* TODO: コンポーネント化 */}
          {MockSearchResult.result.map((data, index) => (<Grid key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="body1" component="p">
                  {data.passage}
                </Typography>
                <Typography className={classes.filename} variant="body2" color="textSecondary" align="left">
                  {data.filename}
                </Typography>
              </CardContent>

            </Card>
          </Grid>)
          )}
        </Container>
      </Grid>
    </Layout>
  );
};

export default Top;
