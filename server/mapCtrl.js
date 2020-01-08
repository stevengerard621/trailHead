module.exports = {
    addMarker: (req,res) => {
        const {user_id} = req.session.user
        const {lat, lng, trail_name} = req.body
        const db = req.app.get('db')
        db.map.add_marker([lat, lng, trail_name, user_id]).then((marker) => res.status(200).send(marker)).catch(err => console.log(err))
    },

    getMarkers: (req,res) => {
        const db = req.app.get('db')
        db.map.get_all_marker().then((marker) => res.status(200).send(marker)).catch(err => console.log(err))
    },

    deleteMarker: (req,res) => {
        const {marker_id} = req.params
        console.log(marker_id)
        const db = req.app.get('db')
        db.map.delete_marker(marker_id).then(marker => res.sendStatus(200)).catch(err => console.log(err))
    }
}