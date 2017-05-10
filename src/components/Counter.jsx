import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';
import Actions from './actions.js';

// const initialState = { count: 0 };

// const store = new Store(updateState, initialState);

// const unsbscribe = store.subscribe(() => console.log('State 1: ' + store.getState().count));
// store.subscribe(() => console.log('State 2: ' + store.getState().count));

// store.update(Actions.incrementAction);
// unsbscribe();
// store.update(Actions.decrementAction);
// store.update(Actions.emptyAction);

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                { this.state.count }
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('react_container'));