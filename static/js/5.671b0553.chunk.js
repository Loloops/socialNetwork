(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{284:function(e,t,s){"use strict";t.a=s.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.d393fa70.png"},285:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s(90);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],r=!0,n=!1,a=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(s.push(c.value),!t||s.length!==t);r=!0);}catch(i){n=!0,a=i}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return s}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},287:function(e,t,s){e.exports={UsersWrapper:"Users_UsersWrapper__GqBYX",userItemPhoto:"Users_userItemPhoto__3qc0s",userItemBtn:"Users_userItemBtn__2tg3B",userItemBtnUnf:"Users_userItemBtnUnf__114D1",userItem:"Users_userItem__2pWzw",wrapperImg:"Users_wrapperImg__2H9LA",wrapperInfo:"Users_wrapperInfo__3nNca",userItemPersons:"Users_userItemPersons__2Upla",userItemPersonsName:"Users_userItemPersonsName__3s7yh",userItemPersonsStatus:"Users_userItemPersonsStatus__1xD8n",userItemLievs:"Users_userItemLievs__3BhXj",userItemLievsCountry:"Users_userItemLievsCountry__1Ynvt",userItemLievsCity:"Users_userItemLievsCity__jg7ry",selectedpadge:"Users_selectedpadge__10qey",page:"Users_page__1-glP"}},295:function(e,t,s){"use strict";s.r(t);var r=s(15),n=s(44),a=s(285),c=s(0),o=s(287),i=s.n(o),u=s(1),l=function(e){for(var t=e.totalUsersCount,s=e.pageSize,r=e.currentPage,n=e.onPageChanged,o=e.portionSize,l=void 0===o?20:o,m=Math.ceil(t/s),d=[],j=1;j<=m;j++)d.push(j);var f=Math.ceil(m/l),p=Object(c.useState)(1),b=Object(a.a)(p,2),h=b[0],_=b[1];Object(c.useEffect)((function(){return _(Math.ceil(r/l))}),[r]);var I=(h-1)*l+1,O=h*l;return Object(u.jsxs)("div",{children:[h>1&&Object(u.jsx)("button",{onClick:function(){_(h-1)},children:"Prev"}),d.filter((function(e){return e>=I&&e<=O})).map((function(e){return Object(u.jsx)("button",{className:"".concat(r===e&&i.a.selectedpadge," ").concat(i.a.page),onClick:function(t){n(e)},children:e},e)})),f>h&&Object(u.jsx)("button",{onClick:function(){_(h+1)},children:"Next"})]})},m=s(25),d=s(284),j=function(e){var t=e.u,s=e.followingInProgress,n=e.followThunk,a=e.unfollowThunk,c=Object(r.c)();return Object(u.jsxs)("div",{className:i.a.UsersWrapper,children:[Object(u.jsxs)("div",{className:"".concat(i.a.userItem," ").concat(i.a.wrapperImg),children:[Object(u.jsx)("div",{children:Object(u.jsx)(m.b,{to:"/profile/"+t.id,children:Object(u.jsx)("img",{src:null!=t.photos.small?t.photos.small:d.a,alt:"Foto",className:i.a.userItemPhoto})})}),t.followed?Object(u.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){c(a(t.id))},className:"".concat(i.a.userItemBtn," ").concat(i.a.userItemBtnUnf),children:"Unfollow"}):Object(u.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){c(n(t.id))},className:i.a.userItemBtn,children:"Follow"})]}),Object(u.jsxs)("div",{className:"".concat(i.a.userItem," ").concat(i.a.wrapperInfo),children:[Object(u.jsxs)("div",{className:i.a.userItemPersons,children:[Object(u.jsxs)("h3",{className:i.a.userItemPersonsName,children:["Name: ",Object(u.jsx)("span",{children:t.name})]}),Object(u.jsxs)("p",{className:i.a.userItemPersonsStatus,children:["Status: ",Object(u.jsx)("span",{className:i.a.dsad,children:t.status})]})]}),Object(u.jsxs)("div",{className:i.a.userItemLievs,children:[Object(u.jsxs)("h3",{className:i.a.userItemLievsCountry,children:["Country: ",Object(u.jsx)("span",{children:"NULL"})]}),Object(u.jsxs)("p",{className:i.a.userItemLievsCity,children:["City: ",Object(u.jsx)("span",{children:"NULL"})]})]})]})]})},f=s(91);t.default=function(){var e=Object(r.d)((function(e){return e.usersPage})),t=e.users,s=e.pageSize,a=e.totalUsersCount,o=e.currentPage,i=e.isFetching,m=e.followingInProgress,d=Object(r.c)();Object(c.useEffect)((function(){d(Object(f.c)(o,s))}),[]);return Object(u.jsx)("div",{children:i?Object(u.jsx)(n.a,{}):Object(u.jsxs)(u.Fragment,{children:[t.map((function(e){return Object(u.jsx)(j,{u:e,followingInProgress:m,unfollowThunk:f.d,followThunk:f.b},e.id)})),Object(u.jsx)(l,{currentPage:o,onPageChanged:function(e){d(Object(f.c)(e,s))},totalUsersCount:a,pageSize:s})]})})}}}]);
//# sourceMappingURL=5.671b0553.chunk.js.map