import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { estimateReadingMinutes } from "@/lib/utils";
import type {
  BaseFrontmatter,
  ContentEntry,
  EquipmentFrontmatter,
  PostFrontmatter,
  RouteFrontmatter,
} from "@/types/content";

const contentRoot = path.join(process.cwd(), "src", "content");

function readDirectory(directory: string) {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .sort();
}

function readContentFile<TFrontmatter extends BaseFrontmatter>(
  directoryName: string,
  slug: string,
): ContentEntry<TFrontmatter> {
  const fullPath = path.join(contentRoot, directoryName, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    content,
    frontmatter: {
      ...data,
      readingMinutes: data.readingMinutes ?? estimateReadingMinutes(content),
    } as TFrontmatter,
  };
}

function getCollection<TFrontmatter extends BaseFrontmatter>(directoryName: string) {
  const directory = path.join(contentRoot, directoryName);

  return readDirectory(directory)
    .map((file) => file.replace(/\.md$/, ""))
    .map((slug) => readContentFile<TFrontmatter>(directoryName, slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime(),
    );
}

export function getPosts() {
  return getCollection<PostFrontmatter>("posts");
}

export function getRoutes() {
  return getCollection<RouteFrontmatter>("routes");
}

export function getEquipmentGuides() {
  return getCollection<EquipmentFrontmatter>("equipment");
}

export function getPost(slug: string) {
  return readContentFile<PostFrontmatter>("posts", slug);
}

export function getRoute(slug: string) {
  return readContentFile<RouteFrontmatter>("routes", slug);
}

export function getEquipmentGuide(slug: string) {
  return readContentFile<EquipmentFrontmatter>("equipment", slug);
}

export function getFeaturedPosts() {
  return getPosts().filter((post) => post.frontmatter.featured).slice(0, 3);
}

export function getFeaturedRoutes() {
  return getRoutes().filter((route) => route.frontmatter.featured).slice(0, 3);
}

export function getFeaturedEquipment() {
  return getEquipmentGuides().filter((guide) => guide.frontmatter.featured).slice(0, 3);
}
