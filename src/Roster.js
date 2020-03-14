import React from 'react';
import './custom.scss';
import RosterLine from './RosterLine';

class Roster extends React.Component {
  generateLines() {
    var players_array = this.props.players;
    var removePlayer = this.props.removePlayer;
    var plusGame = this.props.plusGame;
    var minusGame = this.props.minusGame;
    return players_array.map(function(player, index) {
      return (
        <RosterLine name={player.full_name} team={player.team_name} position={player.position} games={player.gms} key={index} plusGame={plusGame} minusGame={minusGame} removePlayer={removePlayer}/>
      );
    });
  }

  render() {
    var players = this.props.players;
    if(players.length === 0) return null;
    return (
      <section className="container" id="player-roster">
        <div className="row">
          <div className="col-12">
            <h3>Your Roster:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Team</th>
                  <th scope="col">Position</th>
                  <th scope="col">Games</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.generateLines()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Roster;