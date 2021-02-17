import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import styles from './Column.module.css';

const Column = ({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <Typography component="p" variant="body1" className={styles.title}>
        {title}
      </Typography>
      <Tooltip title="Добавить заметку" aria-label="add">
        <IconButton aria-label="Добавить" size="small">
          <AddIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
    <div>{children}</div>
  </div>
);

Column.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
};

Column.defaultProps = {
  children: [],
  title: '',
};

export default Column;
