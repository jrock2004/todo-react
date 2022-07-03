import { ReactElement, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { TTodoItem } from '../../todo';
import { TFilterType } from '../../App';
import { TodoItem } from '../TodoItem';
import { TodoAddForm } from '../TodoAddForm';

export type TTodoList = {
  filter: TFilterType;
  showAddForm: boolean;
  setShowAddForm: (showAddForm: boolean) => void;
};

export const TodoList = ({ filter, showAddForm, setShowAddForm }: TTodoList): ReactElement => {
  const { data, error } = useSWR('/api/todos');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTodos, setFilteredTodos] = useState<TTodoItem[]>([]);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (data && filter === 'On the Agenda') {
      setFilteredTodos(data.filter((todo: TTodoItem) => !todo.completed));
    } else if (data && filter === 'Completed') {
      setFilteredTodos(data.filter((todo: TTodoItem) => todo.completed));
    } else {
      setFilteredTodos(data);
    }
  }, [filter, data]);

  useEffect(() => {
    if (data && !error) {
      setIsLoading(false);
    }
  }, [data, error]);

  const handleTodoAdd = (todo: TTodoItem): void => {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(() => {
      mutate('/api/todos', [...data, todo], false);
    });
  };

  const handleTodoChange = (item: TTodoItem): void => {
    const newTodos = data.map((todo: TTodoItem) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then(() => {
      mutate('/api/todos', newTodos, false);
    });
  };

  const handleTodoDelete = (item: TTodoItem): void => {
    fetch(`/api/todos/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    mutate('/api/todos');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="pb-16">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              handleTodoDelete={handleTodoDelete}
              item={todo}
              setTodo={handleTodoChange}
            />
          ))}
        </div>

        {showAddForm && (
          <TodoAddForm handleTodoAdd={handleTodoAdd} setShowAddForm={setShowAddForm} />
        )}
      </>
    );
  }
};
