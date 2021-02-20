import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './NotFound.module.css';

const NotFound = () => (
  <Paper className={styles.container}>
    <Typography
      component="h6"
      variant="h6"
      className={styles.title}
      style={{ marginBottom: 15 }}
    >
      Информация не найдена
    </Typography>
  </Paper>
);

export default NotFound;
