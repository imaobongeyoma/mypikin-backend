### for server setting up process
run npm init on root directory
step2: install the following dependencies by running npm i followed by the dependency name: express , cors, dotenv, axios, nodemon, jsonwebtoken, multer , cookie-parser



### for database setting up process
step 1. start your mysql server
step 2. connect to mysql server and create a new database named "mypikin", the command for this should be "create database mypikin;"
step 3. open a terminal
    
run following command at the server root directory.
1. npm init -y
2. npm install knex mysql2 dotenv
3. npm run db:migrate 
4. npm run db:seed


### update your db with the migration files and seed files
step 1: set up your env file with your database connection details. You can reference the env-sample file.
in the terminal run the following command :  npm migrate:latest  - this will set up the database schema for the mypikin
next, run the command: npm seed:run - this will populate the database table with the seed data.


### start the server
run node --watch server.js in the terminal
