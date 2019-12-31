require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./authCtrl'),
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

///MANIPULATING POSTS///
// app.get('/api/posts/:id', ctrl.getPosts)
// app.post('/api/post/:id', ctrl.addPost)
// app.delete('/api/post/:postId/:userId', ctrl.deletePost)