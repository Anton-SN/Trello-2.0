import { CHANGE_NOTE_LOCATION, ADD_COLUMN } from '../constants/board';

const initialState = {
  boardId: 1,
  columns: [
    {
      columnId: 1,
      name: 'Наряды',
      notes: [
        { noteId: 1, title: 'Установка плит под фундамент' },
        {
          noteId: 2,
          title:
            'Земельные работы по подготовке площадки по установке плит для несущей стены',
        },
        { noteId: 3, title: 'Установка плит под фундамент' },
        { noteId: 4, title: 'Установка плит под фундамент' },
      ],
    },
    {
      columnId: 2,
      name: 'В работе',
      notes: [
        { noteId: 1, title: 'Установка плит под фундамент' },
        { noteId: 2, title: 'Установка плит под' },
        { noteId: 3, title: 'Установка плит' },
        { noteId: 4, title: 'Установка' },
        { noteId: 5, title: 'Установка 1' },
        { noteId: 6, title: 'Установка 1 2' },
        { noteId: 7, title: 'Установка 1 2 3' },
        { noteId: 8, title: 'Установка 1 2 3 4' },
      ],
    },
    // {
    //   columnId: 3,
    //   name: 'Приёмка',
    //   notes: [
    //     {
    //       noteId: 1,
    //       title:
    //         'Земельные работы по подготовке площадки по установке плит для несущей стены',
    //     },
    //     { noteId: 2, title: 'Установка плит под фундамент' },
    //   ],
    // },
    // {
    //   columnId: 4,
    //   name: 'Завершено',
    //   notes: [
    //     { noteId: 1, title: 'Установка плит под фундамент' },
    //     { noteId: 2, title: 'Установка плит под фундамент' },
    //   ],
    // },
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
    // } else {
    // console.info(payload);
  }
  return state;
};

const addColumn = (state) => state;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NOTE_LOCATION:
      return changeNoteLocation(state, payload);
    case ADD_COLUMN:
      return addColumn(state);
    default:
      return state;
  }
};
