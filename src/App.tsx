import React, {ChangeEvent} from 'react';
import './i18n'
import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import {availableLanguages} from "./i18n";

function App() {
  const {t, i18n} = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>
        <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </header>
    </div>
  );
}

export default App;
