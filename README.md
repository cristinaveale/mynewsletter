# Bootcamp22 Newsletter
[![Build Status](https://travis-ci.com/cristinaveale/mynewsletter.svg?branch=master)](https://travis-ci.com/cristinaveale/mynewsletter)

A simple CRUD Node.js application using the DataStax Cassandra Driver and Express 4.


## Prerequisites
  - Install [DSE Cassandra](https://docs.datastax.com/en/install/6.7/install/installTOC.html) 
  - Install [Node.js](https://nodejs.org/en/download/) 
  - Install [Nodemon](https://nodemon.io/) (Watches for changes and automatically restarts the server)

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd mynewsletter
$ npm install
$ npm start
```

You'll then see the following in your terminal:

```sh
[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Express server listening on port 8080 in development mode
index: cassandra connected to index
subscribers: cassandra connected to subscribers
subscriber: cassandra connected to subscriber
addSubscriber: cassandra connected to add subscriber
editSubscriber: cassandra connected to editSubscriber
```
Navigate to: http://localhost:8080/

In another terminal, run `cqlsh` and run the following:
```sh
-f schema.cql -k people
```