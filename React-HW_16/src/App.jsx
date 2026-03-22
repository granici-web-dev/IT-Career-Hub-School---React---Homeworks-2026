import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>My Material UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 12 }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)} disableRestoreFocus>
        <DialogContent>
          <DialogTitle>Использовать Material UI?</DialogTitle>
          <DialogContentText>
            Это простое приложение с использованием Material UI. Вы модете настроить его на свое
            усмотрение.
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Отмена</Button>
            <Button onClick={() => setOpen(false)}>Согласен</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
