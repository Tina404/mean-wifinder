# MEAN WiFinder

A fullstack web app created using the MEAN (MongoDB, Express.js, Angular, Node.js) stack

## Prerequisites

```bash
# 1. install node (npm is installed alongside node)
https://nodejs.org/en/

# 2. check node & npm version
node --version
npm --version

# 3. install express-generator
npm install -g express-generator
# 4. check express version
express --version

# 5. install Angular
npm install -g @angular/cli
# 6. check angular version
ng v

# 7. install MongoDB

# 8. check MongoDB version
mongo --version # Mongo shell version
mongod --version # MongoDB version
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

## Reference

- [Getting MEAN with MongoDB, Express, Angular and Node, 2nd Edition](https://github.com/cliveharber/gettingMean-2)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](http://expressjs.com/)
- [Angular](https://angular.io/)
- [Node.js](https://nodejs.org/en/about/)
- [Twitter Bootstrap4](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)