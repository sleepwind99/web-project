// Youtube IFrame API 동작
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 'Tdwetb0Mvyc', 
    playerVars: {
      autoplay: true, 
      loop: true, 
      playlist: 'Tdwetb0Mvyc' 
    },
    events: {
      onReady: function (event) {
        event.target.mute() 
      }
    }
  })
}
