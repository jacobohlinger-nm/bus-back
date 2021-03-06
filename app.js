/**
 * Created by Jacob Ohlinger on 5/21/17.
 */
import express from 'express';
import profiles from './api/profiles';
import busroutes from './api/busroutes';
import * as busDB from './db/busDB';
import bodyParser from 'body-parser';

let app = new express();
app.use(bodyParser.json());


app.use('/api/profiles', profiles);
app.use('/api/busroutes', busroutes);


app.get('/', (req, res) => {
    return res.send('ok');
}) ;

busDB.connect('mongodb://192.168.99.100:32768/bus', (err) => {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(3001, () => {
            console.log('running on ' + 3001);
        });
    }
});
