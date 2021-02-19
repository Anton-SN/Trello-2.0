import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import * as noteActions from '../../../../redux/actions/board';
import styles from './AddColumn.module.css';

const AddColumn = ({ addColumn }) => {
  const [showButton, setState] = useState(true);
  const [title, setTitle] = useState('');

  return (
    <div className={styles.container}>
      {showButton ? (
        <Button
          variant="outlined"
          color="default"
          startIcon={<NoteAddIcon />}
          onClick={() => setState(false)}
        >
          Добавить ещё одну колонку
        </Button>
      ) : (
        <ClickAwayListener onClickAway={() => setState(true)}>
          <div className={styles.formContainer}>
            <TextField
              id="add-column"
              autoFocus
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                if (title !== '') {
                  addColumn(title);
                  setState(true);
                  setTitle('');
                }
              }}
              className={styles.button}
              style={{ fontSize: 12, marginTop: 10, background: 'seagreen' }}
            >
              Сохранить
            </Button>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

AddColumn.propTypes = {
  addColumn: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      addColumn: noteActions.addColumn,
    },
    dispatch,
  );

export default connect('', mapDispatch)(AddColumn);
