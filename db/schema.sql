-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS tech_blog_db;
-- CREATE DATABASE
CREATE DATABASE tech_blog_db;

-- Connect to the database
-- \c tech_blog_db

-- Create user table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
-- Create post table
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);