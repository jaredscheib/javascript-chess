document.addEventListener('DOMContentLoaded', function (event){
  var canvas = document.getElementById('canvas');
  canvas.innerHTML = "<span>Native JavaScript Chess</span>";

  var createRow = function(repeat) {
    repeat = repeat || 8;

    var row = document.createElement('div');
    row.className = 'row';
    row.style.display = 'block';
    row.style.margin = '0px';
    row.style.padding = '0px';

    for (var i = 0; i < repeat; i++) {
      var tile = document.createElement('div');

      tile.className = 'tile';
      tile.style.width = tile.style.height = '100px';
      tile.style.backgroundColor = i % 2 === 0 ? '#F4F4F4' : '#A3A3A3';
      tile.style.display = 'inline-block';
      tile.style.border = '1px solid black';
      tile.style.margin = '0px';
      tile.style.padding = '0px';

      row.appendChild(tile);
    }

    return row;
  };

  var appendBoard = function(repeat, parent) {
    repeat = repeat || 8;
    parent = parent || document.body;

    var board = document.createElement('div');
    board.id = 'board';
    board.className = 'board';
    for (var i = 0; i < repeat; i++) {
      board.appendChild(createRow());
    }

    parent.appendChild(board);

    return board;
  };

  var board = appendBoard();
  console.log(board);
});
