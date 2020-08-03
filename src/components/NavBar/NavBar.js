import React from "react"
import logo from "../../assets/imgs/logo.png";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"


const NavBar = () => {

  const useStyles = makeStyles({
    logo: {
      maxWidth: 120,
    },
  });

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="" className={classes.logo}/>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
