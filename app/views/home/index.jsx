import React, { Component } from 'react';
import TableElt from '../table';
import { Treebeard } from 'react-treebeard';

const data = [
    {
        name: 'domains',
        toggled: true,
        children: [
            { name: 'child1' },
            { name: 'child2' }
        ]
    },
    {
        name: 'loading parent',
        toggled: true,
        loading: true,
        children: []
    },
    {
        name: 'parent',
        toggled: true,

        children: [
            {
                name: 'nested parent',
                children: [
                    { name: 'nested child 1' },
                    { name: 'nested child 2' }
                ]
            }
        ]
    }
];

const decorators = {
    Loading: (props) => {
        return (
            <div style={props.style}>
                loading...
            </div>
        );
    },
    // Toggle: (props) => {
    //     return (
    //         <div style={props.style}>
    //             <svg height={props.height} width={props.width} />
    //         </div>
    //     );
    // },
    Header: (props) => {
        return (
            <div style={props.style}>
                {props && props.node && props.node.name}
            </div>
        );
    }//,
    // Container: (props) => {
    //     console.log('Container', props)
    //     return (
    //         <div onClick={props.onClick}>
    //             <props.decorators.Toggle />
    //             <props.decorators.Header />
    //         </div>
    //     );
    // }
};


class TreeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled) {
        // if (this.state.cursor) {
        //     this.state.cursor.active = false;
        // }
        // node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({ cursor: node });
    }
    render() {
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}


/**
 * HomeView.
 * @returns {node} the rendered content.
 */
const HomeView = () => {
    return (
        <div data-app='homepage'>
            <TableElt />
            <TreeExample data={data} />
        </div>
    )
};


HomeView.displayName = 'HomeView';
HomeView.defaultProps = {

};
HomeView.propTypes = {

};

export default HomeView;
