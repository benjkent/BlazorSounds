window.PlayAudio = (elementName) => {
    document.getElementById(elementName).play();
    // alert("playing")
}
window.PauseAudio = (elementName) => {
    document.getElementById(elementName).pause();
    
}
window.ReloadAudio = (elementName) => {
    document.getElementById(elementName).load();
}