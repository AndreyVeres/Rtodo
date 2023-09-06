import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Theme } from './styles/Theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
);
