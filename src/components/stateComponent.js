import React from 'react';
import About from "./About";

export default class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            title: 'React',
            name: '',
        }
    }

    render() {
        return(
            <div>
                <br/><br/><br/>
               The count value is: {this.state.count}
               <br/><br/><br/><br/>
               <input type="button" value="Increment" onClick={this.IncrementCount} />
               <br/><br/>
               <hr/>
               The title is: {this.state.title}
               <br/><br/>
               <input type="button" value="Change Title" onClick={this.changeTitle} />
               <br/><br/>
               <hr/>
               Enter Name :<input type="text" onChange={this.changeName}/>
               <br/><br/>
               Textbox value is: {this.state.name}
            </div>
        );
    }
    IncrementCount = () => {
        this.setState({count: this.state.count + 1});
    }
    changeTitle = () => {
        this.setState({title: 'React Training..!'});
    }
    changeName = (event) => {
        this.setState({name: event.target.value});
    }
};

