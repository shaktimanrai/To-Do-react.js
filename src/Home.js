import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DockIcon from '@mui/icons-material/Dock';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";


const Home = () => {
  return (
    <>
    <div>          
          <ListItemButton to="GoPro Camera" >
      

          
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     
      <ListItemText primary="GoPro Camera"  />

   

    </ListItemButton>
    <ListItemButton to="/Dashboard">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Board"/>
    </ListItemButton>
    <ListItemButton to="/Dashboard">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Action Camera Mount"/>
    </ListItemButton>
    <ListItemButton to="/About">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="DJI Camera"/>
    </ListItemButton>
    <ListItemButton to="/About">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Action Camera"/>
    </ListItemButton>
   
 </div> 
 </>
  )
}

export default Home