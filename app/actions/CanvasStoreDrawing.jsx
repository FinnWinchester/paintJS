export default function storeCanvasDrawing(coords, color, width) {
  return {
    type: 'CANVAS_DRAWING_STORE',
    data: {
      coords,
      color,
      width
    }
  }
}
