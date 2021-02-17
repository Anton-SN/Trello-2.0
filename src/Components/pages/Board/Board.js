import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Column from './Components/Column/Column';
import styles from './Board.module.css';

const Board = () => (
  <Paper elevation={3} className={styles.container}>
    <Typography component="h3" variant="h3" className={styles.title}>
      Board
    </Typography>
    <div className={styles.columnContainer}>
      <Column />
    </div>
  </Paper>
);

export default Board;
