create database if not exists todo;
use todo;

create table if not exists users(
    id int PRIMARY KEY, 
    email text, 
    pass text
);


create table if not exists tasks(
    id int, 
    user_id int, 
    task text, 
    urgency int
);

