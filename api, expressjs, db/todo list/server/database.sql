CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id uuid default generate_uuid_v4() PRIMARY KEY,
    description VARCHAR(255)
);