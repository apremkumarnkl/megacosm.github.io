(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[11],{280:function(e,n,r){"use strict";var t=r(46),a=r(20),c=r(75),o=r(57),l=r(4),i=r(5),d=r(2),u=r(26),s=r(21),m=r(6),h=r(7),f=r(0),b=r.n(f),f=r(15),p=r.n(f),f=r(19),k=r(22),y=r(10),x=r(491),v=r(1),r=function(e){Object(m.a)(r,e);var n=Object(h.a)(r);function r(e){return Object(l.a)(this,r),(e=n.call(this,e)).handleClick=e.handleClick.bind(Object(d.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(d.a)(e)),e.handleRawChange=e.handleRawChange.bind(Object(d.a)(e)),e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){Object(u.a)(Object(s.a)(r.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(y.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(s.a)(r.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(y.a,this.handleUpdate)}},{key:"getContent",value:function(e){var n=this.props.renderItem;return"string"==typeof n?e[n]:"function"==typeof n?n(e):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(e,n,r){var t=this.props,a=t.data,t=t.datum;n?t.add(a[r]):t.remove(a[r])}},{key:"handleRawChange",value:function(e,n){var r=this.props.datum;n?r.add(e):r.remove(e)}},{key:"render",value:function(){var r=this,e=this.props,n=e.block,t=e.data,a=e.datum,o=e.keygen,e=e.children,n=p()(Object(v.h)("group",["no-block","block"][Number(n)]),this.props.className);return void 0===t?b.a.createElement("div",{className:n},b.a.createElement(x.a,{value:{onRawChange:this.handleRawChange,checked:a.check.bind(a)}},e)):b.a.createElement("div",{className:n},t.map(function(e,n){return b.a.createElement(c.a,{checked:a.check(e),disabled:a.disabled(e),key:Object(k.b)(e,o,n),htmlValue:n,index:n,onChange:r.handleClick},r.getContent(e))}),e)}}]),r}(f.b);r.defaultProps={renderItem:function(e){return e}};f=r,r=Object(a.compose)(t.a,x.b)(c.a);r.Group=Object(a.compose)(t.a,o.a.hoc({bindProps:["disabled","format","prediction","separator"]}))(f),r.Checkbox=c.a,r.displayName="MegacosmCheckbox",r.Group.displayName="MegacosmCheckboxGroup";n.a=r},491:function(e,n,r){"use strict";r.d(n,"a",function(){return o}),r.d(n,"b",function(){return c});var n=r(0),t=r.n(n),n=r(32),a=r.n(n)()(),o=a.Provider,c=function(r){return function(n){return t.a.createElement(a.Consumer,null,function(e){return t.a.createElement(r,Object.assign({},n,e))})}}},727:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(488),c=r(489),l=r(45),t=r(728),t=r.n(t),i=Object(l.a)(t.a),d=[{name:"01-base",title:Object(l.a)(""),component:r(729).default,rawText:r(730)},{name:"02-checked",title:Object(l.a)(""),component:r(731).default,rawText:r(732)},{name:"03-value",title:Object(l.a)(""),component:r(733).default,rawText:r(734)},{name:"04-rawgroup",title:Object(l.a)(""),component:r(735).default,rawText:r(736)},{name:"05-group",title:Object(l.a)(""),component:r(737).default,rawText:r(738)},{name:"06-format",title:Object(l.a)(""),component:r(739).default,rawText:r(740)},{name:"08-block",title:Object(l.a)(""),component:r(741).default,rawText:r(742)},{name:"09-disabled",title:Object(l.a)(""),component:r(743).default,rawText:r(744)},{name:"10-disabled",title:Object(l.a)(""),component:r(745).default,rawText:r(746)},{name:"11-input",title:Object(l.a)(""),component:r(747).default,rawText:r(748)}];n.default=Object(o.a)(function(e){return a.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:i,examples:d}))})},728:function(e,n){e.exports="# Checkbox\r\n\r\n<example />\r\n\r\n## API\r\n\r\n### Checkbox\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| checked | boolean \\| 'indeterminate' | - | if not set, use (value === htmlValue). |\r\n| disabled | boolean | false | disable checkbox |\r\n| htmlValue | any | true | Specifies the result |\r\n| name | string | - | The name of the Form which access data |\r\n| onChange | (value: any, checked: boolean) => void | - | When selected, value is htmlValue and checked is true.<br />When not selected, value is undefined and checked is false. |\r\n| value | any | - |  |\r\n\r\n### Checkbox.Group\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| data | any[] | required | The data item |\r\n| datum | object | - | If the format and prediction does not satisfied your requirements, you can pass in a [Datum.List](/components/Datum.List) object or the Datum.List configuration to process data. |\r\n| defaultValue | any[] | [] | Initial value |\r\n| disabled | (data: any) => boolean \\| boolean | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\r\n| format | ((data: any) => any) | string | d => d | format value |\r\n| name | string | - | The name of the Form which access data |\r\n| keygen | ((data: any) => string) \\| string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\r\n| onChange | (value: any[]) => void  | - | value is datum.getValue() |\r\n| prediction | (value: any, data: any) => boolean |  (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match |\r\n| renderItem | (data: any) => ReactNode \\| string | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\r\n| value | any[] | - | In the Form, the value will be taken over by the form and the value will lose efficacy. |\r\n"},729:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280);n.default=function(){return a.a.createElement(o.a,null,"Checkbox")}},730:function(e,n){e.exports="/**\r\n * - Base\r\n *    -- Basic Checkbox\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nexport default function() {\r\n  return <Checkbox>Checkbox</Checkbox>\r\n}\r\n"},731:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280);n.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,{checked:!1},"not checked"),a.a.createElement(o.a,{checked:!0},"checked"),a.a.createElement(o.a,{checked:"indeterminate"},"indeterminate"))}},732:function(e,n){e.exports="/**\r\n * - Checked\r\n *    -- The checked has three values: true(checked), false(not checked), 'indeterminate'(half-checked).\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <Checkbox checked={false}>not checked</Checkbox>\r\n      <Checkbox checked>checked</Checkbox>\r\n      <Checkbox checked=\"indeterminate\">indeterminate</Checkbox>\r\n    </div>\r\n  )\r\n}\r\n"},733:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280);n.default=function(){return a.a.createElement(o.a,{htmlValue:"ok",value:"ok"},'value is "ok"')}},734:function(e,n){e.exports="/**\r\n * - Value\r\n *    -- When the htmlValue is set, the checkbox return the htmlValue (checked) and undefined (not checked);\r\n *    -- When the htmlValue is not set, the checkbox selected return true (checked) and undefined (not checked);\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nexport default function() {\r\n  return (\r\n    <Checkbox htmlValue=\"ok\" value=\"ok\">\r\n      {'value is \"ok\"'}\r\n    </Checkbox>\r\n  )\r\n}\r\n"},735:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return a.a.createElement(o.a.Group,{keygen:"id",defaultValue:[3,5]},c.map(function(e){return a.a.createElement(o.a,{key:e.id,htmlValue:e.id},e.color)}))}},736:function(e,n){e.exports="/**\r\n * - Group\r\n *    -- A series of checkboxes group by Checkbox.Group.\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = [\r\n  { id: 1, color: 'red' },\r\n  { id: 2, color: 'orange' },\r\n  { id: 3, color: 'yellow' },\r\n  { id: 4, color: 'green' },\r\n  { id: 5, color: 'cyan' },\r\n  { id: 6, color: 'blue' },\r\n  { id: 7, color: 'violet' },\r\n]\r\n\r\nexport default function() {\r\n  return (\r\n    <Checkbox.Group keygen=\"id\" defaultValue={[3, 5]}>\r\n      {data.map(d => (\r\n        <Checkbox key={d.id} htmlValue={d.id}>\r\n          {d.color}\r\n        </Checkbox>\r\n      ))}\r\n    </Checkbox.Group>\r\n  )\r\n}\r\n"},737:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280),c=["red","orange","yellow","green","cyan","blue","violet"];function l(e){var n={borderBottom:"solid 1px ".concat(e),paddingBottom:2};return a.a.createElement("span",{style:n},e)}n.default=function(){return a.a.createElement(o.a.Group,{keygen:function(e){return e},data:c,defaultValue:["blue","cyan"],renderItem:l})}},738:function(e,n){e.exports="/**\r\n * - \r\n *    --Render a group of checkboxes from data.\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\r\n\r\nfunction renderItem(color) {\r\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\r\n  return <span style={style}>{color}</span>\r\n}\r\n\r\nexport default function() {\r\n  return <Checkbox.Group keygen={c => c} data={data} defaultValue={['blue', 'cyan']} renderItem={renderItem} />\r\n}\r\n"},739:function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return a});var c=r(4),t=r(5),l=r(6),i=r(7),n=r(0),d=r.n(n),u=r(280),s=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],a=function(e){Object(l.a)(o,e);var a=Object(i.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return(e=a.call.apply(a,[this].concat(r))).renderItem=function(e){var n={borderBottom:"solid 1px ".concat(e.color),paddingBottom:2};return d.a.createElement("span",{style:n},e.color)},e}return Object(t.a)(o,[{key:"render",value:function(){return d.a.createElement(u.a.Group,{keygen:"id",data:s,format:"color",defaultValue:["blue","cyan"],renderItem:this.renderItem})}}]),o}(n.Component)},740:function(e,n){e.exports="/**\r\n * - Complex data\r\n *    -- Complex data can use format to process value.\r\n */\r\nimport React, { Component } from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = [\r\n  { id: 1, color: 'red' },\r\n  { id: 2, color: 'orange' },\r\n  { id: 3, color: 'yellow' },\r\n  { id: 4, color: 'green' },\r\n  { id: 5, color: 'cyan' },\r\n  { id: 6, color: 'blue' },\r\n  { id: 7, color: 'violet' },\r\n]\r\n\r\nexport default class extends Component {\r\n  renderItem = d => {\r\n    const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\r\n    return <span style={style}>{d.color}</span>\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <Checkbox.Group\r\n        keygen=\"id\"\r\n        data={data}\r\n        format=\"color\"\r\n        defaultValue={['blue', 'cyan']}\r\n        renderItem={this.renderItem}\r\n      />\r\n    )\r\n  }\r\n}\r\n"},741:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return a.a.createElement(o.a.Group,{keygen:"id",block:!0,data:c,datum:{format:"color"},defaultValue:["blue","cyan"],renderItem:"color"})}},742:function(e,n){e.exports="/**\r\n * - Block\r\n *    -- The default is horizontal layout, and setting the block property can change it to be vertical layout.\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = [\r\n  { id: 1, color: 'red' },\r\n  { id: 2, color: 'orange' },\r\n  { id: 3, color: 'yellow' },\r\n  { id: 4, color: 'green' },\r\n  { id: 5, color: 'cyan' },\r\n  { id: 6, color: 'blue' },\r\n  { id: 7, color: 'violet' },\r\n]\r\n\r\nexport default function() {\r\n  return (\r\n    <Checkbox.Group\r\n      keygen=\"id\"\r\n      block\r\n      data={data}\r\n      datum={{ format: 'color' }}\r\n      defaultValue={['blue', 'cyan']}\r\n      renderItem=\"color\"\r\n    />\r\n  )\r\n}\r\n"},743:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a.Group,{disabled:!0,keygen:!0,data:c,defaultValue:["blue","cyan"],renderItem:function(e){return e}}),a.a.createElement("br",null),a.a.createElement(o.a,{disabled:!0,checked:!1},"not checked"),a.a.createElement(o.a,{disabled:!0,checked:!0},"checked"),a.a.createElement(o.a,{disabled:!0,checked:"indeterminate"},"indeterminate"))}},744:function(e,n){e.exports="/**\r\n * - Disabled\r\n *    -- Set the disabled property of Checkbox.Group to true, disable all the checkboxes.\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <Checkbox.Group disabled keygen data={data} defaultValue={['blue', 'cyan']} renderItem={d => d} />\r\n      <br />\r\n      <Checkbox disabled checked={false}>\r\n        not checked\r\n      </Checkbox>\r\n      <Checkbox disabled checked>\r\n        checked\r\n      </Checkbox>\r\n      <Checkbox disabled checked=\"indeterminate\">\r\n        indeterminate\r\n      </Checkbox>\r\n    </div>\r\n  )\r\n}\r\n"},745:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a.Group,{data:c,disabled:function(e){return"yellow"===e},keygen:!0,value:["blue"],renderItem:function(e){return e}}))}},746:function(e,n){e.exports="/**\r\n * -\r\n *    -- When the disabled is a function, disbale the option that the function to return true.\r\n */\r\nimport React from 'react'\r\nimport { Checkbox } from 'megacosm'\r\n\r\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <Checkbox.Group data={data} disabled={d => d === 'yellow'} keygen value={['blue']} renderItem={d => d} />\r\n    </div>\r\n  )\r\n}\r\n"},747:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(280);n.default=function(){return a.a.createElement(o.a,{inputable:!0},"more...")}},748:function(e,n){e.exports='/**\r\n * - Inputable\r\n *    -- Set the inputable property to true can show the input box and the return value is the value of the input box.\r\n */\r\nimport React from "react";\r\nimport { Checkbox } from "megacosm";\r\n\r\nexport default function() {\r\n  return <Checkbox inputable>more...</Checkbox>;\r\n}\r\n'}}]);