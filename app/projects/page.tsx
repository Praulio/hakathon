"use client"

// app/projects/page.tsx
// Projects listing page with filtering functionality

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectCard from "@/components/project-card"
import { Slider } from "@/components/ui/slider"
import { useState, useEffect } from "react"
import { projects } from "@/lib/data"
import type { Project } from "@/lib/types"
import Link from "next/link"

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSkill, setSelectedSkill] = useState("all")
  const [budgetRange, setBudgetRange] = useState(10000)
  const [isFiltering, setIsFiltering] = useState(false)

  // Get unique categories and skills from projects
  const categories = Array.from(new Set(projects.flatMap((project) => project.categories)))
  const skills = Array.from(new Set(projects.flatMap((project) => project.skills)))

  // Apply filters when any filter changes or when Apply button is clicked
  useEffect(() => {
    if (!isFiltering) return

    let result = [...projects]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter((project) => project.categories.includes(selectedCategory))
    }

    // Apply skill filter
    if (selectedSkill !== "all") {
      result = result.filter((project) => project.skills.includes(selectedSkill))
    }

    // Apply budget filter
    result = result.filter((project) => project.budget <= budgetRange)

    setFilteredProjects(result)
    setIsFiltering(false)
  }, [isFiltering, searchQuery, selectedCategory, selectedSkill, budgetRange])

  // Apply filters
  const applyFilters = () => {
    setIsFiltering(true)
  }

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedSkill("all")
    setBudgetRange(10000)
    setFilteredProjects(projects)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Browse Projects</h1>
          <p className="text-muted-foreground mt-2">Find the perfect project to work on</p>
        </div>
        <Button asChild>
          <Link href="/projects/new">Post a Project</Link>
        </Button>
      </div>

      <ProjectFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        budgetRange={budgetRange}
        setBudgetRange={setBudgetRange}
        categories={categories}
        skills={skills}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
      />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No projects match your filters</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search criteria or reset filters</p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

interface ProjectFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedSkill: string
  setSelectedSkill: (skill: string) => void
  budgetRange: number
  setBudgetRange: (range: number) => void
  categories: string[]
  skills: string[]
  applyFilters: () => void
  resetFilters: () => void
}

function ProjectFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedSkill,
  setSelectedSkill,
  budgetRange,
  setBudgetRange,
  categories,
  skills,
  applyFilters,
  resetFilters,
}: ProjectFiltersProps) {
  return (
    <div className="bg-card border rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Search</label>
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Skills</label>
          <Select value={selectedSkill} onValueChange={setSelectedSkill}>
            <SelectTrigger>
              <SelectValue placeholder="All Skills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Skills</SelectItem>
              {skills.map((skill) => (
                <SelectItem key={skill} value={skill}>
                  {skill}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Budget Range</label>
          <span className="text-sm font-medium">${budgetRange.toLocaleString()}</span>
        </div>
        <div className="pt-6 pb-2">
          <Slider value={[budgetRange]} max={10000} step={500} onValueChange={(value) => setBudgetRange(value[0])} />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>$0</span>
            <span>$10,000+</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button variant="outline" className="mr-2" onClick={resetFilters}>
          Reset Filters
        </Button>
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  )
}

