export type TCommercialsApiConfig = {
  url: string;
  key: string;
  playlistId: string;
  maxResults: number;
  maxResultsPerPage: number;
};

export const commercialsRecent: TCommercialsApiConfig = {
  url: import.meta.env.YOUTUBE_API_URL || "",
  key: import.meta.env.YOUTUBE_API_KEY || "",
  playlistId: import.meta.env.YOUTUBE_PLAYLISTID || "",
  maxResults: parseInt(import.meta.env.YOUTUBE_MAX_RESULTS) || 15,
  maxResultsPerPage: 50,
};
