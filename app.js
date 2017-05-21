/**
 * Created by ohl1573 on 5/21/17.
 */
import express from 'express';

let app = new express();

app.get('/', (req, res) => {
    return res.send('hello world');
}) ;

app.listen(3001, () => {
   console.log('running on ' + 3001);
});