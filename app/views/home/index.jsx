import React, { Component } from 'react';

import TableElt from '../table';

/**
 * HomeView.
 * @returns {node} the rendered content.
 */
const HomeView = () => {
    return (
        <div data-app='homepage'>
            <TableElt />
        </div>
    )
};


HomeView.displayName = 'HomeView';
HomeView.defaultProps = {

};
HomeView.propTypes = {

};

export default HomeView;
