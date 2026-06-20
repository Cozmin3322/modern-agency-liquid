export interface Project {
  id: number
  title: string
  category: "Termoizolare" | "Hidroizolare"
  location: string
  year: number
  image: string
  slug: string
  shortDesc: string
  longDesc: string
  keywords: string[]
  metaTitle: string
  metaDescription: string
}

export const projects: Project[] = [
  // Portofoliu nou — proiecte adaugate pe rand
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Toate") return projects
  return projects.filter((p) => p.category === category)
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return projects.slice(0, count)
}
