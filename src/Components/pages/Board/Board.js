import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './Board.module.css';

const Board = () => (
  <Paper elevation={3} className={styles.container}>
    <h1 className={styles.title}>Board</h1>
  </Paper>
);

export default Board;
