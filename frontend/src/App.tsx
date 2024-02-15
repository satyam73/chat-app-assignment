import { useEffect } from 'react';
import './App.css';
// import socket from '../services/socket';
import { BACKEND_BASE_URL } from '../constants';
import socket from 'services/socket';
import Message from 'components/Message/Message';
import ChatScreen from 'components/ChatScreen/ChatScreen';
import OnboardingForm from 'components/OnboardingForm/OnboardingForm';
import MainScreen from 'components/MainScreen/MainScreen';

export default function App() {
  return (
    <>
      <MainScreen />
      {/* <ChatScreen /> */}
      {/* <OnboardingForm /> */}
    </>
  );
}
