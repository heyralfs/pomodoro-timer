(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var c,o,i,r=t(0),a=t.n(r),s=t(15),u=t.n(s),d=t(9),l=t(3),j=t(4),b=j.b.button(c||(c=Object(l.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: tomato;\n  border-color: tomato;\n  color: #fff;\n  font-size: 15px;\n  text-align: center;\n  line-height: 30px;\n  margin: 5px;\n  //border-radius: 50%;\n  &:focus {\n    outline: 0;\n  }\n"]))),f=t(5),x=t(7),h=t(2),p=function(){var n=a.a.useState(15e5),e=Object(d.a)(n,2),t=e[0],c=e[1],o=a.a.useState(null),i=Object(d.a)(o,2),r=i[0],s=i[1],u=a.a.useState(!1),l=Object(d.a)(u,2),j=l[0],p=l[1],g=a.a.useRef(),O=a.a.useRef();function m(n){var e=function(n){var e=Math.floor(n/6e4),t=(n%6e4/1e3).toFixed(0);return e+":"+(t<10?"0":"")+t}(n);s(e)}return a.a.useEffect((function(){m(t)}),[]),a.a.useEffect((function(){if(j)return g.current=Date.now(),O.current=setInterval((function(){var n=Date.now()-g.current;c((function(e){return e-n})),m(t)}),1e3),function(){clearInterval(O.current)}}),[j,t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("p",{style:{fontSize:"5em",textAlign:"center"},children:r}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)(b,{onClick:function(){p(!0)},children:Object(h.jsx)(f.a,{icon:x.b})}),Object(h.jsx)(b,{onClick:function(){p(!1)},children:Object(h.jsx)(f.a,{icon:x.a})}),Object(h.jsx)(b,{onClick:function(){c((function(n){return n+6e4}))},children:Object(h.jsx)(f.a,{icon:x.c})}),Object(h.jsx)(b,{onClick:function(){p(!1),c(15e5),m(15e5)},children:Object(h.jsx)(f.a,{icon:x.d})})]})]})},g=j.b.div(o||(o=Object(l.a)(["\n  width: 350px;\n  height: 80vh;\n  background-color: #1a1a42;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\n  padding: 20px;\n  margin: auto;\n  @media only screen and (max-width: 768px) {\n    width: 100vw;\n    height: 100vh;\n    padding: 15px 0;\n  }\n"]))),O=Object(j.a)(i||(i=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    background-image: linear-gradient( #1a1a42, #151535 );\n    font-family: 'Cutive Mono', monospace;\n    color: #fff;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"])));var m=function(){return console.log("teste"),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{}),Object(h.jsx)(g,{children:Object(h.jsx)(p,{})})]})},v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),c(n),o(n),i(n),r(n)}))};u.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.c6b70518.chunk.js.map