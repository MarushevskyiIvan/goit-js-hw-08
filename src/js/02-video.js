import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
});
const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(localTimeValue, 1000));

function localTimeValue(data) {
  return localStorage.setItem(LS_KEY, data.seconds);
}

try {
  const theme = localStorage.getItem(LS_KEY);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

player.setCurrentTime(theme);
