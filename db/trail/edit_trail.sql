update marker 
set trail_name = ${trail_name},
    description = ${description},
    distance = ${distance},
    gain = ${gain},
    loss = ${loss}
where marker_id = ${marker_id}
and user_id = ${user_id}