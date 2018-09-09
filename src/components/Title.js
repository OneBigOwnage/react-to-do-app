import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
        <div>
            <p className="panel-heading has-text-centered has-text-weight-semibold">{this.props.text}</p>
        </div>
    );
  }
}

export default Title;
