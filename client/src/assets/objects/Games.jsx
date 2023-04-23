import Hangman from '../images/games/hangman.jpg'
import Tictactoe from '../images/games/tictactoe.jpg'
import Memory from '../images/games/memory.png'

const Game = [
    {
        title: "Hangman",
        desc: "A word game in which one player has to guess a word that the other player has thought of, by guessing the letters in it.",
        btn: "Play",
        img: `${Hangman}`,

    },
    {
        title: "Tictactoe",
        desc: "A game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.",
        btn: "Play",
        img: `${Tictactoe}`,
    },
    {
        title: "Memory",
        desc: "The game starts with all the cards face down and players take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again.",
        btn: "Play",
        img: `${Memory}`,
    },
]

export default Game