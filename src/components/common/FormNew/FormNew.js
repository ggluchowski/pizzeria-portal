import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FormNew = ({ state }) => {

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
          <TextField id="standard-basic" label="ID" variant="standard"  />
        </div>
        <div>
          <TextField id="standard-basic" label="Date" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Hour" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Table" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Duration" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="People" variant="standard" />
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Starters"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
          />
        </div>
        <div >
          <Stack direction="row" spacing={5}>
            <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/tables'}>Cancel</Button>
            <Button variant="contained">Zapisz</Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

FormNew.propTypes = {
  state: PropTypes.object,
};

export default FormNew;
