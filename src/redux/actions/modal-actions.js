import { MONUMENT_PODCAST_MODAL } from "../../components/modal/bodies/monument-podcasts/monument-podcasts";
import { CLOSE_MODAL, OPEN_MODAL } from "../constants";

export const openMonumentPodcastModal = (podcastSources) => {

  return {
    type: OPEN_MODAL,
    payload: {
      modalId: MONUMENT_PODCAST_MODAL,
      modalData: podcastSources,
    },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
