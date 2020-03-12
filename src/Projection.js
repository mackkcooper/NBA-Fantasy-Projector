import React from 'react';
import './custom.scss';

class Projection extends React.Component {
  generateLines() {
    var players_array = this.props.projection;
    return players_array.map(function(name, index) {
      var player = players_array[index];
      return (
        <tr>
          <td>{player.full_name}</td>
          <td>{player.team_name}</td>
          <td>{player.position}</td>
          <td>{player.mins}</td>
          <td>{player.fg_pct}</td>
          <td>{player.ft_pct}</td>
          <td>{player.threes_pg}</td>
          <td>{player.rebs}</td>
          <td>{player.asts}</td>
          <td>{player.stls}</td>
          <td>{player.blks}</td>
          <td>{player.tovs}</td>
          <td>{player.pts}</td>
        </tr>
      );
    });
  }

  render() {
    if(this.props.projection === null) 
      return null;
    if(this.props.projection.size === 0)
      return null;
    return (
      <section className="container" id="projection">
        <div className="row">
          <div className="col-12">
            <h3>Your Projection:</h3>
            <table className="table projection">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">TEAM</th>
                  <th scope="col">POS</th>
                  <th scope="col">MIN</th>
                  <th scope="col">FG%</th>
                  <th scope="col">FT%</th>
                  <th scope="col">3PM</th>
                  <th scope="col">REB</th>
                  <th scope="col">AST</th>
                  <th scope="col">STL</th>
                  <th scope="col">BLK</th>
                  <th scope="col">TO</th>
                  <th scope="col">PTS</th>
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

export default Projection;