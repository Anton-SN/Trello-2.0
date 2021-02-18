import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as noteActions from '../../redux/actions/board';
import Column from './Components/Column/Column';
import Note from './Components/Note/Note';
import styles from './Board.module.css';

const Board = ({ boardId, columns, changeLocation }) => {
  const onDragAndDrop = (result) => {
    const { source, destination } = result;
    console.info(result);
    if (!destination) {
      return;
    }
    const createBegin = ({ droppableId, index }) => ({
      beginNote: index,
      beginColumn: +droppableId.split('-').pop(),
    });
    const createEnd = ({ droppableId, index }) => ({
      endNote: index,
      endColumn: +droppableId.split('-').pop(),
    });

    changeLocation({ begin: createBegin(source), end: createEnd(destination) });
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <Typography component="h3" variant="h3" className={styles.title}>
        Board
      </Typography>
      <div className={styles.columnContainer} key={boardId}>
        <DragDropContext onDragEnd={onDragAndDrop}>
          {columns.map(({ columnId, name, notes }) => (
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
                        key={`column-${columnId}_note-${noteId}`}
                        draggableId={`column-${columnId}_note-${noteId}`}
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
          ))}
        </DragDropContext>
      </div>
    </Paper>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      columnId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  changeLocation: PropTypes.func.isRequired,
};

Board.defaultProps = {
  columns: [],
};

const mapState = (state) => ({
  boardId: state.board.boardId || 0,
  columns: state.board.columns || [],
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      changeLocation: noteActions.changeNoteLocation,
      addColumn: noteActions.addColumn,
    },
    dispatch,
  );

export default connect(mapState, mapDispatch)(Board);
