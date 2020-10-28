(this["webpackJsonpmy-unsplash-master"]=this["webpackJsonpmy-unsplash-master"]||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(8),o=a.n(r),i=a(3),l=a(6),d=a(2),j=a(7),u=a(5),b=a(11),p=a.n(b),O="http://localhost:3001/photos/",h=function(e){p.a.delete("".concat(O,"/").concat(e))},m={list:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PHOTOS":return{list:t.payload};case"ADD_PHOTO":var a=Object(j.a)(e.list);return a.push(t.payload),Object(d.a)(Object(d.a)({},e),{},{list:a});case"REMOVE_PHOTO":var c=e.list,n=c.findIndex((function(e){return e.id===t.payload.id}));return c[n].password===t.payload.password?(h(t.payload.id),c.splice(n,1),Object(d.a)(Object(d.a)({},e),{},{list:c})):e;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{str:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE":return Object(d.a)(Object(d.a)({},e),{},{str:t.payload});default:return e}},x=Object(l.combineReducers)({photos:f,search:v,modeShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"MAIN",tag:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MODE":return Object(d.a)(Object(d.a)({},e),{},{mode:t.payload});case"CHANGE_TAG":return Object(d.a)(Object(d.a)({},e),{},{tag:t.payload});default:return e}}}),y=a(26),N=Object(l.createStore)(x,Object(y.composeWithDevTools)()),w=function(e){return{type:"CHANGE_MODE",payload:e}},g=(a(56),a(13));function E(e){var t=e.contents,a=e.color,n=e.size,s=e.type,r=e.data,o="btn--".concat(a),l="btn--".concat(n),d=Object(i.c)((function(e){return e.modeShow.mode})),j=Object(i.b)(),u=function(e){if(e.preventDefault(),"add"!==s)if("cancel"!==s){if("delete"===s){if("DELETE"!==d){var t={type:"CHANGE_TAG",payload:r};j(t);var a=w("DELETE");return void j(a)}if(""===(null===r||void 0===r?void 0:r.password))return void alert("error: enter password");var c=(o=r.id,i=r.password,{type:"REMOVE_PHOTO",payload:{id:o,password:i}});j(c);var n=w("MAIN");j(n)}var o,i}else{var l=w("MAIN");j(l)}else{var u=w("ADD");j(u)}};return Object(c.jsx)("div",{children:"submit"===s&&Object(c.jsx)("button",{className:g("btn",o,l),onSubmit:u,children:t})||Object(c.jsx)("button",{className:g("btn",o,l),onClick:u,children:t})})}a(57);function D(e){var t=e.name,a=e.type,n=e.placeholder,s=e.data,r=e.setData;return Object(c.jsx)("div",{className:"input-container",children:Object(c.jsx)("input",{autoComplete:"off",name:t,className:"entry",type:a,placeholder:n,onBlur:function(e){var a;switch(t){case"label":a=Object(d.a)(Object(d.a)({},s),{},{label:e.target.value});break;case"url":a=Object(d.a)(Object(d.a)({},s),{},{url:e.target.value});break;case"password":a=Object(d.a)(Object(d.a)({},s),{},{password:e.target.value})}JSON.stringify(s)!==JSON.stringify(a)&&r(a)},required:!0})})}a(58);var S=a(13);function A(e){var t=e.type,a=Object(i.c)((function(e){return e.photos.list})),s=Object(i.c)((function(e){return e.modeShow.tag})),r=Object(i.b)(),o={id:null!==s&&void 0!==s?s:0,label:"",url:"",password:"",type:t},l=Object(n.useState)(o),d=Object(u.a)(l,2),b=d[0],h=d[1];return Object(c.jsxs)("div",{className:S("form",t),children:["add"===t&&Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,c={id:Math.max.apply(Math,Object(j.a)(a.map((function(e){return e.id}))))+1,label:b.label,url:b.url,password:b.password};t=c,p.a.post(O,{id:t.id,label:t.label,url:t.url,password:t.password});var n=function(e){return{type:"ADD_PHOTO",payload:e}}(c);r(n);var s=w("MAIN");r(s)},children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h3",{children:"Add a new photo"})}),Object(c.jsxs)("div",{className:"form-body",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Label"}),Object(c.jsx)(D,{name:"label",type:"text",placeholder:"Enter photo name",data:b,setData:h})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Photo URL"}),Object(c.jsx)(D,{name:"url",type:"url",placeholder:"Enter photo url",data:b,setData:h})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)(D,{name:"password",type:"password",placeholder:"Enter password photo",data:b,setData:h})]})]}),Object(c.jsxs)("div",{className:"form-button",children:[Object(c.jsx)(E,{contents:"Submit",size:"medium",color:"success",type:"submit",data:b}),Object(c.jsx)(E,{contents:"Cancel",size:"medium",type:"cancel"})]})]}),"delete"===t&&Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h3",{children:"Are you sure ?"})}),Object(c.jsx)("div",{className:"form-body",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)(D,{name:"password",type:"password",placeholder:"Enter password photo",data:b,setData:h})]})}),Object(c.jsxs)("div",{className:"form-button",children:[Object(c.jsx)(E,{contents:"Delete",size:"medium",color:"danger",type:"delete",data:b,setData:h}),Object(c.jsx)(E,{contents:"Cancel",size:"medium",type:"cancel"})]})]})]})}var _=a.p+"static/media/my_unsplash_logo.c888ca72.svg";function C(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function T(){var e=Object(n.useState)(C()),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){c(C())}return console.log("%c WindowDimensions did mount","color: red"),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),console.log("%c WindowDimensions un mount","color: red")}}),[]);var s=Math.floor(a.width/336);return{columns:0===s?1:s,width:a.width}}a(59);var L=a(13);function H(){var e=T().width,t=Object(n.useState)(!1),a=Object(u.a)(t,2),s=a[0],r=a[1],o=Object(i.b)();return Object(c.jsx)("div",{className:L("background",{popup:s}),onClick:function(t){e<670&&s&&(t.target.classList.contains("input--entry")||t.target.classList.contains("input")||r(!1))},children:Object(c.jsxs)("div",{className:L("input"),onClick:function(t){e<670&&!s&&r(!0)},children:[Object(c.jsx)("i",{className:"input--icon fas fa-search"}),Object(c.jsx)("input",{className:"input--entry",type:"text",placeholder:"Search by name",onKeyPress:function(e){if("Enter"===e.key){var t={type:"CHANGE",payload:e.target.value};o(t)}}})]})})}a(60);function M(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("img",{className:"header--logo",src:_,alt:"logo"}),Object(c.jsx)("div",{className:"header--search",children:Object(c.jsx)(H,{})})]}),Object(c.jsx)("div",{className:"header--btn",children:Object(c.jsx)(E,{contents:"Add photo",color:"success",size:"medium",type:"add"})})]})}a(61);var P=a(27);function z(e){var t=e.photo;return Object(c.jsxs)("div",{className:"photo",children:[Object(c.jsx)("div",{className:"photo__vignette"}),Object(c.jsx)("span",{className:"photo__label",children:t.label}),Object(c.jsx)(P.LazyLoadImage,{className:"photo__content",src:t.url,alt:t.label,effect:"blur"}),Object(c.jsx)("div",{className:"photo--btn",children:Object(c.jsx)(E,{color:"danger",contents:"Delete",type:"delete",size:"small",data:t.id})})]})}a(62);var k=function(){var e=Object(i.c)((function(e){return e.photos.list})),t=Object(i.c)((function(e){return e.search.str})),a=Object(i.c)((function(e){return e.modeShow.mode})),s=Object(i.b)(),r=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1];return p.a.get(O).then((function(e){c(JSON.stringify(e.data))})).catch((function(e){return console.log(e)})),a}();Object(n.useEffect)((function(){if(""!==r){var e={type:"SET_PHOTOS",payload:JSON.parse(r)};s(e)}}),[r]);for(var o=T().columns,l=[],d=e.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())})),b=Math.ceil(d.length/o),h=0;h<o;h++){var m=d.splice(0,b),f=Object(c.jsx)("div",{children:m.map((function(e){return Object(c.jsx)(z,{photo:e},e.id)}))},h);l=[].concat(Object(j.a)(l),[f])}return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(M,{})}),Object(c.jsx)("div",{className:"photo-list",children:l.map((function(e){return e}))}),"ADD"===a&&Object(c.jsx)("div",{className:"form-container",children:Object(c.jsx)("div",{className:"form-content",children:Object(c.jsx)(A,{type:"add"})})}),"DELETE"===a&&Object(c.jsx)("div",{className:"form-container",children:Object(c.jsx)("div",{className:"form-content",children:Object(c.jsx)(A,{type:"delete"})})})]})},G=(a(63),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))});o.a.render(Object(c.jsx)(i.a,{store:N,children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})})}),document.getElementById("root")),G()}},[[64,1,2]]]);
//# sourceMappingURL=main.7f994a27.chunk.js.map