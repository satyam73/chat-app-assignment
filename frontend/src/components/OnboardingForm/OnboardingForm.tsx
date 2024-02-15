import { Box, Button, Typography } from '@mui/material';
import styles from './onboardingForm.module.css';
import InputBox from '../InputBox/InputBox';
import { useRef } from 'react';
export default function OnboardingForm() {
  const inputRef = useRef();
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
          variant='contained'
          className={styles['onboarding-form__button']}
        >
          Start
        </Button>
      </form>
    </Box>
  );
}
