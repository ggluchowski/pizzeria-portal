import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const menuList = [
  {
    value: 'Menu-1',
    label: 'Option menu 1',
  },
  {
    value: 'Menu-2',
    label: 'Option menu 2',
  },
  {
    value: 'Menu-3',
    label: 'Option menu 3',
  },
  {
    value: 'Menu-4',
    label: 'Option menu 4',
  },
];

const renderMenuOption = (menu) => {
  let optionObj = {
    'Menu-1': [
      {
        value: 'Option-1',
        label: 'Option 1',
        cost: '2$',
      },
      {
        value: 'Option-2',
        label: 'Option 2',
        cost: '1$',
      },
    ],
    'Menu-2': [
      {
        value: 'Option-2.1',
        label: 'Option 2.1',
        cost: '2$',
      },
      {
        value: 'Option-2.2',
        label: 'Option 2.2',
        cost: '1$',
      },
    ],
    'Menu-3': [
      {
        value: 'Option-3.1',
        label: 'Option 3.1',
        cost: '2$',
      },
      {
        value: 'Option-3.2',
        label: 'Option 3.2',
        cost: '1$',
      },
    ],
    'Menu-4': [
      {
        value: 'Option-4.1',
        label: 'Option 4.1',
        cost: '2$',
      },
      {
        value: 'Option-4.2',
        label: 'Option 4.2',
        cost: '1$',
      },
    ],
    'default': [
      {
        value: '',
        label: '--',
        cost: '0$',
      },
    ],
  };

  let option = optionObj[menu] || optionObj['default'] ;
  return option;
};

const MenuProduct = (menuTT) => {
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
          helperText="Please select your option"
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
