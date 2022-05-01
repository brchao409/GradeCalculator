import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteEntry, fetchEntries, updateEntry } from "../../../../actions/entries.js";

const Course = ({ entry, currentId, setCurrentId }) => {

    const [currentAssignmentId, setCurrentAssignmentId] = useState(null);
    const dispatch = useDispatch();

    const [assignmentFormData, setAssignmentFormData] = useState({
        semester: '',
        courseName: '',
        grade: '',
        credits: '',
        assignments: [
            {
                assignment: '',
                assignmentGradeNumerator: '',
                assignmentGradeDenominator: ''
            }
        ]
     });

    const [state, setState] = useState({
        showForm: false,
        tempAssignment: '',
        tempAssignmentGradeNumerator: 0,
        tempAssignmentGradeDenominator: 0,
        submitted: false,
        deleted: false
    });

    const showForm = () => {
        return (
            <form onSubmit={handleAssignmentFormSubmit}>
                <input 
                    type="text"
                    name="assignment"
                    required="required"
                    placeholder="Assignment..."
                    value={assignmentFormData.assignments.assignment}
                    onChange={(e) => setState({...state, tempAssignment: e.target.value})}
                />
                <input 
                    type="number"
                    min="0"
                    name="assignmentGradeNumerator"
                    required="required"
                    placeholder="Grade..."
                    value={assignmentFormData.assignments.assignmentGradeNumerator}
                    onChange={(e) => setState({...state, tempAssignmentGradeNumerator: e.target.value})}
                />
                <input 
                    type="number"
                    min="0"
                    name="assignmentGradeDenominator"
                    required="required"
                    placeholder="Out of..."
                    value={assignmentFormData.assignments.assignmentGradeDenominator}
                    onChange={(e) => setState({...state, tempAssignmentGradeDenominator: e.target.value})}
                />
                <button type="submit">Add Assignment</button>
            </form>
        );
    }
  
    const handleAssignmentFormSubmit = (e) => {
        e.preventDefault();
 
        if(currentId){
            setAssignmentFormData({...assignmentFormData, 
                assignments: [...assignmentFormData.assignments,  { 
                    assignment: state.tempAssignment,
                    assignmentGradeNumerator: state.tempAssignmentGradeNumerator,
                    assignmentGradeDenominator: state.tempAssignmentGradeDenominator }]
            });
            setState({showForm: false, submitted: true});
        }
 
    }

    const handleAssignmentDelete = () => {
        console.log(currentAssignmentId);
        if(currentAssignmentId){
            console.log(assignmentFormData);
            setAssignmentFormData({...assignmentFormData, 
                assignments: entry.assignments.filter((e) => e._id !== currentAssignmentId)
            });
            setState({deleted: true});
        }
    }


    const ent = useSelector((state) => currentId ? state.entries.find((e) => e._id === currentId) : null);
    
    useEffect(() => {
        if(ent) setAssignmentFormData(ent);
    }, [ent]);

    useEffect(() => {
        
        dispatch(updateEntry(currentId, assignmentFormData));
    }, [assignmentFormData]);

    useEffect(() => {
        handleAssignmentDelete();
    }, [currentAssignmentId]);

    useEffect(() => {
        dispatch(fetchEntries());
        setState({submitted: false});
    }, [state.submitted === true]);

    useEffect(() => {
        dispatch(fetchEntries());
        setState({deleted: false});
    }, [state.deleted === true]);

    return(
       
        <>
        <tr key={entry._id}>
            <td><strong>{entry.courseName}</strong></td>
            <td>{entry.semester}</td>
            <td>{entry.grade}</td>
            <td>{entry.credits}</td>
            <td><button onClick={() => {setCurrentId(entry._id); setState({showForm: true})}}>Add Assignment</button></td>
            <td>
                {state.showForm ? showForm() : null}
            </td>
            <td><button onClick={() => {if (window.confirm('Are you sure you wish to delete this course?')) dispatch(deleteEntry(entry._id))}}>Delete Course</button></td>
        </tr>
        <tr>
            <td><strong>Assignments</strong></td>
            <td><strong>Grade</strong></td>
            <td><strong>Percentage</strong></td>
        </tr>
        <tr>
            <td>{entry.assignments.map(e => <li>{e.assignment}</li>)}</td>
            <td>{entry.assignments.map(e => <li>{e.assignmentGradeNumerator}/{e.assignmentGradeDenominator}</li>)}</td>
            <td>{entry.assignments.map(e => <li>{Math.round((e.assignmentGradeNumerator/e.assignmentGradeDenominator)*10000)/100}%</li>)}</td>
            <td>{entry.assignments.map(e => <li><button onClick={() => {setCurrentId(entry._id);setCurrentAssignmentId(e._id)}}>Delete</button></li>)}</td>
        </tr>
        <tr>Overall Course Grade: {entry.assignments.length === 0 ? "--" : Math.round((entry.assignments.map(e => (e.assignmentGradeNumerator/e.assignmentGradeDenominator)*10000).reduce((a, b) => a + b, 0))/entry.assignments.length)/100}%</tr>
        </>
    );

}

export default Course;