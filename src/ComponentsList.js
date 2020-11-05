import React,{useState,useEffect} from 'react';
import {makeStyles,Grid,Divider,Box,Link,Typography,Paper,Avatar, CircularProgress} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import photo from './cvphoto2020.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Profile from './Profile';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function ComponentsList(){

  const useStyles = makeStyles((theme) => ({
    container:{
      marginTop:'10px',
      padding:'10px'
    },
    description:{
      marginLeft:'10px',
      alignItems:'center',
      width:200
    },
    avatarBox:{
      display: 'flex',
      justifyContent:'center'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    avatar:{
      width:100,
      height:100
    },
    containerItem:{
     height:'250px'
    },
    title: {
      fontSize: 20,
    },
    paperStyle:{
      display:'flex',
      alignItems:'flex-start',
      flexDirection:'column',
      padding:'6px',
      paddingTop:'10px',
      marginTop:'5px',
      backgroundColor:'#e91e63'
    },
    media: {
      height: 140,
      align:'center',   
    },
  }));

  const classes = useStyles();

  return(
  <Grid container spacing={3} className={`${classes.root} ${classes.container}`}>
    <Grid item sm ={2}>
      <Card className={classes.description}>
          <Box className={classes.avatarBox}>
            <Avatar className={classes.avatar} src={photo} />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Radu Giulia
            </Typography>
            <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                      <Box mr={1} component={WorkIcon}/>
                      <Typography variant="body2" color="primary">
                        Senior Student
                      </Typography>
            </Box>
            <Box>
              <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                      <Box mr={1} component={MailIcon}/>
                      <Typography variant="body2" color="primary">
                        radugiulia@yahoo.com
                      </Typography>
              </Box>
              
              <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                      <Box mr={1} component={PhoneIcon}/>
                      <Typography variant="body2" color="primary">
                        +40756789123
                      </Typography>
              </Box>
              <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                      <Box mr={1} component={LocationOnIcon}/>
                      <Typography variant="body2" color="primary">
                        Brașov, România
                      </Typography>
              </Box>
                 <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
                    <Box mr={1} component={PersonIcon}/>
                       <Typography color="primary">
                          Profile
                        </Typography>
                    </Box>
                    <Profile/>
            </Box>
          </CardContent>
      </Card>
    </Grid>
    <Grid item sm={10} >
      <Accordion defaultExpanded='true'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
            <Box mr={1} component={WorkIcon}/>
              <Typography className={classes.title} color="primary">
                  Work Experience
              </Typography>
            </Box>
          </AccordionSummary>
        <AccordionDetails>
          <Experience/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
            <Box mr={1} component={SchoolIcon}/>
              <Typography className={classes.title} color="primary">
                Education
              </Typography>
            </Box>
            
          </AccordionSummary>
        <AccordionDetails>
          
          <Education/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box mb={1} display='flex' alignItems='center' justifyContent='flex-start'>
            <Box mr={1} component={BuildIcon}/>
              <Typography className={classes.title} color="primary">
                Skills
              </Typography>
            </Box>
          </AccordionSummary>
        <AccordionDetails>
          <Skills/>
        </AccordionDetails>
      </Accordion>
    </Grid>
  </Grid>
  );  
}

export default ComponentsList;