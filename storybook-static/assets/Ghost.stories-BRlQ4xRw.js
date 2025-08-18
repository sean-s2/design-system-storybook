import{B as L}from"./Button-CEJ2D9ZX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const k={title:"Components/Button/Ghost",component:L,parameters:{layout:"centered",docs:{description:{component:"Ghost button variants - minimal styling with transparent background."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},t={args:{label:"Ghost Button",variant:"ghost",size:"md"},parameters:{docs:{description:{story:"The default ghost button style with medium size."}}}},e={args:{label:"Small Ghost",variant:"ghost",size:"sm"},parameters:{docs:{description:{story:"Ghost button in small size for compact layouts."}}}},o={args:{label:"Large Ghost",variant:"ghost",size:"lg"},parameters:{docs:{description:{story:"Ghost button in large size for minimal but prominent actions."}}}},s={args:{label:"Extra Large Ghost",variant:"ghost",size:"xl"},parameters:{docs:{description:{story:"Ghost button in extra large size for prominent minimal actions."}}}},n={args:{label:"Update",variant:"ghost",size:"md",loading:!0,loadingText:"Updating..."},parameters:{docs:{description:{story:"Ghost button in loading state with spinner and custom loading text."}}}},a={args:{label:"Full Width Ghost",variant:"ghost",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Ghost button that spans the entire width of its container."}}}};var r,i,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default ghost button style with medium size.'
      }
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Small Ghost',
    variant: 'ghost',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in small size for compact layouts.'
      }
    }
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Large Ghost',
    variant: 'ghost',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in large size for minimal but prominent actions.'
      }
    }
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Ghost',
    variant: 'ghost',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in extra large size for prominent minimal actions.'
      }
    }
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var G,z,f;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Update',
    variant: 'ghost',
    size: 'md',
    loading: true,
    loadingText: 'Updating...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in loading state with spinner and custom loading text.'
      }
    }
  }
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var x,v,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Ghost',
    variant: 'ghost',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ghost button that spans the entire width of its container.'
      }
    }
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const E=["Default","Small","Large","ExtraLarge","Loading","FullWidth"];export{t as Default,s as ExtraLarge,a as FullWidth,o as Large,n as Loading,e as Small,E as __namedExportsOrder,k as default};
