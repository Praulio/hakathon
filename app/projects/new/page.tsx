// app/projects/new/page.tsx
// New project creation page

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import Link from "next/link"

export default function NewProjectPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Post Your Project</h1>
          <p className="text-muted-foreground mt-2">Share your vision and find the perfect developer</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Provide information about your project to attract the right developers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Project Title
              </label>
              <Input id="title" placeholder="E.g., AI-Powered Personal Finance App" />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Project Description
              </label>
              <Textarea
                id="description"
                placeholder="Describe your project, goals, and what you're looking for in a developer..."
                className="min-h-[150px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Categories</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                    <SelectItem value="ai">AI/Machine Learning</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Duration</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1-month">Less than 1 month</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="more-than-6-months">More than 6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Budget</label>
                <span className="text-sm font-medium">$5,000</span>
              </div>
              <Slider defaultValue={[5000]} max={10000} step={500} />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>$500</span>
                <span>$10,000+</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Required Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  React
                  <button className="ml-1 rounded-full hover:bg-muted">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  Node.js
                  <button className="ml-1 rounded-full hover:bg-muted">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  TypeScript
                  <button className="ml-1 rounded-full hover:bg-muted">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              </div>
              <Input placeholder="Add a skill and press Enter..." />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/projects">Cancel</Link>
            </Button>
            <Button>Post Project</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

