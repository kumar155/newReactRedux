
import React, { Component } from 'react';


export default class SimpleComponent extends Component {
    constructor(state) {
        super(state);
        this.state = {
            number : 5,
        }
    }
    render() {
        return(
            <div>
                <h3>This is sample component...</h3>
                <FuncComponent Number={this.state.number}/>
            </div>
        );
    }
}

const FuncComponent = (props) => {
    return (
        <div>
            <h3>This is functional component... {props.Number}</h3>
        </div>
    );
}