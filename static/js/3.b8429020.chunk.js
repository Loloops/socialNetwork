(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{284:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return s}))},285:function(e,t,n){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n.d(t,"a",(function(){return a}))},286:function(e,t,n){"use strict";function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return r(this,n)}}n.d(t,"a",(function(){return o}))},288:function(e,t,n){"use strict";function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}n.d(t,"a",(function(){return a}))},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var s=n(5),a=n(284),r=n(285),o=n(288),c=n(286),i=n(0),u=n.n(i),l=n(17),f=n(7),m=n(1),g=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(c.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(m.jsx)(e,Object(s.a)({},this.props)):Object(m.jsx)(f.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(g)(t)}},293:function(e,t,n){e.exports={dialog:"DialogItem_dialog__2kQqR",active:"DialogItem_active__26MlQ"}},294:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3Vex9",dialogsItems:"Dialogs_dialogsItems__3QWAu",messages:"Dialogs_messages__3qGUB",messageSendItem:"Dialogs_messageSendItem__E6a1A",messageTextArea:"Dialogs_messageTextArea__aouaF",messageSendButton:"Dialogs_messageSendButton__34HGP"}},295:function(e,t,n){e.exports={messageItem:"Message_messageItem__3GwMr",message:"Message_message__2fnQt"}},300:function(e,t,n){"use strict";n.r(t);var s=n(17),a=n(11),r=n(121),o=n(289),c=(n(0),n(7)),i=n(122),u=n(123),l=n(42),f=n(63),m=n(25),g=n(293),d=n.n(g),p=n(1),b=function(e){var t="/dialogs/".concat(e.id);return Object(p.jsxs)("div",{className:d.a.dialog,children:[Object(p.jsx)("img",{src:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:"user..."}),Object(p.jsxs)(m.b,{to:t,activeClassName:d.a.active,children:[" ",e.name," "]})]})},j=n(294),y=n.n(j),h=n(295),O=n.n(h),_=function(e){return Object(p.jsxs)("div",{className:O.a.messageItem,"data-itsme":e.flag,children:[Object(p.jsx)("img",{src:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:"user..."}),Object(p.jsx)("div",{className:O.a.message,children:e.message})]})},x=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(p.jsxs)("form",{className:y.a.messageSendItem,onSubmit:e.handleSubmit,children:[Object(p.jsx)(i.a,{maxLength:"1000",placeholder:"Write your message...",rows:"7",cols:"70",className:y.a.messageTextArea,validate:[f.c,f.b],component:l.b,name:"textAreaValue"}),Object(p.jsx)("button",{className:y.a.messageSendButton,children:"Send"})]})})),v=function(e){var t=e.messagesPage,n=t.dialogsData.map((function(e){return Object(p.jsx)(b,{name:e.name,id:e.id},e.id)})),s=t.messagesData.map((function(e){return Object(p.jsx)(_,{message:e.message,flag:e.flag},e.id)}));if(!e.isAuth)return Object(p.jsx)(c.a,{to:"/login"});return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:y.a.dialogs,children:[Object(p.jsx)("div",{className:y.a.dialogsItems,children:n}),Object(p.jsx)("div",{className:y.a.messages,children:s})]}),Object(p.jsx)(x,{onSubmit:function(t){e.MessageBtn(t.textAreaValue)}})]})};t.default=Object(a.d)(Object(s.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{MessageBtn:function(t){e(Object(r.b)(t))}}})),o.a)(v)}}]);
//# sourceMappingURL=3.b8429020.chunk.js.map