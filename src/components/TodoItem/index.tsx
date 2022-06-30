import { ReactElement } from 'react';
import { TrashIcon } from '@heroicons/react/outline';

import { TTodoItem } from '../../todo';

export type TTodoItemProps = {
  handleTodoDelete: (item: TTodoItem) => void;
  item: TTodoItem;
  setTodo: (item: TTodoItem) => void;
};

export const TodoItem = ({ handleTodoDelete, item, setTodo }: TTodoItemProps): ReactElement => {
  const handleTodoChange = (): void => {
    setTodo({
      ...item,
      completed: !item.completed,
    });
  };

  return (
    <div className="flex flex-row items-center gap-4 border-b border-b-gray-200 p-4">
      <div className="flex w-full items-center gap-4">
        <input
          checked={item.completed}
          className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-2 focus:ring-slate-500"
          data-test-id="todo-item-status"
          id={`todo-${item.id}`}
          type="checkbox"
          onChange={handleTodoChange}
        />
        <label className="block w-full hover:cursor-pointer" htmlFor={`todo-${item.id}`}>
          {item.title}
        </label>
      </div>
      <button
        className="ml-auto"
        data-test-id="todo-item-delete"
        onClick={(): void => handleTodoDelete(item)}
      >
        <TrashIcon className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  );
};
