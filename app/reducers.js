export default (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'INIT':
      newState = action.data;
      break;
    default:
      break;
  }
  return newState;
}
