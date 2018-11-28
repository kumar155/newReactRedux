import React from 'react';
import Comp1 from './Component1';
import Comp2 from './Component2';
import PropTypes from 'prop-types';

export default class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
        compId: 1,
        count : 0,
        name: 'react',
    }
  }
  render() {
    return(
      <div style={{backgroundColor: 'red'}} className='Test_Class'>
        <Comp1 componentNumber={this.state.compId}></Comp1>  
        <Comp2></Comp2>    
        <input type="button" onClick={this.onButtonClick} value="Click Here.."/>
        <input type="button" onClick={this.onIncrementClick} value="Increment Number.."/> 
        <br/>
        <br/>Count is: {this.state.count}
      </div>
    );
  }
  onButtonClick = () => {
    console.log('Im clicking button from landing home page route');
  }
  onIncrementClick = () => {
    this.setState({ count : this.state.count + 1 });
  }
}