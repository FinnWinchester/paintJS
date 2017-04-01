export default (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'INIT':
      newState = Object.assign({}, {
        'canvas': {
          'repaint': false,
          'config': {
            'selected_color': '#000000',
            'selected_width': 1,
            'history': [],
            'deleted': []
          },
          'tools': {
            'colors': [
              '#F73E2C',
              '#F5015E',
              '#9A05AA',
              '#572391',
              '#3C4AB2',
              '#45B052',
              '#009788',
              '#01BBD4',
              '#00A4F4',
              '#0F90F2',
              '#88C648',
              '#CDDC3D',
              '#FEEE37',
              '#FEC224',
              '#F99B18',
              '#000000',
              '#5F7C8C',
              '#9D9D9D',
              '#785548',
              '#FF530C'
            ],
            'widths': [1, 2, 4, 6]
          }
        }
      });
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
      newState.canvas.config.deleted = [];
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
