# twitter-clone-react-native
A Twitter clone using graphql and react-native.

**Steps:**
~$ git clone

**For Server**
server~$ npm install

**Add constants.js in server/src/config/**
export default {
    PORT: process.env.port | 8081,
    DB_URL: 'mongodb://*****',
    GRAPHQL_PATH: '/graphql',
};

Note: Provide DB_URL of mongodb local path or mlab db uri.

# For Mobile
mobile~$ npm install

**Setup for Expo to run app on Expo**
Install Expo as global dependency
~$ npm install exp --global

**Start with expo**
mobile$ exp start






