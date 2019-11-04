class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    console.log(player);
    $('#time-control .total-time').text(player.playState);
  }
}

const helper = new Helper();
