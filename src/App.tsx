import { ReactElement } from 'react';
import { PlusIcon } from '@heroicons/react/solid';

const App = (): ReactElement => {
  return (
    <div className="w-full h-full relative flex">
      <div className="w-8 md:w-80 md:min-w-80 bg-slate-600 text-white p-6">
        <h1 className="text-4xl">My TODO&apos;s</h1>
      </div>
      <div className="flex flex-col">
        <div className="min-h-398 max-h-398 w-full">
          <img
            alt="trees in the forest"
            className="h-full w-full object-cover object-bottom"
            src="/trees.jpg"
          />
        </div>
        <div className="bg-gray-100 h-full flex justify-center relative">
          <div className="bg-white shadow-lg w-3/4 self-start -mt-20">
            <h1>Cool</h1>
            <h1>Cool</h1>
            <h1>Cool</h1>
            <h1>Cool</h1>
          </div>
          <div className="absolute bottom-8 right-8">
            <button
              className="bg-slate-600 rounded-full p-3 hover:shadow-lg hover:font-semibold"
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
