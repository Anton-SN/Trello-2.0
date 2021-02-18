import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './Components/Column/Column';
import Note from './Components/Note/Note';
import styles from './Board.module.css';

const Board = ({ boardId, columns }) => (
  <Paper elevation={3} className={styles.container}>
    <Typography component="h3" variant="h3" className={styles.title}>
      Board
    </Typography>
    <div className={styles.columnContainer} key={boardId}>
      {columns.map(({ columnId, name, notes }) => (
        <DragDropContext>
          <Droppable droppableId={`column-${columnId}`}>
            {(provided) => (
              <div
                key={columnId}
                className={`column-${columnId}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Column title={name}>
                  {notes.map(({ noteId, title }, index) => (
                    <Draggable
                      key={`${columnId}-${noteId}`}
                      draggableId={`${columnId}-${noteId}`}
                      index={index}
                    >
                      {/* eslint-disable-next-line no-shadow */}
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Note title={title} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </Column>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ))}
    </div>
  </Paper>
);

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      columnId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
};

Board.defaultProps = {
  columns: [],
};

const mapState = (state) => ({
  boardId: state.board.boardId || 0,
  columns: state.board.columns || [],
});

export default connect(mapState)(Board);
