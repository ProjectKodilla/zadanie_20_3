import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './src';

render(
    <div class="root">
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
        <DevTools />
    </Provider>
    </div>,
    document.getElementById('root')
);
