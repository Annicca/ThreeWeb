import { useRef } from 'preact/hooks';

function TodoForm(props) {
  // Создаем ссылку для привязки к элементу `input` с помощью атрибута `ref` (см. разметку)
  const inputRef = useRef(null);

  // Обработчик добавления новой задачи
  const addTodo = () => {
    props.onSubmit(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  // Обработчик клавиши `Enter`
  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;

    addTodo();
  };

  return (
    <form class = "form" onSubmit={addTodo}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Новая задача'
          autofocus
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
        >
          Добавить
        </button>
    </form>
  );
}

export default TodoForm;