;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="598f1563-1009-8517-72d6-8658695d0ef3")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,693432,889185,e=>{"use strict";var r=e.i(973245),t=e.i(987143);let a=r.gql`
    fragment AccountItemCurrentUser on CurrentUser {
  id
  username
  fullName
  image
  userSubscriptionType
  customer {
    ... on Customer {
      id
      isUnifiedPlanEnabled
    }
  }
  isMemberOfAnyOrg
  ...UserLinkCurrentUser
}
    ${t.UserLinkCurrentUserFragmentDoc}`;var i=e.i(183462);let s=r.gql`
    fragment TeamsItemCurrentUser on CurrentUser {
  id
  ...OrgSwitcherCurrentUser
}
    ${i.OrgSwitcherCurrentUserFragmentDoc}`;var n=e.i(42330);let o=r.gql`
    fragment GloablHeaderCurrentUser on CurrentUser {
  id
  isMemberOfAnyOrg
  customer {
    ... on Customer {
      id
      isUnifiedPlanEnabled
    }
  }
  ...AccountItemCurrentUser
  ...TeamsItemCurrentUser
  ...IsUnifiedPlanEnabledForAnyOrg
}
    ${a}
${s}
${n.IsUnifiedPlanEnabledForAnyOrgFragmentDoc}`;e.s(["GloablHeaderCurrentUserFragmentDoc",0,o],889185);var l=e.i(202068),u=e.i(304277);e.i(566901);let d={},c=r.gql`
    fragment LayoutSidebarCurrentUser on CurrentUser {
  id
  isStaff: hasRole(role: REPLIT_STAFF)
  isExplorer: hasRole(role: EXPLORER)
  ...GloablHeaderCurrentUser
  ...UserPlanStateCurrentUser
  ...OrgSwitcherCurrentUser
  ...IsUnifiedPlanEnabledPersonalWorkspaceCurrentUser
  ...IsUnifiedPlanEnabledForAnyOrg
}
    ${o}
${l.UserPlanStateCurrentUserFragmentDoc}
${i.OrgSwitcherCurrentUserFragmentDoc}
${n.IsUnifiedPlanEnabledPersonalWorkspaceCurrentUserFragmentDoc}
${n.IsUnifiedPlanEnabledForAnyOrgFragmentDoc}`,g=r.gql`
    fragment LayoutSidebarOrg on Org {
  id
  name
  slug
  image
  ...IsUnifiedPlanEnabledOrg
  authorizations {
    viewUsage {
      isAuthorized
    }
    viewOrgAnalytics {
      isAuthorized
    }
    viewOrgSecurity {
      isAuthorized
    }
    viewSubscription {
      isAuthorized
    }
  }
}
    ${n.IsUnifiedPlanEnabledOrgFragmentDoc}`,p=r.gql`
    query LayoutSidebarGetOrg($orgId: String!) {
  getOrg(orgId: $orgId) {
    __typename
    ... on Org {
      ...LayoutSidebarOrg
    }
    ... on NotFoundError {
      message
    }
  }
}
    ${g}`;function m(e){let r={...d,...e};return u.useQuery(p,r)}e.s(["LayoutSidebarCurrentUserFragmentDoc",0,c,"useLayoutSidebarGetOrgQuery",()=>m],693432)},312087,e=>{"use strict";var r=e.i(973245),t=e.i(951262);let a={},i=r.gql`
    fragment EditReplFormRepl on Repl {
  id
  title
  description
  imageUrl
  iconUrl
  isPrivate
  owner {
    __typename
  }
  templateInfo {
    iconUrl
    imageUrl
  }
  authorizations {
    editMetadata {
      isAuthorized
      code
      message
    }
    editVisibility {
      isAuthorized
      code
      message
    }
  }
  org {
    id
    type
  }
}
    `,s=r.gql`
    mutation EditReplFormEdit($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      ...EditReplFormRepl
    }
  }
}
    ${i}`;function n(e){let r={...a,...e};return t.useMutation(s,r)}e.s(["EditReplFormReplFragmentDoc",0,i,"useEditReplFormEditMutation",()=>n])},532049,17009,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);var a=e.i(951262);let i={},s=r.gql`
    fragment TransferReplToOrgDialogRepl on Repl {
  id
  title
  slug
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
    `,n=r.gql`
    query TransferReplToOrgDialogOrgs {
  currentUser {
    id
    orgs(count: 30) {
      __typename
      ... on CurrentUserOrganizationConnection {
        items {
          org {
            id
            name
            slug
            image
            type
          }
          type
        }
      }
      ... on Error {
        message
      }
    }
  }
}
    `;function o(e){let r={...i,...e};return t.useQuery(n,r)}let l=r.gql`
    mutation TransferReplToOrgDialogTransfer($orgId: String!, $replIds: [String!]!) {
  transferReplToOrganization(input: {orgId: $orgId, replIds: $replIds}) {
    ... on TransferReplToOrganizationSuccess {
      runId
      results {
        replId
        success
        error
      }
      successCount
      errorCount
    }
    ... on UnauthorizedError {
      message
    }
    ... on UserError {
      message
    }
    ... on TooManyRequestsError {
      message
    }
  }
}
    `;function u(e){let r={...i,...e};return a.useMutation(l,r)}e.s(["TransferReplToOrgDialogReplFragmentDoc",0,s,"useTransferReplToOrgDialogOrgsQuery",()=>o,"useTransferReplToOrgDialogTransferMutation",()=>u],532049);let d={},c=r.gql`
    fragment LeaveMultiplayerReplDialogRepl on Repl {
  id
  title
}
    `,g=r.gql`
    mutation LeaveMultiplayerReplDialogRemove($id: String!) {
  removeSharedRepl(replId: $id) {
    id
  }
}
    `;function p(e){let r={...d,...e};return a.useMutation(g,r)}e.s(["LeaveMultiplayerReplDialogReplFragmentDoc",0,c,"useLeaveMultiplayerReplDialogRemoveMutation",()=>p],17009)},905608,e=>{"use strict";var r=e.i(973245),t=e.i(304277),a=e.i(566901);let i={},s=r.gql`
    query ReplGateUserAuthz {
  currentUser {
    id
    isSubscribed
    shouldEnforceUsersOverLimit: gate(feature: "flag-swiss-ganymede")
    replCount {
      ... on ReplCount {
        count
      }
      ... on Error {
        message
      }
    }
    freeTeams {
      id
    }
    proTeamOrgs: teamOrganizations(subscriptionType: PRO) {
      id
    }
    personalOrgAuthorizations {
      ... on OrgAuthorizations {
        createRepl(private: false) {
          isAuthorized
          message
          code
        }
      }
    }
  }
}
    `;function n(e){let r={...i,...e};return t.useQuery(s,r)}function o(e){let r={...i,...e};return a.useLazyQuery(s,r)}e.s(["ReplGateUserAuthzDocument",0,s,"useReplGateUserAuthzLazyQuery",()=>o,"useReplGateUserAuthzQuery",()=>n])},135173,e=>{"use strict";e.s(["STARTER_PLAN_REPL_LIMIT",0,10])},173532,e=>{"use strict";var r=e.i(905608),t=e.i(135173),a=e.i(968783);e.i(943565);let i=t.STARTER_PLAN_REPL_LIMIT;e.s(["useReplLimit",0,()=>{let{data:e,loading:t,refetch:s}=(0,r.useReplGateUserAuthzQuery)({ssr:!1,fetchPolicy:"network-only"}),n=(0,a.useCurrentUserStoredOrgContext)().orgId;if(t)return{type:"loading"};if(e&&e?.currentUser?.personalOrgAuthorizations.__typename==="OrgAuthorizations"&&"ReplCount"===e.currentUser.replCount.__typename){let{replCount:{count:r},personalOrgAuthorizations:{createRepl:{isAuthorized:t}},isSubscribed:a,shouldEnforceUsersOverLimit:o,freeTeams:l,proTeamOrgs:u}=e.currentUser;return{type:"data",canCreateRepl:t,refetch:s,replCount:r,starterPlanReplLimit:i,isStarterUser:!a,shouldEnforceUsersOverLimit:o,shouldBlockReplForm:!(l.length+u.length>0)&&o&&!a&&!t&&void 0===n}}return{type:"error"}}])},850176,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment AiProviderCurrentUser on CurrentUser {
  id
  timeCreated
}
    `;e.s(["AiProviderCurrentUserFragmentDoc",0,t])},541508,414779,e=>{"use strict";var r=e.i(276385),t=e.i(389959),a=e.i(973245),i=e.i(951262),s=e.i(304277);e.i(566901);let n={},o=a.gql`
    mutation CreateViewerUpgradeRequest($input: CreateViewerUpgradeRequestInput!) {
  createViewerUpgradeRequest(input: $input) {
    ... on ViewerUpgradeRequest {
      id
      status
    }
  }
}
    `;function l(e){let r={...n,...e};return i.useMutation(o,r)}let u=a.gql`
    query OrgViewerUpgradeRequest($orgId: String!, $upgradeRequestInput: OrgUpgradeRequestInput!) {
  currentUser {
    id
    org(orgId: $orgId) {
      ... on Org {
        id
        upgradeRequest(input: $upgradeRequestInput) {
          ... on ViewerUpgradeRequest {
            id
            status
          }
        }
      }
    }
  }
}
    `;function d(e){let r={...n,...e};return s.useQuery(u,r)}e.s(["OrgViewerUpgradeRequestDocument",0,u,"useCreateViewerUpgradeRequestMutation",()=>l,"useOrgViewerUpgradeRequestQuery",()=>d],414779);var c=e.i(709485),g=e.i(968783),p=e.i(963335),m=e.i(858248),h=e.i(446530),f=e.i(613355),x=e.i(140487),R=e.i(607278),y=e.i(739521),b=e.i(960178),v=e.i(625484);let w=(0,h.cssRecord)({buttonContainer:[f.rcss.display.flex,f.rcss.justify.end],input:[f.rcss.display.flex,f.rcss.flex.growAndShrink(1),f.rcss.py(4)]});e.s(["default",0,({isOpen:e,orgName:a,orgId:i,onClose:s,onSuccess:n})=>{let[o,d]=(0,t.useState)(""),{scimViewerUpgradeLink:h}=(0,p.default)(i),f=h&&!!h.trim(),[_,{loading:j}]=l({onCompleted:()=>{n()}});return(0,t.useEffect)(()=>{e&&(0,m.track)(c.events.ORG_VIEWER_SEAT_UPGRADE_MODAL_VIEWED,{orgId:i,context:(0,g.getOrgTrackingContext)({id:i})})},[e,i]),(0,r.jsx)(y.Modal,{isOpen:e,onRequestClose:s,children:(0,r.jsxs)(v.View,{gap:16,children:[(0,r.jsx)(b.Text,{variant:"subheadDefault",children:f?"Upgrade Your Access":"Request a Member Seat"}),(0,r.jsx)(b.Text,{color:"dimmer",children:f?`Get full member access to ${a}'s Replit workspace by requesting an upgrade in your company ticketing system.`:`Send a request to your team's admin for full member access in ${a}'s Replit workspace.`}),f?(0,r.jsx)(b.Text,{color:"dimmer",children:"You'll be redirected to complete the upgrade process."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.View,{gap:8,children:[(0,r.jsx)(b.Text,{children:"Add a message to your request (optional)"}),(0,r.jsx)(R.Input,{css:w.input,type:"text",value:o,onChange:e=>d(e.target.value),placeholder:"Tell your admin what you want to create on Replit"})]}),(0,r.jsx)(b.Text,{color:"dimmer",children:"Until they respond you will still have limited viewer access."})]}),(0,r.jsx)(v.View,{css:w.buttonContainer,children:(0,r.jsx)(x.Button,{text:f?"Go to upgrade page":"Request upgrade",colorway:"primary",variant:"default",loading:!f&&j,isDisabled:!f&&j,onClick:()=>{f?(window.open(h,"_blank"),(0,m.track)(c.events.ORG_VIEWER_SEAT_UPGRADE_REQUESTED,{orgId:i,context:(0,g.getOrgTrackingContext)({id:i}),customUpgradeLink:!0}),s()):(_({variables:{input:{orgId:i,requestReason:o}},refetchQueries:[u]}),(0,m.track)(c.events.ORG_VIEWER_SEAT_UPGRADE_REQUESTED,{orgId:i,context:(0,g.getOrgTrackingContext)({id:i}),customUpgradeLink:!1}))}})})]})})}],541508)},632236,e=>{e.v({card:"PromoPill-module__hDVp3a__card",clickable:"PromoPill-module__hDVp3a__clickable",outer:"PromoPill-module__hDVp3a__outer",subtitle:"PromoPill-module__hDVp3a__subtitle",title:"PromoPill-module__hDVp3a__title"})},38733,e=>{"use strict";var r=e.i(276385),t=e.i(336187),a=e.i(480028),i=e.i(960178),s=e.i(625484),n=e.i(632236);function o({onClick:e,title:o,label:l}){let u=(0,r.jsxs)(s.View,{clsx:n.default.card,gap:4,px:16,py:12,children:[(0,r.jsxs)(s.View,{row:!0,align:"center",gap:6,children:[(0,r.jsx)(t.default,{size:16,color:a.tokens.foregroundDefault}),(0,r.jsx)(i.Text,{clsx:n.default.title,children:o})]}),(0,r.jsx)(i.Text,{clsx:n.default.subtitle,children:l})]});return e?(0,r.jsx)(s.SpecializedView.button,{clsx:[n.default.outer,n.default.clickable],onClick:e,children:u}):(0,r.jsx)(s.View,{clsx:n.default.outer,children:u})}e.s(["PromoPill",()=>o])},781301,e=>{e.v({root:"ReplResult-module__KvKpdq__root"})},339543,e=>{"use strict";var r=e.i(276385),t=e.i(612866),a=e.i(389959),i=e.i(314531),s=e.i(228108),n=e.i(480028),o=e.i(625484),l=e.i(290446),u=e.i(185591),d=e.i(781301);let c=(0,n.cvarsFrom)("ReplResult.module.css",["--height"]);function g({repl:e,height:n,isActive:g,searchQuery:p}){let{title:m}=e,h=(0,a.useMemo)(()=>p?i.default.match(p,m):null,[p,m]);return(0,r.jsx)(t.default,{...(0,u.replLinkProps)(e),children:(0,r.jsxs)(o.View,{clsx:d.default.root,row:!0,gap:6,px:6,style:{[c.height]:n+"px"},align:"center",children:[(0,r.jsx)(s.default,{alt:e.title,size:32,iconUrl:e.iconUrl}),(0,r.jsx)(o.View,{grow:!0,shrink:!0,gap:2,translate:"no",children:(0,r.jsx)(l.HighlightMatches,{text:e.title,highlight:h?.ranges,dimmed:!g})})]})})}function p(e,t,a){var i,n;return{match:(i=e,n=t,()=>({score:1,render:{height:44,content:(0,r.jsx)(g,{repl:n,height:44,searchQuery:i})}})),data:{type:"action",label:t.title,icon:(0,r.jsx)(s.default,{alt:t.title,size:16,iconUrl:t.iconUrl}),run:()=>a(t)}}}e.s(["ReplResult",()=>g,"toReplResult",()=>p])},924521,e=>{"use strict";var r=e.i(135173),t=e.i(480028);e.s(["getBorderColor",0,({replCount:e,limit:a=r.STARTER_PLAN_REPL_LIMIT})=>e/a>=.25?t.tokens.blueDimmest:t.tokens.greyDimmest,"getFillColor",0,({replCount:e,limit:a=r.STARTER_PLAN_REPL_LIMIT})=>e/a>=.25?t.tokens.blueDimmer:t.tokens.greyDimmer])},672685,e=>{"use strict";var r=e.i(276385),t=e.i(389959),a=e.i(480028),i=e.i(446530),s=e.i(613355),n=e.i(960178),o=e.i(751273),l=e.i(625484);function u({decimal:e}){return e>.25?a.tokens.blueDimmer:a.tokens.greyDimmer}function d({decimal:e}){return e>.25?a.tokens.blueDimmest:a.tokens.greyDimmest}let c=(0,i.cssRecord)({usageString:[s.rcss.fontSize(12)],title:[s.rcss.fontSize(12),s.rcss.fontWeight.medium],meterWrapper:[s.rcss.minWidth(42)],icon:[s.rcss.color.foregroundDimmest]});e.s(["UsageMeterWrapper",0,({icon:e,usageString:a,title:i,tooltip:s,children:u})=>(0,r.jsxs)(l.View,{grow:!0,row:!0,gap:8,align:"center",children:[(0,r.jsx)(l.View,{css:c.icon,children:(0,t.cloneElement)(e,{css:c.icon})}),(0,r.jsxs)(l.View,{grow:!0,gap:2,children:[(0,r.jsx)(n.Text,{height:"singleLine",color:"dimmer",css:c.title,children:i}),(0,r.jsx)(l.View,{row:!0,align:"center",gap:4,children:(0,r.jsx)(n.Text,{color:"dimmest",height:"singleLine",css:c.usageString,children:a})})]}),(0,r.jsx)(l.View,{css:c.meterWrapper,children:s?(0,r.jsx)(o.Tooltip,{tooltip:s,children:u}):u})]}),"getPercentageBorderColor",()=>d,"getPercentageFillColor",()=>u])},176843,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);let a={},i=r.gql`
    query GetCloudFreeUsage {
  currentUser {
    id
    cloudFreeUsageLimits {
      ... on FreemiumCloudUsageLimits {
        usage
        limit
        nextCreditsAt
      }
      ... on Error {
        message
      }
    }
  }
}
    `;var s=e.i(993796);function n({skip:e}={}){var r;let o,l=(0,s.useFlag)({controlName:"flag-free-plan",default:!1}),{data:u,loading:d,error:c,refetch:g}=(r={skip:!l||e},o={...a,...r},t.useQuery(i,o));return{loading:d,error:c,cloudUsage:l&&u?.currentUser?.cloudFreeUsageLimits.__typename==="FreemiumCloudUsageLimits"?u?.currentUser?.cloudFreeUsageLimits:void 0,refetch:g}}e.s(["useGetCloudFreeUsage",()=>n],176843)},120296,e=>{"use strict";var r=e.i(276385),t=e.i(596139),a=e.i(135173),i=e.i(173532),s=e.i(993796),n=e.i(418725),o=e.i(573605),l=e.i(176843),u=e.i(446530),d=e.i(613355),c=e.i(960178),g=e.i(625484),p=e.i(103490),m=e.i(480028),h=e.i(27820),f=e.i(672685);let x=(0,u.cssRecord)({measureBar:[d.rcss.height(10),d.rcss.borderRadius(2),d.rcss.overflow("visible")],measureBarProgress:[d.rcss.borderRadius(2),{marginTop:-1,marginLeft:-1,boxSizing:"content-box"}]}),R=({used:e=0,quota:t=1,loading:a})=>{let i=Math.min(1,e/t);return(0,r.jsx)(f.UsageMeterWrapper,{title:"Agent credits",icon:(0,r.jsx)(p.default,{}),usageString:a?"Loading...":`${Math.floor(100*i)}% used`,children:(0,r.jsx)(h.MeasureBar,{className:"measureBar",total:1,tooltipHidden:!0,current:i,loading:a,css:[x.measureBar,{".measureBarProgress":[d.rcss.border({color:(0,f.getPercentageBorderColor)({decimal:i})}),x.measureBarProgress]}],color:(0,f.getPercentageFillColor)({decimal:i}),backgroundColor:m.tokens.backgroundHigher})})};var y=e.i(490262);let b=(0,u.cssRecord)({measureBar:[d.rcss.height(10),d.rcss.borderRadius(2),d.rcss.overflow("visible")],measureBarProgress:[d.rcss.borderRadius(2),{marginTop:-1,marginLeft:-1,boxSizing:"content-box"}]}),v=({used:e=0,quota:t=1,loading:a})=>{let i=Math.min(1,e/t);return(0,r.jsx)(f.UsageMeterWrapper,{title:"Cloud credits",icon:(0,r.jsx)(y.default,{}),usageString:a?"Loading...":`${Math.floor(100*i)}% used`,children:(0,r.jsx)(h.MeasureBar,{className:"measureBar",total:1,tooltipHidden:!0,current:i,loading:a,css:[b.measureBar,{".measureBarProgress":[d.rcss.border({color:(0,f.getPercentageBorderColor)({decimal:i})}),b.measureBarProgress]}],color:(0,f.getPercentageFillColor)({decimal:i}),backgroundColor:m.tokens.backgroundHigher})})};var w=e.i(173703),_=e.i(396776);let j=2/3,S=({publicRepls:e,agentUsage:s,showReplsLimit:n=!0})=>{let o,l=(0,i.useReplLimit)(),u="data"===l.type?l.starterPlanReplLimit:a.STARTER_PLAN_REPL_LIMIT,d=(o=[],n&&o.push({type:"Apps",percentage:e/u}),o.push({type:`${t.freePlanName} plan usage`,percentage:s}),o),c=d.filter(e=>e.percentage>1),p=d.filter(e=>1===e.percentage),m=d.filter(e=>e.percentage>=.85&&e.percentage<1),h=d.filter(e=>e.percentage>=j&&e.percentage<.85),f=null;return c.length>0?f=(0,r.jsx)(w.ShadesSurface,{colorShade:"error",br:"container",children:(0,r.jsx)(_.StatusBanner,{text:"You've exceeded your usage limit"})}):p.length>0?f=(0,r.jsx)(w.ShadesSurface,{colorShade:"error",br:"container",children:(0,r.jsx)(_.StatusBanner,{text:"You've reached your usage limit"})}):m.length>0?f=(0,r.jsx)(w.ShadesSurface,{colorShade:"brandInverted",br:"container",children:(0,r.jsx)(_.StatusBanner,{text:"You're nearing your usage limit"})}):h.length>0&&(f=(0,r.jsx)(w.ShadesSurface,{colorShade:"warning",br:"container",children:(0,r.jsx)(_.StatusBanner,{text:"Approaching your usage limit"})})),f?(0,r.jsx)(g.View,{pb:4,children:f}):null};var I=e.i(806930),C=e.i(924521);let P=(0,u.cssRecord)({measureBar:[d.rcss.height(10),d.rcss.borderRadius(2),d.rcss.overflow("visible"),{pointerEvents:"none"}],measureBarProgress:[d.rcss.borderRadius(2),{marginTop:-1,marginLeft:-1,boxSizing:"content-box"}]}),U=({publicRepls:e,loading:t})=>{let s=e??0,n=(0,i.useReplLimit)(),o="data"===n.type?n.starterPlanReplLimit:a.STARTER_PLAN_REPL_LIMIT;return(0,r.jsx)(f.UsageMeterWrapper,{title:"Free Apps",tooltip:`You can create ${Math.max(0,o-s)} more Apps for free. Upgrade to create unlimited Public and Private Apps.`,icon:(0,r.jsx)(I.default,{}),usageString:t?"Loading...":`${s}/${o} created`,children:(0,r.jsx)(h.MeasureBar,{total:o,current:s,loading:t,color:(0,C.getFillColor)({replCount:s,limit:o}),tooltipHidden:!0,css:[P.measureBar,{".measureBarProgress":[d.rcss.border({color:(0,C.getBorderColor)({replCount:s,limit:o})}),P.measureBarProgress]}],backgroundColor:m.tokens.backgroundHigher})})},k=(0,u.cssRecord)({header:[d.rcss.display.flex,d.rcss.flex.row,d.rcss.justify.spaceBetween,d.rcss.align.center,d.rcss.pb(4),{alignSelf:"stretch"}],fontMedium:d.rcss.fontWeight.medium}),A=({publicRepls:e,replsLimitLoading:a,agentUsage:i,showReplsLimit:o=!0,cloudUsage:l})=>{let u=0;i?.usage!==void 0&&i?.limit!==void 0&&i.limit>0&&(u=i.usage/i.limit);let d=(0,s.useFlag)({controlName:"flag-golden-global-traveler-toggle"}),p=(0,s.useFlag)({controlName:"flag-free-plan",default:!1});return(0,r.jsxs)(g.View,{px:12,pt:12,pb:12,gap:8,children:[(0,r.jsx)(g.View,{css:k.header,children:(0,r.jsx)(c.Text,{css:k.fontMedium,color:"dimmer",height:"singleLine",children:"Your Starter Plan"})}),(0,r.jsx)(S,{publicRepls:e,agentUsage:u,showReplsLimit:o}),(0,r.jsxs)(g.View,{pb:4,gap:8,children:[o?(0,r.jsx)(U,{publicRepls:e,loading:a}):null,(0,r.jsx)(R,{used:i?.usage,quota:i?.limit,loading:i.loading})]}),p?(0,r.jsx)(g.View,{pb:4,gap:8,children:(0,r.jsx)(v,{used:l?.usage,quota:l?.limit,loading:l.loading})}):null,(0,r.jsx)(n.default,{dataCy:"sidebar-upgrade-btn",context:"sidebar",text:`Upgrade to Replit ${t.corePlanName}`,colorway:"primary",variant:"default",size:d?"small":void 0,modalHeadingText:`Upgrade to Replit ${t.corePlanName}`,redirectPath:"/home"})]})};e.s(["PlanUsageMonitorUI",0,A,"default",0,()=>{let e,t,s=(0,i.useReplLimit)(),n="loading"===s.type,{agentUsage:u,agentUsageV2:d,loading:c}=(0,o.useGetAgentFreeUsage)(),{cloudUsage:g,loading:p}=(0,l.useGetCloudFreeUsage)(),m="data"===s.type?s.replCount:0,h="data"===s.type&&s.shouldEnforceUsersOverLimit,f=m/("data"===s.type?s.starterPlanReplLimit:a.STARTER_PLAN_REPL_LIMIT);return d?(e=d.usage,t=d.limit):(e=u?.usage,t=u?.limit),(0,r.jsx)(A,{agentUsage:{usage:e,limit:t,loading:c},publicRepls:m,replsLimitLoading:n,showReplsLimit:h&&f>=.25,cloudUsage:{usage:g?.usage,limit:g?.limit,loading:p}})}],120296)},393097,e=>{"use strict";var r=e.i(973245),t=e.i(713436);let a=r.gql`
    fragment WorkspaceDropdownCustomer on Customer {
  id
  isUnifiedPlanEnabled
  orgs {
    __typename
    ... on OrgConnection {
      items {
        id
        name
        type
        slug
        currentUserRole
        image
        dealContext {
          dealType
          salesContactEmail
        }
      }
    }
    ... on NotFoundError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on UserError {
      message
    }
  }
  authorizations {
    createWorkspace {
      isAuthorized
      code
    }
  }
}
    `,i=r.gql`
    fragment WorkspaceDropdownCurrentUser on CurrentUser {
  id
  image
  username
  url
  fullName
  firstName
  email
  isMemberOfAnyOrg
  customer {
    ...WorkspaceDropdownCustomer
  }
  customers {
    items {
      name
      ...WorkspaceDropdownCustomer
    }
  }
  ...CoreSubscriptionPlanStatus
}
    ${a}
${t.CoreSubscriptionPlanStatusFragmentDoc}`;e.s(["WorkspaceDropdownCurrentUserFragmentDoc",0,i])},891593,e=>{e.v({dropdownAvatarAndName:"AvatarDropdown-module__ywSTwq__dropdownAvatarAndName",dropdownItem:"AvatarDropdown-module__ywSTwq__dropdownItem",dropdownItemSelected:"AvatarDropdown-module__ywSTwq__dropdownItemSelected",orgNameText:"AvatarDropdown-module__ywSTwq__orgNameText",overflowIndicator:"AvatarDropdown-module__ywSTwq__overflowIndicator",sectionHeader:"AvatarDropdown-module__ywSTwq__sectionHeader",workspaceContainerWrapper:"AvatarDropdown-module__ywSTwq__workspaceContainerWrapper",workspaceDropdownContainer:"AvatarDropdown-module__ywSTwq__workspaceDropdownContainer"})},203630,e=>{"use strict";var r=e.i(276385),t=e.i(750854),a=e.i(389959),i=e.i(368964),s=e.i(183035),n=e.i(222342),o=e.i(230227),l=e.i(187505),u=e.i(341126),d=e.i(783509),c=e.i(907371),g=e.i(714165),p=e.i(624782),m=e.i(960178),h=e.i(625484),f=e.i(891593);let x=({currentUser:e,selected:t,onClick:a})=>{let i=(0,c.useCreateInteractive)({variant:"listItem"});return(0,r.jsxs)(h.View,{clsx:[i.clsx,t?f.default.dropdownItemSelected:f.default.dropdownItem],style:i.style,onClick:a,row:!0,align:"center",justify:t?"space-between":void 0,px:8,py:4,children:[(0,r.jsxs)(h.View,{clsx:f.default.dropdownAvatarAndName,row:!0,align:"center",gap:8,children:[(0,r.jsx)(g.Avatar,{src:e.image,username:e.username,fullName:e.fullName,size:20}),(0,r.jsx)(m.Text,{variant:"text",color:t?"default":"dimmer",multiline:!1,clsx:f.default.orgNameText,children:"Personal"})]}),(0,r.jsx)(h.View,{align:"center",row:!0,children:t?(0,r.jsx)(s.default,{size:16}):null})]})},R=({selected:e,org:a,orgContext:o,groupType:x,isNewPillStyle:R=!1,onRoute:y})=>{let b=(0,c.useCreateInteractive)({variant:"listItem"}),{showError:v}=(0,n.default)(),{trackClick:w}=(0,l.useTrackClick)(),{name:_,slug:j}=a,{switchOrg:S}=o,{home:I}=(0,u.orgLinks)({slug:j}),C=(0,t.useRouter)();return(0,r.jsxs)(h.View,{clsx:[b.clsx,e?f.default.dropdownItemSelected:f.default.dropdownItem],style:b.style,onClick:()=>{e||w({productArea:"workspaces",target:"switch_workspace_item",properties:{previous_workspace_type:o.orgId?"shared":"personal",target_workspace_type:"shared"}}),a.currentUserRole?(S({type:i.OrgType.Team,id:a.id,slug:a.slug,orgRole:a.currentUserRole,orgDealContext:a.dealContext}),y()):v("Something went wrong, please try again."),C.push(I.href)},row:!0,align:"center",justify:e?"space-between":void 0,px:8,py:4,children:[(0,r.jsxs)(h.View,{clsx:f.default.dropdownAvatarAndName,row:!0,align:"center",gap:8,children:[(0,r.jsx)(g.Avatar,{src:a.image??null,username:_,fullName:a.name,size:20}),(0,r.jsxs)(h.View,{row:!0,align:"center",gap:8,children:[(0,r.jsx)(m.Text,{variant:"text",color:e?"default":"dimmer",multiline:!1,translate:"no",clsx:f.default.orgNameText,children:_}),x&&R?(0,r.jsx)(p.Pill,{text:(0,d.orgGroupToDisplayName)(x),compact:!0}):null,x&&!R?(0,r.jsx)(m.Text,{variant:"small",color:"dimmest",children:(0,d.orgGroupToDisplayName)(x)}):null]})]}),(0,r.jsx)(h.View,{align:"center",row:!0,children:e?(0,r.jsx)(s.default,{size:16}):null})]})};e.s(["OrgDropdown",0,({currentUser:e,orgContext:s,loading:n=!1,hasOrgs:u=!1,onRoute:d})=>{let c=(0,t.useRouter)(),g=(0,a.useRef)(null),[p,y]=(0,a.useState)(!1),{shouldHidePersonalWorkspace:b}=(0,o.usePersonalWorkspacesDisabled)(),{trackClick:v}=(0,l.useTrackClick)();return((0,a.useEffect)(()=>{let e=()=>{if(g.current){let{scrollHeight:e,clientHeight:r,scrollTop:t}=g.current;y(e>r&&!(t+r>=e-1))}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{let e=()=>{if(g.current){let{scrollHeight:e,clientHeight:r,scrollTop:t}=g.current;y(e>r&&!(t+r>=e-1))}},r=g.current;if(r)return r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)},[]),e?.orgs&&"CurrentUserOrganizationConnection"===e.orgs.__typename&&!n&&u)?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h.View,{children:[(0,r.jsx)(h.View,{clsx:f.default.sectionHeader,row:!0,align:"center",p:8,children:(0,r.jsx)(m.Text,{variant:"small",color:"dimmest",children:"Switch Workspace"})}),(0,r.jsxs)(h.View,{clsx:f.default.workspaceContainerWrapper,children:[(0,r.jsxs)(h.View,{innerRef:g,clsx:f.default.workspaceDropdownContainer,children:[b?null:(0,r.jsx)(x,{currentUser:e,selected:void 0===s.orgId,onClick:()=>{s.orgId&&v({productArea:"workspaces",target:"switch_workspace_item",properties:{previous_workspace_type:"shared",target_workspace_type:"personal"}}),s.switchOrg({type:i.OrgType.Personal}),c.push("/home","/~",{shallow:!1})}}),e.orgs.items.map(({org:e,type:t})=>(0,r.jsx)(R,{org:e,groupType:t,selected:e.id===s.orgId,orgContext:s,onRoute:d},e.id))]}),p?(0,r.jsx)(h.View,{clsx:f.default.overflowIndicator}):null]})]})}):null},"OrgDropdownItem",0,R,"PersonalDropdownItem",0,x])},623136,920360,e=>{"use strict";var r=e.i(276385),t=e.i(389959),a=e.i(973245),i=e.i(183462),s=e.i(393097),n=e.i(304277);e.i(566901);let o={},l=a.gql`
    query GetOwnerPillOrgs {
  currentUser {
    id
    ...OrgSwitcherCurrentUser
  }
}
    ${i.OrgSwitcherCurrentUserFragmentDoc}`;function u(e){let r={...o,...e};return n.useQuery(l,r)}let d=a.gql`
    query GetOwnerPillWorkspaceDropdown {
  currentUser {
    ...WorkspaceDropdownCurrentUser
  }
}
    ${s.WorkspaceDropdownCurrentUserFragmentDoc}`;function c(e){let r={...o,...e};return n.useQuery(d,r)}e.s(["GetOwnerPillOrgsDocument",0,l,"useGetOwnerPillOrgsQuery",()=>u,"useGetOwnerPillWorkspaceDropdownQuery",()=>c],920360);var g=e.i(167392),p=e.i(568430),m=e.i(269848),h=e.i(968783),f=e.i(612343),x=e.i(446530),R=e.i(613355),y=e.i(625484);let b=(0,x.cssRecord)({placeholder:[R.rcss.width(24),R.rcss.height(24),R.rcss.borderRadius("full"),R.rcss.backgroundColor.backgroundRoot,R.rcss.display.flex,R.rcss.align.center,R.rcss.justify.center,R.rcss.color.foregroundDefault]}),v=()=>(0,r.jsx)(y.View,{css:b.placeholder,children:(0,r.jsx)(f.default,{size:12})});var w=e.i(783509),_=e.i(714165),j=e.i(140487),S=e.i(604963),I=e.i(203630),C=e.i(750854),P=e.i(368964),U=e.i(40916),k=e.i(596139),A=e.i(60017),E=e.i(230227),O=e.i(187505);e.i(653863);var T=e.i(973519),D=e.i(480028),L=e.i(907371),F=e.i(173703),B=e.i(624782),N=e.i(960178),M=e.i(947108),$=e.i(891593);let q=({onClick:e,showCoreBadge:t=!1})=>{let a=(0,L.useCreateInteractive)({variant:"listItem"});return(0,r.jsxs)(y.View,{clsx:[a.clsx,$.default.dropdownItem],style:a.style,onClick:e,row:!0,align:"center",justify:t?"space-between":void 0,px:8,py:4,gap:16,children:[(0,r.jsxs)(y.View,{clsx:$.default.dropdownAvatarAndName,row:!0,align:"center",gap:8,children:[(0,r.jsx)(y.View,{row:!0,align:"center",justify:"center",px:2,children:(0,r.jsx)(U.default,{color:D.tokens.foregroundDimmest,size:16})}),(0,r.jsx)(N.Text,{variant:"text",color:"dimmer",multiline:!1,children:"Create workspace"})]}),t?(0,r.jsx)(M.default,{plan:k.corePlanName,size:"small"}):null]})},z=({orgContext:e,onRoute:a,currentUser:i,onlyUnifiedPlanEnabled:s=!1})=>{let n=(0,C.useRouter)(),o=(0,t.useRef)(null),[l,u]=(0,t.useState)(!1),{shouldHidePersonalWorkspace:d}=(0,E.usePersonalWorkspacesDisabled)(),{show:c}=(0,T.useGlobalModal)(),{trackClick:g}=(0,O.useTrackClick)();(0,t.useEffect)(()=>{let e=()=>{if(o.current){let{scrollHeight:e,clientHeight:r,scrollTop:t}=o.current;u(e>r&&!(t+r>=e-1))}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[i]);let p=(0,A.useIsUnifiedPlanEnabled)({currentUser:i}),m=(e,r)=>{if(g({productArea:"workspaces",target:"open_create_workspace_modal_button",properties:{canCreateWorkspace:r}}),p&&!r){a(),c("MembershipPurchaseModal",{analyticsContext:{upgrade:{context:"header_avatar"}}});return}a(),c("CreateWorkspaceModal",{customerId:e})};(0,t.useEffect)(()=>{let e=()=>{if(o.current){let{scrollHeight:e,clientHeight:r,scrollTop:t}=o.current;u(e>r&&!(t+r>=e-1))}},r=o.current;if(r)return r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)},[i]);let h=i.customer.orgs;if("OrgConnection"!==h.__typename||"CustomerConnection"!==i.customers.__typename)return null;let f=i.customers.items.filter(e=>e.id!==i.customer.id&&(!s||e.isUnifiedPlanEnabled));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(y.View,{clsx:$.default.workspaceContainerWrapper,children:[(0,r.jsxs)(y.View,{innerRef:o,clsx:$.default.workspaceDropdownContainer,children:[!s||p?(0,r.jsxs)(r.Fragment,{children:[d?null:(0,r.jsx)(y.View,{clsx:$.default.sectionHeader,row:!0,align:"center",p:8,children:(0,r.jsx)(N.Text,{variant:"small",color:"dimmest",children:"Your workspaces"})}),d?null:(0,r.jsx)(I.PersonalDropdownItem,{currentUser:i,selected:void 0===e.orgId,onClick:()=>{e.orgId&&g({productArea:"workspaces",target:"switch_workspace_item",properties:{previous_workspace_type:"shared",target_workspace_type:"personal"}}),e.switchOrg({type:P.OrgType.Personal}),n.push("/home","/~",{shallow:!1})}}),h.items.map(t=>(0,r.jsx)(I.OrgDropdownItem,{org:t,selected:t.id===e.orgId,orgContext:e,isNewPillStyle:!0,onRoute:a},t.id)),i.customer.isUnifiedPlanEnabled&&!d&&i.customer.authorizations.createWorkspace.code!==P.CustomerAuthorizationCode.ScimEnabled?(0,r.jsx)(q,{onClick:()=>m(i.customer.id,i.customer.authorizations.createWorkspace.isAuthorized),showCoreBadge:!i.customer.authorizations.createWorkspace.isAuthorized}):null]}):null,f.map(t=>{if("OrgConnection"!==t.orgs.__typename)return null;let i=t.orgs.items,s=t.name?.trim()||"",n=t.authorizations.createWorkspace.isAuthorized;return(0,r.jsxs)(F.ShadesSurface,{elevate:!1,border:{side:"top"},background:!1,children:[s?(0,r.jsxs)(y.View,{clsx:$.default.sectionHeader,row:!0,align:"center",gap:8,p:8,children:[(0,r.jsx)(N.Text,{variant:"small",color:"dimmest",children:s}),n?(0,r.jsx)(B.Pill,{text:"Admin",compact:!0}):null]}):null,i.map(t=>(0,r.jsx)(I.OrgDropdownItem,{org:t,selected:t.id===e.orgId,orgContext:e,groupType:!n&&t.currentUserRole?t.currentUserRole:void 0,isNewPillStyle:!0,onRoute:a},t.id)),n&&t.isUnifiedPlanEnabled&&t.authorizations.createWorkspace.code!==P.CustomerAuthorizationCode.ScimEnabled?(0,r.jsx)(q,{onClick:()=>m(t.id,n)}):null]},t.id)})]}),l?(0,r.jsx)(y.View,{clsx:$.default.overflowIndicator}):null]})})};function V({ownerName:e,image:a,currentOrgId:i,isNewDesignEnabled:s=!1,loading:n=!1,onlyUnifiedPlanEnabled:o,alignment:l,stretch:d}){let f,[x,R]=(0,t.useState)(!1),y=(0,h.useCurrentUserStoredOrgContext)(),b=!s,{data:C}=u({skip:!b}),{data:P}=c({skip:b,fetchPolicy:"cache-and-network",ssr:!1});if(b&&!C)return null;let U=C?.currentUser,k=U?.orgs,A=k?.__typename==="CurrentUserOrganizationConnection"?k.items:[];if(b&&(!U||k?.__typename!=="CurrentUserOrganizationConnection")||b&&!A.length)return null;let E=(0,r.jsx)(_.Avatar,{src:a??null,username:e,size:24}),O=(0,w.getFormattedOrgWorkspaceName)({ownerName:e,isInOrg:!!i});return f=!b&&P?.currentUser?(0,r.jsx)(z,{orgContext:y,currentUser:P.currentUser,onRoute:()=>{R(!1)},onlyUnifiedPlanEnabled:o}):b&&U?(0,r.jsx)(I.OrgDropdown,{currentUser:U,orgContext:y,loading:!1,hasOrgs:A.length>0,onRoute:()=>{R(!1)}}):(0,r.jsx)(r.Fragment,{}),(0,r.jsxs)(S.PopoverTrigger,{isOpen:x,onOpenChange:R,placement:"bottom",label:"Switch Workspace",style:{marginLeft:"-6px"},children:[(0,r.jsx)(j.Button,{style:{paddingLeft:4},borderRadius:"full",iconLeft:n?(0,r.jsx)(m.default,{}):i?a?E:(0,r.jsx)(v,{}):E,iconRight:x?(0,r.jsx)(p.default,{}):(0,r.jsx)(g.default,{}),text:n?"":O,loading:n,alignment:l,stretch:d}),f]})}e.s(["OwnerPill",()=>V],623136)},532130,e=>{"use strict";var r,t=e.i(368964),a=e.i(446530),i=e.i(613355),s=e.i(219577);let n=(0,a.cssRecord)({pageWrapper:[i.rcss.pageContent,i.rcss.colWithGap(32),{[i.media.max("tabletMax")]:{paddingTop:48}}],pageHeader:[i.rcss.flex.row,i.rcss.justify.spaceBetween,i.rcss.align.center],pageHeaderOrgName:[i.rcss.maxWidth(240)],pageHeaderActions:[i.rcss.rowWithGap(8),i.rcss.align.center],pageTitle:[i.rcss.rowWithGap(8),i.rcss.align.center,i.rcss.flex.growAndShrink(1)],pageTitleText:[i.rcss.maxWidth("100%"),i.rcss.flex.growAndShrink(1)],pageContent:[i.rcss.colWithGap(32)],pageSection:[i.rcss.colWithGap(12)],pageSidebarOffset:[{paddingLeft:s.SIDEBAR_WIDTH}],sidebarSectionHeaderText:[i.rcss.p(8),i.rcss.px(16),{fontWeight:500}],indexTableWrapper:[i.rcss.display.flex,i.rcss.position.relative,i.rcss.justify.spaceBetween,i.rcss.overflow("auto"),i.rcss.width("100%")],onboardingSurface:[i.rcss.p(12),i.rcss.borderRadius(),i.rcss.border()],tooltipWrapper:[i.rcss.rowWithGap(8),i.rcss.align.center],searchBar:[i.rcss.maxWidth(400)]});t.SystemOrgGroupType.SystemAdmins,t.SystemOrgGroupType.SystemMembers,t.SystemOrgGroupType.SystemGuests;var o=((r={}).Index="Index",r.OrgGroup="OrgGroup",r);e.s(["NUM_ORGS_PER_PAGE",0,20,"SidebarType",()=>o,"orgStyles",0,n,"sortSystemGroups",0,e=>[t.Org_GroupstypeEnumType.SystemAdmins,t.Org_GroupstypeEnumType.SystemMembers,t.Org_GroupstypeEnumType.SystemGuests].reduce((r,t)=>{let a=e.find(e=>e.type===t);return a&&r.push(a),r},[])])},815184,e=>{"use strict";var r=e.i(276385),t=e.i(138716),a=e.i(995691),i=e.i(255701),s=e.i(612343),n=e.i(968783),o=e.i(956111),l=e.i(341126);let u=e=>r=>r.pathname===e;function d(){let{orgId:e,orgSlug:d}=(0,n.useCurrentUserStoredOrgContext)(),c=(0,o.useQueryParam)("groupId","string"),g=(0,o.useQueryParam)("groupSlug","string");if(!c||!g)throw Error("groupId, groupSlug query params are required");if(!e||!d)return[];let p=(0,l.orgLinks)({slug:d}),m=(0,l.orgGroupLinks)({orgSlug:d,groupId:c,groupSlug:g});return[{label:"Back",href:p.groups.href.toString(),icon:(0,r.jsx)(t.default,{}),active:u(p.groups.routerPath)},{label:"Members",href:m.members.href.toString(),icon:(0,r.jsx)(s.default,{}),active:u(m.members.routerPath)},{label:"Permissions",href:m.permissions.href.toString(),icon:(0,r.jsx)(a.default,{}),active:u(m.permissions.routerPath)},{label:"Group settings",href:m.settings.href.toString(),icon:(0,r.jsx)(i.default,{}),active:u(m.settings.routerPath)}]}e.s(["useOrgGroupNavItems",()=>d])},833579,490931,115217,e=>{"use strict";var r=e.i(973245),t=e.i(951262);let a={},i=r.gql`
    fragment DeleteFolderDialogFolder on ReplFolder {
  id
  pathnames
}
    `,s=r.gql`
    mutation DeleteFolderDialogDeleteFolder($folderId: String!) {
  deleteReplFolder(folderId: $folderId) {
    id
  }
}
    `;function n(e){let r={...a,...e};return t.useMutation(s,r)}e.s(["DeleteFolderDialogFolderFragmentDoc",0,i,"useDeleteFolderDialogDeleteFolderMutation",()=>n],490931);let o=r.gql`
    fragment ReplsDashboardFolderItemReplFolder on ReplFolder {
  id
  name
  canEdit
  pathnames
  image
  timeCreated
  replsCount
  folderType
  ...DeleteFolderDialogFolder
}
    ${i}`;var l=e.i(532049);let u=r.gql`
    fragment ReplsDashboardReplItemActionsRepl on Repl {
  id
  url
  slug
  pinnedToProfile
  isPrivate
  title
  description
  ...TransferReplToOrgDialogRepl
  org {
    __typename
    ... on Org {
      id
    }
  }
  owner {
    __typename
    ... on User {
      id
      username
    }
    ... on Team {
      id
      username
    }
  }
  authorizations {
    deleteRepl {
      isAuthorized
    }
    editFileContents {
      isAuthorized
    }
    editFolder {
      isAuthorized
    }
    editMetadata {
      isAuthorized
    }
    editPermissions {
      isAuthorized
    }
    editVisibility {
      isAuthorized
    }
    fork {
      isAuthorized
    }
    removeSelf {
      isAuthorized
    }
    star {
      isAuthorized
    }
  }
}
    ${l.TransferReplToOrgDialogReplFragmentDoc}`;var d=e.i(279042),c=e.i(662041),g=e.i(781621),p=e.i(17009),m=e.i(312087),h=e.i(552207);let f={},x=r.gql`
    fragment ReplsDashboardReplItemRepl on Repl {
  id
  title
  timeCreated
  isStarred
  isPrivate
  isOwner
  iconUrl
  publishedAs
  ...ReplsDashboardReplItemActionsRepl
  ...ReplLinkRepl
  user {
    id
    username
  }
  hostingDeployment {
    ... on HostingDeployment {
      id
      ...BuildStatusBadgeHostingDeployment
    }
  }
  ...BulkDeleteConfirmationModalRepl
  ...LeaveMultiplayerReplDialogRepl
  ...EditReplFormRepl
  ...ReplEnvironmentDesktopRepl
}
    ${u}
${d.ReplLinkReplFragmentDoc}
${c.BuildStatusBadgeHostingDeploymentFragmentDoc}
${g.BulkDeleteConfirmationModalReplFragmentDoc}
${p.LeaveMultiplayerReplDialogReplFragmentDoc}
${m.EditReplFormReplFragmentDoc}
${h.ReplEnvironmentDesktopReplFragmentDoc}`,R=r.gql`
    mutation ReplsDashboardUpdateRepl($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      ...ReplsDashboardReplItemRepl
    }
  }
}
    ${x}`;function y(e){let r={...f,...e};return t.useMutation(R,r)}e.s(["ReplsDashboardReplItemReplFragmentDoc",0,x,"useReplsDashboardUpdateReplMutation",()=>y],115217);var b=e.i(304277),v=e.i(566901);let w={},_=r.gql`
    query ReplsDashboardReplFolderList($path: String!, $starred: Boolean, $after: String) {
  currentUser {
    id
    username
    replFolderByPath(path: $path) {
      id
      ownerId: userId
      pathnames
      canEdit
      canCreateSubFolders
      parent {
        id
        pathnames
      }
      folders {
        id
        ...ReplsDashboardFolderItemReplFolder
      }
      repls(starred: $starred, after: $after) {
        items {
          id
          ...ReplsDashboardReplItemRepl
        }
        pageInfo {
          nextCursor
        }
      }
    }
    replCount {
      ... on ReplCount {
        count
      }
    }
  }
}
    ${o}
${x}`;function j(e){let r={...w,...e};return b.useQuery(_,r)}function S(e){let r={...w,...e};return v.useLazyQuery(_,r)}let I=r.gql`
    mutation ReplsDashboardCreateReplFolder($name: String!, $parentId: String, $teamId: Int) {
  createReplFolder(name: $name, parentId: $parentId, teamId: $teamId) {
    id
    ...ReplsDashboardFolderItemReplFolder
  }
}
    ${o}`;function C(e){let r={...w,...e};return t.useMutation(I,r)}let P=r.gql`
    mutation ReplsDashboardMoveItemsToFolder($replIds: [String!]!, $folderIds: [String!]!, $destFolderId: String!, $teamId: Int) {
  moveItemsToFolder(
    replIds: $replIds
    folderIds: $folderIds
    destFolderId: $destFolderId
    teamId: $teamId
  ) {
    ... on Repl {
      __typename
      id
      ...ReplsDashboardReplItemRepl
    }
    ... on ReplFolder {
      __typename
      id
      ...ReplsDashboardFolderItemReplFolder
    }
  }
}
    ${x}
${o}`;function U(e){let r={...w,...e};return t.useMutation(P,r)}e.s(["useReplsDashboardCreateReplFolderMutation",()=>C,"useReplsDashboardMoveItemsToFolderMutation",()=>U,"useReplsDashboardReplFolderListLazyQuery",()=>S,"useReplsDashboardReplFolderListQuery",()=>j],833579)},29032,e=>{"use strict";var r=e.i(389959),t=e.i(833579);function a(){let e=(0,r.useRef)(!1),[a]=(0,t.useReplsDashboardReplFolderListLazyQuery)();return(0,r.useCallback)(()=>{e.current||(e.current=!0,a({variables:{path:""}}))},[a])}e.s(["usePrefetchFolderList",()=>a])},688240,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);let a={},i=r.gql`
    query UsageActionRequired {
  currentUser {
    __typename
    id
    usageBasedBillingBudget {
      ... on UsageBasedBillingBudget {
        id
        hasReachedBudget
      }
      ... on UnauthorizedError {
        message
      }
    }
    storageInfo {
      __typename
      storageQuotaStatus2 {
        __typename
        ... on StorageQuotaStatus {
          status
        }
        ... on ServiceUnavailable {
          message
        }
      }
    }
  }
}
    `;function s(e){let r={...a,...e};return t.useQuery(i,r)}let n=r.gql`
    query OrgUsageActionRequired($orgId: String!) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        usageBasedBillingBudget {
          __typename
          ... on UsageBasedBillingBudget {
            id
            hasReachedBudget
          }
          ... on Error {
            message
          }
        }
      }
      ... on Error {
        message
      }
    }
  }
}
    `;function o(e){let r={...a,...e};return t.useQuery(n,r)}e.s(["UsageActionRequiredDocument",0,i,"useOrgUsageActionRequiredQuery",()=>o,"useUsageActionRequiredQuery",()=>s])},605100,e=>{e.v({root:"index-module__DMze6a__root"})},994272,e=>{e.v({iconLink:"InstallOnReplitFooter-module__UMRnvq__iconLink",textLink:"InstallOnReplitFooter-module__UMRnvq__textLink"})},311764,e=>{e.v({buttonLink:"NavItem-module__HsHPgW__buttonLink",centered:"NavItem-module__HsHPgW__centered",iconButton:"NavItem-module__HsHPgW__iconButton",outlined:"NavItem-module__HsHPgW__outlined"})},65911,575608,443546,601002,785683,e=>{"use strict";var r=e.i(368964),t=e.i(688240);e.s(["useUsageActionRequired",0,e=>{let{loading:a,data:i}=(0,t.useUsageActionRequiredQuery)({ssr:!1,context:{noBatch:!0},skip:void 0!==e}),{loading:s,data:n}=(0,t.useOrgUsageActionRequiredQuery)({variables:{orgId:e??""},ssr:!1,context:{noBatch:!0},skip:!e});if(e)return{loading:s,actionRequired:n?.currentUser?.org.__typename==="Org"&&n.currentUser.org.usageBasedBillingBudget?.__typename==="UsageBasedBillingBudget"&&!!n.currentUser.org.usageBasedBillingBudget.hasReachedBudget};{if(!i||i.currentUser?.__typename!=="CurrentUser"||i.currentUser.storageInfo?.__typename!=="StorageInfo"||"StorageQuotaStatus"!==i.currentUser.storageInfo.storageQuotaStatus2.__typename)return{loading:a,actionRequired:!1};let{storageInfo:{storageQuotaStatus2:{status:e}},usageBasedBillingBudget:t}=i.currentUser;return{loading:a,actionRequired:t?.__typename==="UsageBasedBillingBudget"&&t.hasReachedBudget||e===r.StorageQuotaEnum.ExceedingQuota||e===r.StorageQuotaEnum.ApproachingQuota}}}],65911);var a=e.i(276385),i=e.i(389959),s=e.i(968783),n=e.i(262206),o=e.i(750854),l=e.i(973245),u=e.i(279042),d=e.i(304277),c=e.i(566901);let g={},p=l.gql`
    fragment GlobalSearchRepl on Repl {
  id
  title
  iconUrl
  ...ReplLinkRepl
}
    ${u.ReplLinkReplFragmentDoc}`,m=l.gql`
    query GlobalPersonalRecentRepls($count: Int!) {
  currentUser {
    id
    isStaff: hasRole(role: REPLIT_STAFF)
  }
  recentRepls(count: $count) {
    id
    ...GlobalSearchRepl
  }
}
    ${p}`,h=l.gql`
    query GlobalPersonalSearch($search: String!) {
  currentUser {
    id
    replSearch(search: $search) {
      id
      ...GlobalSearchRepl
    }
  }
}
    ${p}`,f=l.gql`
    query GlobalOrgRecentRepls($count: Int!, $orgId: String!) {
  currentUser {
    id
    isStaff: hasRole(role: REPLIT_STAFF)
    org(orgId: $orgId) {
      ... on Org {
        id
        name
        recentRepls(input: {count: $count}) {
          ... on ReplConnection {
            items {
              ...GlobalSearchRepl
            }
          }
        }
      }
    }
  }
}
    ${p}`,x=l.gql`
    query GlobalOrgSearch($orgId: String!, $replsInput: OrgReplsInput!) {
  currentUser {
    id
    org(orgId: $orgId) {
      ... on Org {
        id
        repls(input: $replsInput) {
          ... on ReplConnection {
            items {
              ...GlobalSearchRepl
            }
          }
        }
      }
    }
  }
}
    ${p}`;var R=e.i(339543),y=e.i(735362),b=e.i(106020);function v(){let e=(0,o.useRouter)();return(0,i.useMemo)(()=>({data:{type:"context",icon:(0,a.jsx)(a.Fragment,{}),label:"Staff"},commands:()=>[{match:b.matchLabel,data:{type:"action",icon:(0,a.jsx)(y.default,{}),label:"Run Evaluations",description:"Open the evaluations page to batch test Agent",run:()=>{e.push("/evaluations")}}}]}),[e])}var w=e.i(495764),_=e.i(185591);function j(){let e=(0,o.useRouter)();return(0,i.useCallback)(r=>{let{href:t,as:a}=(0,_.replLinkProps)(r);e.push(t,a)},[e])}var S=e.i(625484),I=e.i(980338),C=e.i(605100);function P(){let{orgId:e}=(0,s.useCurrentUserStoredOrgContext)();return(0,a.jsx)(S.View,{clsx:C.default.root,children:e?(0,a.jsx)(k,{orgId:e}):(0,a.jsx)(U,{})})}function U(){let e=function(){var e;let r,t,{data:s}=(e={variables:{count:w.RECENT_REPLS_SIDEBAR_MENU_COUNT},fetchPolicy:"cache-and-network",ssr:!1},r={...g,...e},d.useQuery(m,r)),n=s?.recentRepls,[o]=(t={...g,...void 0},c.useLazyQuery(h,t)),l=j(),u=(0,i.useMemo)(()=>n?.length?{data:{type:"context",label:"Recent",icon:(0,a.jsx)(a.Fragment,{})},commands:e=>e.searchQuery?[]:n.map(r=>(0,R.toReplResult)(e.searchQuery,r,l))}:null,[n,l]),p=v(),f=s?.currentUser?.isStaff,x=(0,i.useMemo)(()=>({data:{type:"group",key:"search"},commands:async e=>{if(""===e.searchQuery.trim())return[];let r=await o({variables:{search:e.searchQuery}}),t=r.data?.currentUser?.replSearch;return t?t.map(r=>(0,R.toReplResult)(e.searchQuery,r,l)):[]}}),[o,l]);return(0,i.useMemo)(()=>({data:{type:"context",label:"Search Apps",description:"Search Apps",icon:(0,a.jsx)(a.Fragment,{})},commands:()=>[...u?[u]:[],x,...f?[p]:[]]}),[u,x,f,p])}();return(0,a.jsx)(I.CommandBar,{autoFocus:!0,command:e})}function k(e){let r=function(e){var r;let t,s,{data:n}=(r={variables:{orgId:e,count:w.RECENT_REPLS_SIDEBAR_MENU_COUNT},fetchPolicy:"cache-and-network",ssr:!1},t={...g,...r},d.useQuery(f,t)),o=n?.currentUser?.org.__typename==="Org"?n.currentUser.org:null,l=o?.recentRepls.items,u=o?.name,p=n?.currentUser?.isStaff,[m]=(s={...g,...void 0},c.useLazyQuery(x,s)),h=j(),y=v(),b=(0,i.useMemo)(()=>({data:{type:"group",key:"search"},commands:async r=>{if(""===r.searchQuery.trim())return[];let t=await m({variables:{orgId:e,replsInput:{filters:{title:{search:r.searchQuery}}}}}),a=t.data?.currentUser?.org.__typename==="Org"?t.data.currentUser.org:null,i=a?.repls.__typename==="ReplConnection"?a.repls.items:null;return i?i.map(e=>(0,R.toReplResult)(r.searchQuery,e,h)):[]}}),[e,m,h]),_=(0,i.useMemo)(()=>l?.length?{data:{type:"context",label:"Recent",icon:(0,a.jsx)(a.Fragment,{})},commands:e=>e.searchQuery?[]:l.map(r=>(0,R.toReplResult)(e.searchQuery,r,h))}:null,[l,h]);return(0,i.useMemo)(()=>({data:{type:"context",label:"Search Apps",description:"Search Apps"+(u?` in ${u}`:""),icon:(0,a.jsx)(a.Fragment,{})},commands:()=>[..._?[_]:[],b,...p?[y]:[]]}),[_,b,u,p,y])}(e.orgId);return(0,a.jsx)(I.CommandBar,{autoFocus:!0,command:r})}let A=(0,n.defaultKeyCombo)({cmdOrCtrl:!0,key:"k"});function E(){var e;let[r,t]=(0,i.useState)(!1);return e=(0,i.useCallback)(()=>t(e=>!e),[]),(0,i.useEffect)(()=>{let r=r=>{(0,n.getKeyCombination)(r)===A&&e()};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[e]),[r,t]}e.s(["GlobalSearch",()=>P,"useGloablSearchState",()=>E],575608);var O=e.i(612866),T=e.i(256758),D=e.i(960178),L=e.i(341048),F=e.i(813707),B=e.i(282453),N=e.i(127227),M=e.i(136540),$=e.i(604963),q=e.i(399144);let z="perf-tools-lag-radar",V="perf-tools-fps-counter",G="analyticsInspector",W=(0,L.default)(()=>e.A(142750),{loadableGenerated:{modules:[775382]}}),Q=(0,L.default)(()=>e.A(305302),{loadableGenerated:{modules:[284790]}}),H=()=>{let[e,r]=(0,i.useState)(!1),[t,s]=(0,i.useState)(!!B.default.get(z,"boolean")),[n,o]=(0,i.useState)(!!B.default.get(V,"boolean")),[l,u]=(0,i.useState)(!!B.default.get(G,"boolean"));return(0,i.useEffect)(()=>{B.default.set(z,t)},[t]),(0,i.useEffect)(()=>{B.default.set(V,n)},[n]),(0,i.useEffect)(()=>{B.default.set(G,l),window.dispatchEvent(new StorageEvent("storage",{key:G,newValue:String(l)}))},[l]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)($.PopoverTrigger,{label:"Performance",isOpen:e,onOpenChange:r,children:[(0,a.jsx)(M.IconButton,{alt:"Performance",size:28,tooltipPlacement:"left-start",children:(0,a.jsx)(F.default,{})}),(0,a.jsxs)(S.View,{gap:4,p:8,children:[(0,a.jsxs)(S.View,{row:!0,gap:8,children:[(0,a.jsx)(N.Checkbox,{id:"lag-radar",name:"Lag Radar",checked:t,onChange:e=>{s(e)}}),(0,a.jsx)("label",{htmlFor:"lag-radar",children:"Lag Radar"})]}),(0,a.jsxs)(S.View,{row:!0,gap:8,children:[(0,a.jsx)(N.Checkbox,{id:"fps-counter",name:"FPS Counter",checked:n,onChange:e=>{o(e)}}),(0,a.jsx)("label",{htmlFor:"fps-counter",children:"FPS Counter"})]}),(0,a.jsxs)(S.View,{row:!0,gap:8,children:[(0,a.jsx)(N.Checkbox,{id:"analytics-inspector",name:"Analytics Inspector",checked:l,onChange:e=>{u(e)}}),(0,a.jsx)("label",{htmlFor:"analytics-inspector",children:"Analytics Inspector"})]})]})]}),t?(0,a.jsx)(q.Portal,{children:(0,a.jsx)("div",{style:{position:"fixed",top:0,right:0,zIndex:Number.MAX_SAFE_INTEGER,pointerEvents:"none"},children:(0,a.jsx)(W,{})})}):void 0,n?(0,a.jsx)(q.Portal,{children:(0,a.jsx)(Q,{})}):void 0]})};var Y=e.i(994272);function K({isStaffplorer:e}){return(0,a.jsxs)(S.View,{justify:"space-between",row:!0,pl:4,children:[(0,a.jsxs)(S.View,{row:!0,gap:2,align:"center",children:[(0,a.jsx)(D.Text,{color:"dimmest",variant:"small",children:"Install Replit on"}),(0,a.jsx)(O.default,{href:"/mobile",target:"_blank",clsx:Y.default.iconLink,children:(0,a.jsx)(T.default,{})}),(0,a.jsxs)(S.View,{row:!0,gap:2,align:"center",children:[(0,a.jsx)(S.View,{px:2,children:(0,a.jsx)(D.Text,{color:"dimmest",variant:"small",children:"•"})}),(0,a.jsx)(O.default,{href:"https://docs.replit.com/updates",target:"_blank",clsx:Y.default.textLink,children:"Changelog"})]})]}),(0,a.jsx)(S.View,{pl:8,children:e?(0,a.jsx)(H,{}):void 0})]})}e.s(["InstallOnReplitFooter",()=>K],443546);var X=e.i(858248),Z=e.i(709485),J=e.i(91720),ee=e.i(848969),er=e.i(751273),et=e.i(311764);function ea(e){let r=(0,o.useRouter)(),t="function"==typeof e.active?e.active(r):e.active??!1,i=(0,s.getOrgTrackingContext)(e.orgId?{id:e.orgId}:void 0),n=()=>{var r;return r=e.label,void(0,X.track)(Z.events.NAV_ITEM_CLICK,{target:r,source:"sidebar",isWorkspace:!1,context:i})},l=e.disabled??!1,u=e.iconButton?(0,a.jsx)(ee.IconButtonLink,{size:32,clsx:[et.default.iconButton,{[et.default.outlined]:"outlined"===e.variant}],disabled:l,onClick:r=>{l?r.preventDefault():(e.onClick?.(r),n())},tooltipBehavior:e.disableTooltip||l?"hidden":void 0,onMouseEnter:e.onMouseEnter,"aria-current":t?"page":void 0,"data-cy":e.dataCy,tabIndex:0,href:e.href,as:e.as,alt:e.label,tooltipPlacement:"right",children:e.icon}):(0,a.jsx)(J.ButtonLink,{clsx:[et.default.buttonLink,{[et.default.centered]:e.centered}],disabled:l,variant:e.variant??(t?void 0:"nofill"),onClick:r=>{l?r.preventDefault():(e.onClick?.(r),n())},onMouseEnter:e.onMouseEnter,"aria-current":t?"page":void 0,"data-cy":e.dataCy,tabIndex:0,href:e.href,as:e.as,iconLeft:e.icon,text:e.label,iconRight:e.tag?(0,a.jsx)(S.View,{children:e.tag}):void 0});return(0,a.jsx)(S.View,{tag:"li",justify:"space-between",row:!0,grow:!0,shrink:!0,children:l&&e.disabledTooltipText?(0,a.jsx)(er.Tooltip,{tooltip:e.disabledTooltipText,placement:"right",children:(e,r)=>(0,a.jsx)("div",{ref:r,...e,style:{pointerEvents:"auto",flexGrow:1,flexShrink:1,minWidth:0},children:(0,a.jsx)("div",{style:{pointerEvents:"none"},children:u})})}):u})}e.s(["NavItem",()=>ea],601002);var ei=e.i(360118),es=e.i(506017),en=e.i(140487);e.s(["SidebarReferralButton",0,()=>{let[e,r]=(0,i.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(en.Button,{variant:"outlined",size:"small",iconLeft:(0,a.jsx)(ei.default,{}),text:"Refer & Earn",onClick:()=>{r(!0),(0,X.track)(Z.events.NAV_ITEM_CLICK,{target:"referral_link",source:"sidebar",isWorkspace:!1,context:"personal"})},stretch:!0,dataCy:"sidebar-referral-btn"}),(0,a.jsx)(es.ReferralLinkModal,{isOpen:e,onClose:()=>r(!1),trackingContext:"sidebar"})]})}],785683)},226255,e=>{"use strict";var r=e.i(276385),t=e.i(182409),a=e.i(953436),i=e.i(612343),s=e.i(943172),n=e.i(446530),o=e.i(613355);let l=(0,n.cssRecord)({self:[o.rcss.ml(4),o.rcss.height(20),{whiteSpace:"nowrap"}]}),u={as:"/~",href:"/home",label:"Home",icon:(0,r.jsx)(a.default,{})},d={as:"/repls",href:"/replsDashboard",label:"My Apps",icon:(0,r.jsx)(s.default,{})},c={as:"/my-published-apps",href:"/hostingDeployments",label:"Published apps",icon:(0,r.jsx)(t.default,{})};i.default,e.s(["deploymentsItem",0,c,"homeItem",0,u,"navItemPillCss",0,l,"replsItem",0,d])},989218,e=>{e.v({content:"index-module__2SmNCa__content",footer:"index-module__2SmNCa__footer",header:"index-module__2SmNCa__header",hideWhenCollapsed:"index-module__2SmNCa__hideWhenCollapsed",iconButton:"index-module__2SmNCa__iconButton",isOpen:"index-module__2SmNCa__isOpen",planUsageMonitor:"index-module__2SmNCa__planUsageMonitor",root:"index-module__2SmNCa__root",sidebarToggle:"index-module__2SmNCa__sidebarToggle"})},354270,162102,e=>{"use strict";var r=e.i(276385),t=e.i(750854),a=e.i(389959),i=e.i(693432),s=e.i(923242),n=e.i(917255),o=e.i(965097),l=e.i(40916),u=e.i(346781),d=e.i(255701),c=e.i(357253),g=e.i(652830),p=e.i(133522),m=e.i(76112),h=e.i(394572),f=e.i(908628),x=e.i(749556),R=e.i(334028),y=e.i(612343),b=e.i(761201),v=e.i(596139),w=e.i(765826);e.i(537010);var _=e.i(82048),j=e.i(623136),S=e.i(968783),I=e.i(368964),C=e.i(963335),P=e.i(993796),U=e.i(60017),k=e.i(325990),A=e.i(956111),E=e.i(858248),O=e.i(709485),T=e.i(894122),D=e.i(370995),L=e.i(532130),F=e.i(341126),B=e.i(541508),N=e.i(815184),M=e.i(783509),$=e.i(29032),q=e.i(65911),z=e.i(219577),V=e.i(575608),G=e.i(443546),W=e.i(601002),Q=e.i(120296),H=e.i(495764),Y=e.i(785683),K=e.i(953436),X=e.i(75916),Z=e.i(943172),J=e.i(624782),ee=e.i(226255);let er=e=>r=>r.pathname===e;function et(e,t,a=!1){let{sidebarItems:{homeItem:i,replsItem:s,deploymentsItem:n,usageItem:o,connectorsItem:l}}=function({org:e,isSubscribed:t=!1}={}){var a;let i,s,n,o=e?(0,F.orgLinks)({slug:e.slug}):void 0,l=(0,P.useFlag)({controlName:"flag-free-plan",default:!1}),u=l&&!t&&!e,d=(a=e?.id,n=!(s=(0,q.useUsageActionRequired)(a)).loading&&s.actionRequired,{as:"/usage",href:"/usage",label:"Usage",icon:(0,r.jsx)(m.default,{}),tag:n?(0,r.jsx)(J.Pill,{css:ee.navItemPillCss.self,text:"Action required",colorway:"yellow"}):void 0}),c=o?{...o.home,label:"Home",icon:(0,r.jsx)(K.default,{})}:ee.homeItem,g=(0,P.useFlag)({controlName:"flag-agent-teamwork",default:!1}),p=o?{...o.repls,icon:(0,r.jsx)(Z.default,{}),label:g?b.REPL_DISPLAY_NAME.plural:"Apps"}:{href:"/replsDashboard",as:"/repls",label:g?`My ${b.REPL_DISPLAY_NAME.plural}`:"My Apps",icon:(0,r.jsx)(Z.default,{}),routerPath:"/replsDashboard",active:e=>"/replsDashboard"===e.pathname},h=g?`Published ${b.REPL_DISPLAY_NAME.plural}`:ee.deploymentsItem.label,f=o?{...ee.deploymentsItem,...o.deployments,label:h}:{...ee.deploymentsItem,label:h};return!l||t||e?o?i={...o.connectors,icon:(0,r.jsx)(X.default,{}),label:"Integrations"}:o||(i={href:"/integrations",as:"/integrations",label:"Integrations",icon:(0,r.jsx)(X.default,{}),routerPath:"/integrations"}):i=void 0,{sidebarItems:{homeItem:c,replsItem:p,deploymentsItem:f,usageItem:u?void 0:d,connectorsItem:i}}}({org:e,isSubscribed:a});return{home:{...i,active:i.routerPath?er(i.routerPath):er(i.href.toString())},repls:{...s,active:!!s.routerPath&&er(s.routerPath)},deployments:n?{...n,active:n.routerPath?er(n.routerPath):er(n.href.toString())}:void 0,connectors:l?{...l,active:l.routerPath?er(l.routerPath):er(l.href.toString())}:void 0,usage:t&&o?{...o,active:er(o.href.toString())}:void 0}}var ea=e.i(761273);function ei(e){let r=(0,ea.useBreakpoint)("tabletMin");return(0,P.useFlag)({controlName:"flag-golden-global-traveler-toggle"})?e:!!r||e}e.s(["useSidebarOpenState",()=>ei],162102);var es=e.i(480028),en=e.i(173703),eo=e.i(140487),el=e.i(136540),eu=e.i(739521),ed=e.i(960178),ec=e.i(625484),eg=e.i(38733),ep=e.i(989218);let em=(0,es.cvarsFrom)("index.module.css",["--sidebar-width","--content-width","--sidebar-z-index","--header-height","--border-color"]);function eh(e){let s,l,u,d=(0,t.useRouter)(),c=ei(e.isOpen),m=e.isOpen?240:42,h={[em.sidebarWidth]:m+"px",[em.contentWidth]:"240px",[em.sidebarZIndex]:z.SIDEBAR_Z_INDEX.toString(),[em.headerHeight]:z.APP_HEADER_HEIGHT+"px"},{isGooglePlayStoreTWA:f}=(0,a.useContext)(_.GooglePlayContext),{currentUser:x}=e,{orgId:R,orgRole:y}=(0,S.useCurrentUserStoredOrgContext)(),b=void 0===R,C=!x.isSubscribed&&b,k=!R&&x.isSubscribed,D=y===I.SystemOrgGroupType.SystemViewers,{data:F,loading:B}=(0,i.useLayoutSidebarGetOrgQuery)({variables:{orgId:R??""},skip:!R}),N=F?.getOrg?.__typename==="Org"?F.getOrg:void 0,$=!!R&&B,q=(0,P.useFlag)({controlName:"flag-golden-global-traveler-toggle"}),V=(0,P.useFlag)({controlName:w.REFERRAL_PROMO_FEATURE_FLAG}),H=!c&&q,K=(0,U.useIsUnifiedPlanEnabled)(b?{currentUser:x}:{org:N}),X=(0,U.useIsUnifiedPlanEnabledForAnyOrg)(x),Z="CurrentUserOrganizationConnection"===x.orgs.__typename&&x.orgs.items.some(e=>(0,M.isEnterpriseOrg)(e.org.dealContext));return N?(s=N.name,l=N.image,u=N.id):($?(s="",l=void 0):(s=x.firstName??x.username,l=x.image),u=void 0),(0,r.jsxs)(en.ShadesSurface,{border:{side:"right"},elevate:"1x",tag:"nav",clsx:[ep.default.root,{[ep.default.isOpen]:c}],style:h,children:[(0,r.jsx)(ec.View,{clsx:ep.default.header,p:6,row:!0,gap:6,align:"center",justify:"end",children:(0,r.jsx)(ew,{})}),(0,r.jsxs)(ec.View,{clsx:ep.default.content,px:6,grow:!0,shrink:!0,gap:16,children:[X?(0,r.jsx)(ec.View,{clsx:ep.default.hideWhenCollapsed,children:(0,r.jsx)(j.OwnerPill,{ownerName:s,image:l,currentOrgId:u,isNewDesignEnabled:X,alignment:"start",stretch:!0})}):null,e.sidebarType===L.SidebarType.Index?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(r.Fragment,{children:D&&N?(0,r.jsx)(eR,{currentOrg:N,isUsingLegacyPersonalContext:b,iconButton:H}):(0,r.jsx)(ex,{currentOrg:N,isUsingLegacyPersonalContext:b,iconButton:H,isSubscribed:x.isSubscribed,isUnifiedPlansEnabled:K})}),(0,r.jsx)(ec.View,{clsx:ep.default.hideWhenCollapsed,children:K||b||!N?null:(0,r.jsx)(eb,{org:N})})]}):(0,r.jsx)(ef,{})]}),e.sidebarType===L.SidebarType.Index?(0,r.jsxs)(ec.View,{p:12,gap:6,clsx:ep.default.footer,children:[!R&&V&&!Z&&c?(0,r.jsx)(ec.View,{pb:4,children:(0,r.jsx)(eg.PromoPill,{title:"Celebrating women's day",label:x.isSubscribed&&!x.userSubscription?.isTrial?`Gift one free month of Replit ${v.corePlanName} and receive $20 credit on your next bill.`:`Gift one free month of Replit ${v.corePlanName} and get one free month for yourself.`,onClick:()=>{(0,E.track)(O.events.NAV_ITEM_CLICK,{target:"women_referral_promo",source:"sidebar",isWorkspace:!1,context:"personal"}),(0,A.updatePathWithQueryParams)({router:d,params:[{mode:"add",key:T.REFERRAL_SHOW_PARAM,value:"true"}]})}})}):null,(0,r.jsxs)(ec.View,{clsx:ep.default.hideWhenCollapsed,tag:"ul",gap:2,children:[(0,r.jsx)(W.NavItem,{iconButton:H,href:"https://learn.replit.com/",label:"Learn",icon:(0,r.jsx)(o.default,{}),active:!1}),(0,r.jsx)(W.NavItem,{iconButton:H,href:"https://docs.replit.com",label:"Documentation",icon:(0,r.jsx)(n.default,{}),active:!1})]}),(0,r.jsxs)(ec.View,{clsx:ep.default.hideWhenCollapsed,gap:6,children:[C?(0,r.jsx)(ec.View,{clsx:ep.default.planUsageMonitor,children:(0,r.jsx)(Q.default,{})}):null,k?(0,r.jsx)(Y.SidebarReferralButton,{}):null]}),(0,r.jsxs)(ec.View,{gap:6,row:!0,align:"center",justify:"space-between",children:[q?(0,r.jsx)(el.IconButton,{clsx:ep.default.sidebarToggle,size:28,alt:"Toggle sidebar",onClick:()=>e.setIsOpen(!e.isOpen),children:e.isOpen?(0,r.jsx)(p.default,{}):(0,r.jsx)(g.default,{})}):null,(0,r.jsx)(ec.View,{clsx:ep.default.hideWhenCollapsed,children:f?null:(0,r.jsx)(G.InstallOnReplitFooter,{isStaffplorer:x.isStaff&&x.isExplorer})})]})]}):null]})}function ef(){let e=(0,N.useOrgGroupNavItems)();return(0,r.jsx)(ec.View,{tag:"ul",gap:2,children:e.map(e=>(0,r.jsx)(W.NavItem,{...e,active:e.active??!1},`nav-item-${e.label}`))})}let ex=({currentOrg:e,isUsingLegacyPersonalContext:a,iconButton:i,isSubscribed:n=!1,isUnifiedPlansEnabled:o=!1})=>{let{home:u,repls:c,deployments:g,usage:p,connectors:m}=et(e,a,n),f=(0,$.usePrefetchFolderList)(),x=(0,t.useRouter)(),R=(0,S.useIsCurrentOrgEnterprise)(),v=(0,P.useFlag)({controlName:"flag-sapphire-tide"}),w=(0,P.useFlag)({controlName:"flag-agent-teamwork",default:!1}),_="Create App";v?_="Create something new":w&&(_=`Create ${b.REPL_DISPLAY_NAME.singular}`);let{disableImport:j,disableIntegrations:I}=(0,C.default)(e?.id),U="Disabled by your enterprise admin",k=o&&R&&e?.authorizations.viewOrgAnalytics?.isAuthorized,T=e?(0,F.orgLinks)({slug:e.slug}).analytics:void 0,L=e?(0,F.orgLinks)({slug:e.slug}).groups:void 0;return(0,r.jsxs)(ec.View,{gap:16,children:[(0,r.jsxs)(ec.View,{gap:8,children:[(0,r.jsx)(W.NavItem,{iconButton:i,active:!1,icon:(0,r.jsx)(l.default,{}),centered:!0,label:_,dataCy:"sidebar-new-repl-btn",variant:"outlined",href:{pathname:e?`/t/${e.slug}`:"/home",query:{create:!0}},as:e?`/t/${e.slug}`:"/~",onClick:()=>{(0,E.track)(O.events.OPEN_REPL_CREATION_PAGE,{source:"global sidebar",context:(0,S.getOrgTrackingContext)(e)})}}),(0,r.jsx)(W.NavItem,{iconButton:i,active:!1,icon:(0,r.jsx)(h.default,{}),centered:!0,label:"Import code or design",dataCy:"sidebar-import-btn",variant:"outlined",disabled:j,disabledTooltipText:U,href:{pathname:"/import"},as:"/import",onClick:()=>{(0,E.track)(O.events.OPEN_IMPORT_PAGE,{source:"global sidebar",href:window.location.href,context:(0,S.getOrgTrackingContext)(e)})}})]}),(0,r.jsxs)(ec.View,{tag:"ul","aria-label":"Pages",gap:2,children:[(0,r.jsx)(W.NavItem,{...u,active:u.active??!1,iconButton:i}),(0,r.jsxs)(H.RecentReplsPopover,{children:[(e,t)=>(0,r.jsx)(ec.View,{grow:!0,shrink:!0,style:i?{alignSelf:"start"}:void 0,innerRef:t,...e,children:(0,r.jsx)(W.NavItem,{...c,active:c.active??!1,label:w?b.REPL_DISPLAY_NAME.plural:"Apps",onMouseEnter:()=>f(),iconButton:i,disableTooltip:!0})}),e?(0,r.jsx)(H.OrgSidebarRecentRepls,{orgId:e.id}):(0,r.jsx)(H.SidebarRecentRepls,{})]}),g?(0,r.jsx)(W.NavItem,{...g,active:g.active??!1,iconButton:i}):null,m?(0,r.jsx)(W.NavItem,{...m,active:m.active??!1,iconButton:i,disabled:I,disabledTooltipText:U}):null,p&&!o?(0,r.jsx)(W.NavItem,{iconButton:i,...p,active:p.active??!1}):null,o&&R&&L?(0,r.jsx)(W.NavItem,{iconButton:i,...L,label:"Groups",icon:(0,r.jsx)(y.default,{}),active:ey(L.routerPath)}):null,k&&T?(0,r.jsx)(W.NavItem,{iconButton:i,...T,label:"Analytics",icon:(0,r.jsx)(s.default,{}),active:ey(T.routerPath)}):null,o?(0,r.jsx)(W.NavItem,{iconButton:i,label:"Settings",icon:(0,r.jsx)(d.default,{}),active:!1,href:"#",onClick:e=>{e.preventDefault(),(0,A.updatePathWithQueryParams)({router:x,params:[{mode:"add",key:D.SETTINGS_SHOW_PARAM,value:"true"}]})}}):null]})]})},eR=({currentOrg:e,isUsingLegacyPersonalContext:t,iconButton:i})=>{let[s,n]=(0,a.useState)(!1),{home:o,repls:l}=et(e,t),u=(0,P.useFlag)({controlName:"flag-agent-teamwork",default:!1});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ec.View,{gap:6,children:[i?(0,r.jsx)(el.IconButton,{clsx:ep.default.iconButton,size:32,colorway:"primary",alt:"Request a Member Seat",onClick:()=>n(!0),children:(0,r.jsx)(x.default,{})}):(0,r.jsx)(eo.Button,{variant:"outlined",colorway:"primary",text:"Request a Member Seat",onClick:()=>n(!0),iconLeft:(0,r.jsx)(x.default,{})}),(0,r.jsxs)(ec.View,{tag:"ul","aria-label":"Pages",gap:2,children:[(0,r.jsx)(W.NavItem,{...o,active:o.active??!1,iconButton:i}),(0,r.jsx)(W.NavItem,{...l,active:l.active??!1,label:u?`All ${b.REPL_DISPLAY_NAME.plural}`:"All Apps",iconButton:i})]})]}),(0,r.jsx)(B.default,{isOpen:s,orgId:e?.id,orgName:e?.name,onClose:()=>n(!1),onSuccess:()=>n(!1)})]})},ey=e=>r=>r.pathname===e,eb=({org:e})=>{let{slug:t}=e,a=(0,F.orgLinks)({slug:t}),i=e.authorizations.viewUsage.isAuthorized&&e.authorizations.viewSubscription.isAuthorized,n=e.authorizations.viewOrgAnalytics?.isAuthorized,o=(0,k.useOrgFlag)({controlName:"flag-security-center",default:!1})&&e.authorizations.viewOrgSecurity?.isAuthorized;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ec.View,{p:6,children:(0,r.jsx)(ed.Text,{variant:"small",color:"dimmest",height:"singleLine",children:"Manage Organization"})}),(0,r.jsxs)(ec.View,{tag:"ul","aria-label":"Manage Workspace",gap:2,children:[(0,r.jsx)(W.NavItem,{...a.members,label:"Members",icon:(0,r.jsx)(R.default,{}),active:ey(a.members.routerPath)}),(0,r.jsx)(W.NavItem,{...a.groups,label:"Groups",icon:(0,r.jsx)(y.default,{}),active:ey(a.groups.routerPath)}),i?(0,r.jsx)(ev,{...a.usage,orgId:e.id,active:ey(a.usage.routerPath)}):null,n?(0,r.jsx)(W.NavItem,{...a.analytics,label:"Analytics",icon:(0,r.jsx)(s.default,{}),active:ey(a.analytics.routerPath)}):null,o?(0,r.jsx)(W.NavItem,{...a.security,label:"Security",icon:(0,r.jsx)(c.default,{}),active:ey(a.security.routerPath)}):null,(0,r.jsx)(W.NavItem,{...a.profile,label:"Profile",icon:(0,r.jsx)(f.default,{}),active:ey(a.profile.routerPath)}),(0,r.jsx)(W.NavItem,{...a.settings,label:"Settings",icon:(0,r.jsx)(d.default,{}),active:e=>e.pathname===a.settings.routerPath||e.pathname===`${a.settings.routerPath}/[[...tab]]`})]})]})},ev=e=>{let t=(0,q.useUsageActionRequired)(e.orgId),a=!t.loading&&t.actionRequired;return(0,r.jsx)(W.NavItem,{...e,icon:(0,r.jsx)(m.default,{}),tag:a?(0,r.jsx)(J.Pill,{text:"Action required",colorway:"yellow"}):void 0,label:"Usage"})};function ew(e){let[t,a]=(0,V.useGloablSearchState)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(el.IconButton,{...e,alt:"Search",size:28,onClick:()=>a(!0),children:(0,r.jsx)(u.default,{})}),(0,r.jsx)(eu.Modal,{noPadding:!0,hideCloseButton:!0,isOpen:t,onRequestClose:()=>a(!1),children:(0,r.jsx)(V.GlobalSearch,{})})]})}e.s(["COLLAPSED_SIDEBAR_WIDTH",0,42,"EXPANDED_SIDEBAR_WIDTH",0,240,"Sidebar",()=>eh],354270)}]);

//# debugId=598f1563-1009-8517-72d6-8658695d0ef3
//# sourceMappingURL=46e5fb78b7455132.js.map