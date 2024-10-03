import { useState, useEffect } from 'preact/hooks';
import TodoItem from '../components/TodoItem';
import { getId } from '../utils/getId';
import TodoForm from '../components/TodoForm';

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  // Подгружаем задачи с сервера при загрузке страницы
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 10));
      });
  }, []);

  // Добавляем задачу в массив, если у нее есть заголовок
  const addTodo = (title) => {
    if (!title) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: getId(todos),
        title: title,
        completed: false,
      },
    ]);
  };

  // Меняем статус задачи
  const toggleTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) return;

    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], completed: !todos[index].completed },
      ...todos.slice(index + 1),
    ]);
  };

  // Удаляем задачу
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Отображаем задачи и форму для добавления новой
  return (
    <div>
      <h1>{props.title}</h1>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={deleteTodo} />
          ))}
        </ul>
      )}
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;