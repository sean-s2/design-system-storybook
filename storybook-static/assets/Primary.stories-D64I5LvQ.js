import{B as w}from"./Button-CEJ2D9ZX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const E={title:"Components/Button/Primary",component:w,parameters:{layout:"centered",docs:{description:{component:"Primary button variants - the main call-to-action buttons with high emphasis."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},r={args:{label:"Primary Button",variant:"primary",size:"md"},parameters:{docs:{description:{story:"The default primary button style with medium size."}}}},t={args:{label:"Small Primary",variant:"primary",size:"sm"},parameters:{docs:{description:{story:"Primary button in small size for compact layouts."}}}},a={args:{label:"Large Primary",variant:"primary",size:"lg"},parameters:{docs:{description:{story:"Primary button in large size for prominent actions."}}}},e={args:{label:"Extra Large Primary",variant:"primary",size:"xl"},parameters:{docs:{description:{story:"Primary button in extra large size for hero sections."}}}},n={args:{label:"Submit",variant:"primary",size:"md",loading:!0,loadingText:"Submitting..."},parameters:{docs:{description:{story:"Primary button in loading state with spinner and custom loading text."}}}},o={args:{label:"Full Width Primary",variant:"primary",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Primary button that spans the entire width of its container."}}}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default primary button style with medium size.'
      }
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Small Primary',
    variant: 'primary',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in small size for compact layouts.'
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Large Primary',
    variant: 'primary',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in large size for prominent actions.'
      }
    }
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Primary',
    variant: 'primary',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in extra large size for hero sections.'
      }
    }
  }
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var P,z,f;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Submitting...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in loading state with spinner and custom loading text.'
      }
    }
  }
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var x,v,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Primary',
    variant: 'primary',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Primary button that spans the entire width of its container.'
      }
    }
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const k=["Default","Small","Large","ExtraLarge","Loading","FullWidth"];export{r as Default,e as ExtraLarge,o as FullWidth,a as Large,n as Loading,t as Small,k as __namedExportsOrder,E as default};
