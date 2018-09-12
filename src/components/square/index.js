import React from 'react';

class Square extends React.Component{
    render(){
        const {onSquareClicked, text} = this.props;
        return (<button className="square" onClick={onSquareClicked}>{text}
        </button>);
    }
}
export default Square;
