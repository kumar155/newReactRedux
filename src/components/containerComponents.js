
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { onIncrementAction, onDecrementAction } from '../actions/actions';
import PropTypes from 'prop-types';

class ContainerComponent extends Component {
    render() {
        return(            
            <div>
                <h2>Container Component</h2>
                <input type="button" value="Increment Count" onClick={this.onIncrement}/>
                Increment Count value: {this.props.incrementedCount}
                <br/><hr/>
                <input type="button" value="Decrement Count" onClick={this.props.onDecrement}/>
                Decrement Count value: {this.props.decrementCount}
                <hr/>
                Mix count value: {this.props.mixCount}
            </div>
        );
    }

    onIncrement = () => {
        return this.props.onIncrement();
    }
}

 const mapStateToProps = store => ({
    incrementedCount : store.IncrementCountReducer,
    decrementCount: store.DecrementCountReducer,
    mixCount: store.MixingCountReducer,
 });

 const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(onIncrementAction()),
    onDecrement: () => dispatch(onDecrementAction()),
 });

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent);

ContainerComponent.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    incrementedCount: PropTypes.number.isRequired,
    decrementCount: PropTypes.number.isRequired,
    mixCount: PropTypes.number.isRequired,
}

