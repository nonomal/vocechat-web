"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[311],{41016:(e,t,s)=>{s.d(t,{Z:()=>l});var a,r=s(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},n.apply(this,arguments)}const i=(e,t)=>{let{title:s,titleId:i,...l}=e;return r.createElement("svg",n({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),s?r.createElement("title",{id:i},s):null,a||(a=r.createElement("path",{d:"M5.99988 6.5C5.99988 5.11929 7.11917 4 8.49988 4H15.4999C16.8806 4 17.9999 5.11929 17.9999 6.5V19.5C17.9999 19.6881 17.8944 19.8602 17.7268 19.9456C17.5592 20.0309 17.3579 20.015 17.2058 19.9044L11.9999 16.1183L6.79396 19.9044C6.64187 20.015 6.44057 20.0309 6.27299 19.9456C6.1054 19.8602 5.99988 19.6881 5.99988 19.5V6.5Z"})))},l=(0,r.forwardRef)(i)},25552:(e,t,s)=>{s.d(t,{Z:()=>l});var a,r=s(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},n.apply(this,arguments)}const i=(e,t)=>{let{title:s,titleId:i,...l}=e;return r.createElement("svg",n({width:14,height:15,viewBox:"0 0 14 15",fill:"black",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),s?r.createElement("title",{id:i},s):null,a||(a=r.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fillOpacity:.8})))},l=(0,r.forwardRef)(i)},64631:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(21812),r=s(80683);function n(e){return e<=16?8:e<=24?12:e<=32?16:e<=40?18:e<=56?22:e<=80?48:64}const i=e=>{let{src:t="",name:s="Deleted User",type:i="user",width:l,height:o,...c}=e;return t&&0!==t.length?(0,r.jsx)("img",{src:t,...c}):(0,r.jsx)("div",{className:`rounded-full flex-center ${c.className||""}`,style:{width:l,height:o,fontSize:n(l),fontWeight:400,fontFamily:"'Lato', 'Lato-Regular', 'Helvetica Neue'",background:"channel"===i?"#EAECF0":"#4c99e9",color:"channel"===i?"#475467":"#FFFFFF"},children:(0,a.Qm)(s)})}},80874:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(70537),r=s(10336);const n=e=>{let{id:t="root-modal",mask:s=!0,children:n}=e;const[i,l]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;s&&e.classList.add("mask");const a=document.createElement("div");return a.classList.add("wrapper"),e.appendChild(a),l(a),()=>{e.removeChild(a)}}),[t,s]),i?(0,r.createPortal)(n,i):null}},31159:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(7829),r=s(57889),n=s(80683);const i=r.ZP.div`
  position: relative;
  background: #fff;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #1d2939;
  border-radius: var(--br);
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  &::after {
    background-color: inherit;
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 1px;
    transform-origin: center;
  }
  &.right::after {
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
  &.top::after {
    left: 50%;
    bottom: 0;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
  }
  &.bottom::after {
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
`,l=e=>{let{tip:t="",placement:s="right",delay:r=null,children:l,...o}=e;return(0,n.jsx)(a.ZP,{offset:[0,18],duration:r?[300,250]:0,delay:null!==r&&void 0!==r?r:[150,0],placement:s,content:(0,n.jsx)(i,{className:s,children:t}),...o,children:l})}},75290:(e,t,s)=>{s.r(t),s.d(t,{default:()=>me});var a=s(70537),r=s(15924),n=s(64084),i=s(14566),l=s(57889);const o=l.ZP.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(---navs-bg);
  &.guest {
    background: none;
  }
  > .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    &.left {
      align-items: center;
      position: relative;
      background: transparent;
      width: 64px;
      transition: all 0.5s ease-in;
      > .divider {
        width: -webkit-fill-available;
        height: 1px;
        background-color: #d4d4d4;
        margin: 8px 16px;
      }
      &.expand {
        width: 140px;
      }
    }
    &.right {
      width: 100%;
    }
    .link_navs {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 24px 12px;
      .link {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4b5563;
        border-radius: 8px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
        &.active {
          background-color: #55c7ec;
          svg path {
            fill: #fff;
          }
        }
      }
    }
  }
  &.guest > .col.right {
    margin: 0 8px;
  }
`;var c=s(64631),d=s(66160),u=s(80683);const h=e=>{let{uid:t}=e;const{pathname:s}=(0,r.TH)(),a=(0,d.CG)((e=>e.users.byId[t]));return a?(0,u.jsx)("div",{className:"px-3 py-2.5 invisible md:visible",children:(0,u.jsx)(n.OL,{to:`/setting?nav=my_account&f=${s}`,children:(0,u.jsx)("div",{className:"w-8 h-8",children:(0,u.jsx)(c.Z,{className:" object-cover w-full h-full",width:32,height:32,src:a.avatar,name:a.name})})})}):null};var p=s(63356),m=s(31159);const g=s.p+"static/media/setting.3775f508cd4166c61556.svg",f=l.ZP.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px 12px;
  .menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }
`,v=()=>{const{pathname:e}=(0,r.TH)();return(0,u.jsx)(f,{children:(0,u.jsx)("li",{className:"menu link_navs",children:(0,u.jsx)(n.OL,{className:"link",to:`/setting?f=${e}`,children:(0,u.jsx)(m.Z,{placement:"right",tip:"Settings",children:(0,u.jsx)("img",{src:g,alt:"setting icon",className:"w-6 h-6 max-w-[unset]"})})})})})};var x=s(7699),w=s.n(x),b=s(98090),C=s.n(b),j=s(3074),y=s(96157),L=s(2101),k=s(53517),E=s(1823),N=s(88332),Z=s(53429),M=s(27197),O=s(81980),I=s(75265),D=s(12564);const P=()=>{const[e,t]=(0,a.useState)(!1),s=(0,j.I0)();return{rehydrate:async()=>{const e={channels:[],users:[],fileMessage:{},channelMessage:{},userMessage:{},reactionMessage:{},message:{replying:{}},footprint:{},ui:{},server:{}},a=Object.keys(window.CACHE);await Promise.all(a.map((t=>{var s;return null===(s=window.CACHE[t])||void 0===s?void 0:s.iterate(((s,a)=>{switch(t){case"channels":s&&e.channels.push(s);break;case"users":s&&e.users.push(s);break;case"footprint":e.footprint[a]=s;break;case"ui":e.ui[a]=s;break;case"messageChannel":e.channelMessage[a]=s;break;case"messageFile":e.fileMessage[a]=s||[];break;case"messageDM":e.userMessage[a]=s;break;case"messageReaction":e.reactionMessage[a]=s;break;case"message":e.message[a]=s;break;case"server":e.server[a]=s}}))}))),s((0,M.i2)(e.users)),s((0,L.tD)(e.server)),s((0,Z.vB)(e.channels)),s((0,I.Cb)(e.fileMessage.list)),s((0,E.sL)(e.channelMessage)),s((0,N.Cc)(e.userMessage)),s((0,k.KC)(e.message)),s((0,O.ZN)(e.footprint)),s((0,D.HM)(e.ui)),s((0,y.kY)(e.reactionMessage)),t(!0)},rehydrated:e}};var S=s(80308);const H=[{storeName:"channels",description:"store channel list"},{storeName:"users",description:"store user list"},{storeName:"messageDM",description:"store DM message with IDs"},{storeName:"messageChannel",description:"store channel message with IDs"},{storeName:"message",description:"store message with key-val full data"},{storeName:"messageFile",description:"store file message list refs"},{storeName:"messageReaction",description:"store message reaction with key-val full data"},{storeName:"footprint",description:"store user visit data"},{storeName:"server",description:"store server data"},{storeName:"ui",description:"store UI state"}],F=()=>{const e=`local_db_${localStorage.getItem(S.kK)||""}_v_${S.YM.split(".").join("_")}`;window.CACHE={},H.forEach((t=>{let{storeName:s,description:a}=t;window.CACHE[s]=C().createInstance({name:e,storeName:s,description:a})}))};var R=s(24783),B=s(52334),_=s(65809),T=s(51630),V=s(6144);let A=!1;var $=s(69248),G=s(15312);let U=!1,z=!1;const W=()=>{const e=(0,$.Z)(S.um),[t]=(0,G.Vd)();return(0,a.useEffect)((()=>{(async e=>{if(e&&!z&&!U)try{z=!0,await t(e),U=!0}catch{z=!1,U=!0}})(e)}),[e]),null},K=(0,a.memo)(W);var Y=s(80874),q=s(25552),J=s(69885);const Q=e=>{let{handleInstall:t,closePrompt:s}=e;return(0,u.jsx)(Y.Z,{mask:!1,children:(0,u.jsxs)("div",{className:"relative pointer-events-auto mt-4 w-[406px] p-4 rounded-md bg-white shadow-md flex flex-col gap-3",children:[(0,u.jsx)(q.Z,{className:"absolute top-4 right-4 cursor-pointer",onClick:s}),(0,u.jsxs)("div",{className:"flex flex-col gap-4 text-gray-600",children:[(0,u.jsx)("h2",{className:"font-semibold",children:"Install web app on desktop?"}),(0,u.jsx)("p",{className:"text-sm",children:"Add to desktop for quick access to this app."})]}),(0,u.jsxs)("div",{className:"w-full flex justify-end gap-4",children:[(0,u.jsx)(J.Z,{className:"ghost cancel small",onClick:s,children:"Cancel"}),(0,u.jsx)(J.Z,{className:"main small",onClick:t,children:"Install"})]})]})})};const X=()=>{const{setCanceled:e,prompted:t,setDeferredPrompt:s,showPrompt:r}=function(){const e=(0,a.useRef)(null),t=t=>{e.current=t};return(0,a.useEffect)((()=>{const e=e=>{e.preventDefault(),t(e)};return window.addEventListener("beforeinstallprompt",e,!0),()=>{window.removeEventListener("beforeinstallprompt",e,!0)}}),[]),{setCanceled:()=>{localStorage.setItem(S.R1,"true")},prompted:!!localStorage.getItem(S.R1),resetPrompt:()=>{localStorage.removeItem(S.R1),e.current=null},deferredPrompt:e.current,setDeferredPrompt:t,showPrompt:async()=>{if(!e.current)return;e.current.prompt();const{outcome:s}=await e.current.userChoice;t(null)}}}(),[n,i]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=e=>{e.preventDefault(),s(e),i(!0)},t=()=>{s(null),i(!1)};return window.addEventListener("beforeinstallprompt",e,!0),window.addEventListener("appinstalled",t),()=>{window.removeEventListener("beforeinstallprompt",e,!0),window.removeEventListener("appinstalled",t)}}),[]);return!n||t?null:(0,u.jsx)(Q,{handleInstall:async()=>{i(!1),await r()},closePrompt:async()=>{e(),i(!1)}})};var ee;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},te.apply(this,arguments)}const se=(e,t)=>{let{title:s,titleId:r,...n}=e;return a.createElement("svg",te({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,ee||(ee=a.createElement("path",{d:"M8.79053 19.3376C10.0779 20.3775 11.7161 21.0002 13.4999 21.0002C14.6315 21.0002 15.7064 20.7491 16.6701 20.299L20.1027 20.9856C20.3486 21.0348 20.6029 20.9579 20.7802 20.7806C20.9575 20.6032 21.0345 20.349 20.9853 20.1031L20.2988 16.6702C20.7488 15.7065 20.9999 14.6318 20.9999 13.5002C20.9999 11.7168 20.3774 10.0788 19.338 8.79163C19.4443 9.3448 19.4999 9.91599 19.4999 10.5002C19.4999 11.0652 19.4479 11.618 19.3483 12.1541C19.4475 12.5868 19.4999 13.0374 19.4999 13.5002C19.4999 14.4837 19.2638 15.41 18.8458 16.2274C18.7689 16.3779 18.745 16.5501 18.7782 16.7159L19.2938 19.2941L16.7159 18.7784C16.55 18.7452 16.3778 18.7691 16.2273 18.8461C15.4098 19.2641 14.4835 19.5002 13.4999 19.5002C13.037 19.5002 12.5864 19.4478 12.1537 19.3486C11.6176 19.4481 11.0648 19.5002 10.4999 19.5002C9.91613 19.5002 9.34454 19.4443 8.79053 19.3376ZM10.5 3C6.35788 3 3.00001 6.35786 3.00001 10.5C3.00001 11.6316 3.2511 12.7064 3.70112 13.6701L3.01458 17.103C2.9654 17.3489 3.04237 17.6031 3.2197 17.7804C3.39702 17.9577 3.65123 18.0347 3.89713 17.9855L7.32974 17.2988C8.29349 17.7489 9.36836 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3Z"})))},ae=(0,a.forwardRef)(se);var re;function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},ne.apply(this,arguments)}const ie=(e,t)=>{let{title:s,titleId:r,...n}=e;return a.createElement("svg",ne({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,re||(re=a.createElement("path",{d:"M17.7541 13.9999C18.9961 13.9999 20.0029 15.0068 20.0029 16.2488V17.1673C20.0029 17.7406 19.8237 18.2997 19.4903 18.7662C17.9445 20.9294 15.4202 22.0011 11.9999 22.0011C8.57891 22.0011 6.05595 20.9289 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1688V16.2488C4.00342 15.0068 5.01027 13.9999 6.25229 13.9999H17.7541ZM11.9999 2.00464C14.7613 2.00464 16.9999 4.24321 16.9999 7.00464C16.9999 9.76606 14.7613 12.0046 11.9999 12.0046C9.23845 12.0046 6.99988 9.76606 6.99988 7.00464C6.99988 4.24321 9.23845 2.00464 11.9999 2.00464Z",fill:"#70707B"})))},le=(0,a.forwardRef)(ie);var oe,ce=s(41016);function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},de.apply(this,arguments)}const ue=(e,t)=>{let{title:s,titleId:r,...n}=e;return a.createElement("svg",de({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,oe||(oe=a.createElement("path",{d:"M13.821 6.5H19.75C20.8867 6.5 21.8266 7.34297 21.9785 8.43788L21.9948 8.59595L22 8.75V17.75C22 18.9409 21.0748 19.9156 19.904 19.9948L19.75 20H4.25C3.05914 20 2.08436 19.0748 2.00519 17.904L2 17.75V10.499L8.20693 10.5L8.40335 10.4914C8.79396 10.4572 9.16896 10.3214 9.49094 10.0977L9.64734 9.9785L13.821 6.5ZM8.20693 4C8.66749 4 9.1153 4.14129 9.49094 4.40235L9.64734 4.5215L11.75 6.273L8.68706 8.82617L8.60221 8.88738C8.51363 8.94232 8.41452 8.9782 8.31129 8.9927L8.20693 9L2 8.999V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H8.20693Z",fill:"#70707B"})))},he=(0,a.forwardRef)(ue);function pe(){const{t:e}=(0,i.$G)(),t=(0,r.bS)("/"),s=(0,r.bS)("/chat"),{pathname:l}=(0,r.TH)(),{loginUid:c,guest:g,ui:{ready:f,rememberedNavs:{chat:x,user:b}}}=(0,d.CG)((e=>{var t;return{ui:e.ui,loginUid:null===(t=e.authData.user)||void 0===t?void 0:t.uid,guest:e.authData.guest}})),{success:C}=function(){const[e]=(0,V.N2)(),{rehydrate:t,rehydrated:s}=P(),{loginUid:r,token:n,isGuest:i,expireTime:l=+new Date,channelMessageData:o,channelIds:c}=(0,d.CG)((e=>{var t;return{channelIds:e.channels.ids,channelMessageData:e.channelMessage,loginUid:null===(t=e.authData.user)||void 0===t?void 0:t.uid,isGuest:e.authData.guest,token:e.authData.token,expireTime:e.authData.expireTime}})),{setStreamingReady:u}=(0,T.Z)(),[h,{isLoading:p,isSuccess:m,isError:g,data:f}]=(0,R.rF)(),[v,{isLoading:x,isSuccess:b,isError:C,data:j}]=(0,B.CJ)(),[y,{isLoading:L,isSuccess:k,isError:E,data:N}]=(0,_.$M)();(0,a.useEffect)((()=>(F(),t(),()=>{u(!1)})),[]),(0,a.useEffect)((()=>{i&&c.length>0&&!A&&(c.filter((e=>!o[e])).forEach((t=>{e({id:t,limit:50})})),A=!0)}),[c,o,i]),(0,a.useEffect)((()=>{s&&(v(),y(),h())}),[s]);const Z=w()().isAfter(new Date(l-2e4)),M=!!r&&s&&!!n&&!Z;return(0,a.useEffect)((()=>{u(M)}),[M]),{loading:x||L||p||!s,error:C&&E&&g,success:b&&k&&m,data:{users:j,server:N,favorites:f}}}();if(!C||!f)return(0,u.jsx)(p.Z,{reload:!0,fullscreen:!0});const j=l.startsWith("/setting"),y=t||l.startsWith("/chat");if(j)return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.j3,{})});const L=s?"/chat":x||"/chat",k=b||"/users";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),!g&&(0,u.jsx)(K,{}),(0,u.jsxs)(o,{className:g?"guest":"",children:[!g&&(0,u.jsxs)("div",{className:"col left",children:[c&&(0,u.jsx)(h,{uid:c}),(0,u.jsxs)("nav",{className:"link_navs",children:[(0,u.jsx)(n.OL,{className:()=>"link "+(y?"active":""),to:L,children:(0,u.jsx)(m.Z,{tip:e("chat"),children:(0,u.jsx)(ae,{})})}),(0,u.jsx)(n.OL,{className:"link",to:k,children:(0,u.jsx)(m.Z,{tip:e("members"),children:(0,u.jsx)(le,{})})}),(0,u.jsx)(n.OL,{className:"link",to:"/favs",children:(0,u.jsx)(m.Z,{tip:e("favs"),children:(0,u.jsx)(ce.Z,{})})}),(0,u.jsx)(n.OL,{className:"link",to:"/files",children:(0,u.jsx)(m.Z,{tip:e("files"),children:(0,u.jsx)(he,{})})})]}),(0,u.jsx)(v,{})]}),(0,u.jsx)("div",{className:"col right",children:(0,u.jsx)(r.j3,{})})]})]})}const me=(0,a.memo)(pe)}}]);