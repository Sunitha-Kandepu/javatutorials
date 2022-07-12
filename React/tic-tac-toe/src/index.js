import React, {useState} from "react";
import ReactDOM from "react-dom";
import './index.css';

const calculateWinner = squares => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

const Square = props => {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

const Board = props => {
	const RenderSquare = i => {
		return (
			<Square
				value={props.squares[i]}
				onClick={() => props.onClick(i)}
			/>
		);
	}

	return (
		<div>
			<div className="board-row">
				{RenderSquare(0)}
				{RenderSquare(1)}
				{RenderSquare(2)}
			</div>
			<div className="board-row">
				{RenderSquare(3)}
				{RenderSquare(4)}
				{RenderSquare(5)}
			</div>
			<div className="board-row">
				{RenderSquare(6)}
				{RenderSquare(7)}
				{RenderSquare(8)}
			</div>
		</div>
	);
}

const Game = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = i => {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		const newSquares = [...squares];
		newSquares[i] = xIsNext ? 'X' : 'O';
		setSquares(newSquares);
		setXIsNext(!xIsNext);
	}
	
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}
	
	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={i => handleClick(i)}/>
			</div>
			<div className="game-info">
				{status}
				{/* info */}
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
