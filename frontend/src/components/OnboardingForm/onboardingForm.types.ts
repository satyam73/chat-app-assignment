import { MouseEvent, MutableRefObject, RefObject } from 'react';

export type OnboardingFormProps = {
  inputRef: RefObject<HTMLElement> | null;
  onStart: (e: MouseEvent<HTMLElement>) => void;
};
