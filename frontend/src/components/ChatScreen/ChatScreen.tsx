import { Box, Typography } from '@mui/material';
import styles from './chatScreen.module.css';
import MessageComponent from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import { useEffect, useRef } from 'react';
import socket from '@/src/services/socket';
import { ChatScreenProps, Message, User, UserLeft } from './chatScreen.types';
import { useToastMethods } from '@/src/contexts/ToastProvider';

export default function ChatScreen({
  activeUsers,
  messages,
  setMessages,
  selfUser,
}: ChatScreenProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { notifyInfo } = useToastMethods();

  useEffect(() => {
    const onMessageReceive = (message: Message) => {
      setMessages((prevMessages: Message[]): Message[] => {
        return [...prevMessages, message];
      });
    };

    socket.on('receive-message', onMessageReceive);

    return () => {
      socket.off('receive-message', onMessageReceive);
    };
  }, []);

  useEffect(() => {
    const userLeft = ({ leftUser }: UserLeft) => {
      notifyInfo(`${leftUser.name} left the chat`);
    };

    socket.on('user-left', userLeft);

    return () => {
      socket.off('user-left', userLeft);
    };
  }, []);

  function messageSendHandler() {
    const sanitizedMessage: string | null =
      inputRef?.current?.value?.trim() ?? null;

    if (!sanitizedMessage) return;

    socket.emit('send-message', sanitizedMessage);
    inputRef.current!.value = '';
  }

  const usersMapping = activeUsers?.map((user: User) => (
    <li className={styles['chat-screen__user']} key={user.id}>
      {user.name}
    </li>
  ));

  const messagesMapping = messages?.map((message: Message) => (
    <MessageComponent
      key={message.id}
      message={`${message.user.name}: ${message.message}`}
      className={selfUser?.id == message?.user?.id ? 'right' : 'left'}
    />
  ));
  return (
    <Box className={styles['chat-screen']}>
      <Box className={styles['chat-screen__users']}>
        <Typography
          variant='h1'
          className={styles['chat-screen__users-heading']}
        >
          Active Users
        </Typography>
        <Box className={styles['chat-screen__users-mapping']}>
          {usersMapping}
        </Box>
      </Box>
      <Box className={styles['chat-screen__messages']}>
        <Box className={styles['chat-screen__messages-list']}>
          {messagesMapping}
        </Box>
        <ChatInput inputRef={inputRef} onMessageSend={messageSendHandler} />
      </Box>
    </Box>
  );
}
