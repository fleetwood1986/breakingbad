(this["webpackJsonp01-04"]=this["webpackJsonp01-04"]||[]).push([[0],{126:function(e,t,c){},423:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),s=c(118),a=c.n(s),i=c(70),j=c.n(i),o=c(119),d=c(28),u=(c(126),c.p+"static/media/logo.e6ecab44.png"),b=c(1),l=function(){return Object(b.jsx)("header",{className:"center",children:Object(b.jsx)("img",{src:u,alt:""})})},O=function(e){var t=e.item;return Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-inner",children:[Object(b.jsx)("div",{className:"card-front",children:Object(b.jsx)("img",{src:t.img,alt:""})}),Object(b.jsxs)("div",{className:"card-back",children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},h=c.p+"static/media/spinner.11d9cde8.gif",x=function(){return Object(b.jsx)("img",{src:h,style:{width:"200px",margin:"auto",display:"block"},alt:"loading"})},m=function(e){var t=e.items;return e.isLoading?Object(b.jsx)(x,{}):Object(b.jsx)("section",{className:"cards",children:t.map((function(e){return Object(b.jsx)(O,{item:e},e.char_id)}))})},f=c(120),p=function(e){e.getQuery;var t=Object(n.useState)(""),c=Object(d.a)(t,2),r=c[0],s=c[1];return Object(b.jsx)("section",{className:"search",children:Object(b.jsx)("form",{children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Characters...",autoFocus:!0,value:r,onChange:function(e){return t=e.target.value,s(t),void Object(f.a)(t);var t}})})})};var g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),a=Object(d.a)(s,2),i=a[0],u=a[1],O=Object(n.useState)(""),h=Object(d.a)(O,2),x=h[0],f=h[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters?name=".concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c),u(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(l,{}),Object(b.jsx)(p,{getQuery:function(e){return f(e)}}),Object(b.jsx)(m,{isLoading:i,items:c})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[423,1,2]]]);
//# sourceMappingURL=main.a81e7525.chunk.js.map