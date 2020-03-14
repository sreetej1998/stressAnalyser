import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from './card';
import {bookInfo} from './utils/constants';



const useStyles = makeStyles(theme => ({
    cont:{
      display:'flex',
      justifyContent:'space-around',
      flexWrap:'wrap'
    }
   }));
const Suggest=()=>{
    const classes=useStyles();
    return (<div className={classes.cont}>
        {bookInfo.map(data=>(<Card title="self Help" info={data.bookname} image={data.imageurl} buy={data.buyurl}/>))}
    </div>)
}

export default Suggest;