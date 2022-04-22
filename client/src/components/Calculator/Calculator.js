import React, {useState} from 'react';
import {TextField, Button, Typography, Paper,FormControl, InputLabel,Select, MenuItem, Container, Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './styles';

const Calculator = () => {
    const [showResults, setShowResults] = useState(false);
    const [Gpa, setGpa] = useState([{gpa:-1}]);
    const [gradeData,setGradeData] = useState([
        {id : uuidv4(),courseName: '', grade: '', credits:''}]);
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("gradeData",gradeData)
        setShowResults(true);
        let gpa =0;
        for (let course of gradeData) {
          switch (course.grade) {
            case 1:
              gpa += 4.0;
              break;
            
            case 2:
              gpa += 4.0;
              break;
            
            case 3:
              gpa += 3.67;
              break;
            
            case 4:
              gpa += 3.33;
              break;
            
            case 5:
              gpa += 3.0;
              break;
            
            case 6:
              gpa += 2.67;
              break;
            
            case 7:
              gpa += 2.33;
              break;
            
            case 8:
              gpa += 2.0;
              break;
            
            case 9:
              gpa += 1.67;
              break;
            
            case 10:
              gpa += 1.33;
              break;
            
            case 11:
              gpa += 1.0;
              break;
            
            case 12:
              gpa += 0.67;
              break;
            
            case 13:
              gpa += 0.0;
    
          }
        }
    
        gpa /= gradeData.length;
    
        
        setGpa({gpa:Math.round(gpa * 100) / 100});

    }
    const handleChangeInput = (id, event) => {
        const newInputFields = gradeData.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setGradeData(newInputFields);
    }
    const handleAddFields = () => {
        setGradeData([...gradeData, { id: uuidv4(),  courseName: '', grade: '', credits:''}])
      }
    
    const handleRemoveFields = id => {
        const values  = [...gradeData];
        values.splice(values.findIndex(value => value.id === id), 1);
        setGradeData(values);
    }
    const clear = () =>{
      setGradeData([
        {id : uuidv4(),courseName: '', grade: '', credits:''}]);
    }
    const Results = () => (
      <div id="results" className="search-results">
        {Gpa.gpa >= 0.0 ? <p>Your GPA is <strong>{Gpa.gpa}</strong>.</p> : ""}
      </div>
    )
    return(
        <Paper className = {classes.paper}>
         <Typography align = "center" variant="h6">Calculate your GPA</Typography>
         <form autoComplete="off" noValidate className ={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
             {gradeData.map((data =>(
                 <Container key={data.id}>
                 <Grid container>
                   <Grid item xs={4}>
                   <TextField name="courseName" variant = "outlined" label = "Course Name" value = {gradeData.courseName}onChange = {event => handleChangeInput(data.id, event)}/>
                   </Grid>
                   <Grid item xs={2}>
                   <FormControl fullWidth>
                   <InputLabel id="grade">Grade</InputLabel>
                   <Select
                     name="grade"
                     value={data.grade}
                     label="Grade"
                     onChange = {event => handleChangeInput(data.id, event)}
                   >
                        <MenuItem value={1}>A+</MenuItem>
                        <MenuItem value={2}>A</MenuItem>
                        <MenuItem value={3}>A-</MenuItem>
                        <MenuItem value={4}>B+</MenuItem>
                        <MenuItem value={5}>B</MenuItem>
                        <MenuItem value={6}>B-</MenuItem>
                        <MenuItem value={7}>C+</MenuItem>
                        <MenuItem value={8}>C</MenuItem>
                        <MenuItem value={9}>C-</MenuItem>
                        <MenuItem value={10}>D+</MenuItem>
                        <MenuItem value={11}>D</MenuItem>
                        <MenuItem value={12}>D-</MenuItem>
                        <MenuItem value={13}>F-</MenuItem>

       
                   </Select>
                   </FormControl>
                   </Grid>
                   <Grid item xs={2}>
                   <FormControl fullWidth>
                   <InputLabel id="credits">Credits</InputLabel>
                   <Select
                     name="credits"
                     value={data.credits}
                     label="Credits"
                     onChange = {event => handleChangeInput(data.id, event)}
                   >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                   </Select>
                   </FormControl>
                   </Grid>
                   <Grid item xs={4}>
                   <IconButton disabled={gradeData.length === 1} onClick={() => handleRemoveFields(data.id)}>
                       <RemoveIcon/>
                   </IconButton>
                   <IconButton onClick={handleAddFields}>
                      <AddIcon/>
                   </IconButton>
                   </Grid>
                 </Grid>
               </Container>

             )))}
            
        <Button className={classes.buttonSubmit} variant="contained" color = "primary" size ="large" type = "submit" onClick={handleSubmit}>Calculate</Button>
        <Button variant="contained" color = "secondary" size ="small" onClick={clear} >Clear</Button>
         </form>
         {showResults ? <Results /> : null }
         
        </Paper>
    );
}

export default Calculator;