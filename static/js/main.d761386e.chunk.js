(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(13),a(1)),i=r.a.createContext();function s(e){var t=e.todo,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(t.title),d=Object(o.a)(u,2),m=d[0],p=d[1],g=Object(n.useContext)(i).dispatch,E=["todo"];t.completed&&E.push("completed");var f=function(e){("Enter"===e.key&&e.target.value.length>=3||"click"===e.type)&&(g({type:"edit",payload:m,todo:t}),s(!1))};return l?r.a.createElement("li",{className:E.join(" ")},r.a.createElement("label",null,r.a.createElement("input",{className:"validate",type:"text",value:m,minLength:"3",maxLength:"120",onChange:function(e){return p(e.target.value)},onKeyPress:f}),r.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u0432\u0432\u0435\u0434\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!","data-success":"\u041d\u0430\u0436\u043c\u0438 \u0412\u0432\u043e\u0434 (Return) (Enter)"})),r.a.createElement("div",{className:"icons-group"},r.a.createElement("i",{className:"material-icons",onClick:function(e){return f(e)}},"save"),r.a.createElement("i",{className:"material-icons red-text",onClick:function(){return g({type:"remove",payload:t.id})}},"delete"))):r.a.createElement("li",{className:E.join(" ")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return g({type:"toggle",payload:t.id})}}),r.a.createElement("span",null,t.title)),r.a.createElement("div",{className:"icons-group"},r.a.createElement("i",{className:"material-icons",onClick:function(){return s(!0)}},"edit"),r.a.createElement("i",{className:"material-icons red-text",onClick:function(){return g({type:"remove",payload:t.id})}},"delete")))}var u=a(6),d=function(e){var t=e.todos;return r.a.createElement("ul",{className:"todo-list"},t.map((function(e){return r.a.createElement(u.Slide,{direction:"up",triggerOnce:!0,key:e.id},r.a.createElement(s,Object.assign({},e,{todo:e})))})))},m=null!=localStorage.getItem("darkMode")&&JSON.parse(localStorage.getItem("darkMode")),p=function(){var e=Object(n.useState)(m),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("darkMode",JSON.stringify(a)),a?document.querySelector("html").setAttribute("data-theme","dark"):document.querySelector("html").removeAttribute("data-theme")}),[a]),r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return c(!a)}}),r.a.createElement("span",{className:"lever"}),"\u0422\u0451\u043c\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"))},g=a(7),E=null==localStorage.getItem("todos")?[{id:1,title:"\u043f\u043e\u043a\u0430\u043a\u0430\u0442",completed:!1},{id:Date.now(),title:"\u043f\u043e\u043a\u0443\u0448\u0430\u0442",completed:!0}]:JSON.parse(localStorage.getItem("todos"));function f(e,t){switch(t.type){case"add":return[].concat(Object(g.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"toggle":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}));case"edit":return e.map((function(e){return e.id===t.todo.id?(e.title=t.payload,e):e}));case"remove":return e.filter((function(e){return e.id!==t.payload}));default:return e}}var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(i).dispatch;return r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{id:"adding",className:"validate",type:"text",value:a,minLength:"3",maxLength:"120",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.target.value.length>=3&&(l({type:"add",payload:a}),c(""))},onKeyUp:function(e){"Enter"===e.key&&e.target.blur()}}),r.a.createElement("label",null,"\u0427\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c ?"),r.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u0432\u0432\u0435\u0434\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!","data-success":"\u041d\u0430\u0436\u043c\u0438 \u0412\u0432\u043e\u0434 (Return) (Enter)"}))};function v(){var e=Object(n.useReducer)(f,E),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),r.a.createElement(i.Provider,{value:{state:a,dispatch:c}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"\u0422\u0432\u043e\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(d,{todos:a})))}a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.d761386e.chunk.js.map