import React, {Fragment} from 'react';
import Square from '../square';
 
class Board extends React.Component{
 
  constructor(props){
    super(props);
    
    this.chunkArray = this.chunkArray.bind(this);
  }
 
  onSquareClicked(i){
    this.props.onSquareClicked(i);
  }

  renderSquare(i, text) {
    return (
          <Square index={i} onSquareClicked = {()=> this.onSquareClicked(i)} text={text} />
    );
  }
 
  chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
 
    for (index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }
 
    return tempArray;
}
 
  render() {
    const {squares} = this.props;
    const chunkedArray = this.chunkArray(squares,3);
    return (
      <Fragment>
      {chunkedArray.map((chunk, i) => (
      <div key={i} className="board-row">
        {chunk.map((text, idx) => (this.renderSquare(idx + (3 * i), text)))}
      </div>
    ))}
    </Fragment>
    );
  }
}
 
export default Board;

/*
1) restruturar construção dos squares (para que ele desenhe sozinho) - |feito |
2) cada square apresente id - square class - |feito|
3) habilitar cada square com ação no click - |feito|
4) criar logica do jogo - no Game class
  - definir dois jogadores - |feito|
  - quem joga - |
  - game over -|
      - jogo preenchido ou existe vencedor
*/ 