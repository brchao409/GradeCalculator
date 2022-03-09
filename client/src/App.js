import React from 'react';
import { Typography, Box, AppBar, Toolbar, IconButton, Fab} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

import useStyles from './styles';

const App = () => {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Grade Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Fab className={classes.addButton} color="secondary" onClick={() => {}}><AddIcon /></Fab>
        </Box>
    );

}

export default App;