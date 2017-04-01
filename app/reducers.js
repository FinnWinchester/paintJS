const getAbsolute = (col, row, maxCols) => {
  return col + row * maxCols;
}

const createChests = (count, cols, rows) => {
  let chests = [];
  let row, col, abs;
  for (var i = 0; i < count; i++) {
    row = Math.floor(Math.random() * rows);
    col = Math.floor(Math.random() * cols);
    abs = getAbsolute(col, row, cols);
    chests.push({
      col: col,
      row: row,
      absolute: abs
    });
  }
  return chests;
};

const getAvailable = (tile, maxCols, maxRows) => {
  let available = [];
  (tile.col - 1 >= 0) && available.push(getAbsolute(tile.col - 1, tile.row, maxCols));
  (tile.col + 1 < maxCols) && available.push(getAbsolute(tile.col + 1, tile.row, maxCols));
  (tile.row - 1 >= 0) && available.push(getAbsolute(tile.col, (tile.row - 1), maxCols));
  (tile.row + 1 < maxRows) && available.push(getAbsolute(tile.col, (tile.row + 1), maxCols));
  return available;
};

const findChest = (chests, tile) => {
  return chests.findIndex((each) => {
    return each.absolute === tile.absolute;
  });
};

const isChest = (chests, tile) => {
  findChest(chests, tile) !== -1;
};

export default (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'INIT':
      break;
    case 'SET_SUBHEADER':
      newState.subheader = action.data.subheader;
      break;
    case 'INIT_PaintBOARD':
      let available = getAvailable(action.data.startAt, action.data.maxCols, action.data.maxRows);
      newState.board_Paint = {
        tiles: action.data.tiles,
        maxCols: action.data.maxCols,
        maxRows: action.data.maxRows,
        chests: createChests(Math.floor(action.data.maxCols * action.data.maxRows / 15), action.data.maxCols, action.data.maxRows),
        startAt: action.data.startAt,
        revealed: [action.data.startAt],
        available: available
      };
      break;
    case 'TILE_CLICK':
      let revealedTile = action.data.revealed_tile;
      newState.board_Paint.revealed = [...newState.board_Paint.revealed, revealedTile];
      if (revealedTile.openChest && isChest(newState.board_Paint.chests, revealedTile)) {
        alert('Open chest');
        console.log(revealedTile, newState.board_Paint.chests);
      };

      (revealedTile.col - 1 >= 0) && newState.board_Paint.available.push(getAbsolute(revealedTile.col - 1, revealedTile.row, newState.board_Paint.maxCols));
      (revealedTile.col + 1 < newState.board_Paint.maxCols) && newState.board_Paint.available.push(getAbsolute(revealedTile.col + 1, revealedTile.row, newState.board_Paint.maxCols));
      (revealedTile.row - 1 >= 0) && newState.board_Paint.available.push(getAbsolute(revealedTile.col, (revealedTile.row - 1), newState.board_Paint.maxCols));
      (revealedTile.row + 1 < newState.board_Paint.maxRows) && newState.board_Paint.available.push(getAbsolute(revealedTile.col, (revealedTile.row + 1), newState.board_Paint.maxCols));
      break;
    default:
      break;
  }
  return newState;
}
