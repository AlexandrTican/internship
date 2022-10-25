create database "Market";

create extension "uuid-ossp";

create table "ClientInfo" (
	client_info_id uuid default uuid_generate_v4 () constraint info_pk primary key,
	country varchar(255) NOT NULL,
	city varchar(255) NOT NULL,
	address varchar(255) NOT NULL

);
create table "Clients" (
	id uuid default uuid_generate_v4() constraint client_pk primary key,
	username varchar(128) UNIQUE NOT NULL,
	firstName varchar(128) NOT NULL,
	lastName varchar(128) NOT NULL,
	age int NOT NULL,
	email varchar(128) NOT NULL,
	client_info_id uuid,
	foreign key(client_info_id) references "ClientInfo"(client_info_id)
);
	
	create table "Orders" (
		id uuid default uuid_generate_v4() constraint order_pk primary key,
		client_id uuid ,
		order_date date default current_date,
		amount integer not null,
		foreign key(client_id) references "Clients"(id)	
	);
create table "Items" (
id uuid default uuid_generate_v4() constraint item_pk primary key,
item_name varchar(255) unique not null,
item_description varchar(255) not null);

create table "ItemOrders" (
order_id uuid,
item_id uuid,
foreign key(order_id) references "Orders"(id),
foreign key(item_id) references "Items"(id)
	);



	
