"use strict";
const playPauseBtn = document.querySelector("#play-pause-button");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind-button");

const playPauseVideo = () => {
	//use the paused method available in the Video API 
  //to check the current state of the video
	video.paused ? video.play() : video.pause();
  updatePlayPauseIcon();
};


const updatePlayPauseIcon = ()=>{
  const icon = playPauseBtn.querySelector("i");
  icon.textContent = "";
  icon.textContent = video.paused ? "play_arrow" : "paused";
}

const rewindVideo = () => {
  video.currentTime += -10;
}

playPauseBtn.addEventListener("click", playPauseVideo);
video.addEventListener("click", playPauseVideo);
rewindBtn.addEventListener("click", rewindVideo);