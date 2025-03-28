// lib/types.ts
// Type definitions for the application

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  budget: number
  postedDate: string
  categories: string[]
  skills: string[]
  featured?: boolean
  applications?: number
  image?: string
  entrepreneur?: {
    id: string
    name: string
    bio?: string
  }
}

export interface Developer {
  id: string
  name: string
  title: string
  bio: string
  avatar?: string
  skills: string[]
  rating: number
  completedProjects: number
  credPoints: number
  portfolioItems?: PortfolioItem[]
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  image?: string
  link?: string
  technologies: string[]
}

export interface User {
  id: string
  name: string
  email: string
  role: "entrepreneur" | "developer"
  avatar?: string
}

