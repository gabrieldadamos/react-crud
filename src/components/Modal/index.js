import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Alert from "@material-ui/lab/Alert";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "20px 0",
    color: "#FFF",
  },
}));

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const arrayDev = {
    nome: "",
    idade: "",
    hobby: "",
    datanascimento: "1999-01-01",
    sexo: "M",
    edit: 0,
  };

  const [data, setData] = useState(arrayDev);

  useEffect(() => {
    if (props.dev.length !== 0) {
      props.dev.datanascimento = props.dev.datanascimento.split("T")[0];
      props.dev.edit = 1;
      setData(props.dev);
      setOpen(true);
    }
  }, [props.dev]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData(arrayDev);
    setError(false);
  };

  const handleSubmit = () => {
    if (
      data.nome === "" ||
      data.idade === "" ||
      data.hobby === "" ||
      data.datanascimento === ""
    ) {
      return setError(true);
    }

    props.callBackCreate(data);
    setOpen(false);
    setError(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        <strong>Cadastrar DEV</strong>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form noValidate autoComplete="off">
          <DialogTitle id="form-dialog-title">Adicionar DEV 🚀</DialogTitle>
          {error ? (
            <Alert severity="error">Preencha todos os campos!</Alert>
          ) : (
            ""
          )}
          <DialogContent >
            <TextField
              autoFocus
              margin="normal"
              id="nome"
              label="Nome"
              type="text"
              fullWidth
              required
              value={data.nome}
              onChange={(e) => setData({ ...data, nome: e.target.value })}
            />
            <TextField
              id="idade"
              label="Idade"
              type="number"
              fullWidth
              margin="normal"
              required
              value={data.idade}
              onChange={(e) => setData({ ...data, idade: e.target.value })}
            />
            <TextField
              id="hobby"
              label="Hobby"
              type="text"
              fullWidth
              margin="normal"
              required
              value={data.hobby}
              onChange={(e) => setData({ ...data, hobby: e.target.value })}
            />
            <FormControl fullWidth>
              <TextField
                id="datanascimento"
                type="date"
                required
                label="Data de nascimento"
                defaultValue="2000-01-01"
                margin="normal"
                value={data.datanascimento}
                onChange={(e) =>
                  setData({ ...data, datanascimento: e.target.value })
                }
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel shrink id="demo-simple-select-label">
                Sexo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                autoWidth={false}
                value={data.sexo}
                displayEmpty
                onChange={(e) => setData({ ...data, sexo: e.target.value })}
              >
                <MenuItem value={"M"}>Masculino</MenuItem>
                <MenuItem value={"F"}>Feminino</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              {
                data.edit === 1 ? 'Editar Dev' : 'Criar Dev'
              }
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
