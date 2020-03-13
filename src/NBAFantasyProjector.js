import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';
import DateRange from './DateRange';

// This class represents the fantasy projector with a
// map that stores all of the players the user searchs
// the start date and end date that the user can input.
// This class has functions to add and remove players
// from the map and update the date on the projector
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

  // This function adds a player that is passed in to the
  // players map
  addPlayer(player) {
    this.setState({
      players: new Map(this.state.players.set(player, player)),
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }

  // This function displays the state called on
  displayState() {
    console.log(this.state);
  }

  // This function removes a player that is passed in from
  // the players map if that player is already in the map
  removePlayer(player) {
    var map = new Map(this.state.players);
    map.delete(player);
    this.setState({
      players: map,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }

  // This function update the date for either the start or
  // or end date based on the date type passed in.
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

  // This alerts the user if they input a start date that
  // is after the end date
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

  // HTML code for NBA FAtnasy Projector
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