import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid";
import "./style.css"

export default function App() {

    function allNewDice() {
        let dice = [];
        for (let i=0; i<10; i++) {
            dice.push(
                {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }
            )
        }
        return dice;
    }

    const [dice, setDice] = React.useState(allNewDice())

    function rollDice() {
        setDice(prevState => prevState.map(die => {
            if (die.isHeld === true) {
                return die
            }
            else {
                return {
                    ...die,
                    value: Math.ceil(Math.random() * 6)
                }
            }
        }))
    }

    function holdSelf(id) {
        setDice(prevState => prevState.map(die => {
            if (die.id === id) {
                return {
                    ...die,
                    isHeld: !die.isHeld
                }
            }
            else {
                return die
            }
        }))
    }

    const diceElements = dice.map((die) => {
        return <Die
            key={die.id}
            id={die.id}
            isHeld={die.isHeld}
            holdSelf={holdSelf}
            value={die.value}
        />
    })

    return (
        <div className="container">
            <div className="card">
                <div className="card--title">
                    Tenzies
                </div>
                <div className="card--instruction">
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </div>
                <div className="card--dice">
                    {diceElements}
                </div>
                <button type="button" className="card--btn" onClick={rollDice}>Roll</button>
            </div>
        </div>
    )
}