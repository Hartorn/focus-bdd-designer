import React from 'react';
import { navigate } from 'focus-core/history';
import Menu from 'focus-components/components/menu';

//custom web component

export default React.createClass({
    displayName: 'DemoMenuLeft',
    getInitialState() {
        return {
            isQuickSearchModalOpen: false
        };
    },
    _getMenuItems() {
        return [
            { icon: 'home', onClick: () => { this._onHomeClick(); } }
        ];
    },

    _onHomeClick() {
        navigate('home');
    },

    render() {
        return (
            <Menu items={this._getMenuItems()} handleBrandClick={this._onHomeClick} />
        );
    }
});
