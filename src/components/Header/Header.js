import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Header.css';
import Drawercomponet from './Drawercomponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


function Header() {
  const theme =useTheme();
  console.log(theme);
  const isMatch =useMediaQuery(theme.breakpoints.down('lg'));
  console.log(isMatch);
  return (
    <div>
      <React.Fragment>
        <AppBar  position="static"  sx={{backgroundColor:'white',color:'black'}}>
          <Toolbar>
            {isMatch ? (<>
            <Drawercomponet/>
              <img src='https://storage-asset.msi.com/frontend/imgs/logo.png' alt='' className='msi1'/>
              <PersonOutlineOutlinedIcon id='icon'/>
              <SearchIcon sx={{marginLeft:'20px'}}id='icon'/>
              </>):(<>          <img src='https://storage-asset.msi.com/frontend/imgs/logo.png' alt='' className='msi'/>
<Tabs sx={{textDecorationColor:'inherit'}}>
<Tab label="PRODUCTS"  id='product' />
<Tab label="ODM SOLUTIONS" id='product' />
<Tab label="WHAT'S NEW" id='product' />
<Tab label="SUPPORT" id='product' />
<Tab label=''/>
<Tab label=''/>
<Tab label=''/>
<Tab label=''/>
<Tab label=''/>
<Tab label=''/>
</Tabs>
<PersonOutlineOutlinedIcon id='icon'/>
<RoomOutlinedIcon  sx={{marginLeft:'20px'}}id='icon'/>
<SearchIcon sx={{marginLeft:'20px'}} id='icon'/>
</>)}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  )
}
export default Header;