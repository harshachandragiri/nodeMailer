const nodemailer=require('nodemailer')
const sendMail=async(req,res)=>{
    //creating DummyUser
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
        //Connet with the Smtp
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: 'sonia.baumbach@ethereal.email',
            pass: 'XbBh9REXxWQucxxNX1'
            }
        });
         //Message Object
        let message = {
            from: 'HarshaChnadragiri <harsha@example.com>',
            to: 'harshac1942@gmail.com',
            subject: 'Successfully Working',
            text: 'Node Emailer is working',
            html: '<p><b>Hello Harsha</b> Working!!</p>'
        };
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
    
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
        res.send("I Am Sending Email");
    })
 
    
   
    
}

module.exports=sendMail;