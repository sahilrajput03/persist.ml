(this["webpackJsonppersist.ml"]=this["webpackJsonppersist.ml"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(4),i=n.n(o),a=(n(9),n(10),n(2)),r=(n(11),n(12),n(0)),l=localStorage.getItem("set_is_production")||0;var u=function(){var e=Object(c.useState)(l),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(-1),i=Object(a.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)(!0),d=Object(a.a)(b,2),m=d[0],O=d[1],h=Object(c.useState)(!0),f=Object(a.a)(h,2),x=f[0],v=f[1];Object(c.useEffect)((function(){-1===u&&(O(!0),v(!0));var e=setTimeout((function(){-1!==u&&j((function(e){return e-1}))}),1e3);return function(){console.log("cleared"),clearTimeout(e)}}));var g,p=m&&x?null:Object(r.jsx)("button",{className:"btn-clear",onClick:function(){O(!0),v(!0),j(-1)},children:"Clear"});return Object(r.jsxs)("div",{className:"main-container",children:[Object(r.jsx)("div",{children:(g=u,-1===g?"":g<60?g+" seconds":Math.floor(g/60)+" mins "+(g%60===0?"":g%60+" seconds"))}),Object(r.jsxs)("div",{className:"row",children:[m&&Object(r.jsx)("button",{className:"main-timer",onClick:function(){j(n?1500:6),O(!1),v(!0)},children:"Start Pomodoro: 25 mins"}),x&&Object(r.jsx)("button",{className:"break-timer",onClick:function(){j(n?300:3),v(!1),O(!0)},children:"Start BREAK: 5 mins"}),p]}),Object(r.jsxs)("div",{className:"row bottom",children:[Object(r.jsx)("div",{className:"column environment-label",children:"Production:"}),Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){var t=e.target.checked;s(t?1:0),localStorage.setItem("set_is_production",t?"x":"")}}),Object(r.jsx)("span",{className:"slider round"})]})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.698a0295.chunk.js.map