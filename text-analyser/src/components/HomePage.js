import React, { useEffect } from 'react';
import AppBarChat from './AppBarChat';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {vadarService} from '../services/FlaskService';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const useStyles = makeStyles(theme => ({
  root:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
  }
  }));

const HomePage=()=>{
    const classes=useStyles();
    const color={'green':'#7FFF00','red':'#FF0000'}
    const ref=React.useRef();
    const [message,setMessage]=React.useState();
    const [report,setReport]=React.useState("")
    const calculateStress=async ()=>{
        const vadarReport=await vadarService(ref.current.value)
        const emotion={positiveEmotion:`${vadarReport.pos*100}%`,negitiveEmotion:`${vadarReport.neg*100}%`
                        ,neutralReport:`${vadarReport.neu*100}%`}
        setReport(JSON.stringify(emotion))
    }
    useEffect(()=>{
      var x=document.getElementsByClassName("rcw-client");
      for(var i=0;i<x.length;i++){
        let col;
        i%2==0?col="green":col='red'
        x.item(i).style.background=color[col];
        x.item(i).style.color='white';
        }
    },[message]);

   const  handleNewUserMessage = (newMessage) => {
      setMessage(newMessage);
    }
    
    return (<div>
        {/* <AppBarChat/> */}
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="chat doctor"
          subtitle="group chat nikhil,tarun..."
        />
        {/* <div className={classes.root}>
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
        */}

    </div>)
}

export default HomePage;