
export function PlayAudio(elementName) {
    document.getElementById(elementName).play();
}
export function PauseAudio(elementName) {
    document.getElementById(elementName).pause();
}
export function ReloadAudio(elementName) {
    document.getElementById(elementName).load();
}
