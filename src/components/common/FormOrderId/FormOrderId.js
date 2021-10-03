import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuProduct from '../MenuProduct/MenuProduct';
import OptionMenu from '../OptionMenu/OptionMenu';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const FormOrderId = ({ state }) => {
  const [price, setName] = React.useState('$ Price');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <div>
          <TextField id="standard-basic" label="ID" variant="standard" value={state.id} />
        </div>
        <div>
          <TextField id="standard-basic" label="Table" variant="standard" value={state.table} />
        </div>
        <div>
          <Stack direction="row" spacing={5}>
            <MenuProduct />
            <OptionMenu />
            <Button variant="contained" size="large">ADD</Button>
          </ Stack>
        </div>

        <div>
          <TextField
            id="standard-multiline-static"
            label="Zamówienie"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
          />
        </div>
        <br />
        <div>
          <FormControl disabled variant="standard">
            <InputLabel htmlFor="component-disabled">Price</InputLabel>
            <Input id="component-disabled" value={price} onChange={handleChange} />
          </FormControl>
        </div>
        <br />
        <div >
          <Stack direction="row" spacing={5}>
            <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/waiter'}>Cancel</Button>
            <Button variant="contained">Zapisz</Button>
          </Stack>
        </div>

      </div>
    </Box>
  );
};

FormOrderId.propTypes = {
  state: PropTypes.object,
};

export default FormOrderId;
