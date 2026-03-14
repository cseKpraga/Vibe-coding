;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4e22eacf-a76e-bc3f-5482-e005fc54d9b5")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,316599,e=>{"use strict";var t=e.i(276385),s=e.i(960178);function r({last4:e,fluent:r}){return(0,t.jsx)(s.Text,{multiline:!1,children:r?`Card ending in ${e}`:`\xb7\xb7\xb7\xb7${e}`})}e.s(["CardLastFour",()=>r])},843136,e=>{"use strict";var t=e.i(389959);function s(e){let[s,r]=(0,t.useState)(e),[i,a]=(0,t.useState)([]),n=(0,t.useCallback)(e=>{a([...i,s]),r(e)},[i,a,s,r]);return{currentStep:s,goTo:n,goBack:(0,t.useCallback)(()=>{let e=i.pop();a(i),e&&r(e)},[i,a,r]),canGoBack:i.length>0}}e.s(["usePaymentSteps",()=>s])},824108,133783,e=>{"use strict";var t=e.i(276385),s=e.i(402099),r=e.i(610357),i=e.i(480028),a=e.i(446530),n=e.i(173703),l=e.i(613355),o=e.i(136540),c=e.i(960178),d=e.i(625484);let u=(0,a.cssRecord)({root:[l.rcss.borderRadius(4),l.rcss.border({color:i.tokens.outlineDimmer,width:1,style:"solid"}),l.rcss.p(8),l.rcss.backgroundColor.backgroundDefault],body:[l.rcss.overflow("auto"),l.rcss.font.code,l.rcss.flex.growAndShrink(1),l.rcss.scrollbar.hidden]});function h({code:e,header:i,multiline:a,onCopy:l}){return(0,t.jsxs)(n.ShadesSurface,{tag:"pre",css:u.root,gap:4,elevate:!1,children:[(0,t.jsxs)(d.View,{row:!0,justify:"space-between",children:[(0,t.jsx)(c.Text,{color:"dimmer",children:i}),(0,t.jsx)(o.IconButton,{onClick:()=>{l?.(),(0,r.default)(e)},alt:"Copy",children:(0,t.jsx)(s.default,{})})]}),(0,t.jsx)(d.View,{children:(0,t.jsx)(c.Text,{multiline:a,css:u.body,maxLines:a?void 0:1,children:e})})]})}e.s(["default",()=>h],824108);var m=e.i(332441);function p(){return(0,m.useIsWindows)()?"%HOMEPATH%":"~"}e.s(["default",()=>p],133783)},811081,255614,e=>{"use strict";e.s(["SSH_KEY_LIMIT",0,20],811081);let t=["ssh-rsa","ssh-dss","ecdsa-sha2-nistp256","sk-ecdsa-sha2-nistp256@openssh.com","ecdsa-sha2-nistp384","ecdsa-sha2-nistp521","ssh-ed25519","sk-ssh-ed25519@openssh.com"];function s(e){let s=e.trim();if(""===s)return"Key cannot be empty";let r=s.split(" ");if(r.length<3||r.length>4)return"Key must have either 3 or 4 separate components";let i=3===r.length?r[0]:r[1];return t.includes(i)?null:`${i} is not a valid key type`}e.s(["VALID_KEY_TYPES",0,t,"default",()=>s],255614)},903941,e=>{"use strict";var t=e.i(973245),s=e.i(951262),r=e.i(304277);e.i(566901);let i={},a=t.gql`
    mutation AddSshKey($input: AddPublicSshKeyInput!) {
  addPublicSshKey(input: $input) {
    __typename
    ... on CurrentUser {
      id
      publicSshKeys {
        ... on PublicSshKeysOutput {
          __typename
          keys {
            id
            key
            label
            timeCreated
          }
        }
        ... on UnauthorizedError {
          __typename
          message
        }
      }
    }
    ... on UserError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on ServiceUnavailable {
      message
    }
  }
}
    `;function n(e){let t={...i,...e};return s.useMutation(a,t)}let l=t.gql`
    mutation DeleteSshKey($input: DeletePublicSshKeyInput!) {
  deletePublicSshKey(input: $input) {
    __typename
    ... on CurrentUser {
      id
      publicSshKeys {
        ... on PublicSshKeysOutput {
          __typename
          keys {
            id
            key
            label
            timeCreated
          }
        }
        ... on UnauthorizedError {
          __typename
          message
        }
      }
    }
    ... on UnauthorizedError {
      message
    }
    ... on NotFoundError {
      message
    }
    ... on ServiceUnavailable {
      message
    }
  }
}
    `;function o(e){let t={...i,...e};return s.useMutation(l,t)}let c=t.gql`
    query SshKeysCurrentUser {
  currentUser {
    id
    __typename
    publicSshKeys {
      ... on PublicSshKeysOutput {
        keys {
          id
          key
          label
          timeCreated
        }
      }
      ... on UnauthorizedError {
        message
      }
    }
  }
}
    `;function d(e){let t={...i,...e};return r.useQuery(c,t)}e.s(["useAddSshKeyMutation",()=>n,"useDeleteSshKeyMutation",()=>o,"useSshKeysCurrentUserQuery",()=>d])},200004,948981,22866,961228,e=>{"use strict";var t=e.i(276385),s=e.i(750854),r=e.i(903941),i=e.i(183035),a=e.i(569910),n=e.i(255614),l=e.i(322823),o=e.i(222342),c=e.i(858248),d=e.i(709485),u=e.i(824108),h=e.i(133783),m=e.i(480028),p=e.i(446530),x=e.i(613355),S=e.i(428596),y=e.i(965153),f=e.i(140487),g=e.i(607278),j=e.i(960178),w=e.i(625484);let v=n.VALID_KEY_TYPES.map(e=>`'${e}'`),b=`Begins with ${v.slice(0,-1).join(", ")}, or ${v[v.length-1]}`,k=e=>""===e.trim()?{message:"Label cannot be empty",severity:"error"}:null,C=e=>{let t=(0,n.default)(e);return t?{message:t,severity:"error"}:null},_=(0,p.cssRecord)({input:[x.rcss.colWithGap(8)],keyInput:[x.rcss.height(m.tokens.space128)],inputErrorMessage:[x.rcss.color.accentNegativeDefault]});e.s(["AddSshKeyDialog",0,({onConfirm:e})=>{let{showConfirm:n,showError:m}=(0,o.default)(),p=(0,s.useRouter)(),x=(0,h.default)(),v=(0,S.useIdSeed)(),T=(0,l.useFormField)("",C),E=(0,l.useFormField)("",k),[V,{loading:R}]=(0,r.useAddSshKeyMutation)({onCompleted:t=>{switch(t.addPublicSshKey?.__typename){case"UserError":case"UnauthorizedError":case"ServiceUnavailable":m(t.addPublicSshKey.message);break;case"CurrentUser":T.setValue(""),E.setValue(""),n("SSH key added"),e();break;case void 0:case null:m("An unkown error occurred. Please try again.");break;default:(0,a.default)(t.addPublicSshKey)}},onError:e=>{m(`Error adding SSH key: ${e.message}`)}}),P=`[ -s ${x}/.ssh/replit.pub ] || ssh-keygen -t ed25519 -f ${x}/.ssh/replit -q -N "" && cat ${x}/.ssh/replit.pub`;return(0,t.jsxs)(w.View,{gap:16,children:[(0,t.jsx)(j.Text,{variant:"headerDefault",children:"Add a new SSH key"}),(0,t.jsxs)(w.View,{css:_.input,children:[(0,t.jsx)(w.View,{tag:"label",htmlFor:v("label-input"),children:"Label"}),(0,t.jsx)(g.Input,{id:v("label-input"),placeholder:"Enter a label to identify this SSH key...",value:E.value,onChange:e=>E.setValue(e.target.value,{preventValidation:!0}),onBlur:E.handleBlur}),E.error?(0,t.jsx)(j.Text,{multiline:!1,variant:"small",css:_.inputErrorMessage,children:E.error.message}):null]}),(0,t.jsxs)(w.View,{css:_.input,children:[(0,t.jsx)(w.View,{tag:"label",htmlFor:v("key-input"),children:"Key"}),(0,t.jsx)(g.MultiLineInput,{autoSize:!0,id:v("key-input"),placeholder:b,value:T.value,css:_.keyInput,onChange:e=>T.setValue(e.target.value,{preventValidation:!0}),onBlur:T.handleBlur}),T.error?(0,t.jsx)(j.Text,{multiline:!1,variant:"small",css:_.inputErrorMessage,children:T.error.message}):null]}),(0,t.jsx)(y.AccordionItem,{headerContent:(0,t.jsx)(j.Text,{color:"dimmer",children:"Learn how to generate an SSH key"}),headerProps:{style:{justifyContent:"start"}},children:(0,t.jsxs)(w.View,{px:6,gap:4,children:[(0,t.jsx)(j.Text,{color:"dimmer",children:"To generate an SSH key, run this shell command locally on your machine. The value it returns can be pasted into the key field."}),(0,t.jsx)(u.default,{code:P,header:"Shell command",multiline:!0})]})}),(0,t.jsx)(w.View,{row:!0,children:(0,t.jsx)(f.Button,{disabled:R||!!T.error||!!E.error,colorway:"primary",text:"Add SSH key",type:"submit",iconLeft:(0,t.jsx)(i.default,{}),onClick:async()=>{let e=await T.validate(),t=await E.validate();e?m(e.message):t?m(t.message):((0,c.track)(d.events.WORKSPACE,{action:"ssh_key_added",path:p.pathname}),await V({variables:{input:{key:T.value.trim(),label:E.value.trim()}}}))}})})]})}],200004);var T=e.i(917255);let E="https://docs.replit.com/replit-workspace/ssh";e.s(["SSH_AUTHORIZED_KEYS_FILE_PATH",0,".config/ssh/.authorized_keys","SSH_DOCS_HREF",0,E],948981);var V=e.i(91720);e.s(["SshKeyTip",0,()=>(0,t.jsx)(V.ButtonLink,{href:E,target:"_blank",rel:"noopener",text:"Need help? Read the docs",variant:"underlinedOnHover",colorway:"primary",iconLeft:(0,t.jsx)(T.default,{})})],22866);var R=e.i(389959),P=e.i(402099),I=e.i(844941),U=e.i(491194),A=e.i(968323),D=e.i(610357),K=e.i(416298),B=e.i(739521),$=e.i(396776);let O=({onClose:e,onConfirm:s,keyId:r})=>(0,t.jsx)(B.Modal,{centered:!0,isOpen:null!==r,onRequestClose:e,children:(0,t.jsxs)(w.View,{gap:16,children:[(0,t.jsx)(j.Text,{variant:"headerDefault",children:"Delete SSH key"}),(0,t.jsx)($.StatusBanner,{icon:(0,t.jsx)(K.default,{}),colorway:"warning",text:"Are you sure you want to permanently delete this SSH key?"}),(0,t.jsx)(j.Text,{multiline:!0,children:"This action cannot be undone. If you want to use this key again in the future, you can add it again."}),(0,t.jsxs)(w.View,{row:!0,gap:16,justify:"start",children:[(0,t.jsx)(f.Button,{text:"Cancel",onClick:e}),(0,t.jsx)(f.Button,{colorway:"negative",text:"Confirm and delete SSH key",onClick:null!==r?()=>s(r):()=>{}})]})]})});var F=e.i(173703),M=e.i(136540);let L=({sshKey:e})=>{let s=H(e),[r,i]=s.ok?[`${s.value.keyType} ${s.value.encodedKey.slice(0,-8)}`,`${s.value.encodedKey.slice(-8)} ${s.value.comment}`]:[e.slice(0,-8),e.slice(-8)];return(0,t.jsxs)(w.View,{shrink:!0,row:!0,gap:0,children:[(0,t.jsx)(j.Text,{variant:"small",color:"dimmer",maxLines:1,css:N.keyValuePrefix,children:r}),(0,t.jsx)(j.Text,{variant:"small",color:"dimmer",maxLines:1,css:N.keyValueSuffix,children:i})]})},H=e=>{let t=e.split(" ");return t.length<3?A.default.Err("Key is in an unexpected format"):A.default.Ok({keyType:t[0],encodedKey:t[1],comment:t[2]})},N=(0,p.cssRecord)({keyIcon:[x.rcss.color.foregroundDimmer],keyTime:[x.rcss.color.foregroundDimmer],keyLabelText:[x.rcss.fontWeight.medium],keyValuePrefix:[x.rcss.flex.shrink(1),{whiteSpace:"nowrap"},x.rcss.truncate,x.rcss.font.code],keyValueSuffix:[{whiteSpace:"nowrap"},x.rcss.truncate,x.rcss.font.code],emptyState:[x.rcss.center,x.rcss.border({color:m.tokens.outlineDefault,width:1,style:"dashed"}),x.rcss.borderRadius(4),x.rcss.py(24),x.rcss.px(12)]});e.s(["UserSshKeyList",0,({keys:e})=>{let i=(0,s.useRouter)(),{showConfirm:n,showError:l}=(0,o.default)(),[u,h]=(0,R.useState)(null),[p,{loading:x}]=(0,r.useDeleteSshKeyMutation)({onCompleted:e=>{if(!e.deletePublicSshKey)throw Error("Expected response");switch(e.deletePublicSshKey.__typename){case"UnauthorizedError":case"ServiceUnavailable":case"NotFoundError":l(e.deletePublicSshKey.message);break;case"CurrentUser":n("SSH key deleted");break;default:(0,a.default)(e.deletePublicSshKey)}},onError:e=>{l("Something unexpected happened while deleting the SSH key")}});return 0===e.length?(0,t.jsxs)(w.View,{css:N.emptyState,gap:8,children:[(0,t.jsx)(I.default,{size:24,color:m.tokens.foregroundDimmest}),(0,t.jsx)(j.Text,{color:"dimmer",children:"You haven't added any SSH keys yet."})]}):(0,t.jsxs)(w.View,{tag:"ul",gap:8,children:[e.map(({timeCreated:e,label:s,key:r,id:i})=>(0,t.jsxs)(F.ShadesSurface,{p:8,gap:4,tag:"li",children:[(0,t.jsxs)(w.View,{row:!0,gap:8,justify:"space-between",align:"center",children:[(0,t.jsx)(j.Text,{variant:"small",css:N.keyLabelText,children:s}),(0,t.jsxs)(w.View,{row:!0,gap:4,children:[(0,t.jsx)(M.IconButton,{alt:"Copy",onClick:()=>{(0,D.default)(r)},children:(0,t.jsx)(P.default,{size:16})}),(0,t.jsx)(M.IconButton,{alt:"Delete public SSH key",disabled:x,onClick:()=>{h(i)},children:(0,t.jsx)(U.default,{size:16})})]})]}),(0,t.jsxs)(w.View,{row:!0,gap:8,align:"center",children:[(0,t.jsx)(I.default,{css:N.keyIcon}),(0,t.jsx)(L,{sshKey:r})]}),(0,t.jsx)(w.View,{css:N.keyTime,tag:"time",dateTime:e,children:(0,t.jsxs)(j.Text,{variant:"small",color:"dimmer",children:["Added on"," ",new Date(e).toLocaleDateString(void 0,{dateStyle:"long"})]})})]},i)),(0,t.jsx)(O,{keyId:u,onClose:()=>h(null),onConfirm:e=>{(0,c.track)(d.events.WORKSPACE,{action:"ssh_key_removed",path:i.pathname}),p({variables:{input:{id:e}}}),h(null)}})]})}],961228)},565238,e=>{"use strict";var t=e.i(276385),s=e.i(131967),r=e.i(759317),i=e.i(308521),a=e.i(703774),n=e.i(721321);function l(){let{currentTheme:e,isSystemTheme:l,setActiveTheme:o}=(0,a.useTheme)(),c=l?"system":e.id;return(0,t.jsxs)(n.ButtonGroup,{name:"Theme",value:c,onChange:o,row:!0,children:[(0,t.jsx)(n.ButtonGroupItem,{id:"replitLight",value:"replitLight",text:"Light",icon:(0,t.jsx)(i.default,{})}),(0,t.jsx)(n.ButtonGroupItem,{id:"replitDark",value:"replitDark",text:"Dark",icon:(0,t.jsx)(r.default,{})}),(0,t.jsx)(n.ButtonGroupItem,{id:"system",value:"system",text:"System",icon:(0,t.jsx)(s.default,{})})]})}e.s(["ThemesSwitcher",()=>l])},315315,e=>{"use strict";let t=e=>{let t=new Date(e),s=t.getMonth()+1,r=t.getDate(),i=t.getFullYear();return`${s}/${r}/${i}`};e.s(["formatDate",0,t,"formatDateTime",0,e=>{let s=new Date(e),r=s.getHours(),i=s.getMinutes(),a="AM";return r>=12&&(a="PM"),0==(r%=12)&&(r="12"),i<10&&(i="0"+i),t(e)+` ${r}:${i} ${a}`}])},258941,e=>{"use strict";var t=e.i(276385),s=e.i(269848),r=e.i(140487),i=e.i(960178),a=e.i(625484);function n({prompt:e,desc:n,confirmText:l,loading:o=!1,onCancel:c,onConfirm:d,danger:u,icon:h}){return(0,t.jsxs)(a.View,{gap:24,children:[(0,t.jsx)(i.Header,{level:3,variant:"headerDefault",children:e}),(0,t.jsx)(i.Text,{children:n}),(0,t.jsxs)(a.View,{row:!0,gap:12,justify:"end",children:[c?(0,t.jsx)(r.Button,{disabled:o,onClick:c,text:"Cancel"}):null,(0,t.jsx)(r.Button,{colorway:u?"negative":"primary",disabled:o,onClick:d,text:l||"Ok",iconLeft:o?(0,t.jsx)(s.default,{}):h})]})]})}e.s(["default",()=>n])},354429,e=>{"use strict";e.s(["POSIX_ENV_VAR_ERROR",0,"Use only letters, numbers, and underscores (must start with a letter or underscore)","POSIX_ENV_VAR_PATTERN",0,/^[a-zA-Z_][a-zA-Z0-9_]*$/])},466640,e=>{"use strict";var t=e.i(276385),s=e.i(612866),r=e.i(389959),i=e.i(830675),a=e.i(417751),n=e.i(427232),l=e.i(973245),o=e.i(304277);e.i(566901);var c=e.i(951262);let d={},u=l.gql`
    fragment SharedSecret on SharedSecret {
  id
  name
  description
  version
  value
  timeCreated
  timeUpdated
  links {
    items {
      id
      resource {
        __typename
        ... on Repl {
          id
          url
          title
          iconUrl
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      nextCursor
      previousCursor
    }
    totalCount
  }
  owner {
    __typename
    ... on User {
      id
    }
  }
}
    `,h=l.gql`
    query AccountSecrets($secretsInput: SecretsInput) {
  currentUser {
    id
    secrets(input: $secretsInput) {
      ... on SharedSecretConnection {
        items {
          ...SharedSecret
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          nextCursor
          previousCursor
        }
      }
    }
  }
}
    ${u}`,m=l.gql`
    mutation CreateSharedSecrets($input: CreateSharedSecretsInput!) {
  createSharedSecrets(input: $input) {
    __typename
    ... on CreateSharedSecretsResult {
      createdSecrets {
        ...SharedSecret
      }
    }
    ... on UnauthorizedError {
      message
    }
    ... on UserError {
      message
    }
  }
}
    ${u}`,p=l.gql`
    mutation UpdateSharedSecrets($input: UpdateSharedSecretsInput!) {
  updateSharedSecrets(input: $input) {
    __typename
    ... on UpdateSharedSecretsResult {
      updatedSecrets {
        ...SharedSecret
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
}
    ${u}`,x=l.gql`
    mutation DeleteSharedSecret($id: ID!) {
  deleteSharedSecret(id: $id) {
    __typename
    ... on DeleteSharedSecretResult {
      __typename
    }
    ... on NotFoundError {
      message
    }
    ... on UnauthorizedError {
      message
    }
    ... on Error {
      message
    }
  }
}
    `;var S=e.i(368964),y=e.i(204977),f=e.i(712771),g=e.i(979530),j=e.i(995691),w=e.i(40916),v=e.i(491194),b=e.i(709485),k=e.i(47503),C=e.i(222342),_=e.i(858248),T=e.i(354429),E=e.i(967629),V=e.i(480028),R=e.i(877249),P=e.i(446530),I=e.i(173703),U=e.i(613355),A=e.i(140487),D=e.i(258941),K=e.i(88619),B=e.i(939562),$=e.i(887877),O=e.i(136540),F=e.i(607278),M=e.i(818503),L=e.i(739521),H=e.i(604963),N=e.i(960178),z=e.i(795581),W=e.i(625484),q=e.i(418944);let Y=(0,P.cssRecord)({root:[U.rcss.gap(16)]}),G=(0,P.cssRecord)({root:[U.rcss.flex.column,U.rcss.p(8),U.rcss.colWithGap(8)],clickableText:[U.rcss.color.accentPrimaryStronger,U.rcss.display.flex,U.rcss.cursor.pointer],disclaimer:[U.rcss.gap(4)],list:[{li:[U.rcss.flex.row,U.rcss.align.center,U.rcss.gap(4)]}]}),X=({name:e,links:s,isOpen:i,onClose:a,onDelete:n,isLoading:l})=>{let[o,c]=(0,r.useState)(!1);return(0,t.jsx)(L.Modal,{isOpen:i,onRequestClose:()=>a(),css:Y.root,children:(0,t.jsx)(D.default,{prompt:`Delete ${e}?`,desc:(0,t.jsxs)(t.Fragment,{children:[s&&s.totalCount>0?(0,t.jsxs)(H.PopoverTrigger,{label:"affected-repls",isOpen:o,onOpenChange:c,children:[(0,t.jsxs)("div",{children:[s.totalCount," Repl",1===s.totalCount?"":"s"," ","will immediately lose access to this secret"]}),(0,t.jsx)(et,{links:s})]}):"No Apps are currently using this secret",(0,t.jsx)("br",{}),"This action cannot be undone."]}),onConfirm:n,onCancel:a,confirmText:"Yes, delete this secret",icon:(0,t.jsx)(v.default,{}),danger:!0,loading:l})})},Q=(0,E.css)([U.rcss.border({color:V.tokens.outlineDimmer,width:1,direction:"bottom"}),{"&:last-child":{borderBottom:"none"}}]),Z=(0,P.cssRecord)({titleWrapper:[U.rcss.align.baseline],section:[U.rcss.borderRadius(12),U.rcss.p(16),U.rcss.flex.column,U.rcss.gap(12),{'*[data-sensitive="true"]':{fontFamily:"text-security-disc"}}],secretList:[U.rcss.borderRadius(),U.rcss.overflow("hidden")],secretItem:[Q,U.rcss.align.center,U.rcss.p(8),U.rcss.display.grid,{gridTemplateColumns:"1fr 1fr 140px 50px",minWidth:0,overflow:"hidden",[`@media (max-width: ${R.BREAKPOINTS.mobileMax}px)`]:{gridTemplateColumns:"1fr 2fr auto",gridTemplateRows:"auto auto",gridTemplateAreas:`
          "name name edit"
          "value value timestamp"
        `,gap:"8px"}}],secretValue:[U.rcss.display.grid,U.rcss.gap(4),U.rcss.overflow("hidden"),{gridTemplateColumns:"min-content minmax(50px, 1fr) min-content",minWidth:0,width:"100%","& > span":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",minWidth:0,display:"block",width:"100%"},[`@media (max-width: ${R.BREAKPOINTS.mobileMax}px)`]:{gridArea:"value"}}],secretValueWrapper:[U.rcss.overflow("hidden"),U.rcss.width("100%"),{textOverflow:"ellipsis",minWidth:0}],secretValueText:[U.rcss.overflow("hidden"),{textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",width:"100%",maxWidth:"100%",minWidth:0}],secretName:[U.rcss.overflow("hidden"),U.rcss.width("100%"),{textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block",minWidth:0,maxWidth:"100%",[`@media (max-width: ${R.BREAKPOINTS.mobileMax}px)`]:{gridArea:"name",fontWeight:500}}],secretTimestamp:[U.rcss.color.foregroundDimmer,{[`@media (max-width: ${R.BREAKPOINTS.mobileMax}px)`]:{gridArea:"timestamp",textAlign:"right",fontSize:"0.75rem",whiteSpace:"nowrap"}}],emptyState:[U.rcss.center,U.rcss.border({color:V.tokens.outlineDefault,width:1,style:"dashed"}),U.rcss.borderRadius(4),U.rcss.py(24),U.rcss.px(12)],secretEditContainer:[{[`@media (max-width: ${R.BREAKPOINTS.mobileMax}px)`]:{gridArea:"edit",justifySelf:"end"}}]}),J=({value:e})=>{let[s,i]=(0,r.useState)(!1);return(0,t.jsxs)(W.View,{css:Z.secretValue,row:!0,align:"center","data-sensitive":!s,children:[(0,t.jsx)(K.CopyIconButton,{textToCopy:e}),(0,t.jsx)(W.View,{css:Z.secretValueWrapper,children:(0,t.jsx)("span",{css:Z.secretValueText,children:s?e:"****************"})}),(0,t.jsx)(O.IconButton,{onClick:()=>i(!s),alt:s?"Hide":"Show",children:s?(0,t.jsx)(g.default,{size:16}):(0,t.jsx)(f.default,{size:16})})]})},ee=(0,P.cssRecord)({root:[U.rcss.display.flex,U.rcss.flex.column,U.rcss.p(8),U.rcss.gap(8),Q,{borderBottomWidth:1,borderBottomStyle:"solid"}],formFields:[U.rcss.display.grid,U.rcss.gap(32),{gridTemplateColumns:"2fr 3fr"}],formField:[U.rcss.flex.column,U.rcss.gap(8)],formFieldLabel:[{label:[U.rcss.flex.row,U.rcss.align.center,U.rcss.gap(4)]}],disclaimer:[U.rcss.color.foregroundDimmer,{fontSize:V.tokens.fontSizeSmall,lineHeight:V.tokens.lineHeightSmall}],footer:[U.rcss.display.flex,U.rcss.flex.row,U.rcss.justify.spaceBetween],footerGroup:[U.rcss.display.flex,U.rcss.flex.row,U.rcss.gap(4)]}),et=({links:e})=>(0,t.jsxs)(W.View,{css:G.root,children:[(0,t.jsx)(N.Text,{children:"The following Apps will be affected:"}),(0,t.jsx)("ul",{css:G.list,children:e.items.map(e=>"Repl"===e.resource.__typename?(0,t.jsxs)("li",{children:[(0,t.jsx)(q.default,{size:16,iconUrl:e.resource.iconUrl,alt:e.resource.title}),(0,t.jsx)(s.default,{href:e.resource.url,target:"_blank",children:e.resource.title},e.id)]},e.id):null)}),(0,t.jsxs)(N.Text,{color:"dimmer",children:["Please refresh the App page, then Stop and Run the App",(0,t.jsx)("br",{})," to use the updated linked secrets."]})]}),es=({name:e,value:s,onSave:a,onCancel:n,onDelete:l,isNew:o,secrets:c})=>{let d=(0,r.useMemo)(()=>c.find(t=>t.name===e),[c,e]),u=d?.links,h=(0,C.default)(),[m,p]=(0,r.useState)(e),[x,S]=(0,r.useState)(s),[y,j]=(0,r.useState)(!0),[w,b]=(0,r.useState)(!1),[k,_]=(0,r.useState)(!1),[E,V]=(0,r.useState)(!1),R=(0,r.useMemo)(()=>null!==m.match(T.POSIX_ENV_VAR_PATTERN),[m]),P=(0,r.useMemo)(()=>!c.some(t=>t.name===m&&t.name!==e),[e,m,c]),[I,U]=(0,r.useState)(!1),[D,K]=(0,r.useState)(null);(0,r.useEffect)(()=>{P?!R&&m?K(T.POSIX_ENV_VAR_ERROR):K(null):K("Key must be unique")},[P,R,m]);let L=(0,r.useCallback)(async()=>{V(!0);try{await l()}catch(e){i.captureException(e),h.showError("Something went wrong. Please try again.")}V(!1)},[l,h]),N=(0,r.useCallback)(async()=>{if(P&&R){b(!0);try{await a({name:m,value:x})}catch(e){K(e.message)}b(!1)}},[P,R,m,x,a]);return(0,t.jsxs)($.Form,{css:ee.root,onSubmit:e=>{e.preventDefault(),N()},children:[(0,t.jsxs)(W.View,{css:ee.formFields,children:[(0,t.jsx)(W.View,{css:ee.formField,children:(0,t.jsxs)(z.TextField,{validate:()=>P?!R&&m?T.POSIX_ENV_VAR_ERROR:void 0:"Key must be unique",validationBehavior:"aria",isRequired:!0,minLength:1,maxLength:128,name:"secretName",value:m,onChange:e=>p(e),isInvalid:null!==D,children:[(0,t.jsx)(M.Label,{color:"dimmer",multiline:!1,css:ee.formFieldLabel,children:"Key"}),(0,t.jsx)(F.Input,{autoFocus:!0,autoComplete:"off","data-1p-ignore":!0}),(0,t.jsx)(B.FieldError,{children:D})]})}),(0,t.jsx)(W.View,{css:ee.formField,children:(0,t.jsxs)(z.TextField,{isRequired:!0,minLength:1,name:"secretValue",value:x,onChange:e=>S(e),children:[(0,t.jsxs)(M.Label,{color:"dimmer",multiline:!1,css:ee.formFieldLabel,children:["Value"," ",(0,t.jsx)(O.IconButton,{alt:y?"Hide":"Show",size:12,onClick:()=>j(!y),children:y?(0,t.jsx)(g.default,{}):(0,t.jsx)(f.default,{})})]}),(0,t.jsx)(F.Input,{"data-sensitive":y,autoComplete:"off"})]})})]}),(0,t.jsx)(W.View,{css:ee.disclaimer,children:(0,t.jsx)(t.Fragment,{children:u&&u.totalCount>0?(0,t.jsxs)(W.View,{css:G.disclaimer,row:!0,align:"center",children:[(0,t.jsxs)(H.PopoverTrigger,{label:"affected-repls",isOpen:I,onOpenChange:U,placement:"bottom start",children:[(0,t.jsxs)("span",{css:G.clickableText,children:[u.totalCount," Repl",1===u.totalCount?"":"s"," "]}),(0,t.jsx)(et,{links:u})]}),"will be affected by this change."]}):null})}),(0,t.jsxs)(W.View,{css:ee.footer,children:[o?(0,t.jsx)("div",{}):(0,t.jsx)(A.Button,{text:"Delete",colorway:"negative",onClick:()=>_(!0),iconLeft:(0,t.jsx)(v.default,{})}),(0,t.jsxs)(W.View,{css:ee.footerGroup,children:[(0,t.jsx)(A.Button,{text:"Cancel",onClick:n,disabled:w}),(0,t.jsx)(A.Button,{text:"Save",colorway:"primary",loading:w,disabled:!P||!R||!m.length,onClick:N,type:"submit"})]})]}),(0,t.jsx)(X,{name:e,links:u,isOpen:k,onClose:()=>_(!1),onDelete:L,isLoading:E})]})},er=()=>{var e;let t,s=(0,k.useCurrentUserId)(),{showError:r}=(0,C.default)(),[a,n]=(e={update(e,{data:t}){if(t?.createSharedSecrets?.__typename==="CreateSharedSecretsResult"){let r=t.createSharedSecrets.createdSecrets;e.modify({id:e.identify({__typename:"CurrentUser",id:s}),fields:{secrets(t={items:[]}){let s=r.map(t=>e.writeFragment({data:t,fragment:u}));return{...t,items:[...s,...t.items]}}}})}else t?.createSharedSecrets&&r(t.createSharedSecrets.message)},onError:e=>{r("Failed to create secret. Please try again."),i.captureException(e)}},t={...d,...e},c.useMutation(m,t));return[a,n]},ei=()=>{var e;let t,s=(0,k.useCurrentUserId)(),{showError:r}=(0,C.default)(),[a,n]=(e={update(e,{data:t}){if(t?.updateSharedSecrets?.__typename==="UpdateSharedSecretsResult"){let r=t.updateSharedSecrets.updatedSecrets;e.modify({id:e.identify({__typename:"CurrentUser",id:s}),fields:{secrets(t={items:[]}){let s=t.items.map(t=>{let s=r.find(e=>e.id===t.id);return s?e.writeFragment({data:s,fragment:u}):t});return{...t,items:s}}}})}else t?.updateSharedSecrets&&r(t.updateSharedSecrets.message)},onError:e=>{r("Failed to update secret. Please try again."),i.captureException(e)}},t={...d,...e},c.useMutation(p,t));return[a,n]},ea=({id:e,name:s,value:n,timeUpdated:l,onRemoveSecret:o,secrets:u,version:h})=>{let m="0"===h,[p,f]=(0,r.useState)(m),g=(0,r.useRef)(null),j=(0,r.useCallback)(()=>{setTimeout(()=>g.current?.focus(),0)},[]),[w]=er(),[v]=ei(),[T]=(()=>{var e;let t,s=(0,k.useCurrentUserId)(),{showError:r}=(0,C.default)(),[a,n]=(e={update(e,{data:t},{variables:i}){let a=i?.id;a&&t?.deleteSharedSecret?.__typename==="DeleteSharedSecretResult"?e.modify({id:e.identify({__typename:"CurrentUser",id:s}),fields:{secrets:(e={items:[]},{readField:t})=>({...e,items:e.items.filter(e=>t("id",e)!==a)})}}):t?.deleteSharedSecret&&"message"in t.deleteSharedSecret&&r(t.deleteSharedSecret.message)},onError:e=>{r("Failed to delete secret. Please try again."),i.captureException(e)}},t={...d,...e},c.useMutation(x,t));return[a,n]})(),E=(0,r.useCallback)(async t=>{m?(await w({variables:{input:{ownerType:S.SharedSecretOwnerType.Account,secrets:[t]}}}),(0,_.track)(b.events.SHARED_SECRETS_USED,{ownerType:"account",action:"create",source:"account"})):(await v({variables:{input:{ownerType:S.SharedSecretOwnerType.Account,secrets:[{...t,id:e}]}}}),(0,_.track)(b.events.SHARED_SECRETS_USED,{ownerType:"account",action:"update",source:"account"})),f(!1)},[w,e,m,v]),V=(0,r.useCallback)(()=>{f(!1),m?o():j()},[m,o,j]);return p||!l?(0,t.jsx)(es,{secrets:u,isNew:m,name:s,value:n,onDelete:async()=>{await T({variables:{id:e}}),(0,_.track)(b.events.SHARED_SECRETS_USED,{ownerType:"account",action:"delete",source:"account"}),o()},onSave:E,onCancel:V}):(0,t.jsxs)(W.View,{css:Z.secretItem,children:[(0,t.jsx)(W.View,{css:Z.secretName,children:s}),(0,t.jsx)(J,{value:n}),(0,t.jsxs)(W.View,{css:Z.secretTimestamp,children:["Updated ",(0,a.format)(new Date(l),"MM/dd/yy")]}),(0,t.jsx)(W.View,{css:Z.secretEditContainer,align:"end",children:(0,t.jsx)(O.IconButton,{alt:"Edit",onClick:()=>f(!0),ref:g,children:(0,t.jsx)(y.default,{})})})]})};function en({hideHeader:e=!1}){let s,{data:i}=(s={...d,...void 0},o.useQuery(h,s)),[a,l]=(0,r.useState)(i?.currentUser?.secrets?.__typename==="SharedSecretConnection"?i.currentUser.secrets.items:[]);(0,r.useEffect)(()=>{l(i?.currentUser?.secrets?.__typename==="SharedSecretConnection"?i.currentUser.secrets.items:[])},[i?.currentUser?.secrets]);let c=(0,r.useCallback)(()=>{l(e=>[{__typename:"SharedSecret",id:`temp-${(0,n.v4)()}`,name:"",value:"",timeUpdated:new Date().toISOString(),timeCreated:new Date().toISOString(),version:"0"},...e])},[]),u=(0,r.useCallback)(e=>{l(t=>t.filter((t,s)=>s!==e))},[]);return(0,t.jsxs)(W.View,{gap:8,children:[(0,t.jsxs)(W.View,{row:!0,justify:e?"end":"space-between",children:[e?null:(0,t.jsx)(W.View,{css:Z.titleWrapper,row:!0,gap:8,children:(0,t.jsx)(N.Text,{variant:"subheadBig",multiline:!1,children:"Account Secrets"})}),(0,t.jsx)(W.View,{align:"center",row:!0,gap:8,children:(0,t.jsx)(A.Button,{text:"New secret",iconLeft:(0,t.jsx)(w.default,{}),size:"small",colorway:"primary",onClick:c})})]}),(0,t.jsxs)(I.ShadesSurface,{css:Z.section,children:["Add secrets to your account to access them in any of your Apps.",0===a.length?(0,t.jsxs)(W.View,{css:Z.emptyState,gap:8,children:[(0,t.jsx)(j.default,{size:24,color:V.tokens.foregroundDimmest}),(0,t.jsx)(N.Text,{color:"dimmer",children:"You haven't added any account secrets yet."})]}):(0,t.jsx)(I.ShadesSurface,{css:Z.secretList,elevate:"2x",children:a.map((e,s)=>(0,t.jsx)(ea,{secrets:a,onRemoveSecret:()=>u(s),...e},e.id))})]})]})}e.s(["default",()=>en,"useCreateSharedSecretsWithCache",0,er,"useUpdateSharedSecretsWithCache",0,ei],466640)},681953,e=>{"use strict";var t=e.i(276385),s=e.i(138716),r=e.i(389959),i=e.i(204977),a=e.i(416746),n=e.i(269848),l=e.i(40916),o=e.i(596139),c=e.i(316599),d=e.i(911928),u=e.i(32629),h=e.i(446530),m=e.i(613355),p=e.i(140487),x=e.i(136540),S=e.i(396776),y=e.i(625484);let f=(0,h.cssRecord)({loadingContainer:[m.rcss.minHeight(80)]});function g({goToNewPaymentMethodForm:e}){let{loading:s,isOnTrialPlan:h,trialWillCancel:m}=(0,d.useIsOnTrialPlan)(),{paymentMethod:g,loading:j,error:w}=(0,u.useUserPaymentMethod)(),v=(0,r.useMemo)(()=>h&&!m?(0,t.jsx)(S.StatusBanner,{colorway:"primary",icon:(0,t.jsx)(a.default,{}),text:(0,t.jsxs)(t.Fragment,{children:["Adding a payment method will set your Replit ",o.corePlanName," ","membership to auto-renew at the end of the trial."]})}):(0,t.jsx)(S.StatusBanner,{colorway:"primary",icon:(0,t.jsx)(a.default,{}),text:"Add a payment method to enable additional resource usage."}),[h,m]);return j||s||null!=w?(0,t.jsx)(y.View,{css:f.loadingContainer,justify:"center",align:"center",children:(0,t.jsx)(n.default,{})}):(0,t.jsxs)(y.View,{gap:16,children:[null!=g?(0,t.jsx)(y.View,{gap:16,children:(0,t.jsxs)(y.View,{row:!0,gap:8,align:"center",children:[(0,t.jsx)(x.IconButton,{alt:"Update Payment Method",onClick:e,children:(0,t.jsx)(i.default,{})}),(0,t.jsx)(c.CardLastFour,{last4:g.last4})]})}):null," ",null==g?(0,t.jsxs)(y.View,{gap:6,children:[v,(0,t.jsx)(p.Button,{text:"Add Payment Method",iconLeft:(0,t.jsx)(l.default,{}),onClick:e})]}):null]})}var j=e.i(845228),w=e.i(843136),v=e.i(960178);function b(){let{currentStep:e,goBack:r,goTo:i}=(0,w.usePaymentSteps)({step:"card_preferences"});switch(e.step){case"card_preferences":return(0,t.jsx)(g,{goToNewPaymentMethodForm:()=>i({step:"new_payment_method_form"})});case"new_payment_method_form":return(0,t.jsxs)(y.View,{gap:16,children:[(0,t.jsxs)(y.View,{row:!0,gap:8,align:"center",children:[(0,t.jsx)(x.IconButton,{alt:"Back",onClick:r,children:(0,t.jsx)(s.default,{})}),(0,t.jsx)(v.Text,{variant:"subheadDefault",multiline:!1,children:"Update Payment Method"})]}),(0,t.jsx)(j.NewPaymentMethodForm,{onClose:r,context:"account_page"})]})}}e.s(["AccountPaymentMethodFlow",()=>b],681953)}]);

//# debugId=4e22eacf-a76e-bc3f-5482-e005fc54d9b5
//# sourceMappingURL=2fb9d1452cd2d699.js.map