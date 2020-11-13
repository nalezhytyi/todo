(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),o=a.n(c),r=(a(13),a(1)),i=l.a.createContext();function s(e){var t=e.todo,a=Object(n.useState)(!1),c=Object(r.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)(t.title),u=Object(r.a)(m,2),d=u[0],p=u[1],f=Object(n.useContext)(i).dispatch,g=["todo"];t.completed&&g.push("completed");var E=function(){s(!1),f(d?{type:"edit",payload:d,todo:t}:{type:"remove",payload:t.id})};return o?l.a.createElement("li",{className:g.join(" ")},l.a.createElement("label",null,l.a.createElement("input",{autoFocus:!0,className:"validate",type:"text",value:d,minLength:"1",maxLength:"120",onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&e.target.value&&E()},onBlur:E}),l.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u043d\u0430\u043f\u0438\u0448\u0438 \u0445\u043e\u0442\u044c \u0447\u0451\u0442\u043e!","data-success":"\u041d\u0430\u0436\u043c\u0438 \u0412\u0432\u043e\u0434 (Return) (Enter) \u0438\u043b\u0438 \u0442\u044b\u0446\u043d\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u043f\u0440\u0430\u0432\u0430!"})),l.a.createElement("div",{className:"icons-group"},l.a.createElement("button",{className:"btn-large btn-flat waves-effect waves-light btn-floating",onClick:E},d?l.a.createElement("i",{className:"material-icons"},"save"):l.a.createElement("i",{className:"material-icons red-text"},"delete")))):l.a.createElement("li",{className:g.join(" ")},l.a.createElement("label",null,l.a.createElement("input",{className:"todo__checkbox",type:"checkbox",checked:t.completed,onChange:function(){return f({type:"toggle",payload:t.id})}}),l.a.createElement("span",null,t.title)),l.a.createElement("div",{className:"icons-group"},l.a.createElement("button",{className:"waves-effect btn-flat btn-floating waves-light",onClick:function(){return s(!0)}},l.a.createElement("i",{className:"material-icons"},"edit")),l.a.createElement("button",{className:"btn-flat btn-floating",onClick:function(){return f({type:"remove",payload:t.id})}},l.a.createElement("i",{className:"material-icons red-text"},"delete"))))}var m=a(6),u=function(e){var t=e.todos;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(m.Slide,{direction:"up",triggerOnce:!0,key:e.id},l.a.createElement(s,Object.assign({},e,{todo:e})))})))},d=null!=localStorage.getItem("darkMode")&&JSON.parse(localStorage.getItem("darkMode")),p=function(){var e=Object(n.useState)(d),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("darkMode",JSON.stringify(a)),a?document.querySelector("html").setAttribute("data-theme","dark"):document.querySelector("html").removeAttribute("data-theme")}),[a]),l.a.createElement("div",{className:"switch"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return c(!a)}}),l.a.createElement("span",{className:"lever"}),"\u0422\u0451\u043c\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430"))},f=a(7),g=null==localStorage.getItem("todos")?[{id:1,title:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",completed:!1},{id:2,title:"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e completed",completed:!1},{id:3,title:"\u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 onBlur",completed:!0},{id:4,title:"\u0441\u0434\u0435\u043b\u0430\u0442\u044c sticky input header",completed:!0},{id:5,title:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 edit",completed:!0},{id:4,title:"edit feature",completed:!0}]:JSON.parse(localStorage.getItem("todos"));function E(e,t){switch(t.type){case"add":return[].concat(Object(f.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"toggle":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}));case"edit":return e.map((function(e){return e.id===t.todo.id?(e.title=t.payload,e):e}));case"remove":return e.filter((function(e){return e.id!==t.payload}));default:return e}}var b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(i).dispatch,s=function(){a&&(o({type:"add",payload:a}),c(""))};return l.a.createElement("div",{className:"form-input"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"adding",className:"validate",type:"text",value:a,minLength:"1",maxLength:"120",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s():null}}),l.a.createElement("label",null,"\u0427\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c ?"),l.a.createElement("span",{className:"helper-text","data-error":"\u0410\u043b\u043b\u043e, \u043d\u0430\u043f\u0438\u0448\u0438 \u0445\u043e\u0442\u044c \u0447\u0451\u0442\u043e!","data-success":"\u0414\u0430\u0432\u0430\u0439, \u0434\u043e\u0431\u0430\u0432\u044c \u0441\u0435\u0431\u0435 \u0435\u0449\u0451 \u043f\u0440\u043e\u0431\u043b\u0435\u043c!"})),l.a.createElement("div",{className:"icons-group"},l.a.createElement("button",{className:"btn-flat btn-floating btn-large waves-effect",onClick:s},l.a.createElement("i",{className:"material-icons"},"send"))))};function v(){var e=Object(n.useReducer)(E,g),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]),l.a.createElement(i.Provider,{value:{state:a,dispatch:c}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"\u0422\u0432\u043e\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(u,{todos:a})))}a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.fe761602.chunk.js.map