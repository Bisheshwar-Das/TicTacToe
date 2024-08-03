'use client';
import { useState } from "react";
import Board from "@/app/functions/Board";
import calculateWinner from "@/app/functions/CalculateWinner";


export default function Game(){
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove]=useState(0);

    const currentSquares=history[currentMove];
    const xIsNext=true;
    
    
    function handlePlay(nextSquares,nextIndex){
        const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);  
        if(xIsNext){
            let pos=Math.floor(Math.random()*10)
            while(nextSquares[pos]){
                pos=Math.floor(Math.random()*10)
            }
            if(!calculateWinner(nextSquares)){
                nextSquares[pos]="O";
                setCurrentMove(currentMove+1)
            }
        }
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves=history.map((squares,move)=>{
        let description;
        if(move>0){
            description="Go to move #"+move;
        }else{
            description=<p className="bg-gray-200 rounded-xl px-4 py-1">Go to game start</p>;
        }
        return(
            <li key={move}>
                <button onClick={()=>jumpTo(move)} >{description}</button>
            </li>
        );
    });

    return (
        <main className="men">
            <section className="sesion w-80 rounded-xl">
                <div className="board">
                    <Board xIsNext={true} squares={currentSquares} onPlay={handlePlay} indexHistory={[]} />
                </div>
                <div className="text-center pb-2">
                    <ol>{moves}</ol>
                </div>
            </section>
        </main>
    )
}