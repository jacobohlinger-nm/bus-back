/**
 * Created by Jacob Ohlinger on 5/21/17.
 */
import Router from 'express';
import config from '../config';
import fetch from 'isomorphic-fetch';

const busroutes = new Router();

busroutes.get('/', (req,res) => {
    fetch(config.mcts.url + 'getroutes' + '?key=' + config.mcts.apiKey + '&format=json').then((response) => {
        response.json().then((data) => {
            res.json(data["bustime-response"].routes.map((route) => {
                    return { id: route.rt, name: `${route.rt} ${route.rtnm}`, color: route.rtclr }
                }));
        }).catch(error => {
            console.log(error);
        });
    });
});

export default busroutes;
