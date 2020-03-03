import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import * as serviceWorker from './serviceWorker';
import 'jquery';
const $ = window.$;

// Main
function NBA_Fantasy_Projector() {
  return (
    <div>
      {site_header}
      {player_search}
      <div id="roster"></div>
    </div>
  );
}

// Add Player to Roster
function AddPlayer() {
  console.log("Adding player to roster...");
  console.log("player entered: " + $("#player-search-bar").val());
}

// Site Header
const site_header = (
  <header className="App-header">
    <div className="jumbotron">
      <h1 className="display-1">NBA Fantasy Projector</h1>
    </div>
  </header>
);

// Player Search
const player_search = (
  <section className="container" id="player-search">
    <div className="row form-group">
      <div className="col-12 label">
        <label>Enter players to add to your roster:</label>
      </div>
      <div className="col-12 col-sm-8 col-lg-9">
        <input className="form-control" id="player-search-bar" type="text" placeholder="Stephen Curry"></input>
      </div>
      <div className="col-12 col-sm-4 col-lg-3">
        <button className="btn form-control" type="button" onClick={AddPlayer}>Add Player</button>
      </div>
    </div>
  </section>
);

const player_roster = (
  <section className="container">
    <div className="row">
      <div className="col-12">
        <label>Your Roster:</label>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

// Initial Render
ReactDOM.render(<NBA_Fantasy_Projector/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
