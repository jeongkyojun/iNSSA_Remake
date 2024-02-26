import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { PropTypes } from './types';

const SelectForm = ({
  inputs,
  id,
  value,
  width,
  height,
  labelName,
  backgroundColor,
  changeHandler,
}: PropTypes) => {
  return (
    <Box
      sx={{
        minWidth: `${width || 6}rem`,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id={id}>{labelName}</InputLabel>
        <Select
          sx={{
            borderRadius: '1rem',
            height: `${height || 3}rem`,
            backgroundColor: `${backgroundColor}`,
          }}
          autoWidth
          id={id}
          name={id}
          labelId={id}
          label={labelName}
          value={value?.[id]}
          onChange={e => changeHandler?.(e)}
        >
          {inputs.map(input => (
            <MenuItem value={input} key={input}>
              {input}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectForm;
