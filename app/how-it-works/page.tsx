// app/how-it-works/page.tsx
// Detailed How It Works page

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Lightbulb, Code, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">From Vision to Victory in 3 Simple Steps</h1>
          <p className="text-xl text-muted-foreground">
            Entrepreneurs bring the ideas. Developers bring the skills. DevMatch makes it happen—fast.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">1. Post Your Big Idea</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Got a startup dream? Share it in minutes—tell us what you need, set your budget, and hit 'Post.' Your
                project goes live on our dynamic feed for developers to discover.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Describe your project vision and requirements</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Set your budget and timeline expectations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Specify the skills and technologies needed</p>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/projects/new">
                  Post a Project Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/hero-collaboration.png"
                  alt="Entrepreneurs posting project ideas"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/finance-app-blue.png"
                  alt="Developers finding projects"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">2. Find Your Perfect Match</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Developers, browse fresh projects tailored to your skills. Filter by category, price, or tech stack,
                then apply with a click. It's your gig, your way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Browse projects filtered to match your skills</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Apply to projects with a single click</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Showcase your portfolio to stand out</p>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">3. Build and Launch Together</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Connect, collaborate, and create. Work directly with your match to turn ideas into MVPs—fast,
                affordable, and hassle-free. Launch your success story!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Collaborate directly without middlemen</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Track progress and milestones</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <p>Earn cred points for completed projects</p>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/auth/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/health-tracker-app.png"
                  alt="Building and launching projects"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/10 rounded-lg p-8 mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Mark?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            That's it! No middlemen, no fuss—just ideas meeting talent. Join our community of entrepreneurs and
            developers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/signup">Join DevMatch Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">Browse Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

