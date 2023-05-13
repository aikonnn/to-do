CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

create table if not exists users(
    id uuid DEFAULT uuid_generate_v4 (), 
    email text, 
    pass text
);


create table if not exists tasks(
    id uuid DEFAULT uuid_generate_v4 (), 
    user_id uuid, 
    task text, 
    urgency int
);

insert into users(email,pass) values('johnd@hotmail.com',crypt('dummypass', gen_salt('bf')));
insert into tasks(user_id, task, urgency) values(uuid_generate_v4(), 'walk the dog' ,2);

