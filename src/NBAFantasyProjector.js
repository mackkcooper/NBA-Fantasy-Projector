import React from 'react';
import './custom.scss';
import PlayerSearch from './PlayerSearch';
import Roster from './Roster';
//import DateRange from './DateRange';
import Projection from './Projection';
import * as NBA from './NBA-api';

// const steph = { 
//   first_name: 'Stephen',
//   last_name: 'Curry',
//   full_name: 'Stephen Curry',
//   player_id: 201939,
//   team_id: 1610612744,
//   team_name: 'Golden State Warriors',
//   position: 'Guard',
//   mins: 27.9,
//   fg_pct: 0.402,
//   ft_pct: 1,
//   threes_pg: 2.4,
//   rebs: 5.2,
//   asts: 6.6,
//   stls: 1,
//   blks: 0.4,
//   tovs: 3.2,
//   pts: 20.8 
// };

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
    this.plusGame = this.plusGame.bind(this);
    this.minusGame = this.minusGame.bind(this);
  }

  addPlayer(player_name) {
    NBA.retrieve_player(player_name, this.insertPlayer);
    //NBA.retrieve_player(player_name, console.log);
    //this.insertPlayer(steph);
  }

  plusGame(player_name) {
    var player_json = this.state.players.get(player_name);
    player_json.gms = player_json.gms + 1;
    this.setState({
      players: new Map(this.state.players.set(player_json.full_name, player_json)),
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: this.state.projection
    });
  }

  minusGame(player_name) {
    var player_json = this.state.players.get(player_name);
    if(player_json.gms === 0)
      return;
    player_json.gms = player_json.gms - 1;
    this.setState({
      players: new Map(this.state.players.set(player_json.full_name, player_json)),
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: this.state.projection
    });
  }

  insertPlayer(player_json) {
    this.setState({
      players: new Map(this.state.players.set(player_json.full_name, player_json)),
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: this.state.projection
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
    var copy = new Map();
    Array.from(this.state.players.values()).forEach(player_json => {
      var duplicate = {
        "full_name"  : player_json.full_name,
        "gms"        : player_json.gms,
        "mins"       : Math.round(player_json.mins * 10 * player_json.gms) / 10,
        "fga"        : Math.round(player_json.fga * 10 * player_json.gms) / 10,
        "fg_pct"     : player_json.fg_pct,
        "fta"        : Math.round(player_json.fta * 10 * player_json.gms) / 10,
        "ft_pct"     : player_json.ft_pct,
        "threes_pg"  : Math.round(player_json.threes_pg * 10 * player_json.gms) / 10,
        "rebs"       : Math.round(player_json.rebs * 10 * player_json.gms) / 10,
        "asts"       : Math.round(player_json.asts * 10 * player_json.gms) / 10,
        "stls"       : Math.round(player_json.stls * 10 * player_json.gms) / 10,
        "blks"       : Math.round(player_json.blks * 10 * player_json.gms) / 10,
        "tovs"       : Math.round(player_json.tovs * 10 * player_json.gms) / 10,
        "pts"        : Math.round(player_json.pts * 10 * player_json.gms) / 10
      };
      copy.set(duplicate.full_name, duplicate);
    });
    this.setState({
      players: this.state.players,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      projection: copy
    });
  }

  getProjection() {
    if(this.state.projection === null) 
      return null;
    return Array.from(this.state.projection.values());
  }

  render() {
    //this.displayState();
    return (
      <div>
        {site_header}
        <div>
          <PlayerSearch addPlayer={this.addPlayer}/>
          <Roster players={Array.from(this.state.players.values())} removePlayer={this.removePlayer} plusGame={this.plusGame} minusGame={this.minusGame}/>
          {/* <DateRange updateDate={this.updateDate} startDate={this.state.startDate} endDate={this.state.endDate}/> */}
          {/* {this.invalidDate()} */}
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