'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = {
    incrementAction: { type: 'INCREMENT', value: 5 },
    decrementAction: { type: 'DECREMENT', value: 3 },
    emptyAction: {}
};

module.exports = Actions;
// const Actions = require('./actions.js');
// const Store = require('./store.js');

// const initialState = { count: 0 };

function updateState(state, action) {

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.value };
        case 'DECREMENT':
            return { count: state.count - action.value };
        default:
            return state;
    }
}

// const store = new Store(updateState, initialState);

// const unsbscribe = store.subscribe(() => console.log('State 1: ' + store.getState().count))
// store.subscribe(() => console.log('State 2: ' + store.getState().count))

// store.update(Actions.incrementAction);
// unsbscribe();
// store.update(Actions.decrementAction);
// store.update(Actions.emptyAction);

var Store = function () {
    function Store(updateState, state) {
        _classCallCheck(this, Store);

        this._state = state;
        this._updateStae = updateState;
        this._callbakcs = [];
    }

    _createClass(Store, [{
        key: 'update',
        value: function update(action) {
            this._state = this._updateStae(this._state, action);
            this._callbakcs.forEach(function (callback) {
                return callback();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe(callback) {
            var _this = this;

            this._callbakcs.push(callback);
            return function () {
                return _this._callbakcs = _this._callbakcs.filter(function (cb) {
                    return cb !== callback;
                });
            };
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }]);

    return Store;
}();

exports.default = Store;