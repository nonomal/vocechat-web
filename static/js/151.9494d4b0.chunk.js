"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[151],{8055:(e,s,i)=>{i.d(s,{Z:()=>c});var a,t=i(537);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},l.apply(this,arguments)}const n=(e,s)=>{let{title:i,titleId:n,...c}=e;return t.createElement("svg",l({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":n},c),i?t.createElement("title",{id:n},i):null,a||(a=t.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#344054",strokeWidth:1.67,strokeLinecap:"round",strokeLinejoin:"round"})))},c=(0,t.forwardRef)(n)},2712:(e,s,i)=>{i.d(s,{Z:()=>l});var a=i(537),t=i(5809);function l(){const[e,s]=(0,a.useState)(!1),[i,l]=(0,a.useState)(),{data:n}=(0,t.R)(void 0,{refetchOnMountOrArgChange:!0}),[c,{isSuccess:r}]=(0,t.Ku)();(0,a.useEffect)((()=>{n&&l(n)}),[n]),(0,a.useEffect)((()=>{s(!r&&JSON.stringify(n)!==JSON.stringify(i))}),[n,i,r]);return{config:i,changed:e,updateGithubAuthConfig:e=>{l((s=>s?{...s,...e}:e))},updateGithubAuthConfigToServer:async()=>{i&&await c(i)},isSuccess:r}}},5089:(e,s,i)=>{i.d(s,{Z:()=>l});var a=i(537),t=i(5809);function l(){const[e,s]=(0,a.useState)(!1),[i,l]=(0,a.useState)(""),{data:n}=(0,t.eM)(void 0,{refetchOnMountOrArgChange:!0}),[c,{isSuccess:r}]=(0,t.Qg)();(0,a.useEffect)((()=>{n&&l(n.client_id)}),[n]),(0,a.useEffect)((()=>{s(!r&&(null===n||void 0===n?void 0:n.client_id)!==i)}),[n,i,r]);return{config:n,changed:e,clientId:i,updateClientId:l,updateClientIdToServer:async()=>{i&&await c({client_id:i})},updateGoogleAuthConfig:c,isSuccess:r}}},3997:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MyAccount});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(537),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7889),react_hot_toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7418),_app_services_user__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2334),_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5727),_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8593),_RemoveAccountConfirmModal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4213),_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3401),_app_store__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6160),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(683);const StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 512px;
    background: #f3f4f6;
    border-radius: 20px;
    .name {
      margin-top: 8px;
      margin-bottom: 64px;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      color: #27272a;
      .uid {
        font-weight: normal;
        color: #52525b;
      }
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      .info {
        display: flex;
        flex-direction: column;
        .label {
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-transform: uppercase;
          color: #52525b;
        }
        .txt {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #52525b;
          .gray {
            color: #78787c;
          }
        }
      }
      .btn {
        background: #1fe1f9;
        border: 1px solid #1fe1f9;
      }
    }
  }
  .danger {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
      margin-bottom: 16px;
    }
    .btn {
      background: #ef4444;
      border: 1px solid #ef4444;
    }
  }
  .btn {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 14px;
    background: #1fe1f9;
    border: 1px solid #1fe1f9;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
`,EditModalInfo={name:{label:"Username",title:"Change your username",intro:"Enter a new username."},email:{label:"Email",title:"Change your email",intro:"Enter a new email."}};function MyAccount(){const[passwordModal,setPasswordModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[editModal,setEditModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[removeConfirmVisible,setRemoveConfirmVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[uploadAvatar,{isSuccess:uploadSuccess}]=(0,_app_services_user__WEBPACK_IMPORTED_MODULE_2__.C0)(),loginUser=(0,_app_store__WEBPACK_IMPORTED_MODULE_7__.CG)((e=>{var s;return e.users.byId[(null===(s=e.authData.user)||void 0===s?void 0:s.uid)||0]}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{uploadSuccess&&react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.ZP.success("update avatar successfully!")}),[uploadSuccess]);const handleBasicEdit=e=>{const{edit:s}=e.currentTarget.dataset;setEditModal(s)},closeBasicEditModal=()=>{setEditModal(null)},togglePasswordModal=()=>{setPasswordModal((e=>!e))},toggleRemoveAccountModalVisible=()=>{setRemoveConfirmVisible((e=>!e))};if(!loginUser)return null;const{uid:uid,avatar:avatar,name:name,email:email}=loginUser;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__.Z,{url:avatar,name:name,uploadImage:uploadAvatar}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"name",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span",{className:"uid",children:["#",uid]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{className:"label",children:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span",{className:"txt",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span",{className:"gray",children:[" #",uid]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{"data-edit":"name",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{className:"label",children:"email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{className:"txt",children:email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{"data-edit":"email",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{className:"label",children:"password"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{className:"txt",children:"*********"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{onClick:togglePasswordModal,className:"btn",children:"Edit"})]})]}),1!=uid&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"danger",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4",{className:"head",children:"Account Removal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{className:"btn",onClick:toggleRemoveAccountModalVisible,children:"Delete Account"})]})]}),editModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__.Z,{valueKey:editModal,...EditModalInfo[editModal],value:eval(editModal),closeModal:closeBasicEditModal}),passwordModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_6__.Z,{closeModal:togglePasswordModal}),removeConfirmVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RemoveAccountConfirmModal__WEBPACK_IMPORTED_MODULE_5__.Z,{closeModal:toggleRemoveAccountModalVisible})]})}},8593:(e,s,i)=>{i.d(s,{Z:()=>u});var a=i(537),t=i(7889),l=i(7418),n=i(3022),c=i(2334),r=i(698),M=i(9885),d=i(874),o=i(683);const j=(0,t.ZP)(r.Z)`
  .input {
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`,u=e=>{let{label:s="Username",valueKey:i="name",value:t="",title:r="Change your username",intro:u="Enter a new username and your existing password.",closeModal:N}=e;const[x,D]=(0,a.useState)(t),[g,{isLoading:m,isSuccess:p}]=(0,c.g$)();return(0,a.useEffect)((()=>{p&&(l.ZP.success("update user info successfully"),N())}),[p]),(0,o.jsx)(d.Z,{id:"modal-modal",children:(0,o.jsx)(j,{title:r,description:u,buttons:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M.Z,{className:"cancel",onClick:N,children:"Cancel"}),(0,o.jsx)(M.Z,{onClick:()=>{g({[i]:x})},children:m?"Updating":"Done"})]}),children:(0,o.jsxs)("div",{className:"input",children:[(0,o.jsx)("label",{htmlFor:i,children:s}),(0,o.jsx)(n.Z,{name:i,value:x,onChange:e=>{D(e.target.value)}})]})})})}},4213:(e,s,i)=>{i.d(s,{Z:()=>M});var a=i(7418),t=i(874),l=i(698),n=i(9885),c=i(5312),r=i(683);const M=e=>{let{closeModal:s}=e;const[i,{isLoading:M}]=(0,c.O2)();return(0,r.jsx)(t.Z,{id:"modal-modal",children:(0,r.jsx)(l.Z,{title:"Remove Account",description:"Are you sure remove this account?",buttons:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{onClick:s,children:"Cancel"}),(0,r.jsx)(n.Z,{disabled:M,onClick:async()=>{try{await i()}catch(e){a.ZP.error("Remove Account Failed!")}},className:"danger",children:"Remove"})]})})})}},3401:(e,s,i)=>{i.d(s,{Z:()=>u});var a=i(537),t=i(7889),l=i(7418),n=i(3022),c=i(5312),r=i(698),M=i(9885),d=i(874),o=i(683);const j=(0,t.ZP)(r.Z)`
  .input {
    margin: 16px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`,u=e=>{let{closeModal:s}=e;const{data:i}=(0,c.I1)(),[t,r]=(0,a.useState)({current:"",newPassword:"",confirmPassword:""}),[u,{isLoading:N,isSuccess:x}]=(0,c.a3)(),D=e=>{const{type:s}=e.target.dataset;r((i=>({...i,[s]:e.target.value})))};(0,a.useEffect)((()=>{x&&(l.ZP.success("update password successfully"),s())}),[x]);const{current:g,newPassword:m,confirmPassword:p}=t,I=(null===i||void 0===i?void 0:i.password)&&!g||!m||!p||m!==p||N;return(0,o.jsx)(d.Z,{id:"modal-modal",children:(0,o.jsxs)(j,{title:"Change your password",description:"Enter current password and new password.",buttons:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M.Z,{className:"cancel",onClick:s,children:"Cancel"}),(0,o.jsx)(M.Z,{disabled:I,onClick:()=>{const{current:e,newPassword:s}=t;u({old_password:e,new_password:s})},children:N?"Updating":"Update"})]}),children:[(null===i||void 0===i?void 0:i.password)&&(0,o.jsxs)("div",{className:"input",children:[(0,o.jsx)("label",{htmlFor:"current",children:"Current Password"}),(0,o.jsx)(n.Z,{type:"password",id:"current",name:"current",value:g,"data-type":"current",onChange:D})]}),(0,o.jsxs)("div",{className:"input",children:[(0,o.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),(0,o.jsx)(n.Z,{type:"password",name:"newPassword",value:m,"data-type":"newPassword",onChange:D})]}),(0,o.jsxs)("div",{className:"input",children:[(0,o.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),(0,o.jsx)(n.Z,{onBlur:()=>{const{newPassword:e,confirmPassword:s}=t;e!==s&&l.ZP.error("Not same with new password")},type:"password",name:"confirmPassword",value:p,"data-type":"confirmPassword",onChange:D})]})]})})}},944:(e,s,i)=>{i.r(s),i.d(s,{default:()=>_e});var a=i(537),t=i(4084),l=i(5924),n=i(7477),c=i(3997),r=i(7889),M=i(7418),d=i(5809),o=i(5727),j=i(3022),u=i(8540),N=i(558),x=i(4563),D=i(5621),g=i(6160),m=i(8636),p=i(683);const I=r.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .logo {
    display: flex;
    gap: 16px;
    .preview {
      width: 96px;
      height: 96px;
    }
    .upload {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .tip {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #374151;
      }
      .btn {
        padding: 8px 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1fe1f9;
        background: #ecfeff;
        border: 1px solid #ecfeff;
        box-sizing: border-box;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 64px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
  > .setting {
    font-size: 14px;
    line-height: 20px;
    > .label {
      font-weight: 500;
    }
    > .tip {
      font-weight: 400;
      color: #667085;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    > form {
      margin-top: 16px;
      width: 512px;
    }
  }
`;function _(){const{loginUser:e,server:s}=(0,g.CG)((e=>({loginUser:e.authData.user,server:e.server}))),[i,t]=(0,a.useState)(!1),[l,n]=(0,a.useState)(s),{values:c,updateConfig:r}=(0,m.Z)("login"),[_]=(0,d.e2)(),[h,{isSuccess:T}]=(0,d.jd)(),w=e=>{const s=e.target.value,{type:i=""}=e.target.dataset;n((e=>({...e,[i]:s})))};if((0,a.useEffect)((()=>{T&&M.ZP.success("Update logo successfully!")}),[T]),(0,a.useEffect)((()=>{s&&n(s)}),[s]),(0,a.useEffect)((()=>{if(s&&l){const{name:e,description:i}=l,{name:a,description:n}=s;t(a!==e||n!==i)}}),[s,l]),!l||!c)return null;const{name:y,description:L,logo:E}=l,{who_can_sign_up:z,guest:O}=c,C=null===e||void 0===e?void 0:e.is_admin;return(0,p.jsxs)(I,{children:[(0,p.jsxs)("div",{className:"logo",children:[(0,p.jsx)("div",{className:"preview",children:(0,p.jsx)(o.Z,{disabled:!C,url:T?`${E}?t=${+new Date}`:E,name:y,uploadImage:h})}),C&&(0,p.jsx)("div",{className:"upload",children:(0,p.jsx)("div",{className:"tip",children:"Minimum size is 128x128, We recommend at least 512x512 for the server. Max size limited to 5M."})})]}),(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Server Name"}),(0,p.jsx)(j.Z,{disabled:!C,"data-type":"name",onChange:w,value:y,name:"name",id:"name",placeholder:"Server Name"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Server Description"}),(0,p.jsx)(N.Z,{disabled:!C,"data-type":"description",onChange:w,value:null!==L&&void 0!==L?L:"",rows:4,name:"name",id:"name",placeholder:"Tell the world a bit about this server"})]})]}),C&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"setting",children:[(0,p.jsx)("p",{className:"label",children:"Default Sign Up"}),(0,p.jsx)("p",{className:"tip",children:"Who can sign up this server."}),(0,p.jsx)(D.Z,{options:["Everyone","Invitation Link Only"],values:["EveryOne","InvitationOnly"],value:z,onChange:e=>{var s;s=e,r({...c,who_can_sign_up:s})}})]}),(0,p.jsxs)("div",{className:"setting",children:[(0,p.jsx)("p",{className:"label",children:"Guest Mode"}),(0,p.jsx)("p",{className:"tip",children:(0,p.jsx)("span",{className:"txt",children:"If enabled, visitors will see public channels on this server."})}),(0,p.jsx)(D.Z,{options:["Enabled","Disabled"],values:["true","false"],value:String(O),onChange:e=>{(e=>{const s="true"===e;r({...c,guest:s})})(e)}})]})]}),i&&(0,p.jsx)(x.Z,{saveHandler:()=>{const{name:e,description:s}=l;_({name:e,description:s})},resetHandler:()=>{n(s)}})]})}const h=r.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &.inputs {
          flex-direction: column;
          gap: 8px;
        }
        .title {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .txt {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            .icon {
              cursor: pointer;
            }
          }
          .desc {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #667085;
          }
        }
      }
    }
  }
  .tip {
    display: flex;
    gap: 8px;
    align-items: center;
    .link {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #06b6d4;
    }
  }
`;var T,w=i(9975),y=i(7829),L=i(9195);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},E.apply(this,arguments)}const z=(e,s)=>{let{title:i,titleId:t,...l}=e;return a.createElement("svg",E({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},l),i?a.createElement("title",{id:t},i):null,T||(T=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.4 7.99961C14.4 9.69699 13.7257 11.3249 12.5255 12.5251C11.3252 13.7253 9.69736 14.3996 7.99998 14.3996C6.30259 14.3996 4.67472 13.7253 3.47449 12.5251C2.27426 11.3249 1.59998 9.69699 1.59998 7.99961C1.59998 6.30222 2.27426 4.67436 3.47449 3.47413C4.67472 2.27389 6.30259 1.59961 7.99998 1.59961C9.69736 1.59961 11.3252 2.27389 12.5255 3.47413C13.7257 4.67436 14.4 6.30222 14.4 7.99961ZM7.99998 5.59961C7.85941 5.59947 7.7213 5.63637 7.59953 5.70659C7.47777 5.77682 7.37666 5.87788 7.30638 5.99961C7.25563 6.09391 7.18646 6.17706 7.10298 6.24414C7.0195 6.31121 6.92341 6.36084 6.82039 6.39009C6.71737 6.41934 6.60953 6.4276 6.50326 6.4144C6.39699 6.40119 6.29445 6.36679 6.20172 6.31322C6.109 6.25965 6.02797 6.18801 5.96344 6.10254C5.89891 6.01708 5.8522 5.91953 5.82608 5.81568C5.79995 5.71182 5.79494 5.60378 5.81135 5.49796C5.82775 5.39213 5.86523 5.29068 5.92158 5.19961C6.18575 4.7421 6.5935 4.38454 7.0816 4.18238C7.56969 3.98022 8.11085 3.94476 8.62115 4.0815C9.13145 4.21823 9.58237 4.51952 9.90399 4.93865C10.2256 5.35777 10.4 5.87131 10.4 6.39961C10.4001 6.8961 10.2463 7.38043 9.95978 7.78589C9.67324 8.19135 9.26803 8.498 8.79998 8.66361V8.79961C8.79998 9.01178 8.71569 9.21527 8.56566 9.36529C8.41563 9.51532 8.21215 9.59961 7.99998 9.59961C7.7878 9.59961 7.58432 9.51532 7.43429 9.36529C7.28426 9.21527 7.19998 9.01178 7.19998 8.79961V7.99961C7.19998 7.78744 7.28426 7.58395 7.43429 7.43392C7.58432 7.28389 7.7878 7.19961 7.99998 7.19961C8.21215 7.19961 8.41563 7.11532 8.56566 6.96529C8.71569 6.81527 8.79998 6.61178 8.79998 6.39961C8.79998 6.18744 8.71569 5.98395 8.56566 5.83392C8.41563 5.68389 8.21215 5.59961 7.99998 5.59961ZM7.99998 11.9996C8.21215 11.9996 8.41563 11.9153 8.56566 11.7653C8.71569 11.6153 8.79998 11.4118 8.79998 11.1996C8.79998 10.9874 8.71569 10.784 8.56566 10.6339C8.41563 10.4839 8.21215 10.3996 7.99998 10.3996C7.7878 10.3996 7.58432 10.4839 7.43429 10.6339C7.28426 10.784 7.19998 10.9874 7.19998 11.1996C7.19998 11.4118 7.28426 11.6153 7.43429 11.7653C7.58432 11.9153 7.7878 11.9996 7.99998 11.9996Z",fill:"#9CA3AF"})))},O=(0,a.forwardRef)(z),C=r.ZP.div`
  padding: 8px 12px;
  background: #101828;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  a {
    color: #55c7ec;
  }
`;function A(e){let{link:s="#"}=e;return(0,p.jsx)(y.ZP,{delay:[0,500],interactive:!0,arrow:L.ki,placement:"bottom",content:(0,p.jsxs)(C,{children:["Need more detail? See our"," ",(0,p.jsx)("a",{target:"doc",href:s,children:"doc"}),"."]}),children:(0,p.jsx)(O,{className:"icon"})})}var v=i(8697),f=i(8055),b=i(3211);const k=r.ZP.div`
  user-select: none;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  .txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    min-width: 76px;
  }
  > .icon {
    width: 20px !important;
    height: 20px !important;
  }
`,U=e=>{var s;let{options:i=[],updateSelect:t=null,current:l=null}=e;const[n,c]=(0,a.useState)(!1),[r,M]=(0,a.useState)(null),d=()=>{c((e=>!e))},o=e=>{M(e),d(),t&&t(e)};return(0,p.jsx)(y.ZP,{visible:n,appendTo:document.body,placement:"bottom",interactive:!0,content:(0,p.jsx)(b.Z,{children:i.map((e=>{let{title:s,value:i,selected:a,underline:t}=e;return(0,p.jsxs)("li",{onClick:a?void 0:o.bind(null,{title:s,value:i}),className:"item sb "+(t?"underline":""),"data-disabled":a,children:[s,a&&(0,p.jsx)(v.Z,{className:"icon"})]},i)}))}),children:(0,p.jsxs)(k,{onClick:d,children:[(0,p.jsx)("span",{className:"txt",children:(null===(s=null!==l?l:r)||void 0===s?void 0:s.title)||"Select"}),(0,p.jsx)(f.Z,{className:"icon"})]})})};var S=i(9885);const P=JSON.parse('[{"title":"Google","value":"accounts.google.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1OTA1XzI0Njk1KSI+CjxwYXRoIGQ9Ik0yMy43NjYgMTIuMjc2M0MyMy43NjYgMTEuNDYwNSAyMy42OTk5IDEwLjY0MDQgMjMuNTU4OCA5LjgzNzg5SDEyLjI0VjE0LjQ1ODlIMTguNzIxN0MxOC40NTI4IDE1Ljk0OTIgMTcuNTg4NSAxNy4yNjc2IDE2LjMyMyAxOC4xMDU0VjIxLjEwMzdIMjAuMTlDMjIuNDYwOCAxOS4wMTM3IDIzLjc2NiAxNS45MjcyIDIzLjc2NiAxMi4yNzYzWiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTIuMjQwMSAyNC4wMDEzQzE1LjQ3NjYgMjQuMDAxMyAxOC4yMDU5IDIyLjkzODcgMjAuMTk0NSAyMS4xMDQ0TDE2LjMyNzYgMTguMTA2QzE1LjI1MTcgMTguODM4IDEzLjg2MjcgMTkuMjUyNSAxMi4yNDQ1IDE5LjI1MjVDOS4xMTM4OCAxOS4yNTI1IDYuNDU5NDYgMTcuMTQwNCA1LjUwNzA1IDE0LjMwMDhIMS41MTY2VjE3LjM5MTdDMy41NTM3MSAyMS40NDM5IDcuNzAyOSAyNC4wMDEzIDEyLjI0MDEgMjQuMDAxM1oiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTUuNTAyNTMgMTQuMzAwN0M0Ljk5OTg3IDEyLjgxMDMgNC45OTk4NyAxMS4xOTY1IDUuNTAyNTMgOS43MDYxOFY2LjYxNTIzSDEuNTE2NDlDLTAuMTg1NTEgMTAuMDA2IC0wLjE4NTUxIDE0LjAwMDkgMS41MTY0OSAxNy4zOTE2TDUuNTAyNTMgMTQuMzAwN1oiIGZpbGw9IiNGQkJDMDQiLz4KPHBhdGggZD0iTTEyLjI0MDEgNC43NDk2NkMxMy45NTA5IDQuNzIzMiAxNS42MDQ0IDUuMzY2OTcgMTYuODQzNCA2LjU0ODY3TDIwLjI2OTUgMy4xMjI2MkMxOC4xMDAxIDEuMDg1NSAxNS4yMjA4IC0wLjAzNDQ2NiAxMi4yNDAxIDAuMDAwODA4NjY2QzcuNzAyOSAwLjAwMDgwODY2NiAzLjU1MzcxIDIuNTU4MjIgMS41MTY2IDYuNjE0ODFMNS41MDI2NCA5LjcwNTc1QzYuNDUwNjQgNi44NjE3MyA5LjEwOTQ3IDQuNzQ5NjYgMTIuMjQwMSA0Ljc0OTY2WiIgZmlsbD0iI0VBNDMzNSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1OTA1XzI0Njk1Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},{"title":"Facebook","value":"www.facebook.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAxNkMzMiA3LjE2NDEzIDI0LjgzNTggMCAxNiAwQzcuMTY0MTMgMCAwIDcuMTY0MTMgMCAxNkMwIDIzLjk4NTMgNS44NTAxNiAzMC42MDQ5IDEzLjUwMDIgMzEuODA2N1YyMC42MjYxSDkuNDM2NjRWMTZIMTMuNTAwMlYxMi40NzQyQzEzLjUwMDIgOC40NjQ1NiAxNS44ODk4IDYuMjQ4MjkgMTkuNTQzOCA2LjI0ODI5QzIxLjI5NDMgNi4yNDgyOSAyMy4xMjU4IDYuNTYxMDIgMjMuMTI1OCA2LjU2MTAyVjEwLjQ5ODZIMjEuMTA3NUMxOS4xMjA4IDEwLjQ5ODYgMTguNDk5OCAxMS43MzE3IDE4LjQ5OTggMTIuOTk4NFYxNS45OTk5SDIyLjkzNjdMMjIuMjI4IDIwLjYyNkgxOC40OTk2VjMxLjgwNjRDMjYuMTQ5OCAzMC42MDcxIDMxLjk5OTggMjMuOTg3NiAzMS45OTk4IDE1Ljk5OTlMMzIgMTZaIiBmaWxsPSIjMTk3N0YzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuMjI4IDIwLjYyNkwyMi45MzY5IDE1Ljk5OTlIMTguNDk5OVYxMi45OTg0QzE4LjQ5OTkgMTEuNzMzOSAxOS4xMTg2IDEwLjQ5ODcgMjEuMTA3NyAxMC40OTg3SDIzLjEyNlY2LjU2MTA1QzIzLjEyNiA2LjU2MTA1IDIxLjI5NDUgNi4yNDgyOSAxOS41NDM5IDYuMjQ4MjlDMTUuODg5OSA2LjI0ODI5IDEzLjUwMDQgOC40NjIzOCAxMy41MDA0IDEyLjQ3NDJWMTZIOS40MzY3N1YyMC42MjYxSDEzLjUwMDRWMzEuODA2N0MxNC4zMTQ5IDMxLjkzNDcgMTUuMTQ5NiAzMiAxNi4wMDAxIDMyQzE2Ljg1MDcgMzIgMTcuNjg1NCAzMS45MzI1IDE4LjQ5OTkgMzEuODA2N1YyMC42MjYxSDIyLjIyODJMMjIuMjI4IDIwLjYyNloiIGZpbGw9IiNGRUZFRkUiLz4KPC9zdmc+Cg=="},{"title":"Gitlab","value":"www.gitlab.com","selected":false,"icon":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMzgwIj4KPGRlZnM+CiAgICA8c3R5bGU+LmNscy0xe2ZpbGw6I2UyNDMyOTt9LmNscy0ye2ZpbGw6I2ZjNmQyNjt9LmNscy0ze2ZpbGw6I2ZjYTMyNjt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJMT0dPIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODIuODMsMTcwLjczbC0uMjctLjY5LTI2LjE0LTY4LjIyYTYuODEsNi44MSwwLDAsMC0yLjY5LTMuMjQsNyw3LDAsMCwwLTgsLjQzLDcsNywwLDAsMC0yLjMyLDMuNTJsLTE3LjY1LDU0SDE1NC4yOWwtMTcuNjUtNTRBNi44Niw2Ljg2LDAsMCwwLDEzNC4zMiw5OWE3LDcsMCwwLDAtOC0uNDMsNi44Nyw2Ljg3LDAsMCwwLTIuNjksMy4yNEw5Ny40NCwxNzBsLS4yNi42OWE0OC41NCw0OC41NCwwLDAsMCwxNi4xLDU2LjFsLjA5LjA3LjI0LjE3LDM5LjgyLDI5LjgyLDE5LjcsMTQuOTEsMTIsOS4wNmE4LjA3LDguMDcsMCwwLDAsOS43NiwwbDEyLTkuMDYsMTkuNy0xNC45MSw0MC4wNi0zMCwuMS0uMDhBNDguNTYsNDguNTYsMCwwLDAsMjgyLjgzLDE3MC43M1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yODIuODMsMTcwLjczbC0uMjctLjY5YTg4LjMsODguMywwLDAsMC0zNS4xNSwxNS44TDE5MCwyMjkuMjVjMTkuNTUsMTQuNzksMzYuNTcsMjcuNjQsMzYuNTcsMjcuNjRsNDAuMDYtMzAsLjEtLjA4QTQ4LjU2LDQ4LjU2LDAsMCwwLDI4Mi44MywxNzAuNzNaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTUzLjQzLDI1Ni44OWwxOS43LDE0LjkxLDEyLDkuMDZhOC4wNyw4LjA3LDAsMCwwLDkuNzYsMGwxMi05LjA2LDE5LjctMTQuOTFTMjA5LjU1LDI0NCwxOTAsMjI5LjI1QzE3MC40NSwyNDQsMTUzLjQzLDI1Ni44OSwxNTMuNDMsMjU2Ljg5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzMi41OCwxODUuODRBODguMTksODguMTksMCwwLDAsOTcuNDQsMTcwbC0uMjYuNjlhNDguNTQsNDguNTQsMCwwLDAsMTYuMSw1Ni4xbC4wOS4wNy4yNC4xNywzOS44MiwyOS44MnMxNy0xMi44NSwzNi41Ny0yNy42NFoiLz48L2c+PC9zdmc+"},{"title":"Paypal","value":"www.paypal.com","selected":false,"icon":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjMwMnB4IiB2aWV3Qm94PSIwIDAgMjU2IDMwMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IEMyMDMuMjM0MDc3LDcuNjI0Nzk2NTEgMTc4LjA0NTYxMiwwLjgxNTc1MzMzOCAxNDUuODIzMzU1LDAuODE1NzUzMzM4IEw1Mi4zMDMwNjE5LDAuODE1NzUzMzM4IEM0NS43MTA0NDMxLDAuODE1NzUzMzM4IDQwLjEwODM4MTksNS42MTAzODUyIDM5LjA3NjIwNDIsMTIuMTExNDM5OSBMMC4xMzY0NjgzMDIsMjU5LjA3NjYwMSBDLTAuNjM3NjY0OTY4LDI2My45NDYxNDkgMy4xMzMxMTMyMiwyNjguMzU3ODc2IDguMDY5MjUzMzEsMjY4LjM1Nzg3NiBMNjUuODA0NjEyLDI2OC4zNTc4NzYgTDgwLjMwNTA0MzgsMTc2LjM4NTg0OSBMNzkuODU1NTQ3MSwxNzkuMjY1OTU4IEM4MC44ODc3MjQ4LDE3Mi43NjQ5MDMgODYuNDQ4MTY1OSwxNjcuOTcwMjcyIDkzLjAzMjQ2MDcsMTY3Ljk3MDI3MiBMMTIwLjQ2ODQxLDE2Ny45NzAyNzIgQzE3NC4zNjYzOTgsMTY3Ljk3MDI3MiAyMTYuNTY5MTQ3LDE0Ni4wNzgxMTYgMjI4Ljg5NzAxMiw4Mi43NDkwMTk3IEMyMjkuMjYzMjY4LDgwLjg3NjExNjcgMjI5LjU3OTU4MSw3OS4wNTMxNTc3IDIyOS44NTQyNzMsNzcuMjcxODE4OCBDMjI4LjI5NzY4Myw3Ni40NDc3NDE0IDIyOC4yOTc2ODMsNzYuNDQ3NzQxNCAyMjkuODU0MjczLDc3LjI3MTgxODggQzIzMy41MjUxNjMsNTMuODY0NjkyNCAyMjkuODI5MzAxLDM3LjkzMjUzMDIgMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IiBmaWxsPSIjMjczNDZBIj48L3BhdGg+CgkJPHBhdGggZD0iTTEwMi4zOTY5NzYsNjguODM5NTkyOSBDMTAzLjkzNjkxOSw2OC4xMDcwNzk3IDEwNS42NTE2NjUsNjcuNjk5MjAzIDEwNy40NDk2NTIsNjcuNjk5MjAzIEwxODAuNzY3NTY1LDY3LjY5OTIwMyBDMTg5LjQ0OTUxMSw2Ny42OTkyMDMgMTk3LjU0ODc3Niw2OC4yNjUyMzYgMjA0Ljk0ODgyNCw2OS40NTU1Njk5IEMyMDcuMDcxNDQ4LDY5Ljc5Njg1NDUgMjA5LjEyNzQ3OSw3MC4xODgwODMxIDIxMS4xMjUyNDIsNzAuNjM3NTc5OSBDMjEzLjEyMzAwNiw3MS4wNzg3NTI2IDIxNS4wNjI1MDEsNzEuNTc4MTkzNCAyMTYuOTQzNzI4LDcyLjEyNzU3ODMgQzIxNy44ODQzNDEsNzIuNDAyMjcwOCAyMTguODA4MzA3LDcyLjY4NTI4NzIgMjE5LjcxNTYyNCw3Mi45ODQ5NTE3IEMyMjMuMzUzMjE4LDc0LjIwMDI1NzcgMjI2Ljc0MTA5Miw3NS42MTUzNCAyMjkuODU0MjczLDc3LjI3MTgxODggQzIzMy41MjUxNjMsNTMuODU2MzY4MyAyMjkuODI5MzAxLDM3LjkzMjUzMDIgMjE3LjE2ODQ3NiwyMy41MDcwMTQ2IEMyMDMuMjI1NzUzLDcuNjI0Nzk2NTEgMTc4LjA0NTYxMiwwLjgxNTc1MzMzOCAxNDUuODIzMzU1LDAuODE1NzUzMzM4IEw1Mi4yOTQ3Mzc5LDAuODE1NzUzMzM4IEM0NS43MTA0NDMxLDAuODE1NzUzMzM4IDQwLjEwODM4MTksNS42MTAzODUyIDM5LjA3NjIwNDIsMTIuMTExNDM5OSBMMC4xMzY0NjgzMDIsMjU5LjA2ODI3NyBDLTAuNjM3NjY0OTY4LDI2My45NDYxNDkgMy4xMzMxMTMyMiwyNjguMzQ5NTUyIDguMDYwOTI5MywyNjguMzQ5NTUyIEw2NS44MDQ2MTIsMjY4LjM0OTU1MiBMOTUuODg3NTk3NCw3Ny41Nzk4MDczIEM5Ni41MDM1NzQ0LDczLjY2NzUyMDggOTkuMDE3NDI2NSw3MC40NjI3NzU2IDEwMi4zOTY5NzYsNjguODM5NTkyOSBaIiBmaWxsPSIjMjczNDZBIj48L3BhdGg+CgkJPHBhdGggZD0iTTIyOC44OTcwMTIsODIuNzQ5MDE5NyBDMjE2LjU2OTE0NywxNDYuMDY5NzkyIDE3NC4zNjYzOTgsMTY3Ljk3MDI3MiAxMjAuNDY4NDEsMTY3Ljk3MDI3MiBMOTMuMDI0MTM2NywxNjcuOTcwMjcyIEM4Ni40Mzk4NDE5LDE2Ny45NzAyNzIgODAuODc5NDAwNywxNzIuNzY0OTAzIDc5Ljg1NTU0NzEsMTc5LjI2NTk1OCBMNjEuODE3NDA5NSwyOTMuNjIxMjU4IEM2MS4xNDMxNjQ0LDI5Ny44ODMxNTMgNjQuNDM5NDczOCwzMDEuNzQ1NDk1IDY4Ljc1MTMxMjksMzAxLjc0NTQ5NSBMMTE3LjQyMTgyMSwzMDEuNzQ1NDk1IEMxMjMuMTgyMDM4LDMwMS43NDU0OTUgMTI4LjA4NDg4MiwyOTcuNTUwMTkyIDEyOC45ODM4NzYsMjkxLjg2NDg5MSBMMTI5LjQ1ODM0NCwyODkuMzg0MzM1IEwxMzguNjMxNDA3LDIzMS4yNDk0MjMgTDEzOS4yMjI0MTIsMjI4LjAzNjM1NCBDMTQwLjEyMTQwNiwyMjIuMzUxMDUzIDE0NS4wMjQyNSwyMTguMTU1NzUgMTUwLjc4NDQ2NywyMTguMTU1NzUgTDE1OC4wNjc5NzksMjE4LjE1NTc1IEMyMDUuMjE1MTkzLDIxOC4xNTU3NSAyNDIuMTMyMTkzLDE5OS4wMDIxOTQgMjUyLjkyMDExNSwxNDMuNjA1ODg0IEMyNTcuNDIzNDA2LDEyMC40NTY4MDIgMjU1LjA5MjY4MywxMDEuMTI4NDQyIDI0My4xODEwMTksODcuNTUxOTc1NiBDMjM5LjU2ODM5Nyw4My40Mzk5MTI5IDIzNS4wODE3NTQsODAuMDQzNzE1MyAyMjkuODU0MjczLDc3LjI3MTgxODggQzIyOS41NzEyNTcsNzkuMDYxNDgxNyAyMjkuMjYzMjY4LDgwLjg3NjExNjcgMjI4Ljg5NzAxMiw4Mi43NDkwMTk3IEwyMjguODk3MDEyLDgyLjc0OTAxOTcgWiIgZmlsbD0iIzI3OTBDMyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0yMTYuOTUyMDUyLDcyLjEyNzU3ODMgQzIxNS4wNzA4MjUsNzEuNTc4MTkzNCAyMTMuMTMxMzMsNzEuMDc4NzUyNiAyMTEuMTMzNTY2LDcwLjYzNzU3OTkgQzIwOS4xMzU4MDMsNzAuMTk2NDA3MSAyMDcuMDcxNDQ4LDY5LjgwNTE3ODUgMjA0Ljk1NzE0OCw2OS40NjM4OTM5IEMxOTcuNTQ4Nzc2LDY4LjI2NTIzNiAxODkuNDU3ODM1LDY3LjY5OTIwMyAxODAuNzY3NTY1LDY3LjY5OTIwMyBMMTA3LjQ1Nzk3Niw2Ny42OTkyMDMgQzEwNS42NTE2NjUsNjcuNjk5MjAzIDEwMy45MzY5MTksNjguMTA3MDc5NyAxMDIuNDA1Myw2OC44NDc5MTY5IEM5OS4wMTc0MjY1LDcwLjQ3MTA5OTYgOTYuNTExODk4NCw3My42Njc1MjA4IDk1Ljg5NTkyMTQsNzcuNTg4MTMxMyBMODAuMzEzMzY3OCwxNzYuMzg1ODQ5IEw3OS44NjM4NzExLDE3OS4yNjU5NTggQzgwLjg4NzcyNDgsMTcyLjc2NDkwMyA4Ni40NDgxNjU5LDE2Ny45NzAyNzIgOTMuMDMyNDYwNywxNjcuOTcwMjcyIEwxMjAuNDc2NzM0LDE2Ny45NzAyNzIgQzE3NC4zNzQ3MjIsMTY3Ljk3MDI3MiAyMTYuNTc3NDcxLDE0Ni4wNzgxMTYgMjI4LjkwNTMzNiw4Mi43NDkwMTk3IEMyMjkuMjcxNTkyLDgwLjg3NjExNjcgMjI5LjU3OTU4MSw3OS4wNjE0ODE3IDIyOS44NjI1OTcsNzcuMjcxODE4OCBDMjI2Ljc0MTA5Miw3NS42MjM2NjQgMjIzLjM2MTU0Miw3NC4yMDAyNTc3IDIxOS43MjM5NDgsNzIuOTkzMjc1NyBDMjE4LjgxNjYzMSw3Mi42OTM2MTEyIDIxNy44OTI2NjUsNzIuNDAyMjcwOCAyMTYuOTUyMDUyLDcyLjEyNzU3ODMiIGZpbGw9IiMxRjI2NEYiPjwvcGF0aD4KCTwvZz4KPC9zdmc+"},{"title":"SolidWeb","value":"solidweb.org","selected":false,"icon":"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjM1MiIgaGVpZ2h0PSIzMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik04Ny45NzI5NiAyODIuMzUyN0wyNy4yNDEzMyAxNzcuMDIyMDdjLTUuNjIwNDEtOS43NTc2NS01LjYyMDQxLTIxLjc3OTA4IDAtMzEuNTM2NzRMODcuOTcyOTYgNDAuMjMyOGM1LjY0NjQzLTkuNzgzNjcgMTYuMDgwNjEtMTUuNzk0MzkgMjcuMzIxNDMtMTUuNzk0MzloMTIxLjM4NTJjMTEuMjY2ODQgMCAyMS43MjcwNCA2LjAxMDcyIDI3LjMyMTQzIDE1Ljc5NDRsNjAuNzU3NjUgMTA1LjMwNDU4YzUuNjIwNDEgOS43NTc2NiA1LjYyMDQxIDIxLjc3OTA5IDAgMzEuNTM2NzRsLTYwLjczMTYzIDEwNS4zMzA2MWMtNS42NDY0MyA5Ljc4MzY3LTE2LjA4MDYxIDE1Ljc5NDM5LTI3LjMyMTQzIDE1Ljc5NDM5SDExNS4zNzI0NWMtMTEuMzE4ODgtLjA1MjA0LTIxLjcyNzA0LTYuMDg4NzgtMjcuMzk5NS0xNS44NDY0M3oiIGZpbGw9IiNGRkYiLz4KICAgIDxwYXRoIGQ9Ik05My4xNTEwMiAyNzUuMTk3MDhsLTU3LjExNDgtOTkuMDU5N2MtNS4zMDgxNi05LjE4NTItNS4zMDgxNi0yMC41MDQwOCAwLTI5LjY2MzI2bDU3LjExNDgtOTkuMDg1NzJjNS4zMzQxOC05LjIxMTIyIDE1LjE0Mzg4LTE0Ljg1NzY1IDI1LjczNDE4LTE0Ljg1NzY1aDExNC4yMjk2YzEwLjU5MDMgMCAyMC40MjYwMiA1LjY0NjQzIDI1LjczNDE4IDE0Ljg1NzY1bDU3LjE2Njg0IDk5LjAzMzY4YzUuMzA4MTYgOS4xODUyIDUuMzA4MTYgMjAuNTA0MDggMCAyOS42NjMyNkwyNTguODc1IDI3NS4yMjMxYy01LjMzNDE4IDkuMjExMjItMTUuMTQzODggMTQuODU3NjUtMjUuNzM0MTggMTQuODU3NjVIMTE4LjkzNzI0Yy0xMC42NDIzNCAwLTIwLjQ1MjA0LTUuNjcyNDUtMjUuNzg2MjItMTQuODgzNjd6IiBmaWxsPSIjN0M0REZGIi8+CiAgICA8cGF0aCBkPSJNMTE4LjQ2ODg4IDE0Mi4yMzI4aDExNy41MzQxOGMxLjQ4MzE2IDAgMi42NTQwOC0xLjE5Njk1IDIuNjU0MDgtMi42NTQwOXYtMjIuMDM5MjhjMC0xNC42NDk1LTExLjg5MTMyLTI2LjU0MDg1LTI2LjU0MDgxLTI2LjU0MDg1aC03MC41NjczNWMtMjAuNTMwMS0uMDI2LTM3LjE1NzIyIDE2LjYwMTA1LTM3LjE1NzIyIDM3LjEzMTE1LS4wMjU5NCA3LjgzMjE0IDYuMjcxIDE0LjEwMzA2IDE0LjA3NzEyIDE0LjEwMzA2ek0xMjkuOTk1OTIgMjM5LjYwMTE2SDIwMC4yMjVjMjEuMjA2NjMgMCAzOC40MzIxNC0xNy4yMjU1MSAzOC40MzIxNC0zOC40MzIxNCAwLTcuMDc3NTUtNS43MjQ0OS0xMi44MjgwNi0xMi44MjgwNi0xMi44MjgwNkgxMDYuOTQxODRjLTEuNDU3MTUgMC0yLjU1MDA1IDEuMTcwOTEtMi41NTAwNSAyLjU1djIzLjA1NDA4Yy0uMDI1OTcgMTQuMTgxMTIgMTEuNDc1MDUgMjUuNjU2MTIgMjUuNjA0MTMgMjUuNjU2MTJ6IiBmaWxsPSIjRjdGN0Y3Ii8+CiAgICA8cGF0aCBkPSJNMTA5LjU5NTkyIDEzOS4zMTg1bDg3LjY2Mjc1IDg3LjY2Mjc2YzUuODAyNTUgNS44MDI1NSAxNS4xOTU5MiA1LjgwMjU1IDIwLjk5ODQ3IDBsMTUuMTk1OTItMTUuMTk1OTJjNS44MDI1NS01LjgwMjU1IDUuODAyNTUtMTUuMTk1OTEgMC0yMC45OTg0N2wtODcuNjM2NzMtODcuNjYyNzVjLTUuODAyNTUtNS44MDI1NS0xNS4xOTU5Mi01LjgwMjU1LTIwLjk5ODQ3IDBsLTE1LjE5NTkyIDE1LjE5NTkyYy01Ljg1NDYgNS44MDI1NS01Ljg1NDYgMTUuMjIxOTQtLjAyNjAyIDIwLjk5ODQ3eiIgZmlsbD0iI0Y3RjdGNyIvPgogICAgPHBhdGggZmlsbD0iIzQ0NCIgb3BhY2l0eT0iLjMiIGQ9Ik0xOTguNjg5OCAyMjguNDY0NDNsLTUxLjQ5NDQtNDAuMTIzNDdoMTEuMzk2OTV6TTE0NC4zNTkxOCAxMDEuNjY2OThsNDAuNTY1ODIgNDAuNTY1ODFoMTMuNzY0OHoiLz4KICA8L2c+Cjwvc3ZnPg==","underline":true},{"title":"Custom","value":"","selected":false}]'),Z=r.ZP.div`
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .issuers {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .issuer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .remove {
          cursor: pointer;
        }
        .data {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: space-between;
          > .icon {
            width: 32px;
            height: 32px;
          }
          > .url {
            width: 280px;
          }
        }
      }
      .right {
        width: 56px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .add {
    cursor: pointer;
  }
`;var Y;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Q.apply(this,arguments)}const B=(e,s)=>{let{title:i,titleId:t,...l}=e;return a.createElement("svg",Q({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},l),i?a.createElement("title",{id:t},i):null,Y||(Y=a.createElement("path",{d:"M8.00004 1.33301C4.32004 1.33301 1.33337 4.31967 1.33337 7.99967C1.33337 11.6797 4.32004 14.6663 8.00004 14.6663C11.68 14.6663 14.6667 11.6797 14.6667 7.99967C14.6667 4.31967 11.68 1.33301 8.00004 1.33301ZM11.3334 8.66634H4.66671V7.33301H11.3334V8.66634Z",fill:"#D0D5DD"})))},R=(0,a.forwardRef)(B),W=e=>{let{issuers:s=[],onChange:i}=e;const[t,l]=(0,a.useState)(null),[n,c]=(0,a.useState)(""),r=!n&&!(null!==t&&void 0!==t&&t.value)||!(null!==t&&void 0!==t&&t.title)||s.some((e=>e.domain===n));return(0,p.jsx)(Z,{children:(0,p.jsxs)("ul",{className:"issuers",children:[s.map((e=>{let{enable:a,favicon:t,domain:l}=e;return(0,p.jsxs)("li",{className:"issuer",children:[(0,p.jsxs)("div",{className:"left",children:[(0,p.jsx)(R,{className:"remove",onClick:()=>{i(s.filter((e=>e.domain!==l)))}}),(0,p.jsxs)("div",{className:"data",children:[Boolean(t)&&(0,p.jsx)("img",{src:t,alt:"logo",className:"icon"}),(0,p.jsx)(j.Z,{readOnly:!0,value:l,prefix:"https://",placeholder:"Issuer Domain",className:"url"})]})]}),(0,p.jsx)("div",{className:"right",children:(0,p.jsx)(w.Z,{"data-checked":a,onClick:()=>{i(s.map((e=>({...e,enable:e.domain===l?!a:e.enable}))))}})})]},l)})),(0,p.jsxs)("li",{className:"issuer add",children:[(0,p.jsxs)("div",{className:"left",children:[(0,p.jsx)(U,{options:P.map((e=>({...e,selected:s.some((s=>s.domain===e.value))}))),current:t,updateSelect:l}),(0,p.jsx)("div",{className:"data",children:(0,p.jsx)(j.Z,{onChange:e=>{c(e.target.value)},readOnly:!(null===t||void 0===t||!t.value),value:(null===t||void 0===t?void 0:t.value)||n,prefix:"https://",placeholder:"domain.com",className:"url"})})]}),(0,p.jsx)("div",{className:"right",children:(0,p.jsx)(S.Z,{disabled:r,onClick:()=>{const e=P.find((e=>e.value===(null===t||void 0===t?void 0:t.value)));if(!e)return;const{icon:a,value:r}=e;i(s.concat({enable:!0,favicon:a||"",domain:r||n})),l(null),c("")},children:"Add"})})]})]})})};var G=i(5089),K=i(2712);function F(){const{changed:e,clientId:s,updateClientId:i,updateClientIdToServer:a}=(0,G.Z)(),{config:t,changed:l,updateGithubAuthConfigToServer:n,updateGithubAuthConfig:c}=(0,K.Z)(),{values:r,updateConfig:d,setValues:o,reset:N,changed:D}=(0,m.Z)("login"),g=e=>{const{key:s}=e.target.dataset;s&&c({[s]:e.target.value})},I=e=>{o((s=>s?{...s,...e}:s))};if(!r)return null;const{google:_,magic_link:T,github:y,metamask:L,password:E,oidc:z=[]}=r,O=e||D||l;return(0,p.jsxs)(h,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("div",{className:"txt",children:(0,p.jsx)(u.Z,{children:"Password"})}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with password."})]}),(0,p.jsx)(w.Z,{onClick:I.bind(null,{password:!E}),"data-checked":E})]})}),(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("div",{className:"txt",children:(0,p.jsx)(u.Z,{children:"Magic Link"})}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Magic Link."})]}),(0,p.jsx)(w.Z,{onClick:I.bind(null,{magic_link:!T}),"data-checked":T})]})}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Google"}),(0,p.jsx)(A,{link:"https://doc.voce.chat/en-us/login-google.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Google."})]}),(0,p.jsx)(w.Z,{onClick:I.bind(null,{google:!_}),"data-checked":_})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)(j.Z,{disabled:!_,onChange:e=>{i(e.target.value)},placeholder:"Client ID",value:s})})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Github"}),(0,p.jsx)(A,{link:"https://doc.voce.chat/en-us/login-github.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Github."})]}),(0,p.jsx)(w.Z,{onClick:I.bind(null,{github:!y}),"data-checked":y})]}),(0,p.jsxs)("div",{className:"row inputs",children:[(0,p.jsx)(j.Z,{disabled:!y,"data-key":"client_id",onChange:g,placeholder:"Github Client ID",value:null===t||void 0===t?void 0:t.client_id}),(0,p.jsx)(j.Z,{disabled:!y,"data-key":"client_secret",onChange:g,placeholder:"Github Client Secret",value:null===t||void 0===t?void 0:t.client_secret})]})]}),(0,p.jsx)("div",{className:"input",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{children:"Metamask"}),(0,p.jsx)(A,{link:"https://doc.voce.chat/en-us/login-metamask.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Allows members login with Metamask."})]}),(0,p.jsx)(w.Z,{onClick:I.bind(null,{metamask:!L}),"data-checked":L})]})}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"title",children:[(0,p.jsxs)("div",{className:"txt",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"OIDC"}),(0,p.jsx)(A,{link:"https://doc.voce.chat/en-us/login-webid.html"})]}),(0,p.jsx)("span",{className:"desc",children:"Save my login details for next time."})]})}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)(W,{issuers:z,onChange:e=>{o((s=>s?{...s,oidc:e}:s))}})})]})]}),O&&(0,p.jsx)(x.Z,{saveHandler:async()=>{const{google:s}=r;D&&d(r),s&&e&&(await a(),D||M.ZP.success("Configuration Updated!")),y&&l&&(await n(),D||M.ZP.success("Configuration Updated!"))},resetHandler:N})]})}function V(){const{values:e,toggleEnable:s,updateConfig:i,setValues:a,reset:t,changed:l}=(0,m.Z)("firebase"),n=e=>{const s=e.target.value,{type:i=""}=e.target.dataset;a((e=>e?{...e,[i]:s}:e))};if(!e)return null;const{token_url:c,project_id:r,private_key:M,client_email:d,enabled:o=!1}=e;return(0,p.jsxs)(h,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(w.Z,{onClick:s,"data-checked":o})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Token Url"}),(0,p.jsx)(j.Z,{disabled:!o,"data-type":"token_url",onChange:n,value:c,name:"token_url",placeholder:"Token URL"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Project ID"}),(0,p.jsx)(j.Z,{disabled:!o,"data-type":"project_id",onChange:n,value:r,name:"project_id",placeholder:"Project ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Private Key"}),(0,p.jsx)(N.Z,{rows:10,disabled:!o,"data-type":"private_key",onChange:n,value:M,name:"private_key",placeholder:"Private key"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Client Email"}),(0,p.jsx)(j.Z,{disabled:!o,"data-type":"client_email",onChange:n,value:d,name:"client_email",placeholder:"Client Email address"})]})]}),l&&(0,p.jsx)(x.Z,{saveHandler:()=>{i(e)},resetHandler:t})]})}const H=i.p+"static/media/question.f1e6b7aab95b0ab2de07.svg",J=r.ZP.div`
  display: flex;
  gap: 16px;
  white-space: nowrap;
  margin-top: 24px;
`;function X(){const[e,s]=(0,a.useState)(""),[i,{isSuccess:t,isError:l}]=(0,d.D$)(),{reset:n,updateConfig:c,values:r,setValues:o,changed:N,toggleEnable:D}=(0,m.Z)("smtp"),g=e=>{const s=e.target.value,{type:i=""}=e.target.dataset;o((e=>e?{...e,[i]:s}:e))};if((0,a.useEffect)((()=>{t&&M.ZP.success("Send Test Email Successfully"),l&&M.ZP.error("Send Test Email Fail")}),[t,l]),!r)return null;const{host:I,port:_,from:T,username:y,password:L,enabled:E=!1}=r;return(0,p.jsxs)(h,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(w.Z,{onClick:D,"data-checked":E})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"name",children:"Host"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"host",onChange:g,value:I,name:"host",placeholder:"SMTP Host"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Port"}),(0,p.jsx)(j.Z,{disabled:!E,type:"number","data-type":"port",onChange:g,value:_,name:"port",placeholder:"SMTP Port"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"From"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"from",onChange:g,value:T,name:"from",placeholder:"SMTP From"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Username"}),(0,p.jsx)(j.Z,{disabled:!E,"data-type":"username",onChange:g,value:y,name:"username",placeholder:"SMTP Username"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"desc",children:"Password"}),(0,p.jsx)(j.Z,{type:"password",disabled:!E,"data-type":"password",onChange:g,value:L,name:"password",placeholder:"SMTP Password"})]})]}),(0,p.jsxs)("div",{className:"tip",children:[(0,p.jsx)("img",{src:H,alt:"question icon"}),(0,p.jsx)("a",{href:"https://voce.chat/doc/smtp-setting",target:"_blank",className:"link",rel:"noreferrer",children:"How to set up SMTP?"})]}),(0,p.jsxs)(J,{children:[(0,p.jsx)(j.Z,{type:"email",disabled:!E,onChange:e=>{const i=e.target.value;s(i)},value:e,name:"email",placeholder:"test@email.com"}),(0,p.jsx)(S.Z,{disabled:!E||!e,onClick:()=>{i({to:e,subject:"test title",content:"test content"})},children:"Send Test Email"})]}),N&&(0,p.jsx)(x.Z,{saveHandler:()=>{var e;c({...r,port:Number(null!==(e=null===r||void 0===r?void 0:r.port)&&void 0!==e?e:0)})},resetHandler:n})]})}const q=r.ZP.div`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid orange;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  .tip {
    color: orange;
    font-size: 12px;
    line-height: 1.5;
  }
  .btns {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 14px;
  }
`,$=r.ZP.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  > .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    label {
      white-space: nowrap;
      font-size: 14px;
      color: #555;
    }
  }
  > .tip {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
  }
`;function ee(){const{updateConfig:e,values:s}=(0,m.Z)("login"),{data:i}=(0,d.BL)(),[t,{data:l,isSuccess:n,isLoading:c}]=(0,d.gU)();(0,a.useEffect)((()=>{n&&((0,L.Bn)(),M.ZP.success("Update API Secret Successfully!"))}),[n]);const r=null===s||void 0===s?void 0:s.third_party;return(0,p.jsxs)($,{children:[(0,p.jsx)(w.Z,{onClick:(i=>{e({...s,...i})}).bind(null,{third_party:!r}),"data-checked":r}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)("label",{htmlFor:"secret",children:"API Secure Key:"}),(0,p.jsx)(j.Z,{disabled:!r,type:"password",id:"secret",value:l||i})]}),(0,p.jsx)(y.ZP,{interactive:!0,placement:"right-start",trigger:"click",content:(0,p.jsxs)(q,{children:[(0,p.jsx)("div",{className:"tip",children:"Are you sure to update API secret? Previous secret will be invalided"}),(0,p.jsxs)("div",{className:"btns",children:[(0,p.jsx)(S.Z,{onClick:()=>(0,L.Bn)(),className:"cancel small",children:"Cancel"}),(0,p.jsx)(S.Z,{disabled:c,className:"small danger",onClick:()=>t(),children:"Yes"})]})]}),children:(0,p.jsx)(S.Z,{disabled:!r,children:"Update Secret"})}),(0,p.jsx)("div",{className:"tip",children:"Tip: The security key agreed between the server and the third-party app is used to encrypt the communication data."})]})}var se=i(7699),ie=i.n(se),ae=i(1892),te=i(874),le=i(698),ne=i(308);const ce=e=>{let{closeModal:s}=e;const[i,{isLoading:t,isSuccess:l}]=(0,d.O2)(),[n,c]=(0,a.useState)(`${ne.kd[0].pid}|${ne.kd[0].limit}`);return(0,p.jsx)(te.Z,{id:"modal-modal",children:(0,p.jsx)(le.Z,{title:"Renew License",description:"Please select the price",buttons:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(S.Z,{onClick:s,className:"ghost",children:"Cancel"}),(0,p.jsx)(S.Z,{disabled:t||l,onClick:async()=>{const[e,s]=n.split("|"),a=await i({priceId:e,metadata:{user_limit:Number(s),expire:"2035-01-01",domain:location.hostname.startsWith("localhost")?"*":location.hostname},cancel_url:location.href,success_url:`${location.origin}/#/cb/payment_success`});"error"in a?M.ZP.error("Payment link initialized failed!"):location.href=a.data.session_url},className:"danger",children:t?"Initialize Payment Url":l?"Redirecting":"Renew"})]}),children:(0,p.jsx)(D.Z,{options:ne.kd.map((e=>{let{title:s,desc:i}=e;return`${s} [${i}]`})),values:ne.kd.map((e=>{let{pid:s,limit:i}=e;return`${s}|${i}`})),value:n,onChange:e=>{c(e)}})})})},re=r.ZP.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  > .license {
    position: relative;
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 2px solid #557d2340;
    background-color: #d1fadf60;
    display: flex;
    flex-direction: column;
    gap: 15px;
    &.outdated {
      border-color: #ef4444;
      background-color: #ef444457;
      &:after {
        content: "License Outdated";
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: #ef4444;
        padding: 5px 4px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
      }
    }
    .item {
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      line-height: 1.2;
      .label {
        font-size: 13px;
        color: #aaa;
        &:after {
          content: ":";
        }
      }
      .info {
        font-weight: bold;
        font-size: 18px;
        line-height: 1.4;
        &.value {
          cursor: pointer;
          width: 100%;
          white-space: pre-wrap;
          word-break: break-all;
          &.fold {
            white-space: inherit;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;function Me(){const{license:e,reachLimit:s}=(0,ae.Z)(),[i,t]=(0,a.useState)(!1),l=()=>{t((e=>!e))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(re,{children:[(0,p.jsxs)("div",{className:"license "+(s?"outdated":""),children:[(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"Signed"}),(0,p.jsx)("span",{className:"info",children:null!==e&&void 0!==e&&e.sign?"Yes":"Not Yet"})]}),(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"Domains"}),(0,p.jsx)("ul",{className:"info",children:null===e||void 0===e?void 0:e.domains.map((e=>(0,p.jsx)("li",{children:e},e)))})]}),(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"User Limit"}),(0,p.jsx)("span",{className:"info",children:99999==(null===e||void 0===e?void 0:e.user_limit)?"No Limit":null===e||void 0===e?void 0:e.user_limit})]}),(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"Expired At"}),(0,p.jsx)("span",{className:"info",children:ie()(null===e||void 0===e?void 0:e.expired_at).format("YYYY-MM-DD h:mm:ss A")})]}),(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"Created At"}),(0,p.jsx)("span",{className:"info",children:ie()(null===e||void 0===e?void 0:e.created_at).format("YYYY-MM-DD h:mm:ss A")})]}),(0,p.jsxs)("div",{className:"item",children:[(0,p.jsx)("span",{className:"label",children:"License Value"}),(0,p.jsx)("span",{className:"info value fold",title:"Click to see full text",onClick:e=>{const s=e.currentTarget;s.classList.toggle("fold"),s.classList.contains("fold")?s.title="Click to see full text":s.title="Click to fold text"},children:null===e||void 0===e?void 0:e.base58})]})]}),(0,p.jsx)(S.Z,{onClick:()=>{l()},children:"Renew License"})]}),i&&(0,p.jsx)(ce,{closeModal:l})]})}var de=i(1205);const oe=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,je=()=>{const{data:e}=(0,d.p5)();return(0,p.jsxs)(oe,{children:[(0,p.jsxs)("div",{className:"item",children:["Client Version: ","0.3.14"]}),(0,p.jsxs)("div",{className:"item",children:["Server Version: ",e]}),(0,p.jsxs)("div",{className:"item",children:["Build Timestamp: ","1667209418"]})]})};function ue(){const{changed:e,reset:s,values:i,setValues:a,toggleEnable:t,updateConfig:l}=(0,m.Z)("agora"),n=e=>{const s=e.target.value,{type:i=""}=e.target.dataset;a((e=>e?{...e,[i]:s}:e))};if(!i)return null;const{url:c,project_id:r,app_id:M,app_certificate:d,rtm_key:o,rtm_secret:D,enabled:g=!1}=i;return(0,p.jsxs)(h,{children:[(0,p.jsxs)("div",{className:"inputs",children:[(0,p.jsxs)("div",{className:"input row",children:[(0,p.jsx)(u.Z,{children:"Enable"}),(0,p.jsx)(w.Z,{onClick:t,"data-checked":g})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"url",children:"Agora Url"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"url",onChange:n,value:c||"https://api.agora.io",name:"url",placeholder:"Agora URL"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"project_id",children:"Project ID"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"project_id",onChange:n,value:r,name:"project_id",placeholder:"Project ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"app_id",children:"App ID"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"app_id",onChange:n,value:M,name:"app_id",placeholder:"APP ID"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"app_certificate",children:"APP Certificate"}),(0,p.jsx)(j.Z,{disabled:!g,"data-type":"app_certificate",onChange:n,value:d,name:"app_certificate",placeholder:"APP Certificate"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"rtm_key",children:"RTM Key"}),(0,p.jsx)(N.Z,{disabled:!g,"data-type":"rtm_key",onChange:n,value:o,name:"rtm_key",placeholder:"RTM Key"})]}),(0,p.jsxs)("div",{className:"input",children:[(0,p.jsx)(u.Z,{htmlFor:"rtm_secret",children:"RTM Secret"}),(0,p.jsx)(N.Z,{disabled:!g,"data-type":"rtm_secret",onChange:n,value:D,name:"rtm_secret",placeholder:"RTM Secret"})]})]}),e&&(0,p.jsx)(x.Z,{saveHandler:()=>{l(i)},resetHandler:s})]})}const Ne=[{title:"General",items:[{name:"overview",title:"Overview",component:(0,p.jsx)(_,{})},{name:"members",title:"Members",component:(0,p.jsx)(de.Z,{}),admin:!0}]},{title:"User",items:[{name:"my_account",title:"My Account",component:(0,p.jsx)(c.Z,{})}]},{title:"Configuration",items:[{name:"firebase",title:"Firebase",component:(0,p.jsx)(V,{})},{name:"agora",title:"Agora",component:(0,p.jsx)(ue,{})},{name:"smtp",title:"SMTP",component:(0,p.jsx)(X,{})},{name:"social_login",title:"Login Methods",component:(0,p.jsx)(F,{})},{name:"api",title:"Third-party APP",component:(0,p.jsx)(ee,{})},{name:"license",title:"License",component:(0,p.jsx)(Me,{})}],admin:!0},{title:"About",items:[{name:"faq",title:"FAQ",component:(0,p.jsx)(je,{})},{name:"terms",title:"Terms & Privacy",component:"Terms & Privacy"},{name:"feedback",title:"Feedback",component:"feedback"}]}],xe=()=>{const e=(0,g.CG)((e=>e.authData.user));return Ne.filter((s=>!(null===e||void 0===e||!e.is_admin)||!s.admin))};var De=i(4645),ge=i(4400);const me=(0,r.ZP)(le.Z)`
  .clear {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .txt {
      cursor: pointer;
      color: orange;
      margin-right: 12px;
    }
    input {
      cursor: pointer;
    }
  }
`,pe=e=>{let{closeModal:s}=e;const[i,t]=(0,a.useState)(!1),{logout:l,exited:n,exiting:c,clearLocalData:r}=(0,ge.Z)();return(0,a.useEffect)((()=>{n&&(i&&r(),M.ZP.success("Logout Successfully"))}),[n,i]),(0,p.jsx)(te.Z,{id:"modal-modal",children:(0,p.jsx)(me,{title:"Log Out",description:"Are you sure want to log out this account?",buttons:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(S.Z,{onClick:s,children:"Cancel"}),(0,p.jsx)(S.Z,{onClick:()=>{l()},className:"danger",children:c?"Logging out":"Log Out"})]}),children:(0,p.jsxs)("div",{className:"clear",children:[(0,p.jsx)("label",{htmlFor:"clear_cb",className:"txt",children:"Clear local data"}),(0,p.jsx)(De.Z,{name:"clear_cb",checked:i,onChange:e=>{t(e.target.checked)}})]})})})};let Ie="";function _e(){const[e]=(0,t.lr)(),s=xe(),i=s.map((e=>{let{items:s}=e;return s})).flat(),c=e.get("nav"),[r,M]=(0,a.useState)(!1),d=(0,l.s0)();Ie=Ie||(e.get("f")||"/");const o=()=>{M((e=>!e))},j=i.find((e=>e.name==c))||i[0];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.Z,{nav:j,closeModal:()=>{d(Ie),Ie=""},title:"Settings",navs:s,dangers:[{title:"Log Out",handler:o}],children:j.component}),r&&(0,p.jsx)(pe,{closeModal:o})]})}}}]);