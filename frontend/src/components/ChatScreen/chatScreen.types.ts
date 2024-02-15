import React, { SetStateAction } from 'react';
export type UserLeft = {
  leftUser: User;
  activeUsers?: User[];
};
export type User = { name: string; id: string };
export type Message = {
  id: string;
  message: string;
  user: User;
};

export type ChatScreenProps = {
  messages: Message[];
  activeUsers: User[] | null;
  setMessages: React.Dispatch<SetStateAction<Message[]>>;
  selfUser: User | null;
};
