import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Column from './Components/Column/Column';
import Note from './Components/Note/Note';
import styles from './Board.module.css';

const mocks = [
  { title: 'Установка плит под фундамент' },
  {
    title:
      'Земельные работы по подготовке площадки по установке плит для несущей стены',
  },
];

const Board = () => (
  <Paper elevation={3} className={styles.container}>
    <Typography component="h3" variant="h3" className={styles.title}>
      Board
    </Typography>
    <div className={styles.columnContainer}>
      <Column>
        {mocks.map(({ title }) => (
          <Note title={title} key={title} />
        ))}
      </Column>
    </div>
  </Paper>
);

export default Board;
