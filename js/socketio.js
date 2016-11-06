//var serverAddress = 'http://52.42.156.8:4040';
var serverAddress = 'http://localhost:4040';

  var socket = io.connect(serverAddress, { 'forceNew': true });

  socket.on('messages', function(data) {
    console.log('Messages recieved');
    console.log(data);
    render(data);
  })

  function render (data) {
    //var count = data.length;
      console.log('Setting values');
      document.getElementById('homeTeamName').innerHTML = data.homeTeamName;
      document.getElementById('homeTeamScore').innerHTML = data.homeTeamScore;
      document.getElementById('awayTeamName').innerHTML = data.awayTeamName;
      document.getElementById('awayTeamScore').innerHTML = data.awayTeamScore;
      document.getElementById('timer').innerHTML = data.matchClock;
      document.getElementById('posetionTimer').innerHTML = data.posetionClock;
      document.getElementById('quarter').innerHTML = data.quarter;

  }
