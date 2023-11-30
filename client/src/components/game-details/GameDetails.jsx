import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from '../../services/gameService';


export default function GameDetails() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    useEffect(() => {
        gameService.getOne(gameId)
        .then(setGame)
    },[gameId]);
    
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title}/>
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                   {game.summary}
                </p>


                <p className="no-comment">No comments.</p>
            </div>





        </section>
    );
}