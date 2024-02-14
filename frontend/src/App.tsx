import React from 'react';
import { useEffect } from 'react';
import './App.css';
// import socket from '../services/socket';
import { BACKEND_BASE_URL } from '../constants';
import socket from 'services/socket';
import Message from 'components/Message/Message';

export default function App() {
  console.log(BACKEND_BASE_URL);
  useEffect(() => {
    async function getHealthOfAPI() {
      const healthResponse = await fetch(`${BACKEND_BASE_URL}/health`);
      const healthData = await healthResponse.json();
      console.log(healthData);
    }
    getHealthOfAPI();
  }, []);

  useEffect(() => {
    socket.connect();
  });
  return (
    <h1>
      <Message message='hello' className='right' />
    </h1>
  );
}
