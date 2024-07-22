'use client';
import { useState } from "react";
import Board from "@/app/functions/Board";
import calculateWinner from "@/app/functions/CalculateWinner";


export default function Game(){
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove]=useState(0);
    const [indexHistory,setIndexHistory]=useState([]);
    const [currentDelIndex,setCurretDelIndex]=useState(0);

    const currentSquares=history[currentMove];
    const xIsNext=currentMove%2===0;

    function handlePlay(nextSquares,nextIndex){
        if(currentMove>=7){
            console.log(nextSquares)
            console.log(currentSquares)
            const checkSquare=nextSquares.slice();
            let index=checkSquare.findIndex(item=>item==null);
            checkSquare[index]= xIsNext?"O":"X";
            if(calculateWinner(checkSquare)){
                console.log(indexHistory[currentDelIndex]);
            }else{
                console.log(indexHistory[currentDelIndex]);
                nextSquares[indexHistory[currentDelIndex]]=null;
                setCurretDelIndex(currentDelIndex+1)
            }
        }
        const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
        const nextIndexHistory=[...indexHistory.slice(0,currentMove+1),nextIndex]
        setIndexHistory(nextIndexHistory)
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
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} indexHistory={indexHistory}/>
                </div>
                <div className="text-center pb-2">
                    {moves[0]}
                </div>
            </section>
        </main>
    )
}