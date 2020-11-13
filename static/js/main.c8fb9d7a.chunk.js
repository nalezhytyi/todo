(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=(a(13),a(1)),i=l.a.createContext();function s(e){var t=e.todo,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(t.title),m=Object(o.a)(u,2),d=m[0],p=m[1],g=Object(n.useContext)(i).dispatch,f=["todo"];t.completed&&f.push("completed");var E=function(e){("Enter"===e.key&&e.target.value.length>=3||"click"===e.type)&&(g({type:"edit",payload:d,todo:t}),s(!1))};return r?l.a.createElement("li",{className:f.join(" ")},l.a.createElement("label",null,l.a.createElement("input",{className:"validate",type:"text",value:d,minLength:"3",maxLength:"120",onChange:function(e){return p(e.target.value)},onKeyPress:E}),l.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u0432\u0432\u0435\u0434\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!","data-success":"\u041d\u0430\u0436\u043c\u0438 \u0412\u0432\u043e\u0434 (Return) (Enter) \u0438\u043b\u0438 \u0442\u044b\u0446\u043d\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u043f\u0440\u0430\u0432\u0430!"})),l.a.createElement("div",{className:"icons-group"},l.a.createElement("button",{className:"btn-large btn-flat waves-effect waves-light btn-floating",disabled:d.length<3,onClick:function(e){return E(e)}},l.a.createElement("i",{className:"material-icons"},"save")))):l.a.createElement("li",{className:f.join(" ")},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return g({type:"toggle",payload:t.id})}}),l.a.createElement("span",null,t.title)),l.a.createElement("div",{className:"icons-group"},l.a.createElement("button",{className:"waves-effect btn-flat btn-floating waves-light",onClick:function(){return s(!0)}},l.a.createElement("i",{className:"material-icons"},"edit")),l.a.createElement("button",{className:"btn-flat btn-floating",onClick:function(){return g({type:"remove",payload:t.id})}},l.a.createElement("i",{className:"material-icons red-text"},"delete"))))}var u=a(6),m=function(e){var t=e.todos;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(u.Slide,{direction:"up",triggerOnce:!0,key:e.id},l.a.createElement(s,Object.assign({},e,{todo:e})))})))},d=null!=localStorage.getItem("darkMode")&&JSON.parse(localStorage.getItem("darkMode")),p=function(){var e=Object(n.useState)(d),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("darkMode",JSON.stringify(a)),a?document.querySelector("html").setAttribute("data-theme","dark"):document.querySelector("html").removeAttribute("data-theme")}),[a]),l.a.createElement("div",{className:"switch"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return c(!a)}}),l.a.createElement("span",{className:"lever"}),"\u0422\u0451\u043c\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"))},g=a(7),f=null==localStorage.getItem("todos")?[{id:1,title:"\u043f\u043e\u043a\u0430\u043a\u0430\u0442",completed:!1},{id:Date.now(),title:"\u043f\u043e\u043a\u0443\u0448\u0430\u0442",completed:!0}]:JSON.parse(localStorage.getItem("todos"));function E(e,t){switch(t.type){case"add":return[].concat(Object(g.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"toggle":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}));case"edit":return e.map((function(e){return e.id===t.todo.id?(e.title=t.payload,e):e}));case"remove":return e.filter((function(e){return e.id!==t.payload}));default:return e}}var b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(i).dispatch,s=function(e){("Enter"===e.key&&e.target.value.length>=3||"click"===e.type)&&(r({type:"add",payload:a}),c(""),e.target.blur())};return l.a.createElement("div",{className:"form-input"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"adding",className:"validate",type:"text",value:a,minLength:"3",maxLength:"120",onChange:function(e){return c(e.target.value)},onKeyPress:s}),l.a.createElement("label",null,"\u0427\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c ?"),l.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u0432\u0432\u0435\u0434\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!","data-success":"\u0425\u043e\u0447\u0435\u0448\u044c \u0435\u0449\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c?"})),l.a.createElement("div",null,l.a.createElement("button",{className:"btn-flat btn-floating btn-large waves-effect",onClick:s,disabled:a.length<3},l.a.createElement("i",{className:"material-icons"},"send"))))};function h(){var e=Object(n.useReducer)(E,f),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),l.a.createElement(i.Provider,{value:{state:a,dispatch:c}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"\u0422\u0432\u043e\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(m,{todos:a})))}a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.c8fb9d7a.chunk.js.map