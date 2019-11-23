import {
  ADD_TO_FAVORITE,
  DELETE_FROM_FAVORITE
} from "../actions/favoriteAction";

let initialState = [];

export default (state = initialState, action) => {
  let newState;

  if (action.type === ADD_TO_FAVORITE) {
    newState = [...state, ...[action.item.el]];
  }
  if (action.type === DELETE_FROM_FAVORITE) {
    console.log(action);
    newState = state.filter(el => el.id !== action.item.el.id);
  }

  return newState || state;
};
