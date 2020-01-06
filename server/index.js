require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./authCtrl'),
      userCtrl = require('./userCtrl'),
      mapCtrl = require('./mapCtrl'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
      app = express();

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('MASSIVE CONNECTED')
    const PORT = SERVER_PORT || 6621;
    app.listen(PORT, () => console.log(`${PORT} FIRING ON ALL CYLINDERS`))
})

//AUTH ENDPOINTS//
app.post('/api/login', authCtrl.login);
app.post('/api/register', authCtrl.register);
app.post('/api/logout', authCtrl.logout);
app.get('/api/user', authCtrl.getUser);
app.get('/api/currentuser', authCtrl.currentUser)

//USER ENDPOINTS//
app.put('/api/profilepic', userCtrl.addProfilePic)
app.put('/api/bio', userCtrl.addBio)

//PROFILE MAP ENDPOINTS//
app.post('/api/marker', mapCtrl.addMarker)
app.get('/api/getmarkers', mapCtrl.getMarkers)

///MANIPULATING POSTS///
// app.get('/api/posts/:id', ctrl.getPosts)
// app.post('/api/post/:id', ctrl.addPost)
// app.delete('/api/post/:postId/:userId', ctrl.deletePost)