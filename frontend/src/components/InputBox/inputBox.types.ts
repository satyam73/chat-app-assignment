import { RefObject } from 'react';

export type InputBoxProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
};
