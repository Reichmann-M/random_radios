let radios = [
  'http://vogtlandradio.mp3.green.ch/vogtland_128k_mp3', // vogtland
  'http://streams.rsa-sachsen.de/100/mp3-192/streams.rsa-sachsen.de/play', // R.SA
  'http://streams.radiopsr.de/101/mp3-192/streams.radiopsr.de/play', // RadioPSR
  'http://avw.mdr.de/streams/284330-0_mp3_high', // MDR Sputnik
  'http://stream.hitradio-rtl.de/HRRTL/mp3' // Hitradio
];

function setup() {
  noCanvas();
  noLoop();
  window.location = radios[round(random(0,radios.length))];
}
