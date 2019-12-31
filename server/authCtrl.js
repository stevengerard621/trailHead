const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        ///needs to be async////
        let user = await db.check_user(email);
        user = user[0];
        //IF USER DOES NOT EXIST//
        if(!user){
            return res.status(400).send('EMAIL NOT FOUND')
        }
        const authenticated = bcrypt.compareSync(password, user.user_password);
        if(authenticated){
            delete user.user_password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('INCORRECT PASSWORD BRO')
        }
    },
    register: async(req, res) => {
        const {username, user_password, email} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.check_user(email);
        user = user[0];
        if(user){
            return res.status(400).send('USER ALREADY EXISTS')
        }
        //if they don't exist salt their pw and hash that shit//
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user_password, salt);
        console.log(hash, username)
        let newUser = await db.register_user({username, hash, email});
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
}