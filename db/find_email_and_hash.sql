select * from user_info u
join th_password thp on thp.user_id = u.user_id
where email = ($1);