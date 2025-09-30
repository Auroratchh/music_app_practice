import audioController from "../domain/audio_controller";

const player = {
    _last: document.getElementById("lastest"),
    _next: document.getElementById("forward"),
    _play: document.getElementById("play"),
    _controller: audioController, 
    initializePlayer(){
        this._last.addEventListener('click', this._controller.nextSong);
        this._next.addEventListener('click', this._controller.nextSong);
        this._play.addEventListener('click', this._controller.nextSong);
    }
}