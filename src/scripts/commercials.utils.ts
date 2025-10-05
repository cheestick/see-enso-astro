import {
  commercialsRecent,
  type TCommercialsApiConfig,
} from "@data/youtube.api";

export function formCommercialApiUrl(config: TCommercialsApiConfig) {
  const { url, maxResults, playlistId, key } = config;
  return {
    url: `${url}&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`,
  };
}

export async function getAllCommercials() {
  const { url, playlistId, key, maxResultsPerPage } = commercialsRecent;
  const playlistUrl = `${url}&maxResults=${maxResultsPerPage}&playlistId=${playlistId}&key=${key}`;
  const response = await fetch(playlistUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getFavouriteCommercials() {
  const { url } = formCommercialApiUrl(commercialsRecent);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export function filterAvailableVideos(videos: unknown) {
  if (Array.isArray(videos)) {
    return videos.filter(
      (item) => Object.hasOwn(item, "snippet") && isVideoAvailable(item.snippet)
    );
  }
  return [];
}

export function getSnippetThumbnail(thumb: TSnippetThumbnail) {
  if ("standard" in thumb) return thumb.standard;
  if ("maxres" in thumb) return thumb.maxres;
  if ("high" in thumb) return thumb.high;
  if ("medium" in thumb) return thumb.medium;
  return thumb.default;
}

export type TSnippetThumbnail = Record<
  string,
  {
    url: string;
    width: number;
    height: number;
  }
>;

export type TYoutubePlaylistItemSnippet = {
  title: string;
  description: string;
  thumbnails: {};
  videoOwnerChannelTitle?: string;
  videoOwnerChannelId?: string;
};

export function isVideoAvailable(snippet: TYoutubePlaylistItemSnippet) {
  const availabitilyCriteria = {
    hasDeleletedVideoTitle: snippet?.title === "Deleted video",
    hasVideoUnavailableDescription:
      snippet?.description === "This video is unavailable",
    noThumbnails: isEmptyObject(snippet?.thumbnails),
    noOwnerData: !hasYoutubeOwnerData(snippet),
  };

  return !Object.values(availabitilyCriteria).includes(true);
}

function hasYoutubeOwnerData(object: TYoutubePlaylistItemSnippet) {
  return (
    Object.hasOwn(object, "videoOwnerChannelId") ||
    Object.hasOwn(object, "videoOwnerChannelTitle")
  );
}

function isEmpty(obj: object) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

function hasKeys(object: object) {
  return Object.keys(object).length > 0;
}

function isEmptyObject(object: object) {
  return Object.keys(object).length === 0;
}
