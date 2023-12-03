export type ProductionType = {
  tmdb_id: number;
  title: string;
  overview: string | undefined;
  release_date: string | undefined;
  poster: string | undefined;
  media_type: 'MOVIE' | 'TV';
  slug: string;
};
