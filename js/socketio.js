  var socket = io.connect('http://52.42.156.8:4040', { 'forceNew': true });

  socket.on('messages', function(data) {
    console.log(data);
    render(data);
  })

  function render (data) {
    var count = data.length;
    var notifications = data.map(function(elem, index) {
      if(index < 5) {
        return(elem.idMensaje + ' - ' + elem.titulo);
      }
    }).join("\n")

    var header = 'Tienes ' + count + ' alertas';

    if(count != 0)
    {
      document.getElementById('homeTeamName').innerHTML = data[0].titulo;
      document.getElementById('homeTeamScore').innerHTML = data[0].idMensaje;
      document.getElementById('awayTeamName').innerHTML = data[1].titulo;
      document.getElementById('awayTeamScore').innerHTML = data[1].idMensaje;
      document.getElementById('timer').innerHTML = data[0].descripcion;
      document.getElementById('posetionTimer').innerHTML = data[1].descripcion;
    }
    else
    {
      //$('title').text('SIAC')
    }


  }
