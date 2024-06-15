import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from '../src/reduxstore/store.js';
import useErrorBoundary from './components/errorBoundary/useErrorBoundary.js';
import ErrorBoundary from './pages/error.jsx';


async function deferRender() {
  const { worker } = await import('../src/mockdata/browser.js');
  return worker.start();
}


deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary/>
          <App />
        <ErrorBoundary/>
      </Provider>
    </React.StrictMode>,
  );
});


