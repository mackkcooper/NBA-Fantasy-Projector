import React from 'react';
import './custom.scss';

function Roster(props) {
  var players = props.players;
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
              </tr>
            </thead>
            <tbody>
              {
                players.map(function(name, index) {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{name}</td>
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

export default Roster;