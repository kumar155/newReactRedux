import React from 'react';

export default class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <p>About</p>
        count is from state: {this.props.count}
        <h3>this is about component/.</h3>
      </div>
    );
  }
}