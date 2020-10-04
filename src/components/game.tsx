import React from 'react';
import { Link } from 'react-router-dom';

const Game = (): JSX.Element => {

  return (
    <main>
      <div>logo</div>
      <div>
        <p>NEW GAME!</p>
      <Link to="/">home</Link>
      </div>
    </main>
  );
};

export default Game;
