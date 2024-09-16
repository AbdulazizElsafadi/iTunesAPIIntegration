export interface iTunesResult {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistId?: number; // optional
  collectionArtistViewUrl?: string; // optional
  collectionViewUrl?: string; // optional
  artistId?: number; // optional
  trackViewUrl: string;
  isStreamable?: boolean;
  previewUrl?: string; // optional
  artworkUrl30: string;
  artworkUrl60: string;
  artistViewUrl?: string; // optional
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice?: number; // optional
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice?: number; // optional
  releaseDate: string; // ISO 8601 date format
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount?: number; // optional
  discNumber?: number; // optional
  trackCount: number;
  trackNumber?: number; // optional
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating?: string;
  shortDescription?: string; // optional
  longDescription?: string; // optional
  hasITunesExtras: boolean;
}
