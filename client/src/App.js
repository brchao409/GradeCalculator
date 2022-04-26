import React, { useEffect} from 'react';
import {Box} from '@mui/material';
import { useDispatch } from 'react-redux';

import { fetchEntries } from './actions/entries.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator/Calculator';
import useStyles from './styles';
import GradeTable from './components/GradeTable/GradeTable';
import Navbar from './components/Navbar/Navbar';
const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEntries());
    }, [dispatch]);

    return (
        <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Routes>
            <Route path="/" element={<GradeTable/>} />
            <Route path="/calculator" element={<Calculator/>} />
            </Routes>
        </Box>
        </BrowserRouter>

    );

}

export default App;