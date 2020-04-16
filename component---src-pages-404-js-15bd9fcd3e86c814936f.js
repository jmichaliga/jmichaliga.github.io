(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(154),o=n(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},148:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(33),c=n.n(s);n.d(t,"a",function(){return c.a});n(147);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){"use strict";var a=function(e,t){return t.forEach(function(t,n){return Object.defineProperty(e,t,{enumerable:!1,get:function(){return this[n]}})})},r=[32,40,48,64].map(function(e){return e+"em"}),i=r.map(function(e){return"@media screen and (min-width:"+e+")"}),o=["sm","md","lg","xl"];a(r,o),a(i,o);var s={boxShadows:["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],breakpoints:r,colors:{black:"#000",white:"#FFF",text:"#123",gray:"#456",red:"#C00",orange:"#F81",yellow:"#FD2",green:"#0A0",blue:"#03F",violet:"#70B",error:"#C00",danger:"#F81",success:"#0A0",secondary:"#F81",primary:"#03F"},duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},maxContainerWidth:"1280px",mediaQueries:i,radii:[0,2,6],radius:"2px",space:[0,4,8,16,32,64,128],timingFunctions:{easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}};t.a=s},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga"}}}}},151:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(158),u=n.n(c);function l(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title,c=a.data.site,l=t||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Justin W. Michaliga",description:"Justin W. Michaliga is a Creative Mobile Web Developer and Interactive Designer in NYC.",author:"@jmichaliga"}}}}},154:function(e,t,n){"use strict";var a=n(155),r=n.n(a),i=n(150),o=n(0),s=n.n(o),c=n(4),u=n.n(c),l=n(148),d=n(156),m=n(149),p=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"#FA1937",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},s.a.createElement("h1",{mb:0,style:{marginBottom:0}},t)))};p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:"JMichaliga"};var g=p;n(157);function f(){var e=r()(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  font-size: 0.8em;\n  font-family: 'IBM Plex Mono';\n  padding: ","px;\n"]);return f=function(){return e},e}function b(){var e=r()(["\n  font-size: 1em;\n  width: 100%;\n"]);return b=function(){return e},e}function h(){var e=r()(["\n  margin: 0 auto;\n  padding: 0px 1.0875rem 1.45rem;\n  paddingTop: 0;\n  height: 100vh;\n  max-width: 960px;\n"]);return h=function(){return e},e}var y=Object(d.a)("div")(h()),x=Object(d.a)("main")(b()),v=Object(d.a)("footer")(f(),m.a.space[3]),w=function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),s.a.createElement(y,null,s.a.createElement(x,null,t),s.a.createElement(v,null,"© ",(new Date).getFullYear())))},data:i})};w.propTypes={children:u.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-15bd9fcd3e86c814936f.js.map