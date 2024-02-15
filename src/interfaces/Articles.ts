interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: Events[];
}

interface Launch {
  launch_id: string;
  provider: string;
}

interface Events {
  featured: boolean;
  id: number;
  image_url: string;
}
