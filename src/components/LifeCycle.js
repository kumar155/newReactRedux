import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    render() {
        return(
            <div>
                <br/>
                <button onClick={this.onIncrement}>Increment Count</button>
                <LifeCycle count={this.state.count} name='from Counter component..'/>
            </div>
        );
    }
    
    onIncrement = () => {
        return this.setState({count: this.state.count + 1});
    }
}

export class LifeCycle extends Component {
    constructor() {
        super();
        console.log('constructor is called');
        this.state= {
            number: 'this is not my number',
            count: 0,
        }
    }
    componentWillMount() {
        console.log('component will mount called');
    }
    componentDidMount() {
        console.log('component did mount called');
    }
    componentWillReceiveProps(newProps) {
        console.log('component will receive new props', newProps);
        if(newProps.count === 9) {
            this.setState({number: 'yes my number received...'});
        }
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('should component update called', newProps);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update called', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update called', prevProps, prevState);
    }
    render() {
        console.log('render has been called...');
        return(
            <div><br/>Count : {this.props.count} <br/>
                <br/>
                {this.state.number}
                <br/>
                {this.props.name}
                <br/>
                {this.props.myFunction('dynamic name')}
                <br/>
                {/* <button onClick={this.onIncrement}>Increment Count</button>
                Count is: {this.state.count} */}
            </div>
        );
    }
    onIncrement = () => {
        return this.setState({count: this.state.count + 1});
    }
}
LifeCycle.propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
}
LifeCycle.defaultProps = {
    name: 'This is my count component name...!',
    myFunction: (name) => {
        return name;
    }
}