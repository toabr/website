(this["webpackJsonptoabr.de"]=this["webpackJsonptoabr.de"]||[]).push([[0],{290:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(45),s=a.n(n),r=(a(61),a(10)),i=a(7),l=a(18),o=a(9),d=(a(62),a(1)),j=function(){var e=(new Date).getFullYear();return Object(d.jsxs)("div",{id:"about",className:"d-flex flex-column justify-content-center text-light p-3",children:[Object(d.jsx)("div",{className:"title display-5 mb-3",children:"About me"}),Object(d.jsx)("div",{className:"border-top border-3 w-50 mb-3"}),Object(d.jsx)("p",{className:"description ps-2",children:"Als gelernter Mediengestalter \xfcbe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verst\xe4rktes Interesse gilt dabei aber der Webentwicklung."}),Object(d.jsx)("div",{className:"position-fixed bottom-0",children:Object(d.jsxs)("p",{className:"",children:[Object(d.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(d.jsx)("span",{className:"",children:"toabr.de"}),Object(d.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]})})]})},u=a(299),b=a(11),h=function(){var e=(new Date).getFullYear();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("footer",{id:"footer",className:"container",children:Object(d.jsxs)("section",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-5",children:[Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(d.jsx)("span",{className:"text-secondary",children:"to"}),"abr.de",Object(d.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]}),Object(d.jsxs)(u.a,{className:"justify-content-end",children:[Object(d.jsx)(b.LinkContainer,{to:"/",children:Object(d.jsx)(u.a.Link,{className:"text-muted",children:"Home"})}),Object(d.jsx)(b.LinkContainer,{to:"/wiki",children:Object(d.jsx)(u.a.Link,{className:"text-muted",children:"Wiki"})}),Object(d.jsx)(u.a.Link,{href:"/home#contact",className:"text-muted",children:"Contact"})]})]})})})},m=a(293),x=(a(73),a(292)),f=a(33),O=a(32),v=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(a),r=Object(c.useRef)(null),l=Object(c.useRef)(210);Object(c.useEffect)((function(){var e=function(e){var t=s.current;return!t&&e.composedPath().includes(r.current)?(document.body.classList.add("open","overflow-hidden"),void o(!0)):t?(document.body.classList.remove("open","overflow-hidden"),void o(!1)):void 0};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var o=function(e){s.current=e,n(e)};return Object(d.jsx)(x.a,{id:"reveal-btn",ref:r,variant:"link",className:"fs-5 rounded-circle",children:Object(d.jsx)(O.a,{icon:f.b,style:{transform:"rotate(".concat(l.current,"deg)"),transition:"all .1s linear .3s"}})})};function p(e,t){var a=Object(c.useState)((function(){return JSON.parse(localStorage.getItem(e))||t})),n=Object(i.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,r]}var g=Object(c.createContext)({});function N(e){var t=e.children,a=p("theme","light"),c=Object(i.a)(a,2),n=c[0],s=c[1];return Object(d.jsx)(g.Provider,{value:[n,function(e){console.log("set themeMode:",e),s(e)}],children:t})}function y(){return Object(c.useContext)(g)}function w(){var e=y(),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){document.documentElement.setAttribute("data-theme",a),s.current.checked="dark"===a}),[a]),Object(d.jsx)("div",{className:"form-switch",children:Object(d.jsx)("input",{ref:s,className:"form-check form-check-input rounded-pill",type:"checkbox",id:"theme-switch",onClick:function(){n("light"===a?"dark":"light")}})})}var k=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2);t[0],t[1];return Object(d.jsx)(m.a,{fluid:!0,className:"pt-2",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(d.jsx)(v,{}),Object(d.jsx)(w,{})]})})},_=function(e){var t=e.children;return Object(d.jsxs)(l.BrowserRouter,{children:[Object(d.jsxs)("div",{id:"page",className:"min-vh-100 d-flex flex-column",children:[Object(d.jsx)(k,{}),Object(d.jsx)("main",{children:t}),Object(d.jsx)(h,{})]}),Object(d.jsx)(j,{})]})},L=a(36),E=a(297),C=a(52),T=a(42),S=a.n(T),I=a(48);function R(e){var t=Object(c.useRef)({}),a={status:"idle",error:null,data:[]},n=Object(c.useReducer)((function(e,t){switch(t.type){case"FETCHING":return Object(r.a)(Object(r.a)({},a),{},{status:"fetching"});case"FETCHED":return Object(r.a)(Object(r.a)({},a),{},{status:"fetched",data:t.payload});case"FETCH_ERROR":return Object(r.a)(Object(r.a)({},a),{},{status:"error",error:t.payload});default:return e}}),a),s=Object(i.a)(n,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){var a=!1;if(e)return function(){var c=Object(I.a)(S.a.mark((function c(){var n,s,r;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o({type:"FETCHING"}),!t.current[e]){c.next=7;break}console.log("cached",e),n=t.current[e],o({type:"FETCHED",payload:n}),c.next=26;break;case 7:return c.prev=7,console.log("fetching",e),c.next=11,fetch(e);case 11:return s=c.sent,c.next=14,s.json();case 14:if(r=c.sent,t.current[e]=r,!a){c.next=18;break}return c.abrupt("return");case 18:o({type:"FETCHED",payload:r}),c.next=26;break;case 21:if(c.prev=21,c.t0=c.catch(7),!a){c.next=25;break}return c.abrupt("return");case 25:o({type:"FETCH_ERROR",payload:c.t0.message});case 26:case"end":return c.stop()}}),c,null,[[7,21]])})));return function(){return c.apply(this,arguments)}}()(),function(){a=!0}}),[e]),l}var H=function(e){return new Date(e).toLocaleDateString()};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,a){var c=t.find((function(e){return e.tid==a.target_id}));return"undefined"!==typeof c?[].concat(Object(L.a)(e),[Object(r.a)(Object(r.a)({},a),{},{title:c.title})]):e}),[])}var F=function(e){var t=e.nid,a=void 0===t?"":t,c=e.type,n=void 0===c?"All":c,s=e.tags,r=void 0===s?[]:s,i=e.query,l=void 0===i?"":i,o=e.by,d=void 0===o?"created":o,j=e.order,u=void 0===j?"DESC":j,b=e.items,h=void 0===b?10:b,m=e.page,x="".concat("https://api.toabr.de","/rest/v2/node?");return a&&(x+="_nid=".concat(a,"&")),n&&(x+="_type=".concat(n,"&")),r&&(x+="_tags=".concat(r.toString(),"&")),l&&(x+="_q=".concat(l,"&")),d&&(x+="sort_by=".concat(d,"&")),u&&(x+="sort_order=".concat(u,"&")),h&&(x+="items_per_page=".concat(h,"&")),m&&(x+="page=".concat(m,"&")),x},z=a(49),P=function(e){var t=e.title;return Object(d.jsx)(z.a,{children:Object(d.jsx)("title",{children:t})})},W=(a(78),function(){var e=Object(c.useRef)(null),t=Object(c.useState)({}),a=Object(i.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight,a=r((function(a){s({xVal:-1/(t/2)*a.clientY+1,yVal:1/(e/2)*a.clientX-1,transX:16/e*a.clientX-8,transY:10/t*a.clientY-3,transZ:60/t*a.clientY-35})}),300);return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}}),[]),Object(c.useLayoutEffect)((function(){e.current.style.transform="\n      perspective(1000px)\n      translate3d(".concat(n.transX,"px,").concat(n.transY,"px,").concat(n.transZ,"px)\n      rotate3d(").concat(n.xVal,",").concat(n.yVal,",0,2deg)\n      ")}),[n]);var r=function(e,t){var a=!0;return function(c){a&&(a=!1,setTimeout((function(){a=!0}),t),e(c))}};return Object(d.jsxs)("div",{className:"hero rounded-circle mx-auto mt-0",children:[Object(d.jsx)("div",{className:"hero__back hero__back--static"}),Object(d.jsx)("div",{ref:e,className:"hero__back hero__back--mover"})]})}),A=a(298),B=a(294),M=a(295),U=a(296),q=a(20),Y=function(e){var t=e.data,a=void 0===t?[]:t,c=e.options,n=void 0===c?{}:c,s=e.more,r=e.children,l=y(),o="light"===Object(i.a)(l,1)[0]?"":"outline-";return Object(d.jsxs)("div",{className:"d-flex flex-wrap gap-2 ".concat(n.className),children:[a.map((function(e,t){var a=e.style?e.style:"primary",c=e.active?"active":"",s=e.className?e.className:"";return Object(d.jsxs)(x.a,{as:n.as,size:n.size,onClick:n.onClick,variant:o+a,className:"".concat(c," ").concat(s," text-capitalize font-monospace flex-fill"),"data-title":e.title,"data-id":e.id,href:e.href,children:[e.faIcon&&Object(d.jsx)(O.a,{icon:e.faIcon,className:"me-2"}),e.title]},e.id)})),s&&Object(d.jsx)(b.LinkContainer,{to:s.link||"#",children:Object(d.jsx)(x.a,{variant:"".concat(o,"secondary"),className:"font-monospace flex-fill",children:s.title||"..."})}),r]})},J=[{title:"linux",id:["linux"],faIcon:q.d},{title:"drupal",id:["drupal"],faIcon:q.b},{title:"es6",id:["javascript"],faIcon:q.c},{title:"scss",id:["scss"],faIcon:q.f},{title:"react",id:["react"],faIcon:q.e},{title:"bash",id:["bash"],faIcon:f.a},{title:"docker",id:["docker"],faIcon:q.a}];var V=function(e){var t=e.onClick,a=e.activeTag,c=J.map((function(e){var t=e.id[0]===a;return Object(r.a)(Object(r.a)({},e),{},{active:t})}));return Object(d.jsx)(Y,{data:c,options:{onClick:function(e){return t(e.target.dataset.id)},className:"my-4"},more:{link:"/wiki"}})},X=a(301),G=(a(79),function(e){var t=e.nodes,a=void 0===t?[]:t,c=p("tagList",[]),n=Object(i.a)(c,1)[0],s=a.map((function(e,t){var a=D(e.field_tags,n);return Object(d.jsx)(b.LinkContainer,{to:"node/".concat(e.nid[0].value),children:Object(d.jsx)(X.a.Item,{action:"true",className:"text-body bg-body fw-bolder shadow pe-2",children:Object(d.jsxs)("div",{className:"d-sm-flex justify-content-between flex-wrap align-items-center border-1 mt-1",children:[Object(d.jsx)("small",{className:"date d-sm-block pe-2 text-muted fw-light",children:H(e.changed[0].value)}),Object(d.jsx)("div",{className:"title flex-fill",children:e.title[0].value}),Object(d.jsx)("div",{className:"",children:a.map((function(e){return Object(d.jsxs)("small",{style:{fontSize:".75rem"},className:"bg-accent-2 fw-lighter ms-1 p-1 rounded-pill text-highlight",children:["#",e.title]},e.target_id)}))})]})})},t)}));return Object(d.jsx)("div",{className:"title-list",children:Object(d.jsxs)(X.a,{variant:"flush",className:"text-start",children:[!a.length||s,a.length>5&&Object(d.jsx)(X.a.Item,{action:!0,className:"text-body bg-body text-center",children:"more..."})]})})}),Z=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],j=R((a||l)&&F({type:"article",query:a,tags:l,items:5})),u=j.status,b=j.data,h=j.error,m=b,f=Object(c.useRef)(null),O=!1;"error"===u&&console.error(h),"fetching"===u&&(f.current.readOnly=!0,O=!0),"fetched"===u&&(f.current.readOnly=!1,O=!1);return Object(d.jsxs)("div",{id:"search",children:[Object(d.jsx)(A.a,{onSubmit:function(e){return function(e){e.preventDefault();var t=f.current.value;o(""),""!==t&&n(t)}(e)},className:"",children:Object(d.jsxs)(B.a,{className:"shadow-slim",size:"lg",children:[Object(d.jsx)(B.a.Text,{className:"bg-accent-1 ps-2 pe-0",children:Object(d.jsx)(x.a,{size:"sm",variant:"",className:"text-body pe-0",disabled:!0,children:"toabr.de /"})}),Object(d.jsx)(A.a.Control,{ref:f,type:"text",className:"ps-1 shadow-none",placeholder:"search ...","aria-label":"search","aria-describedby":"basic-addon1",readOnly:!1}),Object(d.jsx)(x.a,{variant:"primary",id:"search-btn",type:"submit",className:"",disabled:O,children:O?Object(d.jsx)(M.a,{animation:"grow",variant:"white",size:"sm"}):Object(d.jsx)(U.a,{className:"text-white"})})]})}),"fetched"===u&&!m.length&&Object(d.jsx)("div",{className:"pt-3",children:"Nothing there \ud83d\ude41"}),!!m.length&&Object(d.jsx)(G,{nodes:m}),Object(d.jsx)(V,{onClick:function(e){n(""),o(e),f.current.value=e},activeTag:l})]})},Q=a(300),K=function(e){var t,a=e.variant,c=e.node,n=(null===(t=c.field_resource)||void 0===t?void 0:t.length)?c.field_resource[0].uri:"node/".concat(c.nid[0].value),s=c.field_tags.map((function(e){return Object(d.jsx)("a",{className:"ps-1 text-secondary text-decoration-none",href:"/tag/".concat(e.target_id),children:Object(d.jsxs)("small",{children:["#",e.target_id]})},e.target_id)}));return"teaser"===a?Object(d.jsx)(b.LinkContainer,{to:n,children:Object(d.jsx)(Q.a,{as:"article",bg:"accent-1",className:"border-0 shadow-slim shadow-drop",children:Object(d.jsxs)(E.a,{className:"row g-0",children:[Object(d.jsx)(C.a,{md:8,children:Object(d.jsx)("a",{href:n,target:"_blank",rel:"nofollow",children:Object(d.jsx)(Q.a.Img,{style:{width:"100%",height:"18rem",objectFit:"cover"},src:c.field_image[2].url})})}),Object(d.jsx)(C.a,{md:4,children:Object(d.jsxs)(Q.a.Body,{className:"d-flex h-100 flex-column justify-content-between mb-2",children:[Object(d.jsx)("div",{className:"text-primary mb-2",children:Object(d.jsx)("small",{children:"development"})}),Object(d.jsx)(Q.a.Title,{className:"fw-bold mb-0",children:Object(d.jsx)("a",{href:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(d.jsx)(Q.a.Subtitle,{className:"mb-2 text-muted",children:c.created[0].locale}),Object(d.jsx)(Q.a.Text,{className:"font-serif text-accent-3",children:Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:c.body[0].processed}})}),Object(d.jsx)("div",{className:"text-end",children:s})]})})]})})}):Object(d.jsx)(b.LinkContainer,{to:n,children:Object(d.jsxs)(Q.a,{as:"article",bg:"accent-1",className:"h-100 border-0 shadow-slim shadow-drop",children:[Object(d.jsx)("a",{href:n,target:"_blank",rel:"nofollow",children:Object(d.jsx)(Q.a.Img,{variant:"top",className:"img-fluid",style:{width:"100%",height:"18rem",objectFit:"cover"},src:c.field_image[0].url})}),Object(d.jsxs)(Q.a.Body,{className:"py-1 pe-2",children:[Object(d.jsx)("div",{className:"text-primary fw-bolder my-2",children:Object(d.jsx)("small",{children:"development"})}),Object(d.jsx)(Q.a.Title,{className:"fw-bold mb-0",children:Object(d.jsx)("a",{href:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(d.jsxs)(Q.a.Subtitle,{as:"small",className:"mb-2 text-muted",children:["updated ",c.changed[0].locale]}),Object(d.jsx)(Q.a.Text,{className:"font-serif text-accent-3 py-1",children:"Monitor and filter the logs of multiple remote Drupal installations from your localhost."}),Object(d.jsx)("div",{className:"text-end",children:s})]})]})})},$=function(e){var t=e.data,a=void 0===t?[]:t;return Object(d.jsxs)(m.a,{as:"section",id:"showcase",fluid:!0,className:"p-0",children:[Object(d.jsx)(E.a,{sm:12,className:"mx-auto mb-4",style:{maxWidth:"1040px"},children:Object(d.jsxs)(C.a,{className:"mb-4",children:[Object(d.jsx)("h2",{className:"text-center pb-3",children:"Showcase"}),a.length>0&&Object(d.jsx)(K,{variant:"teaser",node:a[0]})]})}),a.length>0&&Object(d.jsxs)(E.a,{xs:1,md:2,lg:3,className:"mx-auto pb-3 mb-4",style:{maxWidth:"1040px"},children:[Object(d.jsx)(C.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[1]})}),Object(d.jsx)(C.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[2]})}),Object(d.jsx)(C.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[3]})})]})]})},ee=function(){var e=[87,86,85,84],t=p("showcaseData",[]),a=Object(i.a)(t,2),c=a[0],n=(a[1],c),s=R(!n.length&&"".concat("https://api.toabr.de","/rest/v2/node/work/").concat(e.toString())),r=s.status,l=s.data;s.error;if("fetched"===r){var o=l.map((function(e){return e.created[0].locale=H(e.created[0].value),e.changed[0].locale=H(e.changed[0].value),e}));o=function(e,t){return e.map((function(a,c){return e.find((function(e){return e.nid[0].value==t[c]}))}))}(o,e),n=Object(L.a)(o),localStorage.setItem("showcaseData",JSON.stringify(o))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P,{title:"Home"}),Object(d.jsx)(m.a,{fluid:!0,as:"section",id:"header",className:"p-0",children:Object(d.jsx)(E.a,{style:{maxWidth:"1040px"},className:"mx-auto justify-content-center",children:Object(d.jsx)(C.a,{sm:11,md:10,lg:9,xl:8,children:Object(d.jsxs)("header",{className:"text-center mt-3 mb-4 py-3",children:[Object(d.jsxs)("h1",{className:"braces display-5 text-secondary",children:[Object(d.jsx)("span",{className:"text-primary",children:"to"}),Object(d.jsx)("span",{className:"",children:"abr.de"})]}),Object(d.jsx)("p",{className:"mb-5",children:"Explore a bunch of code snippets you may find helpful."}),Object(d.jsx)(Z,{})]})})})}),Object(d.jsx)($,{data:n})]})},te=function(){return Object(d.jsx)(m.a,{fluid:"md",className:"mt-5",children:Object(d.jsx)(E.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsxs)(Q.a,{className:"",children:[Object(d.jsx)(Q.a.Header,{className:"",children:"404"}),Object(d.jsxs)(Q.a.Body,{className:"",children:[Object(d.jsx)(Q.a.Title,{className:"",children:"Custom Error Page"}),Object(d.jsxs)(Q.a.Text,{className:"",children:["Edit Custom 404 error page ",Object(d.jsx)("code",{children:"src/pages/NotFound.js"})]}),Object(d.jsx)(b.LinkContainer,{to:"/",children:Object(d.jsx)(x.a,{className:"",children:"Home Page"})})]})]})})})})},ae=a(53),ce=new function e(){var t=this;Object(ae.a)(this,e),this.fetchData=function(e){return new Promise((function(a,c){setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(t){return c(new Error("Could not load ".concat(e),t))}))}),t.delay)}))},this.getShowcase=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.nid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/showcase/"),s=c?n+c:n;return t.fetchData(s)},this.getArticles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ids,c=void 0===a?[]:a,n=e.page,s=void 0===n?0:n,r="".concat(t.apiUrl,"/api2/articles/"),i=c.length>0?c.join("+"):"",l=s>0?"?page=".concat(s):"",o=r+i+l;return t.fetchData(o)},this.getArticlesByTag=function(e){var a="".concat(t.apiUrl,"/api/tag/")+e;return t.fetchData(a)},this.getTags=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.tid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/term/"),s=n+c;return t.fetchData(s)},this.articlesQuery=function(e){var a="".concat(t.apiUrl,"/api/search?_q=")+e;return t.fetchData(a)},this.loadImage=function(e){return new Promise((function(t,a){var c=new Image;c.onload=function(){return t(c)},c.onerror=function(){return a(new Error("Could not load image at "+e))},c.src=e}))},this.apiUrl="https://api.toabr.de",this.delay=0};function ne(e){var t=new URLSearchParams(Object(o.l)().search).get(e),a=Object(o.k)();return[t,function(e){var t=a.location.pathname;a.push("".concat(t,"?q=").concat(e))}]}var se=function(e){var t=e.head,a=e.description,c=e.isLoading;return Object(d.jsx)(m.a,{children:Object(d.jsxs)("div",{className:"text-center my-4",children:[Object(d.jsx)("h1",{className:"pb-3",children:t}),Object(d.jsx)("p",{className:"lead text-capitalize",children:a}),c&&Object(d.jsx)(M.a,{animation:"grow",variant:"highlight",size:"sm"})]})})};function re(e){var t=e.crumbs,a=void 0===t?[]:t,c=e.className,n=void 0===c?"":c;return Object(d.jsx)("nav",{className:"btn-group text-center my-5 ".concat(n),role:"breadcrumb","aria-label":"breadcrumb",children:a.map((function(e,t){return a.length===t+1?Object(d.jsx)(x.a,{variant:"outline-primary",size:"sm",disabled:!0,className:"px-4",children:e.name}):Object(d.jsx)(b.LinkContainer,{to:e.href,exact:!0,children:Object(d.jsxs)(x.a,{size:"sm",className:"px-4",children:[e.name," "]})})}))})}var ie=function(){var e=ne("q"),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(){var e=p("tagList",[]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){!a.length&&ce.getTags().then((function(e){return n(e)}))}),[]),a}(),r=!0,l="Code Snippets Wiki",o=R(F({tags:encodeURI(a),items:10})),j=o.status,u=o.data;o.error;"fetched"===j&&(r=!1);var b=s.map((function(e){var t=e.title===a;return{title:e.title,id:e.tid,active:t}}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{title:l}),Object(d.jsx)(re,{crumbs:[{name:"Home",href:"/"},{name:"Wiki"}]}),Object(d.jsx)(se,{head:l,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),Object(d.jsxs)(m.a,{style:{maxWidth:685},className:"",children:[Object(d.jsx)(Y,{data:b,options:{size:"sm",onClick:function(e){return t=e.target,void n(t.dataset.title);var t},className:"mb-5"}}),r&&Object(d.jsx)(M.a,{className:"d-flex m-auto",animation:"grow",variant:"highlight",size:"sm"}),!r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"lead text-center text-capitalize",children:u.length?a:"No Results"}),!!u.length&&Object(d.jsx)(G,{nodes:u})]})]})]})},le=a(54),oe=a(55),de=a.n(oe),je=function(e){var t=e.match.params.nid,a=e.tagList,c="Post ".concat(t),n="",s=!0,r="",i=R(F({nid:t})),l=i.status,o=i.data,j=i.error,u=o[0];return"error"===l&&console.error(j),"fetched"===l&&(o.length?(n=u.title[0].value,u.field_tags=D(u.field_tags,a),r=function(e){var t=["sh","js","json","css","scss","docker","php","yml"],a=document.createElement("div");a.innerHTML=e;var c,n=Object(le.a)(a.getElementsByTagName("pre"));try{for(n.s();!(c=n.n()).done;){var s=c.value,r=de.a.highlightAuto(s.innerText,t);s.classList.add("hljs","lang-".concat(r.language)),s.innerHTML=r.value}}catch(i){n.e(i)}finally{n.f()}return a.outerHTML}(u.body[0].value)):n="nothing here",s=!1),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P,{title:c}),Object(d.jsx)(re,{crumbs:[{name:"Home",href:"/"},{name:"Wiki",href:"/wiki"},{name:"Post ".concat(t)}],className:""}),Object(d.jsx)(se,{head:n,isLoading:s}),"fetched"===l&&!!o.length&&Object(d.jsxs)("div",{id:"post-".concat(t),style:{maxWidth:685},className:"post mx-auto px-3",children:[Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),Object(d.jsx)("div",{className:"my-3",children:u.field_tags.map((function(e){return Object(d.jsx)(b.LinkContainer,{to:{pathname:"/wiki",search:"?q=".concat(e.title)},children:Object(d.jsxs)(x.a,{variant:"outline-primary",className:"me-2",children:[" #",e.title]})})}))})]})]})},ue=function(){var e=p("tagList",[]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){!a.length&&ce.getTags().then((function(e){return n(e)}))}),[]),Object(d.jsx)(l.BrowserRouter,{children:Object(d.jsx)(N,{children:Object(d.jsxs)(_,{children:[Object(d.jsx)(W,{}),Object(d.jsxs)(o.g,{children:[Object(d.jsx)(o.d,{path:"/",render:function(e){return Object(d.jsx)(ee,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))},exact:!0}),Object(d.jsx)(o.d,{path:"/wiki",render:function(e){return Object(d.jsx)(ie,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))}}),Object(d.jsx)(o.d,{path:"/node/:nid",render:function(e){return Object(d.jsx)(je,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))}}),Object(d.jsx)(o.d,{component:te})]})]})})})};s.a.render(Object(d.jsx)(ue,{}),document.getElementById("root"))},61:function(e,t,a){},62:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[290,1,2]]]);
//# sourceMappingURL=main.9218e9ef.chunk.js.map