(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(4),a=n.n(r),o=n(2),u=(n(9),n(0)),i=function(t){var e=t.setStatus;t.status;return Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:function(){return e((function(t){return!0}))},children:"Start"})})},j=function(t){var e=t.setStatus;t.status;return Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:function(){return e((function(t){return!1}))},children:"Pause"})})},l=function(t){var e=t.status;return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"status",children:e?"Work Session":"Rest Session"})})},b=function(t){var e=t.status,n=t.setStatus,c=Object(s.useState)(25),r=Object(o.a)(c,2),a=r[0],b=r[1],d=Object(s.useState)(0),O=Object(o.a)(d,2),f=O[0],v=O[1];Object(s.useEffect)((function(){var t;return clearInterval(t),e?(console.log(e),t=setInterval((function(){if(0===f&&0===a){var n=e?25:5;return v(59),b(n),function(){return clearInterval(t)}}0===f&&a>0?(v(59),b(a-1)):v(f-1)}),1e3),function(){return clearInterval(t)}):(console.log(e),function(){return clearInterval(t)})}));var h=a<10?"0"+a:a,x=f<10?"0"+f:f;return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{status:e}),Object(u.jsxs)("div",{className:"status",children:[Object(u.jsx)("span",{children:h}),":",Object(u.jsx)("span",{children:x})," ",Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"buttons-container",children:[Object(u.jsx)(i,{setStatus:n,status:e}),Object(u.jsx)(j,{setStatus:n,status:e})]})]})};var d=function(){var t=Object(s.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{className:"App",style:n?{backgroundColor:"#ffd472",color:"black"}:{backgroundColor:"#222831",color:"#EEEEEE"},children:[Object(u.jsx)("span",{className:"app-title",children:"Pomodoro"}),Object(u.jsx)(b,{status:n,setStatus:c})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),r(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.d6359128.chunk.js.map