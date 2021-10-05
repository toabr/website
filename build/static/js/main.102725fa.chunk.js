(this["webpackJsonptoabr.de"]=this["webpackJsonptoabr.de"]||[]).push([[0],{289:function(e,t,c){},290:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(45),r=c.n(n),s=(c(60),c(9)),i=c(8),l=(c(61),c(1)),o=function(){return Object(l.jsxs)("div",{id:"about",className:"d-flex flex-column justify-content-center text-light p-3",children:[Object(l.jsx)("div",{className:"title display-5 mb-3",children:"About me"}),Object(l.jsx)("div",{className:"border-top border-3 border-primary w-50 mb-3"}),Object(l.jsx)("p",{className:"description ps-2",children:"Als gelernter Mediengestalter \xfcbe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verst\xe4rktes Interesse gilt dabei aber der Webentwicklung."}),Object(l.jsx)("footer",{className:"position-fixed bottom-0",children:Object(l.jsx)("p",{className:"",children:Object(l.jsxs)("p",{children:["Photo by ",Object(l.jsx)("a",{rel:"nofollow",target:"_blank",href:"https://unsplash.com/@hikendal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kendal"})," on ",Object(l.jsx)("a",{rel:"nofollow",target:"_blank",href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})})})]})},d=c(299),j=c(18),u=function(){var e=(new Date).getFullYear();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{id:"footer",className:"container mx-auto",style:{maxWidth:"1040px"},children:Object(l.jsxs)("section",{className:"d-flex flex-wrap justify-content-center  justify-content-sm-between flex-row-reverse align-items-center  py-3 my-3",children:[Object(l.jsxs)(d.a,{className:"justify-content-end my-3",children:[Object(l.jsx)(j.LinkContainer,{to:"/",children:Object(l.jsx)(d.a.Link,{className:"text-muted",children:"Home"})}),Object(l.jsx)(j.LinkContainer,{to:"/wiki",children:Object(l.jsx)(d.a.Link,{className:"text-muted",children:"Wiki"})}),Object(l.jsx)(d.a.Link,{href:"#contact",className:"text-muted",children:"Contact"})]}),Object(l.jsx)("div",{className:"text-muted mb-0",children:Object(l.jsxs)("i",{children:["\xa9 ",e," ",Object(l.jsx)("span",{className:"text-secondary",children:"toabr.de"})," , All Rights Reserved."]})})]})})})},b=c(10),m=c(293),h=(c(72),c(292)),x=c(34),O=c(33),f=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useRef)(c),s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(e){var t=r.current;return!t&&e.composedPath().includes(s.current)?(document.body.toggleAttribute("open"),void i(!0)):t?(document.body.toggleAttribute("open"),void i(!1)):void 0};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var i=function(e){r.current=e,n(e)};return Object(l.jsx)(h.a,{id:"reveal-btn",ref:s,variant:"link",className:"fs-5 rounded-circle",children:Object(l.jsx)(O.a,{icon:x.b,style:{transform:"rotate(210deg)",transition:"all .1s linear .3s"}})})};var v=Object(a.createContext)({});function p(e){var t=e.children,c=function(e,t){var c=Object(a.useState)((function(){return JSON.parse(localStorage.getItem(e))||t})),n=Object(b.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,s]}("darkmode",!1),n=Object(b.a)(c,2),r=n[0],s=n[1];return Object(l.jsx)(v.Provider,{value:{darkMode:r,setDarkMode:s},children:t})}function g(){return Object(a.useContext)(v)}function N(){var e=g(),t=e.darkMode,c=e.setDarkMode;return Object(a.useEffect)((function(){t?document.documentElement.setAttribute("darkMode",""):document.documentElement.removeAttribute("darkMode","")}),[t]),Object(l.jsx)("div",{id:"theme-switch",className:"form-switch",children:Object(l.jsx)("input",{className:"form-check form-check-input rounded-pill",type:"checkbox",checked:t,onChange:function(){return c((function(e){return!e}))}})})}var y=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2);t[0],t[1];return Object(l.jsx)(m.a,{fluid:!0,className:"pt-2",children:Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsx)(f,{}),Object(l.jsx)(N,{})]})})},k=function(e){var t=e.children;return Object(l.jsxs)(s.BrowserRouter,{children:[Object(l.jsxs)("div",{id:"page",className:"min-vh-100 overflow-hidden d-flex flex-column",children:[Object(l.jsx)(y,{}),Object(l.jsx)("main",{children:t}),Object(l.jsx)(u,{})]}),Object(l.jsx)(o,{})]})},w=(c(76),function(){var e=Object(a.useRef)(null),t=Object(a.useState)({}),c=Object(b.a)(t,2),n=c[0],r=c[1];Object(a.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight,c=s((function(c){r({xVal:-1/(t/2)*c.clientY+1,yVal:1/(e/2)*c.clientX-1,transX:16/e*c.clientX-8,transY:10/t*c.clientY-3,transZ:60/t*c.clientY-35})}),300);return window.addEventListener("mousemove",c),function(){window.removeEventListener("mousemove",c)}}),[]),Object(a.useLayoutEffect)((function(){e.current.style.transform="\n      perspective(1000px)\n      translate3d(".concat(n.transX,"px,").concat(n.transY,"px,").concat(n.transZ,"px)\n      rotate3d(").concat(n.xVal,",").concat(n.yVal,",0,2deg)\n      ")}),[n]);var s=function(e,t){var c=!0;return function(a){c&&(c=!1,setTimeout((function(){c=!0}),t),e(a))}};return Object(l.jsxs)("div",{className:"hero rounded-circle mx-auto mt-0",children:[Object(l.jsx)("div",{className:"hero__back hero__back--static"}),Object(l.jsx)("div",{ref:e,className:"hero__back hero__back--mover"})]})});function _(e){var t=e.smooth,c=Object(i.l)().pathname;return Object(a.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:t?"smooth":"instant"})}),[c]),null}var L=c(297),C=c(52),E=c(42),T=c.n(E),R=c(48),S=c(11);function I(e){var t=Object(a.useRef)({}),c={status:"idle",error:null,data:[]},n=Object(a.useReducer)((function(e,t){switch(t.type){case"FETCHING":return Object(S.a)(Object(S.a)({},c),{},{status:"fetching"});case"FETCHED":return Object(S.a)(Object(S.a)({},c),{},{status:"fetched",data:t.payload});case"FETCH_ERROR":return Object(S.a)(Object(S.a)({},c),{},{status:"error",error:t.payload});default:return e}}),c),r=Object(b.a)(n,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var c=!1;if(e)return function(){var a=Object(R.a)(T.a.mark((function a(){var n,r,s;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i({type:"FETCHING"}),!t.current[e]){a.next=6;break}n=t.current[e],i({type:"FETCHED",payload:n}),a.next=24;break;case 6:return a.prev=6,a.next=9,fetch(e);case 9:return r=a.sent,a.next=12,r.json();case 12:if(s=a.sent,t.current[e]=s,!c){a.next=16;break}return a.abrupt("return");case 16:i({type:"FETCHED",payload:s}),a.next=24;break;case 19:if(a.prev=19,a.t0=a.catch(6),!c){a.next=23;break}return a.abrupt("return");case 23:i({type:"FETCH_ERROR",payload:a.t0.message});case 24:case"end":return a.stop()}}),a,null,[[6,19]])})));return function(){return a.apply(this,arguments)}}()(),function(){c=!0}}),[e]),s}var H=c(49),z=function(e){var t=e.title;return Object(l.jsx)(H.a,{children:Object(l.jsx)("title",{children:t})})},M=c(22),F=c(298),P=c(294),W=c(295),A=c(301),B=c(296),D=c(20),q=function(e){var t=e.data,c=void 0===t?[]:t,a=e.options,n=void 0===a?{}:a,r=e.more,s=e.children,i=g().darkMode?"outline-":"";return Object(l.jsxs)("div",{className:"d-flex flex-wrap gap-2 ".concat(n.className),children:[c.map((function(e,t){var c=e.style?e.style:"primary",a=e.active?"active":"",r=e.className?e.className:"";return Object(l.jsxs)(h.a,{as:n.as,size:n.size,onClick:function(){return n.onClick(e.title)},variant:i+c,className:"".concat(a," ").concat(r," text-capitalize font-monospace flex-fill"),"data-title":e.title,"data-id":e.id,href:e.href,children:[e.faIcon&&Object(l.jsx)(O.a,{icon:e.faIcon,className:"me-2"}),e.title]},e.id)})),r&&Object(l.jsx)(j.LinkContainer,{to:r.link||"#",children:Object(l.jsx)(h.a,{variant:"".concat(i,"secondary"),className:"font-monospace flex-fill",children:r.title||"..."})}),s]})},Y=[{title:"linux",id:["linux"],faIcon:D.d},{title:"drupal",id:["drupal"],faIcon:D.b},{title:"es6",id:["javascript"],faIcon:D.c},{title:"scss",id:["scss"],faIcon:D.f},{title:"react",id:["react"],faIcon:D.e},{title:"bash",id:["bash"],faIcon:x.a},{title:"docker",id:["docker"],faIcon:D.a}];var U=function(e){var t=e.onClick,c=e.activeTag,a=Y.map((function(e){var t=e.id[0]===c;return Object(S.a)(Object(S.a)({},e),{},{active:t})}));return Object(l.jsx)(q,{data:a,options:{onClick:t,className:"my-4"},more:{link:"/wiki"}})},V=function(e){return new Date(e).toLocaleDateString()};var J=function(e){var t=e.nid,c=void 0===t?"":t,a=e.type,n=void 0===a?"All":a,r=e.tags,s=void 0===r?[]:r,i=e.query,l=void 0===i?"":i,o=e.by,d=void 0===o?"created":o,j=e.order,u=void 0===j?"DESC":j,b=e.items,m=void 0===b?10:b,h=e.page,x="".concat("https://api.toabr.de","/rest/v2/node?");return c&&(x+="_nid=".concat(c,"&")),n&&(x+="_type=".concat(n,"&")),s&&(x+="_tags=".concat(s.toString(),"&")),l&&(x+="_q=".concat(l,"&")),d&&(x+="sort_by=".concat(d,"&")),u&&(x+="sort_order=".concat(u,"&")),m&&(x+="items_per_page=".concat(m,"&")),h&&(x+="page=".concat(h,"&")),x},X=(c(78),Object(a.createContext)({}));function G(e){var t=e.children,c=I("".concat("https://api.toabr.de","/api/term/")),a=c.status,n=c.data,r=c.error;return"error"===a&&console.error(r),Object(l.jsx)(X.Provider,{value:n,children:t})}function Z(){return Object(a.useContext)(X)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Z();return e.reduce((function(e,c){var a=t.find((function(e){return e.tid==c.target_id}));return"undefined"!==typeof a?[].concat(Object(M.a)(e),[Object(S.a)(Object(S.a)({},c),{},{title:a.title})]):e}),[])}var Q=function(e){var t=e.node,c=K(t.field_tags);return Object(l.jsx)(j.LinkContainer,{to:"node/".concat(t.nid[0].value),children:Object(l.jsx)(A.a.Item,{action:"true",className:"text-body bg-body fw-bolder shadow pe-2",children:Object(l.jsxs)("div",{className:"d-sm-flex justify-content-between flex-wrap align-items-center border-1 mt-1",children:[Object(l.jsx)("small",{className:"date d-sm-block pe-2 text-muted fw-light",children:V(t.changed[0].value)}),Object(l.jsx)("div",{className:"title flex-fill",children:t.title[0].value}),Object(l.jsx)("div",{className:"tag text-highlight",children:c.map((function(e){return Object(l.jsxs)("small",{style:{fontSize:".75rem"},className:"bg-accent-2 fw-lighter ms-1 p-1 rounded-pill",children:["#",e.title]},e.target_id)}))})]})})})},$=function(e){var t=e.nodes,c=void 0===t?[]:t,a=e.children,n=c?c.map((function(e,t){return Object(l.jsx)(Q,{node:e})})):[];return Object(l.jsx)("div",{className:"title-list",children:Object(l.jsxs)(A.a,{variant:"flush",className:"text-start",children:[n,a]})})},ee=function(){var e,t,c,n=Object(a.useState)(""),r=Object(b.a)(n,2),i=r[0],o=r[1],d=Object(a.useState)(""),j=Object(b.a)(d,2),u=j[0],m=j[1],x=Object(a.useRef)(null),O=!1,f=Object(a.useRef)([]),v=I((i||u)&&J({type:"article",query:i,tags:u,items:10})),p=v.status,g=v.data,N=v.error;"error"===p&&console.error(N),"fetching"===p&&(x.current.readOnly=!0,O=!0),"fetched"===p&&(f.current=Object(M.a)(g),x.current.readOnly=!1,O=!1);var y=function(e,t){if("BUTTON"===e)o(""),m(t),x.current.value=t;else if("FORM"===e){var c=x.current.value;""!==c&&o(c),m("")}};return Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)(F.a,{onSubmit:function(e){return function(e){e.preventDefault(),y("FORM")}(e)},className:"",children:Object(l.jsxs)(P.a,{className:"shadow-slim",size:"lg",children:[Object(l.jsx)(P.a.Text,{className:"bg-accent-1 ps-2 pe-0",children:Object(l.jsx)(h.a,{size:"sm",variant:"",className:"text-body pe-0",disabled:!0,children:"toabr.de /"})}),Object(l.jsx)(F.a.Control,{ref:x,type:"text",className:"ps-1 shadow-none",placeholder:"search ...","aria-label":"search","aria-describedby":"basic-addon1",readOnly:!1,onFocus:function(e){return window.scrollTo(0,198)}}),Object(l.jsx)(h.a,{variant:"primary",id:"search-btn",type:"submit",className:"",disabled:O,children:O?Object(l.jsx)(W.a,{animation:"grow",variant:"white",size:"sm"}):Object(l.jsx)(B.a,{className:"text-white"})})]})}),"fetched"===p&&!(null===(e=f.current)||void 0===e?void 0:e.length)&&Object(l.jsx)("div",{className:"pt-3",children:"Nothing there \ud83d\ude41"}),!!(null===(t=f.current)||void 0===t?void 0:t.length)&&Object(l.jsx)($,{nodes:f.current.slice(0,5),children:(null===(c=f.current)||void 0===c?void 0:c.length)>5&&Object(l.jsx)(s.Link,{to:"/wiki?q=".concat(u||i),children:Object(l.jsx)(A.a.Item,{action:!0,className:"text-body bg-body text-center",children:Object(l.jsx)("div",{className:"title",children:"more ..."})})})}),Object(l.jsx)(U,{onClick:function(e){y("BUTTON",e)},activeTag:u})]})},te=c(300),ce=function(e){var t=e.variant,c=e.node,a=g().darkMode?"outline-":"",n="/node/".concat(c.nid[0].value),r=c.body[0].summary?c.body[0].summary:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",i=K(c.field_tags).map((function(e){return Object(l.jsx)(s.Link,{to:"/wiki?q=".concat(e.title.toLowerCase()),className:"pe-2 text-decoration-none text-capitalize",children:Object(l.jsxs)("small",{children:["#",e.title,"\ud83d\udc85"]})},e.target_id)})),o=function(){return Object(l.jsx)(h.a,{href:c.field_resource[0].uri,target:"_blank",rel:"nofollow",variant:"".concat(a,"primary"),size:"sm",children:c.field_resource[0].title})};return"teaser"===t?Object(l.jsx)(te.a,{as:"article",bg:"accent-1",className:"border-0 shadow-slim shadow-drop",children:Object(l.jsxs)(L.a,{className:"row g-0",children:[Object(l.jsx)(C.a,{md:8,children:Object(l.jsx)(s.Link,{to:n,children:Object(l.jsx)(te.a.Img,{style:{width:"100%",height:"21rem",objectFit:"cover"},src:c.field_image[0].url})})}),Object(l.jsx)(C.a,{md:4,children:Object(l.jsxs)(te.a.Body,{className:"",children:[Object(l.jsx)("div",{className:"text-primary mb-2",children:i}),Object(l.jsx)(te.a.Title,{className:"fw-bold",children:Object(l.jsx)(s.Link,{to:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(l.jsx)(te.a.Subtitle,{as:"small",className:"mb-2 text-muted",children:V(c.changed[0].value)}),Object(l.jsx)(te.a.Text,{className:"font-serif text-accent-3",children:r}),Object(l.jsx)("div",{className:"text-end",children:c&&o()})]})})]})}):Object(l.jsxs)(te.a,{as:"article",bg:"accent-1",className:"h-100 border-0 shadow-slim shadow-drop",children:[Object(l.jsx)(s.Link,{to:n,children:Object(l.jsx)(te.a.Img,{variant:"top",className:"img-fluid",style:{width:"100%",height:"15rem",objectFit:"cover"},src:c.field_image[0].url})}),Object(l.jsxs)(te.a.Body,{className:"pt-1",children:[Object(l.jsx)("div",{className:"text-primary fw-bolder my-2",children:i}),Object(l.jsx)(te.a.Title,{className:"fw-bold",children:Object(l.jsx)(s.Link,{to:n,className:"text-body text-decoration-none",children:c.title[0].value})}),Object(l.jsx)(te.a.Subtitle,{as:"small",className:"mb-2 text-muted",children:V(c.changed[0].value)}),Object(l.jsx)(te.a.Text,{className:"font-serif text-accent-3 py-1",children:r}),Object(l.jsx)("div",{className:"text-end",children:c.field_resource[0]&&o()})]})]})},ae=function(e){var t=e.nodes,c=void 0===t?[]:t;return Object(l.jsxs)(m.a,{as:"section",id:"showcase",fluid:!0,className:"p-0",children:[Object(l.jsx)(L.a,{sm:12,className:"mx-auto mb-4",style:{maxWidth:"1040px"},children:Object(l.jsxs)(C.a,{className:"mb-4",children:[Object(l.jsx)("h2",{className:"text-center pb-3",children:"Showcase"}),c[0]&&Object(l.jsx)(ce,{variant:"teaser",node:c[0]})]})}),c.length>0&&Object(l.jsxs)(L.a,{xs:1,md:2,lg:3,className:"mx-auto pb-3 mb-4",style:{maxWidth:"1040px"},children:[Object(l.jsx)(C.a,{className:"mb-4",children:c[1]&&Object(l.jsx)(ce,{node:c[1]})}),Object(l.jsx)(C.a,{className:"mb-4",children:c[2]&&Object(l.jsx)(ce,{node:c[2]})}),Object(l.jsx)(C.a,{className:"mb-4",children:c[3]&&Object(l.jsx)(ce,{node:c[3]})})]})]})},ne=function(){var e,t,c=[85,120,86,84,87],a=I("".concat("https://api.toabr.de","/rest/v2/node/work/").concat(c.toString())),n=(a.status,a.data);a.error;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(z,{title:"Home"}),Object(l.jsx)(m.a,{fluid:!0,as:"section",id:"header",className:"p-0",children:Object(l.jsx)(L.a,{style:{maxWidth:"1040px"},className:"mx-auto justify-content-center",children:Object(l.jsx)(C.a,{sm:11,md:10,lg:9,xl:8,children:Object(l.jsxs)("header",{className:"text-center mt-3 mb-4 py-3",children:[Object(l.jsxs)("h1",{className:"braces display-5 text-secondary",children:[Object(l.jsx)("span",{className:"text-primary",children:"to"}),Object(l.jsx)("span",{className:"",children:"abr.de"})]}),Object(l.jsx)("p",{className:"py-2 mb-4",children:"Explore a bunch of code snippets you may find helpful."}),Object(l.jsx)(ee,{})]})})})}),Object(l.jsx)(ae,{nodes:(e=n,t=c,e.map((function(c,a){return e.find((function(e){return e.nid[0].value==t[a]}))}))||[])})]})},re=function(){return Object(l.jsx)(m.a,{fluid:"md",className:"mt-5",children:Object(l.jsx)(L.a,{children:Object(l.jsx)(C.a,{children:Object(l.jsxs)(te.a,{className:"bg-accent-1",children:[Object(l.jsx)(te.a.Header,{className:"bg-body",children:"404"}),Object(l.jsxs)(te.a.Body,{className:"",children:[Object(l.jsx)(te.a.Title,{className:"",children:"Page not found"}),Object(l.jsxs)(te.a.Text,{className:"",children:[Object(l.jsx)("p",{children:"Error code 404"}),Object(l.jsx)("code",{children:"dont contact the admin"})]}),Object(l.jsx)(s.Link,{to:"/",children:Object(l.jsx)(h.a,{className:"",children:"Home Page"})})]})]})})})})};function se(e){var t=new URLSearchParams(Object(i.l)().search).get(e),c=Object(i.k)();return[t,function(e){var t=c.location.pathname;c.push("".concat(t,"?q=").concat(e))}]}var ie=function(e){var t=e.head,c=e.description,a=e.isLoading;return Object(l.jsx)(m.a,{children:Object(l.jsxs)("div",{className:"text-center my-3",children:[Object(l.jsx)("h1",{className:"",children:t}),c&&Object(l.jsx)("p",{className:"lead text-capitalize",children:c}),a&&Object(l.jsx)(W.a,{animation:"grow",variant:"highlight",size:"sm"})]})})};function le(e){var t=e.crumbs,c=void 0===t?[]:t,a=e.className,n=void 0===a?"":a;return Object(l.jsx)("nav",{className:"btn-group text-center my-5 ".concat(n),role:"breadcrumb","aria-label":"breadcrumb",children:c.map((function(e,t){return c.length===t+1?Object(l.jsx)(h.a,{variant:"outline-primary",size:"sm",disabled:!0,className:"px-4",children:e.name}):Object(l.jsx)(j.LinkContainer,{to:e.href,exact:!0,children:Object(l.jsxs)(h.a,{size:"sm",className:"px-4",children:[e.name," "]})})}))})}var oe=function(){var e,t,c=se("q"),n=Object(b.a)(c,2),r=n[0],s=n[1],i=Z(),o="Code Snippets Wiki",d=Object(a.useRef)([]),j=!0,u=I(J({tags:encodeURI(r||""),items:10})),h=u.status,x=u.data,O=u.error;"error"===h&&console.error(O),"fetching"===h&&(j=!0),"fetched"===h&&(d.current=x,j=!1);var f=i.map((function(e){var t=e.title.toLowerCase()===(null===r||void 0===r?void 0:r.toLowerCase());return{title:e.title,id:e.tid,active:t}}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(z,{title:o}),Object(l.jsx)(le,{crumbs:[{name:"Home",href:"/"},{name:"Wiki"}]}),Object(l.jsx)(ie,{head:o,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),Object(l.jsxs)(m.a,{style:{maxWidth:685},className:"",children:[Object(l.jsx)(q,{data:f,options:{size:"sm",onClick:function(e){0===e.localeCompare(r,void 0,{sensitivity:"accent"})?s(""):s(e.toLowerCase())},className:"mb-5"}}),Object(l.jsxs)("div",{className:"mb-3",style:{minHeight:"2rem"},children:[j&&Object(l.jsx)(W.a,{className:"d-flex m-auto",animation:"grow",variant:"highlight",size:"sm"}),!j&&Object(l.jsxs)("h2",{className:"lead text-center text-capitalize m-0",children:[!r&&"Recent Posts",r&&!!d.current.length&&r,r&&!d.current.length&&"No Results"]})]}),!!(null===(e=d.current)||void 0===e?void 0:e.length)&&Object(l.jsx)($,{nodes:d.current,children:10===(null===(t=d.current)||void 0===t?void 0:t.length)&&!1})]})]})},de=c(53),je=c(54),ue=c.n(je),be=(c(289),function(e){var t=g().darkMode?"outline-":"",c=e.match.params.nid,a="Post ".concat(c),n=!0,r=I(J({nid:c})),i=r.status,o=r.data,d=r.error,j=o[0]||[],u=(null===j||void 0===j?void 0:j.title)?j.title[0].value:"",b=(null===j||void 0===j?void 0:j.body)?function(e){var t=["sh","js","json","css","scss","docker","php","yml"],c=document.createElement("div");c.innerHTML=e;var a,n=Object(de.a)(c.getElementsByTagName("pre"));try{for(n.s();!(a=n.n()).done;){var r=a.value,s=ue.a.highlightAuto(r.innerText,t);r.classList.add("hljs","lang-".concat(s.language)),r.innerHTML=s.value}}catch(i){n.e(i)}finally{n.f()}return c.innerHTML}(j.body[0].value):"",m=K(j.field_tags);return"error"===i&&console.error(d),"fetching"===i&&(n=!0),"fetched"===i&&(n=!1),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(z,{title:a}),Object(l.jsx)(le,{crumbs:[{name:"Home",href:"/"},{name:"Wiki",href:"/wiki"},{name:"Post ".concat(c)}],className:""}),Object(l.jsx)(ie,{head:u,isLoading:n}),"fetched"===i&&!!o.length&&Object(l.jsxs)("div",{id:"Post-".concat(c),style:{maxWidth:1040},className:"post mx-auto px-3",children:[Object(l.jsx)("div",{className:"date text-center text-muted my-3",children:V(j.created[0].value)}),Object(l.jsx)("div",{className:"body",dangerouslySetInnerHTML:{__html:b}}),Object(l.jsx)("footer",{className:"footer my-5",children:m.map((function(e){return Object(l.jsx)(s.Link,{to:"/wiki?q=".concat(e.title),children:Object(l.jsxs)(h.a,{variant:"".concat(t,"primary"),className:"text-capitalize me-2 mb-2",children:["#",e.title]})})}))})]})]})}),me=function(){return Object(l.jsx)(s.BrowserRouter,{children:Object(l.jsx)(p,{children:Object(l.jsx)(G,{children:Object(l.jsxs)(k,{children:[Object(l.jsx)(w,{}),Object(l.jsx)(_,{smooth:!0}),Object(l.jsxs)(i.g,{children:[Object(l.jsx)(i.d,{path:"/",component:ne,exact:!0}),Object(l.jsx)(i.d,{path:"/wiki",component:oe}),Object(l.jsx)(i.d,{path:"/node/:nid",component:be}),Object(l.jsx)(i.d,{component:re})]})]})})})})};r.a.render(Object(l.jsx)(me,{}),document.getElementById("root"))},60:function(e,t,c){},61:function(e,t,c){},72:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){}},[[290,1,2]]]);
//# sourceMappingURL=main.102725fa.chunk.js.map