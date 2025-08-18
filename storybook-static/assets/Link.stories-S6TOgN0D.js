import{B as S}from"./Button-CEJ2D9ZX.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0yr9KlQE.js";import"./design-tokens-B7Jx92KR.js";const E={title:"Components/Button/Link",component:S,parameters:{layout:"centered",docs:{description:{component:"Link button variants - text-based actions that look like hyperlinks."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},t={args:{label:"Link Button",variant:"link",size:"md"},parameters:{docs:{description:{story:"The default link button style with medium size."}}}},n={args:{label:"Small Link",variant:"link",size:"sm"},parameters:{docs:{description:{story:"Link button in small size for compact layouts."}}}},e={args:{label:"Large Link",variant:"link",size:"lg"},parameters:{docs:{description:{story:"Link button in large size for prominent text-based actions."}}}},a={args:{label:"Extra Large Link",variant:"link",size:"xl"},parameters:{docs:{description:{story:"Link button in extra large size for prominent text-based actions."}}}},r={args:{label:"Sync",variant:"link",size:"md",loading:!0,loadingText:"Syncing..."},parameters:{docs:{description:{story:"Link button in loading state with spinner and custom loading text."}}}},s={args:{label:"Full Width Link",variant:"link",fullWidth:!0},parameters:{layout:"padded",docs:{description:{story:"Link button that spans the entire width of its container."}}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Link Button',
    variant: 'link',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default link button style with medium size.'
      }
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Small Link',
    variant: 'link',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in small size for compact layouts.'
      }
    }
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Large Link',
    variant: 'link',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in large size for prominent text-based actions.'
      }
    }
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,b,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Link',
    variant: 'link',
    size: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in extra large size for prominent text-based actions.'
      }
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,L,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Sync',
    variant: 'link',
    size: 'md',
    loading: true,
    loadingText: 'Syncing...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in loading state with spinner and custom loading text.'
      }
    }
  }
}`,...(x=(L=r.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var z,f,v;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Link',
    variant: 'link',
    fullWidth: true
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Link button that spans the entire width of its container.'
      }
    }
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const F=["Default","Small","Large","ExtraLarge","Loading","FullWidth"];export{t as Default,a as ExtraLarge,s as FullWidth,e as Large,r as Loading,n as Small,F as __namedExportsOrder,E as default};
