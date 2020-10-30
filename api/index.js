const express = require('express')
const nodemailer = require('nodemailer')
const data = require('../assets/data.json')
const projects = require('../assets/projects.json')
const mail = process.env.MAIL;
const pass = process.env.PASS;

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'error' })
})
app.get('/data', function (req, res) {
  res.status(200).json(data);
})
app.get('/projects', function (req, res) {
  res.status(200).json(projects);
})
app.post('/contact', function (req, res) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    msg: req.body.msg
  }

  sendMail(data, res)
})

const sendMail = (data, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mail,
      pass: pass
    }
  })
  transporter.sendMail({
    from: data.email,
    to: 'aleksmalyavko@gmail.com',
    subject: 'New Message | Portfolio Site',
    text: `From: ${data.name}, message: ${data.msg}`,
    html: `<h3>Contact Form</h3> <p>Email: ${data.email}</p> <p>Name: ${data.name}</p> <p>Message: ${data.msg}</p> `,
  }, (err, info) => {
    if (err) {
      console.log(err)
      res.status(500).json({ error: 'error' })
    } else {
      console.log(info);
      res.status(200).json({ message: 'message was sent' })
    }
    res.end();
  })
}

module.exports = {
  path: '/api/',
  handler: app
}