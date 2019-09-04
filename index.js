/*
* Created: 04-09-2019
* Author: Hon Nguyen
* Description: The renderless component
* Reference link: https://medium.com/trabe/using-renderless-components-in-react-to-handle-data-4c55f1e94dd4
*/
import React from "react";
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

export default class Fetch extends React.Components {
    state = {
        loading: true,
        error: false,
        data: []
    };

    static getDerivedStateFromProps(props, state) {
        if (props.data && !isEqual(props.data, state.data)) {
            return {
                data: props.data,
                loading: false
            }
        }
        if (props.error) {
            return {
                error: props.error,
                loading: false
            }
        }
    }

    componentDidMount() {
        const { dispatchFunction } = this.props;
        dispatchFunction();
    }

    render() {
        return this.props.children(this.state);
    }
}
Fetch.propTypes = {
    dispathFunction: PropTypes.func,
    error: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
    data: PropTypes.array
}