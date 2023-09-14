import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
});

const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(localTimeValue, 1000));

function localTimeValue(data) {
  localStorage.setItem(LS_KEY, data.seconds);
}

const theme = localStorage.getItem(LS_KEY);

try {
  player.setCurrentTime(theme);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
