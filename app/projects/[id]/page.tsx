// app/projects/[id]/page.tsx
// Project details page

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, DollarSign, Users } from "lucide-react"
import Image from "next/image"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {project.image && (
            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          )}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
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
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <Tabs defaultValue="details">
              <TabsList>
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                  <p>{project.longDescription || "No detailed description provided."}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Goals</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Create a functional MVP within the specified timeline</li>
                    <li>Implement core features with a focus on user experience</li>
                    <li>Ensure the solution is scalable for future enhancements</li>
                    <li>Deliver clean, well-documented code</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="requirements" className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.skills.map((skill) => (
                      <li key={skill}>{skill} experience required</li>
                    ))}
                    <li>Experience with version control (Git)</li>
                    <li>Ability to write clean, maintainable code</li>
                    <li>Understanding of responsive design principles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Functional MVP meeting all specified requirements</li>
                    <li>Source code with documentation</li>
                    <li>Deployment instructions</li>
                    <li>Basic user guide</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="timeline" className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Timeline</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Planning and design: 1 week</li>
                    <li>Development: 3-4 weeks</li>
                    <li>Testing and refinement: 1 week</li>
                    <li>Deployment: 2-3 days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Milestones</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Project kickoff and requirements gathering</li>
                    <li>Design approval</li>
                    <li>Core functionality implementation</li>
                    <li>MVP completion and testing</li>
                    <li>Final delivery and deployment</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Key information about this project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="font-medium text-accent">${project.budget.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Posted On</p>
                  <p className="font-medium">{project.postedDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">4-6 weeks</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="font-medium">{project.applications || 0}</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About the Entrepreneur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src={project.entrepreneur?.avatar || "/placeholder.svg?height=40&width=40"}
                    alt={project.entrepreneur?.name || "Entrepreneur"}
                  />
                  <AvatarFallback>{project.entrepreneur?.name?.charAt(0) || "E"}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{project.entrepreneur?.name || "Anonymous"}</p>
                  <p className="text-sm text-muted-foreground">Visionary Rank: Starter</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {project.entrepreneur?.bio ||
                  "An entrepreneur with a vision to change the world through innovative technology solutions."}
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/entrepreneurs/${project.entrepreneur?.id || "profile"}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>

          <Button className="w-full">Apply for This Project</Button>
        </div>
      </div>
    </div>
  )
}

