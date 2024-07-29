import Square from './Square'
import { SquareProps } from './Square';
import { useState } from 'react';

export default function Board() { 
    const [squareValues, setSquareValues] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [statusMessage, setStatusMessage] = useState("X to start the game");
    return (
        <>
            <div className="status">{statusMessage}</div>
            <div className="board-row">
                <Square value={squareValues[0]} handleClick={() => handleClick(0)}/>
                <Square value={squareValues[1]} handleClick={() => handleClick(1)}/>
                <Square value={squareValues[2]} handleClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squareValues[3]} handleClick={() => handleClick(3)}/>
                <Square value={squareValues[4]} handleClick={() => handleClick(4)}/>
                <Square value={squareValues[5]} handleClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squareValues[6]} handleClick={() => handleClick(6)}/>
                <Square value={squareValues[7]} handleClick={() => handleClick(7)}/>
                <Square value={squareValues[8]} handleClick={() => handleClick(8)}/>
            </div>
        </>
    );
    
    function handleClick(address:number) : void {
        if (squareValues[address]) {
            setStatusMessage(statusMessage + ": Please play in an empty square")
            return;
        }
        const nextSquares = squareValues.slice();
        if (xIsNext) {
            nextSquares[address] = "X";
            setStatusMessage("O to play")
        } else {
            nextSquares[address] = "O";
            setStatusMessage("X to play")
        }
        setXIsNext(!xIsNext);
        setSquareValues(nextSquares);
    }
}