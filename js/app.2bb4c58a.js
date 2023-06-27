(function(){"use strict";var e={9738:function(e,t,r){var a=r(9242),n=r(3396),o=r(7139);const i={id:"formio-land-form",class:"container container-fluid qg-site-width"},s={id:"qg-three-col",class:"row no-secondary-nav"},l={id:"qg-primary-content",role:"main"},p=(0,n._)("br",null,null,-1),u=(0,n._)("em",null,"(Land Act 1994)",-1),c=(0,n._)("div",{class:"clearfix"},null,-1),d=(0,n._)("div",{class:"qg-content-footer"},[(0,n._)("dl",null,[(0,n._)("dt",null,"Version:"),(0,n._)("dd",null,"2022/01")])],-1),f=(0,n._)("div",{id:"qg-options",class:"row justify-content-sm-end"},null,-1),m={id:"qg-secondary-content"};function v(e,t,r,a,v,h){const _=(0,n.up)("FormWrapper"),P=(0,n.up)("RightSideBar"),U=(0,n.up)("LeftSideBar");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",s,[(0,n._)("div",l,[(0,n._)("h1",null,[(0,n.Uk)((0,o.zw)(v.formName),1),p,u]),(0,n.Wm)(_,{projectUrl:v.projectUrl,wizardUrl:v.wizardUrl,createFormUrl:v.createFormUrl,formIdentifier:v.formIdentifier,savedApplicationPage:v.savedApplicationPage,thankYouPage:v.thankYouPage,submissionId:v.submissionId,hasPayment:v.hasPayment,paymentUrl:v.paymentUrl,recaptchaSiteKey:v.recaptchaSiteKey,purchaseItemName:v.purchaseItemName,guidePageUrl:v.guidePageUrl,shortUuidToken:v.shortUuidToken,feesCode:v.feesCode,feesUrl:v.feesUrl,privateKey:v.privateKey},null,8,["projectUrl","wizardUrl","createFormUrl","formIdentifier","savedApplicationPage","thankYouPage","submissionId","hasPayment","paymentUrl","recaptchaSiteKey","purchaseItemName","guidePageUrl","shortUuidToken","feesCode","feesUrl","privateKey"]),c,d,f]),(0,n._)("aside",m,[(0,n.Wm)(P)]),(0,n.Wm)(U,{formName:v.formName},null,8,["formName"])])])}var h=r(4808),_={name:"App",components:{LeftSideBar:h.Jq,FormWrapper:h.n5,RightSideBar:h.mM},data(){return{projectUrl:"https://api.forms.platforms.qld.gov.au/la04e",wizardUrl:"https://api.forms.platforms.qld.gov.au/la04e/application-form",createFormUrl:"https://api.forms.platforms.qld.gov.au/la04e/application-form",formIdentifier:"la04-production",formName:"Form 04e - Approval to transfer",purchaseItemName:{VUE_APP_NAME:"la04",VUE_APP_ENV:"production",VUE_APP_PROJECT_URL:"https://api.forms.platforms.qld.gov.au/la04e",VUE_APP_WIZARD_URL:"https://api.forms.platforms.qld.gov.au/la04e/application-form",VUE_APP_SAVED_APPLICATION_PAGE:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",VUE_APP_THANK_YOU_PAGE:"https://www.qld.gov.au/environment/land/state/application/forms/services/thank-you-pay-later",VUE_APP_HAS_PAYMENT:"false",VUE_APP_PAYMENT_URL:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",VUE_APP_RECAPTCHA_SITE_KEY:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",VUE_APP_FORM_NAME:"Form 04e - Approval to transfer",VUE_APP_GUIDE_PAGE_URL:"https://www.qld.gov.au/environment/land/state/application/forms/services/transfer",VUE_APP_FEECODE:"",VUE_APP_FEE_URL:"",VUE_APP_PRIVATE_KEY:"",NODE_ENV:"production",BASE_URL:"https://www.qld.gov.au/?a=280643:/"}.VUE_APP_PURCHASE_ITEM_NAME,savedApplicationPage:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",thankYouPage:"https://www.qld.gov.au/environment/land/state/application/forms/services/thank-you-pay-later",guidePageUrl:"https://www.qld.gov.au/environment/land/state/application/forms/services/transfer",submissionId:"",hasPayment:"false",paymentUrl:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",recaptchaSiteKey:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",shortUuidToken:"",feesCode:"",feesUrl:"",privateKey:""}},beforeMount(){let e=window.location.search,t=new URLSearchParams(e),r=t.get("submissionId")??"",a=t.get("token")??"";this.createFormUrl=this.wizardUrl,""!==r&&""!==a&&(this.createFormUrl+="/submission/"+r),this.submissionId=r,this.shortUuidToken=a}},P=r(89);const U=(0,P.Z)(_,[["render",v]]);var A=U;(0,a.ri)(A).use(h.h).mount("#app")},6807:function(e){e.exports=Formio}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],o=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var p=n();void 0!==p&&(t=p)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,i=a[0],s=a[1],l=a[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(a);p<i.length;p++)o=i[p],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(9738)}));a=r.O(a)})();
//# sourceMappingURL=app.2bb4c58a.js.map