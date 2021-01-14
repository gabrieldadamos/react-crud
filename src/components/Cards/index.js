import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "../Modal";
import Avatar from "./avatar.svg";
import Javascript from "./javascript.svg";
import ReactLogo from "./react.svg";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
  linguagens: {
    width: "30px",
  },
  card: {
    background: "#2d2d2d",
    color: "#fff",
  },
  hobby: {
    marginTop: theme.spacing(2),
    color: "#fff",
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const handleEdit = (dev) => {
    setData(dev);
  }

  return (
    <div className={classes.root}>
      <Modal callBackCreate={(data) => props.callBackCreate(data)} dev={data}/>
      <Grid container spacing={6}>
        {props.data.map((dev, index) => (
          <Grid item md={3} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <img src={Avatar} className={classes.avatar} alt="Avatar" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dev.nome}
                  </Typography>
                  <img
                    src={Javascript}
                    className={classes.linguagens}
                    alt="Javascript"
                  />
                  <img
                    src={ReactLogo}
                    className={classes.linguagens}
                    alt="React"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.hobby}
                  >
                    {dev.hobby}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(dev)}
                >
                  <EditIcon /> EDITAR
                </Button>
                <Button
                  color="secondary"
                  onClick={() => props.callBackRemove(dev)}
                >
                  <strong>Remover</strong>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
