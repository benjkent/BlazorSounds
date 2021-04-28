window.PlayAudio = (elementName) => {
    document.getElementById(elementName).play();
    
}
window.PauseAudio = (elementName) => {
    document.getElementById(elementName).pause();
    
}
window.ReloadAudio = (elementName) => {
    document.getElementById(elementName).load();
}
window.UpdatePlayPauseButtonIcon = (elementId) => {
    document.getElementById(elementId).className = 'oi oi-media-pause'
    
}
