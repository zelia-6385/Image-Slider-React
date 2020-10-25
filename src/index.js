import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import * as serviceWorker from './serviceWorker';

// images for slider
const images = [
    'http://picsum.photos/400/200',
    'http://picsum.photos/350/200',
    'http://picsum.photos/500/200',
    'http://picsum.photos/600/200',
];

ReactDOM.render(
    <React.StrictMode>
        <App images={images} />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
