export type ContentType = "post" | "route" | "equipment";

export interface BaseFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes?: number;
  featured?: boolean;
  tags?: string[];
}

export interface PostFrontmatter extends BaseFrontmatter {
  author: string;
}

export interface RouteFrontmatter extends BaseFrontmatter {
  region: string;
  duration: string;
  distance: string;
  elevation: string;
  season: string;
  difficulty: "Легкий" | "Середній" | "Помірний";
}

export interface EquipmentFrontmatter extends BaseFrontmatter {
  level: string;
}

export interface ContentEntry<TFrontmatter> {
  slug: string;
  content: string;
  frontmatter: TFrontmatter;
}

