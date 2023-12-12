import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForms";


export default function GameDetails() {
    const {email} = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [comments, dispatch] = useReducer(reducer, [])
    const { gameId } = useParams();
   

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)

        commentService.getAll(gameId)
            .then((result)=> {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                })
            });
    }, [gameId]);

    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            gameId,
            values.comment
        );

            newComment.owner = {email};

            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            });
            
    }

    const {values, onChange, onSubmit} = useForm(addCommentHandler, {comment:''})
            // setComments(state => [...state, {...newComment, author: {email}}]);
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>


                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {comments.map(({ _id, text, owner:{email} }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>

                        ))}
                    </ul>
                    {comments.length === 0 && (<p className="no-comment">No comments.</p>)}

                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}

                {/* <!-- Bonus --> */}
                {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            </div>




        </section>
    );
}