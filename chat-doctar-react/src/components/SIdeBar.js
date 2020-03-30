import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    tab:{
        width:'290px',
        elevation:'50deg',
        boxShadow: '1px 0 0 0 #f1f1f3',
        backgroundColor:'#ffffff'
    },
    Tabs:{
      boxShadow: '1px 0 0 0 #f1f1f3',
        marginTop:'8%',
      
        },
        font:{
            color:'black',
            textTransform:'none',
          
        },
        ind:{
            backgroundColor:'#1665D8',
            },

            wrapper:{
              marginLeft:theme.spacing(2),
              alignItems:'flex-start',
              fontWeight:200
            }
}))

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
      
    };
  }

const SideBar=(props)=>{
    const classes=useStyles();

  
    return ( <div className={classes.tab}>
        <Tabs value={props.value} onChange={props.handleChange} aria-label="simple tabs example" 
        orientation="vertical" textColor="primary" classes={{indicator:classes.ind}} className={classes.Tabs}>
          <Tab label="MAIN MENU" {...a11yProps(0)} classes={{wrapper:classes.wrapper}} disabled={true} />
          <Tab label="Bargraph" {...a11yProps(1)}  className={classes.font}  classes={{wrapper:classes.wrapper}}/>
          <Tab label="suggestions  " {...a11yProps(2)}  className={classes.font} classes={{wrapper:classes.wrapper}}/>
          <Tab label="  " {...a11yProps(3)}  className={classes.font} classes={{wrapper:classes.wrapper}}/>
          <Tab label="  " {...a11yProps(4)}  className={classes.font} classes={{wrapper:classes.wrapper}}/>
          <Tab label="  " {...a11yProps(5)}  className={classes.font} classes={{wrapper:classes.wrapper}}/>
        </Tabs>
        </div>)
}

export default SideBar;