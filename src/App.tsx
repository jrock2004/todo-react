import { ReactElement, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';

export type TFilterType = 'On the Agenda' | 'Completed' | 'All';

const App = (): ReactElement => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [filter, setFilter] = useState<TFilterType>('On the Agenda');

  return (
    <div className="flex h-full w-full">
      <Header filter={filter} setFilter={setFilter} />
      <div className="flex flex-col">
        <div className="max-h-398 min-h-398 w-full">
          <img
            alt="trees in the forest"
            className="h-full w-full object-cover object-bottom"
            src="/trees.jpg"
          />
        </div>
        <div className="flex h-full justify-center bg-gray-100">
          <div className="-mt-20 w-3/4 self-start bg-white shadow-xl">
            <TodoList filter={filter} setShowAddForm={setShowAddForm} showAddForm={showAddForm} />
          </div>
          <div className="absolute bottom-8 right-8">
            <button
              className="rounded-full bg-slate-600 p-3 hover:font-semibold hover:shadow-lg"
              data-test-id="add-todo"
              onClick={(): void => setShowAddForm(true)}
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
