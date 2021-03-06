import React from 'react';
import './custom.scss';

class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playerName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }

  handleChange(event) {
    this.setState({playerName: event.target.value});
  }

  clickEvent() {
    if(this.state.playerName !== '') {
      this.props.addPlayer(this.state.playerName);
      this.setState({playerName: ''});
    }
  }

  pressEnter = (e) => {
    if(e.key === 'Enter')
    this.clickEvent();
  }

  render() {
    //console.log("PlayerSearch State: " + this.state);
    return (
      <section className="container" id="player-search">
        <div className="row form-group">
          <div className="col-12 label">
            <label>Enter players to add to your roster:</label>
          </div>
          <div className="col-12 col-md-8">
            <input className="input-group form-control form-control-lg" id="player-search-bar" type="text" placeholder="Stephen Curry" value={this.state.playerName} onChange={this.handleChange} onKeyDown={this.pressEnter}></input>
          </div>
          <div className="col-12 col-md-4">
            <button className="btn btn-lg btn-block" type="button" onClick={this.clickEvent}>Add Player</button>
          </div>
        </div>
      </section>
    );
  }
};

export default PlayerSearch;