(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,a,t){"use strict";t.r(a);t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("Vd3H");var n=t("q1tI"),r=t.n(n),o=t("Bl7J"),i=t("vrFN"),c=(t("f3/d"),t("d1PU")),s=function(e){var a=e.icon,t=e.inverted,n=e.text,o=c.data;return r.a.createElement(r.a.Fragment,null,o.allFile.edges.filter((function(e){return e.node.name===a})).map((function(e){return r.a.createElement("abbr",{title:a,className:"hidden"},r.a.createElement("img",{key:a,src:e.node.publicURL,height:"24",width:"24",alt:n,className:t?"invert":""}))})))};s.defaultProps={icon:"github",inverted:!0,text:""};var p=s,l=t("vOnD"),d=t("zDcZ");function u(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n  & {\n    border-radius: ","px;  \n    padding: ","px;\n    color: ",";\n    background: ",";\n    width: 40px; height: 40px;\n    transition-duration: ",";\n    border-bottom: 2px solid transparent;\n  }\n  &:hover{\n    text-shadow: "," 1px 1px 2px;\n    border-bottom: 2px solid ",";\n    cursor: pointer;\n  }\n"]);return u=function(){return e},e}var f=Object(l.a)("a")(u(),d.a.space[1],d.a.space[1],d.a.colors.white,d.a.colors.jmRed,d.a.duration.slow,d.a.colors.black,d.a.colors.jmBlue),b=function(e){var a=e.href,t=e.icon,n=(e.text,e.inverted);return r.a.createElement(f,{href:a,key:"icon-"+t,rel:"external noopener noreferrer",target:"_blank"},r.a.createElement(p,{icon:t,inverted:n}))};b.defaultProps={href:"",icon:"github",text:"",inverted:!0};var m=b,g=t("YViV"),v=function(e){var a=e.name,t=e.inverted,n=g.data;return r.a.createElement("img",{src:n.file.publicURL,alt:a,className:t?"invert":""})};v.defaultProps={name:"",inverted:!1};var h=v;t("8+KV"),t("0l/t"),t("LK8F"),t("KKXr"),t("DNiP"),t("bWfx");function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var k=t("17x9"),x=t.n(k),R=[40,52,64].map((function(e){return e+"em"})),L=x.a.oneOfType([x.a.number,x.a.string,x.a.array,x.a.object]),U=function(e){return function(){return e.apply(void 0,arguments)}},w=function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var r=t.reduce((function(a,t){return j(a)?a:("string"==typeof t?t.split("."):[t]).reduce((function(e,a){return e&&j(e[a])?e[a]:null}),e)}),null);return j(r)?r:t[t.length-1]},j=function(e){return null!=e},V=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return V(e)&&0!==e?e+"px":e},S=function(e){return"@media screen and (min-width: "+E(e)+")"},O=function(e,a){return w(a,e)},T=function e(a,t){var n={};for(var r in a)n[r]=a[r];for(var o in t)a[o]&&"object"==typeof a[o]?n[o]=e(a[o],t[o]):n[o]=t[o];return n},z=function(){for(var e={},a=0;a<arguments.length;a++)e=T(e,a<0||arguments.length<=a?void 0:arguments[a]);return e},N=function(e){var a,t=e.prop,n=e.cssProperty,r=e.alias,o=e.key,i=e.transformValue,c=void 0===i?O:i,s=e.scale,p=void 0===s?{}:s,l=n||t,d=function(e){var a=w(e,t,r,null);if(!j(a))return null;var n,i=w(e.theme,o,p),s=function(e){var a;return j(e)?((a={})[l]=c(e,i),a):null};if("object"!=typeof(n=a)||null===n)return s(a);var d=w(e.theme,"breakpoints",R),u=[];if(Array.isArray(a)){u.push(s(a[0]));for(var f=1;f<a.slice(0,d.length+1).length;f++){var b=s(a[f]);if(b){var m,g=S(d[f-1]);u.push(((m={})[g]=b,m))}}}else{for(var v in a){var h,y=d[v],k=S(y),x=s(a[v]);if(y)u.push(((h={})[k]=x,h));else u.unshift(x)}u.sort()}return z.apply(void 0,u)};return(d.propTypes=((a={})[t]=U(L),a))[t].meta={prop:t,themeKey:o},r&&(d.propTypes[r]=U(L),d.propTypes[r].meta={prop:r,themeKey:o}),d},q=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=function(e){var t=a.map((function(a){return a(e)})).filter(Boolean);return z.apply(void 0,t)};return n.propTypes={},a.forEach((function(e){n.propTypes=y({},n.propTypes,e.propTypes)})),n},C=function(e){return function(a){var t=function(t){return a(e(t))};for(var n in a)t[n]=a[n];return t}},F=function(e){var a,t=e.key,n=e.prop,r=void 0===n?"variant":n,o=function(e){return w(e.theme,[t,e[r]].join("."),null)};return o.propTypes=((a={})[r]=x.a.oneOfType([x.a.number,x.a.string]),a),o},W=[0,4,8,16,32,64,128,256,512],A=function(e,a){if(!V(e))return E(w(a,e,e));var t=e<0,n=Math.abs(e),r=w(a,n);return V(r)?E(r*(t?-1:1)):t?"-"+r:r},B=N({prop:"margin",alias:"m",key:"space",transformValue:A,scale:W}),P=N({prop:"marginTop",alias:"mt",key:"space",transformValue:A,scale:W}),D=N({prop:"marginBottom",alias:"mb",key:"space",transformValue:A,scale:W}),H=N({prop:"marginLeft",alias:"ml",key:"space",transformValue:A,scale:W}),I=N({prop:"marginRight",alias:"mr",key:"space",transformValue:A,scale:W}),J=N({prop:"padding",alias:"p",key:"space",transformValue:A,scale:W}),K=N({prop:"paddingTop",alias:"pt",key:"space",transformValue:A,scale:W}),G=N({prop:"paddingBottom",alias:"pb",key:"space",transformValue:A,scale:W}),Y=N({prop:"paddingLeft",alias:"pl",key:"space",transformValue:A,scale:W}),M=N({prop:"paddingRight",alias:"pr",key:"space",transformValue:A,scale:W}),X=C((function(e){return y({},e,{mt:j(e.my)?e.my:e.mt,mb:j(e.my)?e.my:e.mb,ml:j(e.mx)?e.mx:e.ml,mr:j(e.mx)?e.mx:e.mr,pt:j(e.py)?e.py:e.pt,pb:j(e.py)?e.py:e.pb,pl:j(e.px)?e.px:e.pl,pr:j(e.px)?e.px:e.pr})}))(q(B,P,D,H,I,J,K,G,Y,M)),Z=q(N({prop:"color",key:"colors"}),N({prop:"backgroundColor",alias:"bg",key:"colors"})),_=function(e,a){return!V(e)||e>1?E(e):100*e+"%"},Q=N({prop:"width",key:"widths",transformValue:_}),$=function(e,a){return E(w(a,e))},ee=N({prop:"fontSize",key:"fontSizes",transformValue:$,scale:[12,14,16,20,24,32,48,64,72]}),ae=(N({prop:"fontFamily",key:"fonts"}),N({prop:"fontWeight",key:"fontWeights"}),N({prop:"lineHeight",key:"lineHeights"}),N({prop:"textAlign"}),N({prop:"fontStyle"}),N({prop:"letterSpacing",key:"letterSpacings",transformValue:$}),N({prop:"display"}),N({prop:"maxWidth",key:"maxWidths",transformValue:$}),N({prop:"minWidth",key:"minWidths",transformValue:$}),N({prop:"height",key:"heights",transformValue:$})),te=(N({prop:"maxHeight",key:"maxHeights",transformValue:$}),N({prop:"minHeight",key:"minHeights",transformValue:$}),C((function(e){return y({},e,{width:e.size,height:e.size})}))(q(Q,ae)),N({prop:"verticalAlign"}),N({prop:"alignItems"}),N({prop:"alignContent"}),N({prop:"justifyItems"}),N({prop:"justifyContent"}),N({prop:"flexWrap"}),N({prop:"flexBasis",transformValue:_}),N({prop:"flexDirection"}),N({prop:"flex"}),N({prop:"justifySelf"}),N({prop:"alignSelf"}),N({prop:"order"}),N({prop:"gridGap",key:"space",transformValue:$,scale:W}),N({prop:"gridColumnGap",key:"space",transformValue:$,scale:W}),N({prop:"gridRowGap",key:"space",transformValue:$,scale:W}),N({prop:"gridColumn"}),N({prop:"gridRow"}),N({prop:"gridAutoFlow"}),N({prop:"gridAutoColumns"}),N({prop:"gridAutoRows"}),N({prop:"gridTemplateColumns"}),N({prop:"gridTemplateRows"}),N({prop:"gridTemplateAreas"}),N({prop:"gridArea"}),N({prop:"border",key:"borders"})),ne=N({prop:"borderWidth",key:"borderWidths",transformValue:$}),re=N({prop:"borderStyle",key:"borderStyles"}),oe=N({prop:"borderColor",key:"colors"});q(te,N({prop:"borderTop",key:"borders"}),N({prop:"borderRight",key:"borders"}),N({prop:"borderBottom",key:"borders"}),N({prop:"borderLeft",key:"borders"}),ne,re,oe,N({prop:"borderRadius",key:"radii",transformValue:$})),N({prop:"boxShadow",key:"shadows"}),N({prop:"opacity"}),N({prop:"overflow"}),N({prop:"background"}),N({prop:"backgroundImage"}),N({prop:"backgroundSize"}),N({prop:"backgroundPosition"}),N({prop:"backgroundRepeat"}),N({prop:"position"}),N({prop:"zIndex",key:"zIndices"}),N({prop:"top",transformValue:$}),N({prop:"right",transformValue:$}),N({prop:"bottom",transformValue:$}),N({prop:"left",transformValue:$}),F({key:"buttons"}),F({key:"textStyles",prop:"textStyle"}),F({key:"colorStyles",prop:"colors"});function ie(){var e=be(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return ie=function(){return e},e}function ce(){var e=be(["\n  opacity: 0;\n  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),\n    opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);\n  transform: scale(0.5) translate3d(50px,0,0);\n  transition-delay: ","ms;\n  ","\n"]);return ce=function(){return e},e}function se(){var e=be(["\n  position: fixed;\n  cursor: pointer;\n  right: 8px;\n  bottom: 0px;\n"]);return se=function(){return e},e}function pe(){var e=be(["\n  position: fixed;\n  cursor: pointer;\n  right: 8px;\n  bottom: 0px;\n  transition-duration: ",";\n  &.close {\n    transform: translate3d(0, 0, 0);\n  }\n  &.open {\n    transform: translate3d(150%, 0, 0);\n  }\n"]);return pe=function(){return e},e}function le(){var e=be(["\n  transition-duration: ",";\n  transform: scale(1);\n  &:hover {\n    transform: scale(0.9) rotate(-15deg);\n    filter: brightness(80%);\n  }\n"]);return le=function(){return e},e}function de(){var e=be(["\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return de=function(){return e},e}function ue(){var e=be(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -1.45rem;\n"]);return ue=function(){return e},e}function fe(){var e=be(["\n  ","\n  ","\n  ","\n  ","\n"]);return fe=function(){return e},e}function be(e,a){return a||(a=e.slice(0)),e.raw=a,e}var me=l.a.div(fe(),X,Q,ee,Z),ge=Object(l.a)(me)(ue()),ve=Object(l.a)(me)(de()),he=Object(l.a)(me)(le(),d.a.duration.normal),ye=l.a.section(pe(),d.a.duration.normal),ke=l.a.section(se()),xe=Object(l.a)((function(e){e.showSkills;var a=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["showSkills"]);return r.a.createElement(me,a)}))(ce(),(function(e){return 20*e.index}),(function(e){return e.showSkills&&"\n      transform: scale(1) translate3d(0,0,0);\n      opacity: 1;\n  "})),Re=l.a.section(ie()),Le=["illustrator","photoshop","css3","d3","docker","eslint","figma","firebase","gatsby","graphql","html5","javascript","jest","kubernetes","next","node","npm","nuxt-dot-js","postgresql","react","redux","rollup","sass","serverless","vue","yarn"];a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1],c=function(){t(!a)};return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["brooklyn","creative","engineer","web design","justin michaliga","jmichaliga","logo design","design systems","mobile apps","web developer","full-stack","front end","new york","nyc","ecmascript6","javascript","east village","greenpoint","gatsby","nextjs"]}),r.a.createElement(ke,{className:a?"open":"close",onClick:c},Le.sort().map((function(e,t){return r.a.createElement(xe,{ml:2,showSkills:a,index:Le.length-t},r.a.createElement(p,{icon:e,inverted:!1,ml:2}))}))),r.a.createElement(ye,{className:a?"open":"close",onClick:c},r.a.createElement("span",{role:"img","aria-label":"skills"},"⚡️")),r.a.createElement(ge,null,r.a.createElement(me,{width:[1,.5]},r.a.createElement(ve,null,r.a.createElement(he,null,r.a.createElement(h,{name:"jm"})))),r.a.createElement(me,{width:[1,.5],p:3},r.a.createElement(ve,{mt:4},r.a.createElement("p",null,"Full-Stack Javascript Engineer with over a decade of professional experience in agency, direct service, and in-house brand capacities — specializing in Interactive Design, Mobile/Web Development, Design Systems,"," ",r.a.createElement("abbr",{title:"and",className:"amp"},"&")," ","Immersive User Experiences. Based in Brooklyn, NYC 🍎."),r.a.createElement(Re,null,r.a.createElement(m,{href:"https://github.com/jmichaliga",icon:"github",text:"Follow @jmichaliga on Github."}),r.a.createElement(m,{href:"https://dribbble.com/jmichaliga",icon:"dribbble",text:"Follow @jmichaliga on Dribbble."}),r.a.createElement(m,{href:"https://codepen.com/jmichaliga",icon:"codepen",text:"Follow @jmichaliga on Codepen."}),r.a.createElement(m,{href:"https://twitter.com/jmichaliga",icon:"twitter",text:"Follow @jmichaliga on twitter."}))))))}},YViV:function(e){e.exports=JSON.parse('{"data":{"file":{"publicURL":"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg"}}}')},d1PU:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"publicURL":"/static/angellist-2f4541850810c199f26e37c8b504f9a5.svg","name":"angellist"}},{"node":{"publicURL":"/static/confluence-0112d3fdeb4a3b09d8a7f3b75e02e78b.svg","name":"confluence"}},{"node":{"publicURL":"/static/codepen-5eee1af7b7c2fa21612838657ebd44aa.svg","name":"codepen"}},{"node":{"publicURL":"/static/css3-b675af6016eed403de51899be75efe59.svg","name":"css3"}},{"node":{"publicURL":"/static/dribbble-d2dd05370a13c5e41a0b099cca658dec.svg","name":"dribbble"}},{"node":{"publicURL":"/static/docker-f39d2188afd67dc1d214ce1292ea6e63.svg","name":"docker"}},{"node":{"publicURL":"/static/elastic-a05731580ca6ae275e2dfb2d330940b3.svg","name":"elastic"}},{"node":{"publicURL":"/static/facebook-a52c24702f300adface1d349a9c09ab7.svg","name":"facebook"}},{"node":{"publicURL":"/static/firebase-df8bf7ad749ccc8ae99516952a8f2878.svg","name":"firebase"}},{"node":{"publicURL":"/static/foursquare-c4c0bc59a978230e7384612a6bed1edb.svg","name":"foursquare"}},{"node":{"publicURL":"/static/eslint-f82afeb8b75dcf1172d8db03b8e2842c.svg","name":"eslint"}},{"node":{"publicURL":"/static/figma-4be39904efd91eb47f1f69abc9375cc7.svg","name":"figma"}},{"node":{"publicURL":"/static/github-617870e422d4b75087cdcf9ff298032e.svg","name":"github"}},{"node":{"publicURL":"/static/gatsby-4ed519e8ff04a16301eb9b9c986d9978.svg","name":"gatsby"}},{"node":{"publicURL":"/static/graphcool-fd47374190d519f7f45980abdd7af034.svg","name":"graphcool"}},{"node":{"publicURL":"/static/graphql-d408f1092990152c0af2029b108e0e9e.svg","name":"graphql"}},{"node":{"publicURL":"/static/html5-3056bf2f96c40cd0a814b355959a6983.svg","name":"html5"}},{"node":{"publicURL":"/static/jest-ea2449ae5660152d948952f5c5770f93.svg","name":"jest"}},{"node":{"publicURL":"/static/javascript-1f6069572c9380a733700436d2980f8a.svg","name":"javascript"}},{"node":{"publicURL":"/static/jira-9cbc5e57c9019baae8378298d934b902.svg","name":"jira"}},{"node":{"publicURL":"/static/illustrator-dcca3aedf649c208e7c35f972d1f56f8.svg","name":"illustrator"}},{"node":{"publicURL":"/static/markdown-a5ad3245ac27e3c498a1488d43f39d14.svg","name":"markdown"}},{"node":{"publicURL":"/static/kubernetes-917338ba2aaf3585ca0d89667416e57c.svg","name":"kubernetes"}},{"node":{"publicURL":"/static/d3-6fd17ead6f61d3687ef352a21a6ef115.svg","name":"d3"}},{"node":{"publicURL":"/static/node-4edea5d49bd09fd7b5eda2e56d6ab18b.svg","name":"node"}},{"node":{"publicURL":"/static/jm-83f22a4568c2bcfa14ce5f335d48b186.svg","name":"jm"}},{"node":{"publicURL":"/static/npm-06851a1932d65340db2c1ba0faf7d6ce.svg","name":"npm"}},{"node":{"publicURL":"/static/nuxt-6b01f3c8bf137d5d1dad6fd868271767.svg","name":"nuxt"}},{"node":{"publicURL":"/static/next-a95348e2401d9d509024d93dc30b946c.svg","name":"next"}},{"node":{"publicURL":"/static/photoshop-1566992957b6883db6b4a34eb79df536.svg","name":"photoshop"}},{"node":{"publicURL":"/static/react-092e0882358cd09dbe9376b64d0f2a0e.svg","name":"react"}},{"node":{"publicURL":"/static/reddit-4c55d0f25d08347d126a882fc1bc7430.svg","name":"reddit"}},{"node":{"publicURL":"/static/serverless-0bc15976913767e2dc3f21f83b4fd607.svg","name":"serverless"}},{"node":{"publicURL":"/static/slack-656b0b5162c416d8759b0023c75d48d1.svg","name":"slack"}},{"node":{"publicURL":"/static/php-a9f29af417ebe3a13c7176e78553e2aa.svg","name":"php"}},{"node":{"publicURL":"/static/redux-280e514ca216947a428b9fbe0a9e183b.svg","name":"redux"}},{"node":{"publicURL":"/static/svelte-103da76acedebf70386d692c20456b88.svg","name":"svelte"}},{"node":{"publicURL":"/static/postgresql-34cbdb156ea57b239962b2909e0a6d89.svg","name":"postgresql"}},{"node":{"publicURL":"/static/spotify-aee4e77e7cf867e46ec2c2fff268e9ad.svg","name":"spotify"}},{"node":{"publicURL":"/static/squarespace-af35c51c6de6e2d5f42e92b2b0b54180.svg","name":"squarespace"}},{"node":{"publicURL":"/static/rollup-e47301619447e35bed8252a4c4cab10d.svg","name":"rollup"}},{"node":{"publicURL":"/static/sass-643d0db4b0852bdf249ac130d63d1fd6.svg","name":"sass"}},{"node":{"publicURL":"/static/visualstudiocode-e16557f35c620516c31848a013cc10f8.svg","name":"visualstudiocode"}},{"node":{"publicURL":"/static/visualstudio-13e7986ab0781769b2e73b885ae613e2.svg","name":"visualstudio"}},{"node":{"publicURL":"/static/yarn-37ad0f42b7a4e65cf317ad714b881a10.svg","name":"yarn"}},{"node":{"publicURL":"/static/zeit-fa3eda3c2a6312668ccb68778670eecb.svg","name":"zeit"}},{"node":{"publicURL":"/static/twitter-be06689853aec102607f5e54e6fd2dfa.svg","name":"twitter"}},{"node":{"publicURL":"/static/vue-15f073439500036a9e3ac989115b3e44.svg","name":"vue"}},{"node":{"publicURL":"/static/stackoverflow-f681cd5f2897114e3d1521439e2e7f9b.svg","name":"stackoverflow"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-724c7b49195876db6fe6.js.map