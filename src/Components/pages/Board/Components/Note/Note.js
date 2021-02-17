import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './Note.module.css';

const Note = ({ title }) => (
  <Paper className={styles.note}>
    <Typography component="p" variant="caption" className={styles.noteTitle}>
      {title}
    </Typography>
    <div className={styles.icons} />
    <div className={styles.user}>
      <Avatar style={{ width: 35, height: 35 }}>A</Avatar>
    </div>
  </Paper>
);

Note.propTypes = {
  title: PropTypes.string,
};

Note.defaultProps = {
  title: '',
};

export default Note;
