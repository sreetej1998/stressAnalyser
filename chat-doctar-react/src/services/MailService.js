var request = require('request');
const sgMail = require('@sendgrid/mail');
export const mailService=()=>{
    


    
sgMail.setApiKey('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');
const msg = {
  to: 'sreetejreddy1998@gmail.com',
  from: 'sreetejreddy1998@gmail.com',
  subject: 'your friend may be in some emotional distress',
  text: 'your friend is in trouble please  help him get through his hard times.',
  html: 'your friend is in trouble please  help him get through his hard times.',
};

const msg2 = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);
    
}