import React from 'react';

class Hello extends React.Component {
    render() {
        return <h3>Hey {this.props.name}</h3>;
    }
}

export default Hello;
