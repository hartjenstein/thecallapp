import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

function init() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}
init();

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

