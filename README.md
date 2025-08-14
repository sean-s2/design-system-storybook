# Design System Storybook

A live component library built with Storybook for team collaboration and design system documentation. This repository contains the complete design system extracted from your Figma components with exact design tokens, interactive stories, and automated deployment to GitHub Pages.

*Last tested: $(date) - Testing GitHub Actions workflow*
*Permissions fixed - ready for deployment! 🚀*

## 🚀 **Live Demo**

Visit the live Storybook at: [https://sean-s2.github.io/design-system-storybook](https://sean-s2.github.io/design-system-storybook)

## 🎨 **What's Included**

### **Components**
- **Button Component**: Multiple variants (Primary, Secondary, Tertiary, Ghost, Link)
- **Loading States**: Animated loading spinners with customizable text
- **Responsive Design**: Multiple sizes (Small, Medium, Large, Extra Large)
- **Interactive Stories**: Live examples with controls and documentation

### **Design System**
- **Exact Figma Match**: Colors, spacing, and typography from your Figma design
- **Design Tokens**: Centralized system for consistent styling
- **Component Variants**: All button states and interactions
- **Accessibility**: Proper focus states and ARIA support

## 🛠 **Getting Started**

### **Prerequisites**
- [Bun](https://bun.sh/) (recommended) or Node.js
- Git

### **Installation**
```bash
git clone https://github.com/sean-s2/design-system-storybook.git
cd design-system-storybook
bun install
```

### **Development**
```bash
# Start Storybook locally
bun run storybook

# Build for production
bun run build-storybook
```

### **Deployment**
```bash
# Deploy to GitHub Pages
bun run deploy-storybook

# Build and deploy
bun run deploy-storybook:build
```

## 🎯 **Component Details**

### **Button Component**
The Button component is built from your Figma design with exact specifications:

- **Variants**: Primary, Secondary, Tertiary, Ghost, Link
- **Sizes**: Small (137×36), Medium (141×40), Large (159×44), XL (163×48)
- **States**: Default, Hover, Loading, Disabled
- **Features**: Full-width option, custom loading text, icon support

### **Loading Spinner**
Custom animated loading spinner component:

- **Sizes**: 16px, 20px, 24px, 32px
- **Colors**: Variant-specific colors (light blue for primary, gray for secondary)
- **Animation**: Smooth rotation and stroke effects

## 🎨 **Design Tokens**

All components use exact design tokens extracted from your Figma Button component:

### **Colors**
- **Primary**: `#1570ef` (default), `#175cd3` (hover/loading)
- **Secondary**: `#ffffff` (default), `#f8fafc` (hover)
- **Loading Spinner**: `#d1e9ff` (light blue)
- **Text**: `#ffffff` (white), `#4b5565` (secondary)

### **Typography**
- **Font Family**: DM Sans
- **Font Weight**: 600 (SemiBold)
- **Font Sizes**: 14px (sm/md), 16px (lg/xl)
- **Line Heights**: 20px (sm/md), 24px (lg/xl)

### **Spacing**
- **Small**: 8px × 16px padding
- **Medium**: 10px × 20px padding
- **Large**: 12px × 24px padding
- **Extra Large**: 16px × 32px padding

## 📱 **Team Workflow**

### **For Developers**
1. **Local Development**: Work on components locally with `bun run storybook`
2. **Test Changes**: Verify everything works in local Storybook
3. **Deploy**: Push to main branch (auto-deploy) or run manual deploy
4. **Share**: Team gets live URL automatically

### **For Designers & Stakeholders**
1. **View Live**: Access GitHub Pages URL anytime
2. **No Setup**: No need to install or build locally
3. **Always Updated**: See latest changes when deployed
4. **Feedback**: Can view and comment on design system components

## 🔄 **Deployment**

### **Automatic (GitHub Actions)**
- Push to main branch triggers automatic deployment
- Builds Storybook in CI environment
- Deploys to `gh-pages` branch
- Updates live site automatically

### **Manual Deployment**
```bash
# Build and deploy
bun run deploy-storybook:build

# Deploy existing build
bun run deploy-storybook
```

## 🏗 **Project Structure**

```
design-system-storybook/
├── .storybook/           # Storybook configuration
│   ├── main.ts          # Main Storybook config
│   └── preview.ts       # Preview configuration
├── .github/workflows/    # GitHub Actions deployment
│   └── deploy-storybook.yml
├── src/
│   ├── components/       # React components
│   │   ├── Button.tsx   # Main button component
│   │   ├── Button.stories.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── LoadingDemo.tsx
│   │   └── index.ts     # Component exports
│   └── styles/          # Design tokens and CSS
│       ├── design-tokens.ts
│       └── globals.css
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## 🎯 **Storybook Stories**

The repository includes comprehensive Storybook stories:

- **Individual Variants**: Each button variant with different sizes
- **Loading States**: All variants in loading state
- **Size Showcases**: All sizes of primary buttons
- **Interactive Demos**: Buttons with click handlers
- **Layout Examples**: Full-width and grouped button layouts

## 🔧 **Technical Details**

### **Built With**
- **Storybook**: Component development and documentation
- **React**: UI component library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

### **Development Tools**
- **Bun**: Fast JavaScript runtime and package manager
- **GitHub Actions**: Automated deployment pipeline
- **GitHub Pages**: Live hosting

## 🚀 **Quick Start Guide**

1. **Clone the repository**
   ```bash
   git clone https://github.com/sean-s2/design-system-storybook.git
   cd design-system-storybook
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development**
   ```bash
   bun run storybook
   ```

4. **View locally**
   Open http://localhost:6006 in your browser

5. **Make changes**
   Edit components in `src/components/`

6. **Deploy changes**
   ```bash
   git add .
   git commit -m "Update components"
   git push origin main
   ```

## 🎯 **Next Steps**

1. **Enable GitHub Pages** in repository settings
2. **Customize Components** for your specific needs
3. **Add More Components** to expand the design system
4. **Share with Team** the live Storybook URL
5. **Integrate Components** into your main applications

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Make your changes
4. Test in local Storybook
5. Commit your changes (`git commit -m 'Add amazing component'`)
6. Push to the branch (`git push origin feature/amazing-component`)
7. Open a Pull Request

## 📄 **License**

This project is private and proprietary. All rights reserved.

## 🙏 **Acknowledgments**

- **Figma Design**: Components extracted from your Figma design system
- **Storybook**: Amazing tool for component development
- **React Team**: Excellent component library
- **Design System Community**: Best practices and inspiration

---

**Built with ❤️ using Storybook, React, TypeScript, and exact Figma design tokens**

*Your design system, live and accessible to your team 24/7*
