# Figma Color Variables Mapping

This document maps Figma design variables to our design tokens for proper documentation and maintenance.

## Primary Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Primary/Blue/500` | `colors.primary.default` | `#1570ef` | Default primary button background |
| `Primary/Blue/600` | `colors.primary.hover` | `#175cd3` | Primary button hover state |
| `Primary/Blue/600` | `colors.primary.loading` | `#175cd3` | Primary button loading state |
| `Neutral/White` | `colors.primary.text` | `#ffffff` | Primary button text color |

## Secondary Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Neutral/White` | `colors.secondary.default` | `#ffffff` | Secondary button background |
| `Neutral/Gray/50` | `colors.secondary.hover` | `#f8fafc` | Secondary button hover state |
| `Neutral/Gray/600` | `colors.secondary.text` | `#4b5565` | Secondary button text color |
| `Neutral/Gray/200` | `colors.secondary.border` | `#dde6f1` | Secondary button border |

## Tertiary Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Transparent` | `colors.tertiary.default` | `transparent` | Tertiary button background |
| `Neutral/Gray/50` | `colors.tertiary.hover` | `#f8fafc` | Tertiary button hover state |
| `Primary/Blue/500` | `colors.tertiary.text` | `#1570ef` | Tertiary button text color |
| `Transparent` | `colors.tertiary.border` | `transparent` | Tertiary button border |

## Ghost Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Transparent` | `colors.ghost.default` | `transparent` | Ghost button background |
| `Neutral/Gray/50` | `colors.ghost.hover` | `#f8fafc` | Ghost button hover state |
| `Neutral/Gray/600` | `colors.ghost.text` | `#4b5565` | Ghost button text color |
| `Transparent` | `colors.ghost.border` | `transparent` | Ghost button border |

## Link Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Transparent` | `colors.link.default` | `transparent` | Link button background |
| `Transparent` | `colors.link.hover` | `transparent` | Link button hover state |
| `Primary/Blue/500` | `colors.link.text` | `#1570ef` | Link button text color |
| `Transparent` | `colors.link.border` | `transparent` | Link button border |

## Disabled States

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Neutral/Gray/300` | `colors.disabled.text` | `#cdd5df` | Disabled button text color |
| `Neutral/Gray/50` | `colors.disabled.background` | `#f8fafc` | Disabled button background |
| `Neutral/Gray/300` | `colors.disabled.border` | `#cdd5df` | Disabled button border |

## Neutral Gray Scale

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Neutral/Gray/50` | `colors.neutral.gray[50]` | `#f8fafc` | Lightest gray |
| `Neutral/Gray/100` | `colors.neutral.gray[100]` | `#f1f5f9` | Very light gray |
| `Neutral/Gray/200` | `colors.neutral.gray[200]` | `#e2e8f0` | Light gray |
| `Neutral/Gray/300` | `colors.neutral.gray[300]` | `#cbd5e1` | Medium light gray |
| `Neutral/Gray/400` | `colors.neutral.gray[400]` | `#94a3b8` | Medium gray |
| `Neutral/Gray/500` | `colors.neutral.gray[500]` | `#64748b` | Medium dark gray |
| `Neutral/Gray/600` | `colors.neutral.gray[600]` | `#4b5565` | Dark gray |
| `Neutral/Gray/700` | `colors.neutral.gray[700]` | `#414651` | Darker gray |
| `Neutral/Gray/800` | `colors.neutral.gray[800]` | `#334155` | Very dark gray |
| `Neutral/Gray/900` | `colors.neutral.gray[900]` | `#1e293b` | Darkest gray |

## Loading Spinner Colors

| Figma Variable | Design Token | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `Primary/Blue/100` | `colors.loading.primary` | `#d1e9ff` | Primary loading spinner |
| `Neutral/Gray/400` | `colors.loading.secondary` | `#94a3b8` | Secondary loading spinner |
| `Primary/Blue/100` | `colors.loading.tertiary` | `#d1e9ff` | Tertiary loading spinner |
| `Neutral/Gray/400` | `colors.loading.ghost` | `#94a3b8` | Ghost loading spinner |
| `Neutral/Gray/400` | `colors.loading.link` | `#94a3b8` | Link loading spinner |

## Usage Guidelines

### ✅ Do
- Reference design tokens: `colors.primary.default`
- Use semantic names in documentation: "Primary Blue 500"
- Include Figma variable names in comments
- Update this mapping when Figma variables change

### ❌ Don't
- Use raw hex values: `#1570ef`
- Hardcode colors in stories
- Skip documentation of new color additions
- Break the connection between Figma and code

## Maintenance

When Figma color variables change:
1. Update the hex values in `design-tokens.ts`
2. Update this mapping document
3. Verify all components still work correctly
4. Update any hardcoded hex values in stories to use tokens
