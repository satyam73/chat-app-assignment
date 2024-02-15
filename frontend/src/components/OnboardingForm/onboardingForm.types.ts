import { RefObject } from 'react';

export type OnboardingFormProps = {
  inputRef: RefObject<HTMLInputElement> | null;
  onStart: () => void;
};
