import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [componentsMenu, setComponentsMenu] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleComponentsClick = (event) => {
    setComponentsMenu(event.currentTarget);
  };

  const handleComponentsClose = () => {
    setComponentsMenu(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Website
        </Typography>

        <Button color="inherit" component={Link} to="/Home">
          Home Page
        </Button>
        <Button color="inherit" component={Link} to="/About">
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/Login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/Registration">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/Contact">
          Contact Us
        </Button>

        {/* Dropdown for Components */}
        <Button color="inherit" onClick={handleComponentsClick}>
          Components
        </Button>
        <Menu
          anchorEl={componentsMenu}
          open={Boolean(componentsMenu)}
          onClose={handleComponentsClose}
        >
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/ReducerHook"
          >
            Reducer Hook
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/class-component"
          >
            Class Component
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/context-api"
          >
            Context API
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/lazy-load"
          >
            Lazy Load
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/HOC_Component"
          >
            HOC Component
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/React-Memo"
          >
            React Memo
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/QueryParams"
          >
            Query Params
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/fetch_api"
          >
            Fetch API
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/Beforecallback"
          >
            BeforeCallback
          </MenuItem>
          <MenuItem
            onClick={handleComponentsClose}
            component={Link}
            to="/Aftercallback"
          >
            AfterCallback
          </MenuItem>
        </Menu>

        {/* Menu for Mobile Navigation */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/home">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">
            About Us
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">
            Login
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/register">
            Register
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
            Contact Us
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
