import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import socketIOClient from "socket.io-client"; 
import 'react-chat-widget/lib/styles.css';
import { makeStyles } from '@material-ui/core';
import {vadarService} from '../services/FlaskService';
const sgMail = require('@sendgrid/mail');
const useStyles=makeStyles(theme=>({
 
}));
const ChatWidget=(props)=>{
    const classes=useStyles();
    const [count,setCount]=React.useState(0);
    var socket=socketIOClient("http://192.168.0.82:3001");
    useEffect(()=>{
        addResponseMessage("Welcome to this awesome chat!");
    },[])

    const sendMail= ()=>{
      sgMail.setApiKey('');
      const msg = {
        to: 'test@example.com',
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg);
    }
  //   useEffect(()=>{
  //     sendMail()
  // },[count])



    const calculateStress=async (msg)=>{
      const vadarReport=await vadarService(msg)
      const emotion={positiveEmotion:`${vadarReport.pos*100}%`,negitiveEmotion:`${vadarReport.neg*100}%`
                      ,neutralReport:`${vadarReport.neu*100}%`}
    console.log(emotion);

    const graphEmotion=[
      {text:'positive',value:vadarReport.pos*100},
      {text:'negitive',value:vadarReport.neg*100},
      {text:'neutral',value:vadarReport.neu*100}
                      ]
      props.setEmotion(graphEmotion);
              
     if(vadarReport.pos>vadarReport.neg && vadarReport.pos>vadarReport.neu) props.setHappy(1);
     else if(vadarReport.pos<vadarReport.neg && vadarReport.pos<vadarReport.neu) props.setHappy(0);
     else props.setHappy(2)

  }


    useEffect(()=>{
        socket.emit("enterRoom",'room');
        socket.on('chat',(msg)=>{
          calculateStress(msg.message)
          addResponseMessage(msg.message)
        });
        
      },[])
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        socket.emit('chat',{room:"room",message:newMessage});
      }
    return (<div>
         <Widget
         title="Chat doctor"
         subtitle="emotions are displayed in bargraph"
        //  fullScreenMode={true}
          handleNewUserMessage={handleNewUserMessage}
        />
 <button onClick={sendMail}>sendmail</button>
    </div>);
    
}

export default ChatWidget;