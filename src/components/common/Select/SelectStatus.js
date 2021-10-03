// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const SelectStatus = () => {
//   const [status, setStatus] = React.useState('');

//   const handleChange = (event) => {
//     setStatus(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="select-status-label"></InputLabel>
//         <Select
//           labelId="select-status-label"
//           id="select-status"
//           value={status}
//           onChange={handleChange}
//         >
//           <MenuItem value={'new'}>New</MenuItem>
//           <MenuItem value={'ordered'}>Ordered</MenuItem>
//           <MenuItem value={'ready'}>Ready</MenuItem>
//           <MenuItem value={'in delivery'}>In delivery</MenuItem>
//           <MenuItem value={'delivered'}>Delivered</MenuItem>
//           <MenuItem value={'done'}>Done</MenuItem>
//           <MenuItem value={'cancelled'}>Cancelled</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };



import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const SelectStatus = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">

        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'status',
            id: 'uncontrolled-native',
          }}
        >
          <option value={'new'}>New</option>
          <option value={'ordered'}>Ordered</option>
          <option value={'ready'}>Ready</option>
          <option value={'in delivery'}>In delivery</option>
          <option value={'delivered'}>Delivered</option>
          <option value={'done'}>Done</option>
          <option value={'cancelled'}>Cancelled</option>

        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SelectStatus;
