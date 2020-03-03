import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';

class NBAFantasyProjector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Map()
    };
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(player) {
    this.setState({players: new Map(this.state.players.set(player, player))}, this.out);
  }

  out() {
    console.log(this.state.players);
  }
  render() {
    return (
      <div>
        {site_header}
        <div>
          <PlayerSearch addPlayer={this.addPlayer}/>
          <Roster players={Array.from(this.state.players.keys())}/>
        </div>
      </div>
    );
  }
}

// Site Header
const site_header = (
  <header className="App-header">
    <div className="jumbotron">
      <h1 className="display-1">NBA Fantasy Projector</h1>
    </div>
  </header>
);

export default NBAFantasyProjector;