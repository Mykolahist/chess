import React, { useEffect, useState } from "react";
import { BoardComponent } from "./components/BoardComponent";
import { Board } from "./models/Board";

import "./App.css";

export const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};
