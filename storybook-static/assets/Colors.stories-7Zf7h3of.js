import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./design-tokens-B7Jx92KR.js";const M={title:"Design System/Colors",parameters:{layout:"padded",docs:{description:{component:`
# Color Tokens

Design tokens for colors used throughout the Button component, mapped directly from Figma variables.

## Figma Variable Mapping
- **Primary Blue 500**: \`colors.primary.default\` - Main primary button color
- **Primary Blue 600**: \`colors.primary.hover\` - Primary button hover state  
- **Neutral Gray 300**: \`colors.disabled.text\` - Disabled text color
- **Neutral Gray 50**: \`colors.disabled.background\` - Disabled background color

See \`src/styles/figma-colors.md\` for complete Figma variable mapping.
        `}}},tags:["autodocs"]},a=({name:o,value:t,figmaVar:V,usage:P})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"12px",border:"1px solid #e2e8f0",borderRadius:"8px",marginBottom:"8px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:t==="transparent"?"#f8fafc":t,border:t==="transparent"?"2px dashed #cbd5e1":"1px solid #e2e8f0",borderRadius:"6px",flexShrink:0}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:600,fontSize:"14px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:o}),e.jsx("div",{style:{fontSize:"12px",color:"#64748b",fontFamily:"monospace"},children:t}),e.jsxs("div",{style:{fontSize:"11px",color:"#94a3b8",marginTop:"2px",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:["Figma: ",V]}),e.jsx("div",{style:{fontSize:"11px",color:"#64748b",marginTop:"2px",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:P})]})]}),s={name:"Primary Colors",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Primary Button Colors"}),e.jsx(a,{name:"Primary Default",value:r.primary.default,figmaVar:"Primary/Blue/500",usage:"Default primary button background"}),e.jsx(a,{name:"Primary Hover",value:r.primary.hover,figmaVar:"Primary/Blue/600",usage:"Primary button hover state"}),e.jsx(a,{name:"Primary Text",value:r.primary.text,figmaVar:"Neutral/White",usage:"Primary button text color"}),e.jsx(a,{name:"Primary Border",value:r.primary.border,figmaVar:"Primary/Blue/500",usage:"Primary button border color"})]}),parameters:{docs:{description:{story:"Primary button color palette from Figma design tokens."}}}},n={name:"Secondary Colors",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Secondary Button Colors"}),e.jsx(a,{name:"Secondary Default",value:r.secondary.default,figmaVar:"Neutral/White",usage:"Default secondary button background"}),e.jsx(a,{name:"Secondary Hover",value:r.secondary.hover,figmaVar:"Neutral/Gray/50",usage:"Secondary button hover state"}),e.jsx(a,{name:"Secondary Text",value:r.secondary.text,figmaVar:"Neutral/Gray/600",usage:"Secondary button text color"}),e.jsx(a,{name:"Secondary Border",value:r.secondary.border,figmaVar:"Neutral/Gray/200",usage:"Secondary button border color"})]}),parameters:{docs:{description:{story:"Secondary button color palette from Figma design tokens."}}}},i={name:"Tertiary Colors",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Tertiary Button Colors"}),e.jsx(a,{name:"Tertiary Default",value:r.tertiary.default,figmaVar:"Transparent",usage:"Default tertiary button background (transparent)"}),e.jsx(a,{name:"Tertiary Hover",value:r.tertiary.hover,figmaVar:"Neutral/Gray/50",usage:"Tertiary button hover state"}),e.jsx(a,{name:"Tertiary Text",value:r.tertiary.text,figmaVar:"Primary/Blue/500",usage:"Tertiary button text color"}),e.jsx(a,{name:"Tertiary Border",value:r.tertiary.border,figmaVar:"Transparent",usage:"Tertiary button border (transparent)"})]}),parameters:{docs:{description:{story:"Tertiary button color palette from Figma design tokens."}}}},l={name:"Disabled States",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Disabled Button Colors"}),e.jsx(a,{name:"Disabled Text",value:r.disabled.text,figmaVar:"Neutral/Gray/300",usage:"Disabled button text and icon color"}),e.jsx(a,{name:"Disabled Background",value:r.disabled.background,figmaVar:"Neutral/Gray/50",usage:"Disabled button background (primary/secondary only)"}),e.jsx(a,{name:"Disabled Border",value:r.disabled.border,figmaVar:"Neutral/Gray/300",usage:"Disabled button border color"})]}),parameters:{docs:{description:{story:"Disabled state colors used across all button variants."}}}},m={name:"Neutral Gray Scale",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Neutral Gray Scale"}),Object.entries(r.neutral.gray).map(([o,t])=>e.jsx(a,{name:`Gray ${o}`,value:t,figmaVar:`Neutral/Gray/${o}`,usage:`Gray scale level ${o}`},o))]}),parameters:{docs:{description:{story:"Complete neutral gray scale from Figma design system."}}}},d={name:"Loading Spinner Colors",render:()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",color:"#1e293b",fontFamily:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:"Loading Spinner Colors"}),e.jsx(a,{name:"Primary Loading",value:r.loading.primary,figmaVar:"Primary/Blue/100",usage:"Primary button loading spinner"}),e.jsx(a,{name:"Secondary Loading",value:r.loading.secondary,figmaVar:"Neutral/Gray/400",usage:"Secondary button loading spinner"}),e.jsx(a,{name:"Tertiary Loading",value:r.loading.tertiary,figmaVar:"Primary/Blue/100",usage:"Tertiary button loading spinner"}),e.jsx(a,{name:"Ghost Loading",value:r.loading.ghost,figmaVar:"Neutral/Gray/400",usage:"Ghost button loading spinner"}),e.jsx(a,{name:"Link Loading",value:r.loading.link,figmaVar:"Neutral/Gray/400",usage:"Link button loading spinner"})]}),parameters:{docs:{description:{story:"Loading spinner colors for each button variant."}}}};var c,u,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Primary Colors',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Primary Button Colors</h3>
      <ColorSwatch name="Primary Default" value={colors.primary.default} figmaVar="Primary/Blue/500" usage="Default primary button background" />
      <ColorSwatch name="Primary Hover" value={colors.primary.hover} figmaVar="Primary/Blue/600" usage="Primary button hover state" />
      <ColorSwatch name="Primary Text" value={colors.primary.text} figmaVar="Neutral/White" usage="Primary button text color" />
      <ColorSwatch name="Primary Border" value={colors.primary.border} figmaVar="Primary/Blue/500" usage="Primary button border color" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Primary button color palette from Figma design tokens.'
      }
    }
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,p,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Secondary Colors',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Secondary Button Colors</h3>
      <ColorSwatch name="Secondary Default" value={colors.secondary.default} figmaVar="Neutral/White" usage="Default secondary button background" />
      <ColorSwatch name="Secondary Hover" value={colors.secondary.hover} figmaVar="Neutral/Gray/50" usage="Secondary button hover state" />
      <ColorSwatch name="Secondary Text" value={colors.secondary.text} figmaVar="Neutral/Gray/600" usage="Secondary button text color" />
      <ColorSwatch name="Secondary Border" value={colors.secondary.border} figmaVar="Neutral/Gray/200" usage="Secondary button border color" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Secondary button color palette from Figma design tokens.'
      }
    }
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,S,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Tertiary Colors',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Tertiary Button Colors</h3>
      <ColorSwatch name="Tertiary Default" value={colors.tertiary.default} figmaVar="Transparent" usage="Default tertiary button background (transparent)" />
      <ColorSwatch name="Tertiary Hover" value={colors.tertiary.hover} figmaVar="Neutral/Gray/50" usage="Tertiary button hover state" />
      <ColorSwatch name="Tertiary Text" value={colors.tertiary.text} figmaVar="Primary/Blue/500" usage="Tertiary button text color" />
      <ColorSwatch name="Tertiary Border" value={colors.tertiary.border} figmaVar="Transparent" usage="Tertiary button border (transparent)" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button color palette from Figma design tokens.'
      }
    }
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,h,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Disabled States',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Disabled Button Colors</h3>
      <ColorSwatch name="Disabled Text" value={colors.disabled.text} figmaVar="Neutral/Gray/300" usage="Disabled button text and icon color" />
      <ColorSwatch name="Disabled Background" value={colors.disabled.background} figmaVar="Neutral/Gray/50" usage="Disabled button background (primary/secondary only)" />
      <ColorSwatch name="Disabled Border" value={colors.disabled.border} figmaVar="Neutral/Gray/300" usage="Disabled button border color" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled state colors used across all button variants.'
      }
    }
  }
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var C,D,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Neutral Gray Scale',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Neutral Gray Scale</h3>
      {Object.entries(colors.neutral.gray).map(([key, value]) => <ColorSwatch key={key} name={\`Gray \${key}\`} value={value} figmaVar={\`Neutral/Gray/\${key}\`} usage={\`Gray scale level \${key}\`} />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete neutral gray scale from Figma design system.'
      }
    }
  }
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var k,j,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Loading Spinner Colors',
  render: () => <div>
      <h3 style={{
      marginBottom: '16px',
      color: '#1e293b',
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Loading Spinner Colors</h3>
      <ColorSwatch name="Primary Loading" value={colors.loading.primary} figmaVar="Primary/Blue/100" usage="Primary button loading spinner" />
      <ColorSwatch name="Secondary Loading" value={colors.loading.secondary} figmaVar="Neutral/Gray/400" usage="Secondary button loading spinner" />
      <ColorSwatch name="Tertiary Loading" value={colors.loading.tertiary} figmaVar="Primary/Blue/100" usage="Tertiary button loading spinner" />
      <ColorSwatch name="Ghost Loading" value={colors.loading.ghost} figmaVar="Neutral/Gray/400" usage="Ghost button loading spinner" />
      <ColorSwatch name="Link Loading" value={colors.loading.link} figmaVar="Neutral/Gray/400" usage="Link button loading spinner" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading spinner colors for each button variant.'
      }
    }
  }
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const I=["PrimaryColors","SecondaryColors","TertiaryColors","DisabledColors","NeutralGrays","LoadingColors"];export{l as DisabledColors,d as LoadingColors,m as NeutralGrays,s as PrimaryColors,n as SecondaryColors,i as TertiaryColors,I as __namedExportsOrder,M as default};
