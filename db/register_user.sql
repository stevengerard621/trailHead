insert into user_info (
    username,
    user_password,
    email
) values (
    ${username},
    ${hash},
    ${email}
)
returning user_id, username, email;