import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles,Grid, Typography,Divider} from "@material-ui/core";


function Education(){
  return(
      <Grid container spacing={0} >
        <Grid item lg={12}>
          <Divider />
        </Grid>
        <Grid item lg={9}>
          <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary="University of Heilbronn, Germany" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- BSc in Software Engineering (Erasmus+)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="University of Transilvania, Brașov" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- BSc in Applied Computer Science (German Language)"/>
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item lg={3}>
        <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">09/2019 - 02/2020</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">09/2018 – Present</Typography>} />
              </ListItem>
            </List>
          </div>
        </Grid>
    </Grid>  
  );
}

export default Education;