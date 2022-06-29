import { ReactElement } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { TodoList } from './components/TodoList';

const App = (): ReactElement => {
  return (
    <div className="relative flex h-full w-full">
      <div className="w-8 bg-slate-600 p-6 text-white md:w-80 md:min-w-80">
        <h1 className="text-4xl">My TODO&apos;s</h1>
      </div>
      <div className="flex flex-col">
        <div className="max-h-398 min-h-398 w-full">
          <img
            alt="trees in the forest"
            className="h-full w-full object-cover object-bottom"
            src="/trees.jpg"
          />
        </div>
        <div className="relative flex h-full justify-center bg-gray-100">
          <div className="-mt-20 w-3/4 self-start bg-white shadow-xl">
            <TodoList />
          </div>
          <div className="absolute bottom-8 right-8">
            <button
              className="rounded-full bg-slate-600 p-3 hover:font-semibold hover:shadow-lg"
              data-test-id="add-todo"
            >
              <PlusIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
