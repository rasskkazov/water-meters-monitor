import { observer } from 'mobx-react';
import { MetersBoard } from '@/widgets';

import * as classes from './Main.module.scss';

export const Main = () => {
  return (
    <div className={classes.content}>
      <h1>Список счётчиков</h1>
      <MetersBoard />
    </div>
  );
};
