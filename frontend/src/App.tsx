import { useEffect } from 'react';
import './App.css';
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

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
  return <h1>Hello from React app!</h1>;
}
