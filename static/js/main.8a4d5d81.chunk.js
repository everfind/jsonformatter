(this.webpackJsonpjsonformatter=this.webpackJsonpjsonformatter||[]).push([[0],{18:function(e,r,n){},29:function(e,r){function n(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=29},3:function(e,r,n){e.exports={board:"board_board__GUmTP",toolbar:"board_toolbar__343vf",json:"board_json__3q7gj",error:"board_error__2P4Em"}},30:function(e,r,n){"use strict";n.r(r);var a=n(1),t=n.n(a),o=n(12),c=n.n(o),s=(n(18),n(7)),i=n(13),u=n.n(i),l=n(8),b=n.n(l),d=n(3),j=n.n(d),_=n(0),f=function(e){var r=e.info,n=e.className,t=Object(a.useRef)(null);Object(a.useEffect)((function(){t.current&&(r instanceof HTMLElement?(t.current.innerHTML="",t.current.appendChild(r)):r instanceof Error?t.current.innerHTML=r.toString():t.current.innerHTML="")}),[t,r]);var o=r instanceof Error;return Object(_.jsxs)("div",{className:"".concat(n," ").concat(j.a.board),children:[Object(_.jsx)("div",{className:j.a.toolbar,children:o?"\u9519\u8bef\u4fe1\u606f":"JSON \u4fe1\u606f"}),Object(_.jsx)("div",{className:"".concat(j.a.json," ").concat(o?j.a.error:""),ref:t})]})},p=n(2),O=n.n(p),v=n(4),h=n.n(v),m=function(e){var r=e.onChange,n=e.onError,t=e.className,o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(a.useCallback)((function(){if(i)try{var e=O.a.parse(i);u(O.a.stringify(e,{indent:2,mode:"json"})),r(e)}catch(a){n(a)}}),[r,n,i]);return Object(_.jsxs)("div",{className:"".concat(t," ").concat(h.a.source),children:[Object(_.jsx)("div",{className:h.a.toolbar,children:"JSON \u6587\u672c"}),Object(_.jsx)("textarea",{value:i,onChange:function(e){u(e.target.value)},placeholder:"\u8bf7\u5728\u6b64\u5904\u8f93\u5165 JSON \u6587\u672c"}),Object(_.jsx)("div",{className:h.a.arrowWrapper,children:Object(_.jsx)("div",{className:h.a.arrow,children:Object(_.jsx)("div",{onClick:l})})})]})};var x=function(){var e=Object(a.useState)(),r=Object(s.a)(e,2),n=r[0],t=r[1],o=Object(a.useCallback)((function(e){var r=new u.a(e,1,{hoverPreviewEnabled:!0});t(r.render())}),[]),c=Object(a.useCallback)((function(e){t(e)}),[]);return Object(_.jsxs)("div",{className:b.a.app,children:[Object(_.jsx)(m,{className:b.a.source,onChange:o,onError:c}),Object(_.jsx)(f,{className:b.a.board,info:n})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(r){var n=r.getCLS,a=r.getFID,t=r.getFCP,o=r.getLCP,c=r.getTTFB;n(e),a(e),t(e),o(e),c(e)}))};c.a.render(Object(_.jsx)(t.a.StrictMode,{children:Object(_.jsx)(x,{})}),document.getElementById("root")),N()},4:function(e,r,n){e.exports={source:"source_source__2RtzH",toolbar:"source_toolbar__38dXq",arrowWrapper:"source_arrowWrapper__2ZbQT",arrow:"source_arrow__36gN2"}},8:function(e,r,n){e.exports={app:"App_app__2ziFi",source:"App_source__1QSgq",board:"App_board__3la-t"}}},[[30,1,2]]]);
//# sourceMappingURL=main.8a4d5d81.chunk.js.map