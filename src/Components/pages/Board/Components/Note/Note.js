import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import * as modalActions from '../../../../redux/actions/modal';
import styles from './Note.module.css';

const Note = ({ noteId, columnId, title, showModal, columns }) => {
  const getNote = ({ note, column }) =>
    columns
      .find(({ columnId: id }) => id === column)
      .notes.find(({ noteId: id }) => id === note);

  return (
    <Paper
      className={styles.note}
      onClick={() => {
        showModal({
          type: 'SHOW_NOTE',
          options: getNote({ note: noteId, column: columnId }),
        });
      }}
    >
      <Typography component="p" variant="caption" className={styles.noteTitle}>
        {title}
      </Typography>
      <div className={styles.user}>
        <Avatar style={{ width: 35, height: 35 }}>A</Avatar>
      </div>
    </Paper>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  columnId: PropTypes.number.isRequired,
  noteId: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      columnId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  showModal: PropTypes.func.isRequired,
};

Note.defaultProps = {
  title: '',
  columns: [],
};

const mapState = (state) => ({
  columns: state.board.columns || [],
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      showModal: modalActions.showModal,
    },
    dispatch,
  );

export default connect(mapState, mapDispatch)(Note);
