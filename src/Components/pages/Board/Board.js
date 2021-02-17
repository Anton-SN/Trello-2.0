import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Column from './Components/Column/Column';
import Note from './Components/Note/Note';
import styles from './Board.module.css';

const Board = ({ id: boardId, columns }) => (
  <Paper elevation={3} className={styles.container}>
    <Typography component="h3" variant="h3" className={styles.title}>
      Board
    </Typography>
    <div className={styles.columnContainer} key={boardId}>
      {columns.map(({ id: columnId, name, notes }) => (
        <Column key={columnId} title={name}>
          {notes.map(({ id: noteId, title }) => (
            <Note title={title} key={noteId} />
          ))}
        </Column>
      ))}
    </div>
  </Paper>
);

Board.propTypes = {
  id: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
};

Board.defaultProps = {
  columns: [],
};

const mapState = (state) => ({
  id: state.board.id || 0,
  columns: state.board.columns || [],
});

export default connect(mapState)(Board);
