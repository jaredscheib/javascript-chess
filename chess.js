document.addEventListener('DOMContentLoaded', function (event){
  var canvas = document.getElementById('canvas');
  canvas.innerHTML = "<span>Native JavaScript Chess</span>";

  var tile = document.createElement('div');

  // one 100x100 div where bg color is black
  tile.style.width = tile.style.height = '100px';
  tile.style.backgroundColor = 'black';

  canvas.appendChild(tile);

  console.log(canvas, canvas.childNodes, tile, tile.parentNode);
});
