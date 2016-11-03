var basketScoreboard = new Object();

basketScoreboard.homeTeamName = 'equipo1';
basketScoreboard.homeTeamScore = '0';
basketScoreboard.awayTeamName = 'equipo2';
basketScoreboard.awayTeamScore = '0';
basketScoreboard.timer = '00:00';
basketScoreboard.posetionTimer = '00';

  //PLAY 1-1 [HTML] "file:///C:/IDTeam/nViVo/nvivo-socketio-test/index.html"
  function play(strVariable) {
    //First we assign the text to every field (swimmer names and swimming series name)
    $('#homeTeamName').text(basketScoreboard.homeTeamName);
    $('#homeTeamScore').text(basketScoreboard.homeTeamScore);
    $('#awayTeamName').text(basketScoreboard.awayTeamName);
    $('#awayTeamScore').text(basketScoreboard.awayTeamScore);
    $('#timer').text(basketScoreboard.timer);
    $('#posetionTimer').text(basketScoreboard.posetionTimer);

    $('#background').css('visibility', 'visible');
  }

  function stop() {
    $('#background').css('visibility', 'hidden');
  }
