(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=a(1),u=a(9),s=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],s=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),s(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}))},o=a(4),m=a.n(o),f=a(8),p=function(){var e=Object(f.a)(m.a.mark((function e(t,a){var n,r,c,i,l,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t),r="".concat("https://api.giphy.com/v1/gifs","/search?q=").concat(n,"&limit=").concat(a,"&api_key=").concat("0CX8QOffwaN0HW4Dl5aHW4tE6qh6gqTH"),e.next=4,fetch(r);case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,l=i.data,u=l.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(e,t){var a=Object(n.useState)({data:[],loading:!0}),r=Object(l.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){p(e,t).then((function(e){i({data:e,loading:!1})}))}),[e,t]),c},g=(a(6),function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"gif-card animate__animated animate__fadeIn"},r.a.createElement("figure",{className:"gif-wrapper"},r.a.createElement("img",{className:"gif",src:a,alt:t})),r.a.createElement("h3",{className:"gif-title"},t))}),E=function(e){var t=e.category,a=e.limit,n=d(t,a),c=n.data,i=n.loading;return r.a.createElement("li",{className:"card"},r.a.createElement("h3",{className:"category-title"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading .."),r.a.createElement("ul",{className:"gif-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(n.useState)(["One Punch Man","Dragon Ball"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("ul",{className:"card-grid"},a.map((function(e){return r.a.createElement(E,{key:e,category:e,limit:10})}))))};a(16);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.03b7a664.chunk.js.map