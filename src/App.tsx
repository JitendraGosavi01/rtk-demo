import { FC } from 'react';
import IceCream from './components/IceCream'
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <IceCream />
    </div>
  );
};
