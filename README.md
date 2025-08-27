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

---

**Built with ❤️ using Storybook, React, TypeScript, and exact Figma design tokens**

*Your design system, live and accessible to your team 24/7*
