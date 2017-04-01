export default function canvasPickColor(color) {
  return {
    type: 'CANVAS_SELECT_COLOR',
    data: {
      color: color
    }
  }
}
