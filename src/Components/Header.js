import { AppBar, Link, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import App from '../App'

export default class Header extends Component {
    render() {
        return (
            <div>
               <AppBar>
                  <Toolbar>
                      <Typography>LINK UR CODES</Typography>
                    
                     <Link>Add Course</Link>
                    <Link>Get Course</Link>
                  </Toolbar>
                  </AppBar>  
            </div>
        )
    }
}
