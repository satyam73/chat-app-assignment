import { Box } from '@mui/material';
import styles from './chatScreen.module.css';
import MessageComponent from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import { useEffect, useRef } from 'react';
import socket from '@/src/services/socket';
import { ChatScreenProps, Message, User } from './chatScreen.types';

export default function ChatScreen({
  activeUsers,
  messages,
  setMessages,
  selfUser,
}: ChatScreenProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    socket.on('receive-message', (message: Message) => {
      setMessages((prevMessages: Message[]): Message[] => {
        return [...prevMessages, message];
      });
    });
  }, []);

  function messageSendHandler() {
    const sanitizedMessage: string | null =
      inputRef?.current?.value?.trim() ?? null;

    if (!sanitizedMessage) return;

    socket.emit('send-message', sanitizedMessage);
    inputRef.current!.value = '';
  }

  return (
    <Box className={styles['chat-screen']}>
      <Box className={styles['chat-screen__users']}>
        {activeUsers?.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </Box>
      <Box className={styles['chat-screen__messages']}>
        <Box className={styles['chat-screen__messages-list']}>
          {messages?.map((message: Message) => (
            <MessageComponent
              key={message.id}
              message={`${message.user.name}: ${message.message}`}
              className={selfUser?.id == message?.user?.id ? 'right' : 'left'}
            />
          ))}
        </Box>
        <ChatInput inputRef={inputRef} onMessageSend={messageSendHandler} />
      </Box>
    </Box>
  );
}
