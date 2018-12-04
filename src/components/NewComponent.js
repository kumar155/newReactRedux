import React,{Component} from 'react';


export default class NewComponent extends Component{
    constructor(state) {
        super(state);
        this.state={
            count:1,
            name:'swathi'
        } 
    }
    render() {
        return(
           <div>
               <h4>hello {this.state.count}</h4>
               <p>Hi {this.state.name}</p>
               <button onClick={() => this.onIncrement('Test1')}>Click</button>
               <button onClick={() => this.onIncrement('Test')}>Name Click</button>
               </div> 
        );
    }

    onIncrement = (type)=>{
        if(type=='Test1')
        {
        this.setState({count:this.state.count+1, name: 'potti'});
        }
        else
        {
            this.setState({count:this.state.count-1, name: 'fotti'});
        }
    }

    nameChange=(newName)=>{
        this.setState({name: newName});
    }
}
