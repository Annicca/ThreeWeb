import { useSignal, useSignalEffect } from '@preact/signals';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { getId } from '../utils/getId';

function TodoList(props) {
  const todos = useSignal([]);

  useSignalEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => (todos.value = data.slice(0, 10)));
  });

  const addTodo = (title) => {
    if (!title) return;

    todos.value = [
      ...todos.value,
      {
        id: getId(todos),
        title: title,
        completed: false,
      },
    ];
  };

  const toggleTodo = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);

    if (index === -1) return;

    todos.value = [
      ...todos.value.slice(0, index),
      { ...todos.value[index], completed: !todos.value[index].completed },
      ...todos.value.slice(index + 1),
    ];
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      {todos.value.length > 0 && (
        <ul>
          {todos.value.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={deleteTodo} />
          ))}
        </ul>
      )}
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;