

 const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");

searchIcon.addEventListener("click", () => {
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
        searchBar.focus();
    }
});

        // Show product section after a delay (5 seconds)
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.getElementById('productSection').style.display = 'block';
            }, 5000);
        });

const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const muteUnmuteBtn = document.getElementById("muteUnmute");
const fullscreenBtn = document.getElementById("fullscreen");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

muteUnmuteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteUnmuteBtn.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});

fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

