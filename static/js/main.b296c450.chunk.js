(this["webpackJsonpsimple-react-redux-app"]=this["webpackJsonpsimple-react-redux-app"]||[]).push([[0],{42:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(0);var r=n(14),s=n(23),c=n.n(s),i=n(16),a=n(44),j=n(17),o=n(92),d=n(90),l=n(18),u=[],O=n(91),b="/",x="/version",p="/features",h=n(1),v=function(e){return"nav-link ".concat(e?"active":"")},g=function(){return Object(h.jsx)("nav",{children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(j.b,{className:function(e){var t=e.isActive;return v(t)},to:b,children:"Home"})}),Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(j.b,{className:function(e){var t=e.isActive;return v(t)},to:x,children:"Version"})})]})})},m=n(2),_={dev:"dev",ci:"ci",test:"test",stage:"stage",prod:"prod"},A=[{urlpattern:"localhost",env:_.dev},{urlpattern:"127.0.0.1",env:_.dev},{urlpattern:"dev.",env:_.dev},{urlpattern:"development.",env:_.dev},{urlpattern:"test.",env:_.test},{urlpattern:"tst.",env:_.test},{urlpattern:"ci.",env:_.ci},{urlpattern:"qa.",env:_.stage},{urlpattern:"qat.",env:_.stage},{urlpattern:"stage.",env:_.stage},{urlpattern:"staging.",env:_.stage}],f=function(){var e=window.location.hostname;return!A.some((function(t){return e.includes(t.urlpattern)}))},E=n(88),R=n(89),P=function(){return Object(h.jsx)(E.a,{"data-testid":"homePageContainer",children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)(o.a,{bg:"secondary",text:"white",children:Object(h.jsxs)(o.a.Body,{children:[Object(h.jsx)("h1",{children:"Sample Application "}),Object(h.jsx)("p",{children:"This is the home page for an application"})]})}),Object(h.jsx)("p",{children:"This project can be used as template when starting other React/Redux projects."})]})})},T=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E.a,{"data-testid":"versionPageContainer",children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)("h1",{children:"Version"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Application Name: "}),Object(h.jsx)("span",{id:"appNameFromPackageJson",children:"simple-react-redux-app"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Version: "}),Object(h.jsx)("span",{id:"appVersionFromPackageJson",children:"2.0.0"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Git Commit: "}),Object(h.jsx)("span",{id:"gitCommitHash",children:"e653a2d"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"State persists on refresh: "}),"true"]})]})]})})})},S=n.p+"static/media/page_not_found.61ba8739.svg",C=function(){return Object(h.jsx)(E.a,{"data-testid":"404PageContainer",children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)("h1",{children:"Page not found"}),Object(h.jsx)("p",{children:"The page you requested could not be found."}),Object(h.jsx)("p",{style:{textAlign:"center"},children:Object(h.jsx)("img",{src:S,className:"App-logo",alt:""})})]})})},N=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:b,element:Object(h.jsx)(P,{})}),Object(h.jsx)(m.a,{path:x,element:Object(h.jsx)(T,{})}),f()?null:Object(h.jsx)(m.a,{path:p,element:Object(h.jsx)(l.FeatureFlagsReduxUI,{})}),Object(h.jsx)(m.a,{path:"*",element:Object(h.jsx)(C,{})})]})})},F=n(31),U=n.n(F),H=function e(t){var n=t.clearError,r=void 0===n?function(){}:n,s=t.setError,c=void 0===s?function(){}:s,i=t.testResponse,a=void 0===i?function(){}:i,j=t.testMode,o=void 0!==j&&j;return e.setAxiosHeaders(),U.a.interceptors.request.use((function(e){return r(),e}),(function(e){return o?null:Promise.reject(e)})),U.a.interceptors.response.use((function(e){return a(e),e}),(function(t){var n,r;return(null===(n=t.response)||void 0===n?void 0:n.status)?(null===(r=t.response)||void 0===r||r.status,c(e.UNKNOWN_ERROR)):c(e.UNKNOWN_ERROR),o?null:Promise.reject(t)})),Object(h.jsx)("div",{})};H.setAxiosHeaders=function(){},H.UNKNOWN_ERROR="An unknown error has occurred. Please try again.";var k,w=H,y=(n(42),j.a),I=function(){return Object(h.jsx)("header",{children:Object(h.jsx)(o.a,{bg:"dark",text:"white",children:Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(o.a.Title,{children:"Sample redux application"})})})})},K=function(){return Object(h.jsx)("footer",{children:Object(h.jsx)(o.a,{bg:"light",style:{marginTop:"20px"}})})},L=function(){var e;Object(i.useDispatch)()(Object(l.loadFeatureFlagsRedux)({features:u,overrides:JSON.parse(null!==(e=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_USE_HASH_ROUTER:"true",REACT_APP_GIT_SHA:"e653a2d",REACT_APP_VERSION:"2.0.0",REACT_APP_NAME:"simple-react-redux-app",REACT_APP_USE_LOCAL_STORAGE:"true",REACT_APP_FEATURE_FLAGS_PERSIST:"false",REACT_APP_USE_REDUX:"true",REACT_APP_USE_MOCKS:"false"}).REACT_APP_FEATURE_FLAGS)&&void 0!==e?e:"[]"),persist:!1}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(y,{basename:"",children:[Object(h.jsx)(w,{}),Object(h.jsx)(I,{}),Object(h.jsx)(g,{}),Object(h.jsx)(d.a,{children:Object(h.jsx)("main",{children:Object(h.jsx)(N,{})})}),Object(h.jsx)(K,{})]})})},D=n(48),V=n(47),W=n.n(V),G=n(9),J=Object(G.b)({FeatureFlags:l.featureFlagsReducers}),q={key:"root",version:1,storage:W.a},B=Object(r.g)(q,J),M=Object(D.a)({reducer:B,middleware:function(e){return e({serializableCheck:{ignoredActions:[r.a,r.f,r.b,r.c,r.d,r.e]}})}});k=Object(h.jsx)(i.Provider,{store:M,children:Object(h.jsx)(L,{})});var z=Object(r.h)(M);k=Object(h.jsx)(i.Provider,{store:M,children:Object(h.jsx)(a.a,{loading:Object(h.jsx)("div",{children:"Loading..."}),persistor:z,children:Object(h.jsx)(L,{})})}),c.a.render(k,document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b296c450.chunk.js.map