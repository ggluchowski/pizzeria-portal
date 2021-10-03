import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id='order-status'
      options={orderStatus}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params}  />}
    />
  );
}

const orderStatus = [
  { label: 'new' },
  { label: 'ordered' },
  { label: 'ready' },
  { label: 'in delivery' },
  { label: 'delivered' },
  { label: 'done' },
  { label: 'cancelled' },

];
