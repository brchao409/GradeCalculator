import React, { useState, useEffect } from 'react';
import {Box} from '@mui/material';
import { useDispatch } from 'react-redux';

import { fetchEntries } from './actions/entries.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator/Calculator';
import GradeTables from './components/GradeTables/GradeTables';
import Navbar from './components/Navbar/Navbar';
const App = () => {
    
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEntries());
    }, [currentId, dispatch]);

    return (
        <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Routes>
            <Route path="/" element={<GradeTables currentId={currentId} setCurrentId={setCurrentId}/>} />
            <Route path="/calculator" element={<Calculator/>} />
            </Routes>
        </Box>
        </BrowserRouter>

    );

}

export default App;