
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = process.env.PORT || 7777;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('== Lesson 27 ==');
});

app.get('/todos', (req, res) => {
    const todos = [
        {id: 1, name: 'Todo 1'}
    ];

    res.send(todos);
});

app.post('/todos', function (req, res) {
    const newTodo = {
        id: 2,
        name: 'Todo 2'
    };

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(newTodo);
});

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(json) {
        const event = JSON.parse(json);

        switch(event.type) {
            case 'SEND_MESSAGE': {
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(json);
                    }
                });
            }
            default: {
                console.log('Unknown event type');

                const error = {

                };

                ws.send('Unknown event type');
            }
        }
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});