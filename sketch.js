let radios = [
  'http://vogtlandradio.mp3.green.ch/vogtland_128k_mp3', // vogtland
  'http://streams.rsa-sachsen.de/100/mp3-192/streams.rsa-sachsen.de/play.m3u', // R.SA
  'http://streams.radiopsr.de/101/mp3-192/streams.radiopsr.de/play.m3u', // RadioPSR
  'http://avw.mdr.de/streams/284330-0_mp3_high.m3u', // MDR Sputnik
  'http://stream.hitradio-rtl.de/HRRTL/mp3.m3u' // Hitradio
];

function setup() {
  noCanvas();
  noLoop();
  window.location = radios[round(random(0,radios.length))];
}
