import { Button, Grid, TextField,  } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Addcourse extends Component {
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:""
    }
    onHandle=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
      
    }
    onRead=()=>{
        console.log(this.state)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then((response)=>{
            console.log(response.data)
         if(response.data.status=="success"){
             alert("successfully added")
         }
         else{
             alert("error")
         }
        })
    }
    render() {
        return (
            <div>
               <Grid container style={{padding:70}}>
               <Grid  style={{padding:5}}item xs={12} sm={6} md={6} lg={6} xl={6} >
                   <TextField
                   type="text"
                   variant="outlined"
                  margin="normal"
                  placeholde="Enter name"
                  name="courseTitle"
                  onChange={this.onHandle}
                  label="enter name"
                  fullWidth
                   />
               </Grid>
               <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6} >
               <TextField
                   type="text"
                   variant="outlined"
                  margin="normal"
                 label="enter description"
                  name="courseDescription"
                  onChange={this.onHandle}
                  fullWidth
                   />
               </Grid>
               <Grid  style={{padding:5}}item xs={12} sm={6} md={6} lg={6} xl={6} >
               <TextField
                   type="date"
                   variant="outlined"
                  margin="normal"
                  placeholde="Enter date"
                  name="courseDate"
                  onChange={this.onHandle}
                  fullWidth
                  label="enter date"
                   />
               </Grid>
               <Grid  style={{padding:5}}item xs={12} sm={6} md={6} lg={6} xl={6} >
               <TextField
                   type="text"
                   variant="outlined"
                  margin="normal"
                  label="enter duration"
                  name="ourseDuration"
                  onChange={this.onHandle}
                  fullWidth
                   />
               </Grid>
               <Grid  style={{padding:5}}item xs={12} sm={6} md={6} lg={6} xl={6} >
               <TextField
                   type="texte"
                   variant="outlined"
                  margin="normal"
                  label="enter venu"
                  name="ourseVenue"
                  onChange={this.onHandle}
                  fullWidth
                   />
                   </Grid> 
               <Grid  style={{padding:5}}item xs={12} sm={12} md={12} lg={12} xl={12} >
                   <Button
                   type="submit"
                  color="primary"
                  variant="contained"
                   fullWidth
                   onClick={this.onRead}
                   >SUBMIT</Button>
               </Grid>
               </Grid>
              

            </div>
        )
    }
}
