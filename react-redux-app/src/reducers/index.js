import {
  FETCH_COIN_START,
  FETCH_COIN_SUCCESS,
  FETCH_COIN_FAILURE,
} from "../actions";

export const initialState = {
  coinData: [],
  isFetching: false,
  error: "",
};

export function reducer(state = initialState, action) {
  console.log("Reducer says", action);
  switch (action.type) {
    case FETCH_COIN_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case FETCH_COIN_SUCCESS:
      return {
        ...state,
        coinData: action.payload,
        isFetching: false,
        error: "",
      };

    case FETCH_COIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
