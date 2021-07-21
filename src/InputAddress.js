
import React, { useState, useEffect } from 'react';
import './style.css';

const InputAddress = (props: Object) => {
  const [state, setState] = useState({
    url: 'wss://javascript.info/article/websocket/demo/hello'
   });
 
  const connectSocket = () => {
    if (props.connectSocket)
      props.connectSocket(state.url);
  }

  const disconnectSocket = () => {
    if (props.disconnectSocket)
      props.disconnectSocket();
  }

  const onChange = (url) => {
    setState({url});
  }

  return (
    <div className="input-address p-10 width-50">
      <p className="size-12"> Address </p>
      <input type="text" value={state.url} placeholder="Input Socket Address" className="width-100 p-10 background-white" onChange={onChange}/>
      <div className="m-10">
        <button className="size-12 m-10 p-10" onClick={disconnectSocket}>Disconnect</button>
        <button className="size-12 m-10 p-10" onClick={connectSocket}>Connect</button>
      </div>
    </div>
  );
}

export default InputAddress;
