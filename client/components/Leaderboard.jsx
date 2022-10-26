import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';



// On load, makes a get request to /api/players
// Stores the result in state
// Displays a list of all players usernames
// Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);

    const getPlayersData = async () => {
        const response = await axios.get(`http://localhost:8080/api/players`);
        const allPlayers = await response.data;
        setPlayers(allPlayers);
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