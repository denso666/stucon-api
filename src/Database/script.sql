create database studentConnect;

create table User (
    id int primary key auto_increment,
    name varchar(128) not null,
    email varchar(128) unique not null,
    pass varchar(128) not null,
    rol varchar(30) not null,
    status boolean default 1
);

create table Student (
    user_id int not null,
    code varchar(9) unique not null,
    area varchar(4) not null,
    semester int not null,
    foreign key user_id from User( id )
);

create table Empress (
    user_id int not null,
    code varchar(9) unique not null,
    area varchar(20) not null,
    description varchar(512) not null,
    foreign key user_id from User( id )
);

create table Vacante (
    id int primary key auto_increment,
    user_id int not null,
    title varchar(128) not null,
    description varchar(512) not null,
    area varchar(20) not null,
    schedule date default now,
    status boolean default 1
);

create table Postulation (
    vacant_id int not null,
    user_id int not null,
    status boolean default 1
);