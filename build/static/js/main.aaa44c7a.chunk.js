(this["webpackJsonptoabr.de"]=this["webpackJsonptoabr.de"]||[]).push([[0],{305:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(24),s=a.n(n),r=(a(75),a(10)),i=a(7),l=a(27),o=a(9),d=(a(76),a(1)),j=function(){var e=(new Date).getFullYear();return Object(d.jsxs)("div",{id:"about",className:"d-flex flex-column justify-content-center text-light p-3",children:[Object(d.jsx)("div",{className:"title display-5 mb-3",children:"About me"}),Object(d.jsx)("div",{className:"border-top border-3 w-50 mb-3"}),Object(d.jsx)("p",{className:"description ps-2",children:"Als gelernter Mediengestalter \xfcbe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verst\xe4rktes Interesse gilt dabei aber der Webentwicklung."}),Object(d.jsx)("div",{className:"position-fixed bottom-0",children:Object(d.jsxs)("p",{className:"",children:[Object(d.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(d.jsx)("span",{className:"",children:"toabr.de"}),Object(d.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]})})]})},b=a(319),u=a(12),m=function(){var e=(new Date).getFullYear();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("footer",{id:"footer",className:"container",children:Object(d.jsxs)("section",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top",children:[Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(d.jsx)("span",{className:"text-secondary",children:"to"}),"abr.de",Object(d.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]}),Object(d.jsxs)(b.a,{className:"justify-content-end",children:[Object(d.jsx)(u.LinkContainer,{to:"/",children:Object(d.jsx)(b.a.Link,{className:"text-muted",children:"Home"})}),Object(d.jsx)(u.LinkContainer,{to:"/wiki",children:Object(d.jsx)(b.a.Link,{className:"text-muted",children:"Wiki"})}),Object(d.jsx)(b.a.Link,{href:"/home#contact",className:"text-muted",children:"Contact"})]})]})})})},h=a(318),x=a(310),f=a(316),O=a(309),p=a(317),v=a(63),g=function(e){var t=e.show,a=void 0!==t&&t,c=e.handleClose,n=e.handleSubmit;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f.a,{show:a,onHide:c,size:"lg",centered:!0,backdrop:"static",keyboard:!1,contentClassName:"bg-body border-0",children:[Object(d.jsxs)(f.a.Header,{children:[Object(d.jsx)(f.a.Title,{children:Object(d.jsx)("h2",{className:"h1",children:"Contact"})}),Object(d.jsx)(O.a,{variant:"close",onClick:c})]}),Object(d.jsx)(f.a.Body,{children:Object(d.jsxs)(p.a,{onSubmit:n,className:"row g-3 mb-5",children:[Object(d.jsxs)(v.a,{md:6,className:"form-floating",children:[Object(d.jsx)(p.a.Control,{type:"text",className:"",id:"name",placeholder:"Name",required:!0}),Object(d.jsx)(p.a.Label,{for:"name",children:"Name"})]}),Object(d.jsxs)(v.a,{md:6,className:"form-floating",children:[Object(d.jsx)(p.a.Control,{type:"email",className:"",id:"email",placeholder:"name@example.com",required:!0}),Object(d.jsx)(p.a.Label,{for:"email",children:"Email address"})]}),Object(d.jsxs)(v.a,{xs:12,className:"form-floating",children:[Object(d.jsx)(p.a.Control,{as:"textarea",className:"",placeholder:"Leave a message here",id:"message",style:{height:"100px"},required:!0}),Object(d.jsx)(p.a.Label,{for:"message",children:"Message"})]}),Object(d.jsx)(v.a,{className:"d-flex justify-content-center",children:Object(d.jsx)(O.a,{type:"submit",variant:"primary",className:"text-white px-5",children:"Submit"})})]})}),Object(d.jsx)(f.a.Footer,{})]})})},N=(a(87),a(50)),y=a(49),w=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(a),r=Object(c.useRef)(null),l=Object(c.useRef)(210);Object(c.useEffect)((function(){var e=function(e){var t=s.current;return!t&&e.composedPath().includes(r.current)?(document.body.classList.add("open","overflow-hidden"),void o(!0)):t?(document.body.classList.remove("open","overflow-hidden"),void o(!1)):void 0};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var o=function(e){s.current=e,n(e)};return Object(d.jsx)(O.a,{id:"reveal-btn",ref:r,variant:"link",className:"fs-5 rounded-circle",children:Object(d.jsx)(y.a,{icon:N.b,style:{transform:"rotate(".concat(l.current,"deg)"),transition:"all .1s linear .3s"}})})},k=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.a,{expand:!0,variant:!0,children:Object(d.jsxs)(x.a,{className:"border-bottom",children:[Object(d.jsx)(w,{}),Object(d.jsxs)(b.a,{className:"",children:[Object(d.jsx)(u.LinkContainer,{to:"/",children:Object(d.jsx)(b.a.Link,{className:"",children:"Home"})}),Object(d.jsx)(u.LinkContainer,{to:"/wiki",children:Object(d.jsx)(b.a.Link,{className:"",children:"Wiki"})}),Object(d.jsx)(b.a.Link,{eventKey:"contact",onClick:function(){return n(!0)},children:"Contact"})]})]})}),Object(d.jsx)(g,{show:a,handleClose:function(){return n(!1)},handleSubmit:function(e){console.log(e),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation())}})]})},L=function(e){var t=e.children;return Object(d.jsxs)(l.BrowserRouter,{children:[Object(d.jsxs)("div",{id:"page",className:"min-vh-100 d-flex flex-column",children:[Object(d.jsx)(k,{}),Object(d.jsx)("main",{children:t}),Object(d.jsx)(m,{})]}),Object(d.jsx)(j,{})]})},_=a(30),C=a(315);function E(e,t){var a=Object(c.useState)((function(){return JSON.parse(localStorage.getItem(e))||t})),n=Object(i.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,r]}var S=a(58),T=a.n(S),I=a(64);function R(e){var t=Object(c.useRef)({}),a={status:"idle",error:null,data:[]},n=Object(c.useReducer)((function(e,t){switch(t.type){case"FETCHING":return Object(r.a)(Object(r.a)({},a),{},{status:"fetching"});case"FETCHED":return Object(r.a)(Object(r.a)({},a),{},{status:"fetched",data:t.payload});case"FETCH_ERROR":return Object(r.a)(Object(r.a)({},a),{},{status:"error",error:t.payload});default:return e}}),a),s=Object(i.a)(n,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){var a=!1;if(e)return function(){var c=Object(I.a)(T.a.mark((function c(){var n,s,r;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o({type:"FETCHING"}),!t.current[e]){c.next=7;break}console.log("cached",e),n=t.current[e],o({type:"FETCHED",payload:n}),c.next=26;break;case 7:return c.prev=7,console.log("fetching",e),c.next=11,fetch(e);case 11:return s=c.sent,c.next=14,s.json();case 14:if(r=c.sent,t.current[e]=r,!a){c.next=18;break}return c.abrupt("return");case 18:o({type:"FETCHED",payload:r}),c.next=26;break;case 21:if(c.prev=21,c.t0=c.catch(7),!a){c.next=25;break}return c.abrupt("return");case 25:o({type:"FETCH_ERROR",payload:c.t0.message});case 26:case"end":return c.stop()}}),c,null,[[7,21]])})));return function(){return c.apply(this,arguments)}}()(),function(){a=!0}}),[e]),l}var H=function(e){return new Date(e).toLocaleDateString()};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,a){var c=t.find((function(e){return e.tid==a.target_id}));return"undefined"!==typeof c?[].concat(Object(_.a)(e),[Object(r.a)(Object(r.a)({},a),{},{title:c.title})]):e}),[])}var F=function(e){var t=e.nid,a=void 0===t?"":t,c=e.type,n=void 0===c?"All":c,s=e.tags,r=void 0===s?[]:s,i=e.query,l=void 0===i?"":i,o=e.by,d=void 0===o?"changed":o,j=e.order,b=void 0===j?"DESC":j,u=e.items,m=void 0===u?10:u,h=e.page,x="".concat("https://api.toabr.de","/rest/v2/node?");return a&&(x+="_nid=".concat(a,"&")),n&&(x+="_type=".concat(n,"&")),r&&(x+="_tags=".concat(r.toString(),"&")),l&&(x+="_q=".concat(l,"&")),d&&(x+="sort_by=".concat(d,"&")),b&&(x+="sort_order=".concat(b,"&")),m&&(x+="items_per_page=".concat(m,"&")),h&&(x+="page=".concat(h,"&")),x},P=a(65),A=function(e){var t=e.title;return Object(d.jsx)(P.a,{children:Object(d.jsx)("title",{children:t})})},B=(a(92),function(){var e=Object(c.useRef)(null),t=Object(c.useState)({}),a=Object(i.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight,a=r((function(a){s({xVal:-1/(t/2)*a.clientY+1,yVal:1/(e/2)*a.clientX-1,transX:16/e*a.clientX-8,transY:10/t*a.clientY-3,transZ:60/t*a.clientY-35})}),300);return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}}),[]),Object(c.useLayoutEffect)((function(){e.current.style.transform="\n      perspective(1000px)\n      translate3d(".concat(n.transX,"px,").concat(n.transY,"px,").concat(n.transZ,"px)\n      rotate3d(").concat(n.xVal,",").concat(n.yVal,",0,2deg)\n      ")}),[n]);var r=function(e,t){var a=!0;return function(c){a&&(a=!1,setTimeout((function(){a=!0}),t),e(c))}};return Object(d.jsxs)("div",{className:"hero rounded-circle mx-auto my-3",children:[Object(d.jsx)("div",{className:"hero__back hero__back--static"}),Object(d.jsx)("div",{ref:e,className:"hero__back hero__back--mover"})]})}),W=a(312),z=a(313),M=a(314),q=a(26),U=function(e){var t=e.title,a=e.variant,c=e.faIcon,n=e.onClick,s=e.as,r=e.href;e.className;return Object(d.jsxs)(O.a,{as:s,href:r,variant:a,className:"font-monospace py-2 flex-fill",onClick:n,children:[c&&Object(d.jsx)(y.a,{icon:c,className:"me-2"}),Object(d.jsx)("span",{className:"",children:t})]})},Y=function(e){var t=e.action,a=e.className,n=[{title:"linux",term:["linux"],faIcon:q.d},{title:"drupal",term:["drupal"],faIcon:q.b},{title:"es6",term:["javascript"],faIcon:q.c},{title:"scss",term:["scss"],faIcon:q.f},{title:"react",term:["react"],faIcon:q.e},{title:"bash",term:["bash"],faIcon:N.a},{title:"docker",term:["docker"],faIcon:q.a}];return Object(d.jsxs)("div",{className:"d-flex flex-wrap gap-2 ".concat(a),children:[n.map((function(e,a){return Object(c.createElement)(U,Object(r.a)(Object(r.a)({},e),{},{onClick:function(){return t(e.term[0])},variant:"brand-primary",key:a}))})),Object(d.jsx)(u.LinkContainer,{to:"/wiki",children:U({title:"...",variant:"brand-secondary",as:"a",href:"wiki"})})]})},V=a(320),J=a(311),X=(a(93),function(e){var t=e.nodes,a=void 0===t?[]:t,c=E("tagList",[]),n=Object(i.a)(c,1)[0],s=a.map((function(e,t){var a=D(e.field_tags,n);return Object(d.jsx)(u.LinkContainer,{to:"node/".concat(e.nid[0].value),children:Object(d.jsx)(V.a.Item,{action:"true",className:"shadow",children:Object(d.jsxs)("div",{className:"d-sm-flex justify-content-between flex-wrap align-items-center border-1 mt-1",children:[Object(d.jsx)("small",{className:"date d-sm-block pe-2 fs-6",children:H(e.changed[0].value)}),Object(d.jsx)("div",{className:"title flex-fill",children:e.title[0].value}),Object(d.jsx)("div",{className:"",children:a.map((function(e){return Object(d.jsxs)(J.a,{className:"rounded ms-1",children:["#",e.title]},e.target_id)}))})]})})},t)}));return Object(d.jsx)("div",{className:"title-list",children:Object(d.jsxs)(V.a,{variant:"",className:"text-start",children:[!a.length||s,a.length>5&&Object(d.jsx)(u.LinkContainer,{to:"wiki",children:Object(d.jsx)(V.a.Item,{active:"false",action:"true",className:"text-center",children:"more..."})})]})})}),G=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],j=R((a||l)&&F({type:"article",query:a,tags:l,items:5})),b=j.status,u=j.data,m=j.error,h=u,x=Object(c.useRef)(null),f=!1;"error"===b&&console.error(m),"fetching"===b&&(x.current.readOnly=!0,f=!0),"fetched"===b&&(x.current.readOnly=!1,f=!1);return Object(d.jsxs)("div",{id:"search",children:[Object(d.jsx)(p.a,{onSubmit:function(e){return function(e){e.preventDefault();var t=x.current.value;o(""),""!==t&&n(t)}(e)},className:"",children:Object(d.jsxs)(W.a,{className:"shadow",size:"lg",children:[Object(d.jsx)(W.a.Text,{className:"bg-white text-muted ps-2 pe-0",children:Object(d.jsx)(O.a,{size:"sm",variant:"",className:"pe-0",disabled:!0,children:"toabr.de /"})}),Object(d.jsx)(p.a.Control,{ref:x,type:"text",className:"ps-1 shadow-none fs-4",placeholder:"search ...","aria-label":"search","aria-describedby":"basic-addon1",readOnly:!1}),Object(d.jsx)(O.a,{variant:"primary",id:"search-btn",type:"submit",className:"",disabled:f,children:f?Object(d.jsx)(z.a,{animation:"grow",variant:"white",size:"sm"}):Object(d.jsx)(M.a,{className:"text-white"})})]})}),"fetched"===b&&!h.length&&Object(d.jsx)("div",{className:"pt-3",children:"Nothing there \ud83d\ude41"}),!!h.length&&Object(d.jsx)(X,{nodes:h}),Object(d.jsx)(Y,{action:function(e){n(""),o(e),x.current.value=e},className:"my-4"})]})},Z=a(321),K=(a(94),function(e){var t,a=e.variant,c=e.node,n=(null===(t=c.field_resource)||void 0===t?void 0:t.length)?c.field_resource[0].uri:"node/".concat(c.nid[0].value),s=c.field_tags.map((function(e){return Object(d.jsx)("a",{className:"ps-1 text-secondary text-decoration-none",href:"/tag/".concat(e.target_id),children:Object(d.jsxs)("small",{children:["#",e.target_id]})},e.target_id)}));return"teaser"===a?Object(d.jsx)(Z.a,{as:"article",bg:"",className:"border-0 shadow shadow-drop",children:Object(d.jsxs)(C.a,{className:"row g-0",children:[Object(d.jsx)(v.a,{md:8,children:Object(d.jsx)("a",{href:n,target:"_blank",rel:"nofollow",children:Object(d.jsx)(Z.a.Img,{style:{width:"100%",height:"18rem",objectFit:"cover"},src:c.field_image[2].url})})}),Object(d.jsx)(v.a,{md:4,children:Object(d.jsxs)(Z.a.Body,{className:"d-flex h-100 flex-column justify-content-between mb-2",children:[Object(d.jsx)("div",{className:"text-primary mb-2",children:Object(d.jsx)("small",{children:"development"})}),Object(d.jsx)(Z.a.Title,{children:Object(d.jsx)("a",{href:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(d.jsx)(Z.a.Subtitle,{className:"mb-2 text-muted",children:c.created[0].locale}),Object(d.jsx)(Z.a.Text,{children:Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:c.body[0].processed}})}),Object(d.jsx)("div",{className:"text-end",children:s})]})})]})}):Object(d.jsxs)(Z.a,{as:"article",bg:"",className:"h-100 border-0 shadow shadow-drop",children:[Object(d.jsx)("a",{href:n,target:"_blank",rel:"nofollow",children:Object(d.jsx)(Z.a.Img,{variant:"top",className:"img-fluid",src:c.field_image[0].url})}),Object(d.jsxs)(Z.a.Body,{className:"py-1 pe-2",children:[Object(d.jsx)("div",{className:"text-primary mb-2",children:Object(d.jsx)("small",{children:"development"})}),Object(d.jsx)(Z.a.Title,{className:"mb-0",children:Object(d.jsx)("a",{href:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(d.jsxs)(Z.a.Subtitle,{as:"small",className:"mb-2 text-muted",children:["updated ",c.changed[0].locale]}),Object(d.jsx)(Z.a.Text,{className:"py-1",children:"Monitor and filter the logs of multiple remote Drupal installations from your localhost."}),Object(d.jsx)("div",{className:"text-end",children:s})]})]})}),Q=function(e){var t=e.data,a=void 0===t?[]:t;return Object(d.jsxs)(x.a,{as:"section",id:"showcase",fluid:!0,className:"p-0",children:[Object(d.jsx)(C.a,{sm:12,className:"mx-auto mb-4",style:{maxWidth:"1040px"},children:Object(d.jsxs)(v.a,{className:"mb-4",children:[Object(d.jsx)("h2",{className:"border-bottom text-center pb-3 mb-4",children:"Showcase"}),a.length>0&&Object(d.jsx)(K,{variant:"teaser",node:a[0]})]})}),a.length>0&&Object(d.jsxs)(C.a,{xs:1,md:2,lg:3,className:"mx-auto pb-3 mb-4",style:{maxWidth:"1040px"},children:[Object(d.jsx)(v.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[1]})}),Object(d.jsx)(v.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[2]})}),Object(d.jsx)(v.a,{className:"mb-4",children:Object(d.jsx)(K,{node:a[3]})})]})]})},$=function(){var e=[87,86,85,84],t=E("showcaseData",[]),a=Object(i.a)(t,2),c=a[0],n=(a[1],c),s=R(!n.length&&"".concat("https://api.toabr.de","/rest/v2/node/work/").concat(e.toString())),r=s.status,l=s.data;s.error;if("fetched"===r){var o=l.map((function(e){return e.created[0].locale=H(e.created[0].value),e.changed[0].locale=H(e.changed[0].value),e}));o=function(e,t){return e.map((function(a,c){return e.find((function(e){return e.nid[0].value==t[c]}))}))}(o,e),n=Object(_.a)(o),localStorage.setItem("showcaseData",JSON.stringify(o))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,{title:"Home"}),Object(d.jsx)(x.a,{fluid:!0,as:"section",id:"header",className:"p-0",children:Object(d.jsx)(C.a,{style:{maxWidth:"1040px"},className:"mx-auto justify-content-center",children:Object(d.jsx)(v.a,{sm:11,md:10,lg:9,xl:8,children:Object(d.jsxs)("header",{className:"text-center mb-5 py-3",children:[Object(d.jsxs)("h1",{className:"display-5 text-secondary",children:[Object(d.jsx)("span",{className:"text-primary",children:"to"}),"abr.de"]}),Object(d.jsx)("p",{className:"mb-5",children:"Explore a bunch of code snippets you may find helpful."}),Object(d.jsx)(G,{})]})})})}),Object(d.jsx)(Q,{data:n})]})},ee=function(){return Object(d.jsx)(x.a,{fluid:"md",className:"mt-5",children:Object(d.jsx)(C.a,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(Z.a,{className:"",children:[Object(d.jsx)(Z.a.Header,{className:"",children:"404"}),Object(d.jsxs)(Z.a.Body,{className:"",children:[Object(d.jsx)(Z.a.Title,{className:"",children:"Custom Error Page"}),Object(d.jsxs)(Z.a.Text,{className:"",children:["Edit Custom 404 error page ",Object(d.jsx)("code",{children:"src/pages/NotFound.js"})]}),Object(d.jsx)(u.LinkContainer,{to:"/",children:Object(d.jsx)(O.a,{className:"",children:"Home Page"})})]})]})})})})},te=function(e){var t=e.head,a=e.description,c=e.isLoading;return Object(d.jsx)(x.a,{children:Object(d.jsxs)("div",{className:"text-center my-4",children:[Object(d.jsx)("p",{className:"lead text-capitalize",children:a}),Object(d.jsx)("h1",{className:"pb-3",children:t}),c&&Object(d.jsx)(z.a,{animation:"grow",variant:"",size:"sm"})]})})},ae=a(68),ce=new function e(){var t=this;Object(ae.a)(this,e),this.fetchData=function(e){return new Promise((function(a,c){setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(t){return c(new Error("Could not load ".concat(e),t))}))}),t.delay)}))},this.getShowcase=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.nid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/showcase/"),s=c?n+c:n;return t.fetchData(s)},this.getArticles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ids,c=void 0===a?[]:a,n=e.page,s=void 0===n?0:n,r="".concat(t.apiUrl,"/api2/articles/"),i=c.length>0?c.join("+"):"",l=s>0?"?page=".concat(s):"",o=r+i+l;return t.fetchData(o)},this.getArticlesByTag=function(e){var a="".concat(t.apiUrl,"/api/tag/")+e;return t.fetchData(a)},this.getTags=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.tid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/term/"),s=n+c;return t.fetchData(s)},this.articlesQuery=function(e){var a="".concat(t.apiUrl,"/api/search?_q=")+e;return t.fetchData(a)},this.loadImage=function(e){return new Promise((function(t,a){var c=new Image;c.onload=function(){return t(c)},c.onerror=function(){return a(new Error("Could not load image at "+e))},c.src=e}))},this.apiUrl="https://api.toabr.de",this.delay=0};var ne=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],s=a[1],r=function(){var e=E("tagList",[]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){!a.length&&ce.getTags().then((function(e){return n(e)}))}),[]),a}(),l=!0;Object(c.useEffect)((function(){var t,a,c=null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.fromPost;if("undefined"!==typeof c){var n=document.querySelector("[data-tid='".concat(c.target_id,"']"));n&&u(n)}}),[]);var o=R(F({tags:encodeURI(n),items:10})),j=o.status,b=o.data;o.error;"fetched"===j&&(l=!1);var u=function(e){var t=e.getAttribute("data-title");e.classList.toggle("active"),n.includes(t)?s((function(e){return e.filter((function(e){return e!==t}))})):s((function(e){return[].concat(Object(_.a)(e),[t])}))},m="Code Snippets Wiki";return Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{title:m}),Object(d.jsx)(te,{head:m,description:"explore"}),Object(d.jsxs)(x.a,{style:{maxWidth:685},className:"",children:[Object(d.jsx)("div",{className:"d-flex flex-wrap gap-2 mb-5",children:r.map((function(e){return Object(d.jsx)(O.a,{variant:"brand-primary",size:"sm",className:"flex-fill","data-title":e.title,"data-tid":e.tid,onClick:function(e){return u(e.target)},children:e.title})}))}),l&&Object(d.jsx)(z.a,{className:"d-flex m-auto",animation:"grow",variant:"",size:"sm"}),!l&&Object(d.jsxs)("h2",{className:"lead text-center text-capitalize",children:[!n.length&&"Recent Posts",n.toString()]}),Object(d.jsx)(X,{nodes:b})]})]})},se=a(69),re=a(70),ie=a.n(re),le=(a(305),function(e){var t=e.match.params.nid,a=e.tagList,c="Post ".concat(t),n="",s=!0,r="",i=R(F({nid:t})),l=i.status,o=i.data,j=i.error,b=o[0];return"error"===l&&console.error(j),"fetched"===l&&(o.length?(n=b.title[0].value,b.field_tags=D(b.field_tags,a),r=function(e){var t=["sh","js","json","css","scss","docker","php","yml"],a=document.createElement("div");a.innerHTML=e;var c,n=Object(se.a)(a.getElementsByTagName("pre"));try{for(n.s();!(c=n.n()).done;){var s=c.value,r=ie.a.highlightAuto(s.innerText,t);console.log("hljs",r),s.classList.add("hljs","lang-".concat(r.language)),s.innerHTML=r.value}}catch(i){n.e(i)}finally{n.f()}return a.outerHTML}(b.body[0].value)):n="nothing here",s=!1),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,{title:c}),Object(d.jsx)(te,{head:n,description:c,isLoading:s}),"fetched"===l&&!!o.length&&Object(d.jsxs)("div",{id:"post-".concat(t),style:{maxWidth:685},className:"post mx-auto px-3",children:[Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),Object(d.jsx)("div",{className:"my-3",children:b.field_tags.map((function(e){return Object(d.jsx)(u.LinkContainer,{to:{pathname:"/wiki",state:{fromPost:e}},children:Object(d.jsxs)(O.a,{variant:"brand-primary",className:"me-2",children:[" #",e.title]})})}))})]})]})}),oe=function(){var e=E("tagList",[]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){!a.length&&ce.getTags().then((function(e){return n(e)}))}),[]),Object(d.jsx)(l.BrowserRouter,{children:Object(d.jsxs)(L,{children:[Object(d.jsx)(B,{}),Object(d.jsxs)(o.g,{children:[Object(d.jsx)(o.d,{path:"/",render:function(e){return Object(d.jsx)($,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))},exact:!0}),Object(d.jsx)(o.d,{path:"/wiki",render:function(e){return Object(d.jsx)(ne,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))}}),Object(d.jsx)(o.d,{path:"/node/:nid",render:function(e){return Object(d.jsx)(le,Object(r.a)(Object(r.a)({},e),{},{tagList:a}))}}),Object(d.jsx)(o.d,{component:ee})]})]})})};s.a.render(Object(d.jsx)(oe,{}),document.getElementById("root"))},75:function(e,t,a){},76:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[306,1,2]]]);
//# sourceMappingURL=main.aaa44c7a.chunk.js.map