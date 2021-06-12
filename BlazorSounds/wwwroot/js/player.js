export function playbuttonaudio(isplaying) {
    var x = document.getElementById("audioplayer");
    var button = document.getElementById("playpausebutton")

    if (isplaying === true) {

        button.className = "oi oi-media-pause";
        x.play();
    }
    else {

        button.className = "oi oi-media-play";
        x.pause();
    }

}
export function stopbuttonaudio() {
    var x = document.getElementById("audioplayer");
    document.getElementById("playpausebutton").className = "oi oi-media-play";
    x.pause();
}
export function loadmetadata() {
    var audio = document.getElementById("audioplayer");
    console.log(audio.duration);
    var trackLength = document.getElementById("trackLength");
    trackLength.innerHTML = audio.duration;
}
export function currenttime() {
    var audio = document.getElementById("audioplayer");
    console.log(audio.currentTime);
    // As the audio is playing update the value.
    var position = document.getElementById("currentProgress");
   // var progressbar = document.getElementById("progressbar");

    var myprogress = document.getElementById('my-progress');
    var myprogressBar = document.getElementById('my-progress-bar');


    audio.addEventListener('timeupdate', function () {
        position.innerHTML = audio.currentTime;
        //progressbar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';

        // input slider moves with progress bar value
        //selector.value = Math.floor(audio.currentTime);

        // As the video is playing, update MY-Progress-bar
        if (!myprogress.getAttribute('max')) myprogress.setAttribute('max', audio.duration);
        myprogress.value = audio.currentTime;
        myprogressBar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';
    })

    // Users clicking within the progress bar
    myprogress.addEventListener('click', function (e) {
        var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
        audio.currentTime = pos * audio.duration;
    })


}