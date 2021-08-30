/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import LanguageWrapper from './components/LenguageWrapper';

ReactDOM.render(
  <LanguageWrapper>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </LanguageWrapper>,
  document.getElementById('root'),
);
