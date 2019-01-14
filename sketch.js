let radios = [
  'http://vogtlandradio.mp3.green.ch/vogtland_128k_mp3',
  'http://rsasachsen.radio.de',
  'http://radiopsr.radio.de',
  'http://mdrsputnik.radio.de',
  'http://hitradiortlsachsen.radio.de'
];

function setup() {
  noCanvas();
  noLoop();
  window.location = radios[round(random(radios.length))];
}
