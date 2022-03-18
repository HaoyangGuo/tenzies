import React from "react"
import Die from "./components/Die"
import "./style.css"

export default function App() {
    const dice = [1,1,1,2,3,4,5,6,1,1]
    const Dice = dice.map((die) => {
        return <Die
            value={die}
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
                    {Dice}
                </div>
            </div>
        </div>
    )
}