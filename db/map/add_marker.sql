INSERT INTO marker (
    lat,
    lng,
    trail_name,
    user_id
) VALUES (
$1,
$2,
$3,
$4
) 
RETURNING *;