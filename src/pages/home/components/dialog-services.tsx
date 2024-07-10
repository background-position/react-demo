import VideoDialog from "./video-dialog";
import MusicDialog from "./music-dialog";

const getDIalogService = () => {
  return [
    {
      name: "vvv.vidoe",
      defaultComponent: VideoDialog,
    },
    {
      name: "vvv.music",
      defaultComponent: MusicDialog,
    },
  ];
};
export default getDIalogService;
