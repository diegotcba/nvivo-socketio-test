  //var serverAddress = 'http://52.42.156.8:4040';
  var serverAddress = 'http://localhost:4040';

  var socket = io.connect(serverAddress, { 'forceNew': true });
  var objetos = [];
  var posetionTimer = 24;

  var matchInfo = {homeTeamName: 'Atenas', awayTeamName: 'Regatas (er)', homeTeamScore: 45, awayTeamScore: 36,
            quarter: '2Q', matchClock: '12:26', posetionClock: '24'}

  function setScore(textField, value) {
    var aux = document.getElementById(textField).value;
    document.getElementById(textField).value = Number(aux) + value;
  }

  function startMocking() {
      var d = new Date();

      posetionTimer--;
      if (posetionTimer <= 0) {
        posetionTimer = 24;
      }
      matchInfo.matchClock = d.toLocaleTimeString();
      matchInfo.posetionClock = posetionTimer.toString();
      matchInfo.homeTeamName = document.getElementById('homeName').value;
      matchInfo.awayTeamName = document.getElementById('awayName').value;
      matchInfo.homeTeamScore= document.getElementById('homeScore').value;
      matchInfo.awayTeamScore = document.getElementById('awayScore').value;

      console.log(matchInfo);

      console.log('calling sendData');
      sendData(matchInfo);
  }

  function sendData(messages) {
    console.log('==== sendData ====');
    console.log('Messages:');
    console.log(messages);

    var jsonContent = JSON.stringify(messages)
    console.log(jsonContent);

    console.log('emiting socketio');
    socket.emit('messages', jsonContent);
    console.log('==== fin sendData ====');
  }
