import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const menuList = [
  {
    value: 'Menu-1',
    label: 'Super menu 1',
    cost: '25$',
  },
  {
    value: 'Menu-2',
    label: 'Super menu 2',
    cost: '15$',
  },
  {
    value: 'Menu-3',
    label: 'Super menu 3',
    cost: '12$',
  },
  {
    value: 'Menu-4',
    label: 'Super menu 4',
    cost: '17$',
  },
];

const MenuProduct =  () => {
  const [menu, setMenu] = React.useState('Menu-1');

  const handleChange = (event) => {
    setMenu(event.target.value);
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

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={menu}
          onChange={handleChange}
          helperText="Please select your dish"
          size="small"
        >
          {menuList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>

    </Box>
  );
};

export default MenuProduct;
