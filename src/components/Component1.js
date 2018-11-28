import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comp1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Component {this.props.componentNumber}</h2>        
      </div>
    );
  }
}

Comp1.propTypes = {
    componentNumber: PropTypes.number.isRequired,
}

Comp1.defaultProps = {
    componentNumber: 5,
}