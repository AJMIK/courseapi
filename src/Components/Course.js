import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class course extends Component {
    state={
        couses:[]
    }
    getCourse=()=>{
axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then((response)=>{
    console.log(response.data)
    this.setState({
        couses:response.data
    })
})
    }
    render() {
        return (
            <div>
             
                   <Grid container style={{padding:50}}></Grid>
                   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                       <Typography>LINK UR CODES</Typography>
                       <Button
                       type="submit"
                       variant="contained"
                       margin="normal"
                       fullWidth
                       color="primary"
                       onClick={this.getCourse}
                       >
                           GET COURSE
                       </Button>
                       <TableContainer>
                           <Table>
                               <TableHead>
                                   <TableRow>
                                   <TableCell>Id</TableCell>
                                   <TableCell>CourseTitle</TableCell>
                                   <TableCell>CourseDescription</TableCell>
                                   <TableCell>CourseDate</TableCell>
                                   <TableCell>CourseDuration</TableCell>
                                   <TableCell>CourseVenue</TableCell>
                                   </TableRow>
                               </TableHead>
                               <TableBody>
                                   {this.state.couses.map((value,index)=>{
                                       return <TableRow>
                                         <TableCell>{value._id}</TableCell>
                                       <TableCell>{value.courseTitle}</TableCell>
                                       <TableCell>{value.courseDescription}</TableCell>
                                       <TableCell>{value.courseDate}</TableCell>
                                       <TableCell>{value.courseDuration}</TableCell>
                                       <TableCell>{value.courseVenue}</TableCell>
                                       </TableRow>
                                   })}
                               </TableBody>
                           </Table>
                       </TableContainer>
                   </Grid>
            </div>
        )
    }
}
