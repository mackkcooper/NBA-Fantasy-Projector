import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';
import DateRange from './DateRange';

class NBAFantasyProjector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Map()
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer(player) {
    this.setState({players: new Map(this.state.players.set(player, player))});
  }

  removePlayer(player) {
    var map = new Map(this.state.players);
    map.delete(player);
    this.setState({players: map}, this.out);
  }

  render() {
    return (
      <div>
        {site_header}
        <div>
          <PlayerSearch addPlayer={this.addPlayer}/>
          <Roster players={Array.from(this.state.players.keys())} removePlayer={this.removePlayer}/>
          <DateRange/>
          <button className="btn btn-lg">Generate Fantasy Projection</button>
        </div>
      </div>
    );
  }
}

// Site Header
const site_header = (
  <header className="App-header">
    <div className="jumbotron">
      <h1 className="display-3">NBA Fantasy Projector</h1>
    </div>
  </header>
);

export default NBAFantasyProjector;