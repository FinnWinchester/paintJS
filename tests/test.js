import canvasUndo from '../app/actions/CanvasUndo';
import canvasRedo from '../app/actions/CanvasRedo';
import canvasPickColor from '../app/actions/CanvasPickColor';
import canvasPickWidth from '../app/actions/CanvasPickWidth';
import canvasStoreDrawing from '../app/actions/CanvasStoreDrawing';

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
})
