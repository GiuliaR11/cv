import React from 'react'
import {Divider,Grid,Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from "@material-ui/core";



function Experience(){

  const useStyles = makeStyles((theme) => ({
    experienceStyle: {
      marginTop:'6px'  
    }
  }));

  const classes = useStyles();

  return(
    <Grid container className={classes.experienceStyle} spacing={0} >
        <Grid item lg={12}>
          <Divider />
        </Grid>
        <Grid item lg={9}>
          <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">Elektrobit - Summer Intern</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Developed and designed user-friendly, interactive interfeces with the main field of use in the automotive industry" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Debugged, tested and monitored user interfaces during simulation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Used GIT for version control." />
              </ListItem>

              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">Siemens - Spring Intern</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Image processing using artificial intelligence"/>
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">Pentalog – Summer Trainee</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Elektrobit - Summer Intern" />
              </ListItem>

            </List>
          </div>
        </Grid>
        <Grid item lg={3}>
        <div>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">07/2020 - 08/2020</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">05/2020 - 06/2020</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography variant="body1" color="primary">07/2017 - 08/2017</Typography>} />
              </ListItem>
            </List>
          </div>
        </Grid>
    </Grid>  
  );
}

export default Experience;