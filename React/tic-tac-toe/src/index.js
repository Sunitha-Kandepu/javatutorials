import React, {useState} from "react";
import { createRoot } from "react-dom/client";
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
	const [history, setHistory] = useState([
		Array(9).fill(null),
	]);
	const [xIsNext, setXIsNext] = useState(true);
	const [stepNumber, setStepNumber] = useState(0);

	const handleClick = i => {
		const h = history.slice(0, stepNumber + 1);
		const current = h[h.length - 1];
		const squares = current.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = xIsNext ? 'X' : 'O';
		const newHistory = h.concat([squares]);
		console.log(newHistory);
		setHistory(newHistory);
		setStepNumber(h.length);
		setXIsNext(!xIsNext);
	}

	const jumpTo = step => {
		setStepNumber(step);
		setXIsNext((step % 2) === 0);
		return;
	}

	const moves = history.map((step, move) => {
		const desc = move ? 'Go to move #' + move : 'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	const current = history[stepNumber];
	const winner = calculateWinner(current);
	const setStatus = () => {
		if (winner) {
			return ('Winner: ' + winner);
		} else {
			return ('Next player: ' + (xIsNext ? 'X' : 'O'));
		}
	}
	let status = setStatus();
	return (
		<div className="game">
			<div className="game-board">
				<Board
					squares={current}
					onClick={i => handleClick(i)}
				/>
			</div>
			<div className="game-info">
				{status}
				{moves}
			</div>
		</div>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(<Game />);
