UPDATE user_info
SET profile_pic = $1
WHERE user_id = $2
RETURNING *