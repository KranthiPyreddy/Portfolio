"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Key,
  Cloud,
  Settings,
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { submitContactForm } from "./actions/contact"
import { ArchitectureDiagram } from "./components/architecture-diagram"

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise SSO Implementation",
      description:
        "Designed and implemented SAML 2.0 and OAuth 2.0 SSO solution for 10,000+ users across multiple applications.",
      technologies: ["SAML 2.0", "OAuth 2.0", "Azure AD", "Okta", "Node.js"],
      highlights: ["99.9% uptime", "50% reduction in support tickets", "Multi-tenant architecture"],
      link: "#architecture",
      github: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Zero Trust Access Control",
      description:
        "Built a comprehensive zero trust security model with dynamic policy enforcement and continuous authentication.",
      technologies: ["Zero Trust", "RBAC", "ABAC", "Python", "Kubernetes"],
      highlights: ["Real-time risk assessment", "Adaptive authentication", "Policy automation"],
      link: "#architecture",
      github: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Identity Governance Platform",
      description:
        "Developed an automated identity lifecycle management system with compliance reporting and access reviews.",
      technologies: ["IGA", "SCIM", "REST APIs", "React", "PostgreSQL"],
      highlights: ["Automated provisioning", "SOX compliance", "Access certification"],
      link: "#architecture",
      github: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Privileged Access Management",
      description:
        "Created a PAM solution for managing and monitoring privileged accounts with session recording and just-in-time access.",
      technologies: ["PAM", "JIT Access", "Session Recording", "Vault", "Docker"],
      highlights: ["Just-in-time provisioning", "Session monitoring", "Credential rotation"],
      link: "#architecture",
      github: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const skills = [
    { category: "Identity Protocols", items: ["SAML 2.0", "OAuth 2.0", "OpenID Connect", "SCIM", "LDAP"] },
    {
      category: "IAM Platforms",
      items: ["Entra ID", "Okta", "Auth0", "ForgeRock", "Ping Identity", "OAM", "CyberArk", "AWS IAM"],
    },
    { category: "Security Frameworks", items: ["Zero Trust", "RBAC", "ABAC", "NIST", "ISO 27001"] },
    { category: "Technologies", items: ["PowerShell", "Python", "JavaScript", "MS SQL Server", "React", "Kubernetes"] },
  ]

  const certifications = [
    "Oracle Cloud Infrastructure Certified Associate (2019-2020)",
    "Oracle Cloud Infrastructure Certified Architect Associate (2019)",
    "Oracle Cloud Infrastructure Cloud Operations Certified Associate (2019)",
    "AWS Certified Security Specialty",
    "Microsoft Identity and Access Administrator (SC-300)",
    "Certified Network Design and Architect",
    "The Fundamentals of Digital Marketing",
    "Prompt Engineering with Llama 2",
    "Verified International Academic Qualifications",
  ]

  const [formState, setFormState] = useState<{
    success?: boolean
    message?: string
    isSubmitting?: boolean
  }>({})

  const handleSubmit = async (formData: FormData) => {
    setFormState({ isSubmitting: true })
    const result = await submitContactForm(formData)
    setFormState(result)
  }

  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [darkMode, setDarkMode] = useState(false)

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    architecture: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (
          ref.current &&
          scrollPosition >= ref.current.offsetTop &&
          scrollPosition < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div
      className={`min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${darkMode ? "dark" : ""}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">KP-IAMWorks</div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Projects", "Architecture", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${activeSection === item.toLowerCase() ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                {item}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                IAM Security Expert
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Identity & Access <span className="block">Management</span> <span className="block">Specialist</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
                Designing secure, scalable identity solutions that protect organizations while enabling seamless user
                experiences.
              </p>
              <div className="flex items-center gap-6">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Link href="#projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl aspect-square flex items-center justify-center overflow-hidden">
                  <Shield className="w-32 h-32 text-gray-300 dark:text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-12 tracking-tight">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                With over 8 years of experience in cybersecurity and identity management, I specialize in building
                robust IAM solutions that balance security with usability. My expertise spans from enterprise SSO
                implementations to cutting-edge zero trust architectures across diverse industries.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I have successfully led IAM transformations for clients in <strong>finance</strong>,{" "}
                <strong>manufacturing</strong>, and <strong>healthcare</strong> sectors across enterprise and mid-market
                organizations.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="https://github.com/KranthiPyreddy" className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="https://www.linkedin.com/in/kranthipyreddy330/" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 transition-all hover:shadow-md"
                  >
                    <div className="bg-black dark:bg-white rounded-full p-2 text-white dark:text-black">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} id="projects" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Featured IAM Projects</h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="rounded-full px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                      asChild
                    >
                      <Link href="#architecture" className="flex items-center gap-2">
                        View Architecture
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full" asChild>
                      <Link href="https://github.com/KranthiPyreddy" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section ref={sectionRefs.architecture} id="architecture" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-center">Project Demonstrations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            Explore the architectural designs and implementation strategies for IAM solutions across different industry
            verticals.
          </p>

          {/* Architecture Diagrams */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Financial Services */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Financial Services IAM</h3>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline" className="text-xs">
                    PCI DSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SOX
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GDPR
                  </Badge>
                </div>
                <div className="aspect-square relative bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6">
                  {/* Architecture Diagram Component */}
                  <div className="absolute inset-0">
                    <ArchitectureDiagram title="Financial IAM" industry="finance" className="h-full" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Risk-based authentication with fraud detection</li>
                    <li>• Real-time transaction monitoring</li>
                    <li>• Regulatory reporting automation</li>
                    <li>• Multi-factor authentication for high-value transactions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Manufacturing Security</h3>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline" className="text-xs">
                    ISO 27001
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    NIST
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    IEC 62443
                  </Badge>
                </div>
                <div className="aspect-square relative bg-orange-50 dark:bg-orange-900/20 rounded-xl mb-6">
                  {/* Architecture Diagram Component */}
                  <div className="absolute inset-0">
                    <ArchitectureDiagram title="Manufacturing IAM" industry="manufacturing" className="h-full" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• OT/IT network segmentation</li>
                    <li>• Industrial device identity management</li>
                    <li>• Just-in-time access for maintenance</li>
                    <li>• Supply chain partner integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Healthcare Compliance</h3>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline" className="text-xs">
                    HIPAA
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    HITECH
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FDA 21 CFR
                  </Badge>
                </div>
                <div className="aspect-square relative bg-green-50 dark:bg-green-900/20 rounded-xl mb-6">
                  {/* Architecture Diagram Component */}
                  <div className="absolute inset-0">
                    <ArchitectureDiagram title="Healthcare IAM" industry="healthcare" className="h-full" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Patient data access controls</li>
                    <li>• Medical device authentication</li>
                    <li>• Break-glass emergency access</li>
                    <li>• Audit trails for compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} id="skills" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Technical Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {index === 0 && <Key className="w-6 h-6" />}
                  {index === 1 && <Cloud className="w-6 h-6" />}
                  {index === 2 && <Shield className="w-6 h-6" />}
                  {index === 3 && <Settings className="w-6 h-6" />}
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1 text-sm rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Work Together</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Interested in discussing IAM strategy, security architecture, or potential collaboration? I would love
                to hear from you.
              </p>

              <div className="space-y-8">
                <Link
                  href="mailto:kranthipyre@gmail.com"
                  className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <p className="text-lg hover:text-blue-600 dark:hover:text-blue-400">kranthipyre@gmail.com</p>
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/kranthipyreddy330/"
                  className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <p className="text-lg hover:text-blue-600 dark:hover:text-blue-400">kranthipyreddy330</p>
                  </div>
                </Link>

                <Link
                  href="https://github.com/KranthiPyreddy"
                  className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                    <p className="text-lg hover:text-blue-600 dark:hover:text-blue-400">KranthiPyreddy</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <Card className="rounded-2xl overflow-hidden border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                  <form action={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          placeholder="Your name"
                          required
                          disabled={formState.isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          placeholder="your.email@example.com"
                          required
                          disabled={formState.isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          placeholder="What would you like to discuss?"
                          required
                          disabled={formState.isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                          placeholder="Tell me about your project or how I can help..."
                          required
                          disabled={formState.isSubmitting}
                        ></textarea>
                      </div>
                    </div>

                    {formState.message && (
                      <div
                        className={`p-4 rounded-xl text-sm ${
                          formState.success
                            ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                            : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                        }`}
                      >
                        {formState.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full py-6 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                      disabled={formState.isSubmitting}
                    >
                      {formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="font-bold text-2xl tracking-tight mb-2">KP-IAMWorks</div>
              <p className="text-gray-500 dark:text-gray-400">&copy; 2025 Kranthi Pyreddy. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/KranthiPyreddy"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kranthipyreddy330/"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kranthipyre@gmail.com"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
