import HexaglobePlayer from "@advanced-suite/front-hexa-player/dist/HexaglobePlayer.bundle";
import "@advanced-suite/front-hexa-player/dist/index.css";

const video = document.querySelector('#video');
const videoContainer = document.querySelector('#video-container');
const options = {
  basic: {
    source: 'https://test-drm.hexaglobe.net/hrathod/data/sonu.mkv',
  },
}
const hexaPlayer = new HexaglobePlayer(video, videoContainer, options);

hexaPlayer.init_()

