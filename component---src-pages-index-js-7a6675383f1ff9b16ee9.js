(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,r){"use strict";r.r(t);var a=r(148),n=r.n(a),o=r(0),i=r.n(o),p=r(156),c=r(154),s=(r(160),r(175)),l=r(4),u=r.n(l),d=r(150),m=r(147);function f(){var e=n()(["\n  border-radius: ","px;  \n  padding: ","px;\n  background: ",";\n  color: ",";\n  transition-duration: ",";\n  &:hover{\n    text-shadow: "," 1px 1px 2px;\n    border-bottom: 3px solid ",";\n  }\n"]);return f=function(){return e},e}var b=Object(d.a)("a")(f(),m.a.space[1],m.a.space[1],m.a.colors.jmRed,m.a.colors.white,m.a.duration.slow,m.a.colors.black,m.a.colors.jmBlue),g=function(e){var t=e.href,r=e.icon,a=e.text,n=e.inverted,o=s.data;return i.a.createElement(i.a.Fragment,null,o.allFile.edges.filter(function(e){return e.node.name===r}).map(function(e,o){return i.a.createElement(b,{href:t,key:"icon-"+o,rel:"external noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:e.node.publicURL,height:"24",width:"24",alt:r,className:n?"invert":""})," ",a)}))};g.propTypes={href:u.a.string,icon:u.a.string,text:u.a.string,inverted:u.a.bool},g.defaultProps={href:"",icon:"github",text:"",inverted:!0};var y=g,h=r(176),v=function(e){var t=e.name,r=e.inverted,a=h.data;return i.a.createElement("img",{src:a.file.publicURL,alt:t,className:r?"invert":""})};v.propTypes={name:u.a.string,inverted:u.a.bool},v.defaultProps={name:"",inverted:!1};var x=v;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var w=[40,52,64].map(function(e){return e+"em"}),j=u.a.oneOfType([u.a.number,u.a.string,u.a.array,u.a.object]),R=function(e){return function(){return e.apply(void 0,arguments)}},E=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var n=r.reduce(function(t,r){return L(t)?t:("string"==typeof r?r.split("."):[r]).reduce(function(e,t){return e&&L(e[t])?e[t]:null},e)},null);return L(n)?n:r[r.length-1]},L=function(e){return null!=e},T=function(e){return"number"==typeof e&&!isNaN(e)},V=function(e){return T(e)&&0!==e?e+"px":e},U=function(e){return"@media screen and (min-width: "+V(e)+")"},F=function(e,t){return E(t,e)},S=function(e){var t,r=e.prop,a=e.cssProperty,n=e.alias,o=e.key,i=e.transformValue,p=void 0===i?F:i,c=e.scale,s=void 0===c?{}:c,l=a||r,u=function(e){var t=E(e,r,n,null);if(!L(t))return null;var a,i=E(e.theme,o,s),c=function(e){var t;return L(e)?((t={})[l]=p(e,i),t):null};if("object"!=typeof(a=t)||null===a)return c(t);var u=E(e.theme,"breakpoints",w),d=[];if(Array.isArray(t)){d.push(c(t[0]));for(var m=1;m<t.slice(0,u.length+1).length;m++){var f=c(t[m]);if(f){var b,g=U(u[m-1]);d.push(((b={})[g]=f,b))}}}else{for(var y in t){var h,v=u[y],x=U(v),k=c(t[y]);if(v)d.push(((h={})[x]=k,h));else d.unshift(k)}d.sort()}return d};return(u.propTypes=((t={})[r]=R(j),t))[r].meta={prop:r,themeKey:o},n&&(u.propTypes[n]=R(j),u.propTypes[n].meta={prop:n,themeKey:o}),u},O=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.map(function(t){return t(e)}).filter(Boolean)};return a.propTypes={},t.forEach(function(e){a.propTypes=k({},a.propTypes,e.propTypes)}),a},z=function(e){return function(t){var r=function(r){return t(e(r))};for(var a in t)r[a]=t[a];return r}},A=function(e){var t,r=e.key,a=e.prop,n=void 0===a?"variant":a,o=function(e){return E(e.theme,[r,e[n]].join("."),null)};return o.propTypes=((t={})[n]=u.a.oneOfType([u.a.number,u.a.string]),t),o},C=[0,4,8,16,32,64,128,256,512],M=function(e,t){if(!T(e))return V(E(t,e,e));var r=e<0,a=Math.abs(e),n=E(t,a);return T(n)?V(n*(r?-1:1)):r?"-"+n:n},W=S({prop:"margin",alias:"m",key:"space",transformValue:M,scale:C}),q=S({prop:"marginTop",alias:"mt",key:"space",transformValue:M,scale:C}),B=S({prop:"marginBottom",alias:"mb",key:"space",transformValue:M,scale:C}),I=S({prop:"marginLeft",alias:"ml",key:"space",transformValue:M,scale:C}),P=S({prop:"marginRight",alias:"mr",key:"space",transformValue:M,scale:C}),D=S({prop:"padding",alias:"p",key:"space",transformValue:M,scale:C}),H=S({prop:"paddingTop",alias:"pt",key:"space",transformValue:M,scale:C}),J=S({prop:"paddingBottom",alias:"pb",key:"space",transformValue:M,scale:C}),N=S({prop:"paddingLeft",alias:"pl",key:"space",transformValue:M,scale:C}),G=S({prop:"paddingRight",alias:"pr",key:"space",transformValue:M,scale:C}),K=z(function(e){return k({},e,{mt:L(e.my)?e.my:e.mt,mb:L(e.my)?e.my:e.mb,ml:L(e.mx)?e.mx:e.ml,mr:L(e.mx)?e.mx:e.mr,pt:L(e.py)?e.py:e.pt,pb:L(e.py)?e.py:e.pb,pl:L(e.px)?e.px:e.pl,pr:L(e.px)?e.px:e.pr})})(O(W,q,B,I,P,D,H,J,N,G)),Q=O(S({prop:"color",key:"colors"}),S({prop:"backgroundColor",alias:"bg",key:"colors"})),Y=function(e,t){return!T(e)||e>1?V(e):100*e+"%"},_=S({prop:"width",key:"widths",transformValue:Y}),X=function(e,t){return V(E(t,e))},Z=S({prop:"fontSize",key:"fontSizes",transformValue:X,scale:[12,14,16,20,24,32,48,64,72]}),$=(S({prop:"fontFamily",key:"fonts"}),S({prop:"fontWeight",key:"fontWeights"}),S({prop:"lineHeight",key:"lineHeights"}),S({prop:"textAlign"}),S({prop:"fontStyle"}),S({prop:"letterSpacing",key:"letterSpacings",transformValue:X}),S({prop:"display"}),S({prop:"maxWidth",key:"maxWidths",transformValue:X}),S({prop:"minWidth",key:"minWidths",transformValue:X}),S({prop:"height",key:"heights",transformValue:X})),ee=(S({prop:"maxHeight",key:"maxHeights",transformValue:X}),S({prop:"minHeight",key:"minHeights",transformValue:X}),z(function(e){return k({},e,{width:e.size,height:e.size})})(O(_,$)),S({prop:"verticalAlign"}),S({prop:"alignItems"}),S({prop:"alignContent"}),S({prop:"justifyItems"}),S({prop:"justifyContent"}),S({prop:"flexWrap"}),S({prop:"flexBasis",transformValue:Y}),S({prop:"flexDirection"}),S({prop:"flex"}),S({prop:"justifySelf"}),S({prop:"alignSelf"}),S({prop:"order"}),S({prop:"gridGap",key:"space",transformValue:X,scale:C}),S({prop:"gridColumnGap",key:"space",transformValue:X,scale:C}),S({prop:"gridRowGap",key:"space",transformValue:X,scale:C}),S({prop:"gridColumn"}),S({prop:"gridRow"}),S({prop:"gridAutoFlow"}),S({prop:"gridAutoColumns"}),S({prop:"gridAutoRows"}),S({prop:"gridTemplateColumns"}),S({prop:"gridTemplateRows"}),S({prop:"gridTemplateAreas"}),S({prop:"gridArea"}),S({prop:"border",key:"borders"})),te=S({prop:"borderWidth",key:"borderWidths",transformValue:X}),re=S({prop:"borderStyle",key:"borderStyles"}),ae=S({prop:"borderColor",key:"colors"});O(ee,S({prop:"borderTop",key:"borders"}),S({prop:"borderRight",key:"borders"}),S({prop:"borderBottom",key:"borders"}),S({prop:"borderLeft",key:"borders"}),te,re,ae,S({prop:"borderRadius",key:"radii",transformValue:X})),S({prop:"boxShadow",key:"shadows"}),S({prop:"opacity"}),S({prop:"overflow"}),S({prop:"background"}),S({prop:"backgroundImage"}),S({prop:"backgroundSize"}),S({prop:"backgroundPosition"}),S({prop:"backgroundRepeat"}),S({prop:"position"}),S({prop:"zIndex",key:"zIndices"}),S({prop:"top",transformValue:X}),S({prop:"right",transformValue:X}),S({prop:"bottom",transformValue:X}),S({prop:"left",transformValue:X}),A({key:"buttons"}),A({key:"textStyles",prop:"textStyle"}),A({key:"colorStyles",prop:"colors"});function ne(){var e=n()(["\n  transition-duration: ",";\n  tranform: scale(1);\n  &:hover{\n    transform: scale(0.9);\n    filter: invert(100%);\n  }\n"]);return ne=function(){return e},e}function oe(){var e=n()(["\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return oe=function(){return e},e}function ie(){var e=n()(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return ie=function(){return e},e}function pe(){var e=n()(["\n  ","\n  ","\n  ","\n  ","\n"]);return pe=function(){return e},e}var ce=d.a.div(pe(),K,_,Z,Q),se=Object(d.a)(ce)(ie()),le=Object(d.a)(se)(oe()),ue=Object(d.a)(ce)(ne(),m.a.duration.normal);t.default=function(){return i.a.createElement(p.a,null,i.a.createElement(c.a,{title:"Home",keywords:["creative","web design","mobile web designer","baltimore","justin michaliga","jmichaliga","logo design","mobile web","mobile apps","web developer","front-end","front end","maryland","new york","nyc","html5","javascript","east village"]}),i.a.createElement(se,null,i.a.createElement(ce,{width:[1,.5]},i.a.createElement(le,null,i.a.createElement(ue,null,i.a.createElement(x,{name:"jm"})))),i.a.createElement(ce,{width:[1,.5]},i.a.createElement(le,{mt:3},i.a.createElement("p",null,"Several years of professional experience in agency, direct service, and in-house brand capacities — specializing in Interactive Design, Mobile/Web Development, HTML5 Adoption ",i.a.createElement("abbr",{title:"and",className:"amp"},"&")," User Experiences."),i.a.createElement("p",null,i.a.createElement(y,{href:"https://twitter.com/jmichaliga",icon:"twitter",text:"Follow @jmichaliga on twitter."})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://github.com/jmichaliga",icon:"github",text:"Follow @jmichaliga on Github."})),i.a.createElement("p",null,i.a.createElement(y,{href:"https://dribbble.com/jmichaliga",target:"_blank",icon:"dribbble",text:"Follow @jmichaliga on Dribbble."}))))))}},147:function(e,t,r){"use strict";var a=function(e,t){return t.forEach(function(t,r){return Object.defineProperty(e,t,{enumerable:!1,get:function(){return this[r]}})})},n=[32,40,48,64].map(function(e){return e+"em"}),o=n.map(function(e){return"@media screen and (min-width:"+e+")"}),i=["sm","md","lg","xl"];a(n,i),a(o,i);var p={boxShadows:["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],breakpoints:n,colors:{black:"#000",white:"#FFF",text:"#123",gray:"#456",red:"#C00",orange:"#F81",yellow:"#FD2",green:"#0A0",blue:"#03F",violet:"#70B",jmRed:"#FA1967",jmBlue:"#0AC",error:"#C00",danger:"#F81",success:"#0A0",secondary:"#F81",primary:"#03F"},duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},fontSizes:[12,14,16,20,24,32,40,56,72],maxContainerWidth:"1280px",mediaQueries:o,radii:[0,2,6],radius:"2px",space:[0,4,8,16,32,64,128],timingFunctions:{easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}};t.a=p},149:function(e,t,r){var a;e.exports=(a=r(153))&&a.default||a},151:function(e,t,r){"use strict";r.d(t,"b",function(){return l});var a=r(0),n=r.n(a),o=r(4),i=r.n(o),p=r(33),c=r.n(p);r.d(t,"a",function(){return c.a});r(149);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga"}}}}},153:function(e,t,r){"use strict";r.r(t);r(34);var a=r(0),n=r.n(a),o=r(4),i=r.n(o),p=r(55),c=r(2),s=function(e){var t=e.location,r=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(p.a,Object.assign({location:t,pageResources:r},r.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,r){"use strict";var a=r(155),n=r(0),o=r.n(n),i=r(4),p=r.n(i),c=r(158),s=r.n(c);function l(e){var t=e.description,r=e.lang,n=e.meta,i=e.keywords,p=e.title,c=a.data.site,l=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:r},title:p,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:p},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:p.a.string,lang:p.a.string,meta:p.a.arrayOf(p.a.object),keywords:p.a.arrayOf(p.a.string),title:p.a.string.isRequired},t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga",description:"Justin W. Michaliga is a Creative Mobile Web Developer and Interactive Designer in NYC.",author:"@jmichaliga"}}}}},156:function(e,t,r){"use strict";var a=r(148),n=r.n(a),o=r(152),i=r(0),p=r.n(i),c=r(4),s=r.n(c),l=r(151),u=r(150),d=r(147);function m(){var e=n()(["\n  color: ",";\n  text-shadow: "," 1px 1px 2px;\n  letter-spacing: -0.05em;\n  text-transform: uppercase;\n  font-size: ","px;\n  padding: 1.45rem 1.0875rem;\n  text-align: right;\n\n"]);return m=function(){return e},e}var f=Object(u.a)("h1")(m(),d.a.colors.white,d.a.colors.black,d.a.fontSizes[5]),b=function(e){var t=e.siteTitle;return p.a.createElement("header",{style:{marginBottom:"1.45rem"}},p.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},p.a.createElement(f,{mb:0,style:{marginBottom:0}},t)))};b.propTypes={siteTitle:s.a.string},b.defaultProps={siteTitle:"JMichaliga"};var g=b;r(157);function y(){var e=n()(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  font-size: ","px;\n  font-family: 'IBM Plex Mono';\n  padding-left: ","px;\n"]);return y=function(){return e},e}function h(){var e=n()(["\n  font-size: 1em;\n  width: 100%;\n"]);return h=function(){return e},e}function v(){var e=n()(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  paddingTop: 0;\n  height: 100vh;\n  max-width: 960px;\n"]);return v=function(){return e},e}var x=Object(u.a)("div")(v()),k=Object(u.a)("main")(h()),w=Object(u.a)("footer")(y(),d.a.fontSizes[0],d.a.space[2]),j=function(e){var t=e.children;return p.a.createElement(l.b,{query:"755544856",render:function(e){return p.a.createElement(p.a.Fragment,null,p.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),p.a.createElement(x,null,p.a.createElement(k,null,t),p.a.createElement(w,null,"© ",(new Date).getFullYear())))},data:o})};j.propTypes={children:s.a.node.isRequired};t.a=j},160:function(e,t,r){var a=r(25).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||r(18)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},175:function(e){e.exports={data:{allFile:{edges:[{node:{publicURL:"/static/adobeillustrator-dcca3aedf649c208e7c35f972d1f56f8.svg",name:"adobeillustrator"}},{node:{publicURL:"/static/codepen-5eee1af7b7c2fa21612838657ebd44aa.svg",name:"codepen"}},{node:{publicURL:"/static/dribbble-d2dd05370a13c5e41a0b099cca658dec.svg",name:"dribbble"}},{node:{publicURL:"/static/facebook-a52c24702f300adface1d349a9c09ab7.svg",name:"facebook"}},{node:{publicURL:"/static/figma-4be39904efd91eb47f1f69abc9375cc7.svg",name:"figma"}},{node:{publicURL:"/static/firebase-df8bf7ad749ccc8ae99516952a8f2878.svg",name:"firebase"}},{node:{publicURL:"/static/gatsby-4ed519e8ff04a16301eb9b9c986d9978.svg",name:"gatsby"}},{node:{publicURL:"/static/github-617870e422d4b75087cdcf9ff298032e.svg",name:"github"}},{node:{publicURL:"/static/graphcool-fd47374190d519f7f45980abdd7af034.svg",name:"graphcool"}},{node:{publicURL:"/static/javascript-1f6069572c9380a733700436d2980f8a.svg",name:"javascript"}},{node:{publicURL:"/static/html5-3056bf2f96c40cd0a814b355959a6983.svg",name:"html5"}},{node:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg",name:"jm"}},{node:{publicURL:"/static/markdown-a5ad3245ac27e3c498a1488d43f39d14.svg",name:"markdown"}},{node:{publicURL:"/static/node-dot-js-4edea5d49bd09fd7b5eda2e56d6ab18b.svg",name:"node-dot-js"}},{node:{publicURL:"/static/nuxt-dot-js-6b01f3c8bf137d5d1dad6fd868271767.svg",name:"nuxt-dot-js"}},{node:{publicURL:"/static/reddit-4c55d0f25d08347d126a882fc1bc7430.svg",name:"reddit"}},{node:{publicURL:"/static/squarespace-af35c51c6de6e2d5f42e92b2b0b54180.svg",name:"squarespace"}},{node:{publicURL:"/static/spotify-aee4e77e7cf867e46ec2c2fff268e9ad.svg",name:"spotify"}},{node:{publicURL:"/static/stackoverflow-f681cd5f2897114e3d1521439e2e7f9b.svg",name:"stackoverflow"}},{node:{publicURL:"/static/twitter-be06689853aec102607f5e54e6fd2dfa.svg",name:"twitter"}},{node:{publicURL:"/static/vue-dot-js-15f073439500036a9e3ac989115b3e44.svg",name:"vue-dot-js"}}]}}}},176:function(e){e.exports={data:{file:{publicURL:"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-7a6675383f1ff9b16ee9.js.map