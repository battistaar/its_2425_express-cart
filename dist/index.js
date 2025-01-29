"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.get('/', (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello!');
});
app.get('/test', (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello Test');
});
(0, http_1.createServer)(app).listen(3000, () => {
    console.log('Server listening on port 3000');
});
