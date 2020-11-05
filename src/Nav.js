import React from "react"
import { AppBar,makeStyles,Toolbar,Typography,fade,Grid} from "@material-ui/core";

function Nav(){
  return(
  <div>
     <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >Radu Giulia's CV</Typography>
      </Toolbar>
     </AppBar>

  </div>
  );
}
export default Nav;