import { useEffect } from 'react';
import './App.css';
import socket from '../services/socket';
import { BACKEND_BASE_URL } from '../constants';

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
  return <h1>Hello from React app!</h1>;
}
