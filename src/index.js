import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let requiredPersistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={requiredPersistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)