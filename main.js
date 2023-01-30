let video_player = document.getElementById('video-player1');
let video_about_cleaning = document.getElementById('video-about-cleaning');
const videoPoster = document.querySelector('.video-poster');
// const videoPlayerMP4 = document.getElementById('video-player-mp4')

function stopVideo() {
    video_player.style.display = "none";
    videoPoster.style.opacity = .5;
}

function playVideo(file) {
    video_about_cleaning.src = file;
    video_player.style.display = "block";
    videoPoster.style.opacity = 1;
}
