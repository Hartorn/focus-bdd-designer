import React, { Component } from 'react';

import { Treebeard } from 'react-treebeard';
import { ResizableBox } from 'react-resizable';

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


/**
 * 
 * 
 * @class TreeExample
 * @extends {Component}
 */
class TreeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 300
        };
        this.onToggle = this.onToggle.bind(this);
        this.onResize = this.onResize.bind(this);
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

    onResize(event, { element, size }) {
        this.setState({ width: size.width });
    }


    render() {
        //     <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
        //     <div className="box" style={{ width: this.state.width + 'px', height: this.state.height + 'px' }}>
        //         <span className="text">{"Raw use of <Resizable> element. 200x200, no constraints."}</span>
        //     </div>
        // </Resizable>


        return (
            <div data-designer='tree-container'>
                <ResizableBox className='box' width={this.state.width} onResize={this.onResize} axis='x'>
                    <div data-designer='menu-container' >
                        <Treebeard
                            data={data}
                            onToggle={this.onToggle}
                        />
                    </div>
                </ResizableBox>
                <div data-designer='designer-container'>
                    {this.props.children}
                </div>
            </div >
        );
    }
}

export default TreeExample;