import React, { FC } from 'react';

import './App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
