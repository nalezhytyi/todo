export const initialState =
  localStorage.getItem('todos') == null
    ? [
        {
          id: 1,
          title: 'добавить кнопку очистить все задачи',
          completed: false,
        },
        {
          id: 2,
          title: 'сделать фильтр по completed',
          completed: false,
        },
        {
          id: 3,
          title: 'исправить событие onBlur',
          completed: true,
        },
        {
          id: 4,
          title: 'сделать sticky input header',
          completed: true,
        },
        {
          id: 5,
          title: 'добавить кнопку edit',
          completed: true,
        },
        {
          id: 6,
          title: 'edit feature',
          completed: true,
        },
      ]
    : JSON.parse(localStorage.getItem('todos'));

export default function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];
    case 'toggle':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case 'edit':
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          todo.title = action.payload;
          return todo;
        }
        return todo;
      });
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
