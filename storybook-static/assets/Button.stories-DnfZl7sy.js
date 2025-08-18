import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-CBphzmXv.js";const lr={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"A comprehensive Button component with multiple variants, sizes, and states based on Figma design tokens."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","ghost","link"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},loading:{control:{type:"boolean"},description:"Whether the button is in loading state"},loadingText:{control:{type:"text"},description:"Text to show when button is loading"},fullWidth:{control:{type:"boolean"},description:"Whether the button should take full width"},onClick:{action:"clicked"}},tags:["autodocs"]},e={args:{label:"Primary Button",variant:"primary",size:"md"}},t={args:{label:"Small Primary",variant:"primary",size:"sm"}},n={args:{label:"Large Primary",variant:"primary",size:"lg"}},s={args:{label:"Extra Large Primary",variant:"primary",size:"xl"}},i={args:{label:"Secondary Button",variant:"secondary",size:"md"}},o={args:{label:"Large Secondary",variant:"secondary",size:"lg"}},l={args:{label:"Tertiary Button",variant:"tertiary",size:"md"}},d={args:{label:"Large Tertiary",variant:"tertiary",size:"lg"}},c={args:{label:"Ghost Button",variant:"ghost",size:"md"}},m={args:{label:"Large Ghost",variant:"ghost",size:"lg"}},g={args:{label:"Link Button",variant:"link",size:"md"}},p={args:{label:"Large Link",variant:"link",size:"lg"}},u={args:{label:"Submit",variant:"primary",size:"md",loading:!0,loadingText:"Submitting..."}},y={args:{label:"Save",variant:"secondary",size:"md",loading:!0,loadingText:"Saving..."}},b={args:{label:"Process",variant:"tertiary",size:"md",loading:!0,loadingText:"Processing..."}},v={args:{label:"Update",variant:"ghost",size:"md",loading:!0,loadingText:"Updating..."}},S={args:{label:"Sync",variant:"link",size:"md",loading:!0,loadingText:"Syncing..."}},x={args:{label:"Submit",variant:"primary",size:"sm",loading:!0,loadingText:"Submitting..."}},L={args:{label:"Submit",variant:"primary",size:"lg",loading:!0,loadingText:"Submitting..."}},h={args:{label:"Submit",variant:"primary",size:"xl",loading:!0,loadingText:"Submitting..."}},z={args:{label:"Download",variant:"primary",size:"md",loading:!0,loadingText:"Downloading files..."}},B={args:{label:"Disabled Primary",variant:"primary",disabled:!0}},T={args:{label:"Disabled Secondary",variant:"secondary",disabled:!0}},P={args:{label:"Full Width Button",variant:"primary",fullWidth:!0},parameters:{layout:"padded"}},k={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[a.jsx(r,{label:"Primary Button",variant:"primary"}),a.jsx(r,{label:"Secondary Button",variant:"secondary"}),a.jsx(r,{label:"Tertiary Button",variant:"tertiary"}),a.jsx(r,{label:"Ghost Button",variant:"ghost"}),a.jsx(r,{label:"Link Button",variant:"link"})]}),parameters:{layout:"padded"}},f={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[a.jsx(r,{label:"Small Button",variant:"primary",size:"sm"}),a.jsx(r,{label:"Medium Button",variant:"primary",size:"md"}),a.jsx(r,{label:"Large Button",variant:"primary",size:"lg"}),a.jsx(r,{label:"Extra Large Button",variant:"primary",size:"xl"})]}),parameters:{layout:"padded"}},j={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[a.jsx(r,{label:"Submit",variant:"primary",loading:!0,loadingText:"Submitting..."}),a.jsx(r,{label:"Save",variant:"secondary",loading:!0,loadingText:"Saving..."}),a.jsx(r,{label:"Process",variant:"tertiary",loading:!0,loadingText:"Processing..."}),a.jsx(r,{label:"Update",variant:"ghost",loading:!0,loadingText:"Updating..."}),a.jsx(r,{label:"Sync",variant:"link",loading:!0,loadingText:"Syncing..."})]}),parameters:{layout:"padded"}},D={args:{label:"Click Me!",variant:"primary",size:"lg"},parameters:{docs:{description:{story:"This button has an onClick handler that will log to the Actions panel."}}}};var w,G,E;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md'
  }
}`,...(E=(G=e.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var W,C,I;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Small Primary',
    variant: 'primary',
    size: 'sm'
  }
}`,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var U,A,F;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Large Primary',
    variant: 'primary',
    size: 'lg'
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var M,V,_;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Extra Large Primary',
    variant: 'primary',
    size: 'xl'
  }
}`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var O,R,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var H,J,K;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'lg'
  }
}`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md'
  }
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Large Tertiary',
    variant: 'tertiary',
    size: 'lg'
  }
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var aa,ra,ea;c.parameters={...c.parameters,docs:{...(aa=c.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md'
  }
}`,...(ea=(ra=c.parameters)==null?void 0:ra.docs)==null?void 0:ea.source}}};var ta,na,sa;m.parameters={...m.parameters,docs:{...(ta=m.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    label: 'Large Ghost',
    variant: 'ghost',
    size: 'lg'
  }
}`,...(sa=(na=m.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ia,oa,la;g.parameters={...g.parameters,docs:{...(ia=g.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    label: 'Link Button',
    variant: 'link',
    size: 'md'
  }
}`,...(la=(oa=g.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var da,ca,ma;p.parameters={...p.parameters,docs:{...(da=p.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    label: 'Large Link',
    variant: 'link',
    size: 'lg'
  }
}`,...(ma=(ca=p.parameters)==null?void 0:ca.docs)==null?void 0:ma.source}}};var ga,pa,ua;u.parameters={...u.parameters,docs:{...(ga=u.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Submitting...'
  }
}`,...(ua=(pa=u.parameters)==null?void 0:pa.docs)==null?void 0:ua.source}}};var ya,ba,va;y.parameters={...y.parameters,docs:{...(ya=y.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    variant: 'secondary',
    size: 'md',
    loading: true,
    loadingText: 'Saving...'
  }
}`,...(va=(ba=y.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var Sa,xa,La;b.parameters={...b.parameters,docs:{...(Sa=b.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    label: 'Process',
    variant: 'tertiary',
    size: 'md',
    loading: true,
    loadingText: 'Processing...'
  }
}`,...(La=(xa=b.parameters)==null?void 0:xa.docs)==null?void 0:La.source}}};var ha,za,Ba;v.parameters={...v.parameters,docs:{...(ha=v.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    label: 'Update',
    variant: 'ghost',
    size: 'md',
    loading: true,
    loadingText: 'Updating...'
  }
}`,...(Ba=(za=v.parameters)==null?void 0:za.docs)==null?void 0:Ba.source}}};var Ta,Pa,ka;S.parameters={...S.parameters,docs:{...(Ta=S.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    label: 'Sync',
    variant: 'link',
    size: 'md',
    loading: true,
    loadingText: 'Syncing...'
  }
}`,...(ka=(Pa=S.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var fa,ja,Da;x.parameters={...x.parameters,docs:{...(fa=x.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'sm',
    loading: true,
    loadingText: 'Submitting...'
  }
}`,...(Da=(ja=x.parameters)==null?void 0:ja.docs)==null?void 0:Da.source}}};var wa,Ga,Ea;L.parameters={...L.parameters,docs:{...(wa=L.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'lg',
    loading: true,
    loadingText: 'Submitting...'
  }
}`,...(Ea=(Ga=L.parameters)==null?void 0:Ga.docs)==null?void 0:Ea.source}}};var Wa,Ca,Ia;h.parameters={...h.parameters,docs:{...(Wa=h.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'xl',
    loading: true,
    loadingText: 'Submitting...'
  }
}`,...(Ia=(Ca=h.parameters)==null?void 0:Ca.docs)==null?void 0:Ia.source}}};var Ua,Aa,Fa;z.parameters={...z.parameters,docs:{...(Ua=z.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    label: 'Download',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Downloading files...'
  }
}`,...(Fa=(Aa=z.parameters)==null?void 0:Aa.docs)==null?void 0:Fa.source}}};var Ma,Va,_a;B.parameters={...B.parameters,docs:{...(Ma=B.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    disabled: true
  }
}`,...(_a=(Va=B.parameters)==null?void 0:Va.docs)==null?void 0:_a.source}}};var Oa,Ra,qa;T.parameters={...T.parameters,docs:{...(Oa=T.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    disabled: true
  }
}`,...(qa=(Ra=T.parameters)==null?void 0:Ra.docs)==null?void 0:qa.source}}};var Ha,Ja,Ka;P.parameters={...P.parameters,docs:{...(Ha=P.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(Ka=(Ja=P.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Na,Qa,Xa;k.parameters={...k.parameters,docs:{...(Na=k.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
    layout: 'padded'
  }
}`,...(Xa=(Qa=k.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var Ya,Za,$a;f.parameters={...f.parameters,docs:{...(Ya=f.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
    layout: 'padded'
  }
}`,...($a=(Za=f.parameters)==null?void 0:Za.docs)==null?void 0:$a.source}}};var ar,rr,er;j.parameters={...j.parameters,docs:{...(ar=j.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
    layout: 'padded'
  }
}`,...(er=(rr=j.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var tr,nr,sr;D.parameters={...D.parameters,docs:{...(tr=D.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    label: 'Click Me!',
    variant: 'primary',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'This button has an onClick handler that will log to the Actions panel.'
      }
    }
  }
}`,...(sr=(nr=D.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};const dr=["Primary","PrimarySmall","PrimaryLarge","PrimaryExtraLarge","Secondary","SecondaryLarge","Tertiary","TertiaryLarge","Ghost","GhostLarge","Link","LinkLarge","LoadingPrimary","LoadingSecondary","LoadingTertiary","LoadingGhost","LoadingLink","LoadingSmall","LoadingLarge","LoadingExtraLarge","CustomLoadingText","DisabledPrimary","DisabledSecondary","FullWidth","AllVariants","AllSizes","LoadingStatesShowcase","Interactive"];export{f as AllSizes,k as AllVariants,z as CustomLoadingText,B as DisabledPrimary,T as DisabledSecondary,P as FullWidth,c as Ghost,m as GhostLarge,D as Interactive,g as Link,p as LinkLarge,h as LoadingExtraLarge,v as LoadingGhost,L as LoadingLarge,S as LoadingLink,u as LoadingPrimary,y as LoadingSecondary,x as LoadingSmall,j as LoadingStatesShowcase,b as LoadingTertiary,e as Primary,s as PrimaryExtraLarge,n as PrimaryLarge,t as PrimarySmall,i as Secondary,o as SecondaryLarge,l as Tertiary,d as TertiaryLarge,dr as __namedExportsOrder,lr as default};
