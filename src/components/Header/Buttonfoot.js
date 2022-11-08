import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './buttonfoot.css';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button className='footbut'>
        <span><PlayArrowIcon  className='play'/></span>
        <StarRateSharpIcon  className='star'/> <span className='text1'>c</span>
      </Button>
    </Stack>
  );
}