import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Theme, { GlobalStyle } from './Theme';

import App from './App/App';

render(
    <BrowserRouter>
        <Theme>
            <GlobalStyle />
            <App />
        </Theme>
    </BrowserRouter>,
    document.getElementById('root')
);
