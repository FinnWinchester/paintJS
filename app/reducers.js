export default (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'INIT':
      newState = action.data;
      break;
    case 'CANVAS_SELECT_COLOR':
      newState.canvas.config.selected_color = action.data.color;
      break;
    case 'CANVAS_SELECT_WIDTH':
      newState.canvas.config.selected_width = action.data.width;
      break;
    case 'CANVAS_DRAWING_STORE':
      console.log(action.data);
      break;
    default:
      break;
  }
  return newState;
}
