import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import Panel from 'focus-components/components/panel'

/**
 * 
 * 
 * @class TableElt
 * @extends {Component}
 */
class TableElt extends Component {
    /**
     * @inheritdoc
     */
    componentWillMount() {

    }

    /**
     * 
     * 
     * @returns 
     * @memberof TableElt
     */
    render() {
        return (
            <Draggable onStart={console.log} onStop={console.log}>
                <div style={{ display: 'inline-block' }}>
                    <Panel title={'Test'} >
                        <div>{'Un test'}</div>
                    </Panel>
                </div>
            </Draggable>
        );
    }
}

TableElt.propTypes = {

};

export default TableElt;