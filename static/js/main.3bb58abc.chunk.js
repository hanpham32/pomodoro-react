(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(4),o=n.n(r),a=n(2),u=(n(9),n(0)),l=function(t){var e=t.setStatus,n=t.status;return Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:function(){return e((function(t){return n=!0}))},style:n?{backgroundColor:"#222831",color:"white"}:{backgroundColor:"#ffd472",color:"#393E46"},children:"Start"})})},i=function(t){var e=t.setStatus,n=t.status;return Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:function(){return e((function(t){return n=!1}))},style:n?{backgroundColor:"#222831",color:"white"}:{backgroundColor:"#ffd472",color:"#393E46"},children:"Pause"})})},j=function(t){var e=t.status;return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"status",children:e?"Work Session":"Rest Session"})})},b=function(t){var e=t.status,n=t.setStatus,c=Object(s.useState)(25),r=Object(a.a)(c,2),o=r[0],b=r[1],d=Object(s.useState)(0),f=Object(a.a)(d,2),O=f[0],v=f[1];Object(s.useEffect)((function(){var t;return clearInterval(t),e?(console.log(e),t=setInterval((function(){if(0===O&&0===o){var n=e?25:5;return v(59),b(n),function(){return clearInterval(t)}}0===O&&o>0?(v(59),b(o-1)):v(O-1)}),1e3),function(){return clearInterval(t)}):(console.log(e),function(){return clearInterval(t)})}));var h=o<10?"0"+o:o,x=O<10?"0"+O:O;return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{status:e}),Object(u.jsxs)("div",{className:"status",children:[Object(u.jsx)("span",{children:h}),":",Object(u.jsx)("span",{children:x})," ",Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"buttons-container",children:[Object(u.jsx)(l,{setStatus:n,status:e}),Object(u.jsx)(i,{setStatus:n,status:e})]})]})};var d=function(){var t=Object(s.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{className:"App",style:n?{backgroundColor:"#ffd472",color:"black"}:{backgroundColor:"#222831",color:"#EEEEEE"},children:[Object(u.jsx)("span",{className:"app-title",children:"Pomodoro"}),Object(u.jsx)(b,{status:n,setStatus:c})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),f()},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.3bb58abc.chunk.js.map