const SourceType = {
  LINK: "LINK",
  PODCASTS_APPLE: "PODCASTS_APPLE",
  PODCASTS_GOOGLE: "PODCASTS_GOOGLE",
  PODCASTS_POCKETCASTS: "PODCASTS_POCKETCASTS",
  PODCASTS_CASTBOX: "PODCASTS_CASTBOX",
  BOOK: "BOOK",
  VIDEO: "VIDEO",
  INSTAGRAM: "INSTAGRAM",
  PODCASTS_PODLINK: "PODCASTS_PODLINK",
  PODCASTS_SPOTIFY: "PODCASTS_SPOTIFY",
};

export default SourceType;

export function GetPodcastSourceTypes() {
  return [
    SourceType.PODCASTS_APPLE,
    SourceType.PODCASTS_GOOGLE,
    SourceType.PODCASTS_POCKETCASTS,
    SourceType.PODCASTS_CASTBOX,
    SourceType.PODCASTS_PODLINK,
    SourceType.PODCASTS_SPOTIFY,
  ];
}

export function GetDefaultSourceTypes() {
  return [SourceType.LINK, SourceType.BOOK];
}

export function IsPodcast({ sourceType }) {
  return GetPodcastSourceTypes().includes(sourceType);
}

export function IsDefaultSource({ sourceType }) {
  return GetDefaultSourceTypes().includes(sourceType);
}
