import {SET_TASK, CHANGE_STATUS} from '../actions/actionsType';
import update from 'immutability-helper';
const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return [...state, action.payload];
    case CHANGE_STATUS:
      const {id, status} = action.payload;
      const itemIndex = state.findIndex(x => x.id === id);
      return update(state, {[itemIndex]: {$merge: {status: status}}});

    default:
      return state;
  }
}
