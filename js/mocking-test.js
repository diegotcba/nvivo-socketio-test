  var socket = io.connect('http://52.42.156.8:4040', { 'forceNew': true });
  var objetos = [];
  var posetionTimer = 24;

  var msj1 = {idMensaje: 45, titulo: 'Atenas', descripcion: '00.00'};
  var msj2 = {idMensaje: 36, titulo: 'Regatas', descripcion: '09'};

  objetos = new Array(msj1, msj2);

  function startMocking() {
      var d = new Date();

      posetionTimer--;
      if (posetionTimer <= 0) {
        posetionTimer = 24;
      }
      objetos[0].descripcion = d.toLocaleTimeString();
      objetos[1].descripcion = posetionTimer.toString();

      console.log(objetos);

      console.log('calling sendData');
      sendData(objetos);
  }

  function sendData(messages) {
    console.log('==== sendData ====');
    console.log('Messages:');
    console.log(messages);

    var jsonContent = JSON.stringify(messages)
    console.log(jsonContent);

    console.log('emiting socketio');
    socket.emit('new-message', jsonContent);
    console.log('==== fin sendData ====');
  }
