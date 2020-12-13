const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

 const CLIENT_ID = process.env.CLIENT_ID;
 const CLIENT_SECRET = process.env.CLIENT_SECRET;
 const REFRESH_TOKEN = process.env. REFRESH_TOKEN;
 const REDIRECT_URI = process.env.REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

app.post('/contact', (req, res) => {

async function sendMail(){
  try {
    const accessToken = await  oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'sophiawallacedev@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    })
    const mailOptions = {
      from: req.body.email,
      to: 'sophiwebhub@gmail.com',
      subject:`${req.body.name} via CrownBargo.com 👻`,
      html: `<p>${req.body.msg}</p>`
    };

    const result = await transport.sendMail(mailOptions)
    return result 
  } catch(error){
    return error;
  }
}

sendMail().then(result => {
    res.status(200).send('Message sent successful!');
    console.log('Email sent ...', result)
}).catch((error) => console.log(error.message));

});

