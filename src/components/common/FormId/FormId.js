import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FormId = ({ state }) => {

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
          <TextField id="standard-basic" label="ID" variant="standard" value={state.number} />
        </div>
        <div>
          <TextField id="standard-basic" label="Date" variant="standard" value={state.date}/>
        </div>
        <div>
          <TextField id="standard-basic" label="Hour" variant="standard" value={state.time}/>
        </div>
        <div>
          <TextField id="standard-basic" label="Table" variant="standard" value={state.table}/>
        </div>
        <div>
          <TextField id="standard-basic" label="Duration" variant="standard" value={state.duration}/>
        </div>
        <div>
          <TextField id="standard-basic" label="People" variant="standard" value={state.ppl}/>
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Starters"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            value={state.details}
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

FormId.propTypes = {
  state: PropTypes.object,
};

export default FormId;
