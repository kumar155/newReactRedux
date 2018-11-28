
import React, {Component} from "react";
import { connect } from 'react-redux';

class MyComponent extends Component {
    render() {
     return (
      <div className="App">
        increment myComponentReducer reducer count: <p>{this.props.count}</p>
      </div>
     );
    }
};

const mapStateToProps = state => ({
    count: state.myComponentReducer
});

const mapDispatchToProps = dispatch => ({
});  

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);