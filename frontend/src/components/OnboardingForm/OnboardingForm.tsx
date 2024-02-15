import { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { OnboardingFormProps } from './onboardingForm.types';
import InputBox from '../InputBox/InputBox';
import styles from './onboardingForm.module.css';

export default function OnboardingForm({
  inputRef,
  onStart,
}: OnboardingFormProps) {
  return (
    <Box className={styles['onboarding-form']}>
      <Typography variant='h1' className={styles['onboarding-form__heading']}>
        Join Chat
      </Typography>
      <form className={styles['onboarding-form__form']}>
        <InputBox
          type='text'
          name='name'
          id='name'
          label='Enter your name'
          placeholder='Enter your name'
          inputRef={inputRef}
        />
        <Button
          onClick={onStart}
          variant='contained'
          className={styles['onboarding-form__button']}
        >
          Start
        </Button>
      </form>
    </Box>
  );
}
