
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onIncrementAction } from '../../actions/actions';

class ParentComponent extends Component {
    render() {
        return(            
            <div>
                <h2>Parent Component</h2>
                <input type="button" value="Increment Count" onClick={this.onIncrement}/>                
                <br/><hr/>               
            </div>
        );
    }

    onIncrement = () => {
        return this.props.onIncrement();
    }
}

 const mapStateToProps = store => ({
    
 });

 const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(onIncrementAction()),
 });

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);

ParentComponent.propTypes = {
    onIncrement: PropTypes.func.isRequired,
}

