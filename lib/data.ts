// lib/data.ts
// Mock data for the application

import type { Developer, Project } from "./types"

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Personal Finance Assistant",
    description:
      "Looking for React Native developers to build an AI-powered personal finance app that helps users track expenses, set budgets, and receive personalized financial advice through natural language processing.",
    longDescription:
      "We're seeking talented React Native developers to create a cutting-edge personal finance application that leverages AI to provide users with personalized financial insights and recommendations. The app will allow users to track their expenses, set and monitor budgets, and receive tailored financial advice through a natural language interface. We're looking for developers who are passionate about fintech and have experience with mobile development and integrating AI/ML services.",
    budget: 5000,
    postedDate: "2 days ago",
    categories: ["Mobile", "AI"],
    skills: ["React Native", "JavaScript", "AI Integration", "API Development"],
    featured: true,
    applications: 8,
    image: "/images/finance-app-blue.png",
    entrepreneur: {
      id: "e1",
      name: "Sarah Johnson",
      bio: "Serial entrepreneur with a passion for fintech innovation. Previously founded two successful startups in the financial sector.",
      avatar: "/images/entrepreneur-sarah.png",
    },
  },
  {
    id: "2",
    title: "E-commerce Platform for Artisanal Products",
    description:
      "Need a developer to build a responsive e-commerce platform for artisanal products with payment processing, inventory management, and a custom CMS.",
    budget: 4000,
    postedDate: "5 days ago",
    categories: ["Web", "E-commerce"],
    skills: ["React", "Node.js", "MongoDB", "Stripe API"],
    applications: 12,
    image: "/images/finance-app-light.png",
  },
  {
    id: "3",
    title: "Health and Fitness Tracking App",
    description:
      "Looking for a Flutter developer to create a cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    budget: 3500,
    postedDate: "1 week ago",
    categories: ["Mobile", "Health"],
    skills: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
    applications: 6,
    image: "/images/health-tracker-app.png",
  },
  {
    id: "4",
    title: "Real Estate Property Management System",
    description:
      "Need a full-stack developer to build a property management system for real estate agents with listing management, client tracking, and analytics.",
    budget: 6000,
    postedDate: "3 days ago",
    categories: ["Web", "SaaS"],
    skills: ["React", "Next.js", "PostgreSQL", "TypeScript"],
    featured: true,
    applications: 9,
    image: "/images/finance-dashboard.png",
  },
  {
    id: "5",
    title: "Blockchain-based Supply Chain Tracking",
    description:
      "Seeking a blockchain developer to create a supply chain tracking system for agricultural products using Ethereum smart contracts.",
    budget: 7500,
    postedDate: "1 day ago",
    categories: ["Blockchain", "Web3"],
    skills: ["Solidity", "Ethereum", "Web3.js", "React"],
    applications: 4,
    image: "/images/finance-app-blue.png",
  },
  {
    id: "6",
    title: "Language Learning Platform with AI",
    description:
      "Looking for developers to build an interactive language learning platform with speech recognition and AI-powered personalized lessons.",
    budget: 5500,
    postedDate: "4 days ago",
    categories: ["Web", "Education", "AI"],
    skills: ["Python", "React", "NLP", "TensorFlow"],
    applications: 7,
    image: "/images/health-tracker-app.png",
  },
]

export const developers: Developer[] = [
  {
    id: "1",
    name: "Alex Chen",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer with 5+ years of experience building web and mobile applications. Specialized in React, Node.js, and cloud architecture.",
    avatar: "/images/developer-alex.png",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    rating: 4.9,
    completedProjects: 12,
    credPoints: 580,
  },
  {
    id: "2",
    name: "Maya Patel",
    title: "Mobile App Developer",
    bio: "Experienced mobile developer focused on creating beautiful, functional apps for iOS and Android using React Native and Flutter.",
    avatar: "/images/entrepreneur-sarah.png",
    skills: ["React Native", "Flutter", "JavaScript", "Firebase", "UI/UX"],
    rating: 4.7,
    completedProjects: 8,
    credPoints: 420,
  },
  {
    id: "3",
    name: "David Kim",
    title: "Backend Developer",
    bio: "Backend specialist with strong experience in building scalable APIs, database design, and cloud infrastructure.",
    avatar: "/images/developer-david.png",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    rating: 4.8,
    completedProjects: 15,
    credPoints: 650,
  },
  {
    id: "4",
    name: "Sophia Rodriguez",
    title: "Frontend Developer",
    bio: "Frontend developer passionate about creating responsive, accessible, and beautiful user interfaces with modern web technologies.",
    avatar: "/images/entrepreneur-sarah.png",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    rating: 4.6,
    completedProjects: 9,
    credPoints: 480,
  },
  {
    id: "5",
    name: "James Wilson",
    title: "Blockchain Developer",
    bio: "Blockchain enthusiast and developer specializing in Ethereum smart contracts and decentralized applications.",
    avatar: "/images/developer-james.png",
    skills: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    rating: 4.5,
    completedProjects: 6,
    credPoints: 350,
  },
  {
    id: "6",
    name: "Emma Thompson",
    title: "AI/ML Engineer",
    bio: "Machine learning engineer with expertise in natural language processing, computer vision, and deploying ML models to production.",
    avatar: "/images/entrepreneur-sarah.png",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    rating: 4.9,
    completedProjects: 11,
    credPoints: 520,
  },
]

