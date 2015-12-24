document.addEventListener('DOMContentLoaded', function (event){
  var canvas = document.getElementById('canvas');
  canvas.innerHTML = "<span>Native JavaScript Chess</span>";

  var board = generateBoard();
  var pieces = placePieces(board);
});


var generateBoard = function(width, height, parent) {
  width = width || 8;
  height = height || 8;
  parent = parent || document.body;
  const TILE_DIM = 70;

  var board = document.createElement('div');
  board.id = 'board';
  board.className = 'board';
  board.style.border = '1px solid black';
  board.style.width = TILE_DIM * width + 2 + 'px';
  board.style.height = TILE_DIM * height + 2 + 'px';
  board.style.margin = '10px';

  for (var i = 0; i < height; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.style.display = 'block';
    row.style.margin = '0px';
    row.style.padding = '0px';
    row.style.cssFloat = 'left';
    row.style.clear = 'both';

    for (var j = 0; j < width; j++) {
      var tile = document.createElement('div');

      tile.className = 'tile';
      tile.style.width = tile.style.height = TILE_DIM + 'px';
      tile.style.backgroundColor = (i + j) % 2 === 0 ? '#F4F4F4' : '#A3A3A3';
      tile.style.display = 'inline-block';
      tile.style.border = '0px solid black';
      tile.style.margin = '0px';
      tile.style.padding = '0px';

      row.style.height = tile.style.height;
      row.style.width = TILE_DIM;

      row.appendChild(tile);
    }

    // board.style.height = board.style.width = board.childNodes[0].style.width

    board.appendChild(row);
  }

  parent.appendChild(board);

  return board;
};

// get one piece to appear in one tile
var placePieces = function (board) {
  for (var i = 0; i < board.childNodes.length; i++) {
    var row = board.childNodes[i];
    for (var j = 0; j < board.childNodes.length; j++) {
      var tile = row.childNodes[j];
      var piece = document.createElement('span');
      piece.style.fontSize = '40px';
      piece.innerHTML = '&#9812;';
      if (i === 0 && j === 4) tile.appendChild(piece);
    }
  };
};
// create pieces from unicode
  // set it up to redraw entire board from model rather than manipulating pieces on dom directly
