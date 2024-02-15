"use strict";
const playPauseBtn = document.querySelector("#play-pause-button");
const video = document.querySelector("video");

const playPauseVideo = () => {
	//use the paused method available in the Video API 
  //to check the current state of the video
	video.paused ? video.play() : video.pause();
};

playPauseBtn.addEventListener("click", playPauseVideo);