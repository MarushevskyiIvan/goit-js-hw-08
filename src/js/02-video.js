import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
});
const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  const timeVolume = localStorage.setItem(LS_KEY, data.seconds);
});

const theme = localStorage.getItem(LS_KEY);

player
  .setCurrentTime(theme)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
