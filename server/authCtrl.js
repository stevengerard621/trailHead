const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {email, user_password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        ///needs to be async////
        let user = await db.find_email_and_hash(email);
        user = user[0];
        //IF USER DOES NOT EXIST//
        if(!user){
            return res.status(400).send('EMAIL NOT FOUND')
        }
        const authenticated = bcrypt.compareSync(user_password, user.hash);
        if(authenticated){
            delete user.hash;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('INCORRECT PASSWORD BRO')
        }
    },
    register: async(req, res) => {
        // console.log(req.body)
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
        // console.log(hash, username)
        let newUser = await db.register_user({username, email});
        // console.log(newUser[0].user_id)
        db.insert_hash({hash, user_id: newUser[0].user_id}).then(result => {
            // console.log(result)
            session.user = result[0]
            res.status(200).send(session.user)
        }).catch(err => {
            res.status(500).send({message: "Failed to register"})
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('');
        }
    },
    currentUser: (req,res) => {
        // console.log('currentUser hit')
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}