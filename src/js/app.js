import $ from 'jquery';

import {FormController} from './controller/FormController';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/styles.css';

$(() => {
    const socket = new WebSocket('ws://localhost:7777');

    socket.onopen = function() {
        // const message = {
        //     header: 'header',
        //     body: 'body',
        // };

        const sendMessageEvent = {
            type: 'SEND_MESSAGE',
            payload: {
                author: 'Artem',
                message: 'HI :)'
            }
        };

        const json = JSON.stringify(sendMessageEvent);

        socket.send(json);
        // socket.close();
    };

    socket.onmessage = (event) => {
        console.log('onmessage', event);
    }

    socket.onerror = (event) => {
        console.log('onerror', event);
    }

    socket.onclose = (event) => {
        console.log('onclose', event);
    }

    const controller = new FormController();
});