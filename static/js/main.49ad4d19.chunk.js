(this["webpackJsonpbirkbeck-form"]=this["webpackJsonpbirkbeck-form"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(6),s=n.n(a),j=(n(11),n(3)),r=n(2),l=n(5),b=(n(12),n(0)),o=function(e,t){return t.reset?{apple:"",count:0,name:"","gift-wrap":!1}:Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},t.name,t.value))};var u=function(){var e=Object(c.useReducer)(o,{count:100}),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),r=s[0],l=s[1],u=function(e){var t="checkbox"===e.target.type;i({name:e.target.name,value:t?e.target.checked:e.target.value})};return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{children:"How about them apples?"}),r&&Object(b.jsxs)("div",{children:["You are submitting:",Object(b.jsx)("ul",{children:Object.entries(n).map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:n}),":",c.toString()]},n)}))})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0),setTimeout((function(){l(!1),i({reset:!0})}),3e3)},children:[Object(b.jsx)("fieldset",{disabled:r,children:Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Name"}),Object(b.jsx)("input",{name:"name",onChange:u,value:n.name||""})]})}),Object(b.jsxs)("fieldset",{disabled:r,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Apples"}),Object(b.jsxs)("select",{name:"apple",onChange:u,value:n.apple||"",children:[Object(b.jsx)("option",{value:"",children:"--Please choose an option--"}),Object(b.jsx)("option",{value:"fuji",children:"Fuji"}),Object(b.jsx)("option",{value:"cox",children:"Cox"}),Object(b.jsx)("option",{value:"pink-lady",children:"Pink Lady"})]})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Count"}),Object(b.jsx)("input",{type:"number",name:"count",onChange:u,step:"1",value:n.count||""})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Gift Wrap"}),Object(b.jsx)("input",{type:"checkbox",name:"gift-wrap",onChange:u,checked:n["gift-wrap"]||!1,disabled:"fuji"!==n.apple})]})]}),Object(b.jsx)("button",{type:"submit",disabled:r,children:"Submit"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.49ad4d19.chunk.js.map