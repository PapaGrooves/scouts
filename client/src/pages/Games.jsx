import BigCard from "../components/BigCard";
import Game from "../assets/objects/Games";
import { useState } from "react";
import { v4 } from "uuid";
const Games = () => {

    const [game, setGame] = useState(Game);
    return(
        <>
        <div className="gamesWrap">

        {game.map((play) => {
            return (
                <BigCard key={v4()} img={play.img} title={play.title} desc={play.desc} btn={play.btn} link={play.link}/>
                )
            })}
            </div>
        </>
    );
}

export default Games;