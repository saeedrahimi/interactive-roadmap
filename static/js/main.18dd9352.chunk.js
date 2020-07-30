(this["webpackJsonproadmap-interactive"]=this["webpackJsonproadmap-interactive"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(10),d=n.n(a),r=n(3),s=n(7),l=n(1),o=n(6),m=n(2),u=n(32);var h=Object(i.memo)((function(e){var t=e.comment,n=e.id,a=e.index,d=Object(m.c)(),s=Object(i.useState)(t),l=Object(r.a)(s,2),o=l[0],u=l[1],h=Object(i.useState)(!1),b=Object(r.a)(h,2),g=b[0],O=b[1],j=Object(i.useRef)(null),f=function(){o.length&&t!==o&&d(function(e,t,n){return{type:"CHANGE_COMMENT",comment:e,id:t,index:n}}(o,n,a))},v=function(){O(!g)},P=function(e){e.current&&function(e){var t=e;t.style.height="";var n=window.getComputedStyle(t),i=t.scrollHeight-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom")));t.style.height=i+"px"}(e.current)},p=Object(i.useRef)(null);return Object(i.useEffect)((function(){p.current&&P(p)})),c.a.createElement("li",{className:"comments-row__list-item"},c.a.createElement("div",{suppressContentEditableWarning:!0,ref:p,contentEditable:!0,onInput:function(e){var t=e.currentTarget.innerHTML.replace(/&nbsp;/gi,"").trim();u(t)},onKeyDown:function(e){e.currentTarget.innerHTML.length>130&&"Backspace"!==e.key&&"Enter"!==e.key&&e.preventDefault()},className:"comments-row__comments-textarea",onFocus:function(){v()},onBlur:function(e){v(),f()},onKeyPress:function(e){!function(e){"Enter"===e.key&&f()}(e)},defaultValue:t},t),c.a.createElement("button",{ref:j,className:"comments-row__comment-action-button ".concat(g?"focus":""),type:"submit",onClick:function(){d(function(e,t){return{type:"DELETE_COMMENT",id:e,index:t}}(n,a))}},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"comments-row__svg"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("path",{d:"M0 0h24v24H0z"}),c.a.createElement("rect",{width:"14",height:"1",x:"5",y:"6",fill:"currentColor",rx:".5"}),c.a.createElement("path",{fill:"currentColor",d:"M10 9h1v8h-1V9zm3 0h1v8h-1V9z"}),c.a.createElement("path",{stroke:"currentColor",d:"M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"})))))}));var b=Object(i.memo)((function(e){var t=e.child,n=Object(m.c)();return c.a.createElement(c.a.Fragment,null,t.mainKnot?null:c.a.createElement("div",{className:"comments-row"},t.comments.length?c.a.createElement("ul",{className:"comments-row__list"},t.comments.map((function(e,n){return c.a.createElement(h,{key:Object(u.a)(),comment:e,index:n,id:t.id})}))):null,c.a.createElement("button",{className:"comments-row__add-comment-button",onClick:function(e){return i=t.id,void n(function(e,t){return{type:"ADD_COMMENT",comment:e,id:t}}("",i));var i}},c.a.createElement("div",{className:"comments-row__add-comment-svg"},c.a.createElement("svg",{width:"13",height:"13"},c.a.createElement("path",{d:"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z",fill:"black",fillRule:"evenodd"}))),c.a.createElement("div",{className:"comments-row__add-comment-text"},"Add Comment"))))})),g=function(e){return{type:"TOGGLE_EDIT_CARD_MODAL",id:e}};var O=Object(i.memo)((function(e){var t=e.child,n=Object(o.a)(e,["child"]),i=Object(m.c)(),a=function(){i(g(t.id))};return c.a.createElement("div",{className:"card ".concat(function(e){var t=[];return e.mainKnot?t.push("card--center"):e.mainKnot||t.push("card--element"),"not-recommended"!==e.recommended&&"not-recommended-none"!==e.recommended||t.push("card--not-recommended"),"option"===e.recommended&&t.push("card--option"),"not-strict"===e.recommended&&t.push("card--not-strict"),"not-recommended-option"===e.recommended&&t.push("card--not-recommended-option"),t}(t).join(" ")),id:t.id},!t.mainKnot&&"none"!==t.recommended&&"not-recommended-none"!==t.recommended&&c.a.createElement("div",{className:"card__indication-circle"},"\u2713"),t.mainKnot?c.a.createElement("div",{className:"card__inner-text",onClick:a},t.title):c.a.createElement("div",{className:"card__heading"},c.a.createElement("div",{className:"card__inner-text",onClick:a},t.title),c.a.createElement("div",{className:"card__due-date"},"26.05.2022")),c.a.createElement(b,{child:t}),t.mainKnot?null:c.a.createElement("div",{className:"card__bottom-row"},c.a.createElement("div",{className:"card__status",onClick:a},"Done"===t.status?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card__status--green-dot"}),c.a.createElement("div",{className:"card__status--status-text"},"Done")):"Pending"===t.status?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card__status--red-dot"}),c.a.createElement("div",{className:"card__status--status-text"},"Pending")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card__status--yellow-dot"}),c.a.createElement("div",{className:"card__status--status-text"},"In Progress")))),c.a.createElement("div",{className:"card__button-container"},!n.subchildren&&c.a.createElement("button",{onClick:function(){i({type:"ADD_CHILDNODE",id:t.id})},name:"Add Child",className:"card__add-circle"},c.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("title",null,"Add New Card As Child"),c.a.createElement("path",{d:"M256,24C383.9,24,488,128.1,488,256S383.9,488,256,488,24.06,383.9,24.06,256,128.1,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z",fill:"#5b5b5f"}),c.a.createElement("polygon",{points:"382 172.72 339.29 130.01 256 213.29 172.72 130.01 130.01 172.72 213.29 256 130.01 339.28 172.72 382 256 298.71 339.29 381.99 382 339.28 298.71 256 382 172.72",fill:"#5b5b5f"}))),!n.center&&c.a.createElement("button",{name:"Remove Child",className:"card__delete-circle",onClick:function(){i({type:"DELETE_CHILDNODE",id:t.id})}},c.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("title",null,"Delete This Card"),c.a.createElement("path",{d:"M256,24C383.9,24,488,128.1,488,256S383.9,488,256,488,24.06,383.9,24.06,256,128.1,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z",fill:"#5b5b5f"}),c.a.createElement("polygon",{points:"382 172.72 339.29 130.01 256 213.29 172.72 130.01 130.01 172.72 213.29 256 130.01 339.28 172.72 382 256 298.71 339.29 381.99 382 339.28 298.71 256 382 172.72",fill:"#5b5b5f"})))))}));var j=Object(i.memo)((function(e){var t=e.children,n=Object(o.a)(e,["children"]);return Array.isArray(t)&&0===t.length?null:c.a.createElement("div",{className:"section__side-elements ".concat(n.center?"section__side-elements--center-section":"")},Array.isArray(t)?t.map((function(e){return c.a.createElement(O,{key:Object(u.a)(),child:e,subchildren:n.subchildren,center:!!n.center})})):c.a.createElement(O,{child:t,subchildren:n.subchildren,center:!!n.center}))}));var f=Object(i.memo)((function(e){var t=e.sections,n=(e.index,t[0]),i=t[1],a=t[2],d=function(e){if(!i)return[];if(1===i.length)return i;var t=Math.ceil(i.length/2);return"left"===e?i.slice(0,t):i.slice(t)},r=function(e){for(var t=[],n=[],c=0;c<i.length;c++){var d=i[c].children;if(d.length)for(var r=0;r<d.length;r++)c<Math.ceil(i.length/2)?t.push(d[r].id):n.push(d[r].id)}if(!a)return[];if(1===a.length){if("left"===e&&t.indexOf(a[0].id)>=0)return a;if("right"===e&&n.indexOf(a[0].id)>=0)return a}if("left"===e){for(var s=[],l=0;l<a.length;l++)t.indexOf(a[l].id)>=0&&s.push(a[l]);return s}for(var o=[],m=0;m<a.length;m++)n.indexOf(a[m].id)>=0&&o.push(a[m]);return o};return c.a.createElement("div",{className:"section"},c.a.createElement(j,{children:r("left"),subchildren:!0}),c.a.createElement(j,{children:d("left")}),c.a.createElement(j,{children:n,center:!0}),c.a.createElement(j,{children:1===i.length?[]:d("right")}),c.a.createElement(j,{children:r("right"),subchildren:!0}))}));var v=Object(i.memo)((function(e){var t=window.pageYOffset,n=e.center?"0":"5,15",i=e.center?"4":"2.5";return c.a.createElement("svg",{style:{position:"absolute"},className:"svgs__single-svg",width:"100%"},c.a.createElement("line",{x1:e.childRect.x>e.parentRect.x&&!e.center?e.parentRect.x+e.parentRect.width-5:e.center?e.parentRect.x+e.parentRect.width/2:e.parentRect.x+5,y1:e.parentRect.y+e.parentRect.height/2+t,x2:e.childRect.x<e.parentRect.x&&!e.center?e.childRect.x+e.childRect.width:e.center?e.childRect.x+e.childRect.width/2:e.childRect.x,y2:e.childRect.y+e.childRect.height/2+t,stroke:"#2b78e4",strokeDasharray:n,strokeLinecap:"round",strokeWidth:i}))}));var P=Object(i.memo)((function(e){var t=e.ids;return Object(o.a)(e,["ids"]),c.a.createElement("div",{className:"svgs"},t.map((function(e){return function(e){var t=document.getElementById(e[0]),n=document.getElementById(e[1]);if(t&&n){var i=t.getBoundingClientRect(),a=n.getBoundingClientRect();return t.classList.contains("card--center")&&n.classList.contains("card--center")?c.a.createElement(v,{key:Object(u.a)(),center:!0,parentRect:i,childRect:a}):c.a.createElement(v,{key:Object(u.a)(),parentRect:i,childRect:a})}return null}(e)})))})),p=n(16),E=n.n(p);var y=Object(i.memo)(Object(m.b)((function(e){return{editCardModal:e.editCardModal,data:e.data}}))((function(e){var t=e.editCardModal,n=e.data,a=Object(m.c)(),d=Object(i.useState)(),s=Object(r.a)(d,2),o=s[0],u=s[1],h=Object(i.useState)(!1),b=Object(r.a)(h,2),O=b[0],j=b[1],f=Object(i.useState)(),v=Object(r.a)(f,2),P=v[0],p=v[1],E=Object(i.useRef)(null),y=Object(i.useCallback)((function(){var e=t[0];if(e.length){var i,c=Object(l.a)(n);try{for(c.s();!(i=c.n()).done;){var a=i.value;if(a.id===e)return void p(a);if(a.children){var d,r=Object(l.a)(a.children);try{for(r.s();!(d=r.n()).done;){var s=d.value;if(s.id===e)return void p(s);if(s.children){var o,m=Object(l.a)(s.children);try{for(m.s();!(o=m.n()).done;){var u=o.value;if(u.id===e)return void p(u)}}catch(h){m.e(h)}finally{m.f()}}}}catch(h){r.e(h)}finally{r.f()}}}}catch(h){c.e(h)}finally{c.f()}}}),[n,t]),_=function(){j(!O)},S=function(e){var t=e;t.style.height="";var n=window.getComputedStyle(t),i=t.scrollHeight-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom")));t.style.height=i+"px"};Object(i.useEffect)((function(){y()}),[y]),Object(i.useEffect)((function(){P&&u(P.title)}),[P]),Object(i.useEffect)((function(){var e;(e=E).current&&S(e.current)})),Object(i.useEffect)((function(){P&&M(P.status)}),[P]);var C=function(e){var t=e.currentTarget.value;"Pending"!==t&&"In-Work"!==t&&"Done"!==t||M(t)},w=Object(i.useState)(),N=Object(r.a)(w,2),x=N[0],M=N[1];return t[1]?c.a.createElement("div",{className:"edit-card-modal",onClick:function(e){return function(e){e.target instanceof Element&&e.target.classList.contains("edit-card-modal")&&a(g(""))}(e)}},c.a.createElement("div",{className:"edit-card-modal__wrapper"},c.a.createElement("div",{className:"edit-card-modal__edit-title-wrapper"},c.a.createElement("h2",{className:"edit-card-modal__heading"},"Edit Title"),c.a.createElement("textarea",{ref:E,onChange:function(e){u(e.target.value),function(e){S(e.target)}(e)},maxLength:100,value:o,onFocus:_,onBlur:function(e){_()},className:"edit-card-modal__inner-text"})),P&&!P.mainKnot&&c.a.createElement("div",{className:"edit-card-modal__edit-title-wrapper"},c.a.createElement("h2",{className:"edit-card-modal__heading"},"Edit Status"),c.a.createElement("div",{className:"edit-card-modal__choice"},c.a.createElement("form",null,c.a.createElement("div",{className:"radio"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",value:"Pending",checked:"Pending"===x,onChange:C}),"Pending")),c.a.createElement("div",{className:"radio"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",value:"In-Work",onChange:C,checked:"In-Work"===x}),"In Progress")),c.a.createElement("div",{className:"radio"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",value:"Done",onChange:C,checked:"Done"===x}),"Done"))))),c.a.createElement("button",{className:"edit-card-modal__close-button",onClick:function(){return a(g(""))}},"CLOSE"),c.a.createElement("button",{className:"edit-card-modal__save-button",onClick:function(){P&&o&&o.length&&o!==P.title&&a({type:"SET_CARD_HEADING",id:P.id,heading:o}),x&&function(e){P&&a(function(e,t){return{type:"SET_STATUS",status:e,id:t}}(e,P.id))}(x),a(g(""))}},"SAVE"))):null}))),_=function(e){for(var t=[],n="",i=0;i<e.length;i++){var c=e[i],a=c.id;n.length&&t.push([n,a]),n=a;var d,r=Object(l.a)(c.children);try{for(r.s();!(d=r.n()).done;){var s=d.value,o=s.id;if(t.push([a,o]),s.children){var m,u=Object(l.a)(s.children);try{for(u.s();!(m=u.n()).done;){var h=m.value;t.push([o,h.id])}}catch(b){u.e(b)}finally{u.f()}}}}catch(b){r.e(b)}finally{r.f()}}return t};var S=Object(i.memo)((function(e){var t=e.data,n=Object(i.useCallback)((function(){var e,n={},i=Object(l.a)(t);try{for(i.s();!(e=i.n()).done;){var c,a=e.value,d=a,r=[],o=[],m=Object(l.a)(a.children);try{for(m.s();!(c=m.n()).done;){var u=c.value;u.children&&o.push.apply(o,Object(s.a)(u.children)),r.push(u)}}catch(h){m.e(h)}finally{m.f()}n[a.title]=[d,r,o]}}catch(h){i.e(h)}finally{i.f()}return n}),[t]),a=Object(i.useState)([]),d=Object(r.a)(a,2),o=d[0],m=d[1],h=Object(i.useState)({}),b=Object(r.a)(h,2),g=b[0],O=b[1];Object(i.useEffect)((function(){O(n())}),[n]),Object(i.useEffect)((function(){m(_(t))}),[t,g]);var j=Object(i.useState)(),v=Object(r.a)(j,2),p=v[0],S=v[1];return c.a.createElement("div",{className:"map"},Object.keys(g).map((function(e,t){return c.a.createElement(f,{index:t,key:Object(u.a)(),sections:g[e]})})),c.a.createElement(E.a,{onResize:function(e){e.width!==p&&(S(e.width),m(_(t)))}}),c.a.createElement(P,{ids:o}),c.a.createElement(y,null))}));n(30);var C=Object(m.b)((function(e){return{data:e.data,inView:e.inView}}))((function(e){var t=e.data;return c.a.createElement("div",{className:"App"},c.a.createElement(S,{data:t}))})),w=n(4),N=n(17),x=n(18),M=[{title:"Front-end",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[]},{title:"Internet",status:"Pending",id:Object(u.a)(),importance:10,goalDate:"20.01.2022",comments:["this is hard"],resources:["http://www.youtube.com"],mainKnot:!0,children:[{title:"How does the internet work?",children:[],id:Object(u.a)(),status:"Pending",comments:[]},{title:"What is Domain Name?",children:[],comments:["Redo this","whats going on here","this is a comment"],id:Object(u.a)(),status:"Pending"},{title:"What is hosting?",children:[],id:Object(u.a)(),status:"Pending",comments:[]},{title:"DNS and how it works?",children:[],id:Object(u.a)(),status:"Pending",comments:[]},{title:"What is HTTP?",children:[],id:Object(u.a)(),status:"Pending",comments:[]},{title:"Browsers and how they work?",children:[],id:Object(u.a)(),status:"Pending",comments:[]}]},{title:"HTML",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Learn the basics",id:Object(u.a)(),children:[],status:"Pending",comments:[]},{title:"Writing Semantic HTML",id:Object(u.a)(),recommended:"not-strict",children:[],status:"Pending",comments:[]},{title:"Forms and Validations",id:Object(u.a)(),children:[],status:"Pending",comments:[]},{title:"Conventions and Best Practices",id:Object(u.a)(),children:[],status:"Pending",comments:[]},{title:"Accessibility",id:Object(u.a)(),children:[],recommended:"not-strict",status:"Pending",comments:[]},{title:"SEO Basics",id:Object(u.a)(),children:[],status:"Pending",recommended:"not-strict",comments:[]}]},{title:"CSS",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Learn the basics",id:Object(u.a)(),children:[],comments:[],status:"Pending"},{title:"Making Layouts",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Responsive design and Media Queries",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"Floats",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Positioning",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Display",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Box Model",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"CSS Grid",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Flex Box",id:Object(u.a)(),status:"Pending",comments:[],children:[]}]}]},{title:"Javascript",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Syntax and Basic Constructs",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Learn DOM Manipulation",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Learn Fetch API / Ajax (XHR)",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"ES6+ and modular Javascript",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Understand these concepts",status:"Pending",id:Object(u.a)(),comments:[],children:[{title:"Hoisting",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Event Bubbling",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Scope",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Prototype",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Shadow DOM",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"strict",id:Object(u.a)(),status:"Pending",comments:[],children:[]}]}]},{title:"Version Control Systems",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Repo hosting services",id:Object(u.a)(),recommended:"none",status:"Pending",comments:[],children:[{title:"GitHub",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"GitLab",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-option"},{title:"Bitbucket",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-option"}]},{title:"Basic Usage of Git",id:Object(u.a)(),status:"Pending",children:[],comments:[]}]},{title:"Web Security Knowledge",id:Object(u.a)(),mainKnot:!0,recommended:"not-strict",status:"Pending",comments:[],children:[{title:"HTTPS",id:Object(u.a)(),children:[],comments:[],status:"Pending",recommended:"not-strict"},{title:"Content Security Policy",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"CORS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"OWASP Security Risks",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"}]},{title:"Package Managers",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"npm",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"yarn",id:Object(u.a)(),status:"Pending",comments:[],children:[]}]},{title:"CSS Architecture",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"BEM",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"OOCSS",id:Object(u.a)(),children:[],comments:[],status:"Pending",recommended:"not-recommended-none"},{title:"SMACSS",id:Object(u.a)(),status:"Pending",children:[],comments:[],recommended:"not-recommended-none"}]},{title:"CSS Preprocessors",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Sass",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"PostCSS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"Less",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Build Tools",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Linters and Formatters",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"Prettier",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"ESLint",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"StandardJS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Task Runners",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"npm scripts",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Gulp",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Module Bundlers",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"Webpack",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Rollup",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Parcel",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]}]},{title:"Pick a Framework",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"React.js",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"Redux",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"MobX",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Angular",id:Object(u.a)(),recommended:"option",status:"Pending",comments:[],children:[{title:"RxJS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"NgRx",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Vue.js",id:Object(u.a)(),recommended:"option",status:"Pending",comments:[],children:[{title:"VueX",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]}]},{title:"Modern CSS",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Styled Components",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"CSS Modules",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Styled JSX",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Emotion",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Radium",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"},{title:"Glamorous",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Web Components",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],recommended:"not-strict",children:[{title:"HTML Templates",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"Custom Elements",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"Shadow DOM",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"}]},{title:"CSS Frameworks",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Reactstrap",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Material UI",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Tailwind CSS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Chakra UI",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Bootstrap",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Materialize CSS",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Bulma",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Testing your Apps",id:Object(u.a)(),mainKnot:!0,status:"Pending",comments:[],children:[{title:"Jest",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"react-testing-library",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Cypress",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Enzyme",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Mocha",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"},{title:"Chai",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"},{title:"Ava",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"},{title:"Jasmine",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Type Checkers",id:Object(u.a)(),mainKnot:!0,recommended:"not-strict",status:"Pending",comments:[],children:[{title:"TypeScript",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"Flow",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Progressive Web Apps",id:Object(u.a)(),mainKnot:!0,status:"Pending",recommended:"not-strict",comments:[],children:[{title:"Calculating, Measuring, improving Performance",id:Object(u.a)(),recommended:"not-strict",status:"Pending",comments:[],children:[{title:"Storage",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Web Sockets",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Service Workers",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Location",id:Object(u.a)(),comments:[],status:"Pending",children:[]},{title:"Notifications",id:Object(u.a)(),comments:[],status:"Pending",children:[]},{title:"Device Orientation",id:Object(u.a)(),comments:[],status:"Pending",children:[]},{title:"Payments",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Credentials",id:Object(u.a)(),status:"Pending",children:[],comments:[]}]},{title:"Web API's used in PWAs",id:Object(u.a)(),recommended:"not-strict",status:"Pending",comments:[],children:[{title:"PRPL Pattern",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"RAIL Model",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Performance Metrics",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Using Lighthouse",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Using DevTools",id:Object(u.a)(),status:"Pending",comments:[],children:[]}]}]},{title:"Server Side Rendering",id:Object(u.a)(),mainKnot:!0,recommended:"not-strict",status:"Pending",comments:[],children:[{title:"React.js",id:Object(u.a)(),status:"Pending",comments:[],children:[{title:"Next.js",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"After.js",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Angular",id:Object(u.a)(),recommended:"option",status:"Pending",comments:[],children:[{title:"Universal",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Vue.js",id:Object(u.a)(),recommended:"option",status:"Pending",comments:[],children:[{title:"Nuxt.js",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]}]},{title:"GraphQL",id:Object(u.a)(),mainKnot:!0,status:"Pending",recommended:"not-strict",comments:[],children:[{title:"Apollo",id:Object(u.a)(),status:"Pending",children:[],comments:[]},{title:"Relay Modern",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Static Site Generators",id:Object(u.a)(),mainKnot:!0,status:"Pending",recommended:"not-strict",comments:[],children:[{title:"Next.js",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"GatsbyJS",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Nuxt.js",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Vuepress",id:Object(u.a)(),children:[],recommended:"option",comments:[],status:"Pending"},{title:"Jekyll",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"},{title:"Hugo",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"option"}]},{title:"Mobile Applications",id:Object(u.a)(),mainKnot:!0,status:"Pending",recommended:"not-strict",comments:[],children:[{title:"React Native",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Native Script",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Flutter",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Ionic",id:Object(u.a)(),status:"Pending",comments:[],children:[]}]},{title:"Desktop Applications",id:Object(u.a)(),mainKnot:!0,status:"Pending",recommended:"not-strict",comments:[],children:[{title:"Electron",id:Object(u.a)(),status:"Pending",comments:[],children:[]},{title:"Carlo",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"},{title:"Proton Native",id:Object(u.a)(),children:[],status:"Pending",comments:[],recommended:"not-recommended-none"}]},{title:"Web Assembly",id:Object(u.a)(),mainKnot:!0,children:[],status:"Pending",comments:[],recommended:"not-strict"},{title:"Keep Learning",id:Object(u.a)(),mainKnot:!0,children:[],comments:[],status:"Pending"}],k=Object(w.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n=Object(s.a)(e);switch(t.type){case"SET_STATUS":var i,c=Object(l.a)(n);try{for(c.s();!(i=c.n()).done;){var a=i.value;if(a.children){var d,r=Object(l.a)(a.children);try{for(r.s();!(d=r.n()).done;){var o=d.value;if(o.id===t.id)return o.status=t.status,n;if(o.children){var m,h=Object(l.a)(o.children);try{for(h.s();!(m=h.n()).done;){var b=m.value;if(b.id===t.id)return b.status=t.status,n}}catch(oe){h.e(oe)}finally{h.f()}}}}catch(oe){r.e(oe)}finally{r.f()}}}}catch(oe){c.e(oe)}finally{c.f()}return n;case"SET_CARD_HEADING":var g,O=Object(l.a)(n);try{for(O.s();!(g=O.n()).done;){var j=g.value;if(j.id===t.id)return j.title=t.heading,n;if(j.children){var f,v=Object(l.a)(j.children);try{for(v.s();!(f=v.n()).done;){var P=f.value;if(P.id===t.id)return P.title=t.heading,n;if(P.children){var p,E=Object(l.a)(P.children);try{for(E.s();!(p=E.n()).done;){var y=p.value;if(y.id===t.id)return y.title=t.heading,n}}catch(oe){E.e(oe)}finally{E.f()}}}}catch(oe){v.e(oe)}finally{v.f()}}}}catch(oe){O.e(oe)}finally{O.f()}return n;case"DELETE_CHILDNODE":var _,S=Object(l.a)(n);try{for(S.s();!(_=S.n()).done;){var C=_.value;if(C.children)for(var w=0;w<C.children.length;w++){if(C.children[w].id===t.id)return C.children.splice(w,1),n;if(C.children[w].children)for(var N=0;N<C.children[w].children.length;N++)if(C.children[w].children[N].id===t.id)return C.children[w].children.splice(N,1),n}}}catch(oe){S.e(oe)}finally{S.f()}return n;case"ADD_CHILDNODE":var x,k={title:"Your title",children:[],id:Object(u.a)(),status:"Pending",comments:[]},R=Object(l.a)(n);try{for(R.s();!(x=R.n()).done;){var D=x.value;if(D.id===t.id)return D.children=[].concat(Object(s.a)(D.children),[k]),n;if(D.children){var A,T=Object(l.a)(D.children);try{for(T.s();!(A=T.n()).done;){var L=A.value;if(L.id===t.id)return L.children=[].concat(Object(s.a)(L.children),[k]),n}}catch(oe){T.e(oe)}finally{T.f()}}}}catch(oe){R.e(oe)}finally{R.f()}return n;case"DELETE_COMMENT":var K,I=Object(l.a)(n);try{for(I.s();!(K=I.n()).done;){var H,B=K.value,V=Object(l.a)(B.children);try{for(V.s();!(H=V.n()).done;){var W=H.value;if(W.id===t.id)return W.comments.splice(t.index,1),n;if(W.children){var G,F=Object(l.a)(W.children);try{for(F.s();!(G=F.n()).done;){var J=G.value;if(J.id===t.id)return J.comments.splice(t.index,1),n}}catch(oe){F.e(oe)}finally{F.f()}}}}catch(oe){V.e(oe)}finally{V.f()}}}catch(oe){I.e(oe)}finally{I.f()}return n;case"ADD_COMMENT":var z,U=Object(l.a)(n);try{for(U.s();!(z=U.n()).done;){var X=z.value;if(X.children){var Z,Q=Object(l.a)(X.children);try{for(Q.s();!(Z=Q.n()).done;){var Y=Z.value;if(Y.id===t.id){if(Y.comments.length>0&&!Y.comments[Y.comments.length-1])break;return Y.comments.push(t.comment),n}if(Y.children){var q,$=Object(l.a)(Y.children);try{for($.s();!(q=$.n()).done;){var ee=q.value;if(ee.id===t.id){if(ee.comments.length>0&&!ee.comments[ee.comments.length-1])break;return ee.comments.push(t.comment),n}}}catch(oe){$.e(oe)}finally{$.f()}}}}catch(oe){Q.e(oe)}finally{Q.f()}}}}catch(oe){U.e(oe)}finally{U.f()}return n;case"CHANGE_COMMENT":var te,ne=Object(l.a)(n);try{for(ne.s();!(te=ne.n()).done;){var ie=te.value;if(ie.children){var ce,ae=Object(l.a)(ie.children);try{for(ae.s();!(ce=ae.n()).done;){var de=ce.value;if(de.id===t.id)return de.comments[t.index]=t.comment,n;if(de.children){var re,se=Object(l.a)(de.children);try{for(se.s();!(re=se.n()).done;){var le=re.value;if(le.id===t.id)return le.comments[t.index]=t.comment,n}}catch(oe){se.e(oe)}finally{se.f()}}}}catch(oe){ae.e(oe)}finally{ae.f()}}}}catch(oe){ne.e(oe)}finally{ne.f()}return n;default:return e}},inView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INVIEW_ELEMENT":var n=Object.assign({},e);return n[t.inviewElement[0]]=[t.inviewElement[1],t.inviewElement[2]],n;default:return e}},editCardModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["",!1],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_EDIT_CARD_MODAL":var n=t.id;return[n,!e[1]];default:return e}}}),R=[x.a],D=Object(w.createStore)(k,{},Object(N.composeWithDevTools)(w.applyMiddleware.apply(void 0,R)));d.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:D},c.a.createElement(C,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.18dd9352.chunk.js.map