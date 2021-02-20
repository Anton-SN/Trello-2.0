import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './Note.module.css';

const Note = ({ options }) => {
  const { title, body } = options;
  return (
    <Paper className={styles.container}>
      <Typography
        component="h6"
        variant="h6"
        className={styles.title}
        style={{ marginBottom: 15 }}
      >
        {title}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {body}
      </Typography>
    </Paper>
  );
};

Note.propTypes = {
  options: PropTypes.shape({
    noteId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

Note.defaultProps = {
  options: {},
};

export default Note;
