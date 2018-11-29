
import React, {Component} from 'react';
import { connect } from 'react-redux';
import ParentComponent from './ParentComponent';
import Children from './ChildrenComp';
import SharedComponent from './SharedComponent';

export default class WrapperComponent extends Component {
    render(){
        return(
            <div>
                <ParentComponent/>
                <Children/>
                <SharedComponent/>
            </div>
        );
    }
}

