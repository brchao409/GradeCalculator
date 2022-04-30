import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 

import { createEntry } from '../../../actions/entries.js';

const Form = () => {

    const dispatch = useDispatch();

    const [gradeFormData, setGradeFormData] = useState({
        semester: '',
        courseName: '',
        grade: 'A',
        credits: ''
    });

    const handleGradeFormSubmit = (e) => {
        e.preventDefault();

        dispatch(createEntry(gradeFormData));

        setGradeFormData(
            {
                semester: '',
                courseName: '',
                grade: 'A',
                credits: ''
            }
        );
    }

    return (
        <>
        <h2>Add Course and Grade</h2>
        <form onSubmit={handleGradeFormSubmit}>
            <input
                type="text"
                name="semester"
                required="required"
                placeholder="Semester..."
                value={gradeFormData.semester}
                onChange={(e) => setGradeFormData({...gradeFormData, semester: e.target.value })}
            />
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
                <option value="Credit">Credit</option>
            </select>
            <input
                type="number"
                min="1"
                max="7"
                name="credits"
                required="required"
                placeholder="Credits..."
                value={gradeFormData.credits}
                onChange={(e) => setGradeFormData({...gradeFormData, credits: e.target.value})}
            /><br/>
            <button type="submit">Add</button>
        </form>
        </>
    );

}

export default Form;