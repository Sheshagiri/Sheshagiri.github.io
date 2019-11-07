(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(146),l=n(154),d=n(156),c=n(157),u=n(155),p=s.default.h1.withConfig({displayName:"sc-404__MainTitle",componentId:"sc-13o641j-0"})(["line-height:1.5;text-align:center;font-size:3rem;"]),m=s.default.div.withConfig({displayName:"sc-404__Icon",componentId:"sc-13o641j-1"})(["width:150px;margin:0 auto;"]),h=s.default.p.withConfig({displayName:"sc-404__Text",componentId:"sc-13o641j-2"})(["text-align:center;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l.a,{location:this.props.location,noCover:!0},o.a.createElement(u.a,{title:"Page Not Found"}),o.a.createElement(d.a,{heroImg:"/images/404.jpeg",title:"404"}),o.a.createElement(c.a,null,o.a.createElement(p,null,"404 Page Not Found"),o.a.createElement(m,null,o.a.createElement("img",{src:"/images/ufo-and-cow.svg",alt:"ufo and cow"})),o.a.createElement(h,null,"Looks like you've followed a broken link or entered a URL that doesn't exist on this site.")))},t}(o.a.Component);t.default=g},147:function(e,t){e.exports={siteTitle:"Hi! I'm Sheshagiri!",siteDescription:"Create your online curriculum in just a few minutes with this starter",keyWords:["gatsbyjs","react","curriculum","sheshagiri","golang jobs","kubernetes"],authorName:"Sheshagiri Rao Mallipedhi",twitterUsername:"_sheshagiri_",githubUsername:"sheshagiri",authorAvatar:"/images/avatar.jpeg",authorDescription:"Passionate developer with keen interest for good user experience. Always interested in new technologies.\n  <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;In 2010, right after college I started working full time as a developer writing software for backoffice trading systems. \n  In 2013, I moved on to building Network Management Systems at <i>Avaya Inc</i> where my business unit \n  was acquired by <i>Extreme Networks Inc</i> in 2017.\n  <br>\n  Late 2017 I joined <i>Riverbed</i> to build a Cloud Agnostic Network Functions Virtualization Orchestrator \n  using Kubernetes and spent an year there before moving back to <i>Extreme Networks</i>.\n  <br>\n&nbsp;&nbsp;&nbsp;&nbsp;\nI currently work as a backend developer and mainly work with <strong>Go, Kubernetes, Serverless and Google Cloud Platform</strong>.",skills:[{name:"Go",level:80},{name:"Java/J2EE",level:70},{name:"Python",level:42},{name:"Typescript",level:45},{name:"Angular",level:60},{name:"Git",level:70},{name:"Docker",level:70},{name:"Kubernetes",level:80},{name:"DevOps",level:80},{name:"AWS/GCP",level:80}],jobs:[{company:"Extreme Networks Inc",begin:{month:"oct",year:"2018"},duration:null,occupation:"Staff Software Engineer",description:"Building next generation cloud native network management applications."},{company:"Riverbed Technology Inc",begin:{month:"sept",year:"2017"},duration:"1 yr",occupation:"Lead Dev/Product Owner",description:"Involved in design and development of cloud agnostic network functions virtualization orchestrator(nfvo) using kubernetes."},{company:"Extreme Networks Inc",begin:{month:"Jan",year:"2013"},duration:"4 yrs e 9 mos",occupation:"Senior Software Engineer",description:"Responsible for design, development of various modules in network management system(nms) and sdn controller."},{company:"HCL Technologies Inc",begin:{month:"Oct",year:"2010"},duration:"2 yrs e 4 mos",occupation:"Software Engineer",description:"Worked for Goldman Sachs as consultant and wrote software for backoffice trading systems."}],social:{twitter:"https://twitter.com/_sheshagiri_",linkedin:"https://www.linkedin.com/in/sheshagirirao",github:"https://github.com/sheshagiri",email:"msheshagirirao@gmail.com"},siteUrl:"https://github.com/sheshagiri",pathPrefix:"/sheshagiri.github.io",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-146799441-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",headerLinks:[{label:"Sheshagiri",url:"/"}]}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(33),l=n.n(s);n.d(t,"a",function(){return l.a}),n.d(t,"c",function(){return s.withPrefix});n(149);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Hi! I'm Sheshagiri!",description:"Create your online curriculum in just a few minutes with this starter",author:"Sheshagiri Rao Mallipedhi"}}}}},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(147),l=n.n(s),d=n(7),c=n.n(d),u=n(148),p=n(146),m=n(153),h=p.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dsp75d-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303B;"]),g=p.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dsp75d-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303B;"]),f=p.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dsp75d-2"})(["display:flex;flex-direction:row;"]),w=Object(p.default)(u.a).withConfig({displayName:"header__HeaderLink",componentId:"dsp75d-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),b=Object(p.default)(function(e){var t=e.className;return r.a.createElement("a",{className:t,href:"https://github.com/"+l.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"dsp75d-4"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=l.a.headerLinks;return r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(f,null,e.map(function(e,t){return r.a.createElement(w,{to:e.url,key:"header-link-"+t},e.label)})),r.a.createElement(b,null)))},t}(r.a.Component),v=(n(158),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{headerLinks:l.a.headerLinks}),r.a.createElement("div",null,t))});v.propTypes={children:o.a.node.isRequired};var x=v;n.d(t,"a",function(){return x})},155:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(159),d=n.n(l),c=n(148);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var p=u,m="1025518380";n.d(t,"a",function(){return p})},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(148),l=n(147),d=n.n(l),c=n(146),u=c.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"uqwd53-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=c.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"uqwd53-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),m=c.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"uqwd53-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.className;return o.a.createElement(u,{className:n},o.a.createElement(p,null,o.a.createElement(m,null,t)))},t}(o.a.Component),g=Object(c.default)(h).withConfig({displayName:"hero",componentId:"uqwd53-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(s.c)(d.a.siteCover))+");"});n.d(t,"a",function(){return g})},157:function(e,t,n){"use strict";var a=n(146).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-10vqfep-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);n.d(t,"a",function(){return a})}}]);
//# sourceMappingURL=component---src-pages-404-js-ae89c436fc38064ec964.js.map