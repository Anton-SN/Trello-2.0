import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import * as noteActions from '../../../../../redux/actions/board';
import styles from './AddNote.module.css';

const AddColumn = ({ columnId, onBlur, addNote }) => {
  const [title, setTitle] = useState('');

  return (
    <div className={styles.container}>
      <ClickAwayListener onClickAway={() => onBlur()}>
        <div className={styles.formContainer}>
          <Paper className={styles.inputContainer}>
            <TextField
              id="add-note"
              autoFocus
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (title !== '') {
                addNote({ columnId, title });
                setTitle('');
                onBlur();
              }
            }}
            style={{ fontSize: 12, marginTop: 10, background: 'seagreen' }}
          >
            Добавить заметку
          </Button>
        </div>
      </ClickAwayListener>
    </div>
  );
};

AddColumn.propTypes = {
  columnId: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      addNote: noteActions.addNote,
    },
    dispatch,
  );

export default connect('', mapDispatch)(AddColumn);
