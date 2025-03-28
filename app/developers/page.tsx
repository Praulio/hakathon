"use client"

// app/developers/page.tsx
// Developers listing page with filtering functionality

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DeveloperCard from "@/components/developer-card"
import { developers } from "@/lib/data"
import { useState, useEffect } from "react"
import type { Developer } from "@/lib/types"

export default function DevelopersPage() {
  const [filteredDevelopers, setFilteredDevelopers] = useState<Developer[]>(developers)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkill, setSelectedSkill] = useState("all")
  const [selectedExperience, setSelectedExperience] = useState("any")
  const [isFiltering, setIsFiltering] = useState(false)

  // Get unique skills from developers
  const skills = Array.from(new Set(developers.flatMap((developer) => developer.skills)))

  // Apply filters when any filter changes or when Apply button is clicked
  useEffect(() => {
    if (!isFiltering) return

    let result = [...developers]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (developer) =>
          developer.name.toLowerCase().includes(query) ||
          developer.bio.toLowerCase().includes(query) ||
          developer.title.toLowerCase().includes(query),
      )
    }

    // Apply skill filter
    if (selectedSkill !== "all") {
      result = result.filter((developer) => developer.skills.includes(selectedSkill))
    }

    // Apply experience filter
    if (selectedExperience !== "any") {
      switch (selectedExperience) {
        case "beginner":
          result = result.filter((developer) => developer.completedProjects <= 5)
          break
        case "intermediate":
          result = result.filter((developer) => developer.completedProjects > 5 && developer.completedProjects <= 10)
          break
        case "advanced":
          result = result.filter((developer) => developer.completedProjects > 10 && developer.completedProjects <= 15)
          break
        case "expert":
          result = result.filter((developer) => developer.completedProjects > 15)
          break
      }
    }

    setFilteredDevelopers(result)
    setIsFiltering(false)
  }, [isFiltering, searchQuery, selectedSkill, selectedExperience])

  // Apply filters
  const applyFilters = () => {
    setIsFiltering(true)
  }

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedSkill("all")
    setSelectedExperience("any")
    setFilteredDevelopers(developers)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Find Developers</h1>
          <p className="text-muted-foreground mt-2">Connect with talented developers for your project</p>
        </div>
      </div>

      <div className="bg-card border rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Search</label>
            <Input
              placeholder="Search developers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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

          <div className="space-y-2">
            <label className="text-sm font-medium">Experience Level</label>
            <Select value={selectedExperience} onValueChange={setSelectedExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Any Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Level</SelectItem>
                <SelectItem value="beginner">Beginner (0-5 projects)</SelectItem>
                <SelectItem value="intermediate">Intermediate (6-10 projects)</SelectItem>
                <SelectItem value="advanced">Advanced (11-15 projects)</SelectItem>
                <SelectItem value="expert">Expert (15+ projects)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="outline" className="mr-2" onClick={resetFilters}>
            Reset Filters
          </Button>
          <Button onClick={applyFilters}>Apply Filters</Button>
        </div>
      </div>

      {filteredDevelopers.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No developers match your filters</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search criteria or reset filters</p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDevelopers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      )}
    </div>
  )
}

