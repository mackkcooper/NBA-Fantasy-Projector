import React from 'react';
import './custom.scss';

class DateRange extends React.Component {
  render() {
    return (
      <section className="container" id="select-date-range">
        <div className="row form-group">
          <div className="col-12 label">
            <label>Select date range:</label>
          </div>
          <div className="input-group col-sm-6" role="group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="start-date-addon">Start Date</span>
            </div>
            <input className="form-control" type="date" id="start-date-input"></input>
          </div>
          <div className="input-group col-sm-6" role="group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="end-date-addon">End Date</span>
            </div>
            <input className="form-control" type="date" id="end-date-input"></input>
          </div>
        </div>
        
      </section>
    );
  }
}


export default DateRange;