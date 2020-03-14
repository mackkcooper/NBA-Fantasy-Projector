import React from 'react';
import './custom.scss';

class Projection extends React.Component {
  generateLines() {
    var players_array = this.props.projection;
    return players_array.map(function(player, index) {
      return (
        <tr key={index}>
          <td>{player.full_name}</td>
          <td>{player.gms}</td>
          <td>{player.mins}</td>
          <td>{player.fga}</td>
          <td>{player.fg_pct}</td>
          <td>{player.fta}</td>
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

  generateTotals() {
    var players_array = this.props.projection;
    var totals = {
      "gms"        : 0,
      "mins"       : 0,
      "fga"        : 0,
      "fg_pct"     : 0,
      "fta"        : 0,
      "ft_pct"     : 0,
      "threes_pg"  : 0,
      "rebs"       : 0,
      "asts"       : 0,
      "stls"       : 0,
      "blks"       : 0,
      "tovs"       : 0,
      "pts"        : 0
    };
    players_array.forEach(player => {
      totals["gms"] += player.gms;
      totals["mins"] += player.mins;
      totals["fga"] += player.fga;
      totals["fta"] += player.fta;
      totals["threes_pg"] += player.threes_pg;
      totals["rebs"] += player.rebs;
      totals["asts"] += player.asts;
      totals["stls"] += player.stls;
      totals["blks"] += player.blks;
      totals["tovs"] += player.tovs;
      totals["pts"] += player.pts;
    });
    players_array.forEach(player => {
      var fg_weight = player.fga / totals.fga;
      totals["fg_pct"] += player.fg_pct * fg_weight;
      var ft_weight = player.fta / totals.fta;
      totals["ft_pct"] += player.ft_pct * ft_weight;
    });
    return (
      <tr className={totals}>
        <td>TOTAL</td>
        <td>{Math.round(totals.gms * 10) / 10}</td>
        <td>{Math.round(totals.mins * 10) / 10}</td>
        <td>{Math.round(totals.fga * 10) / 10}</td>
        <td>{Math.round(totals.fg_pct * 1000) / 1000}</td>
        <td>{Math.round(totals.fta * 10) / 10}</td>
        <td>{Math.round(totals.ft_pct * 1000) / 1000}</td>
        <td>{Math.round(totals.threes_pg * 10) / 10}</td>
        <td>{Math.round(totals.rebs * 10) / 10}</td>
        <td>{Math.round(totals.asts * 10) / 10}</td>
        <td>{Math.round(totals.stls * 10) / 10}</td>
        <td>{Math.round(totals.blks * 10) / 10}</td>
        <td>{Math.round(totals.tovs * 10) / 10}</td>
        <td>{Math.round(totals.pts * 10) / 10}</td>
      </tr>
    );
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
                  <th scope="col">GMS</th>
                  <th scope="col">MIN</th>
                  <th scope="col">FGA</th>
                  <th scope="col">FG%</th>
                  <th scope="col">FTA</th>
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
                {this.generateTotals()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Projection;