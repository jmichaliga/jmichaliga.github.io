(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(151),o=n(156),c=n(154);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},147:function(e,t,n){"use strict";var a=function(e,t){return t.forEach(function(t,n){return Object.defineProperty(e,t,{enumerable:!1,get:function(){return this[n]}})})},r=[32,40,48,64].map(function(e){return e+"em"}),i=r.map(function(e){return"@media screen and (min-width:"+e+")"}),o=["sm","md","lg","xl"];a(r,o),a(i,o);var c={boxShadows:["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],breakpoints:r,colors:{black:"#000",white:"#FFF",text:"#123",gray:"#456",red:"#C00",orange:"#F81",yellow:"#FD2",green:"#0A0",blue:"#03F",violet:"#70B",jmRed:"#FA1967",jmBlue:"#0AC",error:"#C00",danger:"#F81",success:"#0A0",secondary:"#F81",primary:"#03F"},duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},fontSizes:[12,14,16,20,24,32,40,56,72],maxContainerWidth:"1280px",mediaQueries:i,radii:[0,2,6],radius:"2px",space:[0,4,8,16,32,64,128],timingFunctions:{easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}};t.a=c},149:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},151:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(149);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(158),u=n.n(s);function l(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,s=a.data.site,l=t||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga",description:"Justin W. Michaliga is a Creative Mobile Web Developer and Interactive Designer in NYC.",author:"@jmichaliga"}}}}},156:function(e,t,n){"use strict";var a=n(148),r=n.n(a),i=n(152),o=n(0),c=n.n(o),s=n(4),u=n.n(s),l=n(151),d=n(150),p=n(147);function m(){var e=r()(["\n  color: ",";\n  text-shadow: "," 1px 1px 2px;\n  letter-spacing: -0.05em;\n  text-transform: uppercase;\n  font-size: ","px;\n  padding: 1.45rem 1.0875rem;\n  text-align: center;\n"]);return m=function(){return e},e}var g=Object(d.a)("h1")(m(),p.a.colors.white,p.a.colors.black,p.a.fontSizes[6]),f=function(e){var t=e.siteTitle;return c.a.createElement("header",{style:{marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},c.a.createElement(g,{mb:0,style:{marginBottom:0}},t)))};f.propTypes={siteTitle:u.a.string},f.defaultProps={siteTitle:"JMichaliga"};var b=f;n(157);function h(){var e=r()(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  font-size: ","px;\n  font-family: 'IBM Plex Mono';\n  padding-left: ","px;\n"]);return h=function(){return e},e}function x(){var e=r()(["\n width: 100%;\n"]);return x=function(){return e},e}function y(){var e=r()(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  paddingTop: 0;\n  height: 100vh;\n  max-width: 960px;\n"]);return y=function(){return e},e}var v=Object(d.a)("div")(y()),w=Object(d.a)("main")(x()),E=Object(d.a)("footer")(h(),p.a.fontSizes[0],p.a.space[2]),F=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(v,null,c.a.createElement(w,null,t),c.a.createElement(E,null,"© ",(new Date).getFullYear()," ⚡️")))},data:i})};F.propTypes={children:u.a.node.isRequired};t.a=F}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c5c0ac5d45be8da05a5d.js.map