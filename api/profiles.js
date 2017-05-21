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
    res.send(req.params.profileId);
});

export default profiles;
