import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Button-CEJ2D9ZX.js";import{c as e,s as C}from"./design-tokens-B7Jx92KR.js";import"./index-0yr9KlQE.js";const L={title:"Components/Button/Hover States",component:o,parameters:{layout:"centered",docs:{description:{component:"Hover states for button variants. These stories demonstrate the visual feedback when users interact with buttons."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},t={name:"Primary - Small (Hover)",args:{label:"Button CTA",variant:"primary",size:"sm"},parameters:{docs:{description:{story:"Primary button in small size (36px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover."}},pseudo:{hover:!0}},render:a=>r.jsxs("div",{style:{position:"relative"},children:[r.jsx(o,{...a,style:{backgroundColor:e.primary.hover}}),r.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500],textAlign:"center"},children:"Hover state preview"})]})},i={name:"Primary - Medium (Hover)",args:{label:"Button CTA",variant:"primary",size:"md"},parameters:{docs:{description:{story:"Primary button in medium size (40px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover."}},pseudo:{hover:!0}},render:a=>r.jsxs("div",{style:{position:"relative"},children:[r.jsx(o,{...a,style:{backgroundColor:e.primary.hover}}),r.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500],textAlign:"center"},children:"Hover state preview"})]})},n={name:"Primary - Large (Hover)",args:{label:"Button CTA",variant:"primary",size:"lg"},parameters:{docs:{description:{story:"Primary button in large size (44px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover."}},pseudo:{hover:!0}},render:a=>r.jsxs("div",{style:{position:"relative"},children:[r.jsx(o,{...a,style:{backgroundColor:e.primary.hover}}),r.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500],textAlign:"center"},children:"Hover state preview"})]})},s={name:"Primary - Extra Large (Hover)",args:{label:"Button CTA",variant:"primary",size:"xl"},parameters:{docs:{description:{story:"Primary button in extra large size (48px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover."}},pseudo:{hover:!0}},render:a=>r.jsxs("div",{style:{position:"relative"},children:[r.jsx(o,{...a,style:{backgroundColor:e.primary.hover}}),r.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500],textAlign:"center"},children:"Hover state preview"})]})},l={name:"Primary - Default vs Hover",render:()=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(o,{label:"Default State",variant:"primary",size:"md"}),r.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500]},children:["Default (Primary Blue 500: ",e.primary.default,")"]})]}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(o,{label:"Hover State",variant:"primary",size:"md",style:{backgroundColor:e.primary.hover,transform:"translateY(-1px)",boxShadow:C.lg}}),r.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:e.neutral.gray[500]},children:["Hover (Primary Blue 600: ",e.primary.hover,")"]})]})]}),parameters:{layout:"padded",docs:{description:{story:"Side-by-side comparison of Primary button default and hover states, showing the color change from Primary Blue 500 (colors.primary.default) to Primary Blue 600 (colors.primary.hover)."}}}},m={name:"All Sizes - Hover States",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[r.jsx(o,{label:"Small Hover",variant:"primary",size:"sm",style:{backgroundColor:e.primary.hover}}),r.jsx(o,{label:"Medium Hover",variant:"primary",size:"md",style:{backgroundColor:e.primary.hover}}),r.jsx(o,{label:"Large Hover",variant:"primary",size:"lg",style:{backgroundColor:e.primary.hover}}),r.jsx(o,{label:"Extra Large Hover",variant:"primary",size:"xl",style:{backgroundColor:e.primary.hover}})]}),parameters:{layout:"padded",docs:{description:{story:"Showcase of all Primary button sizes in their hover states for visual consistency comparison."}}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Primary - Small (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in small size (36px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    // Force hover state for demonstration
    pseudo: {
      hover: true
    }
  },
  render: args => <div style={{
    position: 'relative'
  }}>
      <Button {...args} style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <div style={{
      marginTop: '8px',
      fontSize: '12px',
      color: colors.neutral.gray[500],
      // Neutral Gray 500 from Figma
      textAlign: 'center'
    }}>
        Hover state preview
      </div>
    </div>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var y,u,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Primary - Medium (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in medium size (40px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: {
      hover: true
    }
  },
  render: args => <div style={{
    position: 'relative'
  }}>
      <Button {...args} style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <div style={{
      marginTop: '8px',
      fontSize: '12px',
      color: colors.neutral.gray[500],
      // Neutral Gray 500 from Figma
      textAlign: 'center'
    }}>
        Hover state preview
      </div>
    </div>
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Primary - Large (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in large size (44px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: {
      hover: true
    }
  },
  render: args => <div style={{
    position: 'relative'
  }}>
      <Button {...args} style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <div style={{
      marginTop: '8px',
      fontSize: '12px',
      color: colors.neutral.gray[500],
      // Neutral Gray 500 from Figma
      textAlign: 'center'
    }}>
        Hover state preview
      </div>
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Primary - Extra Large (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in extra large size (48px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: {
      hover: true
    }
  },
  render: args => <div style={{
    position: 'relative'
  }}>
      <Button {...args} style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <div style={{
      marginTop: '8px',
      fontSize: '12px',
      color: colors.neutral.gray[500],
      // Neutral Gray 500 from Figma
      textAlign: 'center'
    }}>
        Hover state preview
      </div>
    </div>
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var z,B,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Primary - Default vs Hover',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Button label="Default State" variant="primary" size="md" />
        <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: colors.neutral.gray[500]
      }}>
          Default (Primary Blue 500: {colors.primary.default})
        </div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Button label="Hover State" variant="primary" size="md" style={{
        backgroundColor: colors.primary.hover,
        // Primary Blue 600 from Figma
        transform: 'translateY(-1px)',
        boxShadow: shadows.lg
      }} />
        <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: colors.neutral.gray[500]
      }}>
          Hover (Primary Blue 600: {colors.primary.hover})
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Side-by-side comparison of Primary button default and hover states, showing the color change from Primary Blue 500 (colors.primary.default) to Primary Blue 600 (colors.primary.hover).'
      }
    }
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var S,k,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All Sizes - Hover States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Button label="Small Hover" variant="primary" size="sm" style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <Button label="Medium Hover" variant="primary" size="md" style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <Button label="Large Hover" variant="primary" size="lg" style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
      <Button label="Extra Large Hover" variant="primary" size="xl" style={{
      backgroundColor: colors.primary.hover // Primary Blue 600 from Figma
    }} />
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Showcase of all Primary button sizes in their hover states for visual consistency comparison.'
      }
    }
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const D=["PrimarySmallHover","PrimaryMediumHover","PrimaryLargeHover","PrimaryExtraLargeHover","PrimaryHoverComparison","AllSizesHover"];export{m as AllSizesHover,s as PrimaryExtraLargeHover,l as PrimaryHoverComparison,n as PrimaryLargeHover,i as PrimaryMediumHover,t as PrimarySmallHover,D as __namedExportsOrder,L as default};
