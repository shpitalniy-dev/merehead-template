import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import App from './components/App'

import './styles/css/admin_style.min.css'

if (!localStorage.WORDER_device_id) {
  const device_id = () => {
    let b = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
    do {
      const c = Math.floor(Math.random() * 42 + 48);
      if (c < 58 || c > 64) b += String.fromCharCode(c);
    } while (b.length < 48);
    return b;
  };
  localStorage.setItem('WORDER_device_id', device_id());
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
