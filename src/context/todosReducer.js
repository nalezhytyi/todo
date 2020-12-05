export default function todosReducer(state, action) {
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

    case 'toggleAll':
      return state.map((todo) => {
        todo.completed = !action.payload;
        return todo;
      });

    case 'edit':
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          todo.title = action.payload;
          todo.completed = false;
          return todo;
        }
        return todo;
      });

    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);

    case 'removeCompletedTodo':
      return state.filter((todo) => todo.completed === false);

    default:
      return state;
  }
}
