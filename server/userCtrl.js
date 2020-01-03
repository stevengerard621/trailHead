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
    }
}