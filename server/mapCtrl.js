module.exports = {
    addMarker: (req,res) => {
        const {lat, lng, trail_name} = req.body
        const db = req.app.get('db')
        db.map.add_marker([lat, lng, trail_name]).then((marker) => res.status(200).send(marker)).catch(err => console.log(err))
    },

    getMarkers: (req,res) => {
        const db = req.app.get('db')
        db.map.get_all_marker().then((marker) => res.status(200).send(marker)).catch(err => console.log(err))
    }
}