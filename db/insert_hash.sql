insert into th_password(hash, user_id)
values(${hash}, ${user_id});

select u.user_id, username, email
from user_info u
join th_password t on t.user_id = u.user_id
where u.user_id = ${user_id};