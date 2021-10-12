import { DOUBLE_NUMBER, TRIPLE_NUMBER, RESET } from "../actions/MultiplyAction";

const initialState = {
  result: 5,
};

export default multiplyReducer = (state = initialState, action) => {
  //console.log(action);
  //return state;
  switch (action.type) {
    case DOUBLE_NUMBER:
      return {
        ...state,
        result: state.result * 2,
      };

    case TRIPLE_NUMBER:
      return {
        ...state,
        result: state.result * 3,
      };
    case RESET:
      return {
        ...state,
        result: 5,
      };
    default:
      return state;
  }
};
