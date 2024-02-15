import { MouseEvent, RefObject } from 'react';

export type ChatInputProps = {
  inputRef: RefObject<HTMLInputElement>;
  onMessageSend: (e: MouseEvent<HTMLElement>) => void;
};
