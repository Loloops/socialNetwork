(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var a=s(5),n=s(51),o=s(52),c=s(54),r=s(53),i=s(0),l=s.n(i),u=s(19),j=s(7),b=s(1),p=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){Object(c.a)(i,e);var s=Object(r.a)(i);function i(){return Object(n.a)(this,i),s.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(a.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),i}(l.a.Component);return Object(u.b)(p)(e)}},291:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var a=s(94);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,n=!1,o=void 0;try{for(var c,r=t[Symbol.iterator]();!(a=(c=r.next()).done)&&(s.push(c.value),!e||s.length!==e);a=!0);}catch(i){n=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(n)throw o}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(t,e,s){t.exports={profileInfoImg:"ProfileInfo_profileInfoImg__L8TPb",descriptionBlock:"ProfileInfo_descriptionBlock__3Zt8j",avatar:"ProfileInfo_avatar__2pFrT",aboutDescription:"ProfileInfo_aboutDescription__3MTYY",aboutContacts:"ProfileInfo_aboutContacts__1vqzM",aboutContactsLinks:"ProfileInfo_aboutContactsLinks__GCB7n",status:"ProfileInfo_status__2vjbd",input:"ProfileInfo_input__1-BbV",error:"ProfileInfo_error__16DNL"}},293:function(t,e,s){"use strict";e.a=s.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.d393fa70.png"},298:function(t,e,s){t.exports={content:"MyPosts_content__1U-D8",postsBlock:"MyPosts_postsBlock__1TRPq",myPosts:"MyPosts_myPosts__26IKL",posts:"MyPosts_posts__2-ySP",textarea:"MyPosts_textarea__ks6vM",addPostBtn:"MyPosts_addPostBtn__3a33e",inputsBtns:"MyPosts_inputsBtns__fKCVG"}},299:function(t,e,s){t.exports={item:"Post_item__t-YW9",itemMessage:"Post_itemMessage__35NWq",likeCount:"Post_likeCount__33XZY"}},301:function(t,e,s){"use strict";s.r(e);var a=s(5),n=s(51),o=s(52),c=s(54),r=s(53),i=s(0),l=s.n(i),u=s(19),j=s(93),b=s(33),p=s(126),d=s(127),f=s(57),h=s(75),O=s(298),m=s.n(O),x=s(299),v=s.n(x),_=s(1),P=function(t){return Object(_.jsxs)("div",{className:v.a.item,children:[Object(_.jsxs)("div",{className:v.a.itemImg,children:[Object(_.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",alt:"Avatar..."}),Object(_.jsxs)("p",{className:v.a.itemMessage,children:[" ",t.message," "]})]}),Object(_.jsxs)("div",{className:v.a.likeCount,children:[Object(_.jsx)("span",{children:" Like"})," ",t.likeCount]})]})},g=l.a.memo((function(t){var e=Object(b.a)(t.postsData).reverse().map((function(t){return Object(_.jsx)(P,{message:t.message,likeCount:t.likescount},t.id)}));return Object(_.jsx)("div",{className:m.a.content,children:Object(_.jsxs)("div",{className:m.a.postsBlock,children:[Object(_.jsx)("h3",{className:m.a.myPosts,children:"My Posts"}),Object(_.jsx)(k,{onSubmit:function(e){t.addPost(e.textAreaValuePost)}}),Object(_.jsx)("div",{className:m.a.posts,children:e})]})})})),k=Object(d.a)({form:"profilePostValue"})((function(t){return Object(_.jsxs)("form",{className:m.a.inputsBtns,onSubmit:t.handleSubmit,children:[Object(_.jsx)("div",{children:Object(_.jsx)(p.a,{placeholder:"What you think?",rows:"7",cols:"70",className:m.a.textarea,component:f.b,name:"textAreaValuePost",validate:[h.c,h.a]})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:m.a.addPostBtn,children:"Add post"})})]})})),y=g,N=Object(u.b)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(y),A=s(291),C=s(45),I=s(292),M=s.n(I),S=s(293),D=function(t){var e=Object(i.useState)(!1),s=Object(A.a)(e,2),a=s[0],n=s[1],o=Object(i.useState)(t.status),c=Object(A.a)(o,2),r=c[0],l=c[1];Object(i.useEffect)((function(){l(t.status)}),[t.status]);return Object(_.jsxs)("div",{className:M.a.inputWrapper,children:[!a&&Object(_.jsxs)("div",{className:M.a.status,children:["STATUS:",Object(_.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",t.status||"no_status"]})]}),a&&Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,className:M.a.input,onBlur:function(){n(!1),t.updateStatus(r)},value:r})})]})},B=Object(d.a)({form:"edit-profile"})((function(t){return Object(_.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(_.jsxs)("div",{className:M.a.aboutDescription,children:["Name:",Object(_.jsx)(p.a,{placeholder:"Name",component:f.a,name:"fullName",validate:[]})]}),Object(_.jsxs)("div",{className:M.a.aboutDescription,children:["About me:",Object(_.jsx)(p.a,{placeholder:"About me",component:f.b,name:"aboutMe",validate:[]})]}),Object(_.jsxs)("div",{className:M.a.aboutDescription,children:["Looking for a job:",Object(_.jsx)(p.a,{component:f.a,type:"checkbox",name:"lookingForAJob",validate:[]})]}),Object(_.jsxs)("div",{className:M.a.aboutDescription,children:["My professional skills:",Object(_.jsx)(p.a,{placeholder:"Looking for a job description",component:f.b,name:"lookingForAJobDescription",validate:[]})]}),Object(_.jsx)("p",{className:M.a.aboutContacts,children:"Contacts:"}),Object(_.jsx)("ul",{className:M.a.aboutContactsLinks,children:Object.keys(t.profile.contacts).map((function(t){return Object(_.jsx)("div",{children:Object(_.jsxs)("b",{children:[t,": ",Object(_.jsx)(p.a,{placeholder:t,component:f.a,name:"contacts."+t,validate:[]})]})},t)}))}),Object(_.jsx)("button",{children:"Save"}),t.error&&Object(_.jsxs)("div",{className:M.a.error,children:[" ",t.error," "]})]})})),T=function(t){var e=t.profile,s=t.isOwner,a=t.goToEditMode;return Object(_.jsxs)("div",{children:[Object(_.jsxs)("p",{className:M.a.aboutDescription,children:["Name: ",Object(_.jsx)("span",{children:e.fullName}),"  "]}),Object(_.jsxs)("p",{className:M.a.aboutDescription,children:["About me: ",Object(_.jsx)("span",{children:e.aboutMe}),"  "]}),Object(_.jsxs)("p",{className:M.a.aboutDescription,children:["Looking for a job: ",Object(_.jsx)("span",{children:e.lookingForAJob?"Yes":"No"}),"  "]}),Object(_.jsxs)("p",{className:M.a.aboutDescription,children:["My professional skills: ",Object(_.jsx)("span",{children:e.lookingForAJobDescription}),"  "]}),Object(_.jsx)("p",{className:M.a.aboutContacts,children:"Contacts:"}),Object(_.jsx)("ul",{className:M.a.aboutContactsLinks,children:Object.keys(e.contacts).map((function(t){return e.contacts[t]?Object(_.jsx)(w,{contactTitle:t,contactValue:e.contacts[t]},t):null}))}),s&&Object(_.jsx)("button",{onClick:a,children:"Edit"})]})},w=function(t){var e=t.contactTitle,s=t.contactValue;return Object(_.jsxs)("li",{children:[" ",e,": ",Object(_.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:s}),"  "]})},L=function(t){var e=Object(i.useState)(!1),s=Object(A.a)(e,2),n=s[0],o=s[1];if(!t.profile)return Object(_.jsx)(C.a,{});return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:M.a.descriptionBlock,children:[Object(_.jsx)("div",{className:M.a.avatar,children:Object(_.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:S.a,alt:"ava"})}),Object(_.jsxs)("div",{className:M.a.about,children:[Object(_.jsx)(D,Object(a.a)({status:t.status},t)),n?Object(_.jsx)(B,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){o(!1)}))}}):Object(_.jsx)(T,{goToEditMode:function(){o(!0)},profile:t.profile,isOwner:t.isOwner}),t.isOwner&&Object(_.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}})]})]})})},V=function(t){return Object(_.jsxs)("div",{children:[Object(_.jsx)(L,Object(a.a)(Object(a.a)({savePhoto:t.savePhoto,profile:t.profile},t),{},{isOwner:t.isOwner,saveProfile:t.saveProfile})),Object(_.jsx)(N,{})]})},F=s(7),J=s(290),U=s(11),Y=function(t){Object(c.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.AuthUser),this.props.userProfileThunk(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(_.jsx)(V,Object(a.a)(Object(a.a)({isOwner:!this.props.match.params.userId},this.props),{},{profile:this.props.profile,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);e.default=Object(U.d)(Object(u.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,AuthUser:t.auth.userId,isAuth:t.auth.isAuth}}),{userProfileThunk:j.g,getStatus:j.c,updateStatus:j.f,savePhoto:j.d,saveProfile:j.e}),F.f,J.a)(Y)}}]);
//# sourceMappingURL=3.392c4c71.chunk.js.map