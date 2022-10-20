-- create database "Market";

-- create table "ClientInfo" (
-- 	client_info_id uuid default uuid_generate_v4 () constraint info_pk primary key,
-- 	country varchar(255) NOT NULL,
-- 	city varchar(255) NOT NULL,
-- 	address varchar(255) NOT NULL

-- )

-- create table "Clients" (
-- 	id uuid default uuid_generate_v4() constraint client_pk primary key,
-- 	username varchar(128) UNIQUE NOT NULL,
-- 	firstName varchar(128) NOT NULL,
-- 	lastName varchar(128) NOT NULL,
-- 	age integer(3) NOT NULL,
-- 	email varchar(128) NOT NULL,
-- 	client_info_id uuid default uuid_generate_v4 ()
-- )
	
-- 	create table "Orders" (
-- 		id uuid default uuid_generate_v4() constraint order_pk primary key,
-- 		client_id uuid default uuid_generate_v4(),
-- 		order_date date default current_date,
-- 		amount integer not null
-- 	)

-- create table "ItemOrders" (
-- order_id uuid default uuid_generate_v4(),
-- item_id uuid default uuid_generate_v4()
-- 	)


	
