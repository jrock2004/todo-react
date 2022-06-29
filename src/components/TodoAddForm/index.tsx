import { ReactElement, SyntheticEvent } from 'react';

import { TTodoItem } from '../../todo';

export type TTodoAddForm = {
  handleTodoAdd: (todo: TTodoItem) => void;
  setShowAddForm: (show: boolean) => void;
};

export const TodoAddForm = ({ handleTodoAdd, setShowAddForm }: TTodoAddForm): ReactElement => {
  const handleFormSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      newTodoText: { value: string };
    };

    const newTodoText = target.newTodoText.value;

    if (newTodoText) {
      const newTodo: TTodoItem = {
        id: Date.now().toString(),
        title: newTodoText,
        completed: false,
      };

      handleTodoAdd(newTodo);
    }

    setShowAddForm(false);
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gray-100 opacity-80"></div>
      <form
        className="absolute bottom-0 left-0 right-0 z-10 flex h-2/5 flex-col bg-white p-8"
        onSubmit={handleFormSubmit}
      >
        <header>
          <h1 className="text-4xl">Add TODO</h1>
        </header>
        <div className="mt-8">
          <textarea
            className="h-36 w-full resize-none rounded border border-slate-500"
            name="newTodoText"
            placeholder="What needs to be done?"
          />
        </div>
        <footer className="mt-auto flex justify-end gap-3">
          <button
            className="rounded border border-slate-500 px-4 py-2 text-sm text-slate-500 hover:font-semibold hover:shadow-lg"
            data-test-id="cancel-todo-button"
            onClick={(): void => setShowAddForm(false)}
          >
            Cancel
          </button>
          <button
            className="rounded bg-slate-500 px-4 py-2 text-sm text-white hover:font-semibold hover:shadow-lg"
            data-test-id="create-todo-button"
            type="submit"
          >
            Create
          </button>
        </footer>
      </form>
    </>
  );
};
