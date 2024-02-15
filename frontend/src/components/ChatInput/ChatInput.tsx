import { Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatInputProps } from './chatInput.types';
import styles from './chatInput.module.css';

export default function ChatInput({ inputRef, onMessageSend }: ChatInputProps) {
  return (
    <Box className={styles['chat-input']}>
      <input
        type='text'
        name='message'
        id='message'
        aria-labelledby='message'
        ref={inputRef}
        className={styles['chat-input__input']}
      />
      <IconButton
        onClick={onMessageSend}
        className={styles['chat-input__send-button']}
      >
        <SendIcon fontSize='medium' />
      </IconButton>
    </Box>
  );
}
