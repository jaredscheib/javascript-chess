// chess piece constants
const EMPTY = '', KING_W = '&#9812;', QUEEN_W = '&#9813;', ROOK_W = '&#9814;', BISHOP_W = '&#9815;', KNIGHT_W = '&#9816;', PAWN_W = '&#9817;', KING_B = '&#9818;', QUEEN_B = '&#9819;', ROOK_B = '&#9820;', BISHOP_B = '&#9821;', KNIGHT_B = '&#9822;', PAWN_B = '&#9823;';


document.addEventListener('DOMContentLoaded', function (event){
  var canvas = document.getElementById('canvas');
  canvas.innerHTML = "<span>Native JavaScript Chess</span>";

  var board = generateBoard();
  canvas.appendChild(board);

  var pieces = createPieceModel();
  placePieces(board, pieces);
});

document.addEventListener('click', function (event) {
  if (event.target.className.indexOf('piece') !== -1) event.target.parentNode.classList.toggle('highlighted');
  else if (event.target.className.indexOf('tile') !== -1) event.target.classList.toggle('highlighted');
});


var generateBoard = function(width, height) {
  width = width || 8;
  height = height || 8;
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

  return board;
};

var createPieceModel = function () {
  var model = [];
  for (var i = 0; i < 8; i++) {
    var row = [];
    if (i === 0) row.push(ROOK_B, KNIGHT_B, BISHOP_B, QUEEN_B, KING_B, BISHOP_B, KNIGHT_B, ROOK_B);
    else if (i === 1) row.push(PAWN_B, PAWN_B, PAWN_B, PAWN_B, PAWN_B, PAWN_B, PAWN_B, PAWN_B);
    else if (i === 6) row.push(PAWN_W, PAWN_W, PAWN_W, PAWN_W, PAWN_W, PAWN_W, PAWN_W, PAWN_W);
    else if (i === 7) row.push(ROOK_W, KNIGHT_W, BISHOP_W, QUEEN_W, KING_W, BISHOP_W, KNIGHT_W, ROOK_W);
    else row.push(EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY);

    model.push(row);
  }


  return model;
};

// get one piece to appear in one tile
var placePieces = function (board, pieces) {
  for (var i = 0; i < board.childNodes.length; i++) {
    var row = board.childNodes[i];
    for (var j = 0; j < row.childNodes.length; j++) {
      var tile = row.childNodes[j];
      var piece = document.createElement('span');
      piece.className = 'piece noselect';
      // piece.style.position = 'absolute';
      // piece.style.top = '50%';
      // piece.style.left = '50%';
      // piece.style.transform = 'translateX(-50%) translateY(-50%)';
      piece.style.display = 'flex';
      piece.style.alignItems = 'center';
      piece.style.justifyContent = 'center';
      piece.style.fontSize = '60px';
      // piece.style.margin = 'auto';
      piece.style.padding = '0px';
      piece.style.cssFloat = 'left';
      piece.style.height = piece.style.width = '60px';

      piece.innerHTML = pieces[i][j];
      tile.appendChild(piece);
    }
  };
};
// create pieces from unicode
  // set it up to redraw entire board from model rather than manipulating pieces on dom directly
