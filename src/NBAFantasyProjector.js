import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';
import DateRange from './DateRange';
import Projection from './Projection';
//import * as NBA from './NBA-api';

const steph = { 
  first_name: 'Stephen',
  last_name: 'Curry',
  full_name: 'Stephen Curry',
  player_id: 201939,
  team_id: 1610612744,
  team_name: 'Golden State Warriors',
  position: 'Guard',
  mins: 27.9,
  fg_pct: 0.402,
  ft_pct: 1,
  threes_pg: 2.4,
  rebs: 5.2,
  asts: 6.6,
  stls: 1,
  blks: 0.4,
  tovs: 3.2,
  pts: 20.8 
};

class NBAFantasyProjector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Map(),
      startDate: '',
      endDate: '',
      projection: null
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.insertPlayer = this.insertPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.generateProjection = this.generateProjection.bind(this);
  }

  addPlayer(player) {
    //NBA.retrieve_player(player, console.log);
    this.insertPlayer(steph);
  }

  insertPlayer(player_json) {
    this.setState({
      players: new Map(this.state.players.set(player_json.full_name, player_json)),
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: this.state.projection
    }, console.log(this.state));
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
      endDate: this.state.endDate,
      projection: this.state.projection
    });
  }

  updateDate(newDate, dateType) {
    if(dateType === 'start') {
      this.setState({
        players: this.state.players,
        startDate: newDate,
        endDate: this.state.endDate,
        projection: this.state.projection
      });
    } else if (dateType === 'end') {
      this.setState({
        players: this.state.players,
        startDate: this.state.startDate,
        endDate: newDate,
        projection: this.state.projection
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

  generateProjection() {
    if(this.state.players.size === 0)
      return;
    this.setState({
      players: this.state.players,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: new Map(this.state.players)
    });
  }

  getProjection() {
    if(this.state.projection === null) 
      return null;
    return Array.from(this.state.projection.values());
  }

  render() {
    this.displayState();
    return (
      <div>
        {site_header}
        <div>
          <PlayerSearch addPlayer={this.addPlayer}/>
          <Roster players={Array.from(this.state.players.keys())} removePlayer={this.removePlayer}/>
          <DateRange updateDate={this.updateDate} startDate={this.state.startDate} endDate={this.state.endDate}/>
          {this.invalidDate()}
          <button className="btn btn-lg" onClick={this.generateProjection}>Generate Fantasy Projection</button>
          <Projection projection={this.getProjection()}/>
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