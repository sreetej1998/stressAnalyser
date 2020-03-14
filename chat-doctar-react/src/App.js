import React from 'react';
import AppBar from './components/AppBar';
import SideBar from './components/SIdeBar';
import ChatWidget from './components/ChatWidget';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import sad from './components/sad2.jpg';
import happyimg from './components/happy.jpg';
import neutral from './components/neutral.png';
import Suggest from './components/suggest';
import Auth from './components/Auth';
import Example from './components/graph/bargraph';


const useStyles = makeStyles(theme => ({
 cont:{
   display:'flex',
   marginLeft:theme.spacing(10),
   marginRight:theme.spacing(20)
 },

 img:{
marginLeft:"25%",
marginTop:"3%"
 },

 orient:{
   display:'flex',
   marginTop:"5%"

 }

}));

function App() {
  const [open, setOpen] = React.useState(false);
  const [happy,setHappy]=React.useState(2);
  const [emotion,setEmotion]=React.useState([
    {text: 'Positive', value: 100}, 
    {text: 'Negitive', value: 300},
    {text: 'Neutral', value: 300} 
  ]);
  const [auth,setAuth]=React.useState(false);



  
const classes=useStyles();
const img=[<img src={sad} height="200" width="200" className={classes.img}/>,<img src={happyimg} height="200" width="200" className={classes.img}/>,
<img src={neutral} height="200" width="200" className={classes.img}/>]
  const handleDrawerOpen = () => {
    setOpen(true);
  };


const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
  <div>
    {auth?
    <div>
  <AppBar handleDrawerOpen={handleDrawerOpen} />
    <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
    <ChatWidget setHappy={setHappy} setEmotion={setEmotion}/> 
    }
  <div className={classes.orient} >
{img[happy]}
<Example emotion={emotion}/></div>
<Suggest/>
</div>:<Auth setAuth={setAuth}/>}
  </div>
  );
}
export default App;