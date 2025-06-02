"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Key,
  Lock,
  Cloud,
  Settings,
  CheckCircle,
  Database,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { submitContactForm } from "./actions/contact"

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
    },
    {
      title: "Zero Trust Access Control",
      description:
        "Built a comprehensive zero trust security model with dynamic policy enforcement and continuous authentication.",
      technologies: ["Zero Trust", "RBAC", "ABAC", "Python", "Kubernetes"],
      highlights: ["Real-time risk assessment", "Adaptive authentication", "Policy automation"],
      link: "#architecture",
      github: "#",
    },
    {
      title: "Identity Governance Platform",
      description:
        "Developed an automated identity lifecycle management system with compliance reporting and access reviews.",
      technologies: ["IGA", "SCIM", "REST APIs", "React", "PostgreSQL"],
      highlights: ["Automated provisioning", "SOX compliance", "Access certification"],
      link: "#architecture",
      github: "#",
    },
    {
      title: "Privileged Access Management",
      description:
        "Created a PAM solution for managing and monitoring privileged accounts with session recording and just-in-time access.",
      technologies: ["PAM", "JIT Access", "Session Recording", "Vault", "Docker"],
      highlights: ["Just-in-time provisioning", "Session monitoring", "Credential rotation"],
      link: "#architecture",
      github: "#",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl">Kranthi Pyreddy</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              IAM Security Expert
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Identity & Access Management Specialist
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Designing secure, scalable identity solutions that protect organizations while enabling seamless user
            experiences. Specialized in enterprise IAM, zero trust architecture, and compliance frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                With over 8 years of experience in cybersecurity and identity management, I specialize in building
                robust IAM solutions that balance security with usability. My expertise spans from enterprise SSO
                implementations to cutting-edge zero trust architectures across diverse industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I have successfully led IAM transformations for clients in <strong>finance</strong>,{" "}
                <strong>manufacturing</strong>, and <strong>healthcare</strong> sectors across enterprise and mid-market
                organizations. My implementations have reduced security incidents by 60% while improving user
                satisfaction scores. In the financial sector, I have ensured PCI DSS compliance while streamlining
                access controls. For manufacturing clients, I have secured industrial IoT environments with zero trust
                principles. In healthcare, I have implemented HIPAA-compliant identity solutions protecting sensitive
                patient data.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My approach combines deep technical knowledge with strategic business understanding, ensuring that
                security solutions align with operational requirements and regulatory compliance across different
                industry verticals.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/KranthiPyreddy" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/kranthipyreddy330/" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured IAM Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#architecture" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Architecture
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Demonstrations</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Explore the architectural designs and implementation strategies for IAM solutions across different industry
            verticals.
          </p>

          {/* Industry Architecture Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {/* Financial Services */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Financial Services IAM
                </CardTitle>
                <div className="flex gap-2">
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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Database className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm text-blue-800">Financial Systems Architecture</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Risk-based authentication with fraud detection</li>
                    <li>• Real-time transaction monitoring</li>
                    <li>• Regulatory reporting automation</li>
                    <li>• Multi-factor authentication for high-value transactions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                  Manufacturing Security
                </CardTitle>
                <div className="flex gap-2">
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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-orange-50 rounded-lg border-2 border-dashed border-orange-200 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-orange-800">Industrial IoT Architecture</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• OT/IT network segmentation</li>
                    <li>• Industrial device identity management</li>
                    <li>• Just-in-time access for maintenance</li>
                    <li>• Supply chain partner integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  Healthcare Compliance
                </CardTitle>
                <div className="flex gap-2">
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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 bg-green-50 rounded-lg border-2 border-dashed border-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    <p className="text-sm text-green-800">Healthcare Data Protection</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Patient data access controls</li>
                    <li>• Medical device authentication</li>
                    <li>• Break-glass emergency access</li>
                    <li>• Audit trails for compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Implementation Highlights */}
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Cross-Industry Implementation Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Security First</h4>
                <p className="text-sm text-muted-foreground">
                  Zero trust architecture with continuous authentication and risk-based access controls across all
                  implementations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Compliance Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Built-in compliance frameworks ensuring adherence to industry regulations like HIPAA, PCI DSS, and ISO
                  27001.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Scalable Design</h4>
                <p className="text-sm text-muted-foreground">
                  Microservices architecture supporting thousands of users with 99.9% uptime and horizontal scaling
                  capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Technical Architecture
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Microservices-based IAM platform</li>
                <li>• OAuth 2.0 / OpenID Connect protocols</li>
                <li>• SAML 2.0 for enterprise SSO</li>
                <li>• SCIM for automated provisioning</li>
                <li>• REST APIs for system integration</li>
                <li>• Real-time policy enforcement</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                Performance Metrics
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 99.9% system uptime achieved</li>
                <li>• Less than 200ms authentication response time</li>
                <li>• 10,000+ concurrent user support</li>
                <li>• 60% reduction in security incidents</li>
                <li>• 50% decrease in support tickets</li>
                <li>• 24/7 monitoring and alerting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {index === 0 && <Key className="w-5 h-5" />}
                    {index === 1 && <Cloud className="w-5 h-5" />}
                    {index === 2 && <Shield className="w-5 h-5" />}
                    {index === 3 && <Settings className="w-5 h-5" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <Badge key={idx} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Interested in discussing IAM strategy, security architecture, or potential collaboration? I would love to
            hear from you.
          </p>

          {/* Contact Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
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
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                      required
                      disabled={formState.isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
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
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your project or how I can help..."
                    required
                    disabled={formState.isSubmitting}
                  ></textarea>
                </div>

                {formState.message && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      formState.success
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {formState.message}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                  <Mail className="w-4 h-4 mr-2" />
                  {formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "mailto:kranthipyre@gmail.com")}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/kranthipyreddy330/" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Kranthi Pyreddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
