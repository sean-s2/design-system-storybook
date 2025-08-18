try{
(()=>{var u=__STORYBOOK_API__,{ActiveTabs:d,Consumer:S,ManagerContext:h,Provider:y,RequestResponseError:b,addons:r,combineParameters:_,controlOrMetaKey:g,controlOrMetaSymbol:M,eventMatchesShortcut:C,eventToShortcut:T,experimental_MockUniversalStore:O,experimental_UniversalStore:B,experimental_requestResponse:k,experimental_useUniversalStore:I,isMacLike:R,isShortcutTaken:v,keyToSymbol:x,merge:P,mockChannel:A,optionOrAltSymbol:U,shortcutMatchesShortcut:N,shortcutToHumanString:E,types:H,useAddonState:D,useArgTypes:F,useArgs:G,useChannel:K,useGlobalTypes:Y,useGlobals:L,useParameter:q,useSharedState:V,useStoryPrepared:j,useStorybookApi:w,useStorybookState:W}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:oe,ThemeProvider:te,background:re,color:se,convert:ae,create:s,createCache:ne,createGlobal:ie,createReset:le,css:ce,darken:me,ensure:fe,ignoreSsrWarning:pe,isPropValid:ue,jsx:de,keyframes:Se,lighten:he,styled:ye,themes:be,typography:_e,useTheme:ge,withTheme:Me}=__STORYBOOK_THEMING__;var n=s({base:"light",fontBase:'"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontCode:'"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',brandTitle:"Design System",brandUrl:"https://github.com/sean-s2/design-system-storybook",colorPrimary:"#1570ef",colorSecondary:"#175cd3",appBg:"#ffffff",appContentBg:"#ffffff",appBorderColor:"#e2e8f0",appBorderRadius:8,textColor:"#1e293b",textInverseColor:"#ffffff",textMutedColor:"#64748b",barTextColor:"#64748b",barSelectedColor:"#1570ef",barBg:"#ffffff",inputBg:"#ffffff",inputBorder:"#e2e8f0",inputTextColor:"#1e293b",inputBorderRadius:6});r.setConfig({theme:n});var a=document.createElement("style");a.textContent=`
  /* Ensure sans-serif fonts throughout Storybook UI */
  * {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
  
  /* Specific overrides for common serif elements */
  h1, h2, h3, h4, h5, h6 {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
  
  /* Code elements should remain monospace */
  code, pre, .token {
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace !important;
  }
  
  /* Storybook specific UI elements */
  .sidebar-header, .sidebar-item, .docs-story h1, .docs-story h2, .docs-story h3 {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
`;document.head.appendChild(a);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
