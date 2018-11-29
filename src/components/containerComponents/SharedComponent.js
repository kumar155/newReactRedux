
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SharedComponent extends Component {
    render() {
        return(
            <h3>Children...
                The Count is: {this.props.count}
            </h3>
        );
    }
}

const mapStateToProps = (store) => ({
    count: store.IncrementCountReducer
});

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SharedComponent);

SharedComponent.propTypes = {
    count: PropTypes.number.isRequired,
}