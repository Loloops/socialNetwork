(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{284:function(t,e,s){"use strict";e.a=s.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.d393fa70.png"},285:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s(90);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(s.push(o.value),!e||s.length!==e);n=!0);}catch(r){a=!0,c=r}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},286:function(t,e,s){t.exports={profileInfoImg:"ProfileInfo_profileInfoImg__L8TPb",descriptionBlock:"ProfileInfo_descriptionBlock__3Zt8j",avatar:"ProfileInfo_avatar__2pFrT",aboutDescription:"ProfileInfo_aboutDescription__3MTYY",aboutContacts:"ProfileInfo_aboutContacts__1vqzM",aboutContactsLinks:"ProfileInfo_aboutContactsLinks__GCB7n",status:"ProfileInfo_status__2vjbd",input:"ProfileInfo_input__1-BbV",error:"ProfileInfo_error__16DNL"}},291:function(t,e,s){t.exports={content:"MyPosts_content__1U-D8",postsBlock:"MyPosts_postsBlock__1TRPq",myPosts:"MyPosts_myPosts__26IKL",posts:"MyPosts_posts__2-ySP",textarea:"MyPosts_textarea__ks6vM",addPostBtn:"MyPosts_addPostBtn__3a33e",inputsBtns:"MyPosts_inputsBtns__fKCVG"}},292:function(t,e,s){t.exports={item:"Post_item__t-YW9",itemMessage:"Post_itemMessage__35NWq",likeCount:"Post_likeCount__33XZY"}},294:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),c=s(15),o=s(7),i=s(89),r=s(33),l=s(122),j=s(123),u=s(42),b=s(63),d=s(291),f=s.n(d),O=s(292),p=s.n(O),m=s(284),h=s(44),x=s(1),v=function(t){var e=t.message,s=t.likeCount,n=Object(c.d)((function(t){return t.profilePage})).profile;return n?Object(x.jsxs)("div",{className:p.a.item,children:[Object(x.jsxs)("div",{className:p.a.itemImg,children:[Object(x.jsx)("img",{src:null!==n.photos.large?n.photos.large:m.a,alt:"Avatar..."}),Object(x.jsxs)("p",{className:p.a.itemMessage,children:[" ",e," "]})]}),Object(x.jsxs)("div",{className:p.a.likeCount,children:[Object(x.jsx)("span",{children:" Like"})," ",s]})]}):Object(x.jsx)(h.a,{})},_=a.a.memo((function(){var t=Object(c.d)((function(t){return t.profilePage})).postsData,e=Object(c.c)(),s=Object(r.a)(t).reverse().map((function(t){return Object(x.jsx)(v,{message:t.message,likeCount:t.likescount},t.id)}));return Object(x.jsx)("div",{className:f.a.content,children:Object(x.jsxs)("div",{className:f.a.postsBlock,children:[Object(x.jsx)("h3",{className:f.a.myPosts,children:"My Posts"}),Object(x.jsx)(g,{onSubmit:function(t){e(Object(i.a)(t.textAreaValuePost)),t.textAreaValuePost=""}}),Object(x.jsx)("div",{className:f.a.posts,children:s})]})})})),g=Object(j.a)({form:"profilePostValue"})((function(t){return Object(x.jsxs)("form",{className:f.a.inputsBtns,onSubmit:t.handleSubmit,children:[Object(x.jsx)("div",{children:Object(x.jsx)(l.a,{placeholder:"What you think?",rows:"7",cols:"70",className:f.a.textarea,component:u.b,name:"textAreaValuePost",validate:[b.c,b.a]})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:f.a.addPostBtn,children:"Add post"})})]})})),k=_,N=s(285),y=s(286),P=s.n(y),C=function(t){var e=t.profileStatus,s=Object(n.useState)(!1),a=Object(N.a)(s,2),o=a[0],r=a[1],l=Object(n.useState)(e),j=Object(N.a)(l,2),u=j[0],b=j[1],d=Object(c.c)();Object(n.useEffect)((function(){b(e)}),[e]);return Object(x.jsxs)("div",{className:P.a.inputWrapper,children:[!o&&Object(x.jsxs)("div",{className:P.a.status,children:["STATUS:",Object(x.jsx)("span",{onDoubleClick:function(){r(!0)},children:e||"change status(2 click on this text)"})]}),o&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{onChange:function(t){b(t.currentTarget.value)},autoFocus:!0,className:P.a.input,onBlur:function(){r(!1),d(Object(i.f)(u))},value:u})})]})},M=Object(j.a)({form:"edit-profile"})((function(t){return Object(x.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(x.jsxs)("div",{className:P.a.aboutDescription,children:["Name:",Object(x.jsx)(l.a,{placeholder:"Name",component:u.a,name:"fullName",validate:[]})]}),Object(x.jsxs)("div",{className:P.a.aboutDescription,children:["About me:",Object(x.jsx)(l.a,{placeholder:"About me",component:u.b,name:"aboutMe",validate:[]})]}),Object(x.jsxs)("div",{className:P.a.aboutDescription,children:["Looking for a job:",Object(x.jsx)(l.a,{component:u.a,type:"checkbox",name:"lookingForAJob",validate:[]})]}),Object(x.jsxs)("div",{className:P.a.aboutDescription,children:["My professional skills:",Object(x.jsx)(l.a,{placeholder:"Looking for a job description",component:u.b,name:"lookingForAJobDescription",validate:[]})]}),Object(x.jsx)("p",{className:P.a.aboutContacts,children:"Contacts:"}),Object(x.jsx)("ul",{className:P.a.aboutContactsLinks,children:Object.keys(t.profile.contacts).map((function(t){return Object(x.jsx)("div",{children:Object(x.jsxs)("b",{children:[t,":"," ",Object(x.jsx)(l.a,{placeholder:t,component:u.a,name:"contacts."+t,validate:[]})]})},t)}))}),Object(x.jsx)("button",{children:"Save"}),t.error&&Object(x.jsxs)("div",{className:P.a.error,children:[" ",t.error," "]})]})})),I=function(t){var e=t.profile,s=t.isOwner,n=t.goToEditMode;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:P.a.aboutDescription,children:["Name: ",Object(x.jsx)("span",{children:e.fullName})]}),Object(x.jsxs)("p",{className:P.a.aboutDescription,children:["About me: ",Object(x.jsx)("span",{children:e.aboutMe})]}),Object(x.jsxs)("p",{className:P.a.aboutDescription,children:["Looking for a job: ",Object(x.jsx)("span",{children:e.lookingForAJob?"Yes":"No"})]}),Object(x.jsxs)("p",{className:P.a.aboutDescription,children:["My professional skills: ",Object(x.jsx)("span",{children:e.lookingForAJobDescription})]}),Object(x.jsx)("p",{className:P.a.aboutContacts,children:"Contacts:"}),Object(x.jsx)("ul",{className:P.a.aboutContactsLinks,children:Object.keys(e.contacts).map((function(t){return e.contacts[t]?Object(x.jsx)(S,{contactTitle:t,contactValue:e.contacts[t]},t):null}))}),s&&Object(x.jsx)("button",{onClick:n,children:"Edit"})]})},S=function(t){var e=t.contactTitle,s=t.contactValue;return Object(x.jsxs)("li",{children:[e,":",Object(x.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:s})]})},A=function(t){var e=t.isOwner,s=Object(n.useState)(!1),a=Object(N.a)(s,2),o=a[0],r=a[1],l=Object(c.d)((function(t){return t.profilePage})),j=l.profile,u=l.status,b=Object(c.c)();if(!j)return Object(x.jsx)(h.a,{});return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:P.a.descriptionBlock,children:[Object(x.jsx)("div",{className:P.a.avatar,children:Object(x.jsx)("img",{src:null!==j.photos.large?j.photos.large:m.a,alt:"profile avatar"})}),Object(x.jsxs)("div",{className:P.a.about,children:[Object(x.jsx)(C,{profileStatus:u}),o?Object(x.jsx)(M,{initialValues:j,profile:j,onSubmit:function(t){b(Object(i.e)(t)).then((function(){r(!1)}))}}):Object(x.jsx)(I,{goToEditMode:function(){r(!0)},profile:j,isOwner:e}),e&&Object(x.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&b(Object(i.d)(t.target.files[0]))}})]})]})})};e.default=function(){var t=Object(o.g)().userId,e=Object(c.c)(),s=Object(c.d)((function(t){return t.auth.userId})),a=Object(c.d)((function(t){return t.auth.isAuth})),r=function(){t||(t=s),e(Object(i.g)(t)),e(Object(i.c)(t))},l=function(t){var e=Object(n.useRef)();return Object(n.useEffect)((function(){e.current=t}),[t]),e.current}(t);return Object(n.useEffect)((function(){r(),t!==l&&r()}),[t]),Object(x.jsx)("div",{children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{isOwner:!t}),Object(x.jsx)(k,{})]}):Object(x.jsx)(o.a,{to:"/login"})})}}}]);
//# sourceMappingURL=3.8d4ebce7.chunk.js.map