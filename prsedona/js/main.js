window.onload = () => {

  function videoControls() {
    const player = document.querySelector('.video');
    const video = player.querySelector('.video__content');
    const progress = player.querySelector('.video__progress');
    const progressPimp = player.querySelector('.video__progress-control');
    const replay = player.querySelector('.video__controls-replay');
    const fullscreen = player.querySelector('.video__controls-fullscreen');
    
    function togglePlay() {
      const method = video.paused ? 'play' : 'pause';
      video[method]();
    }
    
    function handleProgress() {
      const percent = (video.currentTime / video.duration) * 100;
      progressPimp.style.left = `${percent}%`;
    }
    
    function scrub(e) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }
    
    function repl() {
      video.currentTime = 0;
      if (video.paused === true) {
        video.play();
      }
    }
    
    function fullcr() {
      video.webkitRequestFullscreen();
    }
    
    video.addEventListener('click', togglePlay);
    video.addEventListener('timeupdate', handleProgress);
    
    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
    
    replay.addEventListener('click', repl);
    fullscreen.addEventListener('click', fullcr);
  }

  // function formSizes() {
  //   const container = document.querySelector('.sedona-form__input-container'),
  //         content = document.querySelector('.sedona-form__input-label'),
  //         inpfield = document.querySelector('.sedona-form__input-text');
  //   console.log(container.offsetWidth);
  //   console.log(content.offsetWidth);

  //   inpfield.style.width = `${container.offsetWidth - content.offsetWidth -40}px`;
  // }

  if (document.querySelector('.video')) videoControls();
  // if (document.querySelector('.sedona-form')) formSizes();
}