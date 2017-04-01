export default (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'INIT':
      newState = action.data;
      newState.canvas.repaint = false;
      break;
    case 'CANVAS_SELECT_COLOR':
      newState.canvas.repaint = false;
      newState.canvas.config.selected_color = action.data.color;
      break;
    case 'CANVAS_SELECT_WIDTH':
      newState.canvas.repaint = false;
      newState.canvas.config.selected_width = action.data.width;
      break;
    case 'CANVAS_DRAWING_STORE':
      newState.canvas.repaint = false;
      newState.canvas.config.history.push(action.data);
      break;
    case 'CANVAS_DRAWING_UNDO':
      newState.canvas.repaint = true;
      var last_element = newState.canvas.config.history.pop();
      last_element && newState.canvas.config.deleted.push(last_element);
      break;
    case 'CANVAS_DRAWING_REDO':
      newState.canvas.repaint = true;
      var new_element = newState.canvas.config.deleted.pop();
      new_element && newState.canvas.config.history.push(new_element);
      break;
    default:
      break;
  }
  return newState;
}
