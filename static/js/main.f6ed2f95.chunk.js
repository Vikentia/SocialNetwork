(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[1],{227:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(83),s=n(61),c=n(73),o={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e},i=n(79),l=n(23),d=n(80),f=n(3),p="SN/APP/INITIALIZED_SUCCESS",b={initialized:!1},h=function(){return{type:p}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return t.type===p?Object(f.a)(Object(f.a)({},e),{},{initialized:!0}):e},O=Object(r.c)({profilePage:s.b,dialogsPage:c.b,sidebar:u,usersPage:i.b,auth:l.a,form:d.a,app:j}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,v=Object(r.e)(O,g(Object(r.a)(a.a))),m=n(0),S=n.n(m),y=n(44),x=n.n(y),w=n(39),_=n(40),E=n(43),P=n(42),C=n(53),U=n.n(C),I=n(54),N=n.n(I),k=n(15),T=n(2),A=function(e){return Object(T.jsxs)("div",{className:N.a.header,children:["\u0428\u0430\u043f\u043a\u0430 \u0441\u0430\u0439\u0442\u0430",Object(T.jsx)("div",{className:N.a.loginBlock,children:e.isAuth?Object(T.jsxs)("div",{children:[e.login," -"," ",Object(T.jsx)("button",{onClick:e.logout,children:"LogOut"})]}):Object(T.jsx)(k.b,{to:"/login",children:"Login"})})]})},L=n(20),R=function(e){Object(E.a)(n,e);var t=Object(P.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(T.jsx)(A,Object(f.a)({},this.props))}}]),n}(S.a.Component),F=Object(L.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:l.d})(R),M=n(25),D=n.n(M),z=function(){return Object(T.jsxs)("div",{className:D.a.nav,children:[Object(T.jsx)("div",{className:D.a.title,children:" \u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u0435\u043d\u044e "}),Object(T.jsx)("div",{className:D.a.nav__item,children:Object(T.jsx)(k.b,{to:"/profile",children:"Profile"})}),Object(T.jsx)("div",{className:D.a.nav__item,children:Object(T.jsx)(k.b,{to:"/dialogs",children:"Messages"})}),Object(T.jsx)("div",{className:D.a.nav__item,children:Object(T.jsx)(k.b,{to:"/users",children:"Users"})})]})},G=n(4),H=n(62),B=Object(m.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,306))})),W=Object(m.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,308))})),J=Object(m.lazy)((function(){return n.e(7).then(n.bind(null,307))})),V=Object(m.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,305))})),Z=function(e){Object(E.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(w.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledError=function(e){},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){return this.props.initialized?Object(T.jsxs)("div",{className:U.a.App,children:[Object(T.jsx)(F,{}),Object(T.jsx)(z,{}),Object(T.jsx)("div",{className:U.a.content,children:Object(T.jsx)(m.Suspense,{fallback:Object(T.jsx)("div",{children:"Loading..."}),children:Object(T.jsxs)(G.d,{children:[Object(T.jsx)(G.b,{path:"/",element:Object(T.jsx)(G.a,{to:"/profile"})}),Object(T.jsx)(G.b,{path:"/dialogs",element:Object(T.jsx)(W,{})}),Object(T.jsx)(G.b,{path:"/profile",element:Object(T.jsx)(B,{}),children:Object(T.jsx)(G.b,{path:":userId",element:Object(T.jsx)(B,{})})}),Object(T.jsx)(G.b,{path:"/users",element:Object(T.jsx)(J,{})}),Object(T.jsx)(G.b,{path:"/login",element:Object(T.jsx)(V,{})}),Object(T.jsx)(G.b,{path:"/*",element:Object(T.jsx)("div",{children:" 404 NOT FOUND "})})]})})})]}):Object(T.jsx)(H.a,{})}}]),n}(S.a.Component),q=Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(l.b)());Promise.all([t]).then((function(){e(h())}))}}})(Z);x.a.render(Object(T.jsx)(k.a,{children:Object(T.jsx)(L.a,{store:v,children:Object(T.jsx)(q,{})})}),document.getElementById("root"))},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return S}));var r,a=n(6),s=n.n(a),c=n(9),o=n(3),u=n(26),i=n(8),l=function(){return i.a.get("auth/me").then((function(e){return e.data}))},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},f=function(){return i.a.delete("auth/login")};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var p=function(){return i.a.get("security/get-captcha-url").then((function(e){return e.data}))},b="SN/AUTH/SET_USER_DATA",h="SN/AUTH/GET_CAPTCHA_URL_SUCCESS",j={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},O=function(e,t,n,r){return{type:b,payload:{userId:e,email:t,login:n,isAuth:r}}},g=function(e){return{type:h,payload:{captchaUrl:e}}},v=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:(n=e.sent).resultCode===r.Success&&(a=n.data,c=a.id,o=a.login,u=a.email,t(O(c,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n,a){return function(){var o=Object(c.a)(s.a.mark((function c(o){var i,l,f;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,d(e,t,n,a);case 2:(i=s.sent).resultCode===r.Success?o(v()):(i.resultCode===r.CaptchaIsRequired&&o(y()),l=i.message.length>0?i.message[0]:"Some error",f=Object(u.a)("login",{_error:l}),o(f));case 4:case"end":return s.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},S=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:e.sent.data.resultCode===r.Success&&t(O(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,r=n.url,t(g(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case h:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},25:function(e,t,n){e.exports={nav:"Navigation_nav__2J0oM",nav__item:"Navigation_nav__item__1NMZ9",title:"Navigation_title__eaAEu"}},53:function(e,t,n){e.exports={App:"App_App__2D-eb",content:"App_content__1Z6Zu"}},54:function(e,t,n){e.exports={header:"Header_header__1W_Jk",loginBlock:"Header_loginBlock__3Ipvt"}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return E}));var r=n(6),a=n.n(r),s=n(9),c=n(18),o=n(3),u=n(26),i=n(8),l=function(e){return i.a.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return i.a.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return i.a.put("profile/status",{status:e}).then((function(e){return e.data}))},p=function(e){var t=new FormData;return t.append("image",e),i.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},b=function(e){return i.a.put("profile",e).then((function(e){return e.data}))},h="SN/PROFILE/ADD-POST",j="SN/PROFILE/DELETE_POST",O="SN/PROFILE/SET_USER_PROFILE",g="SN/PROFILE/SET_STATUS",v="SN/PROFILE/SAVE_PHOTO_SUCCESS",m={posts:[{id:1,message:"Post1",likesCount:12},{id:2,message:"Post2",likesCount:34},{id:3,message:"Post3",likesCount:52},{id:4,message:"Post4",likesCount:42},{id:5,message:"Post5",likesCount:18},{id:6,message:"Post6",likesCount:62}],profile:null,status:"",newPostText:""},S={addPostActionCreater:function(e){return{type:h,payload:{newPostText:e}}},setUserProfile:function(e){return{type:O,payload:{profile:e}}},setStatus:function(e){return{type:g,payload:{status:e}}},deletePost:function(e){return{type:j,payload:{postId:e}}},savePhotoSuccess:function(e){return{type:v,payload:{photos:e}}}},y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(S.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(S.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:t.sent.resultCode||n(S.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:(r=t.sent).resultCode||n(S.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,b(e);case 3:if((c=t.sent).resultCode){t.next=12;break}if(null===s){t.next=9;break}n(y(s)),t.next=10;break;case 9:throw new Error("UserId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:c.message[0]})),t.abrupt("return",Promise.reject(c.message[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n={id:7,message:t.payload.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return t.payload.postId!==e.id}))});case O:return Object(o.a)(Object(o.a)({},e),{},{profile:t.payload.profile});case g:return Object(o.a)(Object(o.a)({},e),{},{status:t.payload.status});case v:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.payload.photos})});default:return e}}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/preloader.ea356991.svg",a=n(2),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(18),a=n(3),s="SN/DIALOGS/SEND_MESSAGE",c={dialogs:[{id:1,name:"Viktor"},{id:2,name:"Sveta"},{id:3,name:"Igor"},{id:4,name:"Masha"},{id:5,name:"Petya"},{id:6,name:"Vi\u0441toria"}],messages:[{id:1,message:"Hi"},{id:2,message:"Bye"},{id:3,message:"Hello"},{id:4,message:"Mess"},{id:5,message:"Mess123"},{id:6,message:"Mess456"}]},o={sendMessageCreater:function(e){return{type:s,payload:{newMessageBody:e}}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.payload.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])})}return e}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return x}));var r=n(6),a=n.n(r),s=n(9),c=n(18),o=n(3),u=n(8),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return u.a.delete("follow/"+e).then((function(e){return e.data}))},follow:function(e){return u.a.post("follow/"+e).then((function(e){return e.data}))}},l=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},d="SN/USERS/FOLLOW",f="SN/USERS/UNFOLLOW",p="SN/USERS/SET_USERS",b="SN/USERS/SET_CURRENT_PAGE",h="SN/USERS/SET_TOTAL_COUNT",j="SN/USERS/TOGGLE_IS_FETCHING",O="SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},v={followSuccess:function(e){return{type:d,payload:{id:e}}},unfollowSuccess:function(e){return{type:f,payload:{id:e}}},setUsers:function(e){return{type:p,payload:{users:e}}},setCurrentPage:function(e){return{type:b,payload:{currentPage:e}}},setTotalUsersCount:function(e){return{type:h,payload:{totalUsersCount:e}}},toggleIsFetching:function(e){return{type:j,payload:{isFetching:e}}},toggleFollowingProgress:function(e,t){return{type:O,isFetching:e,userId:t}}},m=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v.toggleIsFetching(!0)),r(v.setCurrentPage(e)),n.next=4,i.getUsers(e,t);case 4:s=n.sent,r(v.toggleIsFetching(!1)),r(v.setUsers(s.items)),r(v.setTotalUsersCount(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v.toggleFollowingProgress(!0,n)),e.next=3,r(n);case 3:!e.sent.resultCode&&t(s(n)),t(v.toggleFollowingProgress(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.follow.bind(i),s=v.followSuccess,S(n,e,r,s);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.unfollow.bind(i),s=v.unfollowSuccess,S(n,e,r,s);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{users:l(e.users,t.payload.id,"id",{followed:!0})});case f:return Object(o.a)(Object(o.a)({},e),{},{users:l(e.users,t.payload.id,"id",{followed:!1})});case p:return Object(o.a)(Object(o.a)({},e),{},{users:t.payload.users});case b:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.payload.currentPage});case h:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.payload.totalUsersCount});case j:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.payload.isFetching});case O:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(81),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e82d0870-e644-47bb-8212-44d44c6489be"}})}},[[227,2,3]]]);
//# sourceMappingURL=main.f6ed2f95.chunk.js.map