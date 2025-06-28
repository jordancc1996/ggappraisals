# GG Appraisals Website - TypeScript Edition

A sophisticated, professional website for GG Appraisals built with **Next.js 14** and **TypeScript**, featuring comprehensive real estate appraisal, lending, and sales support services.

## 🚀 **Quick Start**

### **GitHub Codespaces (Recommended)**
1. Open this repository in GitHub Codespaces
2. Wait for automatic setup (dependencies install automatically)
3. Run: `npm run codespaces`
4. Click the forwarded port link to view your site

### **Local Development**
```bash
npm install
npm run dev
```

### **Vercel Deployment**
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically (zero configuration needed)

## 🛠 **Tech Stack**

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: Formcarry integration
- **Deployment**: Vercel-optimized

## 📁 **Project Structure**

```
src/
├── components/          # Reusable TypeScript components
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ContactForm.tsx
│   └── ...
├── pages/              # Next.js pages (TypeScript)
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── services.tsx    # Services page
│   └── contact.tsx     # Contact page
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # Global styles
│   └── globals.css
└── hooks/              # Custom React hooks
    └── useScrollReveal.ts
```

## ⚙️ **Configuration Files**

### **GitHub Codespaces**
- `.devcontainer/devcontainer.json` - Auto-setup for Codespaces
- `.vscode/settings.json` - VS Code configuration
- `.vscode/extensions.json` - Recommended extensions

### **TypeScript**
- `tsconfig.json` - TypeScript configuration
- `next-env.d.ts` - Next.js type definitions

### **Deployment**
- `vercel.json` - Vercel deployment settings
- `next.config.js` - Next.js configuration

## 🎯 **Features**

### **Business Features**
- ✅ Professional real estate appraisal services
- ✅ Investor lending solutions (fix-and-flip, rental properties)
- ✅ Sales support services (PA licensed)
- ✅ Multi-location support (Philadelphia PA, Phoenix AZ)
- ✅ Comprehensive contact forms with Formcarry integration

### **Technical Features**
- ✅ **Full TypeScript** implementation with strict typing
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags and structured data
- ✅ Performance optimized (lazy loading, code splitting)
- ✅ Accessibility compliant (WCAG guidelines)
- ✅ Modern animations and interactions

## 📞 **Contact Information**

- **Phone**: (267) 632-3162
- **Email**: info@ggappraisals.com
- **Philadelphia**: 888 N 26th Street, Philadelphia PA 19130
- **Phoenix**: 1302 W Monroe Street, Phoenix AZ 85007

## 🔧 **Development Commands**

```bash
# Development
npm run dev              # Local development
npm run codespaces       # Codespaces development (external access)

# Production
npm run build           # Build for production
npm run start           # Start production server

# Type Checking
npm run type-check      # TypeScript type checking
npm run lint            # ESLint checking
```

## 🌐 **Deployment Options**

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Automatic deployments on push to main
3. Zero configuration needed

### **Other Platforms**
- Netlify: Works with `npm run build`
- AWS Amplify: Compatible
- Traditional hosting: Use `npm run build` and serve `out/` folder

## 📝 **Environment Variables**

Create `.env.local` for local development:
```env
NEXT_PUBLIC_FORMCARRY_ENDPOINT=https://formcarry.com/s/mjPAInh7tM7
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🎨 **Customization**

### **Colors (Tailwind CSS)**
- `slate-blue`: Primary brand color
- `antique-gold`: Accent color
- `cream`: Background color

### **Typography**
- **Display**: Playfair Display (headings)
- **Body**: Inter (body text)

### **Components**
All components are fully typed with TypeScript interfaces defined in `src/types/index.ts`

## 📄 **License**

Proprietary - GG Appraisals

---

**Ready to deploy!** This TypeScript-powered website provides a professional, scalable foundation for GG Appraisals' online presence.

