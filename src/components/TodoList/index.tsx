import { ReactElement, useEffect, useState } from 'react';

import { TTodoItem } from '../../todo';
import { data } from '../../mocks/data';
import { TodoItem } from '../TodoItem';

export const TodoList = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<TTodoItem[]>(data);

  useEffect(() => {
    const fakeLoader = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fakeLoader);
    };
  }, []);

  const handleTodoChange = (item: TTodoItem): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleTodoDelete = (item: TTodoItem): void => {
    const newTodos = todos.filter((todo) => todo.id !== item.id);

    setTodos(newTodos);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pb-16">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            handleTodoDelete={handleTodoDelete}
            item={todo}
            setTodo={handleTodoChange}
          />
        ))}
      </div>
    );
  }
};
