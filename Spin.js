(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[39],{1335:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(488),o=r(489),i=r(45),t=r(1336),t=r.n(t),l=Object(i.a)(t.a),s=[{name:"01-default",title:Object(i.a)(""),component:r(1337).default,rawText:r(1338)},{name:"01-wrapper",title:Object(i.a)(""),component:r(1339).default,rawText:r(1340)},{name:"02-chasing-dots",title:Object(i.a)(""),component:r(1341).default,rawText:r(1342)},{name:"03-cube-grid",title:Object(i.a)(""),component:r(1343).default,rawText:r(1344)},{name:"04-double-bounce",title:Object(i.a)(""),component:r(1345).default,rawText:r(1346)},{name:"05-fading-circle",title:Object(i.a)(""),component:r(1347).default,rawText:r(1348)},{name:"06-four-dots",title:Object(i.a)(""),component:r(1349).default,rawText:r(1350)},{name:"07-plane",title:Object(i.a)(""),component:r(1351).default,rawText:r(1352)},{name:"08-pulse",title:Object(i.a)(""),component:r(1353).default,rawText:r(1354)},{name:"09-ring",title:Object(i.a)(""),component:r(1355).default,rawText:r(1356)},{name:"10-scale-circle",title:Object(i.a)(""),component:r(1357).default,rawText:r(1358)},{name:"11-three-bounce",title:Object(i.a)(""),component:r(1359).default,rawText:r(1360)},{name:"12-wave",title:Object(i.a)(""),component:r(1361).default,rawText:r(1362)}];n.default=Object(c.a)(function(e){return a.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:l,examples:s}))})},1336:function(e,n){e.exports="# Spin\r\n\r\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\r\n\r\n<example />\r\n\r\n## API\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| color | string | #6c757d | color |\r\n| size | number \\| string | 40 | size |\r\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1337:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"default",color:"green"}),a.a.createElement(c.a,{name:"default"}),a.a.createElement(c.a,{size:"54px",name:"default",color:"#dc3545"}))}},1338:function(e,n){e.exports='/**\r\n * - default\r\n *    -- name="default"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="default" color="green" />\r\n      <Spin name="default" />\r\n      <Spin size="54px" name="default" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1339:function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return a});var o=r(4),t=r(5),i=r(6),l=r(7),n=r(0),s=r.n(n),m=r(293),u=r(41),d=r(98),a=function(e){Object(i.a)(c,e);var a=Object(l.a)(c);function c(){var n;Object(o.a)(this,c);for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return(n=a.call.apply(a,[this].concat(r))).state={loading:!0},n.handleChange=function(e){n.setState({loading:e})},n}return Object(t.a)(c,[{key:"render",value:function(){var e=this.state.loading;return s.a.createElement("div",null,s.a.createElement(m.a,{value:e,onChange:this.handleChange,style:{marginBottom:20}}),s.a.createElement(u.a,{loading:e,size:20},s.a.createElement(d.a,{style:{marginBottom:0}},s.a.createElement("h3",null,"This is Title"),"Some Content Here...")))}}]),c}(s.a.Component)},1340:function(e,n){e.exports="/**\r\n * - Container\r\n *    -- children in Spin\r\n*/\r\nimport React from 'react'\r\nimport { Spin, Alert, Switch } from 'megacosm'\r\n\r\nexport default class extends React.Component {\r\n  state = {\r\n    loading: true,\r\n  }\r\n\r\n  handleChange = v => {\r\n    this.setState({\r\n      loading: v,\r\n    })\r\n  }\r\n\r\n  render() {\r\n    const { loading } = this.state\r\n    return (\r\n      <div>\r\n        <Switch value={loading} onChange={this.handleChange} style={{ marginBottom: 20 }} />\r\n        <Spin loading={loading} size={20}>\r\n          <Alert style={{ marginBottom: 0 }}>\r\n            <h3>This is Title</h3>\r\n            Some Content Here...\r\n          </Alert>\r\n        </Spin>\r\n      </div>\r\n    )\r\n  }\r\n}\r\n"},1341:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"chasing-dots",color:"green"}),a.a.createElement(c.a,{name:"chasing-dots"}),a.a.createElement(c.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1342:function(e,n){e.exports='/**\r\n * - chasing-dots\r\n *    -- name="chasing-dots"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="chasing-dots" color="green" />\r\n      <Spin name="chasing-dots" />\r\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1343:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"cube-grid",color:"green"}),a.a.createElement(c.a,{name:"cube-grid"}),a.a.createElement(c.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1344:function(e,n){e.exports='/**\r\n * - cube-grid\r\n *    -- name="cube-grid"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="cube-grid" color="green" />\r\n      <Spin name="cube-grid" />\r\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1345:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"double-bounce",color:"green"}),a.a.createElement(c.a,{name:"double-bounce"}),a.a.createElement(c.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1346:function(e,n){e.exports='/**\r\n *  double-bounce\r\n *    -- name="double-bounce"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="double-bounce" color="green" />\r\n      <Spin name="double-bounce" />\r\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1347:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"fading-circle",color:"green"}),a.a.createElement(c.a,{name:"fading-circle"}),a.a.createElement(c.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1348:function(e,n){e.exports='/**\r\n * - fading-circle\r\n *    -- name="fading-circle"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="fading-circle" color="green" />\r\n      <Spin name="fading-circle" />\r\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1349:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"four-dots",color:"green"}),a.a.createElement(c.a,{name:"four-dots"}),a.a.createElement(c.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1350:function(e,n){e.exports='/**\r\n * - four-dots\r\n *    -- name="four-dots"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="four-dots" color="green" />\r\n      <Spin name="four-dots" />\r\n      <Spin size="54px" name="four-dots" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1351:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"plane",color:"green"}),a.a.createElement(c.a,{name:"plane"}),a.a.createElement(c.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1352:function(e,n){e.exports='/**\r\n * - plane\r\n *    -- name="plane"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="plane" color="green" />\r\n      <Spin name="plane" />\r\n      <Spin size="54px" name="plane" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1353:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"pulse",color:"green"}),a.a.createElement(c.a,{name:"pulse"}),a.a.createElement(c.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1354:function(e,n){e.exports='/**\r\n * - pulse\r\n *    -- name="pulse"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="pulse" color="green" />\r\n      <Spin name="pulse" />\r\n      <Spin size="54px" name="pulse" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1355:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"ring",color:"green"}),a.a.createElement(c.a,{name:"ring"}),a.a.createElement(c.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1356:function(e,n){e.exports='/**\r\n * - ring\r\n *    -- name="ring"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="ring" color="green" />\r\n      <Spin name="ring" />\r\n      <Spin size="54px" name="ring" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1357:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"scale-circle",color:"green"}),a.a.createElement(c.a,{name:"scale-circle"}),a.a.createElement(c.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1358:function(e,n){e.exports='/**\r\n * - scale-circle\r\n *    -- name="scale-circle"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="scale-circle" color="green" />\r\n      <Spin name="scale-circle" />\r\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1359:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"three-bounce",color:"green"}),a.a.createElement(c.a,{name:"three-bounce"}),a.a.createElement(c.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1360:function(e,n){e.exports='/**\r\n * - three-bounce\r\n *    -- name="three-bounce"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="three-bounce" color="green" />\r\n      <Spin name="three-bounce" />\r\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},1361:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(41);n.default=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(c.a,{size:18,name:"wave",color:"green"}),a.a.createElement(c.a,{name:"wave"}),a.a.createElement(c.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1362:function(e,n){e.exports='/**\r\n * - wave\r\n *    -- name="wave"\r\n*/\r\nimport React from \'react\'\r\nimport { Spin } from \'megacosm\'\r\n\r\nexport default function() {\r\n  const style = { display: \'flex\' }\r\n  return (\r\n    <div style={style}>\r\n      <Spin size={18} name="wave" color="green" />\r\n      <Spin name="wave" />\r\n      <Spin size="54px" name="wave" color="#dc3545" />\r\n    </div>\r\n  )\r\n}\r\n'},293:function(e,n,r){"use strict";var t=r(46),a=r(20),c=r(116),c=Object(c.a)("switch"),r=r(491),r=Object(a.compose)(t.a,r.b)(c);r.displayName="MegacosmSwitch",r.Switch=c;n.a=r},491:function(e,n,r){"use strict";r.d(n,"a",function(){return c}),r.d(n,"b",function(){return o});var n=r(0),t=r.n(n),n=r(32),a=r.n(n)()(),c=a.Provider,o=function(r){return function(n){return t.a.createElement(a.Consumer,null,function(e){return t.a.createElement(r,Object.assign({},n,e))})}}}}]);