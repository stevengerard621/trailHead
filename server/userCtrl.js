module.exports = {
    addProfilePic: (req,res) => {
        const db = req.app.get('db')
        const {profile_pic} = req.body
        console.log(req.session)
        const {user_id} = req.session.user
        db.user.add_profile_pic([profile_pic, user_id]).then((pic) => res.status(200).send(pic)).catch(err => console.log(err))
    },
    addBio: (req,res) => {
        const db = req.app.get('db')
        const {bio} = req.body
        console.log(req.session)
        const {user_id} = req.session.user
        db.user.add_bio([bio, user_id]).then((bio) => res.status(200).send(bio)).catch(err => console.log(err))
    },

    getUserTrails: (req,res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        // console.log(req.session.user)
        db.user.get_user_trails(user_id).then(result => res.status(200).send(result)).catch(err => console.log(err))
    }
}