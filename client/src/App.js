import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Paper,
  TextField,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import api from "./api";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [list, setList] = useState([]);

  const getContacts = async () => {
    try {
      const { data } = await api.get("/contacts");
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createContact = async (data) => {
    try {
      await api.post("/contacts", data);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: { name: "", phone: "", email: "", whatsapp: "" },
  });

  const onSubmit = (data) => {
    createContact(data);
    reset();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",
      }}
      disableGutters
    >
      <Box alignSelf="center">
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "30px",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fafafa",
          }}
        >
          <Typography variant="h6" mb={2}>
            Cadastrar Contato
          </Typography>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Nome"}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Telefone"}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Email"}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Controller
            name="whatsapp"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Whatsapp"}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Box>
            <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>
            <Button onClick={() => reset()} variant="outlined">
              Limpar
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 6,
        }}
      >
        <Typography variant="h4" mt={2}>
          Lista de Contatos
        </Typography>
        <List>
          {list.map((l) => (
            <ListItem
              key={l._id}
              disableGutters
              secondaryAction={
                <IconButton onClick={() => deleteContact(l._id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Box>
                    <Typography>{l.name}</Typography>
                    <Typography>{l.email}</Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;
