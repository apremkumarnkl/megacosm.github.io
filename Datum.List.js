(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[15],{1094:function(n,e,a){"use strict";a.r(e);var r=a(0),t=a.n(r),o=a(488),d=a(489),i=a(502),l=a(45),r=a(1095),r=a.n(r),u=Object(l.a)(r.a),s=[];i.a.start(),i.a.setType("disabled"),a(1096),i.a.setType("example"),a(1097),i.a.setType("format"),a(1098),i.a.setType("onchange"),a(1099),i.a.setType("prediction"),a(1100),i.a.setType("separator"),a(1101);var i=i.a.end(),m={disabled:{text:a(1102),log:i.disabled},example:{text:a(1103),log:i.example},format:{text:a(1104),log:i.format},onchange:{text:a(1105),log:i.onchange},prediction:{text:a(1106),log:i.prediction},separator:{text:a(1107),log:i.separator}};e.default=Object(o.a)(function(n){return t.a.createElement(d.b,Object.assign({},n,{codes:m,source:u,examples:s}))})},1095:function(n,e){n.exports="# Datum.List\r\n\r\n The auxiliary class that process the array values.\r\n \r\n## Example\r\n\r\nThe data used in the example on this page is as follows:\r\n```\r\nconst data = {\r\n  red: { id: 1, name: 'red' },\r\n  orange: { id: 2, name: 'orange' },\r\n  yellow: { id: 3, name: 'yellow' },\r\n  green: { id: 4, name: 'green' },\r\n  cyan: { id: 5, name: 'cyan' },\r\n  blue: { id: 6, name: 'blue' },\r\n  violet: { id: 7, name: 'violet' },\r\n}\r\n```\r\n\r\n<br />\r\n\r\n<code name=\"example\" />\r\n\r\n## Arguments\r\n\r\n### format  *null | string | function(d)*\r\nThe format is used to convert the original data object to the specified value.\r\n\r\n- **null** - When it is null, the return value is the original data.\r\n- **string** - When it is a string, it will get the value from the original data as the key, which is equivalent to (d) => d\\[format].\r\n- **function(d)** - d is the single original data.\r\n\r\n<code name=\"format\" />\r\n\r\n### onChange *function(value)*\r\nA callback function triggered when a value changes. Value is an array of the formatted data for the format function or string(separator is a string).\r\n\r\n<code name=\"onchange\" />\r\n\r\n### separator *null | string*\r\nWhen it is null, value is the Array format.\r\n\r\nWhen it is a string, value is a string delimited by the separator.\r\n\r\n<code name=\"separator\" />\r\n\r\n### prediction *function(val, d):bool*\r\nDetermine whether the value is consistent with the original data. If it is not set, this default prediction will be used:\r\n```\r\n(val, d) => val === format(d)\r\n```\r\n\r\n<code name=\"prediction\" />\r\n\r\n### disabled *function(d):bool*\r\nDetermines whether data items are disabled. If true, the add and remove functions will ignore this item.\r\n\r\n<code name=\"disabled\" />\r\n\r\n### value *array | string*\r\nThe initial value.\r\n\r\n## Methods\r\n\r\n### getValue *function():array|string*\r\nGet the current values. Return array or string depending on the separator setting.\r\n\r\n### setValue *function(array|string)*\r\nSet the value. The new value will replace the current value.\r\n\r\n### add *function(array|object)*\r\nAdd data. The value is the original data before being formatted.\r\n\r\n### remove *function(array|object)*\r\nRemove data. The value is the original data before being formatted.\r\n\r\n### clear *function*\r\nClear all data.\r\n"},1096:function(n,e,a){"use strict";a.r(e);e=a(57),a=a(501),e=new e.a.List({disabled:function(n){return"blue"===n.name||"red"===n.name},format:function(n){return n.name},onChange:function(n){console.log(n)}});e.setValue(["red"]),e.add([a.a.orange,a.a.blue]),e.remove([a.a.orange,a.a.red])},1097:function(n,e,a){"use strict";a.r(e);e=a(57),a=a(501),e=new e.a.List({format:"name",separator:",",prediction:function(n,e){return n===e.name},value:"blue",onChange:function(n){console.log(n)}});e.add(a.a.orange),e.add(a.a.green),e.remove(a.a.green),e.clear(),e.setValue("red,violet"),e.add(a.a.cyan)},1098:function(n,e,a){"use strict";a.r(e);var r=a(57),e=a(501),a=new r.a.List({});a.add(e.a.red),console.log(a.getValue()),(a=new r.a.List({format:function(n){return n.name}})).add(e.a.red),console.log(a.getValue()),(a=new r.a.List({format:function(n){return"".concat(n.id,"-").concat(n.name)}})).add(e.a.red),a.add(e.a.green),console.log(a.getValue())},1099:function(n,e,a){"use strict";a.r(e);e=a(57),a=a(501),e=new e.a.List({format:function(n){return n.name},onChange:function(n){console.log(n)}});e.setValue(["blue"]),e.add(a.a.red),e.add(a.a.orange),e.remove(a.a.red),e.clear()},1100:function(n,e,a){"use strict";a.r(e);e=a(57),a=a(501),e=new e.a.List({format:"id",separator:",",prediction:function(n,e){return parseInt(n,10)===e.id},value:"2,3"});e.add(a.a.red),console.log(e.getValue()),e.remove(a.a.orange),console.log(e.getValue())},1101:function(n,e,a){"use strict";a.r(e);var r=a(57),t=a(501),e=function(n){return console.log(n)},a=new r.a.List({format:"id",value:[2,3],onChange:e});a.add(t.a.red),(a=new r.a.List({format:"name",onChange:e,separator:",",value:"red,yellow"})).add(t.a.blue),a.remove(t.a.yellow),(a=new r.a.List({format:"name",onChange:e,separator:"|",value:"red|yellow"})).add(t.a.cyan)},1102:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nconst datum = new Datum.List({\r\n  disabled: d => d.name === 'blue' || d.name === 'red',\r\n  format: d => d.name,\r\n  onChange(value) {\r\n    console.log(value)\r\n  },\r\n})\r\n\r\ndatum.setValue(['red'])\r\ndatum.add([data.orange, data.blue]) // orange, blue\r\ndatum.remove([data.orange, data.red]) // orange, red\r\n"},1103:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nconst datum = new Datum.List({\r\n  format: 'name',\r\n  separator: ',',\r\n  prediction: (val, d) => val === d.name,\r\n  value: 'blue',\r\n  onChange: values => {\r\n    console.log(values)\r\n  },\r\n})\r\ndatum.add(data.orange)\r\ndatum.add(data.green)\r\ndatum.remove(data.green)\r\ndatum.clear()\r\ndatum.setValue('red,violet')\r\ndatum.add(data.cyan)\r\n"},1104:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nlet datum = new Datum.List({})\r\ndatum.add(data.red)\r\nconsole.log(datum.getValue())\r\n\r\ndatum = new Datum.List({ format: d => d.name })\r\ndatum.add(data.red)\r\nconsole.log(datum.getValue())\r\n\r\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\r\ndatum.add(data.red)\r\ndatum.add(data.green)\r\nconsole.log(datum.getValue())\r\n"},1105:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nconst datum = new Datum.List({\r\n  format: d => d.name,\r\n  onChange(value) {\r\n    console.log(value)\r\n  },\r\n})\r\n\r\ndatum.setValue(['blue'])\r\ndatum.add(data.red)\r\ndatum.add(data.orange)\r\ndatum.remove(data.red)\r\ndatum.clear()\r\n"},1106:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nconst datum = new Datum.List({\r\n  format: 'id',\r\n  separator: ',',\r\n  prediction: (val, d) => parseInt(val, 10) === d.id,\r\n  value: '2,3',\r\n})\r\ndatum.add(data.red)\r\nconsole.log(datum.getValue())\r\ndatum.remove(data.orange)\r\nconsole.log(datum.getValue())\r\n"},1107:function(n,e){n.exports="import { Datum } from 'megacosm'\r\nimport data from './data'\r\n\r\nconst onChange = value => console.log(value)\r\n\r\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\r\ndatum.add(data.red)\r\n\r\ndatum = new Datum.List({\r\n  format: 'name',\r\n  onChange,\r\n  separator: ',',\r\n  value: 'red,yellow',\r\n})\r\ndatum.add(data.blue)\r\ndatum.remove(data.yellow)\r\n\r\ndatum = new Datum.List({\r\n  format: 'name',\r\n  onChange,\r\n  separator: '|',\r\n  value: 'red|yellow',\r\n})\r\ndatum.add(data.cyan)\r\n"},501:function(n,e,a){"use strict";e.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},502:function(n,e,a){"use strict";var r=a(4),t=a(5),o=window.console,d=function(){function n(){Object(r.a)(this,n),this.logs={default:[]},this.current=this.logs.default}return Object(t.a)(n,[{key:"setType",value:function(n){this.logs[n]||(this.logs[n]=[]),this.current=this.logs[n]}},{key:"log",value:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];var r=e.map(function(n){return"".concat(JSON.stringify(n,function(n,e){return"function"==typeof e?"fn#fn".concat(e.toString(),"fn#fn"):e},2))});this.current.push(r)}}]),n}();e.a={start:function(){window.console=new d},setType:function(n){window.console.setType(n)},end:function(){var n=window.console.logs;return window.console=o,n}}}}]);