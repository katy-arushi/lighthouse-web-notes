import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Link to="/">
              <Typography variant="h12" component="div" sx={{ flexGrow: 2 }}>
                Home
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/urls">
              <Typography variant="h12" component="div" sx={{ flexGrow: 2 }}>
                URLS 
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/urls/new">
              <Typography variant="h12" component="div" sx={{ flexGrow: 2 }}>
                ADD NEW URL 
              </Typography>
            </Link>
          </MenuItem>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/register">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
