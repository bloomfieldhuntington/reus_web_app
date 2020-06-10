import React from 'react';
import PropTypes from 'prop-types';
// Calling an action or getting state, use connect
import { connect } from 'react-redux';
// css


const Alert = ({ alerts }) => 
alerts !== null && 
alerts.length > 0 && 
alerts.map((alert, index) => (
    <div key={index} className="st-alert-box">
    <div key={index} className={`st-alert-text-${alert.alertType}`}>
        { alert.msg }
    </div>
    </div>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

// Mapping state to properties (Getting the state and mapping them to properties)
const mapStateToProps = (state) => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)