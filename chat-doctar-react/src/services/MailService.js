var request = require('request');
const sgMail = require('@sendgrid/mail');
export const mailService=()=>{
    
    // var headers = {
    //     'Authorization': 'Bearer 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',
    //     'Content-Type': 'application/json'
    // };
    
    // var dataString = '{"personalizations": [{"to": [{"email": "rahulkotha18@gmail.com"}]}],"from": {"email": "sreetejreddy1998@gmail.com"},"subject": Your friend may need help","content": [{"type": "text/plain", "value": "your friends negitivity index is high please talk with him and make sure he is fine"}]}';
    
    // var options = {
    //     url: 'https://api.sendgrid.com/v3/mail/send',
    //     method: 'POST',
    //     headers: headers,
    //     body: dataString
    // };
    
    // function callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body);
    //     }
    // }
    

    // request(options, callback);


    
sgMail.setApiKey('');
const msg = {
  to: 'sreetejreddy1998@gmail.com',
  from: 'sreetej.nagarimadugu@zemosolabs.com',
  subject: 'suicide please',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
    
}