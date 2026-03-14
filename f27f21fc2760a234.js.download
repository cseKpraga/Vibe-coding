;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="2c397efb-c87b-49e8-dc0d-497e8333b496")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,975486,e=>{"use strict";e.s(["ORG_NAME_MAX_LENGTH",0,50,"ORG_NAME_MIN_LENGTH",0,2,"ORG_PATH_PREFIX",0,"/t/"])},341126,e=>{"use strict";var r=e.i(975486);let t=({slug:e})=>`${r.ORG_PATH_PREFIX}${e}`,n=`${r.ORG_PATH_PREFIX}[orgSlug]`,o=n+"/groups/[groupSlug]/[groupId]";e.s(["newOrgLink",0,{href:"/pricing",as:void 0},"orgGroupLinks",0,({orgSlug:e,groupId:r,groupSlug:n})=>{let i=(({orgSlug:e,groupId:r,groupSlug:n})=>{let o=t({slug:e});return`${o}/groups/${n}/${r}`})({orgSlug:e,groupId:r,groupSlug:n});return{members:{href:i+"/members",routerPath:o+"/members",as:void 0},settings:{href:i+"/settings",routerPath:o+"/settings",as:void 0},permissions:{href:i+"/permissions",routerPath:o+"/permissions",as:void 0}}},"orgLinks",0,({slug:e})=>{let o=t({slug:e});return{home:{href:o,routerPath:`${r.ORG_PATH_PREFIX}[orgSlug]`,as:void 0},repls:{href:o+"/repls",routerPath:n+"/repls",as:void 0},deployments:{href:o+"/deployments",routerPath:n+"/deployments",as:void 0},members:{href:o+"/members",routerPath:n+"/members",as:void 0},connectors:{href:o+"/integrations",routerPath:n+"/integrations",as:void 0},groups:{href:o+"/groups",routerPath:n+"/groups",as:void 0},settings:{href:o+"/settings",routerPath:n+"/settings",as:void 0},projects:{href:o+"/projects",routerPath:n+"/projects",as:void 0},usage:{href:o+"/usage",routerPath:n+"/usage",as:void 0},analytics:{href:o+"/analytics",routerPath:n+"/analytics",as:void 0},profile:{href:o+"/profile/settings",routerPath:n+"/profile/settings",as:void 0},security:{href:o+"/security",routerPath:n+"/security",as:void 0}}},"orgProjectLink",0,({org:e,projectId:r})=>({href:{pathname:"/t/[orgSlug]/projects/[projectId]",query:{orgSlug:e.slug,projectId:r}}}),"orgPublicProfileLink",0,({orgSlug:e})=>{let r=t({slug:e});return{href:`${r}/profile`,routerPath:n+"/profile",as:void 0}},"scimOnboardingRedirectLink",0,({orgSlug:e})=>({href:`${r.ORG_PATH_PREFIX}${e}/scim-onboarding-portal`,as:void 0})])},42330,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment IsUnifiedPlanEnabledOrg on Org {
  id
  customer {
    ... on Customer {
      id
      isUnifiedPlanEnabled
    }
  }
}
    `,n=r.gql`
    fragment IsUnifiedPlanEnabledPersonalWorkspaceCurrentUser on CurrentUser {
  id
  customer {
    id
    isUnifiedPlanEnabled
  }
}
    `,o=r.gql`
    fragment IsUnifiedPlanEnabledForAnyOrg on CurrentUser {
  id
  isUnifiedPlanEnabledForAnyOrg
}
    `;e.s(["IsUnifiedPlanEnabledForAnyOrgFragmentDoc",0,o,"IsUnifiedPlanEnabledOrgFragmentDoc",0,t,"IsUnifiedPlanEnabledPersonalWorkspaceCurrentUserFragmentDoc",0,n])},60017,e=>{"use strict";var r=e.i(993796);function t(e){let t=(0,r.useFlag)({controlName:"feat-unified-plans-killswitch"}),n=(0,r.useFlag)({controlName:"feat-unified-plans-bypass"});return!t&&(!!n||(e.org?e.org.customer?.__typename==="Customer"&&e.org.customer.isUnifiedPlanEnabled:!!e.currentUser&&e.currentUser.customer.isUnifiedPlanEnabled))}function n(e){let t=(0,r.useFlag)({controlName:"feat-unified-plans-killswitch"}),n=(0,r.useFlag)({controlName:"feat-unified-plans-bypass"});return!t&&(!!n||!!e&&e.isUnifiedPlanEnabledForAnyOrg)}e.s(["useIsUnifiedPlanEnabled",()=>t,"useIsUnifiedPlanEnabledForAnyOrg",()=>n])},230227,e=>{"use strict";var r=e.i(368964),t=e.i(973245),n=e.i(304277);e.i(566901);let o={},i=t.gql`
    fragment PersonalWorkspacesDisabledCurrentUser on CurrentUser {
  id
  personalWorkspacesDisabled
}
    `,a=t.gql`
    query PersonalWorkspacesDisabled {
  currentUser {
    ...PersonalWorkspacesDisabledCurrentUser
  }
}
    ${i}`;function s(){let e,{data:t}=(e={...o,...void 0},n.useQuery(a,e)),i=t?.currentUser,s=i?.personalWorkspacesDisabled??r.PersonalWorkspacesDisabledMode.None,l=s!==r.PersonalWorkspacesDisabledMode.None;return{shouldHidePersonalWorkspace:s===r.PersonalWorkspacesDisabledMode.Personal||s===r.PersonalWorkspacesDisabledMode.Full,restrictionMode:s,isRestrictedDomain:l}}e.s(["usePersonalWorkspacesDisabled",()=>s],230227)},783509,e=>{"use strict";var r=e.i(368964),t=e.i(569910),n=e.i(596139);function o(e,n){let o="";switch(e){case r.SystemOrgGroupType.SystemAdmins:o="Admin";break;case r.SystemOrgGroupType.SystemMembers:o="Member";break;case r.SystemOrgGroupType.SystemGuests:o="Guest";break;case r.SystemOrgGroupType.SystemViewers:o="Viewer";break;default:(0,t.default)(e)}return n&&(o+=" (Support)"),o}function i(e){return e?.dealType===r.OrgDealType.Enterprise||e?.dealType===r.OrgDealType.EnterpriseTrial}function a(e){return e===r.PlanId.CoreV3||e===r.PlanId.Pro}function s(e,t){if(e===`Replit ${n.replitTeamsPlanName}`){if(t?.dealType===r.OrgDealType.Enterprise)return(0,n.getEnterprisePlanDisplayName)(!1);if(t?.dealType===r.OrgDealType.EnterpriseTrial)return(0,n.getEnterprisePlanDisplayName)(!0);if(t?.dealType===r.OrgDealType.Trial)return`Replit ${n.replitTeamsPlanName} Trial`}return e}e.s(["convertToSalesLedPlanNameIfApplicable",()=>s,"getFormattedOrgWorkspaceName",0,({isInOrg:e,ownerName:r,maxNameLength:t=20})=>{if(!r)return"Personal Workspace";let n=r.trim();return n.length>t&&!e?"Personal Workspace":e?`${n} Workspace`:`${n}'s Workspace`},"isCappedPlan",()=>a,"isEnterpriseOrg",()=>i,"orgGroupToDisplayName",()=>o])},183462,e=>{"use strict";var r=e.i(973245),t=e.i(713436),n=e.i(42330);let o=r.gql`
    fragment LayoutHeaderAvatarDropdownCurrentUser on CurrentUser {
  id
  url
  username
  fullName
  image
  userSubscriptionType
  ...CoreSubscriptionPlanStatus
}
    ${t.CoreSubscriptionPlanStatusFragmentDoc}`,i=r.gql`
    fragment OrgSwitcherOrg on Org {
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
  ...IsUnifiedPlanEnabledOrg
  authorizations {
    viewUsage {
      isAuthorized
      message
    }
    viewSubscription {
      isAuthorized
      message
    }
    viewOrgAnalytics {
      isAuthorized
      message
    }
    viewOrgSecurity {
      isAuthorized
      message
    }
  }
}
    ${n.IsUnifiedPlanEnabledOrgFragmentDoc}`,a=r.gql`
    fragment OrgSwitcherOrganizationConnectionFragment on CurrentUserOrganizationConnection {
  items {
    org {
      ...OrgSwitcherOrg
    }
    type
  }
}
    ${i}`,s=r.gql`
    fragment OrgSwitcherCurrentUser on CurrentUser {
  id
  image
  username
  url
  fullName
  firstName
  email
  isMemberOfAnyOrg
  userSubscriptionType
  customer {
    ... on Customer {
      id
      isUnifiedPlanEnabled
    }
  }
  orgs(count: 50) {
    __typename
    ... on CurrentUserOrganizationConnection {
      ...OrgSwitcherOrganizationConnectionFragment
    }
    ... on Error {
      message
    }
    ... on NotFoundError {
      message
    }
    ... on UserError {
      message
    }
  }
  ...CoreSubscriptionPlanStatus
}
    ${a}
${t.CoreSubscriptionPlanStatusFragmentDoc}`;e.s(["LayoutHeaderAvatarDropdownCurrentUserFragmentDoc",0,o,"OrgSwitcherCurrentUserFragmentDoc",0,s])},825516,e=>{"use strict";var r=e.i(973245),t=e.i(371979),n=e.i(304277);e.i(566901);let o={},i=r.gql`
    fragment ReplEnvironmentHeaderInviteButtonRepl on Repl {
  id
  owner {
    ... on User {
      id
    }
    ... on Team {
      id
    }
  }
  org {
    id
    slug
    type
  }
}
    `,a=r.gql`
    query InviteButtonOrgReplPerms($replId: String!) {
  getRepl(id: $replId) {
    __typename
    ... on Repl {
      __typename
      ...ReplMultiplayerStatusV2
    }
  }
}
    ${t.ReplMultiplayerStatusV2FragmentDoc}`;function s(e){let r={...o,...e};return n.useQuery(a,r)}e.s(["ReplEnvironmentHeaderInviteButtonReplFragmentDoc",0,i,"useInviteButtonOrgReplPermsQuery",()=>s])},589721,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);let n={},o=r.gql`
    fragment NewPaneRepl on Repl {
  id
  config {
    isAgentStack
    isServer
    isExpertMode
  }
}
    `,i=r.gql`
    query NewPanePrimaryOutput($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      ...NewPaneRepl
    }
  }
}
    ${o}`;function a(e){let r={...n,...e};return t.useQuery(i,r)}e.s(["NewPaneReplFragmentDoc",0,o,"useNewPanePrimaryOutputQuery",()=>a])},987143,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment UserLinkUser on User {
  id
  url
  username
}
    `,n=r.gql`
    fragment UserLinkCurrentUser on CurrentUser {
  id
  url
  username
}
    `;e.s(["UserLinkCurrentUserFragmentDoc",0,n,"UserLinkUserFragmentDoc",0,t])},239612,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment CreateProjectForkRepl on Repl {
  id
  publishedAs
  deployment {
    id
    activeRelease {
      id
    }
  }
}
    `;e.s(["CreateProjectForkReplFragmentDoc",0,t])},655366,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment CrosisContextCurrentUser on CurrentUser {
  id
  username
  isSubscribed
}
    `,n=r.gql`
    fragment CrosisContextRepl on Repl {
  id
  language
  slug
  user {
    id
    username
  }
  authorizations {
    editFileContents {
      isAuthorized
    }
  }
}
    `;e.s(["CrosisContextCurrentUserFragmentDoc",0,t,"CrosisContextReplFragmentDoc",0,n])},834966,585232,269990,714632,919158,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);var n=e.i(951262);let o={},i=r.gql`
    fragment WorkspaceDoGitProviderImportCurrentUser on CurrentUser {
  id
  username
}
    `,a=r.gql`
    fragment WorkspaceDoGitProviderImportRepl on Repl {
  id
  config {
    gitRemoteUrl
    doClone
    isAgentRepl
  }
  slug
}
    `,s=r.gql`
    query WorkspaceDoGitProviderImportFlow($replId: String!) {
  getRepl(id: $replId) {
    ...WorkspaceDoGitProviderImportRepl
  }
  currentUser {
    ...WorkspaceDoGitProviderImportCurrentUser
  }
}
    ${a}
${i}`;function l(e){let r={...o,...e};return t.useQuery(s,r)}let u=r.gql`
    mutation WorkspaceDoGitProviderImportFlowFinishClone($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      config {
        doClone
      }
    }
  }
}
    `;function p(e){let r={...o,...e};return n.useMutation(u,r)}let d=r.gql`
    query GitHubImportGetTopLanguages($input: GitHubRepoInfoInput!) {
  githubRepoInfo(input: $input) {
    ... on GitHubRepoInfoOutput {
      topLanguages
      repositorySource
    }
    ... on UnauthorizedError {
      message
    }
    ... on ServiceUnavailable {
      message
    }
    ... on UserError {
      message
    }
    ... on NotFoundError {
      message
    }
  }
}
    `;function c(e){let r={...o,...e};return t.useQuery(d,r)}let g=r.gql`
    query BitbucketImportGetTopLanguages($input: BitbucketRepoInfoInput!) {
  bitbucketRepoInfo(input: $input) {
    ... on BitbucketRepoInfoOutput {
      topLanguages
      repositorySource
    }
    ... on UnauthorizedError {
      message
    }
    ... on ServiceUnavailable {
      message
    }
    ... on UserError {
      message
    }
    ... on NotFoundError {
      message
    }
  }
}
    `;function m(e){let r={...o,...e};return t.useQuery(g,r)}e.s(["WorkspaceDoGitProviderImportCurrentUserFragmentDoc",0,i,"WorkspaceDoGitProviderImportReplFragmentDoc",0,a,"useBitbucketImportGetTopLanguagesQuery",()=>m,"useGitHubImportGetTopLanguagesQuery",()=>c,"useWorkspaceDoGitProviderImportFlowFinishCloneMutation",()=>p,"useWorkspaceDoGitProviderImportFlowQuery",()=>l],834966);let f=r.gql`
    fragment PageTitleRepl on Repl {
  id
  title
  project {
    id
    title
  }
}
    `;e.s(["PageTitleReplFragmentDoc",0,f],585232);var R=e.i(239612);let _={},C=r.gql`
    fragment ConvertedToProjectModalRepl on Repl {
  id
  org {
    id
  }
  project {
    id
  }
}
    `,h=r.gql`
    query ConvertedToProjectModal($id: String!) {
  getRepl(id: $id) {
    ... on Repl {
      id
      org {
        id
        slug
      }
      project {
        id
        title
        mainRepl {
          id
        }
      }
      ...CreateProjectForkRepl
    }
  }
}
    ${R.CreateProjectForkReplFragmentDoc}`;function y(e){let r={..._,...e};return t.useQuery(h,r)}e.s(["ConvertedToProjectModalReplFragmentDoc",0,C,"useConvertedToProjectModalQuery",()=>y],269990);let x=r.gql`
    fragment WorkspaceHeaderProjectMenuRepl on Repl {
  id
  iconUrl
  org {
    id
    slug
  }
  project {
    id
    title
  }
}
    `;e.s(["WorkspaceHeaderProjectMenuReplFragmentDoc",0,x],714632);let S=r.gql`
    fragment ReplInfoRepl on Repl {
  id
  title
  iconUrl
  project {
    id
  }
}
    `;e.s(["ReplInfoReplFragmentDoc",0,S],919158)},665591,e=>{"use strict";var r=e.i(973245),t=e.i(42330),n=e.i(825516),o=e.i(987143),i=e.i(183462),a=e.i(304277);e.i(566901);let s={},l=r.gql`
    fragment WorkspaceHeaderNavMenuRepl on Repl {
  id
  org {
    id
    slug
    ...IsUnifiedPlanEnabledOrg
  }
  ...ReplEnvironmentHeaderInviteButtonRepl
}
    ${t.IsUnifiedPlanEnabledOrgFragmentDoc}
${n.ReplEnvironmentHeaderInviteButtonReplFragmentDoc}`,u=r.gql`
    fragment WorkspaceHeaderNavMenuCurrentUser on CurrentUser {
  id
  image
  username
  ...IsUnifiedPlanEnabledPersonalWorkspaceCurrentUser
  ...UserLinkCurrentUser
  ...OrgSwitcherCurrentUser
}
    ${t.IsUnifiedPlanEnabledPersonalWorkspaceCurrentUserFragmentDoc}
${o.UserLinkCurrentUserFragmentDoc}
${i.OrgSwitcherCurrentUserFragmentDoc}`,p=r.gql`
    query WorkspaceHeaderNavMenu($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      ...WorkspaceHeaderNavMenuRepl
    }
  }
  currentUser {
    ...WorkspaceHeaderNavMenuCurrentUser
  }
}
    ${l}
${u}`;function d(e){let r={...s,...e};return a.useQuery(p,r)}e.s(["WorkspaceHeaderNavMenuReplFragmentDoc",0,l,"useWorkspaceHeaderNavMenuQuery",()=>d])},621369,e=>{e.v({defaultText:"RecentReplsMenu-module__Dv0BgW__defaultText",recentReplsLabel:"RecentReplsMenu-module__Dv0BgW__recentReplsLabel",surfaceShades:"RecentReplsMenu-module__Dv0BgW__surfaceShades"})},495764,718398,265140,552207,266899,e=>{"use strict";var r=e.i(276385),t=e.i(389959),n=e.i(486597),o=e.i(624071),i=e.i(32988),a=e.i(973245),s=e.i(655366),l=e.i(834966),u=e.i(850176),p=e.i(42330),d=e.i(9270),c=e.i(585232),g=e.i(269990),m=e.i(714632),f=e.i(919158),R=e.i(825516),_=e.i(665591);let C=a.gql`
    fragment DesktopAppNavMenuRepl on Repl {
  ...WorkspaceHeaderNavMenuRepl
}
    ${_.WorkspaceHeaderNavMenuReplFragmentDoc}`,h=a.gql`
    fragment ReplEnvironmentHeaderRepl on Repl {
  id
  url
  agentFeedback {
    ... on ReplAgentFeedback {
      isEnabled
    }
  }
  authorizations {
    viewPermissions {
      isAuthorized
    }
    viewDeploymentConfig {
      isAuthorized
    }
    viewFreemiumExperience {
      isAuthorized
    }
  }
  owner {
    ... on Team {
      id
    }
    ... on User {
      id
      isSubscribed
    }
  }
  hostingDeployment {
    ... on HostingDeployment {
      id
      timeCreated
      replitAppSubdomain
      latestBuildStatus
      currentBuild {
        id
        provider
      }
    }
  }
  config {
    isInPlanningPhase
    isWebDesignMockup
  }
  isFreeUserWithStaticDeployment
  ...WorkspaceHeaderProjectMenuRepl
  ...ReplInfoRepl
  ...ReplEnvironmentHeaderInviteButtonRepl
  ...DesktopAppNavMenuRepl
}
    ${m.WorkspaceHeaderProjectMenuReplFragmentDoc}
${f.ReplInfoReplFragmentDoc}
${R.ReplEnvironmentHeaderInviteButtonReplFragmentDoc}
${C}`;var y=e.i(589721),x=e.i(304277);e.i(566901);var S=e.i(951262);let v={},P=a.gql`
    fragment FigmaImportFlowRepl on Repl {
  id
  config {
    figmaUrl
    figmaImportStatus
  }
}
    `,O=a.gql`
    query FigmaImportFlow($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      id
      ...FigmaImportFlowRepl
    }
  }
}
    ${P}`;function w(e){let r={...v,...e};return x.useQuery(O,r)}let k=a.gql`
    mutation UpdateReplForFigmaImport($input: UpdateReplInput!) {
  updateRepl(input: $input) {
    repl {
      id
      isRenamed
      title
      ...FigmaImportFlowRepl
    }
  }
}
    ${P}`;function I(e){let r={...v,...e};return S.useMutation(k,r)}let b=a.gql`
    mutation GetFigmaIntermediateToken($input: GetFigmaIntermediateTokenInput!) {
  getFigmaIntermediateToken(input: $input) {
    ... on FigmaImportIntermediateToken {
      token
    }
    ... on NoOAuthFoundError {
      message
    }
    ... on InvalidFigmaUrlError {
      message
    }
    ... on FigmaRateLimitError {
      message
    }
  }
}
    `;function U(e){let r={...v,...e};return S.useMutation(b,r)}e.s(["FigmaImportFlowReplFragmentDoc",0,P,"useFigmaImportFlowQuery",()=>w,"useGetFigmaIntermediateTokenMutation",()=>U,"useUpdateReplForFigmaImportMutation",()=>I],718398);let D=a.gql`
    fragment ReplEnvironmentDesktopTopLevelHooksRepl on Repl {
  id
  slug
  config {
    isAgentRepl
    isExpertMode
    isInPlanningPhase
  }
  org {
    id
  }
  origin {
    id
  }
  language
  user {
    id
    username
  }
  authorizations {
    editFileContents {
      isAuthorized
    }
  }
}
    `;var F=e.i(279042);let $={},E=a.gql`
    fragment HandleReplRedirectionReplRedirect on ReplRedirect {
  replUrl
}
    `,j=a.gql`
    fragment HandleReplRedirectionSubscriptionExpired on ReplSubscriptionExpired {
  isOwner
  replId
}
    `,G=a.gql`
    fragment HandleReplRedirectionRepl on Repl {
  id
  isOwner
  language
  ...ReplLinkRepl
  authorizations {
    connectToWorkspace {
      isAuthorized
    }
  }
  org {
    id
  }
}
    ${F.ReplLinkReplFragmentDoc}`,T=a.gql`
    query HandleReplRedirection($replId: String!) {
  getRepl(id: $replId) {
    ... on Repl {
      ...HandleReplRedirectionRepl
      heliumMigrationStatus {
        isUsingHelium
        shouldMigrateToHelium
      }
    }
    ... on ReplRedirect {
      ...HandleReplRedirectionReplRedirect
    }
    ... on ReplSubscriptionExpired {
      ...HandleReplRedirectionSubscriptionExpired
    }
  }
}
    ${G}
${E}
${j}`;function M(e){let r={...$,...e};return x.useQuery(T,r)}e.s(["HandleReplRedirectionReplFragmentDoc",0,G,"HandleReplRedirectionReplRedirectFragmentDoc",0,E,"HandleReplRedirectionSubscriptionExpiredFragmentDoc",0,j,"useHandleReplRedirectionQuery",()=>M],265140);let L=a.gql`
    fragment ReplEnvironmentDesktopCurrentUser on CurrentUser {
  id
  isAdmin: hasRole(role: ADMIN)
  ...CrosisContextCurrentUser
  workspacePreferences
  ...WorkspaceDoGitProviderImportCurrentUser
  ...AiProviderCurrentUser
  ...IsUnifiedPlanEnabledPersonalWorkspaceCurrentUser
}
    ${s.CrosisContextCurrentUserFragmentDoc}
${l.WorkspaceDoGitProviderImportCurrentUserFragmentDoc}
${u.AiProviderCurrentUserFragmentDoc}
${p.IsUnifiedPlanEnabledPersonalWorkspaceCurrentUserFragmentDoc}`,q=a.gql`
    fragment ReplAiAuthorizations on ReplAuthorizations {
  useAdvancedChat: useAiChat(model: advanced) {
    isAuthorized
    code
    message
  }
  connectToWorkspace {
    isAuthorized
    code
  }
}
    `,W=a.gql`
    fragment ReplEnvironmentDesktopRepl on Repl {
  id
  title
  layoutState
  description
  url
  origin {
    id
  }
  org {
    ...IsUnifiedPlanEnabledOrg
  }
  config {
    isAgentStack
    isInPlanningPhase
    figmaUrl
    ...ReplAgentSettingsReplConfig
  }
  ...CrosisContextRepl
  ...PageTitleRepl
  authorizations {
    ...ReplAiAuthorizations
  }
  ...ConvertedToProjectModalRepl
  ...WorkspaceDoGitProviderImportRepl
  ...ReplEnvironmentHeaderRepl
  ...NewPaneRepl
  ...FigmaImportFlowRepl
  ...ReplEnvironmentDesktopTopLevelHooksRepl
  ...HandleReplRedirectionRepl
}
    ${p.IsUnifiedPlanEnabledOrgFragmentDoc}
${d.ReplAgentSettingsReplConfigFragmentDoc}
${s.CrosisContextReplFragmentDoc}
${c.PageTitleReplFragmentDoc}
${q}
${g.ConvertedToProjectModalReplFragmentDoc}
${l.WorkspaceDoGitProviderImportReplFragmentDoc}
${h}
${y.NewPaneReplFragmentDoc}
${P}
${D}
${G}`;e.s(["ReplAiAuthorizationsFragmentDoc",0,q,"ReplEnvironmentDesktopCurrentUserFragmentDoc",0,L,"ReplEnvironmentDesktopReplFragmentDoc",0,W],552207);let A={},N=a.gql`
    fragment SidebarRecentRepl on Repl {
  id
  title
  iconUrl
  url
  nextPagePathname
  ...ReplEnvironmentDesktopRepl
}
    ${W}`,B=a.gql`
    query SidebarRecentRepls($count: Int!) {
  allRecentRepls: recentRepls(count: $count) {
    id
    ...SidebarRecentRepl
  }
}
    ${N}`;function V(e){let r={...A,...e};return x.useQuery(B,r)}let H=a.gql`
    query SidebarRecentOrgRepls($count: Int!, $orgId: String) {
  currentUser {
    id
    org(orgId: $orgId) {
      ... on Org {
        id
        recentRepls(input: {count: $count}) {
          items {
            id
            ...SidebarRecentRepl
          }
        }
      }
      ... on Error {
        message
      }
    }
  }
}
    ${N}`;function Q(e){let r={...A,...e};return x.useQuery(H,r)}e.s(["useSidebarRecentOrgReplsQuery",()=>Q,"useSidebarRecentReplsQuery",()=>V],266899);var z=e.i(269848),X=e.i(761201),Z=e.i(993796),K=e.i(650587),Y=e.i(219577),J=e.i(173703),ee=e.i(119274),er=e.i(399144),et=e.i(960178),en=e.i(625484),eo=e.i(185591),ei=e.i(418944),ea=e.i(621369);let es=({repl:e})=>{let t=(0,eo.replLinkProps)(e);return(0,r.jsx)(ee.MenuItem,{icon:(0,r.jsx)(ei.default,{size:16,iconUrl:e.iconUrl,alt:e.title}),label:e.title,href:t.href,as:t.as})},el=({loading:e,recentRepls:t})=>{let n=(0,Z.useFlag)({controlName:"flag-agent-teamwork",default:!1})?X.REPL_DISPLAY_NAME.plural:"Apps",o=e?(0,r.jsx)(en.View,{grow:!0,justify:"center",align:"center",children:(0,r.jsx)(z.default,{})}):(0,r.jsx)(r.Fragment,{children:t?.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(et.Text,{multiline:!1,variant:"small",color:"dimmer",clsx:ea.default.recentReplsLabel,children:["Recent ",n]}),(0,r.jsx)(ee.Menu,{"aria-label":`Recent ${n}`,children:t.map(e=>(0,r.jsx)(es,{repl:e},e.id))})]}):(0,r.jsx)(en.View,{grow:!0,justify:"center",align:"center",children:(0,r.jsxs)(et.Text,{variant:"small",color:"dimmer",clsx:ea.default.defaultText,children:["Recently viewed ",n," will show up here"]})})});return(0,r.jsx)(J.ShadesSurface,{colorShade:"popup",p:4,br:6,border:"regular",clsx:ea.default.surfaceShades,children:o})},eu=(e,r)=>{if(!r)return!1;let{clientX:t,clientY:n}=e,{left:o,right:i,top:a,bottom:s}=r.getBoundingClientRect();return t>=o&&t<=i&&n>=a&&n<=s};e.s(["OrgSidebarRecentRepls",0,({orgId:e})=>{let{data:t,loading:n}=Q({variables:{count:6,orgId:e},ssr:!1,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),o=t?.currentUser?.org?.__typename==="Org"?t?.currentUser?.org?.recentRepls.items:void 0;return(0,r.jsx)(el,{loading:n,recentRepls:o})},"RECENT_REPLS_SIDEBAR_MENU_COUNT",0,6,"RecentReplsPopover",0,({children:e})=>{let{setTriggerElement:a,setPopoverElement:s,styles:l,attributes:u,triggerElement:p,popoverElement:d}=(()=>{let[e,r]=(0,t.useState)(null),[n,o]=(0,t.useState)(null),{styles:a,attributes:s}=(0,i.usePopper)(e,n,{modifiers:[{name:"offset",options:{offset:[0,4]}}],placement:"right-start"});return{setTriggerElement:r,setPopoverElement:o,styles:a.popper,attributes:s.popper,triggerElement:e,popoverElement:n}})(),c=(0,n.useOverlayTriggerState)({}),g=(({setOpen:e,timeout:r=200,triggerElement:n,popoverElement:o})=>{let i=(0,t.useRef)(null),a=(0,t.useRef)(!0);return(0,t.useEffect)(()=>{let e=e=>{n&&(a.current=!eu(e,n)),r()},r=()=>{document.body.removeEventListener("mouseenter",e)};return document.body.addEventListener("mouseenter",e),r},[n]),{onMouseMove:(0,t.useCallback)(()=>{a.current&&(e(!0),i.current&&clearTimeout(i.current))},[e]),onMouseLeave:(0,t.useCallback)(t=>{i.current&&clearTimeout(i.current),a.current=!0,eu(t,o)||(i.current=setTimeout(()=>{e(!1)},r))},[e,r,o])}})({setOpen:c.setOpen,popoverElement:d,triggerElement:p}),[m,f]=e,R=(0,K.useIsMobile)();return(0,r.jsxs)(r.Fragment,{children:[m(g,a),c.isOpen&&!R&&(0,r.jsx)(er.Portal,{children:(0,r.jsx)("div",{"aria-hidden":!0,ref:s,style:{...l,zIndex:Y.SIDEBAR_Z_INDEX},...(0,o.mergeProps)(u,g),children:f})})]})},"SidebarRecentRepls",0,()=>{let{data:e,loading:t}=V({variables:{count:6},ssr:!1,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"});return(0,r.jsx)(el,{loading:t,recentRepls:e?.allRecentRepls})}],495764)},219577,e=>{"use strict";e.s(["APP_HEADER_HEIGHT",0,40,"HEADER_HEIGHT",0,48,"HEADER_Z_INDEX",0,1002,"SIDEBAR_OVERLAY_Z_INDEX",0,1e3,"SIDEBAR_WIDTH",0,240,"SIDEBAR_Z_INDEX",0,1001])},27820,e=>{"use strict";var r=e.i(276385),t=e.i(711223),n=e.i(967629),o=e.i(480028),i=e.i(446530),a=e.i(6338),s=e.i(613355),l=e.i(751273),u=e.i(625484);let p=(0,n.keyframes)("from{opacity:0}to{opacity:1}"),d=(0,i.cssRecord)({self:[s.rcss.flex.row,s.rcss.flex.growAndShrink(1),s.rcss.height(o.tokens.space12),s.rcss.borderRadius(4),s.rcss.position.relative,s.rcss.overflow("clip")],progressWrapper:[s.rcss.height("100%"),s.rcss.width("100%"),s.rcss.borderRadius(4),s.rcss.position.relative],progress:[s.rcss.position.relative,s.rcss.width("100%"),s.rcss.height("100%"),{top:0,left:0}],loading:a.loadingStyle.backgroundPulse(),fadeInAnim:{animation:`${p} 120ms forwards ease-out alternate`}});function c({total:e,tooltip:n,className:o,disabled:i=!1,loading:a=!1,tooltipHidden:s=!1,...p}){let c=null;return n?c=n:"current"in p?c=`${p.current||"0"}/${e}`:"data"in p&&(c=p.data?.map(({current:r})=>`${r||"0"}/${e}`).join(" | ")),(0,r.jsx)(l.Tooltip,{placement:"top",tooltip:c,maxWidth:280,isDisabled:a||s,children:(n,s)=>{let l;return a?l=null:"current"in p&&p.current?l=(0,r.jsx)(g,{total:e,disabled:i,current:p.current,color:p.color,minWidthPercent:p.minWidthPercent}):"data"in p&&(l=p.data?.map((r,n)=>(0,t.createElement)(g,{...r,key:`measure-bar-${n}`,total:e,disabled:i,minWidthPercent:p.minWidthPercent}))),(0,t.createElement)(u.View,{...n,css:[d.self,d.fadeInAnim,a&&d.loading],className:o,innerRef:s,onClick:void 0,key:a?"loadingMeasureBar":"finishedLoadingMeasureBar",role:"group"},(0,r.jsx)(u.View,{css:d.progressWrapper,grow:!0,shrink:!0,row:!0,style:p.backgroundColor?{backgroundColor:p.backgroundColor}:{},children:l},"measureBarProgress"))}})}function g({current:e,total:t,color:n=o.tokens.accentPrimaryDefault,disabled:i=!1,minWidthPercent:a=0}){let s=Math.max(function(e=0,r=0){return 0===r||0===e?0:Math.max(0,Math.min(100,e/r*100))}(e,t),a),l={backgroundColor:i?o.tokens.outlineDefault:n,width:s+"%"};return(0,r.jsx)(u.View,{css:d.progress,style:l,role:"meter",className:"measureBarProgress","aria-label":`${e} out of ${t}`,"aria-valuemin":0,"aria-valuenow":e,"aria-valuemax":t})}e.s(["MeasureBar",()=>c])},163220,e=>{"use strict";var r=e.i(973245),t=e.i(732947);let n=r.gql`
    fragment OrgGroupMetadata on OrgGroup {
  id
  color
  slug
  type
  name
}
    `;t.OrgCurrentUserFragmentDoc,t.OrgMetadataFragmentDoc,e.s(["OrgGroupMetadataFragmentDoc",0,n])},915598,e=>{"use strict";var r=e.i(973245),t=e.i(732947),n=e.i(304277);e.i(566901);let o={},i=r.gql`
    fragment OrgGroupsOrgGroup on OrgGroup {
  id
  slug
  type
  name
  color
  isMember
  memberCount
  individualMember {
    user {
      id
      displayName
      image
    }
    email
  }
  permissions {
    editPermissions
    viewPermissions
  }
}
    `,a=r.gql`
    fragment OrgGroupsConnection on OrgGroupConnection {
  pageInfo {
    hasNextPage
    nextCursor
  }
  items {
    ...OrgGroupsOrgGroup
  }
}
    ${i}`,s=r.gql`
    fragment OrgGroupsOrg on Org {
  ...OrgMetadata
  authorizations {
    createOrgGroup {
      isAuthorized
      message
    }
  }
}
    ${t.OrgMetadataFragmentDoc}`,l=r.gql`
    query OrgGroups($orgId: String, $input: OrgGroupsInput) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        groups(input: $input) {
          __typename
          ...OrgGroupsConnection
          ... on UserError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${a}`;function u(e){let r={...o,...e};return n.useQuery(l,r)}e.s(["OrgGroupsOrgFragmentDoc",0,s,"OrgGroupsOrgGroupFragmentDoc",0,i,"useOrgGroupsQuery",()=>u])},766774,e=>{"use strict";var r=e.i(973245),t=e.i(163220),n=e.i(279042),o=e.i(951262),i=e.i(304277),a=e.i(566901);let s={},l=r.gql`
    fragment OrgGroupPermissionsOrgScopeOption on OrgScopeOption {
  __typename
  role
  status
}
    `,u=r.gql`
    fragment OrgGroupPermissionsGroup on OrgGroup {
  ...OrgGroupMetadata
  permissions {
    editPermissions
    viewPermissions
  }
  orgScopeOptions {
    ...OrgGroupPermissionsOrgScopeOption
  }
}
    ${t.OrgGroupMetadataFragmentDoc}
${l}`,p=r.gql`
    fragment OrgGroupOption on OrgGroupScopeOption {
  status
  role
}
    `,d=r.gql`
    fragment OrgGroupOptions on OrgGroupScopeOptions {
  targetGroupId
  options {
    __typename
    ...OrgGroupOption
  }
}
    ${p}`,c=r.gql`
    fragment OrgGroupRepl on Repl {
  id
  title
  iconUrl
  ...ReplLinkRepl
  authorizations {
    editPermissions {
      isAuthorized
    }
  }
}
    ${n.ReplLinkReplFragmentDoc}`,g=r.gql`
    fragment GroupReplsPage on ReplConnection {
  pageInfo {
    hasNextPage
    nextCursor
    previousCursor
  }
  items {
    __typename
    ...OrgGroupRepl
  }
}
    ${c}`,m=r.gql`
    fragment ReplScopeOption on ReplScopeOption {
  status
  role
}
    `,f=r.gql`
    fragment ReplScopeOptions on ReplScopeOptions {
  replId
  options {
    __typename
    ...ReplScopeOption
  }
}
    ${m}`,R=r.gql`
    mutation UpdateOrgGroupScopes($input: UpdateOrgGroupScopesInput!) {
  updateOrgGroupScopes(input: $input) {
    __typename
    ... on OrgGroup {
      ...OrgGroupPermissionsGroup
    }
    ... on Error {
      message
    }
  }
}
    ${u}`;function _(e){let r={...s,...e};return o.useMutation(R,r)}let C=r.gql`
    query OrgGroupPermissionsGroups($orgId: String, $input: OrgGroupsInput) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        groups(input: $input) {
          __typename
          ... on OrgGroupConnection {
            pageInfo {
              hasNextPage
              nextCursor
            }
            items {
              ...OrgGroupMetadata
            }
          }
          ... on UserError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${t.OrgGroupMetadataFragmentDoc}`;function h(e){let r={...s,...e};return i.useQuery(C,r)}let y=r.gql`
    query OrgGroupScopeOptions($orgId: String!, $groupId: String!, $input: OrgGroupGroupScopeOptionsInput!) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        group(orgGroupId: $groupId) {
          __typename
          ... on OrgGroup {
            __typename
            id
            groupScopeOptions(input: $input) {
              __typename
              ... on OrgGroupGroupScopeOptions {
                items {
                  ...OrgGroupOptions
                }
              }
              ... on UnauthorizedError {
                message
              }
            }
          }
          ... on NotFoundError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${d}`;function x(e){let r={...s,...e};return i.useQuery(y,r)}let S=r.gql`
    query OrgGroupPermissionsRepls($orgId: String, $input: OrgReplsInput!) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        replsCount
        repls(input: $input) {
          __typename
          ... on ReplConnection {
            ...GroupReplsPage
          }
          ... on UserError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${g}`;function v(e){let r={...s,...e};return i.useQuery(S,r)}let P=r.gql`
    query OrgGroupReplScopeOptions($orgId: String!, $groupId: String!, $input: OrgGroupReplScopeOptionsInput!) {
  currentUser {
    __typename
    id
    org(orgId: $orgId) {
      __typename
      ... on Org {
        id
        group(orgGroupId: $groupId) {
          __typename
          ... on OrgGroup {
            __typename
            id
            replScopeOptions(input: $input) {
              __typename
              ... on OrgGroupReplScopeOptions {
                items {
                  ...ReplScopeOptions
                }
              }
              ... on UnauthorizedError {
                message
              }
            }
          }
          ... on NotFoundError {
            message
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
}
    ${f}`;function O(e){let r={...s,...e};return i.useQuery(P,r)}function w(e){let r={...s,...e};return a.useLazyQuery(P,r)}e.s(["OrgGroupPermissionsGroupFragmentDoc",0,u,"useOrgGroupPermissionsGroupsQuery",()=>h,"useOrgGroupPermissionsReplsQuery",()=>v,"useOrgGroupReplScopeOptionsLazyQuery",()=>w,"useOrgGroupReplScopeOptionsQuery",()=>O,"useOrgGroupScopeOptionsQuery",()=>x,"useUpdateOrgGroupScopesMutation",()=>_])},241049,e=>{"use strict";var r=e.i(973245);let t=r.gql`
    fragment CollaboratorCountV2Customer on Customer {
  id
  seats {
    __typename
    ... on CustomerSeats {
      id
      counts {
        admin
        guest
        member
      }
      caps {
        members
      }
    }
  }
  subscriptionSummary {
    __typename
    ... on CustomerSubscriptionSummarySelfServe {
      plan {
        ... on CustomerSubscriptionSummaryFlatSelfServePlan {
          planPrefix
        }
        ... on CustomerSubscriptionSummaryTieredSelfServePlan {
          planPrefix
        }
      }
    }
  }
}
    `;e.s(["CollaboratorCountV2CustomerFragmentDoc",0,t])},371979,e=>{"use strict";var r=e.i(973245),t=e.i(766774),n=e.i(732947),o=e.i(241049),i=e.i(915598);e.i(304277),e.i(566901);var a=e.i(951262);let s={},l=r.gql`
    fragment ReplMultiplayerOrgV2 on Org {
  ...OrgMetadata
  membersCount
  adminGroup: groups(input: {types: [system_admins]}) {
    ... on OrgGroupConnection {
      items {
        id
        memberCount
        isMember
      }
    }
  }
  customer {
    __typename
    ... on Customer {
      ...CollaboratorCountV2Customer
    }
  }
  authorizations {
    editSubscription {
      isAuthorized
    }
  }
}
    ${n.OrgMetadataFragmentDoc}
${o.CollaboratorCountV2CustomerFragmentDoc}`,u=r.gql`
    fragment ReplMultiplayerOrgGroupV2 on OrgGroup {
  ...OrgGroupsOrgGroup
}
    ${i.OrgGroupsOrgGroupFragmentDoc}`,p=r.gql`
    fragment ReplMultiplayerGroupV2 on ReplMultiplayerGroupScope {
  group {
    __typename
    ...ReplMultiplayerOrgGroupV2
  }
  options {
    __typename
    role
    status
  }
}
    ${u}`,d=r.gql`
    fragment ReplMultiplayerIndividualV2 on ReplMultiplayerIndividualScope {
  group {
    __typename
    ...ReplMultiplayerOrgGroupV2
  }
  user {
    __typename
    id
    displayName
    fullName
    image
    username
  }
  options {
    __typename
    role
    status
  }
}
    ${u}`,c=r.gql`
    fragment ReplMultiplayerStatusV2 on Repl {
  id
  title
  isPrivate
  url
  org {
    ...ReplMultiplayerOrgV2
  }
  multiplayerStatus {
    __typename
    groups {
      __typename
      ...ReplMultiplayerGroupV2
    }
    individuals {
      __typename
      ...ReplMultiplayerIndividualV2
    }
    pendingInvites {
      __typename
      email
    }
  }
  authorizations {
    editPermissions {
      isAuthorized
      message
    }
    editVisibility {
      isAuthorized
      message
    }
    removeSelf {
      isAuthorized
      message
    }
    viewPermissions {
      isAuthorized
      message
    }
  }
}
    ${l}
${p}
${d}`,g=r.gql`
    mutation UpdateOrgGroupScopesV2($input: UpdateOrgGroupScopesInput!) {
  updateOrgGroupScopes(input: $input) {
    __typename
    ... on OrgGroup {
      ...OrgGroupPermissionsGroup
    }
    ... on Error {
      message
    }
  }
}
    ${t.OrgGroupPermissionsGroupFragmentDoc}`;function m(e){let r={...s,...e};return a.useMutation(g,r)}let f=r.gql`
    mutation GrantReplAccessByEmail($input: GrantReplAccessByEmailInput!) {
  grantReplAccessByEmail(input: $input) {
    ... on Repl {
      __typename
      ...ReplMultiplayerStatusV2
    }
    ... on UnauthorizedError {
      __typename
      message
    }
    ... on NotFoundError {
      __typename
      message
    }
    ... on UserError {
      __typename
      message
    }
  }
}
    ${c}`;function R(e){let r={...s,...e};return a.useMutation(f,r)}e.s(["ReplMultiplayerStatusV2FragmentDoc",0,c,"useGrantReplAccessByEmailMutation",()=>R,"useUpdateOrgGroupScopesV2Mutation",()=>m])},506017,e=>{"use strict";var r=e.i(276385),t=e.i(368964),n=e.i(670368),o=e.i(952388),i=e.i(596139),a=e.i(765826),s=e.i(739521),l=e.i(960178),u=e.i(625484),p=e.i(732237),d=e.i(114723),c=e.i(576727);let g=({trackingContext:e})=>{let s=function(){let{data:e,loading:r,error:n}=(0,o.useCurrentUserReferralStatsQuery)();if(r||n)return;let i=e?.currentUser;if(i?.__typename==="CurrentUser"&&"CurrentUserReferralsBySourceResult"===i.referralsBySource.__typename)return(i.referralsBySource.referrals??[]).filter(e=>e?.__typename==="Referrals"&&e.status===t.ReferralsstatusEnumType.Completed&&null==e.referralPromoCodeId).length*a.REFERRAL_CREDIT_AMOUNT_USD}(),{data:g}=(0,n.useCurrentUserReferralLinkQuery)(),m=g?.currentUser?.isSubscribed;return(0,r.jsxs)(u.View,{clsx:c.default.referralModalInner,children:[(0,r.jsx)(d.ReplitHeaderImage,{}),(0,r.jsxs)(u.View,{clsx:c.default.referralContent,children:[(0,r.jsx)(u.View,{clsx:c.default.referralHeaderRow,children:(0,r.jsx)(l.Text,{variant:"subheadDefault",clsx:c.default.referralTitle,children:"Refer friends and earn credits"})}),(0,r.jsxs)(u.View,{clsx:c.default.referralBody,children:[(0,r.jsxs)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextRow,children:[(0,r.jsx)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextIcon,children:(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.63266 1.95369C9.35563 1.25541 10.3239 0.869035 11.329 0.877769C12.3341 0.886503 13.2956 1.28965 14.0063 2.00038C14.717 2.71111 15.1202 3.67256 15.1289 4.67765C15.1376 5.68274 14.7513 6.65104 14.053 7.37402L14.047 7.38027L12.047 9.38015C11.6583 9.76891 11.1907 10.0695 10.6757 10.2617C10.1606 10.4538 9.61034 10.5329 9.06206 10.4936C8.51378 10.4543 7.98036 10.2976 7.49798 10.0341C7.0156 9.77053 6.59554 9.40632 6.2663 8.96615C6.10089 8.74503 6.14606 8.43169 6.36719 8.26628C6.58831 8.10088 6.90166 8.14605 7.06706 8.36718C7.31042 8.69251 7.6209 8.96171 7.97744 9.15651C8.33398 9.3513 8.72825 9.46714 9.1335 9.49616C9.53874 9.52519 9.94549 9.46672 10.3262 9.32472C10.7068 9.18272 11.0525 8.96051 11.3397 8.67317L13.3366 6.67631C13.8509 6.14226 14.1354 5.42784 14.1289 4.68634C14.1225 3.94345 13.8245 3.23281 13.2992 2.70749C12.7739 2.18217 12.0632 1.88419 11.3203 1.87773C10.5786 1.87129 9.86397 2.15597 9.32986 2.67057L8.18587 3.80791C7.99004 4.00261 7.67345 4.00168 7.47876 3.80585C7.28407 3.61002 7.28499 3.29344 7.48082 3.09875L8.63266 1.95369ZM5.32436 5.73834C5.83938 5.54623 6.38969 5.46712 6.93796 5.50639C7.48624 5.54565 8.01966 5.70237 8.50204 5.96592C8.98442 6.22947 9.40448 6.59368 9.73373 7.03384C9.89913 7.25497 9.85396 7.56831 9.63283 7.73371C9.41171 7.89912 9.09837 7.85394 8.93296 7.63282C8.68961 7.30748 8.37913 7.03828 8.02258 6.84349C7.66604 6.64869 7.27177 6.53285 6.86653 6.50383C6.46128 6.47481 6.05453 6.53328 5.67387 6.67528C5.2932 6.81728 4.94753 7.03948 4.6603 7.32682L2.66344 9.32368C2.14914 9.85773 1.86464 10.5722 1.87108 11.3137C1.87753 12.0565 2.17551 12.7672 2.70084 13.2925C3.22616 13.8178 3.93679 14.1158 4.67969 14.1223C5.42119 14.1287 6.1356 13.8442 6.66965 13.3299L7.80646 12.1931C8.00172 11.9978 8.3183 11.9978 8.51356 12.1931C8.70883 12.3884 8.70883 12.705 8.51356 12.9002L7.36742 14.0464C6.64444 14.7446 5.67608 15.131 4.671 15.1222C3.66591 15.1135 2.70446 14.7103 1.99373 13.9996C1.283 13.2889 0.879851 12.3274 0.871117 11.3223C0.862383 10.3173 1.24876 9.34895 1.94703 8.62597L1.95307 8.61972L3.95306 6.61984C3.95304 6.61986 3.95308 6.61982 3.95306 6.61984C4.34166 6.23112 4.80938 5.93045 5.32436 5.73834Z",fill:"currentColor"})})}),(0,r.jsx)(l.Text,{variant:"subheadDefault",clsx:c.default.referralBodyText,children:"Share your invite link with a friend"})]}),(0,r.jsxs)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextRow,children:[(0,r.jsx)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextIcon,children:(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M8.3692 0.327768C8.69629 2.52022 9.24054 5.23649 10.0015 5.99786C10.7628 6.7595 13.4809 7.30378 15.674 7.63069C16.1087 7.69548 16.1086 8.30365 15.674 8.36846C13.4811 8.6955 10.7632 9.23983 10.0015 10.001C9.23917 10.7629 8.69457 13.4851 8.36774 15.6791C8.304 16.107 7.69545 16.107 7.63168 15.6791C7.30471 13.4853 6.76007 10.7633 5.99816 10.001C5.23714 9.23963 2.52052 8.69546 0.327785 8.36851C-0.109276 8.30334 -0.109247 7.6953 0.327785 7.63011C2.52035 7.30303 5.23675 6.75881 5.99816 5.99786C6.75959 5.23688 7.30379 2.52039 7.63076 0.327768C7.69593 -0.109271 8.304 -0.109242 8.3692 0.327768Z",fill:"currentColor"})})}),(0,r.jsxs)(l.Text,{variant:"subheadDefault",clsx:c.default.referralBodyText,children:["They subscribe to Replit ",i.corePlanName,"."]})]}),(0,r.jsxs)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextRow,children:[(0,r.jsx)(u.View,{row:!0,align:"center",gap:8,clsx:c.default.referralBodyTextIcon,children:(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.781 2.94756C2.53437 3.14193 2.5 3.27607 2.5 3.33334C2.5 3.39062 2.53437 3.52476 2.781 3.71913C3.02199 3.90905 3.4017 4.10196 3.91547 4.27322C4.9378 4.61399 6.38193 4.83334 8 4.83334C9.61807 4.83334 11.0622 4.61399 12.0845 4.27322C12.5983 4.10196 12.978 3.90905 13.219 3.71913C13.4656 3.52476 13.5 3.39062 13.5 3.33334C13.5 3.27607 13.4656 3.14193 13.219 2.94756C12.978 2.75763 12.5983 2.56473 12.0845 2.39347C11.0622 2.0527 9.61807 1.83334 8 1.83334C6.38193 1.83334 4.9378 2.0527 3.91547 2.39347C3.4017 2.56473 3.02199 2.75763 2.781 2.94756ZM13.5 4.73542C13.1862 4.92291 12.8124 5.08468 12.4008 5.2219C11.2515 5.60498 9.69564 5.83334 8 5.83334C6.30436 5.83334 4.74849 5.60498 3.59925 5.2219C3.18758 5.08468 2.81375 4.92291 2.5 4.73542V8.00001C2.5 8.05949 2.53507 8.19399 2.77928 8.3875C3.0185 8.57707 3.39602 8.76971 3.90833 8.94074C4.92779 9.28108 6.37172 9.50001 8 9.50001C9.62828 9.50001 11.0722 9.28108 12.0917 8.94074C12.604 8.76971 12.9815 8.57707 13.2207 8.3875C13.4649 8.19399 13.5 8.05949 13.5 8.00001V4.73542ZM14.5 3.33334C14.5 2.83833 14.1986 2.44633 13.838 2.16215C13.4717 1.87352 12.9728 1.63546 12.4008 1.44479C11.2515 1.06171 9.69564 0.833344 8 0.833344C6.30436 0.833344 4.74849 1.06171 3.59925 1.44479C3.02724 1.63546 2.52826 1.87352 2.16202 2.16215C1.80142 2.44633 1.5 2.83833 1.5 3.33334V12.6667C1.5 13.1605 1.79826 13.5527 2.15822 13.8379C2.52316 14.1271 3.02065 14.3653 3.59167 14.5559C4.73888 14.9389 6.29495 15.1667 8 15.1667C9.70505 15.1667 11.2611 14.9389 12.4083 14.5559C12.9794 14.3653 13.4768 14.1271 13.8418 13.8379C14.2017 13.5527 14.5 13.1605 14.5 12.6667V3.33334ZM13.5 9.40547C13.1882 9.59195 12.8171 9.7528 12.4083 9.88928C11.2611 10.2723 9.70505 10.5 8 10.5C6.29495 10.5 4.73888 10.2723 3.59167 9.88928C3.18287 9.7528 2.81177 9.59195 2.5 9.40547V12.6667C2.5 12.7262 2.53507 12.8607 2.77928 13.0542C3.0185 13.2437 3.39602 13.4364 3.90833 13.6074C4.92779 13.9477 6.37172 14.1667 8 14.1667C9.62828 14.1667 11.0722 13.9477 12.0917 13.6074C12.604 13.4364 12.9815 13.2437 13.2207 13.0542C13.4649 12.8607 13.5 12.7262 13.5 12.6667V9.40547Z",fill:"currentColor"})})}),(0,r.jsxs)(l.Text,{variant:"subheadDefault",clsx:c.default.referralBodyText,children:["You both get $",a.REFERRAL_CREDIT_AMOUNT_USD," in credits"]})]})]}),(0,r.jsx)(u.View,{clsx:c.default.referralBody,children:(0,r.jsx)(p.ReferralLink,{trackingContext:e,earnedAmount:s,isModalReferral:!0,isSubscribed:m})})]})]})};e.s(["ReferralLinkModal",0,({isOpen:e,onClose:t,trackingContext:n})=>(0,r.jsx)(s.Modal,{isOpen:e,onRequestClose:t,maxWidth:560,className:c.default.referralModal,noPadding:!0,fitContent:!0,children:(0,r.jsx)(g,{trackingContext:n})}),"ReferralLinkModalContent",0,g,"ReferralModalContent",()=>g])},701432,e=>{e.v({stripeLayer:"ReplitHeaderImage-module__fgbqdW__stripeLayer",wrapper:"ReplitHeaderImage-module__fgbqdW__wrapper",wrapperRotated:"ReplitHeaderImage-module__fgbqdW__wrapperRotated"})},114723,e=>{"use strict";var r=e.i(276385),t=e.i(625484),n=e.i(701432);let o=()=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"231",height:"134",viewBox:"0 0 231 134",fill:"none",children:[(0,r.jsx)("path",{d:"M-75.8395 107.565C118.922 19.8327 233.047 -123.465 198.791 -245.503",stroke:"url(#paint0_linear_replit_header_1)",strokeWidth:"51.4711",strokeLinecap:"round",strokeDasharray:"264.06 0.03"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_replit_header_1",x1:"155.181",y1:"-272.502",x2:"39.6024",y2:"273.342",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#FFD522"}),(0,r.jsx)("stop",{offset:"0.447334",stopColor:"#FF6915"}),(0,r.jsx)("stop",{offset:"0.716346",stopColor:"#FF6915"})]})})]}),i=()=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"437",height:"72",viewBox:"0 0 437 72",fill:"none",children:[(0,r.jsx)("path",{d:"M752.203 7.6784C712.85 -76.6186 535.145 -170.561 380.124 -57.0011C132.459 124.424 16.568 39.2163 6.9258 -111.305",stroke:"url(#paint0_linear_replit_header_2)",strokeWidth:"51.4705",strokeLinecap:"round",strokeDasharray:"264.06 0.03"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_replit_header_2",x1:"632.56",y1:"160.434",x2:"96.7523",y2:"-179.713",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.0860566",stopColor:"#E84200"}),(0,r.jsx)("stop",{offset:"0.453349",stopColor:"#FF6915"}),(0,r.jsx)("stop",{offset:"0.759861",stopColor:"#EE4C05"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#FFD522"})]})})]});function a(){return(0,r.jsx)(t.View,{clsx:n.default.wrapper,children:(0,r.jsxs)(t.View,{clsx:n.default.wrapperRotated,children:[(0,r.jsx)(t.View,{clsx:n.default.stripeLayer,children:(0,r.jsx)(o,{})}),(0,r.jsx)(t.View,{clsx:n.default.stripeLayer,children:(0,r.jsx)(i,{})})]})})}e.s(["ReplitHeaderImage",()=>a])},87038,e=>{e.v({copyButtonWrap:"ReferralUrl-module__K41mjq__copyButtonWrap",root:"ReferralUrl-module__K41mjq__root",urlDisplay:"ReferralUrl-module__K41mjq__urlDisplay",urlRow:"ReferralUrl-module__K41mjq__urlRow"})},810639,e=>{"use strict";var r=e.i(276385),t=e.i(88619),n=e.i(960178),o=e.i(625484),i=e.i(87038);function a({url:e,onCopy:a}){return(0,r.jsxs)(o.View,{row:!0,align:"stretch",clsx:i.default.root,children:[(0,r.jsx)(o.View,{row:!0,align:"stretch",clsx:i.default.urlRow,children:(0,r.jsx)(n.Text,{color:"dimmer",clsx:i.default.urlDisplay,children:e})}),(0,r.jsx)(o.View,{clsx:i.default.copyButtonWrap,children:(0,r.jsx)(t.CopyButton,{clsx:i.default.copyButton,textToCopy:e,tooltipText:"Copy referral link",text:"Copy link",colorway:"primary",showIcon:!0,onCopy:a})})]})}e.s(["ReferralUrl",()=>a])},952251,e=>{e.v({linkCopyRow:"ReferralLinkField-module__LIlf7q__linkCopyRow"})},174840,e=>{"use strict";var r=e.i(276385),t=e.i(858248),n=e.i(709485),o=e.i(625484),i=e.i(810639),a=e.i(952251);function s({referralLink:e,trackingContext:s,isSubscribed:l}){return(0,r.jsx)(o.View,{children:(0,r.jsx)(o.View,{row:!0,align:"stretch",shrink:!0,clsx:a.default.linkCopyRow,children:(0,r.jsx)(i.ReferralUrl,{url:e,onCopy:()=>{(0,t.track)(n.events.REFERRAL_PROGRAM_USED,{action:"copied_referral_link",trackingContext:s,isSubscribed:l})}})})})}e.s(["ReferralLinkField",()=>s])},796869,e=>{e.v({icon:"LearnMore-module__qzQ6aq__icon",link:"LearnMore-module__qzQ6aq__link"})},359606,e=>{"use strict";var r=e.i(276385),t=e.i(612866),n=e.i(252204),o=e.i(796869);function i({href:e="https://replit.com/refer",children:i="Learn more"}){return(0,r.jsxs)(t.default,{className:o.default.link,target:"_blank",rel:"noopener noreferrer",href:e,children:[i,(0,r.jsx)(n.default,{clsx:o.default.icon})]})}e.s(["LearnMore",()=>i])},340079,e=>{e.v({referralBodyTextIcon:"ReferralSocialShare-module__insteW__referralBodyTextIcon",referralSocialRow:"ReferralSocialShare-module__insteW__referralSocialRow",referralSocialText:"ReferralSocialShare-module__insteW__referralSocialText"})},814040,482206,e=>{"use strict";var r=e.i(276385),t=e.i(936706);let n="https://twitter.com/intent/tweet";function o({text:e,url:r,hashtags:t,via:i}={}){let a=new URLSearchParams;e&&a.append("text",e),r&&a.append("url",r),t&&a.append("hashtags",t.join(",")),i&&a.append("via",i);let s=a.toString();return s.length>0?`${n}?${s}`:n}e.s(["default",()=>o],482206);var i=e.i(960178),a=e.i(625484),s=e.i(340079);function l({referralLink:e}){let n=o({text:"Join me on Replit and get free credits when you sign up!",url:e});return(0,r.jsxs)(a.View,{clsx:s.default.referralSocialRow,children:[(0,r.jsx)(i.Text,{color:"dimmer",clsx:s.default.referralSocialText,children:"Share on Socials"}),(0,r.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:s.default.referralSocialIcon,"aria-label":"Share on X",children:(0,r.jsx)(a.View,{row:!0,align:"center",gap:8,clsx:s.default.referralBodyTextIcon,children:(0,r.jsx)(t.default,{size:10})})})]})}e.s(["ReferralSocialShare",()=>l],814040)},670368,e=>{"use strict";var r=e.i(973245),t=e.i(304277);e.i(566901);let n={},o=r.gql`
    query CurrentUserReferralLink {
  currentUser {
    id
    username
    isSubscribed
  }
}
    `;function i(e){let r={...n,...e};return t.useQuery(o,r)}e.s(["CurrentUserReferralLinkDocument",0,o,"useCurrentUserReferralLinkQuery",()=>i])},639970,e=>{e.v({count:"ReferralStats-module__2ceC5W__count",countRow:"ReferralStats-module__2ceC5W__countRow",statContainer:"ReferralStats-module__2ceC5W__statContainer"})},14782,952388,e=>{"use strict";var r=e.i(276385),t=e.i(973245),n=e.i(304277);e.i(566901);let o={},i=t.gql`
    query CurrentUserReferralStats {
  currentUser {
    id
    isSubscribed
    referralsBySource {
      __typename
      ... on CurrentUserReferralsBySourceResult {
        referrals {
          ... on Referrals {
            id
            status
            referralPromoCodeId
            sourceUser {
              id
              username
            }
            targetUser {
              id
              username
            }
          }
        }
      }
    }
  }
}
    `;function a(e){let r={...o,...e};return n.useQuery(i,r)}e.s(["CurrentUserReferralStatsDocument",0,i,"useCurrentUserReferralStatsQuery",()=>a],952388);var s=e.i(368964),l=e.i(765826),u=e.i(712903),p=e.i(596139),d=e.i(973519),c=e.i(140487);function g(){let{show:e}=(0,d.useGlobalModal)(),t=async()=>{await e("MembershipPurchaseModal",{analyticsContext:{upgrade:{context:"claim_referral_bonus_credits",surface:"referral_modal"}}})};return(0,r.jsx)(c.Button,{colorway:"primary",text:`Upgrade to Replit ${p.corePlanName} to claim your bonus credits`,iconLeft:(0,r.jsx)(u.default,{}),onClick:t})}var m=e.i(960178),f=e.i(625484),R=e.i(639970);let _=({count:e,label:t,isCurrency:n})=>(0,r.jsxs)(f.View,{clsx:R.default.count,children:[(0,r.jsx)(f.View,{row:!0,gap:8,align:"center",clsx:R.default.countRow,children:(0,r.jsxs)(m.Text,{variant:"subheadBig",children:[n?"$":null,e]})}),(0,r.jsx)(m.Text,{variant:"small",color:"dimmer",children:t})]});e.s(["default",0,()=>{let{data:e,loading:t}=a();if(t||!e)return null;let n=e.currentUser,o=n?.__typename==="CurrentUser"&&!0===n.isSubscribed,i=n?.__typename==="CurrentUser"&&n?.referralsBySource.__typename==="CurrentUserReferralsBySourceResult"?n.referralsBySource.referrals:[],u=e=>e?.referralPromoCodeId==null;if(!o){let e=(i??[]).filter(e=>e.status===s.ReferralsstatusEnumType.ReferrerCreditPending&&u(e)).length;if(0===e)return(0,r.jsx)(g,{});let t=e*l.REFERRAL_CREDIT_AMOUNT_USD;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.View,{pt:16,children:(0,r.jsx)(g,{})}),e>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.View,{children:(0,r.jsx)(m.Text,{variant:"subheadDefault",children:"Pending Referrals"})}),(0,r.jsxs)(f.View,{row:!0,gap:16,clsx:R.default.statContainer,children:[(0,r.jsx)(_,{count:e,label:"Completed referrals"}),(0,r.jsx)(_,{isCurrency:!0,count:t,label:"Pending credits"})]})]})]})}let p=(i??[]).filter(e=>e.status===s.ReferralsstatusEnumType.Pending&&u(e)),d=(i??[]).filter(e=>e.status===s.ReferralsstatusEnumType.Completed&&u(e)),c=d.length*l.REFERRAL_CREDIT_AMOUNT_USD;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.View,{row:!0,gap:16,clsx:R.default.statContainer,children:[(0,r.jsx)(_,{isCurrency:!0,count:c,label:"Credits earned"}),(0,r.jsx)(_,{count:d.length,label:"Completed referrals"}),p.length>0&&(0,r.jsx)(_,{count:p.length,label:"Pending referrals"})]})})}],14782)},815561,e=>{e.v({container:"ReferralLink-module__huQ4mW__container",link:"ReferralLink-module__huQ4mW__link",referralActionsRow:"ReferralLink-module__huQ4mW__referralActionsRow",referralDivider:"ReferralLink-module__huQ4mW__referralDivider",referralEarned:"ReferralLink-module__huQ4mW__referralEarned",referralLinkLabel:"ReferralLink-module__huQ4mW__referralLinkLabel",referralLinkLabelRow:"ReferralLink-module__huQ4mW__referralLinkLabelRow"})},732237,e=>{"use strict";var r=e.i(276385),t=e.i(670368),n=e.i(596139),o=e.i(765826),i=e.i(14782),a=e.i(960178),s=e.i(625484),l=e.i(359606),u=e.i(174840),p=e.i(814040),d=e.i(815561);function c({trackingContext:e,earnedAmount:c,isModalReferral:g=!1,isSubscribed:m,referralStats:f}){let{data:R}=(0,t.useCurrentUserReferralLinkQuery)(),_=R?.currentUser?.username,C=_?`${window.location.origin}${(0,o.getReferralPath)(_)}`:"",h=!!C;return(0,r.jsxs)(s.View,{clsx:d.default.container,children:[g?(0,r.jsx)(s.View,{clsx:d.default.referralDivider}):null,!g&&(0,r.jsx)(s.View,{clsx:d.default.titleRow,children:(0,r.jsxs)(a.Text,{children:["Bring your friends to Replit. You both earn $",o.REFERRAL_CREDIT_AMOUNT_USD," when they upgrade to ",n.corePlanName,"."]})}),(0,r.jsxs)(s.View,{clsx:d.default.referralLinkLabelRow,children:[(0,r.jsxs)(s.View,{row:!0,align:"center",gap:8,children:[(0,r.jsx)(a.Text,{clsx:d.default.referralLinkLabel,children:"Your referral link"}),!g&&(0,r.jsx)(l.LearnMore,{})]}),void 0!==c&&(0,r.jsxs)(a.Text,{clsx:d.default.referralEarned,children:["$",c," earned"]})]}),(0,r.jsx)(s.View,{row:!0,align:"center",gap:8,children:h?(0,r.jsx)(u.ReferralLinkField,{referralLink:C,trackingContext:e,isSubscribed:m}):(0,r.jsx)(a.Text,{color:"dimmer",clsx:d.default.link,children:"You need a username to use the referral program."})}),f?(0,r.jsx)(i.default,{}):null,g&&h?(0,r.jsxs)(s.View,{clsx:d.default.referralActionsRow,children:[(0,r.jsx)(p.ReferralSocialShare,{referralLink:C}),(0,r.jsx)(l.LearnMore,{})]}):null]})}e.s(["ReferralLink",()=>c,"default",0,c])},576727,e=>{e.v({container:"ReferralLink-module__Sc-5DW__container",referralBody:"ReferralLink-module__Sc-5DW__referralBody",referralBodyText:"ReferralLink-module__Sc-5DW__referralBodyText",referralBodyTextIcon:"ReferralLink-module__Sc-5DW__referralBodyTextIcon",referralBodyTextRow:"ReferralLink-module__Sc-5DW__referralBodyTextRow",referralContent:"ReferralLink-module__Sc-5DW__referralContent",referralHeaderRow:"ReferralLink-module__Sc-5DW__referralHeaderRow",referralModal:"ReferralLink-module__Sc-5DW__referralModal",referralModalInner:"ReferralLink-module__Sc-5DW__referralModalInner",referralStripeLayer:"ReferralLink-module__Sc-5DW__referralStripeLayer",referralSvgWrapper:"ReferralLink-module__Sc-5DW__referralSvgWrapper",referralSvgWrapperRotated:"ReferralLink-module__Sc-5DW__referralSvgWrapperRotated",referralTitle:"ReferralLink-module__Sc-5DW__referralTitle"})}]);

//# debugId=2c397efb-c87b-49e8-dc0d-497e8333b496
//# sourceMappingURL=9bb2cd7324fd84dc.js.map