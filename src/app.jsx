import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';

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