module.exports = {
    getTrail: (req, res) => {
        const db = req.app.get('db')
        const {marker_id} = req.params
        db.trail.get_trail(marker_id).then(result => res.status(200).send(result)).catch(err => console.log(err))
    },

    editTrail: (req, res) => {
        const {user_id} = req.session.user
        const {trail_name, description, distance, gain, loss} = req.body
        const {marker_id} = req.params
        const db = req.app.get('db')
        db.trail.edit_trail({trail_name, description, distance, gain, loss, marker_id, user_id}).then((trail) => res.status(200).send(trail)).catch(err => console.log(err))
    }
}