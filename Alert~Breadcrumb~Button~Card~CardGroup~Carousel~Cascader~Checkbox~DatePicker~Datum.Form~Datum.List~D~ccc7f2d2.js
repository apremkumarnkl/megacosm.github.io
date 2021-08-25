(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[0],{288:function(e,a,n){"use strict";var t=n(4),i=n(5),o=n(6),l=n(7),r=n(0),c=n.n(r),r=n(19),s=n(1),u=n(159),r=function(e){Object(o.a)(r,e);var n=Object(l.a)(r);function r(e){var a;return Object(t.a)(this,r),(a=n.call(this,e)).state={ready:!1},a.placeholderRef=function(e){a.placeholder=e},a}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this,a=this.props,n=a.container,a=a.offset;this.lazyId=Object(u.a)({offset:a,container:n,element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(u.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,a=this.props,n=a.children,a=a.placeholder;return e?n:c.a.createElement("span",{ref:this.placeholderRef,className:Object(s.s)("_")},a)}}]),r}(r.b);r.defaultProps={offset:0},a.a=r},306:function(e,a,n){"use strict";var r={};n.r(r),n.d(r,"hide",function(){return o}),n.d(r,"show",function(){return l}),n.d(r,"move",function(){return c}),n.d(r,"isCurrent",function(){return s});var u,t=n(215),i=n(15),d=n.n(i),i=n(53),m=n.n(i),h=n(1),n=n(100),f=document.createElement("div");f.style.display="none",Object(n.a)(function(){document.body.appendChild(f)});n=document.createElement("div");n.className=Object(h.K)("arrow"),f.appendChild(n);var y,p=document.createElement("div");function o(){u&&clearTimeout(u),f.style.display="none",f.className="",y=void 0}function b(){o(),document.removeEventListener("click",b)}function l(e,a,n){var r=e.position,t=e.style,i=e.tip,o=e.trigger,l=e.animation,c=e.className;y=a,f.style.cssText="display: none",Object.keys(t).forEach(function(e){f.style[e]=t[e]});var s=Object(h.K)("_","in",r,l&&"animation");u=setTimeout(function(){f.style.display="block",f.className=d()(s,c)},0),m.a.render(i,p),p.setAttribute("style",!1),n&&Object.keys(n).forEach(function(e){p.style[e]="number"==typeof n[e]?"".concat(n[e],"px"):n[e]}),"click"===o&&document.addEventListener("click",b)}function c(e,a){e===y&&Object.keys(a).map(function(e){return f.style[e]=a[e]})}function s(e){return e===y}p.className=Object(h.K)("inner"),f.appendChild(p);r=Object(t.a)(r);r.displayName="MegacosmTooltip";a.a=r},488:function(e,a,n){"use strict";var c=n(27),s=n(0),u=n.n(s),d=n(284),m=n(94),h=n(23);a.a=function(l){return function(e){var a=Object(s.useState)(""),a=Object(c.a)(a,2),r=a[0],t=a[1],a=Object(s.useState)([]),i=Object(c.a)(a,1)[0],n=e.location.hash,a=Object(s.useCallback)(function(e){e.forEach(function(e){i.push(e)})},[]),o=Object(s.useCallback)(function(){var e;!n||(e=document.querySelector(decodeURI(n)))&&setTimeout(function(){e.scrollIntoView()},50)},[n]);Object(s.useEffect)(function(){o();function e(){var n,r=document.documentElement.scrollTop,e=i.filter(function(e){return 3===e.level&&e.children[0]});0!==e.length&&(n=e[0].id,e.forEach(function(e){var a=document.querySelector("#".concat(e.id));a&&a.offsetTop<=r&&(n=e.id)}),t(n))}return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return u.a.createElement("div",{className:Object(h.h)("_")},u.a.createElement(l,{onHeadingSetted:a}),!e.noNav&&u.a.createElement(d.a,{className:Object(h.h)("sticky"),top:50},u.a.createElement("div",{className:Object(h.h)("nav")},i.map(function(e,a){var n=e.children.filter(function(e){return"string"==typeof e});return u.a.createElement("a",{key:a,className:Object(h.h)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){0===m.a.location.search.indexOf("?example=")?m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-",""))):(m.a.push("".concat(m.a.location.pathname,"#").concat(e)),(e=document.getElementById(e))&&e.scrollIntoView())}.bind(null,e.id)},n)}))))}}},489:function(e,a,n){"use strict";n.d(a,"a",function(){return I});function p(e){var a=void 0===(a=e.language)?"lang-jsx":a,n=e.onHighLight,e=e.value,r=Object(b.useRef)(null);return Object(b.useEffect)(function(){var e=r.current;l.a.highlightElement(e,!1,function(){n&&n(e.offsetHeight)})},[]),g.a.createElement("pre",{ref:r,className:i()(a||"lang-jsx",Object(S.b)("pre"))},g.a.createElement("code",null,e))}var b=n(0),g=n.n(b),c=n(24),v=n(27),r=n(547),s=n.n(r),u=n(91),d=n(22),S=n(23),m=n(45),t=n(15),i=n.n(t),o=n(625),l=n.n(o),M=(n(626),n(83)),h=n(41),k=n(288),A=n(160),E=n(94),f=n(627),y=n.n(f),C=n(306),r=n(495),t=n(508),o=n(490),f=n(494);function O(e){var a=e.id,t=e.text,n="".concat(a,"_form"),e=Object(b.useState)(""),e=(a=Object(v.a)(e,2))[0],r=a[1];return Object(b.useEffect)(function(){var a={"package.json":{content:{dependencies:{"react-dom":"latest","prop-types":"latest"}}},"App.js":{content:t},"index.js":{content:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport 'megacosm/dist/theme.megacosm.css'\nimport App from './App.js'\n  \nReactDOM.render(<App />, document.querySelector('#root'))\n"},"index.html":{content:'<div id="root" style="padding: 24px"></div>'}};(function(e,a){for(var n=[];i=a.exec(e);){var r=i,t=Object(v.a)(r,2),r=t[0],t=t[1];t&&n.push(t);var i=i.index,i=r.length+i;e=e.substring(i)}return n})(t,L).forEach(function(e){-1===e.indexOf(".")?"megacosm"===e?a["package.json"].content.dependencies.megacosm||(a["package.json"].content.dependencies.megacosm="latest"):e.startsWith("doc")?function(e,a){var n=t.match(new RegExp("import.+".concat(e,"'"),"g"))[0];if("user"===e)return a["".concat(e,".js")]={content:B.user.value},a["App.js"].content=a["App.js"].content.replace("doc/data/user","./".concat(e,".js")),a["package.json"].content.dependencies.immer="latest";a["".concat(e,".js")]={content:"const ".concat(e," = ").concat(JSON.stringify(B[e].value,null,2),"\n").concat(B[e].constExport?"export const allIds = ".concat(JSON.stringify(B[e].constExport)):"","\nexport default ").concat(e)};var r=/import +(.+) from/g.exec(n)[1].replace(/[{}]/g,"").trim().split(" ").pop();a["App.js"].content="allIds"===r?a["App.js"].content.replace("doc/data/tree","./".concat(e,".js")):a["App.js"].content.replace(n,"import ".concat(r," from './").concat(e,".js'")),B[e].func&&(a["App.js"].content=a["App.js"].content.replace(new RegExp("".concat(r,"\\(\\d*\\)"),"g"),r))}(e.split("/").pop(),a):a["package.json"].content.dependencies[e]="latest":0===e.indexOf("./s")?(a["App.js"].content=a["App.js"].content.replace("less","css"),a[e.substring(2).replace("less","css")]={content:"@keyframes indicator-rise {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\ndiv.indicator {\n  text-align: center;\n  user-select: none;\n}\ndiv.indicator-item {\n  margin-right: 10px;\n  float: left;\n  width: 36px;\n  height: 30px;\n  font-size: 20px;\n  color: #ffffff50;\n  cursor: pointer;\n}\ndiv.indicator-item.active {\n  color: #fff;\n}\ndiv.indicator .indicator-progress {\n  position: relative;\n}\ndiv.indicator .indicator-progress > div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\ndiv.indicator .indicator-progress .bg {\n  width: 100%;\n  background: #ffffff50;\n}\ndiv.indicator .indicator-progress .fg {\n  width: 0;\n  background: #ffffff;\n}\n"}):(a["icon.js"]={content:"import { Icon } from 'megacosm'\nconst url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'\nexport default Icon(url, 'FontAwesome', 'fa')\n"},a["App.js"].content=a["App.js"].content.replace(e,"./icon.js"))}),r(y.a.compressToBase64(JSON.stringify({files:a})).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))},[t]),g.a.createElement("form",{name:n,action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},g.a.createElement("input",{type:"hidden",name:"parameters",value:e}),g.a.createElement(C.a,{tip:Object(m.a)("codesandbox","open in codesandbox")},g.a.createElement("a",{className:Object(S.b)("toggle"),onClick:function(){document.forms[n].submit()},style:{right:30}},g.a.createElement(A.a,{name:"code-sandbox"}))))}var j,B={tree:{value:r.e,func:!1,constExport:r.d},city:{value:t.a,func:!0},user:{value:(j=Object(o.b)(10),"import immer from 'immer'\nlet allData = ".concat(JSON.stringify(j,null,2),"\n\nfunction pickNumber(max = 65555, min = 0, fixed = 2) {\n  if (typeof max === 'string') max = parseInt(max, 10)\n  if (typeof min === 'string') min = parseInt(min, 10)\n\n  const num = Math.random() * (max - min) + min\n  return parseFloat(num.toFixed(fixed), 0)\n}\n\nfunction pickInteger(...args) {\n  return Math.round(pickNumber(...args))\n}\n\nexport function fetchSync(count = 100, start = 0, sorter = {}, username) {\n  const { name, order } = sorter\n  let sort\n  switch (name) {\n    case 'id':\n    case 'salary':\n      if (order === 'asc') sort = (a, b) => a[name] - b[name]\n      else sort = (a, b) => b[name] - a[name]\n      break\n    default:\n      if (name) {\n        if (order === 'asc') sort = (a, b) => a[name].localeCompare(b[name])\n        else sort = (a, b) => b[name].localeCompare(a[name])\n      }\n      break\n  }\n\n  let data = sort ? immer(allData, draft => draft.sort(sort)) : allData\n\n  if (username) {\n    username = username.toLocaleLowerCase()\n    data = data.filter(d => `${d.firstName} ${d.lastName}`.toLocaleLowerCase().indexOf(username) >= 0)\n  }\n\n  return data.slice(start, start + count)\n}\n\nexport const fetch = {\n  // eslint-disable-next-line\n  get(src, { current = 1, pageSize = 100, sorter, username }) {\n    const start = (current - 1) * pageSize\n    return new Promise(resolve => {\n      setTimeout(() => {\n        resolve({\n          status: 1,\n          data: fetchSync(pageSize, start, sorter, username),\n          current,\n          pageSize,\n          total: allData.length,\n        })\n      }, pickInteger(500, 300))\n    })\n  },\n\n  post(src, { op, ids }) {\n    return new Promise(resolve => {\n      switch (op) {\n        case 'delete':\n          allData = allData.filter(d => ids.indexOf(d.id) < 0)\n          break\n        case 'on':\n        case 'off':\n          allData.forEach((d, i) => {\n            if (ids.indexOf(d.id) >= 0) {\n              allData[i] = { ...d, status: op === 'on' }\n            }\n          })\n          break\n        default:\n      }\n      setTimeout(() => {\n        resolve(true)\n      }, pickInteger(200))\n    })\n  },\n}")),func:!1},lorem:{value:Object(f.a)(3),func:!0}},L=/import.*[from]?[ ]+'(.*)'/,K=g.a.createElement("div",{className:Object(S.b)("placeholder")},g.a.createElement(h.a,null));function D(e){function r(e,a,n){l.current.style.height="".concat(e*(a-1),"px"),1<a&&setTimeout(function(){r(e,a-1,n)},16),n&&(document.documentElement.scrollTop-=e)}var a=e.component,n=e.id,t=e.name,i=e.rawText,o=e.title,l=Object(b.useRef)(null),c=Object(b.useState)(!1),s=Object(v.a)(c,2),u=s[0],d=s[1],e=Object(b.useState)(Object(b.createElement)(a)),c=Object(v.a)(e,1)[0],s=Object(b.useState)(),a=Object(v.a)(s,2),m=a[0],h=a[1],e=Object(b.useState)(),f=Object(v.a)(e,1)[0],s=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim();Object(b.useEffect)(function(){var e;l.current&&(u?l.current.style.height="".concat(m,"px"):(0<(e=m%15)&&r(e,1,f),r((m-e)/15,15,f)))},[u]);function y(e){d(!u),f=e}a=function(e){return g.a.createElement("a",{className:Object(S.b)("toggle"),onClick:y.bind(null,e)},g.a.createElement(A.a,{name:u?"code-close":"code"}))},e=E.a.location.search,i="?example=";if(0===e.indexOf(i)&&(e=e.replace(i,""),t.indexOf(e)<0))return null;t=o.split("\n"),e=Object(M.a)(t),t=e[0],e=e.slice(1),t=t&&t.trim();return g.a.createElement(b.Fragment,null,t&&g.a.createElement("h3",{key:"0",id:n},t),g.a.createElement(k.a,{placeholder:K},g.a.createElement("div",{className:Object(S.b)("_",u&&"showcode")},g.a.createElement("div",{className:Object(S.b)("body")},c),0<o.length&&g.a.createElement("div",{className:Object(S.b)("desc")},e.map(function(e,a){return g.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e}})}),g.a.createElement(O,{id:n,text:s}),a(!1)),g.a.createElement("div",{ref:l,className:Object(S.b)("code")},g.a.createElement(p,{onHighLight:function(e){h(e)},onClose:y,value:s}),a(!0)))))}D.defaultProps={rawText:""};h=function(e){var a=e.children,e=Object(b.useState)(!1),e=Object(v.a)(e,2),n=e[0],r=e[1],e=a.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=n?"pre":"div";return g.a.createElement("div",{onClick:function(){r(!n)},className:Object(S.g)("console")},g.a.createElement(a,null,e))};h.defaultProps={children:[]};var R=h;function J(e){var a=e.children,e=Object(c.a)(a[1].props.children);try{e.sort(function(e,a){return e.props.children[0].props.children[0].localeCompare(a.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return g.a.createElement("div",{style:{overflow:"auto"}},g.a.createElement("table",{className:"doc-api-table"},a[0],g.a.cloneElement(a[1],{children:e})))}J.defaultProps={};var w=J,H=/^<code name="([\w|-]+)" /,x=/^<example name="([\w|-]+)"/;function T(e){var a=e.onHeadingSetted,t=e.codes,i=e.examples,n=e.source,e=Object(b.useState)([]),r=Object(v.a)(e,1)[0],e=Object(b.useState)({}),o=Object(v.a)(e,1)[0];Object(b.useEffect)(function(){a&&a(r)},[]);function l(e){r.push(e)}r=[];return g.a.createElement(s.a,{className:Object(S.g)("_"),source:n,renderers:{code:p,heading:function(e){var a,n=e.level,r=e.children,t="".concat(n,"-").concat(r[0]),i="h".concat(n);return"object"==typeof r[0]?g.a.createElement(i,null,r):(o[t]||(e="heading-".concat((a=n,e=r[0],4===a?Object(d.c)():"".concat(a,"-").concat((e||"").replace(/\s/g,"-")))),2!==n&&3!==n||l({id:e,level:n,children:r}),o[t]=g.a.createElement(i,{id:e},r)),o[t])},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!i)return g.a.createElement("div",null);var e=Object(m.a)("Example"),a="heading-example-h";return l({id:a,level:2,children:[e]}),o.examples=[g.a.createElement("h2",{key:"h",id:a},e)].concat(Object(c.a)(i.map(function(e,a){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),r=e.title.split("\n"),r=Object(v.a)(r,1)[0];return l({id:n,level:3,children:[r]}),g.a.createElement(D,Object.assign({key:a,id:n},e,{lazy:2<a}))}}))),o.examples}();var a,n=e.value.match(x);if(n)return a=n[1],e.value.indexOf("noExpand"),r="example-".concat(a),o[r]||(n=(i||[]).find(function(e){return e.name===a}),o[r]=n?g.a.createElement(D,n):null),o[r];if("<br>"===e.value||"<br />"===e.value)return g.a.createElement("br",null);var r=e.value.match(H);return r?(e=r[1],(r=t[e])?[g.a.createElement(p,{key:"cb",value:r.text})].concat(Object(c.a)(r.log.map(function(e,a){return g.a.createElement(R,{key:a},e)}))):(console.error("Code ".concat(e," not existed")),null)):null},table:w,link:function(e){var a=0===e.href.indexOf("http")?"_blank":void 0;return a?g.a.createElement("a",{href:e.href,target:a},e.children):g.a.createElement(u.a,{to:e.href,target:a},e.children)}}})}T.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var N=n(169),G=n(488),z=(P.defaultProps={loader:void 0,source:void 0},Object(b.memo)(P));function P(e){var a=Object(b.useState)(e.source),n=Object(v.a)(a,2),a=n[0],r=n[1];return Object(b.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?g.a.createElement(T,Object.assign({},e,{source:a})):g.a.createElement(N.a,{style:{minHeight:200}})}a.b=z;function I(a,n){return Object(G.a)(function(e){return g.a.createElement(z,Object.assign({},e,{noNav:n,loader:a}))})}},490:function(e,a,n){"use strict";n.d(a,"b",function(){return f}),n.d(a,"a",function(){return r});var t=n(17),l=n(44),c=n(516),o=["Aaliyah","Abbey","Abby","Abdullah","Abelardo","Abigayle","Ada","Adaline","Addie","Adelbert","Adeline","Adelle","Adolfo","Adonis","Adriana","Adrien","Aglae","Agustina","Aida","Aileen","Aiyana","Alaina","Alanis","Alba","Albertha","Albina","Alec","Alejandrin","Alene","Alessia","Alexa","Alexandre","Alexandrine","Alexanne","Alexys","Alfonso","Alfred","Ali","Alicia","Alison","Aliyah","Allan","Allie","Alphonso","Alva","Alvera","Alvis","Alysa","Alysson","Amani","Amaya","Amelia","America","Amina","Amiya","Amy","Anabel","Anais","Anderson","Andreanne","Andy","Angelica","Angelita","Angus","Anissa","Aniyah","Annabel","Annalise","Anne","Annie","Anthony","Antonetta","Antonietta","Antwan","April","Aracely","Ardella","Arely","Arianna","Arielle","Arlie","Armando","Arne","Arnoldo","Art","Arvel","Aryanna","Ashlee","Ashly","Ashtyn","Astrid","Aubrey","Audreanne","Augusta","Aurelia","Aurore","Austyn","Avery","Ayana","Aylin","Bailey","Baron","Bart","Baylee","Beaulah","Belle","Benjamin","Benny","Bernadette","Bernardo","Bernice","Bernita","Berta","Bertrand","Beth","Betsy","Betty","Beverly","Billie","Blair","Blanca","Bo","Bonita","Boyd","Bradford","Brady","Brandi","Brandt","Brannon","Braulio","Breana","Brenda","Brendon","Brennon","Brett","Briana","Bridget","Brielle","Brisa","Brock","Brook","Brooks","Bryana","Bryon","Buddy","Burdette","Buster","Caesar","Caleb","Calista","Cameron","Camille","Camryn","Candelario","Candido","Carissa","Carley","Carlo","Carmel","Carmelo","Carol","Carolina","Carolyne","Carson","Casandra","Casimir","Cassandre","Catalina","Catherine","Cathy","Cecelia","Cecilia","Celestino","Cesar","Chadrick","Chandler","Charity","Charley","Chase","Chaya","Chelsey","Chester","Cheyenne","Christ","Christian","Christine","Christopher","Ciara","Cierra","Clair","Clarabelle","Clark","Claudia","Clay","Clementina","Cleo","Cletus","Clifford","Clinton","Cloyd","Cody","Coleman","Collin","Colton","Conner","Conor","Constantin","Cora","Cordelia","Cordie","Cornelius","Cortez","Coty","Craig","Cristal","Cristobal","Crystal","Curt","Cynthia","Dagmar","Daisha","Dale","Dalton","Damian","Damon","Dandre","Dangelo","Daniella","Dannie","Danyka","Daphney","Darian","Dario","Darlene","Darrell","Darrin","Darryl","Dashawn","David","Davon","Dawson","Dayna","Dean","Deborah","Dedrick","Deja","Dejuan","Delfina","Dell","Delores","Delphine","Demarcus","Demetrius","Denis","Deondre","Dereck","Deron","Deshawn","Dessie","Destinee","Destiny","Deven","Devonte","Dewitt","Diana","Dillan","Dina","Dixie","Dolores","Domenick","Dominic","Donald","Donna","Donny","Dorian","Dorothy","Dorthy","Dovie","Drew","Dulce","Dustin","Dylan","Earline","Easter","Ebony","Edd","Edgar","Edmond","Eduardo","Edwin","Edythe","Efren","Eino","Elbert","Eldora","Eleanora","Electa","Elenora","Eli","Elias","Elinor","Elisabeth","Elisha","Elizabeth","Ellie","Ellis","Elmira","Elna","Eloisa","Eloy","Else","Elton","Elvie","Elwyn","Elza","Emelie","Emerson","Emil","Emiliano","Emily","Emmanuel","Emmett","Emmy","Enid","Enos","Ephraim","Eric","Erick","Erika","Erna","Ernestine","Ervin","Esmeralda","Esteban","Estell","Estevan","Etha","Ethelyn","Eudora","Eula","Euna","Eva","Evangeline","Eveline","Everett","Evie","Ezekiel","Fabian","Fannie","Faustino","Fay","Felicia","Felipa","Felton","Fernando","Filiberto","Fiona","Fleta","Florence","Florida","Floy","Forest","Frances","Francis","Franco","Franz","Freddie","Frederick","Fredrick","Freeman","Frieda","Furman","Gabriella","Gage","Garett","Garnet","Garrett","Garry","Gavin","Gaylord","Genesis","Genoveva","George","Georgianna","Geovany","Gerard","Gerhard","Gerry","Gia","Gilbert","Giles","Gino","Giovanni","Giuseppe","Glen","Glennie","Golda","Gordon","Graciela","Grant","Grayson","Gregg","Gregory","Greyson","Guadalupe","Guillermo","Gunner","Gust","Gwen","Hailee","Hal","Halie","Hank","Hans","Harmon","Harrison","Haskell","Hattie","Haylee","Hazel","Heather","Hector","Helena","Hellen","Henderson","Henry","Hermann","Herminio","Hertha","Hilario","Hildegard","Hilma","Hiram","Hollie","Hope","Hortense","Howard","Hubert","Hulda","Hyman","Icie","Idella","Ike","Iliana","Imelda","Ines","Irwin","Isabell","Isac","Isaiah","Ismael","Israel","Iva","Ivy","Jabari","Jacinthe","Jackeline","Jackson","Jacquelyn","Jada","Jadon","Jaida","Jaime","Jake","Jalen","Jamaal","Jamarcus","Jamey","Jamir","Jan","Jane","Janet","Janie","Jannie","Jaquelin","Jaren","Jarred","Jarrett","Jasen","Jasper","Javon","Jayce","Jayde","Jaylan","Jaylon","Jayson","Jazmyn","Jeanette","Jed","Jeff","Jeffrey","Jenifer","Jennings","Jerad","Jeramy","Jeremy","Jermey","Jeromy","Jerrold","Jesse","Jessika","Jesus","Jevon","Jillian","Jo","Joanie","Joanny","Jocelyn","Joe","Joesph","Johann","John","Johnnie","Johnson","Jonas","Jonathon","Jordi","Jordyn","Josefa","Josephine","Joshuah","Josianne","Jovan","Jovany","Juana","Judd","Judson","Julia","Julianne","Juliet","June","Justen","Justine","Justyn","Kacey","Kade","Kaela","Kailee","Kaitlin","Kaleb","Kali","Kamille","Kamryn","Kareem","Kari","Karina","Karlee","Karlie","Kasandra","Katarina","Katelynn","Katheryn","Kathryn","Katlynn","Kattie","Kaya","Kayla","Kayleigh","Kaylie","Keanu","Keegan","Keenan","Kellen","Kellie","Kelsie","Ken","Kendrick","Kennedy","Kenny","Kenyatta","Keshaun","Kevin","Keyshawn","Kian","Kiara","Kiera","Kim","Kip","Kirsten","Kobe","Kolby","Korey","Kris","Kristin","Kristoffer","Krystal","Kurt","Kyle","Kyler","Lacey","Lafayette","Lamar","Lance","Laney","Larry","Laurel","Lauretta","Laurie","Lauryn","Laverna","Lavinia","Lawrence","Layne","Leann","Leatha","Leif","Lela","Lelia","Lenna","Lenora","Leola","Leonardo","Leonie","Leopold","Lera","Lesly","Leta","Levi","Lexi","Lia","Libbie","Lilian","Lilla","Lillie","Lilyan","Linda","Linnea","Lionel","Lisette","Lizeth","Lloyd","Lola","Lon","Lonnie","Lora","Lorena","Lorenzo","Lorna","Louie","Louvenia","Loyal","Luciano","Lucile","Lucious","Ludie","Luella","Luisa","Lulu","Lura","Luz","Lyla","Lysanne","Mable","Maci","Mackenzie","Madalyn","Madelyn","Madie","Madison","Madyson","Maeve","Magdalen","Magnolia","Maida","Makayla","Malachi","Malinda","Malvina","Manuel","Marc","Marcelino","Marcellus","Marco","Margaret","Margaretta","Marge","Margret","Mariah","Mariana","Marianne","Marie","Marietta","Marilyne","Marion","Maritza","Marjory","Marlee","Marley","Marques","Marshall","Martina","Marvin","Maryjane","Mateo","Mathilde","Matt","Maud","Maureen","Maurine","Max","Maximilian","Maximo","Maxwell","Maybell","Maymie","Mazie","Mckenzie","Meda","Meghan","Melba","Mellie","Melvina","Mercedes","Merle","Mertie","Mia","Michael","Micheal","Michelle","Mike","Miles","Millie","Mina","Miracle","Misael","Mitchel","Modesta","Mohammad","Mollie","Monica","Monserrat","Monte","Moriah","Morton","Moshe","Mozelle","Murl","Mustafa","Mylene","Myriam","Myron","Myrtis","Nakia","Naomi","Narciso","Nat","Natasha","Nathanial","Nayeli","Nedra","Nelda","Nellie","Neoma","Neva","Nia","Nichole","Nickolas","Nicolas","Nigel","Nikko","Nils","Noble","Noelia","Noemy","Nona","Norberto","Norris","Nova","Nyah","Oceane","Oda","Odie","Ola","Olen","Olin","Oma","Ona","Ophelia","Oran","Orin","Orlando","Orrin","Osbaldo","Osvaldo","Otha","Otis","Otto","Ozella","Palma","Paolo","Pascale","Patience","Patsy","Paula","Payton","Pearline","Penelope","Perry","Petra","Phoebe","Pierre","Pinkie","Porter","Preston","Princess","Prudence","Quentin","Quinten","Rachel","Raegan","Raheem","Raina","Ramiro","Randal","Randy","Raphael","Rashad","Raul","Raymond","Reanna","Rebecca","Reece","Regan","Reid","Reinhold","Renee","Retha","Reva","Reyes","Reynold","Rhianna","Ricardo","Richmond","Rickie","Rigoberto","River","Robert","Robin","Rocky","Rodger","Rodrigo","Roger","Rollin","Roman","Ronny","Rosa","Rosalind","Rosamond","Roscoe","Roselyn","Rosendo","Rosina","Rossie","Rowland","Roy","Rozella","Ruby","Rudy","Russel","Ruth","Ryan","Rylan","Ryley","Sabryna","Sage","Sally","Salvatore","Samantha","Sammie","Sandra","Sanford","Santina","Sarah","Sasha","Savanna","Scarlett","Scottie","Sean","Selena","Serena","Shad","Shana","Shanelle","Shaniya","Shanny","Sharon","Shawna","Shayne","Sheldon","Sherman","Shyann","Sid","Sierra","Sigurd","Simeon","Sister","Skylar","Solon","Sonya","Spencer","Stan","Stanton","Stella","Stephanie","Stephon","Stevie","Stuart","Susan","Susie","Syble","Sydni","Sylvester","Tad","Tamara","Tanner","Taryn","Tatyana","Taya","Ted","Teresa","Terrence","Tess","Thad","Thea","Theodora","Therese","Thomas","Tia","Tiara","Tillman","Timothy","Titus","Tod","Tomasa","Toni","Torrance","Trace","Travis","Tremaine","Trenton","Treva","Trevor","Trisha","Triston","Trycia","Twila","Tyree","Tyrell","Tyshawn","Ulices","Unique","Uriel","Valentin","Valerie","Vance","Veda","Velma","Verda","Verla","Verna","Vernie","Veronica","Vicente","Victor","Vidal","Vincent","Vinnie","Violette","Virginia","Vito","Viviane","Vivienne","Waino","Wallace","Wanda","Watson","Wayne","Wellington","Werner","Whitney","Wilburn","Wilfred","Wilhelm","Willa","Willie","Willy","Wilson","Winifred","Winston","Wyman","Xzavier","Yasmin","Yesenia","Yoshiko","Zachariah","Zack","Zakary","Zaria","Zella","Zetta","Zoe","Zoila","Zula"],s=["Abbott","Abernathy","Abshire","Adams","Altenwerth","Anderson","Ankunding","Armstrong","Auer","Aufderhar","Bahringer","Bailey","Balistreri","Barrows","Bartell","Bartoletti","Barton","Bashirian","Batz","Bauch","Baumbach","Bayer","Beahan","Beatty","Bechtelar","Becker","Bednar","Beer","Beier","Berge","Bergnaum","Bergstrom","Bernhard","Bernier","Bins","Blanda","Blick","Block","Bode","Boehm","Bogan","Bogisich","Borer","Bosco","Botsford","Boyer","Boyle","Bradtke","Brakus","Braun","Breitenberg","Brekke","Brown","Bruen","Buckridge","Carroll","Carter","Cartwright","Casper","Cassin","Champlin","Christiansen","Cole","Collier","Collins","Conn","Connelly","Conroy","Considine","Corkery","Cormier","Corwin","Cremin","Crist","Crona","Cronin","Crooks","Cruickshank","Cummerata","Cummings","Dach","D'Amore","Daniel","Dare","Daugherty","Davis","Deckow","Denesik","Dibbert","Dickens","Dicki","Dickinson","Dietrich","Donnelly","Dooley","Douglas","Doyle","DuBuque","Durgan","Ebert","Effertz","Eichmann","Emard","Emmerich","Erdman","Ernser","Fadel","Fahey","Farrell","Fay","Feeney","Feest","Feil","Ferry","Fisher","Flatley","Frami","Franecki","Friesen","Fritsch","Funk","Gaylord","Gerhold","Gerlach","Gibson","Gislason","Gleason","Gleichner","Glover","Goldner","Goodwin","Gorczany","Gottlieb","Goyette","Grady","Graham","Grant","Green","Greenfelder","Greenholt","Grimes","Gulgowski","Gusikowski","Gutkowski","Gutmann","Haag","Hackett","Hagenes","Hahn","Haley","Halvorson","Hamill","Hammes","Hand","Hane","Hansen","Harber","Harris","Hartmann","Harvey","Hauck","Hayes","Heaney","Heathcote","Hegmann","Heidenreich","Heller","Herman","Hermann","Hermiston","Herzog","Hessel","Hettinger","Hickle","Hilll","Hills","Hilpert","Hintz","Hirthe","Hodkiewicz","Hoeger","Homenick","Hoppe","Howe","Howell","Hudson","Huel","Huels","Hyatt","Jacobi","Jacobs","Jacobson","Jakubowski","Jaskolski","Jast","Jenkins","Jerde","Johns","Johnson","Johnston","Jones","Kassulke","Kautzer","Keebler","Keeling","Kemmer","Kerluke","Kertzmann","Kessler","Kiehn","Kihn","Kilback","King","Kirlin","Klein","Kling","Klocko","Koch","Koelpin","Koepp","Kohler","Konopelski","Koss","Kovacek","Kozey","Krajcik","Kreiger","Kris","Kshlerin","Kub","Kuhic","Kuhlman","Kuhn","Kulas","Kunde","Kunze","Kuphal","Kutch","Kuvalis","Labadie","Lakin","Lang","Langosh","Langworth","Larkin","Larson","Leannon","Lebsack","Ledner","Leffler","Legros","Lehner","Lemke","Lesch","Leuschke","Lind","Lindgren","Littel","Little","Lockman","Lowe","Lubowitz","Lueilwitz","Luettgen","Lynch","Macejkovic","MacGyver","Maggio","Mann","Mante","Marks","Marquardt","Marvin","Mayer","Mayert","McClure","McCullough","McDermott","McGlynn","McKenzie","McLaughlin","Medhurst","Mertz","Metz","Miller","Mills","Mitchell","Moen","Mohr","Monahan","Moore","Morar","Morissette","Mosciski","Mraz","Mueller","Muller","Murazik","Murphy","Murray","Nader","Nicolas","Nienow","Nikolaus","Nitzsche","Nolan","Oberbrunner","O'Connell","O'Conner","O'Hara","O'Keefe","O'Kon","Okuneva","Olson","Ondricka","O'Reilly","Orn","Ortiz","Osinski","Pacocha","Padberg","Pagac","Parisian","Parker","Paucek","Pfannerstill","Pfeffer","Pollich","Pouros","Powlowski","Predovic","Price","Prohaska","Prosacco","Purdy","Quigley","Quitzon","Rath","Ratke","Rau","Raynor","Reichel","Reichert","Reilly","Reinger","Rempel","Renner","Reynolds","Rice","Rippin","Ritchie","Robel","Roberts","Rodriguez","Rogahn","Rohan","Rolfson","Romaguera","Roob","Rosenbaum","Rowe","Ruecker","Runolfsdottir","Runolfsson","Runte","Russel","Rutherford","Ryan","Sanford","Satterfield","Sauer","Sawayn","Schaden","Schaefer","Schamberger","Schiller","Schimmel","Schinner","Schmeler","Schmidt","Schmitt","Schneider","Schoen","Schowalter","Schroeder","Schulist","Schultz","Schumm","Schuppe","Schuster","Senger","Shanahan","Shields","Simonis","Sipes","Skiles","Smith","Smitham","Spencer","Spinka","Sporer","Stamm","Stanton","Stark","Stehr","Steuber","Stiedemann","Stokes","Stoltenberg","Stracke","Streich","Stroman","Strosin","Swaniawski","Swift","Terry","Thiel","Thompson","Tillman","Torp","Torphy","Towne","Toy","Trantow","Tremblay","Treutel","Tromp","Turcotte","Turner","Ullrich","Upton","Vandervort","Veum","Volkman","Von","VonRueden","Waelchi","Walker","Walsh","Walter","Ward","Waters","Watsica","Weber","Wehner","Weimann","Weissnat","Welch","West","White","Wiegand","Wilderman","Wilkinson","Will","Williamson","Willms","Windler","Wintheiser","Wisoky","Wisozk","Witting","Wiza","Wolf","Wolff","Wuckert","Wunsch","Wyman","Yost","Yundt","Zboncak","Zemlak","Ziemann","Zieme","Zulauf"],u=["Accountant","Customer Support","Data Coordinator","Developer","Development Lead","Financial Controller","Integration Specialist","Javascript Developer","Marketing Designer","Office Manager","Regional Director","Sales Assistant","Secretary","Software Engineer","Support Engineer","Support Lead","Systems Administrator","System Architect","Technical Author","Team Leader"],d=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island (Bouvetoya)","Brazil","British Indian Ocean Territory (Chagos Archipelago)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faroe Islands","Falkland Islands (Malvinas)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Democratic People's Republic of Korea","Republic of Korea","Kuwait","Kyrgyz Republic","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands Antilles","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard & Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],m=n(535),h=[];!function(){for(var e=Object(c.b)(d,20),a=Object(c.b)(m.a,30),n=Object(c.b)(m.a,5),r=1;r<=1e4;r++)h.push({id:r,firstName:Object(c.a)(o),lastName:Object(c.a)(s),position:Object(c.a)(u),start:Object(c.c)("yyyy-MM-dd",432e9),time:Object(c.c)("hh:mm"),salary:Object(c.d)(5e5,5e4),country:Object(c.a)(e),office:Object(c.a)(a),office5:Object(c.a)(n),height:Object(c.e)(80,200)});for(var t=[],i=0;i<=o.length;i+=3)t.push(o[i])}();function f(){var a,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=3<arguments.length?arguments[3]:void 0,i=r.name,o=r.order;switch(i){case"id":case"salary":a="asc"===o?function(e,a){return e[i]-a[i]}:function(e,a){return a[i]-e[i]};break;default:i&&(a="asc"===o?function(e,a){return e[i].localeCompare(a[i])}:function(e,a){return a[i].localeCompare(e[i])})}r=a?Object(l.a)(h,function(e){return e.sort(a)}):h;return t&&(t=t.toLocaleLowerCase(),r=r.filter(function(e){return 0<="".concat(e.firstName," ").concat(e.lastName).toLocaleLowerCase().indexOf(t)})),r.slice(n,n+e)}var r={get:function(e,a){var n=a.current,r=void 0===n?1:n,n=a.pageSize,t=void 0===n?100:n,i=a.sorter,o=a.username,l=(r-1)*t;return new Promise(function(e){setTimeout(function(){e({status:1,data:f(t,l,i,o),current:r,pageSize:t,total:h.length})},Object(c.d)(500,300))})},post:function(e,a){var n=a.op,r=a.ids;return new Promise(function(e){switch(n){case"delete":h=h.filter(function(e){return r.indexOf(e.id)<0});break;case"on":case"off":h.forEach(function(e,a){0<=r.indexOf(e.id)&&(h[a]=Object(t.a)(Object(t.a)({},e),{},{status:"on"===n}))})}setTimeout(function(){e(!0)},Object(c.d)(200))})}}},494:function(e,a,n){"use strict";function t(e,a){e=0<arguments.length&&void 0!==e?e:10,a=1<arguments.length&&void 0!==a?a:0;return Math.round(Math.random()*(e-a))+a}function i(){for(var e,a=t(9,2),n=[],r=0;r<a;r++)n.push((e=void 0,e=t(25),String.fromCharCode(e+97)));return n.join("")}a.a=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,a=[],n=0;n<e;n++)a.push(function(){for(var e=t(20,4),a=[],n=0;n<e;n++)a.push(i());var r=a.join(" ");return"".concat(r[0].toUpperCase()+r.slice(1),".")}());return a.join(" ")}},495:function(e,a,n){"use strict";n.d(a,"a",function(){return r}),n.d(a,"d",function(){return t}),n.d(a,"b",function(){return i}),n.d(a,"e",function(){return o});function s(a,e,n,r,t,i){var o=n.join("-"),l=Object(m.e)(t,0===a?1:0),c={id:o,text:o};return 0<l&&a<r&&(c.children=Object(d.range)(l).map(function(e){return s(a+1,0,[].concat(Object(u.a)(n),[e]),r,t,i)})),i&&i.push(o),c}var u=n(24),d=n(76),m=n(516),r=[],t=[],n=Object(d.range)(4).map(function(e){return s(0,0,[e],10,5,r)}),i=Object(d.range)(20).map(function(e){return s(0,0,[e],4,10)}),o=Object(d.range)(3).map(function(e){return s(0,0,[e],2,3,t)});a.c=n},508:function(e,a,n){"use strict";n.d(a,"b",function(){return t}),n.d(a,"a",function(){return i});var a=n(516),n=n(535),r=Object(a.f)(n.a).map(function(e,a){return{id:a+1,city:e}});function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return r.slice(a,a+e)}var i=t(10)},516:function(e,a,n){"use strict";n.d(a,"e",function(){return t}),n.d(a,"d",function(){return i}),n.d(a,"c",function(){return o}),n.d(a,"a",function(){return l}),n.d(a,"b",function(){return c}),n.d(a,"f",function(){return s});n(76);var a=n(517),r=n.n(a);function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:65555,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2;"string"==typeof e&&(e=parseInt(e,10)),"string"==typeof a&&(a=parseInt(a,10));a=Math.random()*(e-a)+a;return parseFloat(a.toFixed(n),0)}function i(){return Math.round(t.apply(void 0,arguments))}function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"yyyy-MM-dd",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e10,a=Date.now()-(a=a,Math.ceil(Math.random()*a));return r()(a,e)}function l(e){return e[Math.floor(Math.random()*e.length)]}function c(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length?arguments[2]:void 0,r=a;n&&(r=i(a,n));for(var t=[];0<r;)t.push(l(e)),--r;return t}function s(e){for(var a=[],n=e.slice();0!==n.length;){var r=Math.floor(n.length*Math.random());a.push(n[r]),n.splice(r,1)}return a}},535:function(e,a,n){"use strict";a.a=["Tokyo","Jakarta","Delhi","Manila","Seoul","Shanghai","Karachi","Beijing","New York","Guangzhou","San Paulo","Mexico City","Mumbai","Osaka-Kobe-Kyoto","Moscow","Dhaka","Cairo","Los Angelles","Bangkok","Kolkata","Buenos Aires","Tehran","Istanbul","Lagos","Shenzhen","Rio de Janeiro","Kinshasa","Tianjin","Paris","Lima","Chengdu","London","Nagoya","Lahore","Bangalore","Channai","Chicago","Bogota","Ho Chi Minh City","Hyderabad","Dongguan","Johannesburg-East Rand","Wuhan","Taipei","Hangzhou","Hong Kong","Chongqing","Ahmadabad","Kuala Lumpur","Quanzhou","Essen-Dusseldorf","Baghdad","Toronto","Santiago","Dallas-Fort Worth","Madrid","Nanjing","Shenyang","Xian","San Francisco-San Jose","Luanda","Qingdao","Houston","Miami","Bandung","Riyadh","Pune","Singapore","Philadelphia","Surat","Milan","Suzhou","St. Petersburg","Khartoum","Atlanta","Zhengzhou","Washington","Surabaya","Harbin","Abidjan","Yangon","Nairobi","Barcelona","Alexandria","Kabul","Guadalajara","Ankara","Belo Horizonte","Boston","Xiamen","Kuwait","Dar es Salaam","Phoenix","Dalian","Accra","Monterrey","Berlin","Sydney","Fuzhou","Medan"]}}]);