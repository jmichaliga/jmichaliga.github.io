(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,r){"use strict";r.r(t);var a=r(148),n=r.n(a),o=r(0),i=r.n(o),c=r(156),p=r(154),s=(r(160),r(173)),l=r(4),u=r.n(l),d=function(e){var t=e.icon,r=e.inverted,a=s.data;return i.a.createElement(i.a.Fragment,null,a.allFile.edges.filter(function(e){return e.node.name===t}).map(function(e,a){return i.a.createElement("abbr",{title:t,className:"hidden"},i.a.createElement("img",{key:t,src:e.node.publicURL,height:"24",width:"24",alt:t,className:r?"invert":""}))}))};d.propTypes={icon:u.a.string,inverted:u.a.bool},d.defaultProps={icon:"github",inverted:!0};var m=d,f=r(150),b=r(147);function g(){var e=n()(["\n  & {\n    border-radius: ","px;  \n    padding: ","px;\n    color: ",";\n    background: ",";\n    transition-duration: ",";\n  }\n  &:hover{\n    text-shadow: "," 1px 1px 2px;\n    border-bottom: 3px solid ",";\n  }\n"]);return g=function(){return e},e}var y=Object(f.a)("a")(g(),b.a.space[1],b.a.space[1],b.a.colors.white,b.a.colors.jmRed,b.a.duration.slow,b.a.colors.black,b.a.colors.jmBlue),h=function(e){var t=e.href,r=e.icon,a=e.text,n=e.inverted;return i.a.createElement(y,{href:t,key:"icon-"+r,rel:"external noopener noreferrer",target:"_blank"},i.a.createElement(m,{icon:r,inverted:n})," ",a)};h.propTypes={href:u.a.string,icon:u.a.string,text:u.a.string,inverted:u.a.bool},h.defaultProps={href:"",icon:"github",text:"",inverted:!0};var v=h,x=r(174),k=function(e){var t=e.name,r=e.inverted,a=x.data;return i.a.createElement("img",{src:a.file.publicURL,alt:t,className:r?"invert":""})};k.propTypes={name:u.a.string,inverted:u.a.bool},k.defaultProps={name:"",inverted:!1};var w=k;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var E=[40,52,64].map(function(e){return e+"em"}),R=u.a.oneOfType([u.a.number,u.a.string,u.a.array,u.a.object]),T=function(e){return function(){return e.apply(void 0,arguments)}},L=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var n=r.reduce(function(t,r){return V(t)?t:("string"==typeof r?r.split("."):[r]).reduce(function(e,t){return e&&V(e[t])?e[t]:null},e)},null);return V(n)?n:r[r.length-1]},V=function(e){return null!=e},F=function(e){return"number"==typeof e&&!isNaN(e)},U=function(e){return F(e)&&0!==e?e+"px":e},S=function(e){return"@media screen and (min-width: "+U(e)+")"},O=function(e,t){return L(t,e)},C=function e(t,r){var a={};for(var n in t)a[n]=t[n];for(var o in r)t[o]&&"object"==typeof t[o]?a[o]=e(t[o],r[o]):a[o]=r[o];return a},z=function(){for(var e={},t=0;t<arguments.length;t++)e=C(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},A=function(e){var t,r=e.prop,a=e.cssProperty,n=e.alias,o=e.key,i=e.transformValue,c=void 0===i?O:i,p=e.scale,s=void 0===p?{}:p,l=a||r,u=function(e){var t=L(e,r,n,null);if(!V(t))return null;var a,i=L(e.theme,o,s),p=function(e){var t;return V(e)?((t={})[l]=c(e,i),t):null};if("object"!=typeof(a=t)||null===a)return p(t);var u=L(e.theme,"breakpoints",E),d=[];if(Array.isArray(t)){d.push(p(t[0]));for(var m=1;m<t.slice(0,u.length+1).length;m++){var f=p(t[m]);if(f){var b,g=S(u[m-1]);d.push(((b={})[g]=f,b))}}}else{for(var y in t){var h,v=u[y],x=S(v),k=p(t[y]);if(v)d.push(((h={})[x]=k,h));else d.unshift(k)}d.sort()}return z.apply(void 0,d)};return(u.propTypes=((t={})[r]=T(R),t))[r].meta={prop:r,themeKey:o},n&&(u.propTypes[n]=T(R),u.propTypes[n].meta={prop:n,themeKey:o}),u},W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){var r=t.map(function(t){return t(e)}).filter(Boolean);return z.apply(void 0,r)};return a.propTypes={},t.forEach(function(e){a.propTypes=j({},a.propTypes,e.propTypes)}),a},M=function(e){return function(t){var r=function(r){return t(e(r))};for(var a in t)r[a]=t[a];return r}},q=function(e){var t,r=e.key,a=e.prop,n=void 0===a?"variant":a,o=function(e){return L(e.theme,[r,e[n]].join("."),null)};return o.propTypes=((t={})[n]=u.a.oneOfType([u.a.number,u.a.string]),t),o},B=[0,4,8,16,32,64,128,256,512],P=function(e,t){if(!F(e))return U(L(t,e,e));var r=e<0,a=Math.abs(e),n=L(t,a);return F(n)?U(n*(r?-1:1)):r?"-"+n:n},I=A({prop:"margin",alias:"m",key:"space",transformValue:P,scale:B}),D=A({prop:"marginTop",alias:"mt",key:"space",transformValue:P,scale:B}),H=A({prop:"marginBottom",alias:"mb",key:"space",transformValue:P,scale:B}),N=A({prop:"marginLeft",alias:"ml",key:"space",transformValue:P,scale:B}),J=A({prop:"marginRight",alias:"mr",key:"space",transformValue:P,scale:B}),G=A({prop:"padding",alias:"p",key:"space",transformValue:P,scale:B}),K=A({prop:"paddingTop",alias:"pt",key:"space",transformValue:P,scale:B}),Q=A({prop:"paddingBottom",alias:"pb",key:"space",transformValue:P,scale:B}),Y=A({prop:"paddingLeft",alias:"pl",key:"space",transformValue:P,scale:B}),_=A({prop:"paddingRight",alias:"pr",key:"space",transformValue:P,scale:B}),X=M(function(e){return j({},e,{mt:V(e.my)?e.my:e.mt,mb:V(e.my)?e.my:e.mb,ml:V(e.mx)?e.mx:e.ml,mr:V(e.mx)?e.mx:e.mr,pt:V(e.py)?e.py:e.pt,pb:V(e.py)?e.py:e.pb,pl:V(e.px)?e.px:e.pl,pr:V(e.px)?e.px:e.pr})})(W(I,D,H,N,J,G,K,Q,Y,_)),Z=W(A({prop:"color",key:"colors"}),A({prop:"backgroundColor",alias:"bg",key:"colors"})),$=function(e,t){return!F(e)||e>1?U(e):100*e+"%"},ee=A({prop:"width",key:"widths",transformValue:$}),te=function(e,t){return U(L(t,e))},re=A({prop:"fontSize",key:"fontSizes",transformValue:te,scale:[12,14,16,20,24,32,48,64,72]}),ae=(A({prop:"fontFamily",key:"fonts"}),A({prop:"fontWeight",key:"fontWeights"}),A({prop:"lineHeight",key:"lineHeights"}),A({prop:"textAlign"}),A({prop:"fontStyle"}),A({prop:"letterSpacing",key:"letterSpacings",transformValue:te}),A({prop:"display"}),A({prop:"maxWidth",key:"maxWidths",transformValue:te}),A({prop:"minWidth",key:"minWidths",transformValue:te}),A({prop:"height",key:"heights",transformValue:te})),ne=(A({prop:"maxHeight",key:"maxHeights",transformValue:te}),A({prop:"minHeight",key:"minHeights",transformValue:te}),M(function(e){return j({},e,{width:e.size,height:e.size})})(W(ee,ae)),A({prop:"verticalAlign"}),A({prop:"alignItems"}),A({prop:"alignContent"}),A({prop:"justifyItems"}),A({prop:"justifyContent"}),A({prop:"flexWrap"}),A({prop:"flexBasis",transformValue:$}),A({prop:"flexDirection"}),A({prop:"flex"}),A({prop:"justifySelf"}),A({prop:"alignSelf"}),A({prop:"order"}),A({prop:"gridGap",key:"space",transformValue:te,scale:B}),A({prop:"gridColumnGap",key:"space",transformValue:te,scale:B}),A({prop:"gridRowGap",key:"space",transformValue:te,scale:B}),A({prop:"gridColumn"}),A({prop:"gridRow"}),A({prop:"gridAutoFlow"}),A({prop:"gridAutoColumns"}),A({prop:"gridAutoRows"}),A({prop:"gridTemplateColumns"}),A({prop:"gridTemplateRows"}),A({prop:"gridTemplateAreas"}),A({prop:"gridArea"}),A({prop:"border",key:"borders"})),oe=A({prop:"borderWidth",key:"borderWidths",transformValue:te}),ie=A({prop:"borderStyle",key:"borderStyles"}),ce=A({prop:"borderColor",key:"colors"});W(ne,A({prop:"borderTop",key:"borders"}),A({prop:"borderRight",key:"borders"}),A({prop:"borderBottom",key:"borders"}),A({prop:"borderLeft",key:"borders"}),oe,ie,ce,A({prop:"borderRadius",key:"radii",transformValue:te})),A({prop:"boxShadow",key:"shadows"}),A({prop:"opacity"}),A({prop:"overflow"}),A({prop:"background"}),A({prop:"backgroundImage"}),A({prop:"backgroundSize"}),A({prop:"backgroundPosition"}),A({prop:"backgroundRepeat"}),A({prop:"position"}),A({prop:"zIndex",key:"zIndices"}),A({prop:"top",transformValue:te}),A({prop:"right",transformValue:te}),A({prop:"bottom",transformValue:te}),A({prop:"left",transformValue:te}),q({key:"buttons"}),q({key:"textStyles",prop:"textStyle"}),q({key:"colorStyles",prop:"colors"});function pe(){var e=n()(["\n  transition-duration: ",";\n  tranform: scale(1);\n  &:hover{\n    transform: scale(0.9);\n    filter: invert(100%);\n  }\n"]);return pe=function(){return e},e}function se(){var e=n()(["\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return se=function(){return e},e}function le(){var e=n()(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -1.45rem;\n"]);return le=function(){return e},e}function ue(){var e=n()(["\n  ","\n  ","\n  ","\n  ","\n"]);return ue=function(){return e},e}var de=f.a.div(ue(),X,ee,re,Z),me=Object(f.a)(de)(le()),fe=Object(f.a)(de)(se()),be=Object(f.a)(de)(pe(),b.a.duration.normal),ge=["adobeillustrator","figma","firebase","gatsby","html5","javascript","node-dot-js","nuxt-dot-js","react","vue-dot-js"];t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(p.a,{title:"Home",keywords:["creative","web design","mobile web designer","baltimore","justin michaliga","jmichaliga","logo design","mobile web","mobile apps","web developer","front-end","front end","maryland","new york","nyc","html5","javascript","east village"]}),i.a.createElement(me,null,i.a.createElement(de,{width:[1,.5]},i.a.createElement(fe,null,i.a.createElement(be,null,i.a.createElement(w,{name:"jm"})))),i.a.createElement(de,{width:[1,.5]},i.a.createElement(fe,{mt:3},i.a.createElement("p",null,"Over a decade of professional experience in agency, direct service, and in-house brand capacities — specializing in Interactive Design, Mobile/Web Development, Full-Stack Engineering, ",i.a.createElement("abbr",{title:"and",className:"amp"},"&")," User Experiences."),i.a.createElement("section",{style:{position:"fixed",right:"8px",bottom:"0px"}},ge.map(function(e){return i.a.createElement(de,{ml:2},i.a.createElement(m,{icon:e,inverted:!1,ml:1}))})),i.a.createElement("p",null,i.a.createElement(v,{href:"https://twitter.com/jmichaliga",icon:"twitter",text:"Follow @jmichaliga on twitter."})),i.a.createElement("p",null,i.a.createElement(v,{href:"https://github.com/jmichaliga",icon:"github",text:"Follow @jmichaliga on Github."})),i.a.createElement("p",null,i.a.createElement(v,{href:"https://dribbble.com/jmichaliga",icon:"dribbble",text:"Follow @jmichaliga on Dribbble."})),i.a.createElement("p",null,i.a.createElement(v,{href:"https://codepen.com/jmichaliga",icon:"codepen",text:"Follow @jmichaliga on Codepen."}))))))}},147:function(e,t,r){"use strict";var a=function(e,t){return t.forEach(function(t,r){return Object.defineProperty(e,t,{enumerable:!1,get:function(){return this[r]}})})},n=[32,40,48,64].map(function(e){return e+"em"}),o=n.map(function(e){return"@media screen and (min-width:"+e+")"}),i=["sm","md","lg","xl"];a(n,i),a(o,i);var c={boxShadows:["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],breakpoints:n,colors:{black:"#000",white:"#FFF",text:"#123",gray:"#456",red:"#C00",orange:"#F81",yellow:"#FD2",green:"#0A0",blue:"#03F",violet:"#70B",jmRed:"#FA1967",jmBlue:"#0AC",error:"#C00",danger:"#F81",success:"#0A0",secondary:"#F81",primary:"#03F"},duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},fontSizes:[12,14,16,20,24,32,40,56,72],maxContainerWidth:"1280px",mediaQueries:o,radii:[0,2,6],radius:"2px",space:[0,4,8,16,32,64,128],timingFunctions:{easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}};t.a=c},149:function(e,t,r){var a;e.exports=(a=r(153))&&a.default||a},151:function(e,t,r){"use strict";r.d(t,"b",function(){return l});var a=r(0),n=r.n(a),o=r(4),i=r.n(o),c=r(33),p=r.n(c);r.d(t,"a",function(){return p.a});r(149);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga"}}}}},153:function(e,t,r){"use strict";r.r(t);r(34);var a=r(0),n=r.n(a),o=r(4),i=r.n(o),c=r(55),p=r(2),s=function(e){var t=e.location,r=p.default.getResourcesForPathnameSync(t.pathname);return r?n.a.createElement(c.a,Object.assign({location:t,pageResources:r},r.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,r){"use strict";var a=r(155),n=r(0),o=r.n(n),i=r(4),c=r.n(i),p=r(158),s=r.n(p);function l(e){var t=e.description,r=e.lang,n=e.meta,i=e.keywords,c=e.title,p=a.data.site,l=t||p.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga",description:"Justin W. Michaliga is a Creative Mobile Web Developer and Interactive Designer in NYC.",author:"@jmichaliga"}}}}},156:function(e,t,r){"use strict";var a=r(148),n=r.n(a),o=r(152),i=r(0),c=r.n(i),p=r(4),s=r.n(p),l=r(151),u=r(150),d=r(147);function m(){var e=n()(["\n  color: ",";\n  text-shadow: "," 1px 1px 2px;\n  letter-spacing: -0.05em;\n  text-transform: uppercase;\n  font-size: ","px;\n  padding: 1.45rem 1.0875rem;\n  text-align: center;\n"]);return m=function(){return e},e}var f=Object(u.a)("h1")(m(),d.a.colors.white,d.a.colors.black,d.a.fontSizes[6]),b=function(e){var t=e.siteTitle;return c.a.createElement("header",{style:{marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},c.a.createElement(f,{mb:0,style:{marginBottom:0}},t)))};b.propTypes={siteTitle:s.a.string},b.defaultProps={siteTitle:"JMichaliga"};var g=b;r(157);function y(){var e=n()(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  font-size: ","px;\n  font-family: 'IBM Plex Mono';\n  padding-left: ","px;\n"]);return y=function(){return e},e}function h(){var e=n()(["\n width: 100%;\n"]);return h=function(){return e},e}function v(){var e=n()(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  paddingTop: 0;\n  height: 100vh;\n  max-width: 960px;\n"]);return v=function(){return e},e}var x=Object(u.a)("div")(v()),k=Object(u.a)("main")(h()),w=Object(u.a)("footer")(y(),d.a.fontSizes[0],d.a.space[2]),j=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(x,null,c.a.createElement(k,null,t),c.a.createElement(w,null,"© ",(new Date).getFullYear()," ⚡️")))},data:o})};j.propTypes={children:s.a.node.isRequired};t.a=j},160:function(e,t,r){var a=r(25).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||r(18)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},173:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/static/codepen-5eee1af7b7c2fa21612838657ebd44aa.svg",name:"codepen"}},{node:{publicURL:"/static/dribbble-d2dd05370a13c5e41a0b099cca658dec.svg",name:"dribbble"}},{node:{publicURL:"/static/adobeillustrator-dcca3aedf649c208e7c35f972d1f56f8.svg",name:"adobeillustrator"}},{node:{publicURL:"/static/firebase-df8bf7ad749ccc8ae99516952a8f2878.svg",name:"firebase"}},{node:{publicURL:"/static/figma-4be39904efd91eb47f1f69abc9375cc7.svg",name:"figma"}},{node:{publicURL:"/static/facebook-a52c24702f300adface1d349a9c09ab7.svg",name:"facebook"}},{node:{publicURL:"/static/github-617870e422d4b75087cdcf9ff298032e.svg",name:"github"}},{node:{publicURL:"/static/graphcool-fd47374190d519f7f45980abdd7af034.svg",name:"graphcool"}},{node:{publicURL:"/static/javascript-1f6069572c9380a733700436d2980f8a.svg",name:"javascript"}},{node:{publicURL:"/static/markdown-a5ad3245ac27e3c498a1488d43f39d14.svg",name:"markdown"}},{node:{publicURL:"/static/html5-3056bf2f96c40cd0a814b355959a6983.svg",name:"html5"}},{node:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg",name:"jm"}},{node:{publicURL:"/static/node-dot-js-4edea5d49bd09fd7b5eda2e56d6ab18b.svg",name:"node-dot-js"}},{node:{publicURL:"/static/gatsby-4ed519e8ff04a16301eb9b9c986d9978.svg",name:"gatsby"}},{node:{publicURL:"/static/reddit-4c55d0f25d08347d126a882fc1bc7430.svg",name:"reddit"}},{node:{publicURL:"/static/nuxt-dot-js-6b01f3c8bf137d5d1dad6fd868271767.svg",name:"nuxt-dot-js"}},{node:{publicURL:"/static/spotify-aee4e77e7cf867e46ec2c2fff268e9ad.svg",name:"spotify"}},{node:{publicURL:"/static/squarespace-af35c51c6de6e2d5f42e92b2b0b54180.svg",name:"squarespace"}},{node:{publicURL:"/static/vue-dot-js-15f073439500036a9e3ac989115b3e44.svg",name:"vue-dot-js"}},{node:{publicURL:"/static/twitter-be06689853aec102607f5e54e6fd2dfa.svg",name:"twitter"}},{node:{publicURL:"/static/stackoverflow-f681cd5f2897114e3d1521439e2e7f9b.svg",name:"stackoverflow"}}]}}}},174:function(e){e.exports={data:{file:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f96e6e7b27b25997827f.js.map