(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(5),c=n.n(s),o=n(4),i=(n(10),n(11),n(2)),r=n.n(i),a=n(1),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabet",j="length",h=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),h=i[0],d=i[1],g=[].concat(u);return n===b&&g.sort(),n===j&&g.sort((function(t,e){return t.length-e.length})),h&&g.reverse(),Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:r()("button is-info",{"is-light":n!==b}),onClick:function(){return s(b)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:r()("button is-success",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:r()("button is-warning",{"is-light":!h}),onClick:function(){d(!h)},children:"Reverse"}),(n||h)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),d(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:g.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c96d94c0.chunk.js.map