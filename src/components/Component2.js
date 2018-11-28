import React from 'react';

export default class Comp2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Component 2 From {this.props.ParentCompName}</h2>        
      </div>
    );
  }
}