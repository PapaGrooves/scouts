import BigCard from "../components/BigCard";
import Game from "../assets/objects/Games";
import { useState } from "react";

const Games = () => {

    const [game, setGame] = useState(Game);
    return(
        <>
        <div className="gamesWrap">

        {game.map((play) => {
            return (
                <BigCard img={play.img} title={play.title} desc={play.desc} btn={play.btn}/>
                )
            })}
            </div>
        </>
    );
}

export default Games;