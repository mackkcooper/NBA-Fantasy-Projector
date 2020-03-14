import React from 'react';
import './custom.scss';

class RosterLine extends React.Component {
  constructor(props) {
    super(props);
    this.plusGame = this.plusGame.bind(this);
    this.minusGame = this.minusGame.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  plusGame() {
    this.props.plusGame(this.props.name);
  }
  
  minusGame() {
    this.props.minusGame(this.props.name);
  }

  removePlayer() {
    this.props.removePlayer(this.props.name);
  }

  render() {
    //console.log("RosterLine Props: " + this.props);
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.team}</td>
        <td>{this.props.position}</td>
        <td className="games-column">
          <button className="btn btn-sm game-btn" type="button" onClick={this.minusGame}>-</button>
          <code>{this.props.games}</code>
          <button className="btn btn-sm game-btn" type="button" onClick={this.plusGame}>+</button>
        </td>
        <td width="20px">
            <button className="btn btn-sm" type="button" onClick={this.removePlayer}>Remove</button>
        </td>
      </tr>
    )
  }
}

export default RosterLine;