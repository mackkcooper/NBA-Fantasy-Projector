import React from 'react';
import './custom.scss';

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    this.props.removePlayer('adam');
  }

  render() {
    var players = this.props.players;
    if(players.length === 0) return null;
    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <label>Your Roster:</label>
            <table className="table">
              <thead>
                <tr>
                  <th width="2rem" scope="col">#</th>
                  <th scope="col">Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  players.map(function(name, index) {
                    return (
                      <tr>
                        <td>{index}</td>
                        <td>{name}</td>
                        <td width="20px">
                          <button className="btn" type="button">Remove</button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Roster;