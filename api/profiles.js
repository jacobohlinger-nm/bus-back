/**
 * Created by ohl1573 on 5/21/17.
 */
import Router from 'express';
import * as busDB from '../db/busDB';
let profiles = new Router();

profiles.get('/', (req,res) => {

    let profiles = busDB.get().collection('profiles');
    profiles.find().toArray((err,docs) => {
        console.log(docs);
        res.send(docs);
    });
});

profiles.post('/:profileId', (req,res) => {
    let profiles  = busDB.get().collection('profiles');
    profiles.insertOne({...req.body, _id: req.params.profileId}).then( (result) => {
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(500);
        res.end();
    });
});

export default profiles;
