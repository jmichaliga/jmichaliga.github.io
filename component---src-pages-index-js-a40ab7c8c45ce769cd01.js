(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"I/Ru":function(e,n,t){"use strict";var a=t("MUpH"),r=t("q1tI"),i=t.n(r),o=t("Wbzz"),c=t("vOnD"),l=t("zDcZ"),s=t("LbRr");t("EgAo");function u(){var e=Object(a.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 8px;\n  padding-left: ","px;\n  text-shadow: 0px 0px 4px rgba(0,0,0,0.25);\n  a {\n    color: rgba(255, 255, 255, 0.9);\n    text-decoration: none;\n    &:hover {\n      border-bottom: 1px solid ",";\n    }\n  }\n"]);return u=function(){return e},e}function m(){var e=Object(a.a)(["\n  width: 100%;\n"]);return m=function(){return e},e}function p(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return p=function(){return e},e}function d(){var e=Object(a.a)(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  min-height: 100vh;\n  max-width: 960px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]);return d=function(){return e},e}var b=Object(c.a)("div")(d()),f=Object(c.a)("div")(p()),h=Object(c.a)("main")(m()),g=Object(c.a)("footer")(u(),l.a.space[2],l.a.colors.jmBlue);n.a=function(e){var n=e.children;return i.a.createElement(o.StaticQuery,{query:"3649515864",render:function(e){return i.a.createElement(b,null,i.a.createElement(f,null,i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(h,null,n)),i.a.createElement(g,null,i.a.createElement("a",{href:"https://codepen.io/jmichaliga/full/GBNWXx",target:"_blank",rel:"noreferrer noopener"},i.a.createElement("span",{role:"img","aria-label":"2021"},"👾"))))}})}},RXBc:function(e,n,t){"use strict";t.r(n);var a=t("MUpH"),r=t("q1tI"),i=t.n(r),o=t("I/Ru"),c=t("vrFN"),l=t("vOnD"),s=t("zDcZ"),u=t("Wbzz"),m=function(e){var n=e.icon,t=e.inverted,a=e.text,r=Object(u.useStaticQuery)("550329952");return i.a.createElement(i.a.Fragment,null,r.allFile.edges.filter((function(e){return e.node.name===n})).map((function(e){return i.a.createElement("abbr",{title:n,key:n,className:"hidden"},i.a.createElement("img",{key:n,src:e.node.publicURL,height:"24",width:"24",alt:a,className:t?"invert":""}))})))};m.defaultProps={icon:"github",inverted:!0,text:""};var p=m;function d(){var e=Object(a.a)(["\n  & {\n    border-radius: ","px;  \n    padding: ","px;\n    color: ",";\n    background: ",";\n    width: 40px; height: 40px;\n    transition-duration: ",";\n    border-bottom: 2px solid transparent;\n    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);\n    & svg {\n      cursor: pointer;\n    }\n  }\n  &:hover{\n    text-shadow: "," 1px 1px 2px;\n    border-bottom: 2px solid ",";\n    box-shadow: 0px 0px 4px rgba(0,0,0,0);\n  }\n"]);return d=function(){return e},e}var b=Object(l.a)("a")(d(),s.a.space[1],s.a.space[1],s.a.colors.white,s.a.colors.jmRed,s.a.duration.normal,s.a.colors.black,s.a.colors.jmBlue),f=function(e){var n=e.href,t=e.icon,a=e.inverted;return i.a.createElement(b,{href:n,key:"icon-"+t,rel:"external noopener noreferrer",target:"_blank"},i.a.createElement(p,{icon:t,inverted:a}))};f.defaultProps={href:"",icon:"github",inverted:!0};var h=f,g=function(e){var n=e.name,t=e.inverted,a=Object(u.useStaticQuery)("3731454815");return i.a.createElement("img",{src:a.file.publicURL,alt:n,className:t?"invert":""})};g.defaultProps={name:"",inverted:!1};var x=g,v=t("2CHS");var j=t("g73P");function E(){var e=Object(a.a)(["\n  opacity: 0;\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),\n    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);\n  transform: scale(0.5) translate3d(-50px,0,0);\n  transition-delay: ","ms;\n  ","\n"]);return E=function(){return e},e}function w(){var e=Object(a.a)(["\n  position: fixed;\n  cursor: pointer;\n  left: 0px;\n  bottom: 0px;\n"]);return w=function(){return e},e}function k(){var e=Object(a.a)(["\n  position: fixed;\n  cursor: pointer;\n  left: 8px;\n  bottom: 0px;\n  transition-duration: ",";\n  text-shadow: 0px 0px 4px rgba(0,0,0,0.25);\n  &.close {\n    transform: translate3d(0px, 0, 0);\n  }\n  &.open {\n    transform: translate3d(-50px, 0, 0);\n  }\n"]);return k=function(){return e},e}var y=l.a.section(k(),s.a.duration.normal),O=l.a.section(w()),F=Object(l.a)((function(e){e.showSkills;var n=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["showSkills"]);return i.a.createElement(v.b,n)}))(E(),(function(e){return 15*e.index}),(function(e){return e.showSkills&&"\n      transform: scale(1) translate3d(0,0,0);\n      opacity: 1;\n  "})),S=["illustrator","photoshop","css3","d3","docker","eslint","figma","firebase","gatsby","graphql","html5","javascript","jest","kubernetes","next","node","npm","nuxt-dot-js","postgresql","react","redux","rollup","sass","serverless","vue","yarn"],z=function(){var e=Object(r.useState)(!1),n=e[0],t=e[1],a=Object(j.a)("bloop"),o=a[0],c=a[1],l=function(){c(),o(),t(!n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{className:n?"open":"close",onClick:l},S.sort().map((function(e,t){return i.a.createElement(F,{ml:2,showSkills:n,index:S.length-t,key:e},i.a.createElement(p,{icon:e,inverted:!1,ml:2}))}))),i.a.createElement(y,{className:n?"open":"close",onClick:l},i.a.createElement("span",{role:"img","aria-label":"skills"},"⚡️")))};function N(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return N=function(){return e},e}function D(){var e=Object(a.a)(["\n  transition-duration: ",";\n  transform: scale(1);\n  &:hover {\n    transform: scale(0.9) rotate(-15deg);\n    filter: brightness(80%);\n  }\n"]);return D=function(){return e},e}function R(){var e=Object(a.a)(["\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  height: 2px;\n  background: ",";\n"]);return R=function(){return e},e}var I=l.a.div(R(),s.a.colors.jmRed),B=Object(l.a)(v.b)(D(),s.a.duration.normal),q=l.a.section(N());n.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(z,null),i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Home",keywords:["brooklyn","creative","engineer","web design","justin michaliga","jmichaliga","logo design","design systems","mobile apps","web developer","full-stack","front end","new york","nyc","ecmascript6","east village","greenpoint","nextjs"].concat(S)}),i.a.createElement(v.d,null,i.a.createElement(v.b,{width:[1,.5]},i.a.createElement(v.c,null,i.a.createElement(B,null,i.a.createElement(x,{name:"jm"})))),i.a.createElement(v.b,{width:[1,.5],p:3},i.a.createElement(v.c,{mt:4},i.a.createElement("p",null,"Full-Stack Javascript Engineer with over a decade of professional experience in agency, direct service, and in-house brand capacities — specializing in Interactive Design, Mobile/Web Development, GraphQL Adoption, Design Systems,"," ",i.a.createElement("abbr",{title:"and",className:"amp"},"&")," ","Immersive User Experiences.",i.a.createElement("br",null),"Based in Brooklyn, NYC 🍎."),i.a.createElement(q,null,i.a.createElement(h,{href:"https://github.com/jmichaliga",icon:"github",text:"Follow @jmichaliga on Github."}),i.a.createElement(h,{href:"https://dribbble.com/jmichaliga",icon:"dribbble",text:"Follow @jmichaliga on Dribbble."}),i.a.createElement(h,{href:"https://codepen.com/jmichaliga",icon:"codepen",text:"Follow @jmichaliga on Codepen."}),i.a.createElement(h,{href:"https://twitter.com/jmichaliga",icon:"twitter",text:"Follow @jmichaliga on twitter."}),i.a.createElement(h,{href:"https://www.linkedin.com/in/justin-michaliga-6b57594",icon:"linkedin",text:"Follow @jmichaliga on LinkedIn."})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a40ab7c8c45ce769cd01.js.map