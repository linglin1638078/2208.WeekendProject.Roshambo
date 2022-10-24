import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Player from './player';

// On load, makes a get request to /api/players
// Stores the result in state
// Displays a list of all players usernames
// Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);

    const getPlayersData = async () => {
        const response = await axios.get(`http://localhost:8080/api/players`);
        setPlayers(response.data);
    }

    useEffect(() => {
        getPlayersData();
    }, [])
    

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>ALL PLAYERS: 
                {players.map(player => (
					<Link to={`/leaderboard/${player.id}`} key={player.id}>
						<li>{player.username}</li>
					</Link>
				))}
            </ul>
        </div>
    );
}

export default Leaderboard;