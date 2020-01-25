import React from 'react';
import AppBarChat from './AppBarChat';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {vadarService} from '../services/FlaskService';
const useStyles = makeStyles(theme => ({
  root:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
  }
  }));

const HomePage=()=>{
    const classes=useStyles();
    const ref=React.useRef()
    const [report,setReport]=React.useState("")
    const calculateStress=async ()=>{
        const vadarReport=await vadarService(ref.current.value)
        const emotion={positiveEmotion:`${vadarReport.pos*100}%`,negitiveEmotion:`${vadarReport.neg*100}%`
                        ,neutralReport:`${vadarReport.neu*100}%`}
        setReport(JSON.stringify(emotion))
    }
    
    return (<div>
        <AppBarChat/>

        <div className={classes.root}>
        <TextField
          id="standard-multiline-static"
          multiline
          rows="10"
          inputRef={ref}
        />
        <Button variant="contained" color="primary" onClick={calculateStress}>
        Calculate Stress
      </Button>

        <TextField
          id="standard-multiline-static"
          multiline
          rows="3"
          defaultValue={report}
        />
        </div>

    </div>)
}

export default HomePage;