import React, { Component, PropTypes } from 'react';

import './AttemptsLeft.css';

class AttemptsLeft extends Component {
  render() {
    return (
      <div className="AttemptsLeft">
        <span>Cơ hội đoán sai còn lại: <span className="AttemptsLeft-Number">
            {this.props.attempts}
          </span>
        </span>
      </div>
    );
  }
};

AttemptsLeft.propTypes = {
  attempts: PropTypes.number.isRequired,
};

export default AttemptsLeft;
