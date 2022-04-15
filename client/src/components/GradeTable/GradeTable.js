import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { createEntry, deleteEntry } from '../../actions/entries.js';

const GradeTable = () => {

    
    
    const entries = useSelector((state) => state.entries);
    const dispatch = useDispatch();
    const [gradeFormData, setGradeFormData] = useState({
        courseName: '',
        grade: 'A',
        credits: ''
    });
    
    var totalCredits = entries.map(e => e.credits).reduce((a, b) => a + b, 0);

    const handleGradeFormSubmit = (e) => {
        e.preventDefault();

        dispatch(createEntry(gradeFormData));
    }

    return (
        <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Grade</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry._id}>
                                <td>{entry.courseName}</td>
                                <td>{entry.grade}</td>
                                <td>{entry.credits}</td>
                                <td><button onClick={() => dispatch(deleteEntry(entry._id))}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>
                    Total Credits = {totalCredits}<br/>
                    Credits Remaining = {120 - totalCredits}
                </h4>
                <h2>Add Course and Grade</h2>
                <form onSubmit={handleGradeFormSubmit}>
                    <input
                        type="text"
                        name="courseName"
                        required="required"
                        placeholder="Course Name..."
                        value={gradeFormData.courseName}
                        onChange={(e) => setGradeFormData({...gradeFormData, courseName: e.target.value })}
                    />
                    <select
                        name="grade"
                        value={gradeFormData.grade}
                        onChange={(e) => setGradeFormData({...gradeFormData, grade: e.target.value})}
                    >
                        <option value="A" defaultValue>A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="D-">D-</option>
                        <option value="F">F</option>
                        <option value="AP">AP</option>
                        <option value="Pass">Pass</option>
                    </select>
                    <input
                        type="number"
                        min="1"
                        max="4"
                        name="credits"
                        required="required"
                        placeholder="Credits..."
                        value={gradeFormData.credits}
                        onChange={(e) => setGradeFormData({...gradeFormData, credits: e.target.value})}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
    );
}

export default GradeTable;