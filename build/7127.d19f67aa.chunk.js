(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[7127],{1491:(C,f,t)=>{var l,D;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(i){var d;if(l=i,D=typeof l=="function"?l.call(f,t,f,C):l,D!==void 0&&(C.exports=D),d=!0,C.exports=i(),d=!0,!d){var O=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=O,o}}})(function(){function i(){for(var o=0,E={};o<arguments.length;o++){var M=arguments[o];for(var P in M)E[P]=M[P]}return E}function d(o){return o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function O(o){function E(){}function M(_,s,n){if(!(typeof document>"u")){n=i({path:"/"},E.defaults,n),typeof n.expires=="number"&&(n.expires=new Date(new Date*1+n.expires*864e5)),n.expires=n.expires?n.expires.toUTCString():"";try{var v=JSON.stringify(s);/^[\{\[]/.test(v)&&(s=v)}catch{}s=o.write?o.write(s,_):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),_=encodeURIComponent(String(_)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var e in n)n[e]&&(r+="; "+e,n[e]!==!0&&(r+="="+n[e].split(";")[0]));return document.cookie=_+"="+s+r}}function P(_,s){if(!(typeof document>"u")){for(var n={},v=document.cookie?document.cookie.split("; "):[],r=0;r<v.length;r++){var e=v[r].split("="),a=e.slice(1).join("=");!s&&a.charAt(0)==='"'&&(a=a.slice(1,-1));try{var I=d(e[0]);if(a=(o.read||o)(a,I)||d(a),s)try{a=JSON.parse(a)}catch{}if(n[I]=a,_===I)break}catch{}}return _?n[_]:n}}return E.set=M,E.get=function(_){return P(_,!1)},E.getJSON=function(_){return P(_,!0)},E.remove=function(_,s){M(_,"",i(s,{expires:-1}))},E.defaults={},E.withConverter=O,E}return O(function(){})})},67127:(C,f,t)=>{"use strict";t.r(f),t.d(f,{ADMIN_PERMISSIONS_EE:()=>W,ROUTES_EE:()=>h,SETTINGS_LINKS_EE:()=>m});var l=t(92132),D=t(21272),i=t(2129),d=t(1491),O=t(54894),o=t(17703),E=t(34288),M=t(15126),P=t(63299),_=t(67014),s=t(59080),n=t(79275),v=t(14718),r=t(82437),e=t(61535),a=t(5790),I=t(12083),L=t(35223),K=t(5409),c=t(74930),S=t(2600),p=t(48940),j=t(41286),w=t(56336),x=t(13426),N=t(84624),y=t(77965),F=t(54257),G=t(71210),J=t(51187),z=t(39404),V=t(58692),Y=t(501),Z=t(57646),$=t(23120),H=t(44414),Q=t(25962),X=t(14664),k=t(42588),b=t(90325),q=t(62785),tt=t(87443),nt=t(41032),ot=t(22957),_t=t(93179),Et=t(73055),st=t(15747),at=t(85306),dt=t(26509),it=t(32058),rt=t(81185),et=t(82261);const B=()=>{const A=(0,o.W5)("/auth/login/:authResponse"),{formatMessage:U}=(0,O.A)(),{push:R}=(0,o.W6)(),T=D.useCallback(()=>{R(`/auth/oops?info=${encodeURIComponent(U({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[R,U]),{setToken:g}=(0,E.a)("AuthResponse");return D.useEffect(()=>{if(A?.params.authResponse==="error"&&T(),A?.params.authResponse==="success"){const u=d.get("jwtToken");u?(g(u),d.remove("jwtToken"),R("/auth/login")):T()}},[A,T,g,R]),(0,l.jsx)(i.Bl,{})},W={settings:{auditLogs:{main:[{action:"admin::audit-logs.read",subject:null}],read:[{action:"admin::audit-logs.read",subject:null}],update:[{action:"admin::audit-logs.update",subject:null}]},"review-workflows":{main:[{action:"admin::review-workflows.read",subject:null}],read:[{action:"admin::review-workflows.read",subject:null}],create:[{action:"admin::review-workflows.create",subject:null}],delete:[{action:"admin::review-workflows.delete",subject:null}],update:[{action:"admin::review-workflows.update",subject:null}]},sso:{main:[{action:"admin::provider-login.read",subject:null}],read:[{action:"admin::provider-login.read",subject:null}],update:[{action:"admin::provider-login.update",subject:null}]}}},h=[{Component:()=>({default:B}),to:"/auth/login/:authResponse",exact:!0}],m=()=>({global:[...window.strapi.features.isEnabled(window.strapi.features.SSO)?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/single-sign-on",id:"sso"}]:[],...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/review-workflows",id:"review-workflows"}]:[]],admin:[...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",id:"auditLogs"}]:[]]})}}]);
