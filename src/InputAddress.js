
import React, { useState, useEffect } from 'react';
import './style.css';

const InputAddress = (props: Object) => {
  const [state, setState] = useState({
    url: 'wss://javascript.info/article/websocket/demo/hello',
    msg: 'Hi my name is Cliff'
   });
 
  const connectSocket = () => {
    if (props.connectSocket)
      props.connectSocket(state.url, state.msg);
  }

  const disconnectSocket = () => {
    if (props.disconnectSocket)
      props.disconnectSocket();
  }

  const onChange = (event) => {
    setState({...state, url: event.target.value});
  }

  const onChangeMessage = (event) => {
    setState({...state, msg: event.target.value});
  }

  return (
    <div className="input-address p-10 width-50">
      <p className="size-12"> Address </p>
      <input type="text" value={state.url} placeholder="Input Socket Address" className="width-100 p-10 background-white" onChange={onChange}/>
      <p className="size-12"> Message to Send </p>
      <input type="text" value={state.msg} placeholder="Message to Send" className="width-100 p-10 background-white" onChange={onChangeMessage} />
      <div className="m-10">
        <button className="size-12 m-10 p-10" onClick={disconnectSocket}>Disconnect</button>
        <button className="size-12 m-10 p-10" onClick={connectSocket}>Connect</button>
      </div>
    </div>
  );
}

export default InputAddress;
