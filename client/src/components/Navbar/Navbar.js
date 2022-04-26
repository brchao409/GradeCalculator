import { Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    return (
        <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component={Link} to="/" align="center">
                        Grade Table
                    </Typography>
                    <Button component={Link} to="/calculator" variant="contained" color="primary">Calculator</Button>

                </Toolbar>
            </AppBar>
            
    
      );
    };
    
    export default Navbar;