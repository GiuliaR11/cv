import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles,Grid, Typography,Divider} from "@material-ui/core";

function Skills(){
  return(
      <Grid container spacing={0} >
        <Grid item lg={12}>
          <Divider />
        </Grid>
        <Grid item>
        <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary="- Basic HTML5, CSS and JavaScript knowledge" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Medium knowledge of relational DBs, creation / use of SQL databases, MySQL" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Good knowledge of Object-Oriented-Programming (OOP) concepts" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Practical knowledge in using VersionControl, e.g. Git" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Basic knowledge of React.js" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Experienced in working with REST API’s" />
              </ListItem>
        </List>
        </Grid>
      </Grid>
      
  );
}

export default Skills;