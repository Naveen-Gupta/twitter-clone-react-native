import express from 'express';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import seeds from './seeds';
import middlewares from './middlewares';

const app = express();
middlewares(app);

const graphQLServer = createServer(app);

//removed faker seeds
//seeds().then(() => {
graphQLServer.listen(constants.PORT, err => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`App listen to port: ${constants.PORT}`);
    }
});
//});
