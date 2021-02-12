import React from "react";
// Modules
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from "@material-ui/core";
import { NextPage } from "next";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      marginTop: 15,
      display: "flex",
      alignItems: "center",
      width: "100%",
      borderRadius: 20
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    center: {
      textAlign: "center"
    }
  })
);

const HomePage: NextPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "90vh" }}
    >
      <Grid item xs={10}>
        <Container>
          <Typography
            variant="h2"
            className={classes.center}
            style={{
              color: "#e1567c"
            }}
          >
            AWESOME.md
          </Typography>
          <Typography variant="body1" className={classes.center}>
            Digite algum termo para encontrar listas e referências incriveis no
            mundo da tecnologia.
          </Typography>

          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              inputProps={{ "aria-label": "Search awesome list" }}
              placeholder=" e.g: nodejs, golang test"
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePage;
