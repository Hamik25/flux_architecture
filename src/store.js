export default class Store {

    constructor(updateState, state) {
        this._state = state;
        this._updateStae = updateState;
        this._callbakcs = [];
    }

    update(action) {
        this._state = this._updateStae(this._state, action);
        this._callbakcs.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callbakcs.push(callback);
        return () => this._callbakcs = this._callbakcs.filter(cb => cb !== callback);
    }

    getState() {
        return this._state;
    }

}