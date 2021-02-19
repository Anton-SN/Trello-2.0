import { CHANGE_NOTE_LOCATION, ADD_COLUMN, ADD_NOTE } from '../constants/board';

export const changeNoteLocation = (payload) => ({
  type: CHANGE_NOTE_LOCATION,
  payload,
});

export const addColumn = (payload) => ({
  type: ADD_COLUMN,
  payload,
});

export const addNote = (payload) => ({
  type: ADD_NOTE,
  payload,
});
