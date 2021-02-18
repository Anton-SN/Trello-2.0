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
      ],
    },
    {
      columnId: 2,
      name: 'В работе',
      notes: [
        { noteId: 1, title: 'Установка плит под фундамент' },
        { noteId: 2, title: 'Установка плит под фундамент' },
      ],
    },
    {
      columnId: 3,
      name: 'Приёмка',
      notes: [
        {
          noteId: 1,
          title:
            'Земельные работы по подготовке площадки по установке плит для несущей стены',
        },
        { noteId: 2, title: 'Установка плит под фундамент' },
      ],
    },
    {
      columnId: 4,
      name: 'Завершено',
      notes: [
        { noteId: 1, title: 'Установка плит под фундамент' },
        { noteId: 2, title: 'Установка плит под фундамент' },
      ],
    },
  ],
};

export default (state = initialState) => state;
