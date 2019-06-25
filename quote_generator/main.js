function rgbCode() {
  var newColor = [0, 0, 0, 0.5];
  for (var i = 0; i < 3; i++) {
    var color = Math.floor(Math.random() * (255 - 0) + 0);
    newColor[i] = color;
  };
    console.log(typeof newColor[0]);
  newColor[3] =  Math.floor(Math.random() * (8 - 2) + 2) / 10;
  var color = "rgba(" + newColor + ")";
  document.getElementById('derp').style.background = color;
};
