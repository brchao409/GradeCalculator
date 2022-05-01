import React from 'react';
import { useSelector } from 'react-redux'; 

import Course from './Course/Course.js';

const GradeTable = ({ currentId, setCurrentId} ) => {

    const entries = useSelector((state) => state.entries); 
    //console.log(entries);

    return (
        <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Semester</th>
                            <th>Grade</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <Course entry={entry} currentId={currentId} setCurrentId={setCurrentId}/>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default GradeTable;