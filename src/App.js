import React from 'react';
const $ = window.$;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron">
          <h1 className="display-1">NBA Fantasy Projector</h1>
        </div>
      </header>
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
    </div>
  );
}

function AddPlayer() {
  console.log("Adding player to roster...");
  console.log("player entered: " + $("#player-search-bar").val());
}

export default App;
