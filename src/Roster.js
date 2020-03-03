import React from 'react';
import './custom.scss';
import RosterLine from './RosterLine';

class Roster extends React.Component {
  generateLines() {
    var removePlayer = this.props.removePlayer;
    return this.props.players.map(function(name, index) {
      return (
        <RosterLine name={name} index={index + 1} removePlayer={removePlayer}/>
      );
    });
  }

  render() {
    var players = this.props.players;
    if(players.length === 0) return null;
    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h1>Your Roster:</h1>
            <table className="table">
              <thead>
                <tr>
                  <th width="2rem" scope="col">#</th>
                  <th scope="col">Name</th>
                  <th></th>
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