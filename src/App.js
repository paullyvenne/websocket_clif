import React, { useState, useEffect } from 'react';
import './App.css';
import InputAddress from  './InputAddress';
import ResultOutput from  './ResultOutput';


const App = (props: Object) => {
  const [state, setState] = useState({
   socket: null,
   timestamp: new Date().toUTCString(),
   type: '',
   payload: '',
  });
  
  const connectSocket = (url) => {
    let socket = new WebSocket(url);
    const self = this;
    socket.onopen = function(event) {
      console.log("[open] Connection established");
      console.log("Sending to server");
      socket.send("My name is John");

      console.log(event, new Date());
      setState({type: event.type, timestamp:  new Date().toUTCString()});
    };

    socket.onmessage = function(event) {
      setState({payload: event.data, timestamp:  new Date().toUTCString()});
    };

    socket.onclose = function(event) {
      setState({type: event.type, payload: event.reason, timestamp:  new Date().toUTCString()});
    };

    socket.onerror = function(error) {
      setState({type: error.type, payload: error.message, timestamp:  new Date().toUTCString()});
    };

  }

  const disconnectSocket = () => {
    if(state.socket)
      state.socket.close();
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputAddress connectSocket={connectSocket} disconnectSocket = {disconnectSocket}/>
        <ResultOutput type={state.type} timestamp={state.timestamp} payload={state.payload}/>
      </header>
    </div>
  );
}

export default App;
