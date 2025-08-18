import{B as L}from"./Button-CEJ2D9ZX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const k={title:"Components/Button/Tertiary",component:L,parameters:{layout:"centered",docs:{description:{component:"Tertiary button variants - for subtle actions with low emphasis."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},t={args:{label:"Tertiary Button",variant:"tertiary",size:"md"},parameters:{docs:{description:{story:"The default tertiary button style with medium size."}}}},r={args:{label:"Small Tertiary",variant:"tertiary",size:"sm"},parameters:{docs:{description:{story:"Tertiary button in small size for compact layouts."}}}},e={args:{label:"Large Tertiary",variant:"tertiary",size:"lg"},parameters:{docs:{description:{story:"Tertiary button in large size for subtle but prominent actions."}}}},a={args:{label:"Extra Large Tertiary",variant:"tertiary",size:"xl"},parameters:{docs:{description:{story:"Tertiary button in extra large size for prominent subtle actions."}}}},n={args:{label:"Process",variant:"tertiary",size:"md",loading:!0,loadingText:"Processing..."},parameters:{docs:{description:{story:"Tertiary button in loading state with spinner and custom loading text."}}}},s={args:{label:"Full Width Tertiary",variant:"tertiary",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Tertiary button that spans the entire width of its container."}}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default tertiary button style with medium size.'
      }
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Small Tertiary',
    variant: 'tertiary',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in small size for compact layouts.'
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Large Tertiary',
    variant: 'tertiary',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in large size for subtle but prominent actions.'
      }
    }
  }
}`,...(y=(m=e.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Tertiary',
    variant: 'tertiary',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in extra large size for prominent subtle actions.'
      }
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var T,z,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Process',
    variant: 'tertiary',
    size: 'md',
    loading: true,
    loadingText: 'Processing...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in loading state with spinner and custom loading text.'
      }
    }
  }
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var x,v,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Tertiary',
    variant: 'tertiary',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Tertiary button that spans the entire width of its container.'
      }
    }
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const F=["Default","Small","Large","ExtraLarge","Loading","FullWidth"];export{t as Default,a as ExtraLarge,s as FullWidth,e as Large,n as Loading,r as Small,F as __namedExportsOrder,k as default};
