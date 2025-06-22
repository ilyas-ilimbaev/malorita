const db = require('../db')
const nodemailer = require('nodemailer')


class sendCodeController{
    async create(req, res) {
        
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ka.datsik@gmail.com',
          pass: 'qfuz vsru iezc hwrr'
        }
      });
      
      
    
        const { email } = req.body;
        const code = Math.floor(100000 + Math.random() * 900000); 
      
        const mailOptions = {
          from: 'ka.datsik@gmail.com',
          to: email,
          subject: 'Ваш код подтверждения',
          text: `Ваш код подтверждения: ${code}`
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).send(error.toString());
          }
          res.status(200).send({ code });
        });
      
      
    }
   

   

    
}

module.exports = new sendCodeController()