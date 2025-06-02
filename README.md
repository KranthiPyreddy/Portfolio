# IAM Portfolio Website

A modern, responsive portfolio website showcasing Identity and Access Management (IAM) expertise, projects, and certifications. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

### 🎯 Core Sections
- **Hero Section** - Professional introduction with call-to-action
- **About Me** - Detailed background and experience across finance, manufacturing, and healthcare
- **Projects** - Featured IAM implementations with technical details
- **Architecture Demos** - Industry-specific IAM solutions
- **Skills & Certifications** - Technical expertise and professional certifications
- **Contact Form** - Functional contact form with validation

### 🔧 Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Server Actions** - Form handling with Next.js Server Actions
- **Type Safety** - Full TypeScript implementation
- **Modern UI** - shadcn/ui components with consistent design system
- **Performance Optimized** - Next.js 15 with App Router
- **Accessibility** - WCAG compliant with semantic HTML

### 🏗️ Architecture Demonstrations
- **Financial Services IAM** - PCI DSS, SOX, GDPR compliance
- **Manufacturing Security** - ISO 27001, NIST, IEC 62443 frameworks
- **Healthcare Compliance** - HIPAA, HITECH, FDA 21 CFR implementations

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### Backend
- **Server Actions**: Next.js Server Actions
- **Form Handling**: Native FormData API
- **Validation**: Server-side validation

### Development
- **Package Manager**: npm/yarn/pnpm
- **Linting**: ESLint
- **Formatting**: Prettier (optional)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/KranthiPyreddy/iam-portfolio.git
   cd iam-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific configurations:

\`\`\`env
# Add any environment variables here
# Example: EMAIL_SERVICE_API_KEY=your_api_key
\`\`\`

## 📁 Project Structure

\`\`\`
iam-portfolio/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server actions for form handling
│   ├── components/
│   │   ├── video-player.tsx    # Custom video player component
│   │   └── architecture-diagram.tsx # Architecture visualization
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main portfolio page
├── components/
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── README.md                   # Project documentation
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
\`\`\`

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in `app/page.tsx`
2. **Projects**: Update the `projects` array with your own projects
3. **Skills**: Modify the `skills` array to reflect your expertise
4. **Certifications**: Update the `certifications` array

### Styling

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Components**: Customize shadcn/ui components in `components/ui/`
- **Layout**: Adjust spacing and layout in the main page component

### Adding New Sections

1. Create new section components in `app/components/`
2. Import and add to the main page
3. Update navigation links if needed

## 📧 Contact Form

The contact form uses Next.js Server Actions for form handling:

- **Validation**: Server-side validation for all fields
- **Feedback**: Success/error messages for user feedback
- **Security**: Built-in CSRF protection

To enable email sending:
1. Choose an email service (Resend, SendGrid, etc.)
2. Add API keys to environment variables
3. Update the server action in `app/actions/contact.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

2. **Custom Domain** (Optional)
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- **Netlify**: Use `@netlify/plugin-nextjs`
- **AWS**: Use AWS Amplify or custom EC2 setup
- **Docker**: Create Dockerfile for containerized deployment

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Semantic HTML and meta tags for search optimization

## 🔒 Security Features

- **Server-side Validation**: All form inputs validated on server
- **CSRF Protection**: Built-in Next.js security features
- **Type Safety**: TypeScript prevents runtime errors
- **Sanitization**: Input sanitization for XSS prevention

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kranthi Pyreddy**
- **Email**: kranthi.pyreddy@student.saultcollege.ca
- **LinkedIn**: [kranthipyreddy330](https://www.linkedin.com/in/kranthipyreddy330/)
- **GitHub**: [KranthiPyreddy](https://github.com/KranthiPyreddy)

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vercel** for hosting and deployment platform
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework

## 📈 Roadmap

- [ ] Add blog section for IAM articles
- [ ] Implement dark/light mode toggle
- [ ] Add project case studies with detailed implementations
- [ ] Include downloadable resume
- [ ] Add testimonials section
- [ ] Implement analytics tracking
- [ ] Add multi-language support

---

⭐ **Star this repository if you found it helpful!**
