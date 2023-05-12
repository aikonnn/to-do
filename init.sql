CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table if not exists users(
    id uuid DEFAULT uuid_generate_v4 (), 
    email text, 
    pass text
);


create table if not exists tasks(
    id uuid DEFAULT uuid_generate_v4 (), 
    user_id int, 
    task text, 
    urgency int
);

insert into users(email,pass) values('johnd@hotmail.com','dummypass');

