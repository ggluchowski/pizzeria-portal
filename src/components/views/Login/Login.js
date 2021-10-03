import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='text' color='secondary' onClick={handleClickOpen}>
        Login
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Logowanie</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Login'
            type='text'
            fullWidth
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Password'
            type='password'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Zaloguj</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
