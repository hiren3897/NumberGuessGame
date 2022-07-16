import HexaglobePlayer from "@advanced-suite/front-hexa-player/dist/HexaglobePlayer.bundle";
import "@advanced-suite/front-hexa-player/dist/index.css";
import './style.css'

const video = document.querySelector('#video');
const videoContainer = document.querySelector('#video-container');
const options = {
  basic: {
    source: 'https://test-drm.hexaglobe.net/hrathod/data/naadidosh.mkv',
  },
  ui_configuration: {
    castReceiverAppId: '1BA79154',
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

