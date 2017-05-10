// const Store = require('./store.js');
// const Actions = require('./actions.js');

// const initialState = { count: 0 };

function updateState(state, action) {
    
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.value };
        case 'DECREMENT':
            return { count: state.count - action.value };
        default:
            return state;
    }
}

// const store = new Store(updateState, initialState);

// const unsbscribe = store.subscribe(() => console.log('State 1: ' + store.getState().count));
// store.subscribe(() => console.log('State 2: ' + store.getState().count));

// store.update(Actions.incrementAction);
// unsbscribe();
// store.update(Actions.decrementAction);
// store.update(Actions.emptyAction);