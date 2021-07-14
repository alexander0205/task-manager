import {SET_TASK, CHANGE_STATUS} from './actionsType';
export const setTask = content => ({
  type: SET_TASK,
  payload: content,
});
export const changeStatus = content => ({
  type: CHANGE_STATUS,
  payload: content,
});
