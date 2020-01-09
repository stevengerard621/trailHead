update marker 
set description = ${description},
    distance = ${distance},
    gain = ${gain},
    loss = ${loss}
where marker_id = ${marker_id}
and user_id = ${user_id}