export default function legislatorReducer(state = {
  legislator: [{name: "rico"},{name: "balla"}]
}, action) {
  console.log(action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.legislator.length);
      console.log("Updating state.legislators length to %s", state.legislator.length + 1);
      return Object.assign({}, state, { legislators: state.legislators.concat(state.legislator.length + 1) });

    default:
      console.log("Initial state.items length: %s", state.legislator.length);
      return state;
  }
}
