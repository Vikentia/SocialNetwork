(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[4],{228:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var s=function(t){return t?void 0:"Field is required"},r=function(t){return function(e){return e.length>t?"Max length is ".concat(t," symbols"):void 0}}},229:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return d}));var s=n(3),r=n(230),o=(n(0),n(231)),c=n.n(o),a=n(106),i=n(2),u=["input","meta","children"],j=["input","meta"],l=["input","meta"],b=function(t){t.input;var e=t.meta,n=t.children,s=(Object(r.a)(t,u),e.touched&&e.error);return Object(i.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:""),children:[Object(i.jsx)("div",{children:n}),s&&Object(i.jsx)("span",{children:e.error})]})},p=function(t){var e=t.input,n=t.meta,o=Object(r.a)(t,j);return Object(i.jsx)(b,{input:e,meta:n,children:Object(i.jsx)("textarea",Object(s.a)(Object(s.a)({},e),o))})},f=function(t){var e=t.input,n=t.meta,o=Object(r.a)(t,l);return Object(i.jsx)(b,{input:e,meta:n,children:Object(i.jsx)("input",Object(s.a)(Object(s.a)({},e),o))})},d=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(a.a,Object(s.a)({placeholder:t,name:e,validate:n,component:r},o))," ",c]})}},231:function(t,e,n){t.exports={error:"FormsControls_error__2LN0j"}},233:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var s=n(3),r=n(32),o=n(33),c=n(35),a=n(34),i=n(0),u=n.n(i),j=n(4),l=n(20),b=n(2),p=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(c.a)(i,e);var n=Object(a.a)(i);function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(s.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(p)(e)}},252:function(t,e,n){t.exports={post:"Post_post__3g1Y5"}},253:function(t,e,n){t.exports={myPosts:"MyPosts_myPosts__rNwKc"}},299:function(t,e,n){t.exports={description_block:"ProfileInfo_description_block__1IiNw",myProfile__photo:"ProfileInfo_myProfile__photo__k-gxF"}},300:function(t,e,n){t.exports={myProfile__photo:"Profile_myProfile__photo__26Xkt"}},306:function(t,e,n){"use strict";n.r(e);var s=n(3),r=n(32),o=n(33),c=n(35),a=n(34),i=n(0),u=n.n(i),j=n(57),l=n(252),b=n.n(l),p=n(2);var f=function(t){return Object(p.jsxs)("div",{className:b.a.post,children:[Object(p.jsx)("img",{src:"https://get.wallhere.com/photo/1600x1200-px-boxes-Danbo-eyes-fallen-glowing-leaves-1629619.jpg",alt:"ava"}),"Post: ",t.message,Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:[" Like ",t.likesCount]})})]})},d=n(253),O=n.n(d),h=n(106),m=n(107),x=n(228),v=n(229),g=Object(x.a)(10),_=function(t){var e=t.posts.map((function(t){return Object(p.jsx)(f,{message:t.message,likesCount:t.likesCount})}));return Object(p.jsxs)("div",{className:O.a.myPosts,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(P,{onSubmit:function(e){t.addPost(e.newPostText)}}),e]})},P=Object(m.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)(h.a,{component:v.b,name:"newPostText",validate:[x.b,g],placeholder:"Post message"}),Object(p.jsx)("button",{children:"Add"}),Object(p.jsx)("button",{children:"Delete"})]})})),y=u.a.memo(_),k=n(20),S=Object(k.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){return t(Object(j.a)(e))}}}))(y),w=n(62),N=n(299),C=n.n(N),I=n(13),A=function(t){var e=Object(i.useState)(!1),n=Object(I.a)(e,2),s=n[0],r=n[1],o=Object(i.useState)(t.status),c=Object(I.a)(o,2),a=c[0],u=c[1];Object(i.useEffect)((function(){u(t.status)}),[t.status]);return Object(p.jsx)("div",{children:s?Object(p.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},value:a,onBlur:function(){r(!1),t.updateStatus(a)},autoFocus:!0}):Object(p.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"no status"})})},F=function(t){var e=t.profile,n=t.status,s=t.updateStatus;return e?Object(p.jsx)("div",{className:C.a.profileInfo,children:Object(p.jsxs)("div",{className:C.a.description_block,children:[Object(p.jsxs)("p",{children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.fullName,", id: ",e.userId]}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:e.photos.small?e.photos.small:"https://binkor.ru/images/vopros/user_hover.png"})}),"O \u0441\u0435\u0431\u0435: ",e.aboutMe,Object(p.jsx)(A,{status:n,updateStatus:s})]})}):Object(p.jsx)(w.a,{})},M=n(300),T=n.n(M),D=function(t){return Object(p.jsxs)("div",{className:T.a.profile,children:[Object(p.jsx)(F,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(p.jsx)(S,{})]})},J=n(233),L=n(29),U=n(4),q=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.userId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(p.jsx)(D,Object(s.a)({},this.props))}}]),n}(u.a.Component);e.default=Object(L.d)(J.a,Object(k.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,userId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.e}),(function(t){return function(e){var n=Object(U.f)(),r=Object(U.g)(),o=Object(U.h)();return Object(p.jsx)(t,Object(s.a)(Object(s.a)({},e),{},{router:{location:n,navigate:r,params:o}}))}}))(q)}}]);
//# sourceMappingURL=4.df084c0e.chunk.js.map