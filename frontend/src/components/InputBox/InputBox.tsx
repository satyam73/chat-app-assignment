import { Box } from '@mui/material';
import styles from './inputBox.module.css';
export default function InputBox({
  id,
  name,
  label,
  inputRef,
  placeholder,
  type,
}: InputBoxProps) {
  return (
    <Box className={styles['input-box']}>
      <label className={styles['input-box__label']} htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        aria-labelledby={label}
        type='text'
        name={name}
        id={id}
        className={styles['input-box__input']}
      />
    </Box>
  );
}
