
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import book from './selfhelp/book1.jpeg';
const sgMail = require('@sendgrid/mail');
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const sendMail= ()=>{
    sgMail.setApiKey('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');
    const msg = {
      to: 'sreetejreddy1998@gmail.com',
      from: 'sreetejreddy1998@gmail.com',
      subject: 'your fried is in depression please help',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="SelfHelp Books"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={sendMail}>
          Share
        </Button>
        <Button size="small" color="primary" onClick={()=>window.open(`${props.buy}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}