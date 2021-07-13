// Creating a Fully functional site using only EXPRESS & PUG template engine

// Importing Modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();  // creating an object for express

const port = 80;    // Initialzing port as 80

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()); // helps bring data from url to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'templates')) // Set the views directory

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
});
app.get('/courses', (req, res)=>{
    const params = {};
    res.status(200).render('courses.pug', params);
});
app.get('/alumnus', (req, res)=>{
    const params = {};
    res.status(200).render('alumnus.pug', params);
});
app.get('/educator', (req, res)=>{
    const params = {};
    res.status(200).render('educator.pug', params);
});
app.get('/about', (req, res)=>{
    const params = {};
    res.status(200).render('about.pug', params);
});
app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    phone = req.body.phone;
    email = req.body.emial;
    age = req.body.age;
    gender = req.body.gender;
    concern = req.body.concern;
    writetofile = `The name of client is "${name}", Age is "${age}", Gender is "${gender}", His/her contact is "${phone}", His/her email is "${email}", His/Her concern is "${concern}"\n`;
    fs.appendFileSync('Output.txt', writetofile);
    const params = {'message':'data submitted successfully'};
    res.status(200).render('contact.pug', params);
})