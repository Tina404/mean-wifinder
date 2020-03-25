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
```

## Summary

1. Setup and deploy a MEAN web app

- create a new Express application
- manage application dependencies with npm and the package.json file
- refractor a standard Express project to the MVC architecture
- MVC: routes > Controllers > View (& Model)
- use Bootstrap4 and Font Awesome
- publish the Express application live to Heroku using Git

## Reference

- [Getting MEAN with MongoDB, Express, Angular and Node, 2nd Edition](https://github.com/cliveharber/gettingMean-2)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](http://expressjs.com/)
- [Angular](https://angular.io/)
- [Node.js](https://nodejs.org/en/about/)
- [Twitter Bootstrap4](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
- [Pug.js Template Engine](https://pugjs.org)
- [Heroku](https://www.heroku.com/)
