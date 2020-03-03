import React from 'react';
import './custom.scss';

class RosterLine extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    this.props.removePlayer(this.props.name);
  }

  render() {
    console.log(this.props.name);
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td width="20px">
            <button className="btn btn-sm" type="button" onClick={this.clickEvent}>Remove</button>
        </td>
      </tr>
    )
  }
}

export default RosterLine;