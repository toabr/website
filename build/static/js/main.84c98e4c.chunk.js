(this["webpackJsonptoabr.de"]=this["webpackJsonptoabr.de"]||[]).push([[0],{67:function(e,t,a){},69:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(23),r=a.n(s),i=(a(67),a(54)),l=a(34),o=a.n(l),j=a(51),d=a(8),b=a(25),u=a(9),h=a(56),m=new function e(){var t=this;Object(h.a)(this,e),this.fetchData=function(e){return new Promise((function(a,c){setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(t){return c(new Error("Could not load ".concat(e),t))}))}),t.delay)}))},this.getShowcase=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.nid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/showcase/"),s=c?n+c:n;return t.fetchData(s)},this.getArticles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ids,c=void 0===a?[]:a,n=e.page,s=void 0===n?0:n,r="".concat(t.apiUrl,"/api2/articles/"),i=c.length>0?c.join("+"):"",l=s>0?"?page=".concat(s):"",o=r+i+l;return t.fetchData(o)},this.getArticlesByTag=function(e){var a="".concat(t.apiUrl,"/api/tag/")+e;return t.fetchData(a)},this.getTags=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.tid,c=void 0===a?"":a,n="".concat(t.apiUrl,"/api/term/"),s=n+c;return t.fetchData(s)},this.articlesQuery=function(e){var a="".concat(t.apiUrl,"/api/search?_q=")+e;return t.fetchData(a)},this.loadImage=function(e){return new Promise((function(t,a){var c=new Image;c.onload=function(){return t(c)},c.onerror=function(){return a(new Error("Could not load image at "+e))},c.src=e}))},this.apiUrl="https://api.toabr.de",this.delay=0},x=(a(69),a(1)),O=function(){var e=(new Date).getFullYear();return Object(x.jsxs)("div",{id:"about",className:"d-flex flex-column justify-content-center text-light p-3",children:[Object(x.jsx)("div",{className:"title display-5 mb-3",children:"About me"}),Object(x.jsx)("div",{className:"border-top border-3 w-50 mb-3"}),Object(x.jsx)("p",{className:"description ps-2",children:"Als gelernter Mediengestalter \xfcbe ich meinen Beruf auf allen Ebenen mit Leidenschaft aus, ob Pixel, Vektor, Polygon oder Animation. Mein verst\xe4rktes Interesse gilt dabei aber der Webentwicklung."}),Object(x.jsx)("div",{className:"position-fixed bottom-0",children:Object(x.jsxs)("p",{className:"",children:[Object(x.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(x.jsx)("span",{className:"",children:"toabr.de"}),Object(x.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]})})]})},f=a(98),p=a(14),v=function(){var e=(new Date).getFullYear();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("footer",{id:"footer",className:"container",children:Object(x.jsxs)("section",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top",children:[Object(x.jsxs)("p",{className:"mb-0",children:[Object(x.jsxs)("span",{className:"text-muted",children:["\xa9 ",e," "]}),Object(x.jsx)("span",{className:"text-secondary",children:"to"}),"abr.de",Object(x.jsx)("span",{className:"text-muted",children:", All Rights Reserved."})]}),Object(x.jsxs)(f.a,{className:"justify-content-end",children:[Object(x.jsx)(p.LinkContainer,{to:"/home",children:Object(x.jsx)(f.a.Link,{className:"text-muted",children:"Home"})}),Object(x.jsx)(p.LinkContainer,{to:"/about",children:Object(x.jsx)(f.a.Link,{className:"text-muted",children:"About"})}),Object(x.jsx)(f.a.Link,{href:"/home#contact",className:"text-muted",children:"Contact"})]})]})})})},g=a(97),N=a(89),y=a(95),w=a(88),k=a(96),S=a(59),L=function(e){var t=e.show,a=void 0!==t&&t,c=e.handleClose,n=e.handleSubmit;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(y.a,{show:a,onHide:c,size:"lg",centered:!0,backdrop:"static",keyboard:!1,contentClassName:"bg-body border-0",children:[Object(x.jsxs)(y.a.Header,{children:[Object(x.jsx)(y.a.Title,{children:Object(x.jsx)("h2",{className:"h1",children:"Contact"})}),Object(x.jsx)(w.a,{variant:"close",onClick:c})]}),Object(x.jsx)(y.a.Body,{children:Object(x.jsxs)(k.a,{onSubmit:n,className:"row g-3 mb-5",children:[Object(x.jsxs)(S.a,{md:6,className:"form-floating",children:[Object(x.jsx)(k.a.Control,{type:"text",className:"",id:"name",placeholder:"Name",required:!0}),Object(x.jsx)(k.a.Label,{for:"name",children:"Name"})]}),Object(x.jsxs)(S.a,{md:6,className:"form-floating",children:[Object(x.jsx)(k.a.Control,{type:"email",className:"",id:"email",placeholder:"name@example.com",required:!0}),Object(x.jsx)(k.a.Label,{for:"email",children:"Email address"})]}),Object(x.jsxs)(S.a,{xs:12,className:"form-floating",children:[Object(x.jsx)(k.a.Control,{as:"textarea",className:"",placeholder:"Leave a message here",id:"message",style:{height:"100px"},required:!0}),Object(x.jsx)(k.a.Label,{for:"message",children:"Message"})]}),Object(x.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(x.jsx)(w.a,{type:"submit",variant:"primary",className:"text-white px-5",children:"Submit"})})]})}),Object(x.jsx)(y.a.Footer,{})]})})},C=(a(80),a(46)),I=a(45),D=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useRef)(a),r=Object(c.useRef)(null),i=Object(c.useRef)(210);Object(c.useEffect)((function(){var e=function(e){var t=s.current;return!t&&e.composedPath().includes(r.current)?(document.body.classList.add("open","overflow-hidden"),void l(!0)):t?(document.body.classList.remove("open","overflow-hidden"),void l(!1)):void 0};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var l=function(e){s.current=e,n(e)};return Object(x.jsx)(w.a,{id:"reveal-btn",ref:r,variant:"link",className:"fs-5 rounded-circle",children:Object(x.jsx)(I.a,{icon:C.b,style:{transform:"rotate(".concat(i.current,"deg)"),transition:"all .1s linear .3s"}})})},E=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(d.a)(s,2),i=(r[0],r[1]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g.a,{expand:!0,variant:!0,children:Object(x.jsxs)(N.a,{className:"border-bottom",children:[Object(x.jsx)(D,{}),Object(x.jsxs)(f.a,{className:"",children:[Object(x.jsx)(p.LinkContainer,{to:"/",children:Object(x.jsx)(f.a.Link,{className:"",children:"Home"})}),Object(x.jsx)(p.LinkContainer,{to:"/wiki",children:Object(x.jsx)(f.a.Link,{className:"",children:"Wiki"})}),Object(x.jsx)(f.a.Link,{eventKey:"contact",onClick:function(){return n(!0)},children:"Contact"})]})]})}),Object(x.jsx)(L,{show:a,handleClose:function(){return n(!1)},handleSubmit:function(e){console.log(e),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),i(!0)}})]})},T=function(e){var t=e.children;return Object(x.jsxs)(b.BrowserRouter,{children:[Object(x.jsxs)("div",{id:"page",className:"min-vh-100 d-flex flex-column",children:[Object(x.jsx)(E,{}),Object(x.jsx)("main",{children:t}),Object(x.jsx)(v,{})]}),Object(x.jsx)(O,{})]})},_=a(94),R=a(60),F=function(e){var t=e.title;return Object(x.jsx)(R.a,{children:Object(x.jsx)("title",{children:t})})},A=(a(84),function(){var e=Object(c.useRef)(null),t=Object(c.useState)({}),a=Object(d.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight,a=function(a){console.log("move"),s({xVal:-1/(t/2)*a.clientY+1,yVal:1/(e/2)*a.clientX-1,transX:16/e*a.clientX-8,transY:10/t*a.clientY-3,transZ:60/t*a.clientY-35})};return window.addEventListener("mousemove",r(a,300)),function(){window.removeEventListener("mousemove",r(a,300))}}),[]),Object(c.useLayoutEffect)((function(){e.current.style.transform="\n      perspective(1000px)\n      translate3d(".concat(n.transX,"px,").concat(n.transY,"px,").concat(n.transZ,"px)\n      rotate3d(").concat(n.xVal,",").concat(n.yVal,",0,2deg)\n      ")}),[n]);var r=function(e,t){var a=!0;return function(c){a&&(a=!1,setTimeout((function(){a=!0}),t),e(c))}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{class:"hero rounded-circle mx-auto mb-3",children:[Object(x.jsx)("div",{class:"hero__back hero__back--static"}),Object(x.jsx)("div",{ref:e,class:"hero__back hero__back--mover"})]}),Object(x.jsxs)("h1",{className:"display-5 text-secondary",children:[Object(x.jsx)("span",{className:"text-primary",children:"to"}),"abr.de"]}),Object(x.jsx)("p",{className:"mb-5",children:"Explore a bunch of code snippets you may find helpful."})]})}),B=a(91),H=a(92),P=a(93),z=a(26),M=function(e){var t=e.arr,a=e.action;return t.map((function(e){return"..."===e.title?Object(x.jsx)(w.a,{variant:"brand-secondary",as:"a",href:"wiki",className:"font-monospace py-2 flex-fill",children:e.title}):Object(x.jsxs)(w.a,{variant:"brand-primary",className:"font-monospace py-2 flex-fill",onClick:function(){return a(e.title)},children:[Object(x.jsx)(I.a,{icon:e.faIcon,className:""})," ",e.title]})}))},W=a(90),Y=a(99),U=function(e){var t=e.map((function(e){var t,a=(t=e.tags,t.split(", ").map((function(e){return{tid:e.split(":")[0],title:e.split(":")[1]}}))).map((function(e){return Object(x.jsx)(W.a,{className:"bg-secondary-light rounded ms-1",children:e.title})}));return Object(x.jsx)(p.LinkContainer,{to:"post/".concat(e.nid),children:Object(x.jsxs)(Y.a.Item,{action:"true",className:"d-flex flex-wrap justify-content-between",children:[e.title,Object(x.jsx)("span",{className:"text-right",children:a})]})})}));return Object(x.jsx)(Y.a,{variant:"",className:"text-start mb-5",children:t})},V=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(d.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)(!1),j=Object(d.a)(o,2),b=j[0],u=j[1],h=Object(c.useRef)(null),O=[{title:"linux",faIcon:z.d},{title:"drupal",faIcon:z.b},{title:"es6",faIcon:z.c},{title:"scss",faIcon:z.f},{title:"react",faIcon:z.e},{title:"bash",faIcon:C.a},{title:"docker",faIcon:z.a},{title:"...",faIcon:""}],f=function(e){n([]),""!==e&&(u(!0),m.articlesQuery(e).then((function(e){n(e),u(!1),l(""),h.current.focus(),console.log(e)})))};return Object(x.jsxs)("div",{id:"search",children:[Object(x.jsx)(k.a,{onSubmit:function(e){return function(e){e.preventDefault(),f(i)}(e)},className:"",children:Object(x.jsxs)(B.a,{className:"shadow",size:"lg",children:[Object(x.jsx)(B.a.Text,{className:"bg-white text-muted ps-2 pe-0",children:Object(x.jsx)(w.a,{size:"sm",variant:"",disabled:!0,children:"toabr.de /"})}),Object(x.jsx)(k.a.Control,{ref:h,type:"text",className:"ps-0 shadow-none fs-4",placeholder:"search ...","aria-label":"search","aria-describedby":"basic-addon1",onChange:function(e){return function(e){l(e.currentTarget.value)}(e)},value:i}),Object(x.jsx)(w.a,{variant:"primary",id:"search-btn",type:"submit",className:"",disabled:b,children:b?Object(x.jsx)(H.a,{animation:"grow",variant:"white",size:"sm"}):Object(x.jsx)(P.a,{className:"text-white"})})]})}),U(a),Object(x.jsx)("div",{className:"d-flex flex-wrap gap-2 mb-3",children:M({arr:O,action:function(e){l(e),f(e)}})})]})},q=a(100),J=function(e){var t=e.variant,a=e.data,c="post/".concat(a.nid[0].value),n=a?a.field_tags.map((function(e){return Object(x.jsx)("a",{className:"ps-1 text-secondary text-decoration-none",href:"/tag/".concat(e.target_id),children:Object(x.jsxs)("small",{children:["#",e.title]})})})):[];return a&&"teaser"===t?Object(x.jsx)(p.LinkContainer,{to:c,children:Object(x.jsx)(q.a,{as:"article",bg:"",className:"border-0 shadow",children:Object(x.jsxs)(_.a,{className:"row g-0",children:[Object(x.jsx)(S.a,{md:8,children:Object(x.jsx)(q.a.Img,{style:{width:"100%",height:"18rem",objectFit:"cover"},src:a.field_image[2].url})}),Object(x.jsx)(S.a,{md:4,children:Object(x.jsxs)(q.a.Body,{className:"d-flex h-100 flex-column justify-content-between",children:[Object(x.jsx)("div",{className:"text-primary mb-2",children:Object(x.jsx)("small",{children:"development"})}),Object(x.jsx)(q.a.Title,{children:Object(x.jsx)("a",{href:c,className:"text-body text-decoration-none",children:a.title[0].value})}),Object(x.jsx)(q.a.Subtitle,{className:"mb-2 text-muted",children:a.created[0].locale}),Object(x.jsx)(q.a.Text,{children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:a.body[0].processed}})}),Object(x.jsx)("div",{className:"text-end",children:n})]})})]})})}):a?Object(x.jsx)(p.LinkContainer,{to:c,children:Object(x.jsxs)(q.a,{as:"article",bg:"",className:"h-100 border-0 shadow",children:[Object(x.jsx)("a",{href:c,children:Object(x.jsx)(q.a.Img,{variant:"top",className:"img-fluid",src:a.field_image[0].url,style:{width:"100%",height:"18rem",objectFit:"cover"}})}),Object(x.jsxs)(q.a.Body,{className:"py-1 pe-2",children:[Object(x.jsx)("div",{className:"text-primary mb-2",children:Object(x.jsx)("small",{children:"development"})}),Object(x.jsx)(q.a.Title,{className:"mb-0",children:Object(x.jsx)("a",{href:c,className:"text-body text-decoration-none",children:a.title[0].value})}),Object(x.jsxs)(q.a.Subtitle,{as:"small",className:"mb-2 text-muted",children:["updated ",a.changed[0].locale]}),Object(x.jsx)(q.a.Text,{className:"py-1",children:"Monitor and filter the logs of multiple remote Drupal installations from your localhost."}),Object(x.jsx)("div",{className:"text-end",children:n})]})]})}):void 0},X=function(e){var t=e.data,a=void 0===t?[]:t;return Object(x.jsxs)(N.a,{as:"section",id:"blog",fluid:!0,className:"p-0",children:[Object(x.jsx)(_.a,{sm:12,className:"mx-auto mb-4",style:{maxWidth:"1040px"},children:Object(x.jsxs)(S.a,{className:"mb-4",children:[Object(x.jsx)("h2",{className:"border-bottom text-center pb-3 mb-4",children:"Showcase"}),a.length>0&&Object(x.jsx)(J,{variant:"teaser",data:a[0]})]})}),a.length>0&&Object(x.jsxs)(_.a,{xs:1,md:2,lg:3,className:"mx-auto pb-3 mb-4",style:{maxWidth:"1040px"},children:[Object(x.jsx)(S.a,{className:"mb-4",children:Object(x.jsx)(J,{data:a[1]})}),Object(x.jsx)(S.a,{className:"mb-4",children:Object(x.jsx)(J,{data:a[2]})}),Object(x.jsx)(S.a,{className:"mb-4",children:Object(x.jsx)(J,{data:a[3]})})]})]})},Q=function(e){var t=e.showcaseData;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(F,{title:"Home"}),Object(x.jsx)(N.a,{fluid:!0,as:"section",id:"header",className:"p-0",children:Object(x.jsx)(_.a,{style:{maxWidth:"1040px"},className:"mx-auto justify-content-center",children:Object(x.jsx)(S.a,{sm:11,md:10,lg:9,xl:8,children:Object(x.jsxs)("header",{className:"text-center mb-5 py-3",children:[Object(x.jsx)(A,{}),Object(x.jsx)(V,{})]})})})}),Object(x.jsx)(X,{data:t})]})},Z=function(){return Object(x.jsx)(N.a,{fluid:"md",className:"mt-5",children:Object(x.jsx)(_.a,{children:Object(x.jsx)(S.a,{children:Object(x.jsxs)(q.a,{className:"",children:[Object(x.jsx)(q.a.Header,{className:"",children:"404"}),Object(x.jsxs)(q.a.Body,{className:"",children:[Object(x.jsx)(q.a.Title,{className:"",children:"Custom Error Page"}),Object(x.jsxs)(q.a.Text,{className:"",children:["Edit Custom 404 error page ",Object(x.jsx)("code",{children:"src/pages/NotFound.js"})]}),Object(x.jsx)(p.LinkContainer,{to:"/home",children:Object(x.jsx)(w.a,{className:"",children:"Home Page"})})]})]})})})})},K=function(e){var t=e.head,a=e.description,c=e.isLoading;return Object(x.jsx)(N.a,{children:Object(x.jsxs)("div",{className:"text-center mt-5",children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)("p",{className:"lead text-capitalize",children:a}),c&&Object(x.jsx)(H.a,{animation:"grow",variant:"",size:"sm"})]})})},G=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(d.a)(s,2),i=r[0],l=r[1];Object(c.useEffect)((function(){m.getTags().then((function(e){console.log(e),n(e)}))}),[]),Object(c.useEffect)((function(){m.getArticles().then((function(e){console.log(e),l(e)}))}),[]);var o="Wiki",j=a.map((function(e){return Object(x.jsx)(w.a,{variant:"brand-primary",size:"sm",className:"flex-fill",children:e.title})})),b=i.map((function(e){return Object(x.jsx)(Y.a.Item,{as:"a",action:"true",href:"post/".concat(e.nid[0].value),children:e.title[0].value})}));return Object(x.jsxs)("div",{children:[Object(x.jsx)(F,{title:o}),Object(x.jsx)(K,{head:o,description:"welcome to react bootstrap template"}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(S.a,{md:8,className:"mx-auto",children:[Object(x.jsx)("div",{className:"d-flex flex-wrap gap-2 mb-5",children:j}),Object(x.jsx)("h2",{className:"text-center",children:"Recent"}),Object(x.jsx)(Y.a,{children:b})]})})]})},$=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!0),i=Object(d.a)(r,2),l=i[0],o=i[1],j=Object(c.useState)(!0),b=Object(d.a)(j,2),h=b[0],O=b[1],f=Object(c.useState)("Post ".concat(e.match.params.nid)),p=Object(d.a)(f,2),v=p[0],g=p[1],y=Object(c.useState)("Loading ..."),w=Object(d.a)(y,2),k=w[0],L=w[1],C=Object(c.useRef)(e.match.params.nid);return Object(c.useEffect)((function(){m.getArticles({ids:[C.current]}).then((function(e){return function(e){console.log(e),e.length?(o(!1),s(e),g("Post ".concat(C.current)),L(e[0].title[0].value)):(o(!1),g((function(e){return"".concat(e," not available")})),L("redirecting ..."),setTimeout((function(){O(!1)}),3e3))}(e)}))}),[]),h?Object(x.jsxs)("div",{children:[Object(x.jsx)(F,{title:v}),Object(x.jsx)(K,{head:v,description:k,isLoading:l}),n.length>0&&Object(x.jsx)(N.a,{children:Object(x.jsx)(S.a,{md:8,className:"mx-auto",children:Object(x.jsx)(q.a,{children:Object(x.jsx)(q.a.Body,{children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:n[0].body[0].value}})})})})})]}):Object(x.jsx)(u.c,{to:"/home"})},ee=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("showcaseData"))||[]),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getTags();case 2:return a=e.sent,c=t.map((function(e){return e.field_tags.map((function(e){var t=a.find((function(t){return t.tid==e.target_id}));return e.title=t.title,e})),e})),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getShowcase();case 2:return t=e.sent,console.log("showcaseData",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.length<1&&t().then((function(e){return function(e){return e.map((function(e){var t=new Date(e.created[0].value);e.created[0].locale=t.toLocaleDateString();var a=new Date(e.changed[0].value);return e.changed[0].locale=a.toLocaleDateString(),e}))}(e)})).then((function(t){return e(t)})).then((function(e){localStorage.setItem("showcaseData",JSON.stringify(e)),n(e)}))}),[]),Object(x.jsx)(b.BrowserRouter,{children:Object(x.jsx)(T,{children:Object(x.jsxs)(u.g,{children:[Object(x.jsx)(u.d,{path:"/",exact:!0,render:function(e){return Object(x.jsx)(Q,Object(i.a)(Object(i.a)({},e),{},{showcaseData:a}))}}),Object(x.jsx)(u.d,{path:"/wiki",component:G}),Object(x.jsx)(u.d,{path:"/post/:nid",component:$}),Object(x.jsx)(u.d,{component:Z})]})})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.84c98e4c.chunk.js.map