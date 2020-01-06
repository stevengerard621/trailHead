create table user_info (
user_id serial primary key,
username varchar(150) not null,
user_password varchar(100) not null,
email varchar(200) not null,
profile_pic varchar(200),
bio varchar(500)
);

create table trailhead (
trailhead_id serial primary key,
trail_name varchar(150),
trail_pic varchar(200),
description varchar(10000),
distance numeric,
gain integer,
loss integer,
rating numeric,
map varchar(300)
);

create table marker (
marker_id serial primary key,
lat numeric not null,
lng numeric not null, 
trail_name varchar(150) not null,
description varchar(500),
distance numeric,
gain integer,
loss integer
);