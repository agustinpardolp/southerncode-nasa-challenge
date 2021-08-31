/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import LanguageWrapper from '../components/LenguageWrapper';
import { localStorageQueryKey } from '../hooks/constants';

export const DEBOUNCE_DELAY_TIME = 200;

export const debounce = (func, timeout = DEBOUNCE_DELAY_TIME) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const saveToLocalStorage = (key, values) => {
  const data = JSON.stringify(values);
  localStorage.setItem(key, data);
};

export const loadFromLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    if (data === null) return undefined;
    return data;
  } catch (e) {
    return undefined;
  }
};

export const removeFromLocalStorage = () => {
  localStorage.removeItem(localStorageQueryKey);
};

export const getFullWrappedComponent = (
  Component,
  props = {},
  reduxStore = store,
) => (
  <BrowserRouter>
    <MemoryRouter>
      <LanguageWrapper>
        <Provider store={reduxStore}>
          <Component {...props} />
        </Provider>
      </LanguageWrapper>
    </MemoryRouter>
  </BrowserRouter>
);
export const TEST_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost';
