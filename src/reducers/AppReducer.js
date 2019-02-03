import { Actions } from '../actions';

export default function calculatorBuilderApp(state = { fields:[] }, action) {
    switch(action.type) {
        case Actions.ADD_FIELD:
            console.log('storing field');
            debugger;
            return Object.assign({}, state, { fields: [...(state.fields), action.field] });
        case Actions.GO_BACK:
            return state;
        default:
            return state;
    }
}