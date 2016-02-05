import { FETCH_POSTS } from '../actions';

const INITIAL_STATE = { all: [], current: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.data };
    default:
      return state;
  }
}
