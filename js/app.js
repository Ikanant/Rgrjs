import React from 'react';
import ReactDOM from 'react-dom';

// let Hello = React.createClass({
//     render() {
//         return <h3>Hello ES6</h3>;
//     },
// });

import Hello from './components/Hello';

ReactDOM.render(<Hello/>, document.getElementById('react'));
