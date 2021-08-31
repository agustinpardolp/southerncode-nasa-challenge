import React, { useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import Spanish from '../../translations/en-es/index.json';
import English from '../../translations/en-us/index.json';

export const Context = createContext();

const LanguageWrapper = ({ children }) => {
  const [locale, setLocale] = useState('en-es');
  const [messages, setMessages] = useState(Spanish);

  // function to translate
  const changeLanguage = (e) => {
    const newLocale = e.target.getAttribute('value');
    setLocale(newLocale);
    if (newLocale === 'en-us') {
      setMessages(English);
    } else setMessages(Spanish);
  };
  return (
    <Context.Provider value={{ changeLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

LanguageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LanguageWrapper;
