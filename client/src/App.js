import React, {useState} from 'react';
import { Typography, Box, AppBar, Toolbar, IconButton, Button, Fab} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Calculator from './components/Calculator/Calculator';
import useStyles from './styles';

const App = () => {
    const [showCalculator, setShowCalculator] = useState(false);


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
                    <Button onClick={()=>setShowCalculator(!showCalculator)}color="inherit">Calcularor</Button>

                </Toolbar>
            </AppBar>
            <Fab className={classes.addButton} color="secondary" onClick={() => {}}><AddIcon /></Fab>
            <Box sx={{ml:40}}>
                {showCalculator && <Calculator/>}
            </Box>
        </Box>

    );

}

export default App;