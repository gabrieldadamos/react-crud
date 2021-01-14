import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    textAlign: 'center'
  },
  text: {
    color: "#FFF"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="p" className={classes.text}>
        Criado com ❤️️ por <strong>Gabriel Dadamos</strong> para Ligue Maringá
      </Typography>
    </div>
  );
}
