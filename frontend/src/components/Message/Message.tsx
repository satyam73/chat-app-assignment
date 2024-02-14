import { MessageProps } from './message.types';
import styles from './message.module.css';

export default function Message({
  messageRef,
  className,
  message,
}: MessageProps) {
  return (
    <div
      data-testid='message'
      ref={messageRef}
      className={`${styles['message']} ${styles[className]}`}
    >
      {message}
    </div>
  );
}
