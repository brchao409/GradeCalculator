import React, {useState, useEffect} from 'react';
import { Typography, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getEntries } from './actions/entries.js';
import MenuIcon from '@mui/icons-material/Menu';
import Calculator from './components/Calculator/Calculator';
import useStyles from './styles';
import GradeTable from './components/GradeTable/GradeTable';

const App = () => {
    const [showCalculator, setShowCalculator] = useState(false);


    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntries());
    }, [dispatch]);

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
            <Box sx={{ml:40}}>
                {showCalculator && <Calculator/>}
            </Box>
            <GradeTable />
        </Box>

    );

}

export default App;