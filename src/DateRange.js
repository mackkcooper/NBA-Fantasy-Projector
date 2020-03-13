import React from 'react';
import './custom.scss';

// This class represents the date range that the user can
// input on the web page for projections. It has a start
// date and a end date for the range. Also updates the
// start date and the end date
class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
    this.updateStart = this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
  }

  // This function displays the state called on
  // used for testing
  displayState() {
    console.log(this.state);
  }

  // This function updates the start date based on
  // the event that is passed in
  updateStart(event) {
    this.setState({
      startDate: event.target.value,
      endDate: this.state.endDate
    });
    this.props.updateDate(event.target.value, 'start');
  }

  // This function updates the end date based on
  // the event that is passed in
  updateEnd(event) {
    this.setState({
      startDate: this.state.startDate,
      endDate: event.target.value
    });
    this.props.updateDate(event.target.value, 'end');
  }

  // HTML code for DateRange
  render() {
    //this.displayState();
    return (
      <section className="container" id="select-date-range">
        <div className="row form-group">
          <div className="col-12 label">
            <label>Select date range:</label>
          </div>
          <div className="input-group col-md-6" role="group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="start-date-addon">Start Date</span>
            </div>
            <input className="form-control form-control-lg" type="date" id="start-date-input" value={this.state.startDate} onChange={this.updateStart} ></input>
          </div>
          <div className="input-group col-md-6" role="group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="end-date-addon">End Date</span>
            </div>
            <input className="form-control form-control-lg" type="date" id="end-date-input" value={this.state.endDate} onChange={this.updateEnd} ></input>
          </div>
        </div>
      </section>
    );
  }
}


export default DateRange;