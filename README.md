# Bootcamp22 Newsletter
[![Build Status](https://travis-ci.com/cristinaveale/mynewsletter.svg?branch=master)](https://travis-ci.com/cristinaveale/mynewsletter)

A simple CRUD Node.js application using the DataStax Cassandra Driver and Express 4.


## Prerequisites
  - Install [DSE Cassandra](https://docs.datastax.com/en/install/6.7/install/installTOC.html) 
  - Install [Node.js](https://nodejs.org/en/download/) 
  - Install [Nodemon](https://nodemon.io/) (This is optional, watches for changes and automatically restarts the server)

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd mynewsletter
$ npm install
$ nodemon server
```

You'll then see the following in your terminal:

```sh
[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
8080 is the magic port
```
Navigate to: http://localhost:8080/

In another terminal, run `cqlsh` and run the following:
```sh
-f schema.cql -k people
```