INSERT INTO marker (
    lat,
    lng,
    trail_name
) VALUES (
$1,
$2,
$3
) 
RETURNING *;