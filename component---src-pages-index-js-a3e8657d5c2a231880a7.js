(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(148),r=a.n(n),o=a(0),i=a.n(o),c=a(156),s=a(154),p=(a(160),a(173)),l=a(4),d=a.n(l),u=function(e){var t=e.icon,a=e.inverted,n=p.data;return i.a.createElement(i.a.Fragment,null,n.allFile.edges.filter(function(e){return e.node.name===t}).map(function(e,n){return i.a.createElement("abbr",{title:t,className:"hidden"},i.a.createElement("img",{key:t,src:e.node.publicURL,height:"24",width:"24",alt:t,className:a?"invert":""}))}))};u.propTypes={icon:d.a.string,inverted:d.a.bool},u.defaultProps={icon:"github",inverted:!0};var f=u,m=a(150),b=a(147);function g(){var e=r()(["\n  & {\n    border-radius: ","px;  \n    padding: ","px;\n    color: ",";\n    background: ",";\n    transition-duration: ",";\n  }\n  &:hover{\n    text-shadow: "," 1px 1px 2px;\n    border-bottom: 3px solid ",";\n  }\n"]);return g=function(){return e},e}var v=Object(m.a)("a")(g(),b.a.space[1],b.a.space[1],b.a.colors.white,b.a.colors.jmRed,b.a.duration.slow,b.a.colors.black,b.a.colors.jmBlue),h=function(e){var t=e.href,a=e.icon,n=e.text,r=e.inverted;return i.a.createElement(v,{href:t,key:"icon-"+a,rel:"external noopener noreferrer",target:"_blank"},i.a.createElement(f,{icon:a,inverted:r})," ",n)};h.propTypes={href:d.a.string,icon:d.a.string,text:d.a.string,inverted:d.a.bool},h.defaultProps={href:"",icon:"github",text:"",inverted:!0};var y=h,x=a(174),k=function(e){var t=e.name,a=e.inverted,n=x.data;return i.a.createElement("img",{src:n.file.publicURL,alt:t,className:a?"invert":""})};k.propTypes={name:d.a.string,inverted:d.a.bool},k.defaultProps={name:"",inverted:!1};var w=k;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var R=[40,52,64].map(function(e){return e+"em"}),E=d.a.oneOfType([d.a.number,d.a.string,d.a.array,d.a.object]),L=function(e){return function(){return e.apply(void 0,arguments)}},U=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=a.reduce(function(t,a){return T(t)?t:("string"==typeof a?a.split("."):[a]).reduce(function(e,t){return e&&T(e[t])?e[t]:null},e)},null);return T(r)?r:a[a.length-1]},T=function(e){return null!=e},V=function(e){return"number"==typeof e&&!isNaN(e)},F=function(e){return V(e)&&0!==e?e+"px":e},S=function(e){return"@media screen and (min-width: "+F(e)+")"},O=function(e,t){return U(t,e)},q=function e(t,a){var n={};for(var r in t)n[r]=t[r];for(var o in a)t[o]&&"object"==typeof t[o]?n[o]=e(t[o],a[o]):n[o]=a[o];return n},C=function(){for(var e={},t=0;t<arguments.length;t++)e=q(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},z=function(e){var t,a=e.prop,n=e.cssProperty,r=e.alias,o=e.key,i=e.transformValue,c=void 0===i?O:i,s=e.scale,p=void 0===s?{}:s,l=n||a,d=function(e){var t=U(e,a,r,null);if(!T(t))return null;var n,i=U(e.theme,o,p),s=function(e){var t;return T(e)?((t={})[l]=c(e,i),t):null};if("object"!=typeof(n=t)||null===n)return s(t);var d=U(e.theme,"breakpoints",R),u=[];if(Array.isArray(t)){u.push(s(t[0]));for(var f=1;f<t.slice(0,d.length+1).length;f++){var m=s(t[f]);if(m){var b,g=S(d[f-1]);u.push(((b={})[g]=m,b))}}}else{for(var v in t){var h,y=d[v],x=S(y),k=s(t[v]);if(y)u.push(((h={})[x]=k,h));else u.unshift(k)}u.sort()}return C.apply(void 0,u)};return(d.propTypes=((t={})[a]=L(E),t))[a].meta={prop:a,themeKey:o},r&&(d.propTypes[r]=L(E),d.propTypes[r].meta={prop:r,themeKey:o}),d},A=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=function(e){var a=t.map(function(t){return t(e)}).filter(Boolean);return C.apply(void 0,a)};return n.propTypes={},t.forEach(function(e){n.propTypes=j({},n.propTypes,e.propTypes)}),n},W=function(e){return function(t){var a=function(a){return t(e(a))};for(var n in t)a[n]=t[n];return a}},M=function(e){var t,a=e.key,n=e.prop,r=void 0===n?"variant":n,o=function(e){return U(e.theme,[a,e[r]].join("."),null)};return o.propTypes=((t={})[r]=d.a.oneOfType([d.a.number,d.a.string]),t),o},B=[0,4,8,16,32,64,128,256,512],P=function(e,t){if(!V(e))return F(U(t,e,e));var a=e<0,n=Math.abs(e),r=U(t,n);return V(r)?F(r*(a?-1:1)):a?"-"+r:r},I=z({prop:"margin",alias:"m",key:"space",transformValue:P,scale:B}),H=z({prop:"marginTop",alias:"mt",key:"space",transformValue:P,scale:B}),D=z({prop:"marginBottom",alias:"mb",key:"space",transformValue:P,scale:B}),N=z({prop:"marginLeft",alias:"ml",key:"space",transformValue:P,scale:B}),J=z({prop:"marginRight",alias:"mr",key:"space",transformValue:P,scale:B}),G=z({prop:"padding",alias:"p",key:"space",transformValue:P,scale:B}),K=z({prop:"paddingTop",alias:"pt",key:"space",transformValue:P,scale:B}),Q=z({prop:"paddingBottom",alias:"pb",key:"space",transformValue:P,scale:B}),Y=z({prop:"paddingLeft",alias:"pl",key:"space",transformValue:P,scale:B}),_=z({prop:"paddingRight",alias:"pr",key:"space",transformValue:P,scale:B}),X=W(function(e){return j({},e,{mt:T(e.my)?e.my:e.mt,mb:T(e.my)?e.my:e.mb,ml:T(e.mx)?e.mx:e.ml,mr:T(e.mx)?e.mx:e.mr,pt:T(e.py)?e.py:e.pt,pb:T(e.py)?e.py:e.pb,pl:T(e.px)?e.px:e.pl,pr:T(e.px)?e.px:e.pr})})(A(I,H,D,N,J,G,K,Q,Y,_)),Z=A(z({prop:"color",key:"colors"}),z({prop:"backgroundColor",alias:"bg",key:"colors"})),$=function(e,t){return!V(e)||e>1?F(e):100*e+"%"},ee=z({prop:"width",key:"widths",transformValue:$}),te=function(e,t){return F(U(t,e))},ae=z({prop:"fontSize",key:"fontSizes",transformValue:te,scale:[12,14,16,20,24,32,48,64,72]}),ne=(z({prop:"fontFamily",key:"fonts"}),z({prop:"fontWeight",key:"fontWeights"}),z({prop:"lineHeight",key:"lineHeights"}),z({prop:"textAlign"}),z({prop:"fontStyle"}),z({prop:"letterSpacing",key:"letterSpacings",transformValue:te}),z({prop:"display"}),z({prop:"maxWidth",key:"maxWidths",transformValue:te}),z({prop:"minWidth",key:"minWidths",transformValue:te}),z({prop:"height",key:"heights",transformValue:te})),re=(z({prop:"maxHeight",key:"maxHeights",transformValue:te}),z({prop:"minHeight",key:"minHeights",transformValue:te}),W(function(e){return j({},e,{width:e.size,height:e.size})})(A(ee,ne)),z({prop:"verticalAlign"}),z({prop:"alignItems"}),z({prop:"alignContent"}),z({prop:"justifyItems"}),z({prop:"justifyContent"}),z({prop:"flexWrap"}),z({prop:"flexBasis",transformValue:$}),z({prop:"flexDirection"}),z({prop:"flex"}),z({prop:"justifySelf"}),z({prop:"alignSelf"}),z({prop:"order"}),z({prop:"gridGap",key:"space",transformValue:te,scale:B}),z({prop:"gridColumnGap",key:"space",transformValue:te,scale:B}),z({prop:"gridRowGap",key:"space",transformValue:te,scale:B}),z({prop:"gridColumn"}),z({prop:"gridRow"}),z({prop:"gridAutoFlow"}),z({prop:"gridAutoColumns"}),z({prop:"gridAutoRows"}),z({prop:"gridTemplateColumns"}),z({prop:"gridTemplateRows"}),z({prop:"gridTemplateAreas"}),z({prop:"gridArea"}),z({prop:"border",key:"borders"})),oe=z({prop:"borderWidth",key:"borderWidths",transformValue:te}),ie=z({prop:"borderStyle",key:"borderStyles"}),ce=z({prop:"borderColor",key:"colors"});A(re,z({prop:"borderTop",key:"borders"}),z({prop:"borderRight",key:"borders"}),z({prop:"borderBottom",key:"borders"}),z({prop:"borderLeft",key:"borders"}),oe,ie,ce,z({prop:"borderRadius",key:"radii",transformValue:te})),z({prop:"boxShadow",key:"shadows"}),z({prop:"opacity"}),z({prop:"overflow"}),z({prop:"background"}),z({prop:"backgroundImage"}),z({prop:"backgroundSize"}),z({prop:"backgroundPosition"}),z({prop:"backgroundRepeat"}),z({prop:"position"}),z({prop:"zIndex",key:"zIndices"}),z({prop:"top",transformValue:te}),z({prop:"right",transformValue:te}),z({prop:"bottom",transformValue:te}),z({prop:"left",transformValue:te}),M({key:"buttons"}),M({key:"textStyles",prop:"textStyle"}),M({key:"colorStyles",prop:"colors"});function se(){var e=r()(["\n  transition-duration: ",";\n  transform: scale(1);\n  &:hover{\n    transform: scale(0.9);\n    filter: invert(100%);\n  }\n"]);return se=function(){return e},e}function pe(){var e=r()(["\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return pe=function(){return e},e}function le(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -1.45rem;\n"]);return le=function(){return e},e}function de(){var e=r()(["\n  ","\n  ","\n  ","\n  ","\n"]);return de=function(){return e},e}var ue=m.a.div(de(),X,ee,ae,Z),fe=Object(m.a)(ue)(le()),me=Object(m.a)(ue)(pe()),be=Object(m.a)(ue)(se(),b.a.duration.normal),ge=["adobeillustrator","adobephotoshop","css3","docker","eslint","figma","firebase","gatsby","graphql","html5","javascript","jest","kubernetes","node-dot-js","npm","nuxt-dot-js","postgresql","react","rollup-dot-js","vue-dot-js"];t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(s.a,{title:"Home",keywords:["creative","web design","mobile web designer","baltimore","justin michaliga","jmichaliga","logo design","mobile web","mobile apps","web developer","front-end","front end","maryland","new york","nyc","html5","javascript","east village"]}),i.a.createElement(fe,null,i.a.createElement(ue,{mt:5,width:[1,.5]},i.a.createElement(me,null,i.a.createElement(be,null,i.a.createElement(w,{name:"jm"})))),i.a.createElement(ue,{width:[1,.5],p:3},i.a.createElement(me,{mt:3},i.a.createElement("p",null,"Over a decade of professional experience in agency, direct service, and in-house brand capacities — specializing in Interactive Design, Mobile/Web Development, Full-Stack Engineering, ",i.a.createElement("abbr",{title:"and",className:"amp"},"&")," User Experiences."),i.a.createElement("section",{style:{position:"fixed",right:"8px",bottom:"0px"}},ge.map(function(e){return i.a.createElement(ue,{ml:2},i.a.createElement(f,{icon:e,inverted:!1,ml:1}))})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://twitter.com/jmichaliga",icon:"twitter",text:"Follow @jmichaliga on twitter."})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://github.com/jmichaliga",icon:"github",text:"Follow @jmichaliga on Github."})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://dribbble.com/jmichaliga",icon:"dribbble",text:"Follow @jmichaliga on Dribbble."})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://codepen.com/jmichaliga",icon:"codepen",text:"Follow @jmichaliga on Codepen."}))))))}},147:function(e,t,a){"use strict";var n=function(e,t){return t.forEach(function(t,a){return Object.defineProperty(e,t,{enumerable:!1,get:function(){return this[a]}})})},r=[32,40,48,64].map(function(e){return e+"em"}),o=r.map(function(e){return"@media screen and (min-width:"+e+")"}),i=["sm","md","lg","xl"];n(r,i),n(o,i);var c={boxShadows:["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],breakpoints:r,colors:{black:"#000",white:"#FFF",text:"#123",gray:"#456",red:"#C00",orange:"#F81",yellow:"#FD2",green:"#0A0",blue:"#03F",violet:"#70B",jmRed:"#FA1967",jmBlue:"#0AC",error:"#C00",danger:"#F81",success:"#0A0",secondary:"#F81",primary:"#03F"},duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},fontSizes:[12,14,16,20,24,32,40,56,72],maxContainerWidth:"1280px",mediaQueries:o,radii:[0,2,6],radius:"2px",space:[0,4,8,16,32,64,128],timingFunctions:{easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}};t.a=c},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},151:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(149);var p=r.a.createContext({}),l=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),s=a(2),p=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},154:function(e,t,a){"use strict";var n=a(155),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(158),p=a.n(s);function l(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,l=t||s.siteMetadata.description;return o.a.createElement(p.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga",description:"Justin W. Michaliga is a Creative Mobile Web Developer and Interactive Designer in NYC.",author:"@jmichaliga"}}}}},156:function(e,t,a){"use strict";var n=a(148),r=a.n(n),o=a(152),i=a(0),c=a.n(i),s=a(4),p=a.n(s),l=a(151),d=a(150),u=a(147);function f(){var e=r()(["\n  color: ",";\n  text-shadow: "," 1px 1px 2px;\n  letter-spacing: -0.05em;\n  font-size: ","px;\n  padding: 1.45rem 1.0875rem;\n  text-align: center;\n  font-weight: 200;\n  font-family: 'Helvetica Neue';\n"]);return f=function(){return e},e}var m=Object(d.a)("h1")(f(),u.a.colors.white,u.a.colors.black,u.a.fontSizes[6]),b=function(e){var t=e.siteTitle;return c.a.createElement("header",{style:{marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},c.a.createElement(m,{mb:0,style:{marginBottom:0}},t)))};b.propTypes={siteTitle:p.a.string},b.defaultProps={siteTitle:"JMichaliga"};var g=b;a(157);function v(){var e=r()(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  font-size: ","px;\n  font-family: 'IBM Plex Mono';\n  padding-left: ","px;\n"]);return v=function(){return e},e}function h(){var e=r()(["\n width: 100%;\n"]);return h=function(){return e},e}function y(){var e=r()(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  height: 100vh;\n  max-width: 960px;\n"]);return y=function(){return e},e}var x=Object(d.a)("div")(y()),k=Object(d.a)("main")(h()),w=Object(d.a)("footer")(v(),u.a.fontSizes[0],u.a.space[2]),j=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(x,null,c.a.createElement(k,null,t),c.a.createElement(w,null,c.a.createElement("span",{role:"img","aria-label":"Hi"},"⚡"))))},data:o})};j.propTypes={children:p.a.node.isRequired};t.a=j},160:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},173:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/static/adobephotoshop-1566992957b6883db6b4a34eb79df536.svg",name:"adobephotoshop"}},{node:{publicURL:"/static/adobeillustrator-dcca3aedf649c208e7c35f972d1f56f8.svg",name:"adobeillustrator"}},{node:{publicURL:"/static/angellist-2f4541850810c199f26e37c8b504f9a5.svg",name:"angellist"}},{node:{publicURL:"/static/css3-b675af6016eed403de51899be75efe59.svg",name:"css3"}},{node:{publicURL:"/static/confluence-0112d3fdeb4a3b09d8a7f3b75e02e78b.svg",name:"confluence"}},{node:{publicURL:"/static/codepen-5eee1af7b7c2fa21612838657ebd44aa.svg",name:"codepen"}},{node:{publicURL:"/static/dribbble-d2dd05370a13c5e41a0b099cca658dec.svg",name:"dribbble"}},{node:{publicURL:"/static/facebook-a52c24702f300adface1d349a9c09ab7.svg",name:"facebook"}},{node:{publicURL:"/static/docker-f39d2188afd67dc1d214ce1292ea6e63.svg",name:"docker"}},{node:{publicURL:"/static/d3-dot-js-6fd17ead6f61d3687ef352a21a6ef115.svg",name:"d3-dot-js"}},{node:{publicURL:"/static/eslint-f82afeb8b75dcf1172d8db03b8e2842c.svg",name:"eslint"}},{node:{publicURL:"/static/firebase-df8bf7ad749ccc8ae99516952a8f2878.svg",name:"firebase"}},{node:{publicURL:"/static/figma-4be39904efd91eb47f1f69abc9375cc7.svg",name:"figma"}},{node:{publicURL:"/static/github-617870e422d4b75087cdcf9ff298032e.svg",name:"github"}},{node:{publicURL:"/static/gatsby-4ed519e8ff04a16301eb9b9c986d9978.svg",name:"gatsby"}},{node:{publicURL:"/static/graphcool-fd47374190d519f7f45980abdd7af034.svg",name:"graphcool"}},{node:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg",name:"jm"}},{node:{publicURL:"/static/javascript-1f6069572c9380a733700436d2980f8a.svg",name:"javascript"}},{node:{publicURL:"/static/graphql-d408f1092990152c0af2029b108e0e9e.svg",name:"graphql"}},{node:{publicURL:"/static/jest-ea2449ae5660152d948952f5c5770f93.svg",name:"jest"}},{node:{publicURL:"/static/markdown-a5ad3245ac27e3c498a1488d43f39d14.svg",name:"markdown"}},{node:{publicURL:"/static/jira-9cbc5e57c9019baae8378298d934b902.svg",name:"jira"}},{node:{publicURL:"/static/html5-3056bf2f96c40cd0a814b355959a6983.svg",name:"html5"}},{node:{publicURL:"/static/node-dot-js-4edea5d49bd09fd7b5eda2e56d6ab18b.svg",name:"node-dot-js"}},{node:{publicURL:"/static/php-a9f29af417ebe3a13c7176e78553e2aa.svg",name:"php"}},{node:{publicURL:"/static/nuxt-dot-js-6b01f3c8bf137d5d1dad6fd868271767.svg",name:"nuxt-dot-js"}},{node:{publicURL:"/static/npm-06851a1932d65340db2c1ba0faf7d6ce.svg",name:"npm"}},{node:{publicURL:"/static/kubernetes-917338ba2aaf3585ca0d89667416e57c.svg",name:"kubernetes"}},{node:{publicURL:"/static/postgresql-34cbdb156ea57b239962b2909e0a6d89.svg",name:"postgresql"}},{node:{publicURL:"/static/react-092e0882358cd09dbe9376b64d0f2a0e.svg",name:"react"}},{node:{publicURL:"/static/reddit-4c55d0f25d08347d126a882fc1bc7430.svg",name:"reddit"}},{node:{publicURL:"/static/rollup-dot-js-e47301619447e35bed8252a4c4cab10d.svg",name:"rollup-dot-js"}},{node:{publicURL:"/static/spotify-aee4e77e7cf867e46ec2c2fff268e9ad.svg",name:"spotify"}},{node:{publicURL:"/static/squarespace-af35c51c6de6e2d5f42e92b2b0b54180.svg",name:"squarespace"}},{node:{publicURL:"/static/stackoverflow-f681cd5f2897114e3d1521439e2e7f9b.svg",name:"stackoverflow"}},{node:{publicURL:"/static/twitter-be06689853aec102607f5e54e6fd2dfa.svg",name:"twitter"}},{node:{publicURL:"/static/visualstudiocode-e16557f35c620516c31848a013cc10f8.svg",name:"visualstudiocode"}},{node:{publicURL:"/static/vue-dot-js-15f073439500036a9e3ac989115b3e44.svg",name:"vue-dot-js"}}]}}}},174:function(e){e.exports={data:{file:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a3e8657d5c2a231880a7.js.map