import { CHANGE_NOTE_LOCATION, ADD_COLUMN, ADD_NOTE } from '../constants/board';

const initialState = {
  boardId: 1,
  quantityNotes: 8,
  columns: [
    {
      columnId: 1,
      name: 'Наряды',
      notes: [
        { noteId: 1, title: 'Установка плит под фундамент', body: 'body' },
        {
          noteId: 2,
          title:
            'Земельные работы по подготовке площадки по установке плит для несущей стены',
          body: 'body',
        },
      ],
    },
    {
      columnId: 2,
      name: 'В работе',
      notes: [
        { noteId: 3, title: 'Установка плит под фундамент', body: 'body' },
        { noteId: 4, title: 'Установка плит под фундамент', body: 'body' },
      ],
    },
    {
      columnId: 3,
      name: 'Приёмка',
      notes: [
        {
          noteId: 5,
          title:
            'Земельные работы по подготовке площадки по установке плит для несущей стены',
          body: 'body',
        },
        { noteId: 6, title: 'Установка плит под фундамент', body: 'body' },
      ],
    },
    {
      columnId: 4,
      name: 'Завершено',
      notes: [
        { noteId: 7, title: 'Установка плит под фундамент', body: 'body' },
        { noteId: 8, title: 'Установка плит под фундамент', body: 'body' },
      ],
    },
  ],
};

const changeNoteLocation = (state, payload) => {
  const {
    end: { endColumn, endNote },
    begin: { beginColumn, beginNote },
  } = payload;
  if (endColumn === beginColumn) {
    const result = [...state.columns[endColumn - 1].notes];
    const [removed] = result.splice(beginNote, 1);
    result.splice(endNote, 0, removed);

    return {
      ...state,
      columns: [...state.columns].map((column) => {
        if (column.columnId === endColumn) {
          return { ...column, notes: [...result] };
        }
        return column;
      }),
    };
  }
  const beginCloneNotes = [...state.columns[beginColumn - 1].notes];
  const endCloneNotes = [...state.columns[endColumn - 1].notes];
  const [removed] = beginCloneNotes.splice(beginNote, 1);
  endCloneNotes.splice(endNote, 0, removed);
  const beginCloneColumn = { ...state.columns[beginColumn - 1] };
  const endCloneColumn = { ...state.columns[endColumn - 1] };
  beginCloneColumn.notes = beginCloneNotes;
  endCloneColumn.notes = endCloneNotes;

  return {
    ...state,
    columns: [...state.columns].map((column) => {
      if (column.columnId === endColumn) {
        return { ...endCloneColumn };
      }
      if (column.columnId === beginColumn) {
        return { ...beginCloneColumn };
      }
      return column;
    }),
  };
};

const addColumn = (state, payload) => ({
  ...state,
  columns: [
    ...state.columns,
    { columnId: state.columns.length + 1, name: payload, notes: [] },
  ],
});

const addNote = (state, { columnId, title }) => ({
  ...state,
  quantityNotes: state.quantityNotes + 1,
  columns: [...state.columns].map((column) => {
    if (column.columnId === columnId) {
      return {
        ...column,
        notes: [...column.notes, { noteId: state.quantityNotes + 1, title }],
      };
    }
    return column;
  }),
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NOTE_LOCATION:
      return changeNoteLocation(state, payload);
    case ADD_COLUMN:
      return addColumn(state, payload);
    case ADD_NOTE:
      return addNote(state, payload);
    default:
      return state;
  }
};
