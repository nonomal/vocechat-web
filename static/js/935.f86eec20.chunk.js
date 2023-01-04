"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[935],{80874:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(70537),o=i(10336);const s=e=>{let{id:t="root-modal",mask:i=!0,children:s}=e;const[r,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;i&&e.classList.add("mask");const n=document.createElement("div");return n.classList.add("wrapper"),e.appendChild(n),a(n),()=>{e.removeChild(n)}}),[t,i]),r?(0,o.createPortal)(s,r):null}},17237:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(70537),o=i(40182),s=i(57889),r=i(80683);const a=s.ZP.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);

  .prefix {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
    background: #f3f4f6;
    border-right: 1px solid #e5e7eb;
  }

  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,l=s.ZP.input`
  width: 100%;
  background: #ffffff;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  outline: none;

  &:not(.inner) {
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  }

  &.large {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 8px;
  }

  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }

  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }

  &::placeholder {
    color: #d1d5db;
  }

  &[type="password"] {
    padding-right: 30px;
  }
`,c=e=>{let{type:t="text",prefix:i="",className:s,...c}=e;const[d,p]=(0,n.useState)(t);return"password"==t?(0,r.jsxs)(a,{className:s,children:[(0,r.jsx)(l,{type:d,autoComplete:"password"==d?"current-password":"on",className:`inner ${s}`,...c}),(0,r.jsx)("div",{className:"view",onClick:()=>{p((e=>"password"==e?"text":"password"))},children:"password"==d?(0,r.jsx)(o.MBb,{color:"#78787c"}):(0,r.jsx)(o.Rbo,{color:"#78787c"})})]}):i?(0,r.jsxs)(a,{className:s,children:[(0,r.jsx)("span",{className:"prefix",children:i}),(0,r.jsx)(l,{className:`inner ${s}`,type:d,...c})]}):(0,r.jsx)(l,{type:d,className:s,...c})}},40698:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(57889),o=i(80683);const s=n.ZP.div`
  padding: 32px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 440px;
  &.compact {
    padding: 16px;
    min-width: 406px;
    .title,
    .desc {
      text-align: left;
    }
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #374151;
    margin-bottom: 16px;
  }
  .desc {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .btns {
    padding-top: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }
`,r=e=>{let{title:t="",description:i="",buttons:n,children:r,...a}=e;return(0,o.jsxs)(s,{...a,children:[t&&(0,o.jsx)("h3",{className:"title",children:t}),i&&(0,o.jsx)("p",{className:"desc",children:i}),r,n&&(0,o.jsx)("div",{className:"btns",children:n})]})}},42712:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(70537),o=i(65809);function s(){const[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)(),{data:r}=(0,o.R)(void 0,{refetchOnMountOrArgChange:!0}),[a,{isSuccess:l}]=(0,o.Ku)();(0,n.useEffect)((()=>{r&&s(r)}),[r]),(0,n.useEffect)((()=>{t(!l&&JSON.stringify(r)!==JSON.stringify(i))}),[r,i,l]);return{config:i,changed:e,updateGithubAuthConfig:e=>{s((t=>t?{...t,...e}:e))},updateGithubAuthConfigToServer:async()=>{i&&await a(i)},isSuccess:l}}},25089:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(70537),o=i(65809);function s(){const[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)(""),{data:r}=(0,o.eM)(void 0,{refetchOnMountOrArgChange:!0}),[a,{isSuccess:l}]=(0,o.Qg)();(0,n.useEffect)((()=>{r&&s(r.client_id)}),[r]),(0,n.useEffect)((()=>{t(!l&&(null===r||void 0===r?void 0:r.client_id)!==i)}),[r,i,l]);return{config:r,changed:e,clientId:i,updateClientId:s,updateClientIdToServer:async()=>{i&&await a({client_id:i})},updateGoogleAuthConfig:a,isSuccess:l}}},44917:(e,t,i)=>{i.d(t,{Z:()=>q});var n,o,s,r,a=i(70537),l=i(27418),c=i(65809),d=i(42712),p=i(25089),u=i(89156),h=i(57889),g=i(80308);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},x.apply(this,arguments)}const f=(e,t)=>{let{title:i,titleId:l,...c}=e;return a.createElement("svg",x({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":l},c),i?a.createElement("title",{id:l},i):null,n||(n=a.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"})),o||(o=a.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"})),s||(s=a.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"})),r||(r=a.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})))},m=(0,a.forwardRef)(f);var w=i(69885),b=i(15312),v=i(14566),C=i(80683);const j=(0,h.ZP)(w.Z)`
  position: relative;
  width: 100%;
  background: white !important;
  border: 1px solid #d0d5dd;
  color: #344054;
  height: 46px;
  overflow: hidden;
  .mask {
    background: inherit;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    z-index: 998;
    height: 40px;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  > .hide {
    /* z-index: 1; */
    /* opacity: 0; */
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    iframe {
      width: 100% !important;
    }
  }
  &:hover {
     .hide {
      opacity: 0;
      z-index: 999;
    }
  }
`,y=e=>{let{type:t="login",loaded:i,loadError:n}=e;const{t:o}=(0,v.$G)("auth"),[s,{isSuccess:r,isLoading:c,error:d}]=(0,b.YA)(),p=localStorage.getItem(g.LJ);return(0,a.useEffect)((()=>{r&&l.ZP.success("Login Successfully")}),[r]),(0,a.useEffect)((()=>{if(d&&"status"in d)if(410===d.status)l.ZP.error("No associated account found, please contact user admin for an invitation link to join.");else l.ZP.error("Something Error");else;}),[d]),(0,C.jsxs)(j,{disabled:!i||c,children:[(0,C.jsxs)("div",{className:"mask",children:[(0,C.jsx)(m,{className:"icon"}),n?"Script Load Error!":i?`${o("login"===t?"login.google":"reg.google")}`:"Initializing"]}),(0,C.jsx)("div",{className:"hide",children:(0,C.jsx)(u.kZ,{width:"360px",onSuccess:e=>{s({magic_token:p,id_token:e.credential||"",type:"google"})}})})]})},k=e=>{let{type:t="login",clientId:i}=e;const[n,o]=(0,a.useState)(!1),[s,r]=(0,a.useState)(!1);return i?(0,C.jsx)(u.rg,{onScriptLoadError:()=>{r(!0)},onScriptLoadSuccess:()=>{o(!0)},clientId:i,children:(0,C.jsx)(y,{type:t,loaded:n,loadError:s})}):null};var E,Z;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},S.apply(this,arguments)}const _=(e,t)=>{let{title:i,titleId:n,...o}=e;return a.createElement("svg",S({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),i?a.createElement("title",{id:n},i):null,E||(E=a.createElement("g",{clipPath:"url(#clip0_14990_39524)"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z",fill:"black"}))),Z||(Z=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_14990_39524"},a.createElement("rect",{width:24,height:24,fill:"white",transform:"translate(0.5)"})))))},I=(0,a.forwardRef)(_),N=(0,h.ZP)(w.Z)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,M=e=>{let{type:t="login",source:i="webapp",client_id:n}=e;const{t:o}=(0,v.$G)("auth");(0,a.useEffect)((()=>{const e=e=>{const{key:t,newValue:i}=e;if("widget"==t&&i){localStorage.removeItem("widget");const e=window.parent;e&&e.postMessage("RELOAD_WITH_OPEN","*")}};return"widget"==i&&window.addEventListener("storage",e),()=>{"widget"==i&&window.removeEventListener("storage",e)}}),[i]);return(0,C.jsxs)(N,{onClick:()=>{const e=`https://github.com/login/oauth/authorize?client_id=${n}&redirect_uri=${location.origin}/github/cb/${i}.html`;"webapp"==i?location.href=e:window.open(e)},children:[(0,C.jsx)(I,{className:"icon"}),` ${o("login"===t?"login.github":"reg.github")}`]})};var O=i(70479);const P=i.p+"static/media/metamask.f04d5fb63394197766d0.svg";var L=i(64813);function z(e){let{login:t}=e;const{t:i}=(0,v.$G)("auth"),[n,o]=(0,a.useState)(!1),[s,r]=(0,a.useState)([]),[l]=(0,b.sZ)(),c=(0,a.useRef)();(0,a.useEffect)((()=>{function e(e){r(e)}return c.current||(c.current=new O.Z),O.Z.isMetaMaskInstalled()&&window.ethereum.on("accountsChanged",e),()=>{O.Z.isMetaMaskInstalled()&&window.ethereum.removeListener("accountsChanged",e)}}),[]),(0,a.useEffect)((()=>{if(O.Z.isMetaMaskInstalled())if(s.length>0){var e;const[i]=s;(async e=>{const{data:i,isSuccess:n}=await l(e);if(n){const n=await d(e,i);t({public_address:e,nonce:i,signature:n,type:"metamask"})}})(i),o(!0),null===(e=c.current)||void 0===e||e.stopOnboarding()}else o(!1)}),[s]);const d=async(e,t)=>await window.ethereum.request({method:"personal_sign",params:[t,e,"hello from "]});return(0,C.jsxs)(L.I,{disabled:n,onClick:async()=>{if(O.Z.isMetaMaskInstalled()){o(!0);try{const e=await window.ethereum.request({method:"eth_requestAccounts"});r(e)}catch(t){window.ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}o(!1)}else{var e;null===(e=c.current)||void 0===e||e.startOnboarding()}},children:[(0,C.jsx)("img",{className:"icon",src:P,alt:"meta mask icon"}),i("login.metamask")]})}var $=i(40698),A=i(80874);const R=e=>{let{issuer:t}=e;const[i,{data:n,isLoading:o,isSuccess:s}]=(0,b.CB)();return(0,a.useEffect)((()=>{if(s&&n){const{url:e}=n;location.href=e}}),[n,s]),(0,C.jsxs)(L.I,{disabled:o||s,onClick:()=>{i({issuer:t.domain,redirect_uri:`${location.origin}/#/login`})},children:[!!t.favicon&&(0,C.jsx)("img",{src:t.favicon,className:"icon",alt:"icon"}),o?"Loading...":`Login with ${t.domain}`]})},B=(0,h.ZP)($.Z)`
  text-align: center;
  padding: 32px 32px 16px;

  > *:first-child {
    margin-bottom: 32px;
  }

  > .button {
    > .icon {
      width: 24px;
      height: 24px;
    }

    &.buttonCancel {
      color: #8f8f8f;
    }
  }
`,G=e=>{let{issuers:t}=e;const{t:i}=(0,v.$G)("auth"),[n,o]=(0,a.useState)(!1);return t?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(L.I,{onClick:()=>{o(!0)},children:i("login.oidc")}),n&&(0,C.jsx)(A.Z,{id:"modal-modal",children:(0,C.jsxs)(B,{title:"Login with OIDC",children:[t.filter((e=>e.enable)).map(((e,t)=>(0,C.jsx)(R,{issuer:e},t))),(0,C.jsx)(w.Z,{className:"border_less ghost buttonCancel",onClick:()=>{o(!1)},children:"Close"})]})})]}):null},q=()=>{const[e,{isSuccess:t}]=(0,b.YA)(),{config:i}=(0,d.Z)(),{data:n,isSuccess:o}=(0,c.ww)(),{clientId:s}=(0,p.Z)();if((0,a.useEffect)((()=>{t&&l.ZP.success("Login Successfully")}),[t]),!o)return null;const{github:r,google:u,metamask:h,oidc:g=[]}=n,x=u&&!!s;return(0,C.jsxs)(C.Fragment,{children:[x&&(0,C.jsx)(k,{type:"register",clientId:s}),r&&(0,C.jsx)(M,{type:"register",client_id:null===i||void 0===i?void 0:i.client_id}),h&&(0,C.jsx)(z,{login:e}),g.length>0&&(0,C.jsx)(G,{issuers:g})]})}},64813:(e,t,i)=>{i.d(t,{I:()=>s,Z:()=>r});var n=i(57889),o=i(69885);const s=(0,n.ZP)(o.Z)`
  width: 100%;
  /* margin-bottom: 16px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,r=n.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    padding: 36px 40px 32px 40px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
      }
    }
    .desc {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
    .or {
      border: none;
      position: relative;
      height: 1px;
      background-color: #e4e7ec;
      margin: 26px 0;
      overflow: visible;
      &:after {
        padding: 4px;
        background-color: #fff;
        content: "OR";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
    >.btns{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`}}]);