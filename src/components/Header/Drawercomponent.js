import React from 'react'
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Buttonfoot from './Buttonfoot';

    const Drawercomponet=() => {
        const[openDrawer,setopenDrawer]=useState(false)
  return (
    <div>
          <React.Fragment >
            <Drawer  open={openDrawer}
            Close={()=>setopenDrawer(false)}  >
                 <CloseIcon  onClick={()=>setopenDrawer(false)} className='closeicon'>
                                          </CloseIcon> <PersonOutlineOutlinedIcon className='person'/>
              <SearchIcon className='search'/>
              <img src='https://storage-asset.msi.com/frontend/imgs/logo.png' alt='' className='msilogo' />      
              <Divider sx={{position:'relative', top:'-40px'}}/>
                                    
 <List >
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemText primary="Products" />
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{color:'black', fontSize:'16px'}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <ListItemText primary="Odm Solutions" />
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{color:'black', fontSize:'16px'}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <ListItemText primary="What's New" />
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{color:'black', fontSize:'16px'}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <ListItemText primary="Support" />
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{color:'black', fontSize:'16px'}}  />
              </ListItemIcon>
            </ListItemButton>
          <Buttonfoot/>
          </ListItem>
        
        </List>
            </Drawer>
            <ViewHeadlineIcon onClick={()=>setopenDrawer(!openDrawer)}>
                <DensityLargeIcon/>
            </ViewHeadlineIcon>
        </React.Fragment>
    </div>
  )
}
export default Drawercomponet




