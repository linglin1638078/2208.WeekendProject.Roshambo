import React from 'react';
// Import things used for Route and Link
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Player from './components/player';
import Leaderboard from './components/Leaderboard';
import Homepage from './components/Homepage';



const App = () => {
  return (
    <div className='row container'>
      {/* The game starts here! */}
      <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        
          <Link to='/leaderboard'>
            <button>Leaderboard</button>
          </Link>
        </div>

        {/* Tells the URL in path URL what component it should load (element=) */}
      <Routes>
          
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route path="/leaderboard/:playerId" element={<Player />} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
      
    </div>
  );
};

export default App;