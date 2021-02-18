import { CHANGE_NOTE_LOCATION, ADD_COLUMN } from '../constants/board';

export const changeNoteLocation = (payload) => ({
  type: CHANGE_NOTE_LOCATION,
  payload,
});

export const addColumn = (payload) => ({
  type: ADD_COLUMN,
  payload,
});
