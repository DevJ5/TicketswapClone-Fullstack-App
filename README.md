# Ticketswap Clone

A fullstack application where users can sign up and sell tickets for events. This project has a backend that is written in TypeScript with TypeORM and Routing Controllers combined with a PostgreSQL database. The front end is set up with React and Redux. Authentication is done through JWT. Last but not least for the styling Materialize.css is used.

## To run:

``` bash

# Client:
yarn install
yarn start

# Server: Create a database and update the connection string. 
yarn install
yarn start

Create an account with a password that is at least 8 characters.

Only users with the role 'ADMIN' can create events.
```
