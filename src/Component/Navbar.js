
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Todolist from './Todolist';

export default function Navbar() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        style={{ backgroundColor: "grey", color: "yellow" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="warning"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Banasthali Vidyapith
          </Typography>
          <Button color="inherit"><Typography variant="h6">Start </Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Todolist/></div>
  
  );
}

