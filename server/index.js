require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING} = process.env;
      app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('MASSIVE CONNECTED')
    const PORT = SERVER_PORT || 6621;
    app.listen(PORT, () => console.log(`${PORT} FIRING ON ALL CYLINDERS`))
})
