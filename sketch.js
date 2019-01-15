let radios;
// sputnik http://avw.mdr.de/streams/284330-0_mp3_high

function preload() {
  radios = loadStrings('assets/radios.txt');
}

function setup() {
  noCanvas();
  noLoop();
  window.location = radios[round(random(0,radios.length))];
}
