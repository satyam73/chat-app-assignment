import { User } from '../ChatScreen/chatScreen.types';

export type UserJoined = {
  activeUsers: User[];
  newUser?: User;
};
export type UserLeft = {
  activeUsers: User[];
  leftUser?: User;
};
