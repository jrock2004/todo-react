import { ReactElement } from 'react';
import { CheckCircleIcon, ClipboardListIcon, TagIcon } from '@heroicons/react/solid';

import { TFilterType } from '../../App';

export type THeader = {
  filter: TFilterType;
  setFilter: (filter: TFilterType) => void;
};

export const Header = ({ filter, setFilter }: THeader): ReactElement => {
  return (
    <header className="w-8 bg-slate-600 p-6 text-white md:w-80 md:min-w-80">
      <h1 className="text-4xl">My TODO&apos;s</h1>

      <div className="mt-8">
        <h2 className="text-slate-300">Overview</h2>

        <div className="mt-5 flex flex-col gap-3">
          <button
            className={`flex items-center gap-2 text-left hover:font-semibold hover:shadow-lg ${
              filter === 'On the Agenda' ? 'text-white' : 'text-slate-300'
            }`}
            data-test-id="on-the-agenda-button"
            onClick={(): void => setFilter('On the Agenda')}
          >
            <ClipboardListIcon className="h-4 w-4" />
            <span>On the Agenda</span>
          </button>
          <button
            className={`flex items-center gap-2 text-left hover:font-semibold hover:shadow-lg ${
              filter === 'Completed' ? 'text-white' : 'text-slate-300'
            }`}
            data-test-id="completed-button"
            onClick={(): void => setFilter('Completed')}
          >
            <CheckCircleIcon className="h-4 w-4" />
            <span>Completed</span>
          </button>
          <button
            className={`flex items-center gap-2 text-left hover:font-semibold hover:shadow-lg ${
              filter === 'All' ? 'text-white' : 'text-slate-300'
            }`}
            data-test-id="all-button"
            onClick={(): void => setFilter('All')}
          >
            <TagIcon className="h-4 w-4" />
            <span>All</span>
          </button>
        </div>
      </div>
    </header>
  );
};
