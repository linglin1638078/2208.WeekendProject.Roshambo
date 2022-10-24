import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Player = ({selectedPlayer}) => {
    const [player, setPlayer] = useState([]);

    const getPlayerData = async () => {
        const response = await axois.get(`http://localhost:8080/api/players/${selectedPlayer}`);
        setPlayer(response.data);
    }

    useEffect(() => {
        getPlayerData();
    }, []);




    return (
        <div>
            <p>Player Name: {player.username}</p>
            <ul>{player.username}'s games:
                {player.games.map(game => {
                    <li key={game.id}>
                        {game.id}: result of the game is {game.result}
                    </li>
                })}
            </ul>
            
        </div>
    );
}

export default Player;