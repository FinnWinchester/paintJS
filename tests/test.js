import canvasUndo from '../app/actions/CanvasUndo';
import canvasRedo from '../app/actions/CanvasRedo';
import canvasPickColor from '../app/actions/CanvasPickColor';
import canvasPickWidth from '../app/actions/CanvasPickWidth';
import canvasStoreDrawing from '../app/actions/CanvasStoreDrawing';

import paintJS from '../app/reducers';

describe('actions', () => {
  it('should create an action to store a line', () => {
    const coords = [15, 15]
    const width = 1
    const color = 'red'

    const expectedAction = {
      type: 'CANVAS_DRAWING_STORE',
      data: {
        coords,
        color,
        width
      }
    };




    expect(canvasStoreDrawing(coords, color, width)).toEqual(expectedAction);
  });

  it('should create an action to undo', () => {
    const expectedAction = {
      type: 'CANVAS_DRAWING_UNDO',
      data: {}
    };

    expect(canvasUndo()).toEqual(expectedAction);
  });

  it('should create an action to redo', () => {
    const expectedAction = {
      type: 'CANVAS_DRAWING_REDO',
      data: {}
    };

    expect(canvasRedo()).toEqual(expectedAction);
  });

  it('should create an action to pick color', () => {
    const color = '#F1A52C';

    const expectedAction = {
      type: 'CANVAS_SELECT_COLOR',
      data: {
        color: color
      }
    };

    expect(canvasPickColor(color)).toEqual(expectedAction);
  });

  it('should create an action to pick width', () => {
    const width = '2px';

    const expectedAction = {
      type: 'CANVAS_SELECT_WIDTH',
      data: {
        width: width
      }
    };

    expect(canvasPickWidth(width)).toEqual(expectedAction);
  });

  it('should return initial state', () => {
    const expectedState = {};
    expect(paintJS(undefined, {})).toEqual(expectedState);
  });

  it('should return picked color', () => {
    const color = '#9A05AA'

    const expectedState = {
      "canvas": {
        "repaint": false,
        "config": {
          "selected_color": color,
          "selected_width": 1,
          "history": [],
          "deleted": []
        },
        "tools": {
          "colors": ["#F73E2C", "#F5015E", "#9A05AA", "#572391", "#3C4AB2", "#45B052", "#009788", "#01BBD4", "#00A4F4", "#0F90F2", "#88C648", "#CDDC3D", "#FEEE37", "#FEC224", "#F99B18", "#000000", "#5F7C8C", "#9D9D9D", "#785548", "#FF530C"],
          "widths": [1, 2, 4, 6]
        },
        "repaint": false
      }
    };

    // We need an initial state to predict the next state within the execution of an action.
    let initialState = Object.assign({}, paintJS(undefined, {
      type: 'INIT'
    }));
    expect(paintJS(initialState, canvasPickColor(color))).toEqual(expectedState);
  });

  it('should return picked width', () => {
    const width = 6

    const expectedState = {
      "canvas": {
        "repaint": false,
        "config": {
          "selected_color": "#000000",
          "selected_width": width,
          "history": [],
          "deleted": []
        },
        "tools": {
          "colors": ["#F73E2C", "#F5015E", "#9A05AA", "#572391", "#3C4AB2", "#45B052", "#009788", "#01BBD4", "#00A4F4", "#0F90F2", "#88C648", "#CDDC3D", "#FEEE37", "#FEC224", "#F99B18", "#000000", "#5F7C8C", "#9D9D9D", "#785548", "#FF530C"],
          "widths": [1, 2, 4, 6]
        },
        "repaint": false
      }
    };

    // We need an initial state to predict the next state within the execution of an action.
    let initialState = Object.assign({}, paintJS(undefined, {
      type: 'INIT'
    }));
    expect(paintJS(initialState, canvasPickWidth(width))).toEqual(expectedState);
  });

  it('should return new history when undo', () => {
    const history = [{
      coords: [15, 15],
      color: '#F73E2C',
      width: 1
    }, {
      coords: [20, 17],
      color: '#F73E2C',
      width: 1
    }];

    const expectedState = {
      "canvas": {
        "repaint": false,
        "config": {
          "selected_color": "#000000",
          "selected_width": 1,
          "history": [{
            "coords": [15, 15],
            "color": '#F73E2C',
            "width": 1
          }],
          "deleted": [{
            "coords": [20, 17],
            "color": '#F73E2C',
            "width": 1
          }]
        },
        "tools": {
          "colors": ["#F73E2C", "#F5015E", "#9A05AA", "#572391", "#3C4AB2", "#45B052", "#009788", "#01BBD4", "#00A4F4", "#0F90F2", "#88C648", "#CDDC3D", "#FEEE37", "#FEC224", "#F99B18", "#000000", "#5F7C8C", "#9D9D9D", "#785548", "#FF530C"],
          "widths": [1, 2, 4, 6]
        },
        "repaint": true
      }
    };

    // We need an initial state to predict the next state within the execution of an action.
    let initialState = Object.assign({}, paintJS(undefined, {
      type: 'INIT'
    }));

    // We prepare the first 2 iters.
    paintJS(initialState, canvasStoreDrawing(history[0].coords, history[0].color, history[0].width));
    paintJS(initialState, canvasStoreDrawing(history[1].coords, history[1].color, history[1].width));

    expect(paintJS(initialState, canvasUndo())).toEqual(expectedState);
  });

  it('should return new history when redo', () => {
    const history = {
      coords: [15, 15],
      color: '#F73E2C',
      width: 1
    };

    const deleted = {
      coords: [20, 17],
      color: '#F73E2C',
      width: 1
    };

    const expectedState = {
      "canvas": {
        "repaint": false,
        "config": {
          "selected_color": "#000000",
          "selected_width": 1,
          "history": [history, deleted],
          "deleted": []
        },
        "tools": {
          "colors": ["#F73E2C", "#F5015E", "#9A05AA", "#572391", "#3C4AB2", "#45B052", "#009788", "#01BBD4", "#00A4F4", "#0F90F2", "#88C648", "#CDDC3D", "#FEEE37", "#FEC224", "#F99B18", "#000000", "#5F7C8C", "#9D9D9D", "#785548", "#FF530C"],
          "widths": [1, 2, 4, 6]
        },
        "repaint": true
      }
    };

    // We need an initial state to predict the next state within the execution of an action.
    let initialState = Object.assign({}, paintJS(undefined, {
      type: 'INIT'
    }));

    // We prepare the first 2 iters.
    paintJS(initialState, canvasStoreDrawing(history.coords, history.color, history.width));
    paintJS(initialState, canvasStoreDrawing(deleted.coords, deleted.color, deleted.width));

    expect(paintJS(initialState, canvasRedo())).toEqual(expectedState);
  });
})
