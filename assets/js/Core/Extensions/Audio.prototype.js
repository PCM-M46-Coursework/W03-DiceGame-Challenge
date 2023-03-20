Audio.prototype.isPlaying = function() {
    var infoPlaying = false
    var currentTime = sound.currentTime == 0 ? true : false
    var paused = sound.paused ? true : false
    var ended = !sound.ended ? true : false
    var readyState = sound.readyState == 0 ? true : false
    if (currentTime && paused && ended && readyState) {
        infoPlaying = true
    } else if (!currentTime && !paused && ended && !readyState) {
        infoPlaying = true
    }
  return infoPlaying
}