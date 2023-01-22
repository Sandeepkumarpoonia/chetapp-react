import React from 'react'
import { Provider } from 'react-redux';
import Messenger from './components/chat/Messenger'
import store from "./store/store"
import "./App.css"
function App() {
  return (

    <Provider store={store}>
      <Messenger />
    </Provider>

  )
}

export default App