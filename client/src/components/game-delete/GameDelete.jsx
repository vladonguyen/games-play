import { useNavigate, useParams } from 'react-router-dom'
import *  as gameService from "../../services/gameService";
import { useEffect } from 'react';

export default function GameDelete() {
    const navigate = useNavigate();
    const { gameId } = useParams();

    useEffect(() => {
        gameService.deleteGame(gameId);
        navigate('/games');
    }, [gameId]);



















}