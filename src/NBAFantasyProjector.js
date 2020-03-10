import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';
import DateRange from './DateRange';

class NBAFantasyProjector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Map(),
      startDate: '',
      endDate: ''
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  addPlayer(player) {
    this.setState({
      players: new Map(this.state.players.set(player, player)),
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }

  displayState() {
    console.log(this.state);
  }

  removePlayer(player) {
    var map = new Map(this.state.players);
    map.delete(player);
    this.setState({
      players: map,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }

  updateDate(newDate, dateType) {
    if(dateType === 'start') {
      this.setState({
        players: this.state.players,
        startDate: newDate,
        endDate: this.state.endDate
      });
    } else if (dateType === 'end') {
      this.setState({
        players: this.state.players,
        startDate: this.state.startDate,
        endDate: newDate
      });
    }
  }

  invalidDate() {
    var start = new Date(this.state.startDate);
    var end = new Date(this.state.endDate);
    if(end < start) {
      return (
        <section className="container">
          <div className="row form-group">
            <div className="col-12 alert alert-danger" role="alert">
              INVALID DATE RANGE
            </div>
          </div>
        </section>
      );
    }
  }

  render() {
    //this.displayState();
    return (
      <div>
        {site_header}
        <div>
          <PlayerSearch addPlayer={this.addPlayer}/>
          <Roster players={Array.from(this.state.players.keys())} removePlayer={this.removePlayer}/>
          <DateRange updateDate={this.updateDate} startDate={this.state.startDate} endDate={this.state.endDate}/>
          {this.invalidDate()}
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