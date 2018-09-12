import React, {Component} from 'react';
import Board from '../board';
import '../../index.css';

class Game extends React.Component{

	constructor(props){
		super(props);

		this.state={
			player: '1',
			squares: Array(9).fill(null)
		};

		this.onSquareClicked = this.onSquareClicked.bind(this);
	}

	shouldComponentUpdate(nextProps){
		const {winner} = this.props;

		if(winner) return false;
		else return true;
	}

	onSquareClicked(i){

		const {squares, player} = this.state;

		if(this.calculateWinner(squares) || squares[i] != null)
			return;
		
		squares[i] = player === '1' ? 'X' : 'O';		
		this.changePlayerTurn();

		const winner = this.calculateWinner(squares);

		this.setState({
			squares,
			winner
		});
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	changePlayerTurn(){
		const {player} = this.state;
		this.setState({
			player : player === '1' ? '2' : '1'
		});
	}

/*resetGame(){
		this.setState(this.getInitialState());

		player: '1',
		squares: Array(9).fill(null),
		winner
	}*/

  render() {

		const {player, squares, winner} = this.state;

		return (
			
		  <div className="game">
			<div className="game-board">
			  <Board
				squares={squares} onSquareClicked={this.onSquareClicked}
			  />
			</div>
		<div className="resetButton">
		//still needs work
			</div>
			<div className="game-info">
			  <div>
					<div>
					{winner ? `Winner: ${winner}` : `Next player: ${player === '1' ? 'X' : 'O'}`}</div>
				</div>
			</div>
		  </div>
		);
	}
}
export default Game;
