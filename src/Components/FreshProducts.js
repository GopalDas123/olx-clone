import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Product.css";
// import NumberFormat from "react-number-format";
import FreshProduct from './FreshProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function FreshProducts() {
  const classes = useStyles();

  return (
    <div className="fresh__cont">
      <div className={classes.root}>
        <Grid container spacing={3}>
          
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><FreshProduct/></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
