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
import "./style/Navbar.css";

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
  const handleHooksClick = (event) => {
    setComponentsMenu(event.currentTarget);
  };

  const handleHooksClose = () => {
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
        <Button color="inherit" component={Link} to="/MainApp">
          Redux
        </Button>
        <Button color="inherit" component={Link} to="/ToDoListApp">
          Redux ToDoList
        </Button>
        <Button color="inherit" onClick={handleHooksClick}>
          Hooks
        </Button>

        <Menu
          anchorEl={componentsMenu}
          open={Boolean(componentsMenu)}
          onClose={handleHooksClose}
        >
          <MenuItem onClick={handleHooksClose} component={Link} to="/UseState">
            UseState Example
          </MenuItem>
          <MenuItem onClick={handleHooksClose} component={Link} to="/UseRef">
            UseRef Example
          </MenuItem>
          <MenuItem onClick={handleHooksClose} component={Link} to="/UseEffect">
            UseEffect Example
          </MenuItem>
          <MenuItem
            onClick={handleHooksClose}    
            component={Link}
            to="/UseContext"
          >
            UseContext Example
          </MenuItem>
          <MenuItem onClick={handleHooksClose} component={Link} to="/UseMemo">
            useMemo Example
          </MenuItem>
          <MenuItem
            onClick={handleHooksClose}
            component={Link}
            to="/UseReducer"
          >
            UseReducer Example
          </MenuItem>

          <MenuItem
            onClick={handleHooksClose}
            component={Link}
            to="/UseCallback"
          >
            UseCallback Example
          </MenuItem>

          <MenuItem
            onClick={handleHooksClose}
            component={Link}
            to="/AfterCallback"
          >
            AfterCallback Example
          </MenuItem>
        </Menu>

        {/* Menu for Mobile Navigation */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/ContextAPI">
            Context-API
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/HOC">
            Higher Order Comp
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/LazyLoading"
          >
            LazyLoading
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/ReuseComponent"
          >
            MUI Component
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/MUIDesignModal"
          >
            MUI Design
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/ClassComponent"
          >
            Class Component
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/CRUDRegistration"
          >
            Registration Form
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/CustomHook">
            Custom Hook
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/QueryParamExample?name=John&age=25"
          >
            Query Param
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/DebounceExample"
          >
            Debounce
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/ThrottlingExample"
          >
            Throttle
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/AxiosExample"
          >
            Axios
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
