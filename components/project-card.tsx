// components/project-card.tsx
// Card component for displaying project information

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Project } from "@/lib/types"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.featured && (
            <Badge variant="default" className="bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      {project.image && (
        <div className="relative h-48 w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover border-t border-b border-border"
          />
        </div>
      )}
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Budget:</span>
            <span className="font-medium text-accent">${project.budget.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Posted:</span>
            <span>{project.postedDate}</span>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

