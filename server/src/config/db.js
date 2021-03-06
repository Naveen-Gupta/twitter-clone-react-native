import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true); // debug mode on

try {
    mongoose.connect(constants.DB_URL, {
        useMongoClient: true,
    });
} catch (err) {
    mongoose.createConnection(constants.DB_URL, {
        useMongoClient: true,
    });
}

mongoose.connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        console.error('error', e);
        throw e;
    });