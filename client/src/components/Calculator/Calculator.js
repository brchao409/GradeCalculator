import React, {useState} from 'react';
import {TextField, Button, Typography, Paper,FormControl, InputLabel,Select, MenuItem, Container, Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './styles';

const Calculator = () => {
  
    const [gradeData,setGradeData] = useState([
        {courseName: '', grade: '', credits:''},
        {courseName: '', grade: '', credits:''}]);
    const classes = useStyles();
    const handleSubmit = () => {


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


    }
    return(
        <Paper className = {classes.paper}>
         <Typography align = "center" variant="h6">Calculate your GPA</Typography>
         <form autoComplete="off" noValidate className ={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
             {gradeData.map((data =>(
                 <Container key={data.id}>
                 <Grid container>
                   <Grid item xs={4}>
                   <TextField name="courseName" variant = "outlined" label = "Course Name" fullWidthvalue = {gradeData.courseName}onChange = {event => handleChangeInput(data.id, event)}/>
                   </Grid>
                   <Grid item xs={2}>
                   <FormControl fullWidth>
                   <InputLabel id="grade">Grade</InputLabel>
                   <Select
                     labelId="grade"
                     id="grade"
                     value={gradeData.grade}
                     label="Grade"
                     onChange = {event => handleChangeInput(data.id, event)}
                   >
                        <MenuItem value={10}>A+</MenuItem>
                        <MenuItem value={20}>A</MenuItem>
                        <MenuItem value={30}>A-</MenuItem>
                        <MenuItem value={40}>B+</MenuItem>
                        <MenuItem value={50}>B</MenuItem>
                        <MenuItem value={60}>B-</MenuItem>
       
                   </Select>
                   </FormControl>
                   </Grid>
                   <Grid item xs={2}>
                   <FormControl fullWidth>
                   <InputLabel id="credits">Credits</InputLabel>
                   <Select
                     labelId="credits"
                     id="credits"
                     value={gradeData.credits}
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
            
        <Button className={classes.buttonSubmit} variant="contained" color = "primary" size ="large" type = "submit">Calculate</Button>
        <Button variant="contained" color = "secondary" size ="small" onClick={clear} >Clear</Button>
         </form>
        </Paper>
    );
}

export default Calculator;