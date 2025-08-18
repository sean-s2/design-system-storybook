import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-CEJ2D9ZX.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const f={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Button Component Overview

A comprehensive Button component with multiple variants, sizes, and states based on Figma design tokens.

## Variants
Explore each variant in detail using the nested sections in the sidebar:
- **Primary** - Main call-to-action buttons with high emphasis
- **Secondary** - Secondary actions with medium emphasis  
- **Tertiary** - Subtle actions with low emphasis
- **Ghost** - Minimal styling with transparent background
- **Link** - Text-based actions that look like hyperlinks

## States & Modifiers
- **Disabled** - All variants and sizes in disabled state
- **Loading** - Available within each variant section
- **Full Width** - Available within each variant section

## Features
- Multiple sizes (sm, md, lg, xl)
- Loading states with custom text
- Comprehensive disabled states
- Full width option
- Comprehensive accessibility support

Use the individual variant and state sections for detailed examples and documentation.
        `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},e={name:"Interactive Playground",args:{label:"Button",variant:"primary",size:"md"},parameters:{docs:{description:{story:"Interactive playground to test all button properties. Use the controls below to experiment with different combinations."}}}},i={name:"All Variants Showcase",render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[t.jsx(a,{label:"Primary Button",variant:"primary"}),t.jsx(a,{label:"Secondary Button",variant:"secondary"}),t.jsx(a,{label:"Tertiary Button",variant:"tertiary"}),t.jsx(a,{label:"Ghost Button",variant:"ghost"}),t.jsx(a,{label:"Link Button",variant:"link"})]}),parameters:{layout:"padded",docs:{description:{story:"A showcase of all available button variants for quick comparison."}}}},n={name:"All Sizes Showcase",render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[t.jsx(a,{label:"Small Button",variant:"primary",size:"sm"}),t.jsx(a,{label:"Medium Button",variant:"primary",size:"md"}),t.jsx(a,{label:"Large Button",variant:"primary",size:"lg"}),t.jsx(a,{label:"Extra Large Button",variant:"primary",size:"xl"})]}),parameters:{layout:"padded",docs:{description:{story:"A showcase of all available button sizes for quick comparison."}}}},o={name:"Loading States Showcase",render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[t.jsx(a,{label:"Submit",variant:"primary",loading:!0,loadingText:"Submitting..."}),t.jsx(a,{label:"Save",variant:"secondary",loading:!0,loadingText:"Saving..."}),t.jsx(a,{label:"Process",variant:"tertiary",loading:!0,loadingText:"Processing..."}),t.jsx(a,{label:"Update",variant:"ghost",loading:!0,loadingText:"Updating..."}),t.jsx(a,{label:"Sync",variant:"link",loading:!0,loadingText:"Syncing..."})]}),parameters:{layout:"padded",docs:{description:{story:"A showcase of loading states across all button variants."}}}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Interactive Playground',
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all button properties. Use the controls below to experiment with different combinations.'
      }
    }
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'All Variants Showcase',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Button label="Primary Button" variant="primary" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Tertiary Button" variant="tertiary" />
      <Button label="Ghost Button" variant="ghost" />
      <Button label="Link Button" variant="link" />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all available button variants for quick comparison.'
      }
    }
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All Sizes Showcase',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Button label="Small Button" variant="primary" size="sm" />
      <Button label="Medium Button" variant="primary" size="md" />
      <Button label="Large Button" variant="primary" size="lg" />
      <Button label="Extra Large Button" variant="primary" size="xl" />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all available button sizes for quick comparison.'
      }
    }
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,v,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Loading States Showcase',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Button label="Submit" variant="primary" loading={true} loadingText="Submitting..." />
      <Button label="Save" variant="secondary" loading={true} loadingText="Saving..." />
      <Button label="Process" variant="tertiary" loading={true} loadingText="Processing..." />
      <Button label="Update" variant="ghost" loading={true} loadingText="Updating..." />
      <Button label="Sync" variant="link" loading={true} loadingText="Syncing..." />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of loading states across all button variants.'
      }
    }
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const w=["Interactive","AllVariants","AllSizes","LoadingStatesShowcase"];export{n as AllSizes,i as AllVariants,e as Interactive,o as LoadingStatesShowcase,w as __namedExportsOrder,f as default};
