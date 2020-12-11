const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID = '311975875908-ke2hl1fuv7t1odrfnj16opsmj2qnc0j2.apps.googleusercontent.com';
const CLIENT_SECRET = 'CzgRemWcvN9rPn5B7L8mqCs7';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04SAv6hZWN4JLCgYIARAAGAQSNwF-L9Iri1A5KOLrrBJoNLrqqLhcbfOIuGcFvm3rRz4sBq0U1OVSRYC0VnBN2mUDGTLP3IRJiPc';
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

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

