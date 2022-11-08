import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './spacinggrid.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
  <div className='black'>
    <Box sx={{ flexGrow: 1 }}>
        <div className='cont'>
      <Grid container rowSpacing={0}  >
        <Grid item xs={4}>
          <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_1654004502778f79d002d263b823788f5b863a4cd2.jpeg' alt=''/></Item>  
          <h4><b>Titan GT77</b></h4>
          <p>Total Dominance</p>
        </Grid>
        <Grid item xs={4}>
          <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_1638864260bb5ea9133ec5f213ee4df9bc4fa2e653.jpeg' alt=''/></Item>
          <h4><b>MEG Z690 UNIFY</b></h4>
          <p>The World Record Breaker</p>
        </Grid>
        <Grid item xs={4}>
          <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_15991136025f5089828b81b.jpg?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/></Item>
          <h4><b>GeForce RTX<sup>TM</sup> 3090 GAMING X TRIO 24G</b></h4>
          <p>Play Hard, Stay Silent</p>
        </Grid>
      </Grid>
      </div>
      <div className='cont1'>
      <Grid container spacing={0} >
        <Grid item xs={12}>
          <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_1654004502778f79d002d263b823788f5b863a4cd2.jpeg' alt=''/></Item>  
          <h4><b>Titan GT77</b></h4>
          <p>Total Dominance</p>
   
      <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_1638864260bb5ea9133ec5f213ee4df9bc4fa2e653.jpeg' alt=''/></Item>
          <h4><b>MEG Z690 UNIFY</b></h4>
          <p>The World Record Breaker</p>
       
          <Item><img src='https://storage-asset.msi.com/global/picture/banner/banner_15991136025f5089828b81b.jpg?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/></Item>
          <h4 className='trio'><b>GeForce RTX<sup>TM</sup> 3090 GAMING X TRIO 24G</b></h4>
          <p>Play Hard, Stay Silent</p>
        </Grid>
    </Grid>
      </div>
    </Box>
    </div>
  );
}
