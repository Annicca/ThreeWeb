function TodoItem({ todo, onToggle, onRemove }) {
    // Обработчик переключения статуса задачи
    const toggleTodo = () => onToggle(todo.id);
    // Обработчик удаления задачи
    const deleteTodo = (event) => {
        event.stopPropagation();  // Отменяем переход по ссылке внутри кнопки
        onRemove(todo.id);
    }
  
    return (
      <li class='todo' onClick={toggleTodo}>
        <input type='checkbox' checked={todo.completed} readOnly />
        <span>{todo.title}</span>
        <button onClick={deleteTodo}>
            x
        </button>
      </li>
    );
}
  
export default TodoItem;