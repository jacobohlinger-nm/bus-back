/**
 * Created by ohl1573 on 5/21/17.
 */
import MongoClient from 'mongodb';

let state = {
    db: null
}

export const connect = (url, done) => {
    if (state.db) {
        return done();
    }

    MongoClient.connect(url, (err, db) => {
        if (err) {
            return done(err);
        }
        state.db = db;
        done();
    })
}

export const get = ()=> {
    return state.db
}

export const close = (done) => {
    if (state.db) {
        state.db.close((err, result) => {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}
