import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Box, Button} from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';
import { useStyles } from './utlis';


const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{background:"radial-gradient(circle, rgba(238,174,202,1) 12%, rgba(148,187,233,1) 88%);"}}>
      <Toolbar>
        <Typography className={classes.font} variant="h4">BlogsApp</Typography>
        { isLoggedIn && ( 
        <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs 
          textColor="inherit" 
          value={value} 
          onChange={(e,val) => setValue(val)}
          >
            <Tab className={classes.font} LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/blogs/add" label= "Add Blog" />
          </Tabs>
        </Box>)}        
        <Box display="flex" marginLeft="auto">
          { !isLoggedIn && (
          <>
          <Button onClick={()=>dispatch(authActions.logout())} 
          LinkComponent={Link} 
          to="/auth" 
          variant='contained' 
          sx={{margin: 1, borderRadius:10 }} 
          color="warning">
            Login </Button>
            <Button 
            LinkComponent={Link} 
            to="/auth" 
            variant="contained" 
            sx={{margin: 1, borderRadius:10}} 
            color="warning">
            Signup
            </Button>
            </>
            )}
          {isLoggedIn && (
          <Button onClick={() =>dispatch(authActions.logout())} 
          LinkComponent={Link} 
          to="/auth" 
          variant='contained' 
          sx={{margin: 1, borderRadius:10}} 
          color="warning">
            LogOut
            </Button>
            )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;