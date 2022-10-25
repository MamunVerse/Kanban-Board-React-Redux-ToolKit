import React from 'react';
import BoardList from "./features/kaban-board/BoardList";

function App() {

  return (
    <>
      <header className="bg-purple-700 py-4 mb-8 d-block">
        <div className="container mx-auto">
        <h4 className="text-white">
          <strong>React</strong> - 
          Kanban Board App
        </h4>
        </div>
      </header>
      <BoardList/>
    </>
  );
}

export default App;
