import MainScreen from 'components/MainScreen/MainScreen';
import './App.css';
import ToastProvider from './contexts/ToastProvider';

export default function App() {
  return (
    <ToastProvider>
      <MainScreen />
    </ToastProvider>
  );
}
