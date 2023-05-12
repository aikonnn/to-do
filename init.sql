create table if not exists users(
    id serial PRIMARY KEY, 
    email text, 
    pass text
);


create table if not exists tasks(
    id serial PRIMARY KEY, 
    user_id int, 
    task text, 
    urgency int
);

insert into users(email,pass) values('johnd@hotmail.com','dummypass');

