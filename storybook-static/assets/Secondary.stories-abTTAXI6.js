import{B as L}from"./Button-CEJ2D9ZX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const k={title:"Components/Button/Secondary",component:L,parameters:{layout:"centered",docs:{description:{component:"Secondary button variants - for secondary actions with medium emphasis."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},e={args:{label:"Secondary Button",variant:"secondary",size:"md"},parameters:{docs:{description:{story:"The default secondary button style with medium size."}}}},a={args:{label:"Small Secondary",variant:"secondary",size:"sm"},parameters:{docs:{description:{story:"Secondary button in small size for compact layouts."}}}},n={args:{label:"Large Secondary",variant:"secondary",size:"lg"},parameters:{docs:{description:{story:"Secondary button in large size for important secondary actions."}}}},r={args:{label:"Extra Large Secondary",variant:"secondary",size:"xl"},parameters:{docs:{description:{story:"Secondary button in extra large size for prominent secondary actions."}}}},t={args:{label:"Save",variant:"secondary",size:"md",loading:!0,loadingText:"Saving..."},parameters:{docs:{description:{story:"Secondary button in loading state with spinner and custom loading text."}}}},o={args:{label:"Full Width Secondary",variant:"secondary",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Secondary button that spans the entire width of its container."}}}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default secondary button style with medium size.'
      }
    }
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Small Secondary',
    variant: 'secondary',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in small size for compact layouts.'
      }
    }
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,y,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in large size for important secondary actions.'
      }
    }
  }
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,S,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Secondary',
    variant: 'secondary',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in extra large size for prominent secondary actions.'
      }
    }
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,z,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    variant: 'secondary',
    size: 'md',
    loading: true,
    loadingText: 'Saving...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in loading state with spinner and custom loading text.'
      }
    }
  }
}`,...(f=(z=t.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var v,x,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Secondary',
    variant: 'secondary',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Secondary button that spans the entire width of its container.'
      }
    }
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const F=["Default","Small","Large","ExtraLarge","Loading","FullWidth"];export{e as Default,r as ExtraLarge,o as FullWidth,n as Large,t as Loading,a as Small,F as __namedExportsOrder,k as default};
