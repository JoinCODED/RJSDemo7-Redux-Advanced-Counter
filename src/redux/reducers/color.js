import { CHANGE_COLOR } from "../actions/actionTypes";

const initialState = {
  color: "white"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};
