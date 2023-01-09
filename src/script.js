import HexaglobePlayer from "@advanced-suite/front-hexa-player/dist/HexaglobePlayer.bundle";
import "@advanced-suite/front-hexa-player/dist/index.css";
import './style1.css'

const video = document.querySelector('#video');
const videoContainer = document.querySelector('#video-container');
const options = {
  basic: {
    source: 'https://test-drm.hexaglobe.net/hrathod/data/Dri2.mkv',
  },
  ui_configuration: {
    controlPanelElements: [
      'play_pause',
      'time_and_duration',
      'spacer',
      'playback_rate',
      'mute',
      'volume',
      'cast',
      'fullscreen',
      'airplay',
    ],
  },
  advanced_features: [
    {
      name: 'backward_button',
      visible: true,
      data: {
        backwardSeconds: 20,
        color: '#f0ea20'
      }
    },
    {
      name: 'forward_button',
      visible: true,
      data: {
        forwardSeconds: 20,
        color: 'yellow'
      },
      position: 3
    },
  ]
}
const hexaPlayer = new HexaglobePlayer(video, videoContainer, options);

hexaPlayer.init_()

setTimeout(() => {
  const movieTitle = document.querySelector('#movieTitle');
  movieTitle.textContent = 'Now playing Drishyam 2';

  const movieCards = document.querySelector('#movie-cards').children
  for (const card of movieCards) {
    card.addEventListener('click', () => {
      if (card.id === 'dri') {
        movieTitle.textContent = 'Now playing Drishyam 2';
        hexaPlayer.loadAssets_({
          basic: {
            source: 'https://test-drm.hexaglobe.net/hrathod/data/Dri2.mkv'
          }
        })
      } else {
        movieTitle.textContent = 'Now playing Kantara';
        hexaPlayer.loadAssets_({
          basic: {
            source: 'https://test-drm.hexaglobe.net/hrathod/data/Kan.mkv'
          }
        })
      }
    })
  }
}, 1000)
