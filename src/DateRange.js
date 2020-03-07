import React from 'react';
import './custom.scss';

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

  displayState() {
    console.log(this.state);
  }

  updateStart(event) {
    this.setState({
      startDate: event.target.value,
      endDate: this.state.endDate
    });
    this.props.updateDate(event.target.value, 'start');
  }

  updateEnd(event) {
    this.setState({
      startDate: this.state.startDate,
      endDate: event.target.value
    });
    this.props.updateDate(event.target.value, 'end');
  }

  render() {
    this.displayState();
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