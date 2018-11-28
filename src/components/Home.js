import React, {Component} from "react";
import { connect } from 'react-redux';
import { simpleAction, incrementAction } from '../actions/simpleAction';
import MyComponent from "./myComponent";

class Home extends Component {
  render() {
   return (
    <div className="App">
     <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
     </header>
     <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload
     </p>
     <button onClick={this.onClick}>Test redux action</button>
     <button onClick={this.onIncrementClick}>Increment Count...</button>
      <pre>
        {
          JSON.stringify(this.props.simpleText)
        }
      </pre>
      <p>incrementReducer count : {this.props.count}</p>
      <hr/>
      <MyComponent/>
    </div>
   );
  }

  onClick = () => {
    this.props.simpleAction();
  }
  onIncrementClick = () => {
    this.props.incrementAction();
  }

 }
 
 const mapStateToProps = state => ({
    simpleText: state.simpleReducer,
    count: state.incrementReducer,
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  incrementAction: () => dispatch(incrementAction()),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Home);