(this.webpackJsonpjsonformatter=this.webpackJsonpjsonformatter||[]).push([[0],{18:function(e,n,r){},29:function(e,n){function r(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=29},3:function(e,n,r){e.exports={board:"board_board__GUmTP",toolbar:"board_toolbar__343vf",json:"board_json__3q7gj",error:"board_error__2P4Em"}},30:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),o=r(12),c=r.n(o),s=(r(18),r(6)),i=r(13),u=r.n(i),l=r(7),b=r.n(l),d=r(3),j=r.n(d),f=r(0),_=function(e){var n=e.info,r=e.className,a=Object(t.useRef)(null);Object(t.useEffect)((function(){a.current&&(n instanceof HTMLElement?(a.current.innerHTML="",a.current.appendChild(n)):n instanceof Error?a.current.innerHTML=n.toString():a.current.innerHTML="")}),[a,n]);var o=n instanceof Error;return Object(f.jsxs)("div",{className:"".concat(r," ").concat(j.a.board),children:[Object(f.jsx)("div",{className:j.a.toolbar,children:o?"\u9519\u8bef\u4fe1\u606f":"JSON \u4fe1\u606f"}),Object(f.jsx)("div",{className:"".concat(j.a.json," ").concat(o?j.a.error:""),ref:a})]})},O=r(2),p=r.n(O),v=r(8),h=r.n(v),m=function(e){var n=e.onChange,r=e.onError,a=e.className,o=Object(t.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(t.useCallback)((function(e){if(e.target.value)try{var t=p.a.parse(e.target.value);u(p.a.stringify(t,{indent:2,mode:"json"})),n(t)}catch(e){r(e)}}),[n,r]);return Object(f.jsxs)("div",{className:"".concat(a," ").concat(h.a.source),children:[Object(f.jsx)("div",{className:h.a.toolbar,children:"JSON \u6587\u672c"}),Object(f.jsx)("textarea",{value:i,onChange:function(e){u(e.target.value)},onBlur:l,placeholder:"\u8bf7\u5728\u6b64\u5904\u8f93\u5165 JSON \u6587\u672c\uff0c\u79fb\u9664\u9f20\u6807\u7126\u70b9\u8fdb\u884c\u683c\u5f0f\u5316\u3002"})]})};var g=function(){var e=Object(t.useState)(),n=Object(s.a)(e,2),r=n[0],a=n[1],o=Object(t.useCallback)((function(e){var n=new u.a(e,1,{hoverPreviewEnabled:!0});a(n.render())}),[]),c=Object(t.useCallback)((function(e){a(e)}),[]);return Object(f.jsxs)("div",{className:b.a.app,children:[Object(f.jsx)(m,{className:b.a.source,onChange:o,onError:c}),Object(f.jsx)(_,{className:b.a.board,info:r})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,31)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;r(e),t(e),a(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),x()},7:function(e,n,r){e.exports={app:"App_app__2ziFi",source:"App_source__1QSgq",board:"App_board__3la-t"}},8:function(e,n,r){e.exports={source:"source_source__2RtzH",toolbar:"source_toolbar__38dXq"}}},[[30,1,2]]]);
//# sourceMappingURL=main.674ebb5b.chunk.js.map