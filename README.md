# BlazorSounds
## the basics:
* Blazor wasm app
* Use .NetCore and Blazor v5.0  
* Play some songs using various degrees of complexity.
## Credits (many thanks)
Music used to sample: [Bensound.com](https://www.bensound.com/) </br>
 _Not me and no relationship_
### Simple player tab
* *Simple player tab* to play, pause, and reload song.
* Uses one javascript file in js folder in wwwroot directory. Functions play, pause, reload 
* Sample song is ~ 2.6 seconds long. This is added to a sounds folder in wwwroot directory.
### Dual player tab
* *Dual player tab* to select a song from a list and play it
* Multiple songs to play and pause 
* Same JavaScript methods as above
* Same song storage technique as above, but Song data loaded from json file.
### Howler tab
* *Howler tab* to use a nuget package to play songs.
* possiblities endless...(working on it)
### Been Played tab
* Create an original control play/pause 
* Create a custom scrubber with touch contol to advance and rewind audio.
* Create a current progress and track length readout 
* *This tab uses css style-behind, and javascript modules to call JS directly. _no script in root index_
