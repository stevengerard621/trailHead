UPDATE user_info
SET bio = $1
WHERE user_id = $2
RETURNING *