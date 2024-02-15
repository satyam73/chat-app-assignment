import { MouseEvent, useEffect, useRef, useState } from 'react';
import OnboardingForm from 'components/OnboardingForm/OnboardingForm';
import ChatScreen from 'components/ChatScreen/ChatScreen';
import socket from '@/src/services/socket';
import { Message, User } from '../ChatScreen/chatScreen.types';
import { UserJoined, UserLeft } from './mainScreen.types';

export default function MainScreen() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [selfUser, setSelfUser] = useState<User | null>(null);
  const [activeUsers, setActiveUsers] = useState<User[] | null>(null);

  function startHandler(e: MouseEvent<HTMLElement>) {
    const sanitizedName = inputNameRef?.current?.value?.trim();
    if (!sanitizedName) return alert('Please enter valid name!');

    socket.connect();
    socket.emit('new-user-joined', sanitizedName);

    if (socket.connected) {
      setSelfUser({ id: socket.id!, name: sanitizedName! });
      setIsConnected(true);
      inputNameRef.current.value = '';
    }
  }

  useEffect(() => {
    const onUserJoined = ({ activeUsers, newUser }: UserJoined) => {
      setActiveUsers(activeUsers);
    };

    const onUserLeft = ({ activeUsers, leftUser }: UserLeft) => {
      setActiveUsers(activeUsers);
    };
    socket.on('user-joined', onUserJoined);

    socket.on('user-left', onUserLeft);
    return () => {
      socket.off('user-joined', onUserJoined);
      socket.off('user-left', onUserLeft);
    };
  }, []);

  return (
    <>
      {isConnected ? (
        <ChatScreen
          messages={messages}
          activeUsers={activeUsers}
          setMessages={setMessages}
          selfUser={selfUser}
        />
      ) : (
        <OnboardingForm inputRef={inputNameRef} onStart={startHandler} />
      )}
    </>
  );
}
