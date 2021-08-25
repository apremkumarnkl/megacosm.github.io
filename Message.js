(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[29],{1252:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(488),a=n(489),s=n(45),r=n(1253),r=n.n(r),c=Object(s.a)(r.a),l=[{name:"1-base",title:Object(s.a)("Base \n Message has 6 static functions that are convenient to call anywhere, includes normal(with/without icon)、success、warn、error and close all messages"),component:n(1254).default,rawText:n(1255)},{name:"2-duration",title:Object(s.a)("Duration \n Set duration property to control the duration of the message display. The default value is 3 seconds. \n When duration is set to 0, the message will not hide automatically."),component:n(1256).default,rawText:n(1257)},{name:"3-position",title:Object(s.a)("Notification \n Set position property to specify the pop-up layer location, optional value: top, middle, top-left, top-right, bottom-left, bottom-right."),component:n(1258).default,rawText:n(1259)},{name:"4-close",title:Object(s.a)("Close \n Set onClose to handle close event."),component:n(1260).default,rawText:n(1261)},{name:"5-manual-close",title:Object(s.a)("Close \n Message return close func async"),component:n(1499).default,rawText:n(1264)}];e.default=Object(i.a)(function(t){return o.a.createElement(a.b,Object.assign({},t,{codes:void 0,source:c,examples:l}))})},1253:function(t,e){t.exports="# Message\r\n\r\nDisplay message about operational feedback.\r\n\r\n- Displays **success**, **warnings**, **errors**, and **general** information\r\n- It is an immersive interactive experience that is lightweight, multi-location, and customizable.\r\n\r\n<example />\r\n\r\n## API \r\n\r\n### Message\r\n\r\nMessage provides a set of methods for global calls\r\n\r\nMessage.show(content, \\[duration], \\[options]) // No icon, pure message display\r\n\r\nMessage.info(content, \\[duration], \\[options])  // With basic style and icon\r\n\r\nMessage.success(content, \\[duration], \\[options])\r\n\r\nMessage.warn(content, \\[duration], \\[options])\r\n\r\nMessage.error(content, \\[duration], \\[options])\r\n\r\nMessage.close() // Close all messages\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| content | ReactNode | required | The message content |\r\n| duration | number | 3 | Message duration, unit: s; If it is set to 0, it must be manually closed. |\r\n\r\n\r\n### MessageOptions\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| onClose | function | none | The callback function when the message is closed. |\r\n| position | string | 'top' | The position where the message display, options: \\['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] |\r\n| title | string | | title |\r\n| className | string | none | class name |\r\n| hideClose | boolean | false | hide close button |"},1254:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(55),a=n(283);e.default=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{onClick:function(){a.a.show("Some message.")}},"Show"),o.a.createElement(i.a,{onClick:function(){a.a.info("This is a message of info.")}},"Info"),o.a.createElement(i.a,{onClick:function(){a.a.success("This is a message of success.")}},"Success"),o.a.createElement(i.a,{onClick:function(){a.a.warn("This is a message of warning.")}},"Warn"),o.a.createElement(i.a,{onClick:function(){a.a.error("This is a message of error.")}},"Error"),o.a.createElement(i.a,{onClick:function(){a.a.close()}},"Close All"))}},1255:function(t,e){t.exports="/**\r\n * - Base\r\n *    -- Message has 6 static functions that are convenient to call anywhere, includes normal(with/without icon)、success、warn、error and close all messages\r\n */\r\nimport React from 'react'\r\nimport { Button, Message } from 'megacosm'\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <Button\r\n        onClick={() => {\r\n          Message.show('Some message.')\r\n        }}\r\n      >\r\n        Show\r\n      </Button>\r\n      <Button\r\n        onClick={() => {\r\n          Message.info('This is a message of info.')\r\n        }}\r\n      >\r\n        Info\r\n      </Button>\r\n      <Button\r\n        onClick={() => {\r\n          Message.success('This is a message of success.')\r\n        }}\r\n      >\r\n        Success\r\n      </Button>\r\n      <Button\r\n        onClick={() => {\r\n          Message.warn('This is a message of warning.')\r\n        }}\r\n      >\r\n        Warn\r\n      </Button>\r\n      <Button\r\n        onClick={() => {\r\n          Message.error('This is a message of error.')\r\n        }}\r\n      >\r\n        Error\r\n      </Button>\r\n\r\n      <Button\r\n        onClick={() => {\r\n          Message.close()\r\n        }}\r\n      >\r\n        Close All\r\n      </Button>\r\n    </div>\r\n  )\r\n}\r\n"},1256:function(t,e,n){"use strict";n.r(e);function r(){return s.a.info("This message will close after 10 seconds.",10)}function o(){return s.a.error("This message will not close utill click the close icon.",0)}var i=n(0),a=n.n(i),s=n(283),c=n(55);e.default=function(){return a.a.createElement("div",null,a.a.createElement(c.a,{onClick:r},"Duration 10 s."),a.a.createElement(c.a,{onClick:o},"Manually close"))}},1257:function(t,e){t.exports="/**\r\n * - Duration\r\n *    -- Set duration property to control the duration of the message display. The default value is 3 seconds.\r\n *    -- When duration is set to 0, the message will not hide automatically.\r\n */\r\nimport React from 'react'\r\nimport { Button, Message } from 'megacosm'\r\n\r\nconst s10 = () => Message.info('This message will close after 10 seconds.', 10)\r\nconst s0 = () => Message.error('This message will not close utill click the close icon.', 0)\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <Button onClick={s10}>Duration 10 s.</Button>\r\n      <Button onClick={s0}>Manually close</Button>\r\n    </div>\r\n  )\r\n}\r\n"},1258:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var o=n(4),i=n(5),a=n(6),s=n(7),e=n(0),c=n.n(e),l=n(283),u=n(165),f=n(55),r=function(t){Object(a.a)(r,t);var n=Object(s.a)(r);function r(t){var e;return Object(o.a)(this,r),(e=n.call(this,t)).setPosition=function(t){return e.setState({position:t})},e.show=function(){l.a.info(c.a.createElement("div",{style:{width:240}},"some message."),3,{position:e.state.position,title:"notify title"})},e.state={position:"top-right"},e}return Object(i.a)(r,[{key:"render",value:function(){return c.a.createElement("div",null,"position:",c.a.createElement(u.a,{keygen:!0,data:["top","middle","top-left","top-right","bottom-left","bottom-right"],onChange:this.setPosition,value:this.state.position,width:200,style:{margin:"0 20px"}}),c.a.createElement(f.a,{onClick:this.show},"Show message."))}}]),r}(c.a.Component)},1259:function(t,e){t.exports="/**\r\n * - Notification\r\n *    -- Set position property to specify the pop-up layer location, optional value: top, middle, top-left, top-right, bottom-left, bottom-right.\r\n */\r\nimport React from 'react'\r\nimport { Button, Message, Select } from 'megacosm'\r\n\r\nexport default class extends React.Component {\r\n  constructor(props) {\r\n    super(props)\r\n    this.state = { position: 'top-right' }\r\n  }\r\n\r\n  setPosition = position => this.setState({ position })\r\n\r\n  show = () => {\r\n    Message.info(<div style={{ width: 240 }}>some message.</div>, 3, {\r\n      position: this.state.position,\r\n      title: 'notify title',\r\n    })\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        position:\r\n        <Select\r\n          keygen\r\n          data={['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right']}\r\n          onChange={this.setPosition}\r\n          value={this.state.position}\r\n          width={200}\r\n          style={{ margin: '0 20px' }}\r\n        />\r\n        <Button onClick={this.show}>Show message.</Button>\r\n      </div>\r\n    )\r\n  }\r\n}\r\n"},1260:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(283),a=n(55);e.default=function(){return o.a.createElement(a.a,{onClick:function(){i.a.warn("Close this message will display another message.",0,{onClose:function(){i.a.info("You can close the message now.")}})}},"Close callback")}},1261:function(t,e){t.exports="/**\r\n * - Close\r\n *    -- Set onClose to handle close event.\r\n */\r\nimport React from 'react'\r\nimport { Button, Message } from 'megacosm'\r\n\r\nexport default function() {\r\n  const close = () => {\r\n    Message.warn('Close this message will display another message.', 0, {\r\n      onClose: () => {\r\n        Message.info('You can close the message now.')\r\n      },\r\n    })\r\n  }\r\n\r\n  return <Button onClick={close}>Close callback</Button>\r\n}\r\n"},1262:function(t,e,n){t.exports=n(1263)},1263:function(e,t,n){e=function(a){"use strict";var c,t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o,i,a,s,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),r=new M(r||[]);return e._invoke=(o=t,i=n,a=r,s=f,function(t,e){if(s===m)throw new Error("Generator is already running");if(s===p){if("throw"===t)throw e;return j()}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===c){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=c,t(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(r,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;r=r.arg;if(!r)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d;{if(!r.done)return r;n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c)}n.delegate=null;return d}(n,a);if(r){if(r===d)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=m;r=u(o,i,a);if("normal"===r.type){if(s=a.done?p:h,r.arg!==d)return{value:r.arg,done:a.done}}else"throw"===r.type&&(s=p,a.method="throw",a.arg=r.arg)}}),e}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=s;var f="suspendedStart",h="suspendedYield",m="executing",p="completed",d={};function g(){}function v(){}function y(){}var w={};i(w,r,function(){return this});e=Object.getPrototypeOf,e=e&&e(e(O([])));e&&e!==t&&l.call(e,r)&&(w=e);var b=y.prototype=g.prototype=Object.create(w);function C(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function x(a,s){var e;this._invoke=function(n,r){function t(){return new s(function(t,e){!function e(t,n,r,o){t=u(a[t],a,n);if("throw"!==t.type){var i=t.arg;return(n=i.value)&&"object"==typeof n&&l.call(n,"__await")?s.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):s.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,t=function t(){for(;++n<e.length;)if(l.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=c,t.done=!0,t};return t.next=t}}return{next:j}}function j(){return{value:c,done:!0}}return i(b,"constructor",v.prototype=y),i(y,"constructor",v),v.displayName=i(y,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},C(x.prototype),i(x.prototype,n,function(){return this}),a.AsyncIterator=x,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new x(s(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(b),i(b,o,"Generator"),i(b,r,function(){return this}),i(b,"toString",function(){return"[object Generator]"}),a.keys=function(n){var t,r=[];for(t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),s=l.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,k(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=c),d}},a}(e.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},1264:function(t,e){t.exports="/**\r\n * - Close\r\n *    -- Message return close func async\r\n */\r\nimport React from 'react'\r\nimport { Button, Message } from 'megacosm'\r\n\r\nexport default () => {\r\n  const msg = async () => {\r\n    const close = await Message.success(\r\n      <div>\r\n        I will always show until\r\n        <a onClick={() => close()}> manually closed</a>\r\n      </div>,\r\n      0\r\n    )\r\n  }\r\n  return <Button onClick={msg}>Manual Close</Button>\r\n}\r\n"},1499:function(t,e,n){"use strict";n.r(e);var r=n(1262),o=n.n(r);function c(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var r=n(0),i=n.n(r),a=n(283),s=n(55);e.default=function(){var t=function(){var s,t=(s=o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.success(i.a.createElement("div",null,"I will always show until",i.a.createElement("a",{onClick:function(){return e()}}," manually closed")),0);case 2:e=t.sent;case 3:case"end":return t.stop()}},t)}),function(){var t=this,a=arguments;return new Promise(function(e,n){var r=s.apply(t,a);function o(t){c(r,e,n,o,i,"next",t)}function i(t){c(r,e,n,o,i,"throw",t)}o(void 0)})});return function(){return t.apply(this,arguments)}}();return i.a.createElement(s.a,{onClick:t},"Manual Close")}},283:function(t,e,n){"use strict";var r=n(0),f=n.n(r),r=n(53),o=n.n(r),h=n(1),i=n(4),a=n(5),s=n(2),c=n(6),l=n(7),u=n(44),r=n(19),m=n(98),p=n(22),r=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(i.a)(this,n),(t=e.call(this,t)).state={messages:[]},t.removeMessage=t.removeMessage.bind(Object(s.a)(t)),t.handleClassName=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",e=1<arguments.length?arguments[1]:void 0;return Object(h.v)("item","item-".concat(e?"dismissed":"show","-").concat(t))},t.handleStyle=function(t,e,n){if(!t||null==e)return null;var r={};switch(n){case"bottom-right":case"bottom-left":break;default:r={zIndex:-1,opacity:0,marginTop:-e}}return r},t}return Object(a.a)(n,[{key:"addMessage",value:function(e){var t=this,n=Object(p.c)();return this.setState(Object(u.a)(function(t){t.messages.push(Object.assign({id:n},e))})),0<e.duration&&setTimeout(function(){t.setState(Object(u.a)(function(t){t.messages.forEach(function(t){t.id===n&&(t.dismiss=!0)})}))},1e3*e.duration),this.closeMessageForAnimation.bind(this,n,200,200)}},{key:"removeMessage",value:function(e){var n,t=this.state.messages.filter(function(t){return t.id!==e||(t.onClose&&(n=t.onClose),!1)});0===t.length?this.props.onDestory():this.setState({messages:t}),n&&n()}},{key:"closeMessageForAnimation",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n[0],i=n[1],a=n[2];i?(this.setState(Object(u.a)(function(t){t.messages.forEach(function(t){t.id===o&&(t.dismiss=!0,t.h=a+20)})})),setTimeout(function(){t.removeMessage(o)},i)):this.removeMessage(o)}},{key:"closeEvent",value:function(t,e){if(0===e)return this.removeMessage.bind(this,t)}},{key:"render",value:function(){var u=this;return[this.state.messages.map(function(t){var e=t.id,n=t.type,r=t.content,o=t.dismiss,i=t.h,a=t.title,s=t.top,c=t.className,l=t.position,t=t.hideClose;return f.a.createElement("div",{key:e,className:"".concat(u.handleClassName(l,o)," ").concat(c),style:u.handleStyle(o,i,l)},f.a.createElement(m.a,{outAnimation:!0,className:Object(h.v)("msg"),dismiss:o,hideClose:t,onClose:u.closeMessageForAnimation.bind(u,e),icon:!0,iconSize:a?20:14,style:{top:s},type:n},a&&f.a.createElement("h3",null,a),r))})]}}]),n}(r.b);r.displayName="MegacosmMessage";var d=r,g={},v={};function y(t){g[t]&&(o.a.unmountComponentAtNode(g[t]),document.body.removeChild(g[t]),delete g[t]),v[t]&&delete v[t]}function w(r){return new Promise(function(e){var t,n=v[r];n?e(n):o.a.render(f.a.createElement(d,{ref:function(t){v[r]=t,e(t)},onDestory:y.bind(null,r)}),(t=r,(n=document.createElement("div")).className=Object(h.v)("_",t),document.body.appendChild(n),g[t]=n))})}r=function(u){return function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=t.onClose,o=t.position,i=void 0===o?"top":o,a=t.title,o=t.className,s=void 0===o?"":o,o=t.top,c=void 0===o?"auto":o,l=t.hideClose;return w(i).then(function(t){return t.addMessage({content:e,duration:n,type:u,onClose:r,title:a,className:s,top:c,position:i,hideClose:l})})}},e.a={show:r("default"),success:r("success"),info:r("info"),warn:r("warning"),warning:r("warning"),danger:r("danger"),error:r("danger"),close:function(t){t?y(t):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(t){y(t)})}}}}]);