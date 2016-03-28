import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Main from './components/Main';

// The variable Main here is no longer a REACT component...it is a Relay Container
// >> ReactDOM.render(<Main />, document.getElementById('react'));


class HomeRoute extends Relay.Route {
    static routeName = 'Home';
    static queries = {
        store: (Component) => Relay.QL`
            query MainQuery {
                store { ${Component.getFragment('store') }}
            }
        `
    }
}

ReactDOM.render(
    <Relay.RootContainer
        Component={Main}
        route={new HomeRoute}
    />,
    document.getElementById('react')
);
