(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=(a(12),a(2)),i=o.a.createContext();function u(e){var t=e.title,a=e.id,r=e.completed,c=Object(n.useContext)(i).dispatch,l=["todo"];return r&&l.push("completed"),o.a.createElement("li",{className:l.join(" ")},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:r,onChange:function(){return c({type:"toggle",payload:a})}}),o.a.createElement("span",null,t),o.a.createElement("i",{className:"material-icons red-text",onClick:function(){return c({type:"remove",payload:a})}},"delete")))}var s=function(e){var t=e.todos;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(u,Object.assign({key:e.id},e))})))},d=null!=localStorage.getItem("darkMode")&&JSON.parse(localStorage.getItem("darkMode")),m=function(){var e=Object(n.useState)(d),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){localStorage.setItem("darkMode",JSON.stringify(a)),a?document.querySelector("html").setAttribute("data-theme","dark"):document.querySelector("html").removeAttribute("data-theme")}),[a]),o.a.createElement("div",{className:"switch"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return r(!a)}}),o.a.createElement("span",{className:"lever"}),"\u0422\u0451\u043c\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"))},p=a(6),g=null==localStorage.getItem("todos")?[{id:1,title:"\u043f\u043e\u043a\u0430\u043a\u0430\u0442",completed:!1},{id:Date.now(),title:"\u043f\u043e\u043a\u0443\u0448\u0430\u0442",completed:!0}]:JSON.parse(localStorage.getItem("todos"));function f(e,t){switch(t.type){case"add":return[].concat(Object(p.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"toggle":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}));case"remove":return e.filter((function(e){return e.id!==t.payload}));default:return e}}function h(){var e=Object(n.useReducer)(f,g),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(l.a)(c,2),d=u[0],p=u[1];Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);return o.a.createElement(i.Provider,{value:{state:a,dispatch:r}},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"\u0422\u0432\u043e\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),o.a.createElement(m,null),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{id:"adding",className:"validate",type:"text",value:d,minLength:"3",maxLength:"120",onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.target.value.length>=3&&(r({type:"add",payload:d}),p(""))},onKeyUp:function(e){return function(e){"Enter"===e.key&&e.target.blur()}(e)}}),o.a.createElement("label",null,"\u0427\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c ?"),o.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u0432\u0432\u0435\u0434\u0438 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!","data-success":"\u041d\u0430\u0436\u043c\u0438 \u0412\u0432\u043e\u0434 (Return) (Enter)"})),o.a.createElement(s,{todos:a})))}a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.87bb98f6.chunk.js.map