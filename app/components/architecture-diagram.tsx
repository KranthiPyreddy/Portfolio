"use client"

import { Shield, Database, Cloud, Users, Lock, Key, Server, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArchitectureDiagramProps {
  title: string
  industry: "finance" | "manufacturing" | "healthcare"
  className?: string
}

export function ArchitectureDiagram({ title, industry, className }: ArchitectureDiagramProps) {
  const getIndustryConfig = () => {
    switch (industry) {
      case "finance":
        return {
          primaryColor: "bg-blue-500",
          secondaryColor: "bg-blue-100",
          accentColor: "border-blue-300",
          compliance: ["PCI DSS", "SOX", "GDPR"],
          components: [
            { name: "Trading Systems", icon: Database, position: "top-left" as const },
            { name: "Core Banking", icon: Server, position: "top-right" as const },
            { name: "Mobile Banking", icon: Smartphone, position: "bottom-left" as const },
            { name: "Risk Management", icon: Shield, position: "bottom-right" as const },
          ],
        }
      case "manufacturing":
        return {
          primaryColor: "bg-orange-500",
          secondaryColor: "bg-orange-100",
          accentColor: "border-orange-300",
          compliance: ["ISO 27001", "NIST", "IEC 62443"],
          components: [
            { name: "SCADA Systems", icon: Server, position: "top-left" as const },
            { name: "MES Platform", icon: Database, position: "top-right" as const },
            { name: "IoT Devices", icon: Smartphone, position: "bottom-left" as const },
            { name: "ERP Systems", icon: Cloud, position: "bottom-right" as const },
          ],
        }
      case "healthcare":
        return {
          primaryColor: "bg-green-500",
          secondaryColor: "bg-green-100",
          accentColor: "border-green-300",
          compliance: ["HIPAA", "HITECH", "FDA 21 CFR"],
          components: [
            { name: "EMR Systems", icon: Database, position: "top-left" as const },
            { name: "Patient Portal", icon: Users, position: "top-right" as const },
            { name: "Medical Devices", icon: Smartphone, position: "bottom-left" as const },
            { name: "Lab Systems", icon: Server, position: "bottom-right" as const },
          ],
        }
      default:
        return {
          primaryColor: "bg-gray-500",
          secondaryColor: "bg-gray-100",
          accentColor: "border-gray-300",
          compliance: [],
          components: [],
        }
    }
  }

  const config = getIndustryConfig()

  return (
    <div className={`bg-white rounded-lg border shadow-lg p-6 ${className || ""}`}>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>

      {/* Compliance Badges */}
      <div className="flex justify-center gap-2 mb-6">
        {config.compliance.map((comp, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {comp}
          </Badge>
        ))}
      </div>

      {/* Architecture Diagram */}
      <div className="relative h-80 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-4">
        {/* Central IAM Hub */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 ${config.primaryColor} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
        >
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-1" />
            <div className="text-xs font-semibold">IAM Core</div>
          </div>
        </div>

        {/* System Components */}
        {config.components.map((component, idx) => {
          const positions = {
            "top-left": "top-4 left-4",
            "top-right": "top-4 right-4",
            "bottom-left": "bottom-4 left-4",
            "bottom-right": "bottom-4 right-4",
          }

          return (
            <div key={idx} className={`absolute ${positions[component.position]}`}>
              <div
                className={`w-20 h-20 ${config.secondaryColor} rounded-lg border-2 ${config.accentColor} flex flex-col items-center justify-center p-2 shadow-md`}
              >
                <component.icon className="w-6 h-6 mb-1" />
                <div className="text-xs text-center font-medium leading-tight">{component.name}</div>
              </div>
            </div>
          )
        })}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Lines from center to each corner */}
          <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Security Layers */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border shadow-sm">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-medium">Zero Trust Layer</span>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border shadow-sm">
            <Key className="w-4 h-4" />
            <span className="text-xs font-medium">Policy Engine</span>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm">Key Features:</h4>
        {industry === "finance" && (
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Risk-based authentication with fraud detection</li>
            <li>• Real-time transaction monitoring</li>
            <li>• Regulatory reporting automation</li>
            <li>• Multi-factor authentication for high-value transactions</li>
          </ul>
        )}
        {industry === "manufacturing" && (
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• OT/IT network segmentation</li>
            <li>• Industrial device identity management</li>
            <li>• Just-in-time access for maintenance</li>
            <li>• Supply chain partner integration</li>
          </ul>
        )}
        {industry === "healthcare" && (
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Patient data access controls</li>
            <li>• Medical device authentication</li>
            <li>• Break-glass emergency access</li>
            <li>• Audit trails for compliance</li>
          </ul>
        )}
      </div>
    </div>
  )
}
