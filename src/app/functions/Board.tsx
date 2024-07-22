import calculateWinner from "./CalculateWinner";
import Square from "./Square";

export default function Board({xIsNext,squares,onPlay,indexHistory}){
    function handleClick(i){
        if(squares[i] || calculateWinner(squares)) return;
        const nextIndex=i;
        const nextSquares=squares.slice();
        if(xIsNext){
            nextSquares[i]="X";
        }else{
            nextSquares[i]="O";
        }
        onPlay(nextSquares,nextIndex);
    }

    const squaresFull=(squares.includes(null));
    const winner=calculateWinner(squares);
    let status;
    if(winner){
        status = <p><span className="text-green-400">Winner : </span> { winner}</p>;
    }else if(!squaresFull ){
        status=<p className="text-red-500">DRAW</p>
    }else{
        status="Next player: "+ (xIsNext?"X":"O")
    }
    return (
        <main className="flex flex-col items-center">
            <div className="mt-6 mb-3 text-2xl text-white font-bold">{status}</div>
            <div className="flex flex-col">
            <div>
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div>
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div>
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
            </div>
        </main>
    )
}
