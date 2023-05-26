import { SET_STABLE_STATE } from "../action/stable.action";
const initialeState = { showStable: true };

export default function stableReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_STABLE_STATE:
      return { showStable: action.payload };
    default:
      return state;
  }
}
