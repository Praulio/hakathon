import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Where <span className="text-primary">Ideas</span> Meet <span className="text-accent">Execution</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect entrepreneurs with startup ideas to developers eager to build MVPs. Fast, affordable collaboration
            without the middlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auth/signup">Create Account</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/hero-collaboration.png"
              alt="Entrepreneurs and developers collaborating"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Vision to Victory in 3 Simple Steps</h2>
          <p className="text-lg text-muted-foreground">
            Entrepreneurs bring the ideas. Developers bring the skills. DevMatch makes it happen—fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Post Your Big Idea</h3>
            <p className="text-muted-foreground mb-6">
              Got a startup dream? Share it in minutes—tell us what you need, set your budget, and hit 'Post.' Your
              project goes live on our dynamic feed for developers to discover.
            </p>
            <Button asChild className="mt-auto">
              <Link href="/projects/new">Post a Project Now</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Find Your Perfect Match</h3>
            <p className="text-muted-foreground mb-6">
              Developers, browse fresh projects tailored to your skills. Filter by category, price, or tech stack, then
              apply with a click. It's your gig, your way.
            </p>
            <Button asChild className="mt-auto">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Build and Launch Together</h3>
            <p className="text-muted-foreground mb-6">
              Connect, collaborate, and create. Work directly with your match to turn ideas into MVPs—fast, affordable,
              and hassle-free. Launch your success story!
            </p>
            <Button asChild className="mt-auto">
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            That's it! No middlemen, no fuss—just ideas meeting talent. Ready to make your mark?
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/signup">Join DevMatch Today</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">This Week's Hot Idea</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="border rounded-lg p-6 bg-card">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/finance-app-blue.png"
                  alt="Featured project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center gap-2">
                <span className="badge badge-accent">Featured</span>
                <span className="badge badge-secondary">AI</span>
                <span className="badge badge-secondary">Mobile</span>
              </div>
              <h3 className="text-2xl font-bold">AI-Powered Personal Finance Assistant</h3>
              <p className="text-muted-foreground">
                Looking for React Native developers to build an AI-powered personal finance app that helps users track
                expenses, set budgets, and receive personalized financial advice through natural language processing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-accent">Budget: $5,000</span>
                <Button>Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg border bg-card">
            <p className="text-4xl font-bold text-primary">50+</p>
            <p className="text-lg text-muted-foreground">Projects Posted</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <p className="text-4xl font-bold text-primary">20+</p>
            <p className="text-lg text-muted-foreground">Developer Applications</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <p className="text-4xl font-bold text-primary">5</p>
            <p className="text-lg text-muted-foreground">Completed MVPs</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community of entrepreneurs and developers to start building your MVP today.
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

