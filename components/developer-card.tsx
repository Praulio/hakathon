// components/developer-card.tsx
// Card component for displaying developer information

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import type { Developer } from "@/lib/types"
import { Star } from "lucide-react"

interface DeveloperCardProps {
  developer: Developer
}

export default function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={developer.avatar || "/placeholder.svg?height=48&width=48"} alt={developer.name} />
          <AvatarFallback>{developer.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{developer.name}</CardTitle>
          <CardDescription>{developer.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">{developer.bio}</p>

          <div>
            <h4 className="text-sm font-medium mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {developer.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < developer.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                  />
                ))}
            </div>
            <span className="text-sm ml-2">{developer.rating.toFixed(1)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <div>
              <p className="text-muted-foreground">Completed Projects</p>
              <p className="font-medium">{developer.completedProjects}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Cred Points</p>
              <p className="font-medium text-primary">{developer.credPoints}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full">
          <Link href={`/developers/${developer.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

