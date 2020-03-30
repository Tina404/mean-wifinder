# MEAN WiFinder

A fullstack web app created using the MEAN (MongoDB, Express.js, Angular, Node.js) stack

## Prerequisites

```bash
# - install node (npm is installed alongside node)
https://nodejs.org/en/

# - check node & npm version
node --version
npm --version

# - install express-generator
npm install -g express-generator
# - check express version
express --version

# - install Angular
npm install -g @angular/cli
# - check angular version
ng v

# - install MongoDB globally
# - check MongoDB version
mongo --version # Mongo shell version
mongod --version # MongoDB version

# - install mongoose
npm i mongoose
```

### MongoDB

```bash
# - set up for MongoDB
# -- create the folder "/data/db/" & change the folder owner to current user, then run mongodb
sudo mkdir -p /data/db/; sudo chown -R $USER /data/db; mongod
# -- or run mongoDB with specified folder
mkdir -p ~/mongoDB/data/db; mongod --dbpath '~/mongoDB/data/db'

# -- maybe also this temp folder
# sudo chown -R $USER /tmp/

# NOTE: running MongoDB as a service (so it automatically restarts when reboot)

mongo # to start the MongoDB shell
show dbs # show databases
use local # use a specific database
show collections # list all collections in this database
db.startup_log.find() # show all documents in collection named `startup_log`


# populate database with some test data, [example](./note/db.sh)
```

## Steps

```bash
cd mean-wifinder # go to the folder of this file
express --view=pug --git

# install dependencies:
npm install

# run the app:
DEBUG=mean-wifinder:* npm start

# use nodemon to enable app server restart on code changes
# - install nodemon
npm install -g nodemon # install globally
# - use nodemon
cd mean-wifinder # cd to the project directory
nodemon
```

### Deploy to Heroku

```bash
# test it locally with heroku local
heroku local
# - then you can try to open it at http://localhost:5000/ to check if everything is good

# then you can log into heroku, create a heroku app to push your code up for deployment
heroku login -i
heroku create tinas-mean-wifinder
# Creating ⬢ tinas-mean-wifinder... done
# https://tinas-mean-wifinder.herokuapp.com/ | https://git.heroku.com/tinas-mean-wifinder.git

# to push your code (changes) up for deployment
# - first you need to git commit your changes
# - then you can push the changes to heroku and deploy
git push heroku master
# - click on the link above to check or run
heroku open # to open the link in the browser


# use mlab via heroku addon
heroku addons:create mongolab # Create mongolab on ⬢ tinas-mean-wifinder.
# consult the mLab Add-on Admin UI to check on its progress.
# Created mongolab-transparent-93198 as MONGODB_URI

heroku addons:docs mongolab # to view documentation
heroku addons:open mongolab
heroku config:get MONGODB_URI # get the database URI
# mongodb://heroku_23xdfjkj:k23jd0sidfwenk2385nskjh22345dsf@ds289401.mlab.com:25073/heroku_23ksk23sdi8
# ^format: db-protocal://username:password@db.server.address:port/db-name


# note: examples on heroku get/set environment variables
heroku config:set NODE_ENV=production # setter
heroku config:get NODE_ENV # getter
# process.env.NODE_ENV # use this to get the env var value in the app

# to run the nodemon with environment variables, example:
NODE_ENV=production nodemon
```

### REST API

- REST: REpresentational State Transfer. REST is an architectural style rather than a strict protocol. It is stateless, having no idea of any current user state or history.
- API: Application Program Interface. API enables applications to talk to one another.
- REST API: It is a stateless interface to your application. In the case of the MEAN stack, the REST API is used to create a stateless interface to your database, enabling a way for other applications to work with the data.
- Client > HTTP request > REST API > process and/or talk to database > HTTP response > Client
- CRUD (Create, Read, Update, Delete)
  - Create a new item, e.g.
    - [POST] /locations, <https://tinas-mean-wifinder.herokuapp.com/locations>
  - Read a list of several items, e.g.
    - [GET] /locations, <https://tinas-mean-wifinder.herokuapp.com/locations>
  - Read a specific item, e.g.
    - [GET] /locations/:locationid, <https://tinas-mean-wifinder.herokuapp.com/locations/123>
  - Update a specific item, e.g.
    - [PUT] /locations/:locationid, <https://tinas-mean-wifinder.herokuapp.com/locations/123>
  - Delete a specific item, e.g.
    - [DELETE] /locations/:locationid, <https://tinas-mean-wifinder.herokuapp.com/locations/123>

### Angular

```bash
ng new wifinder-public --skipGit=true --skipTests=true --defaults=true --directory app_public

cd app_public/
ng serve
# check it out at http://localhost:4200/
# ng serve is perfect for dev env. It will rebuild your app automatically when you make code changes.
# when it comes to building the final version, you use:
ng build # this will output the built files in dist/ folder, which will be whipped out when ng serve rebuild as you make code changes.
ng build --prod --output-path build  # use this to change the ouput path to build/ folder to avoid ng serve deleting the built files.

ng g c home-list # angular generate component
ng generate pipe distance # angular generate a custom pipe named distance
ng g s wifinder-data # use angular cli to create a service (e.g. to fetch data via api calls)

ng g c framework # generate a component for angular home page navigation
```

## Summary

1. Setup and deploy a MEAN web app

    - create a new Express application
    - manage application dependencies with npm and the package.json file
    - refractor a standard Express project to the MVC architecture
    - MVC: routes > Controllers > View (& Model)
    - use Bootstrap4 and Font Awesome
    - publish the Express application live to Heroku using Git

2. Move data out of Views and into Controllers

    - define and organize routes in Express
    - use Node modules to hold the controllers
    - set up multiple sets of controllers by proper definition of the routes
    - Prototyping views with Pug and Bootstrap
    - Making reusable Pug components and mixins
    - Displaying dynamic data in Pug templates
    - Passing data from controllers to views

3. Use MongoDB and data model
    - connect a MongoDB database to an Express application using Mongoose
    - Best practices for managing Mongoose connections
    - model data using Mongoose schemas
    - How schemas compile into models
    - Using the MongoDB shell to work directly with the database
    - Pushing your database to a live URI
    - Connecting to different databases from different environments

4. Create REST API for the application

    - The best practices on creating a REST API, including URLs, request methods, and response codes
    - How the POST, GET, PUT, and DELETE HTTP request methods map to common CRUD operations
    - Mongoose helper methods for creating the helper methods
    - Ways to interact with the data through Mongoose models and how one instance of the model maps directly to one document in the database
    - How to manage subdocuments through their parent document
    - Some ways of making the API robust by checking for any possible errors you can think of so that a request is never left unanswered
    - Tested the REST APIs using Postman

5. Use REST APIs in Express Frontend

    - use the request module to make API calls from Express
    - make POST and GET requests to API endpoints
    - decoupling - keep rendering functions away from the API request logic
    - apply a simple pattern to the API logic in each controller
    - use data validation in three places in the architecture and when and why to use each

6. Create an Angular App with TypeScript
    - use Angular CLI to generate application boilerplate, components,and more
    - work with TypeScript classes, importing and exporting, and using them to define types for variables
    - control the code execution flow using Angular lifecycle hooks
    - create and use some of the Angular building blocks to put an application together, covering modules, components, pipes, and services
    - use the Angular CLI to build the app to be used for production
    - Observables and Promises are great ways of handling asynchronous requests. Observables return chunks of data in a stream, whereas Promises return complete sets of data. Angular includes the RxJS library for working with observables, including converting them into Promises.

## Reference

- [Getting MEAN with MongoDB, Express, Angular and Node, 2nd Edition](https://github.com/cliveharber/gettingMean-2)
- [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
  - Collection, Document, Schema, Path
  - [Heroku mLab doc](https://devcenter.heroku.com/articles/mongolab)
- [Express.js](http://expressjs.com/)
- [Angular](https://angular.io/)
  - [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/about/)
- [Twitter Bootstrap4](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
- [Pug.js Template Engine](https://pugjs.org)
  - [inheritance](https://pugjs.org/language/inheritance.html)
  - [include](https://pugjs.org/language/includes.html)
  - [mixins - functions](https://pugjs.org/language/mixins.html)
  - [conditionals - if-else](https://pugjs.org/language/conditionals.html)
  - [iteration - loop](https://pugjs.org/language/iteration.html)
  - [code](https://pugjs.org/language/code.html)
  - [interpolation](https://pugjs.org/language/interpolation.html)
- [Heroku](https://www.heroku.com/)
- [Lorem Ipsum - Random Text Generator](https://loremipsum.io/)
- [Postman](https://www.postman.com/)
