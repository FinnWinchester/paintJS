var dispatchStuff = (coords, color, width) => (
  {
    type: 'CANVAS_DRAWING_STORE',
    data: {
      coords,
      color,
      width
    }
  }
);

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

    expect(dispatchStuff(coords, color, width)).toEqual(expectedAction);
  })
})
