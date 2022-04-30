import React from "react";
import { useSelector } from 'react-redux';

import GradeTable from "./GradeTable/GradeTable";
import Form from "./Form/Form";

const GradeTables = ({ currentId, setCurrentId }) => {

    const entries = useSelector((state) => state.entries);
    var totalCredits = entries.map(e => e.credits).reduce((a, b) => a + b, 0);

    return (
        <>
        <div>
            <GradeTable currentId={currentId} setCurrentId={setCurrentId}/>
            <h4>
                Total Credits = {totalCredits}<br/>
                Credits Remaining = {120 - totalCredits}
            </h4>
            <Form />
        </div>
        </>
    );

}

export default GradeTables;