;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="7dfee8a3-672a-e9eb-894c-39a7b6ae324b")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,716338,e=>{e.v({checked:"Radio-module__cO_glW__checked",container:"Radio-module__cO_glW__container",input:"Radio-module__cO_glW__input"})},734882,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(480028),n=e.i(907371),a=e.i(625484),o=e.i(716338);let s=(0,r.createContext)(null),l=(0,i.cvarsFrom)("Radio.module.css",["--bg"]);function c({name:e,value:r,disabled:i,onChange:n,children:o,tag:l,className:c}){return(0,t.jsx)(a.View,{tag:l,className:c,children:(0,t.jsx)(s.Provider,{value:{value:r,name:e,onChange:n,disabled:i},children:o})})}let d=a.SpecializedView.input;function u({onChange:e,id:c,checked:u,disabled:p,name:m,value:g,...h}){let x=(0,r.useContext)(s);x&&(m=m??x.name,u=u??x.value===g,e=e??x.onChange,p=p??x.disabled);let f=(0,n.useCreateInteractive)({variant:"filledAndOutlined"}),y=p?i.tokens.outlineDefault:i.tokens.accentPrimaryDefault;return(0,t.jsxs)(a.View,{clsx:o.default.container,style:{[l.bg]:y},children:[(0,t.jsx)(d,{id:c,name:m,value:g,type:"radio",checked:u,disabled:p,onChange:t=>e?.(t),clsx:[o.default.input,f.clsx],style:f.style,...h}),u?(0,t.jsx)(a.View,{clsx:o.default.checked}):null]})}e.s(["Radio",()=>u,"RadioGroup",()=>c])},58261,e=>{"use strict";var t=e.i(389959),r=e.i(507491),i=e.i(520112),n=e.i(882793),a=e.i(968783);let o={};function s(){let{orgId:e}=(0,a.useCurrentUserStoredOrgContext)(),s=!!e,{data:l,loading:c,error:d,refetch:u}=(0,i.useGetConnectorContextQuery)({skip:s,context:o}),{data:p,loading:m,error:g,refetch:h}=(0,i.useGetConnectorContextByOrgQuery)({variables:{orgId:e??""},skip:!s,context:o}),x=l?.currentUser?.__typename==="CurrentUser"?l?.currentUser?.connectorContext:null,f=p?.currentUser?.__typename==="CurrentUser"&&p?.currentUser?.org?.__typename==="Org"?p?.currentUser?.org?.connectorContext:null,y=s?f:x,v=s?g:d,C=s?m:c,R=s?h:u,[w,{loading:_}]=(0,r.useCreateConnectionMutation)(),j=(0,t.useCallback)(async t=>w({...t,refetchQueries:s?[{query:i.GetConnectorContextByOrgDocument,variables:{orgId:e??""}}]:[{query:i.GetConnectorContextDocument}]}),[w,s,e]),b=y&&(s?"OrgConnectorContext"===y.__typename:"CurrentUserConnectorContext"===y.__typename),k=s?p?.currentUser?.__typename==="CurrentUser"&&p.currentUser.isSubscribed:l?.currentUser?.__typename==="CurrentUser"&&l.currentUser.isSubscribed,A=(0,t.useMemo)(()=>{if(!b||"CurrentUserConnectorContext"!==y.__typename&&"OrgConnectorContext"!==y.__typename)return[];let e=[],t=y.connectorWhitelist??[],r=y.connections??[],i=y.connectorConfigs??[],a=r.filter(e=>(t.includes(e.connectorName)||n.MCP_CONNECTORS.has(e.connectorName))&&!n.APP_SCOPED_CONNECTORS.has(e.connectorName)),o=new Set(a.map(e=>e.connectorName)),s=new Map;i.forEach(e=>{e.connectorName&&e.webhookEvents&&e.webhookEvents.length>0&&s.set(e.connectorName,e.webhookEvents)});let l=i.filter(e=>e.connectorName&&t.includes(e.connectorName)&&!o.has(e.connectorName)&&"CUSTOM_MCP"!==e.connectorName);return a.forEach(t=>{e.push({id:t.connectionId,displayName:t.displayName,iconPath:t.iconPath,connectorName:t.connectorName,connectorType:"connection",type:t.type,webhookEvents:s.get(t.connectorName)})}),l.forEach(t=>{t.connectorName&&e.push({id:t.id,displayName:t.displayName??"Untitled",iconPath:t.iconPath,connectorName:t.connectorName,connectorType:"connectorConfig",type:t.type,webhookEvents:s.get(t.connectorName)})}),e},[b,y]);return v||!b||"CurrentUserConnectorContext"!==y.__typename&&"OrgConnectorContext"!==y.__typename?{token:null,connections:[],connectorConfigs:[],connectorWhitelist:[],slashCommandConnectorItems:[],createConnection:j,loading:C,createConnectionLoading:_,error:v,refetch:R,isSubscribed:k??!1,isOrgContext:s}:{token:y.openIntClientToken,connections:y.connections??[],connectorConfigs:y.connectorConfigs??[],connectorWhitelist:y.connectorWhitelist??[],slashCommandConnectorItems:A,createConnection:j,loading:C,createConnectionLoading:_,error:v,refetch:R,isSubscribed:k??!1,isOrgContext:s}}e.s(["useConnectorContext",()=>s])},836224,e=>{"use strict";var t=e.i(276385),r=e.i(446530),i=e.i(613355),n=e.i(960178);let a=(0,r.cssRecord)({self:[i.rcss.textAlign.right,i.rcss.fontSize("0.75em")]});e.s(["default",0,({maxLength:e=140,value:r="",hideLabel:i=!1})=>(0,t.jsxs)(n.Text,{css:a.self,multiline:!1,color:"dimmer",children:[r.length," / ",e," ",i?"":"characters"]})])},23293,e=>{"use strict";var t=e.i(973245);let r=t.gql`
    fragment CreateReplAuthorizations on OrgAuthorizations {
  __typename
  createPrivateRepl: createRepl(private: true) {
    __typename
    isAuthorized
    message
    code
  }
  createPublicRepl: createRepl(private: false) {
    __typename
    isAuthorized
    message
    code
  }
  paidAgent: useAiAgent(tier: paid) {
    __typename
    isAuthorized
    message
    code
  }
  freeAgent: useAiAgent(tier: free) {
    __typename
    isAuthorized
    message
    code
  }
  turboAgentModel: useTurbo {
    __typename
    isAuthorized
    message
    code
  }
  defaultAdvancedAgentModel: defaultAdvancedAgentModel {
    __typename
    isAuthorized
    message
    code
  }
}
    `,i=t.gql`
    fragment OrgReplOwnerOrg on Org {
  id
  name
  type
  slug
  image
  authorizations {
    ...CreateReplAuthorizations
    ... on OrgAuthorizations {
      editPaymentMethod {
        isAuthorized
      }
      deleteOrg {
        isAuthorized
      }
    }
  }
  groups(input: {types: [system_viewers]}) {
    ... on OrgGroupConnection {
      items {
        id
        type
        isMember
      }
    }
  }
}
    ${r}`,n=t.gql`
    fragment ReplOwnerTeam on Team {
  id
  username
  image
  archived
  capabilities {
    isEducationPlan
  }
  authorizations {
    ...CreateReplAuthorizations
  }
}
    ${r}`,a=t.gql`
    fragment ReplOwnerCurrentUser on CurrentUser {
  id
  username
  image
  isSubscribed
  timeCreated
  personalOrgAuthorizations {
    ...CreateReplAuthorizations
  }
  orgs(count: 50) {
    __typename
    ... on CurrentUserOrganizationConnection {
      items {
        org {
          ...OrgReplOwnerOrg
        }
        type
      }
    }
    ... on Error {
      message
    }
  }
  teams {
    id
    ...ReplOwnerTeam
  }
}
    ${r}
${i}
${n}`;e.s(["CreateReplAuthorizationsFragmentDoc",0,r,"ReplOwnerCurrentUserFragmentDoc",0,a,"ReplOwnerTeamFragmentDoc",0,n])},262522,298435,e=>{"use strict";var t=e.i(389959);e.s(["useOwner",0,(e,r,i={includeLegacyTeams:!0})=>{var n,a;let o,s,l=(n=e,a=i,o="CurrentUserOrganizationConnection"===n.orgs.__typename?n.orgs.items.map(e=>e.org):[],s=n.teams,[n,...o,...a.includeLegacyTeams?s:[]]),[c,d]=(0,t.useState)(r??e.id),[u,p]=(0,t.useState)(r);return r!==u&&(p(r),d(r??e.id)),[l.find(e=>e.id===c)??e,e=>{d(e.id)},l]}],262522);var r=e.i(973245);e.i(304277);var i=e.i(566901);let n={},a=r.gql`
    fragment ForkReplReplAuthorization on ReplAuthorization {
  isAuthorized
  code
  message
}
    `,o=r.gql`
    query ForkReplAuthorizations($originReplId: String!, $destinationOrgId: String, $destinationIsPersonal: Boolean, $destinationTeamId: Int) {
  getRepl(id: $originReplId) {
    ... on Repl {
      id
      authorizations {
        createPrivateRepl: fork(
          input: {destinationOrgId: $destinationOrgId, destinationIsPersonal: $destinationIsPersonal, destinationTeamId: $destinationTeamId, isPrivate: true}
        ) {
          ...ForkReplReplAuthorization
        }
        createPublicRepl: fork(
          input: {destinationOrgId: $destinationOrgId, destinationIsPersonal: $destinationIsPersonal, destinationTeamId: $destinationTeamId, isPrivate: false}
        ) {
          ...ForkReplReplAuthorization
        }
      }
    }
  }
}
    ${a}`;var s=e.i(368964),l=e.i(569910);function c(e,r){let a=function({owner:e,originReplId:r}){let a,[s,{data:c,loading:d}]=(a={...n,...void 0},i.useLazyQuery(o,a));if((0,t.useEffect)(()=>{r&&s({variables:{originReplId:r,destinationOrgId:"Org"===e.__typename?e.id:void 0,destinationIsPersonal:"CurrentUser"===e.__typename||void 0,destinationTeamId:"Team"===e.__typename?e.id:void 0},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"})},[e,r,s]),c?.getRepl.__typename==="Repl"&&!d)return{privateRepl:c.getRepl.authorizations.createPrivateRepl,publicRepl:c.getRepl.authorizations.createPublicRepl};switch(e.__typename){case"CurrentUser":return"OrgAuthorizations"===e.personalOrgAuthorizations.__typename?{privateRepl:e.personalOrgAuthorizations.createPrivateRepl,publicRepl:e.personalOrgAuthorizations.createPublicRepl}:u;case"Org":return{privateRepl:e.authorizations.createPrivateRepl,publicRepl:e.authorizations.createPublicRepl};case"Team":return"OrgAuthorizations"===e.authorizations.__typename?{privateRepl:e.authorizations.createPrivateRepl,publicRepl:e.authorizations.createPublicRepl}:u;default:(0,l.default)(e)}}({owner:e,originReplId:r}),[s,c]=(0,t.useState)(a.privateRepl.isAuthorized);return(0,t.useEffect)(()=>{c(a.privateRepl.isAuthorized)},[a.privateRepl.isAuthorized]),{isPrivate:s,setIsPrivate:c,privacyAuthz:a,isValidPrivacy:s?a.privateRepl.isAuthorized:a.publicRepl.isAuthorized}}let d={__typename:"OrgAuthorization",isAuthorized:!1,message:"Not authorized",code:s.OrgAuthorizationCode.InsufficientPermissions},u={privateRepl:d,publicRepl:d};e.s(["usePrivate",()=>c],298435)},871203,e=>{"use strict";var t,r=((t={}).Initializing="initialize",t.Connecting="connect",t.GettingInitialConfig="get init config",t.ImportingMigrationTemplate="import migration template",t.MergeDotReplit="merge dot replit",t.ExecingPostMigration="exec post migration",t.UpdatingLanguage="set language",t.Finished="finished",t.Failed="error",t);function i(e){return"nix"!==e.language}e.s(["Progress",()=>r,"shouldMigrateReplToNix",()=>i])},999669,e=>{"use strict";var t=e.i(973245),r=e.i(951262);let i={},n=t.gql`
    mutation ForkReplCreateRepl($input: CreateReplInput!, $isTitleAutoGenerated: Boolean) {
  createRepl(input: $input, isTitleAutoGenerated: $isTitleAutoGenerated) {
    ... on Repl {
      id
      org {
        id
      }
      url
      isPrivate
      language
      nextPagePathname
      config {
        isAgentRepl
      }
      origin {
        id
        isOwner
      }
      source {
        release {
          id
          repl {
            id
            title
            owner {
              ... on User {
                id
                username
              }
              ... on Team {
                id
                username
              }
            }
          }
        }
      }
    }
    ... on UserError {
      message
    }
  }
}
    `;function a(e){let t={...i,...e};return r.useMutation(n,t)}e.s(["useForkReplCreateReplMutation",()=>a])},882976,e=>{"use strict";var t=e.i(761201);function r(e){return e.owner?.username===t.OFFICIAL_TEMPLATE_USERNAME?"official":"community"}e.s(["getTemplateTrackingType",()=>r])},711153,e=>{"use strict";var t=e.i(750854),r=e.i(389959),i=e.i(999669),n=e.i(871203),a=e.i(968783),o=e.i(993796),s=e.i(222342),l=e.i(882976),c=e.i(858248),d=e.i(709485),u=e.i(1324),p=e.i(185591);function m({onFork:e,onError:g,replLinkOptions:h}={}){let x=(0,t.useRouter)(),f=(0,o.useFlag)({controlName:"flag-agent-everywhere"}),{showError:y}=(0,s.default)(),v=(0,u.default)(),[C,R]=(0,i.useForkReplCreateReplMutation)({onCompleted:t=>{let r=t?.createRepl.__typename==="Repl"?t.createRepl:null;if(!r)return;e&&e(t);let i=(0,n.shouldMigrateReplToNix)(r),a=r.config?.isAgentRepl!==!0&&f?{...h,enterInExpertMode:!0}:h;if("/replEnvironmentDesktop"===x.pathname||"/replEnvironmentMobile"===x.pathname||"/replView"===x.pathname&&i){window.location.href=(0,p.replLinkFullUrl)(r,a);return}let o=(0,p.replLinkProps)(r,a);x.push({...o.href,pathname:v},o.as)}}),w=R.data?.createRepl.__typename==="UserError"?R.data?.createRepl.message:R.error?.message;return(0,r.useEffect)(()=>{w&&(y(w),g&&g())},[w,y,g]),[(0,r.useCallback)(({originId:e,replReleaseId:t,teamId:r,title:i,description:n,isPrivate:o,folderId:s,trackingData:u,forkToPersonal:p,orgId:m,connectionIds:g,copyDatabase:h,isTitleAutoGenerated:x})=>{(0,c.track)(d.events.FORK_REQUESTED,u),C({variables:{isTitleAutoGenerated:x,input:{originId:e,replReleaseId:t,teamId:r,title:i,isPrivate:o,description:n,folderId:s,forkToPersonal:p,gitRemoteUrl:"",orgId:m,connectionIds:g,copyDatabase:h}}}).then(r=>{let i=r.data?.createRepl.__typename==="Repl"?r.data.createRepl:null;i&&(0,c.track)(d.events.REPL_CREATED,{isSignup:!1,isOnboarding:!1,...u,isForked:!0,isPrivate:i.isPrivate,replId:i.id,isRenamed:!1,language:i.language,isSelfForked:!!i.origin?.isOwner,isTemplateFork:!!t,originId:e,templateReplId:i.source?.release?.repl?.id||void 0,templateTitle:i.source?.release?.repl?.title,templateOwner:i.source?.release?.repl?.owner?.username,templateType:i.source?.release?.repl?(0,l.getTemplateTrackingType)(i.source.release.repl):void 0,orgContext:(0,a.getOrgTrackingContext)(i.org?{id:i.org.id}:void 0)})})},[C]),{loading:!!R.loading||!!R.data&&"Repl"===R.data.createRepl.__typename}]}e.s(["default",()=>m])},263481,e=>{"use strict";var t=e.i(596139),r=e.i(135173),i=e.i(173532),n=e.i(973519);function a(){let{show:e}=(0,n.useGlobalModal)(),a=(0,i.useReplLimit)(),o="data"===a.type?a.starterPlanReplLimit:r.STARTER_PLAN_REPL_LIMIT;return{showUpgradeModal:async({onUpgradeConfirm:r,centered:i})=>{await e("MembershipPurchaseModal",{headingText:"Upgrade for more Projects",subHeadingText:`Upgrade to Replit ${t.corePlanName} to create more than ${o} Projects`,analyticsContext:{upgrade:{context:"repl_limit_upsell"}},onPurchaseComplete:r,centered:i})}}}e.s(["useUpgradeModal",()=>a])},809414,e=>{"use strict";var t=e.i(276385),r=e.i(967629),i=e.i(480028),n=e.i(754873),a=e.i(613355),o=e.i(960178),s=e.i(625484);function l(e){return(0,t.jsx)(s.View,{tag:"label",htmlFor:e.for,children:(0,t.jsx)(o.Text,{multiline:!1,children:e.children})})}let c=(0,r.css)([n.interactive.filled,a.rcss.p(8),{color:i.tokens.foregroundDefault,borderColor:i.tokens.outlineDimmest,border:"1 solid",outline:"0 none",fontSize:i.tokens.fontSizeDefault,lineHeight:"16px",display:"block",width:"100%","::placeholder":{color:i.tokens.foregroundDimmer},":not([disabled])":{cursor:"text"}}]);e.s(["Label",()=>l,"inputCss",0,c])},505549,e=>{"use strict";var t,r=e.i(276385),i=e.i(785240),n=e.i(368964),a=e.i(399245),o=e.i(480028),s=e.i(446530),l=e.i(613355),c=e.i(428596),d=e.i(714165),u=e.i(734882),p=e.i(960178),m=e.i(625484);let g=(0,s.cssRecord)({radioGroup:[{[l.media.max("tabletMax")]:[l.rcss.colWithGap(8)],[l.media.min("tabletMax")]:[l.rcss.display.grid,{gridTemplateColumns:"1fr 1fr",gap:o.tokens.space8,gridAutoFlow:"column"}]}],radioContainer:[l.rcss.rowWithGap(8),l.rcss.align.start,l.rcss.p(8),l.rcss.border({style:"solid",color:o.tokens.outlineDimmest,width:1}),l.rcss.borderRadius(8)],radio:[l.rcss.pt(2)],labelAndIconRow:[l.rcss.rowWithGap(4),l.rcss.align.center],label:[l.rcss.flex.shrink(1)],unauthorizedText:[l.rcss.color.redDefault]});var h=((t=h||{}).Public="public",t.Private="private",t);e.s(["default",0,function({isPrivate:e,setIsPrivate:t,privacyAuthz:{privateRepl:s,publicRepl:l},org:h}){let x=(0,c.useIdSeed)(),f=x("private"),y=x("public"),v=h.type===n.OrgstypeEnumType.Personal?"Only you":`Only ${h.name} workspace members`,C=`${v} can see this Repl. You choose who can edit.`;return(0,r.jsxs)(m.View,{gap:8,children:[(0,r.jsx)(i.Label,{htmlFor:"privacy",children:(0,r.jsx)(p.Text,{children:"Privacy"})}),(0,r.jsxs)(u.RadioGroup,{tag:"fieldset",css:g.radioGroup,name:"privacy",value:e?"private":"public",onChange:e=>{t("private"===e.target.value)},children:[(0,r.jsxs)(m.View,{css:g.radioContainer,children:[(0,r.jsx)(m.View,{css:g.radio,children:(0,r.jsx)(u.Radio,{id:f,value:"private",disabled:!s.isAuthorized})}),(0,r.jsxs)(m.View,{grow:!0,shrink:!0,gap:4,children:[(0,r.jsx)(i.Label,{htmlFor:f,children:(0,r.jsxs)(m.View,{css:g.labelAndIconRow,children:[(0,r.jsxs)(p.Text,{multiline:!1,css:g.label,color:s.isAuthorized?"default":"dimmer",children:["Internal to ",h.name]}),(0,r.jsx)(d.Avatar,{src:h.image??null,username:h.name,size:16})]})}),(0,r.jsx)(p.Text,{multiline:!0,variant:"small",color:"dimmer",css:!s.isAuthorized&&g.unauthorizedText,children:s.isAuthorized?C:s.message})]})]}),(0,r.jsxs)(m.View,{css:g.radioContainer,children:[(0,r.jsx)(m.View,{css:g.radio,children:(0,r.jsx)(u.Radio,{id:y,value:"public",disabled:!l.isAuthorized})}),(0,r.jsxs)(m.View,{grow:!0,shrink:!0,gap:4,children:[(0,r.jsx)(i.Label,{htmlFor:y,children:(0,r.jsxs)(m.View,{css:g.labelAndIconRow,children:[(0,r.jsx)(p.Text,{color:l.isAuthorized?"default":"dimmer",children:"Public to Replit"}),(0,r.jsx)(a.default,{size:16,color:l.isAuthorized?o.tokens.foregroundDefault:o.tokens.foregroundDimmer})]})}),(0,r.jsx)(p.Text,{multiline:!0,variant:"small",color:"dimmer",css:!l.isAuthorized&&g.unauthorizedText,children:l.isAuthorized?"Anyone can see this Repl. You choose who can edit.":l.message})]})]})]})]})}])},200527,e=>{"use strict";function t(e,t){return e?t?"Only you and your team can see and edit this App.":"Only you can see and edit this App.":"Anyone can view and fork this App."}e.s(["default",()=>t])},186558,e=>{"use strict";var t=e.i(276385),r=e.i(399245),i=e.i(995691),n=e.i(416298),a=e.i(809414),o=e.i(200527),s=e.i(480028),l=e.i(446530),c=e.i(613355),d=e.i(428596),u=e.i(734882),p=e.i(960178),m=e.i(625484);let g=({isPrivate:e,isTeam:r})=>(0,t.jsx)(p.Text,{variant:"small",color:"dimmest",children:(0,o.default)(e,r)}),h=(0,l.cssRecord)({radioGroup:[{[c.media.max("tabletMin")]:[c.rcss.colWithGap(8)],[c.media.min("tabletMin")]:[c.rcss.display.grid,{gridTemplateColumns:"1fr 1fr",gap:s.tokens.space8,gridAutoFlow:"column"}]}],radioContainer:[c.rcss.rowWithGap(8),c.rcss.align.start,c.rcss.p(8),c.rcss.border({style:"solid",color:s.tokens.outlineDimmest,width:1}),c.rcss.borderRadius(8)],radio:[c.rcss.pt(2)],labelAndIconRow:[c.rcss.rowWithGap(4),c.rcss.align.center],label:[c.rcss.flex.shrink(1)]}),x=({isPrivate:e,setIsPrivate:n,privacyAuthz:o})=>{let l=(0,d.useIdSeed)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Label,{for:l("privacy"),children:"Privacy"}),(0,t.jsxs)(u.RadioGroup,{tag:"fieldset",css:h.radioGroup,name:l("privacy"),value:e?"Private":"Public",onChange:e=>{n("Private"===e.target.value)},dataCy:"create-repl-privacy-toggle",children:[(0,t.jsxs)(m.View,{css:h.radioContainer,children:[(0,t.jsx)(m.View,{css:h.radio,children:(0,t.jsx)(u.Radio,{id:l("public"),value:"Public",disabled:!o.publicRepl.isAuthorized,dataCy:"privacy-toggle-public"})}),(0,t.jsxs)(m.View,{grow:!0,shrink:!0,gap:4,children:[(0,t.jsx)(a.Label,{for:l("public"),children:(0,t.jsxs)(m.View,{css:h.labelAndIconRow,children:[(0,t.jsx)(r.default,{size:16,color:o.publicRepl.isAuthorized?s.tokens.foregroundDefault:s.tokens.foregroundDimmer}),(0,t.jsx)(p.Text,{color:o.publicRepl.isAuthorized?"default":"dimmer",children:"Public"})]})}),(0,t.jsx)(p.Text,{multiline:!0,variant:"small",color:"dimmer",children:o.publicRepl.isAuthorized?"Anyone can view and fork this App.":o.publicRepl.message})]})]}),(0,t.jsxs)(m.View,{css:h.radioContainer,children:[(0,t.jsx)(m.View,{css:h.radio,children:(0,t.jsx)(u.Radio,{id:l("private"),value:"Private",dataCy:"privacy-toggle-private",onChange:e=>{e.preventDefault(),n(!0)}})}),(0,t.jsxs)(m.View,{grow:!0,shrink:!0,gap:4,children:[(0,t.jsx)(a.Label,{for:l("private"),children:(0,t.jsxs)(m.View,{css:h.labelAndIconRow,children:[(0,t.jsx)(i.default,{}),(0,t.jsx)(p.Text,{multiline:!1,css:h.label,color:o.privateRepl.isAuthorized?"default":"dimmer",children:"Private"})]})}),(0,t.jsx)(p.Text,{multiline:!0,variant:"small",color:"dimmer",children:"Only you can see and edit this App."})]})]})]})]})};function f({isPrivate:e,setIsPrivate:r,privacyAuthz:i,isTeam:a}){return i.privateRepl.isAuthorized||i.publicRepl.isAuthorized?(0,t.jsxs)(m.View,{gap:8,children:[(0,t.jsx)(x,{isPrivate:e,setIsPrivate:r,privacyAuthz:i}),(0,t.jsx)(g,{isPrivate:e,isTeam:a})]}):(0,t.jsx)(m.View,{gap:8,children:(0,t.jsxs)(p.Text,{variant:"small",color:"dimmest",children:[(0,t.jsx)(n.default,{size:12})," ",i.publicRepl.message]})})}e.s(["Privacy",()=>f])},190362,e=>{e.v({blueText:"PlanToggle-module__N-TNpG__blueText"})},328745,e=>{"use strict";var t=e.i(276385),r=e.i(600894),i=e.i(480028),n=e.i(721321),a=e.i(960178),o=e.i(625484),s=e.i(190362);e.s(["default",0,({planPeriod:e,onChange:l,primary:c,highestYearlyDiscountPercent:d})=>{let u=(0,t.jsxs)(o.View,{row:!0,gap:8,align:"center",children:[(0,t.jsx)(a.Text,{children:"Yearly"}),(0,t.jsxs)(o.View,{row:!0,gap:4,align:"center",children:[(0,t.jsx)(o.View,{children:(0,t.jsx)(r.default,{color:i.tokens.accentPrimaryStronger})}),(0,t.jsxs)(a.Text,{variant:"small",clsx:s.default.blueText,children:["Up to ",d,"% off"]})]})]});return(0,t.jsxs)(n.ButtonGroup,{onChange:l,row:!0,value:e,name:"periodToggle",primary:c,children:[(0,t.jsx)(n.ButtonGroupItem,{id:"monthly",text:"Monthly",value:"monthly"}),(0,t.jsx)(n.ButtonGroupItem,{id:"yearly",text:d?u:"Yearly",value:"yearly"})]})}])},435209,e=>{"use strict";var t=e.i(973245),r=e.i(304277);e.i(566901);let i={},n=t.gql`
    query CheckoutCurrentUser {
  currentUser {
    id
    billingInfo {
      planInfo {
        interval
      }
    }
  }
}
    `;function a(e){let t={...i,...e};return r.useQuery(n,t)}e.s(["useCheckoutCurrentUserQuery",()=>a])},548137,e=>{"use strict";var t=e.i(750854),r=e.i(389959),i=e.i(973245),n=e.i(951262);let a={},o=i.gql`
    mutation ConfirmRazorpayCheckoutForUpgrade($input: ConfirmRazorpayCheckoutInput!) {
  confirmRazorpayCheckout(input: $input)
}
    `,s=i.gql`
    mutation StartRazorpayUpgrade($input: StartRazorpayUpgradeInput!) {
  startRazorpayUpgrade(input: $input) {
    __typename
    ... on StartRazorpayUpgradeSuccess {
      checkoutToken
      keyId
      amount
      currency
      prefillName
      prefillEmail
      checkoutSessionId
    }
    ... on UpgradeBlockedPastDue {
      hostedInvoiceUrl
    }
    ... on UpgradeBlockedPendingUpdate {
      hostedInvoiceUrl
    }
    ... on UserError {
      message
    }
    ... on UnauthorizedError {
      message
    }
  }
}
    `;var l=e.i(596139),c=e.i(222342),d=e.i(438073);function u({onBeforeOpen:e,onDismiss:i}={}){let p,m,[g,h]=(0,r.useState)(!1),{showError:x}=(0,c.default)(),f=(0,t.useRouter)(),y=(0,r.useRef)(f);y.current=f;let[v]=(p={...a,...void 0},n.useMutation(s,p)),[C]=(m={...a,...void 0},n.useMutation(o,m));return{openUpgrade:(0,r.useCallback)(async({customerId:t,fromPriceId:r,targetPriceId:n})=>{h(!0);let a=!1;try{let{data:o}=await v({variables:{input:{customerId:t,fromPriceId:r,targetPriceId:n}}}),s=o?.startRazorpayUpgrade;if(s?.__typename==="UpgradeBlockedPastDue")return void x("Your account has a past-due invoice. Please pay it before upgrading.");if(s?.__typename==="UpgradeBlockedPendingUpdate")return void x("A previous plan change is still processing. Please try again shortly.");if(s?.__typename==="UserError"||s?.__typename==="UnauthorizedError")return void x(s.message??"Unable to start upgrade. Please try again.");if(s?.__typename!=="StartRazorpayUpgradeSuccess"||!s.keyId||!s.checkoutToken||null==s.amount||!s.currency)return void x("Unable to start upgrade. Please try again.");if(await (0,d.loadRazorpayScript)(),!window.RZPCrossBorderPrePay)return void x("Unable to load payment provider. Please try again.");e&&(e(),a=!0,await new Promise(e=>setTimeout(e,250))),new window.RZPCrossBorderPrePay({key:s.keyId,amount:s.amount??void 0,currency:s.currency??void 0,name:d.MERCHANT_NAME,image:d.MERCHANT_IMAGE,theme:d.MERCHANT_THEME,checkout_session_id:s.checkoutToken,prefill:{name:s.prefillName??void 0,email:s.prefillEmail??void 0}},{onPaymentEvent:e=>{if("payment.success"!==e.event)return;let t=e.payment,r=e.razorpay_payment_id??t?.razorpay_payment_id;r&&s.checkoutSessionId&&C({variables:{input:{checkoutSessionId:s.checkoutSessionId,razorpayPaymentId:r}}}).catch(()=>{});let i=(0,l.getCheckoutablePriceByExternalId)(n),a=i?.planPrefix===l.proPlanPrefix?"welcomeToPro":"welcomeToCore";y.current.push({pathname:"/stripe-upgrade-success",query:{targetPriceId:n,welcome:a}})},onError:()=>{x("Payment failed. Please try again."),i?.()},onDismiss:()=>{i?.()}}).open()}catch{x("Upgrade failed. Please try again."),a&&i?.()}finally{h(!1)}},[C,v,e,i,x]),isLoading:g}}e.s(["useRazorpayUpgrade",()=>u],548137)},40192,e=>{e.v({container:"Checkout-module__LWYusG__container",fullscreen:"Checkout-module__LWYusG__fullscreen",header:"Checkout-module__LWYusG__header",regionSelectorHeader:"Checkout-module__LWYusG__regionSelectorHeader",taxContainer:"Checkout-module__LWYusG__taxContainer",taxText:"Checkout-module__LWYusG__taxText",titleRow:"Checkout-module__LWYusG__titleRow",titleText:"Checkout-module__LWYusG__titleText"})},534842,e=>{"use strict";var t=e.i(276385),r=e.i(389959),i=e.i(435209),n=e.i(138716),a=e.i(596139),o=e.i(858248),s=e.i(709485),l=e.i(548137),c=e.i(236319),d=e.i(613355),u=e.i(972152),p=e.i(85742),m=e.i(12034),g=e.i(960178),h=e.i(625484);let x={[u.CHECKOUT_PAYMENT_PROVIDER_RAZORPAY]:"🇮🇳 India"};function f({provider:e,isGlobalSelected:r,onChange:i,onOpenChange:n,isDisabled:a}){let o=[{id:"regional",label:x[e]??e},{id:"global",label:"🌍 Global"}],s=r?"global":"regional",l=o.find(e=>e.id===s)?.label??"";return(0,t.jsxs)(h.View,{row:!0,gap:8,align:"center",justify:"end",children:[(0,t.jsx)(g.Text,{color:"dimmer",variant:"small",children:"Select region:"}),(0,t.jsx)(m.Select,{"aria-label":"Payment region",selectedKey:s,onSelectionChange:e=>i("global"===e),onOpenChange:n,isDisabled:a,selectValue:()=>(0,t.jsx)(g.Text,{variant:"small",children:l}),children:o.map(e=>(0,t.jsx)(p.BaseListBoxItem,{id:e.id,textValue:e.label,children:(0,t.jsx)(g.Text,{children:e.label})},e.id))})]})}var y=e.i(140487),v=e.i(328111),C=e.i(61965),R=e.i(328745),w=e.i(40192);e.s(["default",0,({defaultSelectedPlanPeriod:e,highlightedPlan:u,defaultSelectedTier:p,analyticsContext:m,headingText:x="Compare Replit plans",subHeadingText:_="Autonomy for all. Choose the best plan for you.",isFullscreen:j=!0,onBack:b,onFreeClick:k,onProClick:A,onTeamsClick:P,redirectPath:T,onBeforeRegionalCheckout:I,onRegionalCheckoutDismiss:z,hideHeader:O,overrideOpenRazorpayUpgrade:S,overrideIsRazorpayUpgradeLoading:E})=>{let{data:U}=(0,i.useCheckoutCurrentUserQuery)(),N=(0,a.toPlanPeriod)(U?.currentUser?.billingInfo?.planInfo?.interval),[M,D]=(0,r.useState)(e??N??"monthly");(0,r.useEffect)(()=>{null!=e?D(e):N&&D(N)},[e,N]);let L=(0,v.usePlanCTAs)(),{regionSelector:V,openCheckout:F,isLoading:$}=function({onSuccess:e,onBeforeOpen:i,onDismiss:n,onRegionSelectOpenChange:a}={}){let[o,s]=(0,r.useState)(!1),{openCheckout:l,isLoading:u,provider:p}=(0,c.useRegionalCheckout)({onSuccess:e,onBeforeOpen:i,onDismiss:n}),m=o?null:l,g=d.DefaultModalZIndex+3e3;return{regionSelector:null!==p?(0,t.jsx)(f,{provider:p,isGlobalSelected:o,onChange:s,onOpenChange:e=>{a?.(e),e&&requestAnimationFrame(()=>{let e=document.querySelectorAll("[data-rac-popover]"),t=e[e.length-1];t&&(t.style.zIndex=String(g));let r=t?.previousElementSibling;r?.getAttribute("aria-hidden")==="true"&&(r.style.zIndex=String(g-1))})},isDisabled:u}):null,openCheckout:m,isLoading:u}}({onBeforeOpen:I,onDismiss:z}),{openUpgrade:G,isLoading:B}=(0,l.useRazorpayUpgrade)({onBeforeOpen:S?void 0:I,onDismiss:S?void 0:z});return(0,r.useEffect)(()=>{(0,o.track)(s.events.CORE_MEMBERSHIP_MODAL_USED,{action:"modal_viewed",source:m.upgrade.context,surface:m.upgrade.surface,planType:M}),(0,o.track)(s.events.SEEN_YEARLY_PRICE,{surface:m.upgrade.surface??"membership-modal",context:m.upgrade.context})},[m.upgrade.context,m.upgrade.surface,M]),(0,t.jsxs)(t.Fragment,{children:[b?(0,t.jsx)(h.View,{row:!0,children:(0,t.jsx)(y.Button,{onClick:b,text:"Back",iconLeft:(0,t.jsx)(n.default,{})})}):null,(0,t.jsxs)(h.View,{dataCy:"core-modal",clsx:[w.default.container,j&&w.default.fullscreen],align:"center",gap:j?36:24,children:[!O&&(0,t.jsxs)(h.View,{clsx:w.default.header,children:[(0,t.jsxs)("div",{clsx:w.default.titleRow,children:[(0,t.jsx)("div",{clsx:w.default.titleText,children:(0,t.jsx)(g.Header,{variant:"headerDefault",level:1,children:x})}),null!==V&&null==N?(0,t.jsx)("div",{clsx:w.default.regionSelectorHeader,children:V}):null]}),(0,t.jsx)(g.Text,{color:"dimmer",children:_})]}),O&&null!==V&&null==N?(0,t.jsx)(h.View,{row:!0,width:"100%",justify:"end",children:V}):null,(0,t.jsx)(h.View,{row:!0,gap:8,children:(0,t.jsx)(R.default,{planPeriod:M,onChange:D,highestYearlyDiscountPercent:L.Core.highestYearlyDiscountPercent})}),(0,t.jsxs)(h.View,{px:12,children:[(0,t.jsx)(C.default,{planPeriod:M,highlightedPlan:u,defaultSelectedTier:p,analyticsContext:m,onFreeClick:k,onProClick:A,onTeamsClick:P,redirectPath:T,regionalOpenCheckout:F,isRegionalCheckoutLoading:$,openRazorpayUpgrade:S??G,isRazorpayUpgradeLoading:E??B}),(0,t.jsx)(h.View,{align:"center",justify:"center",clsx:w.default.taxContainer,children:(0,t.jsx)(g.Text,{color:"dimmer",clsx:w.default.taxText,variant:"small",children:"*Prices are subject to tax depending on your location. Replit Agent is powered by large language models. While it can produce powerful results, its behavior is probabilistic - meaning it may occasionally make mistakes."})})]})]})]})}],534842)},501033,e=>{"use strict";var t=e.i(276385),r=e.i(596139),i=e.i(173703),n=e.i(534842);e.s(["default",0,({shouldBlockReplForm:e,onClose:a,context:o})=>(0,t.jsx)(i.ShadesSurface,{py:10,elevate:!1,children:(0,t.jsx)(n.default,{analyticsContext:{upgrade:{context:o??"create_repl_modal"}},headingText:"Need to create more Apps?",subHeadingText:`Upgrade to Replit ${r.corePlanName} for unlimited Apps`,isFullscreen:!1,onBack:e?void 0:a})})])},420802,e=>{"use strict";e.s(["REPL_DESCRIPTION_MAX_LENGTH",0,1e3])},441788,e=>{"use strict";var t=e.i(276385);e.i(750854);var r=e.i(389959),i=e.i(192479);e.i(956111);var n=e.i(453644),a=e.i(446530),o=e.i(613355);e.i(739521);var s=e.i(960178),l=e.i(625484);let c=(0,a.cssRecord)({authModal:[o.rcss.maxWidth("100%")],modalDescription:[o.rcss.color.foregroundDimmer,o.rcss.maxWidth("60%"),o.rcss.textAlign.center]});e.s(["AuthDialogContent",0,({loginTitle:e,signupTitle:a,description:o,tracking:d,onSuccess:u=()=>{}})=>{let[p,m]=(0,r.useState)("signup");(0,r.useEffect)(()=>{(0,n.loadStytchDfpScript)()},[]);let g=(0,r.useMemo)(()=>"login"===p?e:a,[p,e,a]);return(0,t.jsxs)(l.View,{align:"center",justify:"center",gap:24,px:16,py:32,css:c.authModal,"data-cy":"auth-modal",children:[g?(0,t.jsx)(s.Header,{variant:"headerDefault",level:1,children:g}):null,o?(0,t.jsx)(s.Text,{variant:"subheadDefault",css:c.modalDescription,children:o}):null,(0,t.jsx)(i.default,{customHeader:void 0!==g,isModal:!0,mode:p,onModeChange:e=>m(e),onSuccess:u,seededEmail:void 0,initialTenantId:void 0,tracking:d})]})},"authModalParam",0,"authModal"])},464092,e=>{"use strict";var t=e.i(276385),r=e.i(750854),i=e.i(389959),n=e.i(441788),a=e.i(830675),o=e.i(973245),s=e.i(23293),l=e.i(304277);e.i(566901);let c={},d=o.gql`
    fragment ForkModalCurrentUser on CurrentUser {
  id
  url
  image
  username
  fullName
  ...ReplOwnerCurrentUser
  teams {
    id
    ...ReplOwnerTeam
  }
}
    ${s.ReplOwnerCurrentUserFragmentDoc}
${s.ReplOwnerTeamFragmentDoc}`,u=o.gql`
    query ForkModal($originReplId: String!) {
  currentUser {
    id
    ...ForkModalCurrentUser
  }
  getRepl(id: $originReplId) {
    ... on Repl {
      id
      authorizations {
        viewDatabase {
          isAuthorized
          message
        }
      }
      connectors {
        __typename
        ... on ReplConnectors {
          connectorNames
        }
        ... on Error {
          message
        }
      }
    }
  }
}
    ${d}`;var p=e.i(269848),m=e.i(898039),g=e.i(507491),h=e.i(778549),x=e.i(486898),f=e.i(90319),y=e.i(427368),v=e.i(917063),C=e.i(882793),R=e.i(58261),w=e.i(480028),_=e.i(446530),j=e.i(140487),b=e.i(739521),k=e.i(396776),A=e.i(960178),P=e.i(625484),T=e.i(211397);let I=(0,_.cssRecord)({connectorRow:{border:"1px solid",borderColor:w.tokens.outlineDefault,borderRadius:"8px"}});function z({connectorNames:e,onRemix:r,onCancel:n,isForking:a=!1,orgId:o}){let s=!!o,{connections:l,connectorConfigs:c,token:d,loading:u,refetch:w}=(0,R.useConnectorContext)(),[_,z]=(0,i.useState)(!1),[O,S]=(0,i.useState)(""),[E,U]=(0,i.useState)(null),[N,M]=(0,i.useState)(!1),[D,L]=(0,i.useState)(!1),[V]=(0,g.useCreateConnectionMutation)(),[F]=(0,h.useCreateOrgConnectionMutation)(),$=(0,i.useMemo)(()=>{let t=e=>c.find(t=>t.connectorName===e)||null,r=[];return[...new Set(e)].forEach(e=>{if((0,C.isAppScopedConnector)(e)){let i=t(e);r.push({connectorName:e,displayName:i?.displayName??e.replace(/_/g," ").toLowerCase().replace(/\b\w/g,e=>e.toUpperCase()),iconPath:i?.iconPath,isConfigured:!1,isAppScoped:!0,connectorType:"connectorConfig",connectorConfig:i??void 0});return}let i=l.find(t=>t.connectorName===e);if(i)r.push({connectorName:e,displayName:i.displayName,iconPath:i.iconPath,isConfigured:!0,isAppScoped:!1,connectorType:"connection",connectionId:i.connectionId});else{let i=t(e);r.push({connectorName:e,displayName:i?.displayName??e.replace(/_/g," ").toLowerCase().replace(/\b\w/g,e=>e.toUpperCase()),iconPath:i?.iconPath,isConfigured:!1,isAppScoped:!1,connectorType:"connectorConfig",connectorConfig:i??void 0})}}),r},[e,l,c]),G=(0,i.useMemo)(()=>$.every(e=>e.isConfigured||e.isAppScoped),[$]),B=(0,i.useMemo)(()=>$.filter(e=>e.isConfigured&&e.connectionId).map(e=>e.connectionId).filter(e=>void 0!==e),[$]),W=(0,i.useMemo)(()=>$.filter(e=>e.isAppScoped).map(e=>e.displayName),[$]),q=W.length>0,Y=(0,i.useCallback)(async e=>{if("connect.connection-connected"===e.name){if(!s){await V({variables:{input:{connectionId:e.data.connection_id,orgId:null}}}),await w();return}o&&(await F({variables:{input:{connectionId:e.data.connection_id,orgId:o}}}),await w())}},[F,V,s,o,w]),H=(0,i.useCallback)((e,t)=>{z(e)},[]);return u?(0,t.jsx)(P.View,{gap:16,children:(0,t.jsx)(A.Text,{children:"Loading connector information..."})}):D?(0,t.jsxs)(P.View,{gap:16,children:[(0,t.jsx)(A.Text,{variant:"subheadDefault",children:"Some connectors are not set up"}),(0,t.jsx)(A.Text,{color:"dimmer",children:"You have not configured all required connectors. Your app may not work as expected. Do you want to continue without setting up all connectors?"}),(0,t.jsxs)(P.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(j.Button,{variant:"nofill",text:"Go back",type:"button",onClick:()=>L(!1)}),(0,t.jsx)(j.Button,{colorway:"primary",text:"Continue without connectors",type:"button",onClick:()=>{L(!1),r(B)}})]})]}):(0,t.jsxs)(P.View,{gap:16,children:[(0,t.jsx)(A.Text,{children:"This template uses connectors to integrate with external services. To ensure your remixed app works properly, please make sure you have all required connectors configured."}),(0,t.jsx)(P.View,{gap:12,children:$.map(e=>(0,t.jsxs)(P.View,{row:!0,align:"center",justify:"space-between",gap:16,p:12,css:I.connectorRow,children:[(0,t.jsxs)(P.View,{row:!0,align:"start",gap:12,shrink:!0,children:[e.iconPath?(0,t.jsx)(T.default,{width:24,height:24,src:e.iconPath,alt:e.displayName}):null,(0,t.jsxs)(P.View,{gap:4,shrink:!0,children:[(0,t.jsx)(A.Text,{variant:"subheadDefault",children:e.displayName}),C.CONNECTOR_DESCRIPTIONS[e.connectorName]?(0,t.jsx)(A.Text,{variant:"small",color:"dimmer",children:C.CONNECTOR_DESCRIPTIONS[e.connectorName]}):null]})]}),e.isConfigured?(0,t.jsxs)(P.View,{row:!0,align:"center",gap:8,shrink:0,children:[(0,t.jsx)(x.default,{size:8,color:"green"}),(0,t.jsx)(A.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Active"})]}):e.isAppScoped?(0,t.jsxs)(P.View,{row:!0,align:"center",gap:8,shrink:0,children:[(0,t.jsx)(x.default,{size:8,color:"grey"}),(0,t.jsx)(A.Text,{variant:"small",color:"dimmer",multiline:!1,children:"Pending setup"})]}):(0,t.jsx)(j.Button,{iconLeft:(0,t.jsx)(f.default,{}),variant:"outlined",colorway:"primary",size:"small",text:"Sign in",onClick:()=>{var t;(t=e).connectorConfig&&!s&&"api_key"===t.connectorConfig.type?(U(t.connectorConfig),M(!0)):(S(t.connectorName),z(!0))}})]},e.connectorName))}),q?(0,t.jsx)(k.StatusBanner,{colorway:"primary",text:`${W.join(", ")} ${1===W.length?"requires":"require"} app-specific setup. After remixing, type "/" in Agent chat to add ${1===W.length?"this integration":"these integrations"}.`}):null,G?null:(0,t.jsx)(P.View,{}),(0,t.jsxs)(P.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(j.Button,{onClick:n,text:"Cancel",type:"button"}),(0,t.jsx)(j.Button,{dataCy:"fork-btn",colorway:"primary",type:"button",onClick:()=>{G?r(B):L(!0)},disabled:a,text:"Remix App",loading:a,iconLeft:a?(0,t.jsx)(p.default,{}):(0,t.jsx)(m.default,{})})]}),d?(0,t.jsx)(v.AddIntegrationModal,{isOpen:_,setIsOpen:H,token:d,selectedConnector:O,onEvent:Y}):null,E&&N?(0,t.jsx)(b.Modal,{isOpen:!0,onRequestClose:()=>{M(!1),U(null)},children:(0,t.jsx)(y.ConnectorSetupForm,{connector:E,onComplete:async()=>{M(!1),U(null),await w()}})}):null]})}var O=e.i(809414),S=e.i(505549),E=e.i(186558),U=e.i(262522),N=e.i(298435),M=e.i(173532),D=e.i(712903),L=e.i(596139),V=e.i(263481),F=e.i(613355);let $=({isIndividualOwner:e,showUpgradeForm:r,replLimitCtx:i})=>{let{showUpgradeModal:n}=(0,V.useUpgradeModal)();if(!e||"loading"===i.type||"error"===i.type)return null;let{replCount:a,shouldEnforceUsersOverLimit:o,isStarterUser:s,starterPlanReplLimit:l}=i;if(!s||!o)return null;let c=a>=l?`(${a}/${l}) You've hit the limit for Apps in the Starter Plan. Upgrade to Replit ${L.corePlanName} for unlimited Apps!`:`You have created ${a}/${l} Apps. Click here to upgrade to Replit ${L.corePlanName} for unlimited Apps!`;return(0,t.jsx)(P.View,{tag:"button",css:G.bannerWrapper,onClick:async e=>{e.preventDefault(),r?r():await n({onUpgradeConfirm:i.refetch})},children:(0,t.jsx)(k.StatusBanner,{icon:(0,t.jsx)(D.default,{}),colorway:"yellow",text:c})})},G=(0,_.cssRecord)({bannerWrapper:[F.rcss.cursor.pointer,F.rcss.borderRadius(),F.rcss.textAlign.left]});var B=e.i(968783),W=e.i(322823),q=e.i(420802),Y=e.i(428596),H=e.i(714165),Q=e.i(127227),K=e.i(607278),X=e.i(836224);let Z=(0,_.cssRecord)({loadingAndErrorWrapper:[F.rcss.display.flex,F.rcss.flex.growAndShrink(1),F.rcss.center,F.rcss.gap(8),F.rcss.py(16)],fieldLabel:[F.rcss.flex.row,F.rcss.justify.spaceBetween,F.rcss.align.end],fieldError:[F.rcss.color.accentNegativeStronger],descriptionTextArea:[F.rcss.minHeight(96),F.rcss.maxHeight(128),{resize:"vertical"}]}),J=e=>{let{onFork:r,hideModal:n,initialTitle:a,initialDescription:o="",currentUser:s,template:l,keepOpenOnFork:c=!1,isForking:d,orgId:u,originReplId:g,replLimitCtx:h,onReachedReplLimit:x,hasConnectors:f,connectorNames:y,canCopyDatabase:v}=e,[C,R]=(0,i.useState)("form"),w=(0,i.useRef)(null),_=(0,Y.useIdSeed)(),b=(0,B.useCurrentUserStoredOrgContext)().orgId,[T]=(0,U.useOwner)(s,u??b),{isPrivate:I,setIsPrivate:M,privacyAuthz:D,isValidPrivacy:L}=(0,N.usePrivate)(T,g),V="CurrentUser"===T.__typename&&T.id===s.id,F=V&&"data"===h.type&&!h.canCreateRepl;(0,i.useEffect)(()=>{F&&x()},[F,x]);let G=(0,W.useFormField)(a,e=>{if(e&&e.length>60)return{message:"Must be no longer than 60 characters"}}),J=(0,W.useFormField)(o,e=>{if(e&&e.length>q.REPL_DESCRIPTION_MAX_LENGTH)return{message:`Must be no longer than ${q.REPL_DESCRIPTION_MAX_LENGTH} characters`}}),ee=(0,W.useFormField)(!0,()=>void 0);(0,i.useEffect)(()=>{w.current&&w.current.focus()},[w]);let et="Team"===T.__typename?T.id:null,er="Org"===T.__typename?T.name:T.username,ei=T.image??null,en=!!(G.error||J.error)||d||!L,ea=(0,i.useMemo)(()=>f?{text:"Continue",icon:void 0}:l?{text:"Use Framework",icon:(0,t.jsx)(m.default,{})}:{text:"Remix App",icon:(0,t.jsx)(m.default,{})},[f,l]);return F?null:f&&"connectors"===C?(0,t.jsxs)(P.View,{gap:16,children:[(0,t.jsx)(A.Header,{variant:"headerDefault",level:2,children:l?`Create with ${a}`:"Remix App"}),(0,t.jsx)(z,{connectorNames:y,onRemix:e=>{!(G.validate()||J.validate())&&(r({teamId:et,title:G.value.trim(),description:J.value,isPrivate:I,orgId:"Org"===T.__typename?T.id:void 0,connectionIds:e,copyDatabase:v?ee.value:void 0}),c||n())},isForking:d,onCancel:n,orgId:b})]}):(0,t.jsx)("form",{onSubmit:e=>{if(e.preventDefault(),!(G.validate()||J.validate())){if(f&&"form"===C)return void R("connectors");r({teamId:et,title:G.value.trim(),description:J.value,isPrivate:I,orgId:"Org"===T.__typename?T.id:void 0,connectionIds:[],copyDatabase:v?ee.value:void 0}),c||n()}},children:(0,t.jsxs)(P.View,{gap:16,children:[(0,t.jsx)(A.Header,{variant:"headerDefault",level:2,children:l?`Create with ${a}`:"Remix App"}),l?(0,t.jsx)(k.StatusBanner,{colorway:"yellow",text:(0,t.jsx)(P.View,{children:(0,t.jsxs)(A.Text,{variant:"small",children:["When starting from a template, Agent provides fewer guardrails and automated workflows. You may encounter unexpected issues that require manual troubleshooting or code editing."," ",(0,t.jsx)("a",{href:"https://docs.replit.com/replitai/general-agent",target:"_blank",children:"Learn more"})]})})}):null,(0,t.jsxs)(P.View,{gap:16,children:[(0,t.jsxs)(P.View,{gap:4,children:[(0,t.jsxs)(P.View,{css:Z.fieldLabel,children:[(0,t.jsx)(O.Label,{for:_("name"),children:"Name"}),(0,t.jsx)(X.default,{maxLength:60,value:G.value,hideLabel:!0})]}),(0,t.jsx)(K.Input,{ref:w,className:"repl-title-input",placeholder:"Name your App",onChange:e=>G.setValue(e.target.value),onFocus:e=>e.target.select(),value:G.value,onBlur:G.handleBlur,id:_("name")}),G.error?(0,t.jsx)(A.Text,{css:Z.fieldError,multiline:!1,children:G.error.message}):null]}),(0,t.jsxs)(P.View,{gap:4,children:[(0,t.jsxs)(P.View,{css:Z.fieldLabel,children:[(0,t.jsx)(O.Label,{for:_("description"),children:"Description"}),(0,t.jsx)(X.default,{hideLabel:!0})]}),(0,t.jsx)(K.MultiLineInput,{maxLength:q.REPL_DESCRIPTION_MAX_LENGTH,value:J.value,onChange:e=>J.setValue(e.target.value),placeholder:"What does this App do?",css:Z.descriptionTextArea,id:_("description")})]}),v?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.View,{css:Z.fieldLabel,children:(0,t.jsx)(O.Label,{for:_("copyDatabase"),children:"Database"})}),(0,t.jsxs)(P.View,{row:!0,gap:8,align:"start",children:[(0,t.jsx)(Q.Checkbox,{id:_("copyDatabase"),checked:ee.value,onChange:e=>ee.setValue(e),"aria-label":"Copy database data to new App"}),(0,t.jsxs)(P.View,{shrink:!0,children:[(0,t.jsx)("label",{htmlFor:_("copyDatabase"),children:(0,t.jsx)(A.Text,{variant:"small",multiline:!1,children:"Copy data from original App"})}),(0,t.jsx)(A.Text,{variant:"small",color:"dimmest",children:"The remixed App's database will be initialized with your current data and schema. Note that this is a copy and any changes you make to the remixed App's database will not affect your original database."})]})]})]}):null]}),"Org"===T.__typename?(0,t.jsx)(S.default,{isPrivate:I,setIsPrivate:M,privacyAuthz:D,org:T}):(0,t.jsx)(E.Privacy,{isPrivate:I,setIsPrivate:M,privacyAuthz:D,isTeam:!!et}),(0,t.jsxs)(P.View,{gap:8,children:[(0,t.jsx)(A.Text,{children:"Owner"}),(0,t.jsxs)(P.View,{row:!0,align:"center",gap:8,children:[(0,t.jsx)(H.Avatar,{src:ei,size:16,username:er}),(0,t.jsx)(A.Text,{children:er})]})]}),(0,t.jsx)($,{replLimitCtx:h,isIndividualOwner:V}),(0,t.jsxs)(P.View,{row:!0,gap:12,justify:"end",children:[(0,t.jsx)(j.Button,{onClick:n,text:"Cancel",type:"button"}),(0,t.jsx)(j.Button,{dataCy:"fork-btn",colorway:"primary",type:"submit",disabled:"loading"===h.type||F||en,text:ea.text,iconLeft:d||"loading"===h.type?(0,t.jsx)(p.default,{}):ea.icon})]})]})})};function ee({onReachedReplLimit:e,...r}){var i;let n,{data:o,loading:s,error:d}=(i={variables:{originReplId:r.originReplId},fetchPolicy:"cache-and-network",ssr:!1,onError:e=>{a.withScope(t=>{t.setTag("fork-modal",!0),a.captureException(e)})}},n={...c,...i},l.useQuery(u,n)),m=(0,M.useReplLimit)();if(s&&!o||"loading"===m.type)return(0,t.jsxs)(P.View,{css:Z.loadingAndErrorWrapper,children:[(0,t.jsx)(p.default,{}),(0,t.jsx)(A.Text,{color:"dimmer",multiline:!1,children:"Loading template data..."})]});if(d)return(0,t.jsx)(A.Text,{multiline:!1,children:"Something went wrong."});if(!o)return null;let{currentUser:g}=o;if(!g)return a.captureException(Error("ForkModal was presented to an unauthed user")),(0,t.jsx)(k.StatusBanner,{colorway:"negative",text:"You must be logged in to fork this App"});let h=o.getRepl,x=h?.__typename==="Repl"&&h.connectors?.__typename==="ReplConnectors"&&h.connectors.connectorNames.length>0,f=h?.__typename==="Repl"&&h.connectors?.__typename==="ReplConnectors"?h.connectors.connectorNames:[],y=h?.__typename==="Repl"&&h.authorizations?.viewDatabase?.isAuthorized;return(0,t.jsx)(J,{...r,canCopyDatabase:y,replLimitCtx:m,currentUser:g,onReachedReplLimit:e,hasConnectors:x,connectorNames:f})}var et=e.i(501033),er=e.i(47503),ei=e.i(711153),en=e.i(222342),ea=e.i(956111);let eo=(0,i.createContext)({isForking:!1,fork:()=>{}});e.s(["ForkContextProvider",0,({children:e,forkParams:a,navigateAfterFork:o=!0,onFork:s,repl:l,template:c,autorun:d=!1})=>{let u=(0,r.useRouter)(),{showError:p}=(0,en.default)(),m=(0,er.useCurrentUserId)(),g=(0,ea.useQueryParam)("forkRepl","string"),h=(0,ea.useQueryParam)("forkContext","string"),[x,f]=(0,i.useState)(),y=(0,i.useMemo)(()=>null===m,[m]),v=a.trackingData.forkSource,[C,{loading:R}]=(0,ei.default)({replLinkOptions:{autorun:d},navigateAfterFork:o,onFork:s,onError:()=>{p("Error forking App")}}),w=(0,i.useCallback)(async()=>{y?(await (0,ea.updatePathWithQueryParams)({router:u,params:[{mode:"add",key:"forkRepl",value:l.id},{mode:"add",key:"forkContext",value:v}]}),f("auth")):f("fork")},[y,l.id,u,v]),_=(0,i.useCallback)(async()=>{await (0,ea.updatePathWithQueryParams)({router:u,params:[{mode:"delete",key:"forkRepl"},{mode:"delete",key:"forkContext"}]}),f(void 0)},[u]);(0,i.useEffect)(()=>{g===l.id&&h===v&&(y?f("auth"):f("fork"))},[g,h,y,l.id,v]);let j=(0,i.useCallback)(()=>f("limited"),[]);return(0,t.jsxs)(eo.Provider,{value:{isForking:R,fork:w},children:[e,(0,t.jsxs)(b.Modal,{isOpen:void 0!==x,onRequestClose:()=>_(),maxWidth:"limited"===x?1e3:b.DEFAULT_MODAL_MAX_WIDTH,noPadding:"limited"===x,children:["limited"===x?(0,t.jsx)(et.default,{shouldBlockReplForm:!0,onClose:()=>_(),context:"fork_modal_limit_reached"}):null,"auth"===x?(0,t.jsx)(n.AuthDialogContent,{loginTitle:"Log in to Remix this App",signupTitle:"Sign up to Remix this App",onSuccess:()=>f("fork"),tracking:{from:v,location:a.trackingData.location??"fork"}}):null,"fork"===x?(0,t.jsx)(ee,{onReachedReplLimit:j,hideModal:()=>_(),onFork:({teamId:e,title:t,description:r,isPrivate:i,orgId:n,connectionIds:o,copyDatabase:s})=>C({originId:l.id,teamId:e,title:t,description:r,isPrivate:i,forkToPersonal:null===e&&null==n,orgId:n,connectionIds:o,copyDatabase:s,...a}),initialTitle:l.title,initialDescription:l.description??void 0,orgId:l.org?.id,template:c,originReplId:l.id}):null]})]})},"useForkContext",0,()=>(0,i.useContext)(eo)],464092)}]);

//# debugId=7dfee8a3-672a-e9eb-894c-39a7b6ae324b
//# sourceMappingURL=e8d92dd6928bc587.js.map