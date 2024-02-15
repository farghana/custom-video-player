"use strict";
const playPauseBtn = document.querySelector("#play-pause-button");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind-button");
const forwardBtn = document.querySelector("#forward-button");
const volumeBtn = document.querySelector("#volume-button");
const progressBarIndicator = document.querySelector("#progress-indicator");

const playPauseVideo = () => {
	//use the paused method available in the Video API
	//to check the current state of the video
	video.paused ? video.play() : video.pause();
	updatePlayPauseIcon();
};

const updatePlayPauseIcon = () => {
	const icon = playPauseBtn.querySelector("i");
	icon.textContent = "";
	icon.textContent = video.paused ? "play_arrow" : "paused";
};

const rewindForwardVideo = (type) => {
	video.currentTime += type === "rewind" ? -10 : 10;
};

const controlVolume = () => {
	video.muted = video.muted ? false : true;
	updateVolumeIcon();
};
const updateVolumeIcon = () => {
	const icon = volumeBtn.querySelector("i");
	icon.textContent = "";
	icon.textContent = video.muted ? "volume_off" : "volume_up";
};

//get video playtime
const videoProgressIndicator = () => {
	const videoProgress = (video.currentTime / video.duration) * 100;
	//inline style for the progress bar
	progressBarIndicator.style.width = `${videoProgress}%`;
};

playPauseBtn.addEventListener("click", playPauseVideo);
video.addEventListener("click", playPauseVideo);

rewindBtn.addEventListener("click", () => rewindForwardVideo("rewind"));
forwardBtn.addEventListener("click", () => rewindForwardVideo("forward"));
volumeBtn.addEventListener("click", controlVolume);
video.addEventListener("timeupdate", videoProgressIndicator);

//get seeker position
const progressBar = document.querySelector("#progress-bar");

const setCurrentVideoTime = (e) => {
	const getMousePosition = e.offsetX;
  const getMousePositionTime = (getMousePosition/progressBar.offsetWidth)*video.duration;
  //set video current time
  video.currentTime = getMousePositionTime;
};

//add eventlistener for seeking 
progressBar.addEventListener("click", setCurrentVideoTime);