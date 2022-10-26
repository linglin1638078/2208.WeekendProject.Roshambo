import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Player = () => {
    const { playerId } = useParams();
    console.log(playerId);
    const [player, setPlayer] = useState({});
    const [isLoading, setIsLoading] = useState(false);//false when it is loading

    const getPlayerData = async () => {
        const response = await axios.get(`http://localhost:8080/api/players/${playerId}`);
        const playerInfo = await response.data;
        setPlayer(playerInfo);
        setIsLoading(true);//true when data finish loading
        console.log(player.games)
    }

    useEffect(() => {
        getPlayerData();
    }, []);



    if (!isLoading) return <p>Loading...</p>;
    else return (
        <div>
            <p>Player Name: {player.username}</p>
            <ul>{player.username}'s games:
                {player.games.map(game => {
                    return <li>Game {game.id}: {game.result}</li>
                })}
            </ul>
            
        </div>
    );
}

export default Player;