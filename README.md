# Bonobos HW

## Approach

I wrote this app using a MySQL database, Node.js express HTTP server and a React Redux frontend. <br/>

To find the product, I chose to do two queries instead of using an outer join.  This was because it was easier
to handle any scenario where a product may have no associated inventory count.  There is an index on `product_id`
in the `inventory` table, so the query will be fast.  Two queries also made it easier to build the response JSON. <br/>

The Node server was created using `swagger-express-mw`, I use swagger because it is an easy way to
document the API as I develop.<br/>

I decided to use React and Redux because it was something that I don't have any experience with and I wanted
to try learning something new.  It probably took longer than I would have liked but it was a good learning
experience.  I generated the boilerplate code with phpStorm, my IDE of choice while developing APIs as of late.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Minimum Requirements
* node v8.10
* mysql v5.7

This app requires `mysql` to be installed and running.
MySQL username and password can be set in `api/.env`, the default username is `root`
and the default password is blank.  Please change to values that match a username and password
in your local environment.

### Build Instructions

This script will create the database `bonobos` and the tables `products` and `inventory`.
Next, it will run `npm install` on both the server and react app.  Finally,
it will run `npm start` on both the server and react app.

```
./startApp.sh
```

### Killing the App

This script will kill the servers running on ports 10010 and 3000, node and react, respectively.

```
./killApp.sh
```

## Running the tests

To verify the HTTP API works as expected:
```
cd api
npm test
```

This will also test the `getEditDistance` method that checks how similar two strings are based on
how many edits are required to make the strings equal.


## Potential Improvements

Remove npm warnings<br/>

I would improve upon the design as I get more familiar with React and Redux.  Learning how to get that working
didn't leave as much time for me to focus on design of the front end.<br/>

That said, based on a different design, I might change the JSON response that grouped the inventory data by `style`
to have less scrolling.<br/>

I would also use something like the Levenshtein Algorithm to determine the distance between two strings.  My 
implementation internally mutates the shorter of the two strings.<br/>

Lastly, I would containerize these services into Docker containers so they could more easily be installed and launched,
without having to worry about local dependencies. 
