(this["webpackJsonpshopify-f21"]=this["webpackJsonpshopify-f21"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},131:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},153:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),s=n.n(i),o=(n(110),n(13)),r=(n(111),n(35)),l=n.n(r),j=n(47),d=n(87),b=n(195),h=n(196),m=n(235),u=n(163),O=n(232),x=n(201),f=n(39),v=n(208),p=n(209),g=n(202),N=n(203),y=n(210),S=n(211),C=n(231),w=n(205),k=n(206),D=n(207),I=n(96),P=n(197),M=n(204),R=n(233),A=n(199),T=n(45),Y=n(64),F=n.n(Y),E="https://www.omdbapi.com/?apikey=".concat("70b342e5");function z(e,t){var n=e.trim().replace(" ","+"),a=E+"&s=".concat(n,"&type=movie&page=").concat(t);return F.a.get(a).then((function(e){return e.data})).then((function(e){return e})).catch((function(e){return console.log(e.response),e.response.data}))}function _(e){var t=E+"&i=".concat(e);return F.a.get(t).then((function(e){return e.data})).then((function(e){return e})).catch((function(e){return console.log(e.response),e.response.data}))}n(131);var J=n(198),B=n(200),L=n(48),W=n.n(L),G=n(2);function q(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),d=r[0],m=r[1];Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,_(e.id);case 3:"True"===(n=t.sent).Response&&i(n),m(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.open&&function(){t.apply(this,arguments)}()}),[e.open,e.id]);return Object(G.jsxs)(R.a,{onClose:e.handleClose,open:e.open,fullScreen:e.mobile,className:"dialog-container",children:[e.mobile&&Object(G.jsx)(b.a,{color:"inherit",className:"dialog-bar",children:Object(G.jsxs)(h.a,{children:[Object(G.jsx)(P.a,{edge:"start",color:"inherit",onClick:e.handleClose,children:Object(G.jsx)(J.a,{})}),Object(G.jsx)(A.a,{children:Object(G.jsx)(T.a,{children:c.Title})})]})}),Object(G.jsx)(W.a,{active:d,spinner:!0,children:!d&&Object(G.jsxs)(a.Fragment,{children:[Object(G.jsx)(A.a,{children:Object(G.jsx)(T.a,{children:c.Title})}),Object(G.jsxs)("div",{className:"dialog",children:[Object(G.jsxs)("div",{className:"intro",children:["N/A"!==c.Poster?Object(G.jsx)("img",{src:c.Poster,alt:"N/A"}):Object(G.jsx)(B.a,{}),"N/A"!==c.Plot&&Object(G.jsx)(T.a,{className:"plot",children:c.Plot}),Object(G.jsxs)(T.a,{className:"rating",children:["IMDB Rating: ",c.imdbRating]})]}),Object(G.jsx)(T.a,{children:"Additional Information"}),Object(G.jsxs)(u.a,{className:"details",children:[Object(G.jsxs)(T.a,{children:["Year: ",c.Year]}),Object(G.jsxs)(T.a,{children:["Rated: ",c.Rated]}),Object(G.jsxs)(T.a,{children:["Released: ",c.Released]}),Object(G.jsxs)(T.a,{children:["Genre: ",c.Genre]}),Object(G.jsxs)(T.a,{children:["Director: ",c.Director]}),Object(G.jsxs)(T.a,{children:["Actors: ",c.Actors]}),Object(G.jsxs)(T.a,{children:["Country: ",c.Country]}),Object(G.jsxs)(T.a,{children:["Awards: ",c.Awards]})]}),Object(G.jsxs)("div",{className:"detail-buttons",children:[Object(G.jsx)(x.a,{href:"https://www.imdb.com/title/".concat(c.imdbID,"/"),color:"primary",target:"_blank",children:"go to IMDb"}),e.nominated?Object(G.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){e.denominate(e.movie),e.handleClose()},children:"Remove nomination"}):Object(G.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){e.nominate(e.movie),e.handleClose()},children:"Nominate"})]})]})]})})]})}n(147);function H(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=function(){i(!c)},r=(e.nominate,Object(I.a)(e,["nominate"]));return Object(G.jsxs)(g.a,{hover:!0,className:"row",children:[!e.mobile&&Object(G.jsx)(N.a,{onClick:s,className:"movie-cell",children:"N/A"!==e.Poster?Object(G.jsx)("img",{src:e.Poster,alt:"N/A",onClick:s,className:"img"}):Object(G.jsx)("div",{children:Object(G.jsx)(B.a,{})})}),Object(G.jsx)(N.a,{className:"movie-title",onClick:s,children:e.Title}),Object(G.jsx)(N.a,{onClick:s,children:e.Year}),Object(G.jsx)(N.a,{children:Object(G.jsx)(P.a,{onClick:function(){return e.nominate(r)},disabled:e.nominated||!e.nominatable,className:"add",children:Object(G.jsx)(M.a,{fontSize:"medium"})})}),Object(G.jsx)(q,{open:c,handleClose:s,id:e.imdbID,mobile:e.mobile,movie:r,nominate:e.nominate,nominated:e.nominated||!e.nominatable})]})}n(148);function K(e){var t=e.mobile?["Title","Year of Release","Nominate"]:["Poster","Title","Year of Release","Nominate"];return Object(G.jsxs)("div",{className:"movie_container".concat(e.mobile?"":"-desktop"),children:[Object(G.jsxs)("h5",{className:"movie_container-title",children:[Object(G.jsx)(w.a,{className:"search-icon"})," Your search result:"," ",e.totalResult," item(s)"]}),Object(G.jsxs)(u.a,{className:"paper",elevation:4,children:[!!e.totalNomination&&Object(G.jsx)(h.a,{children:e.totalNomination<5?Object(G.jsxs)(a.Fragment,{children:[Object(G.jsx)(k.a,{className:"sms-icon",color:"inherit"}),Object(G.jsx)("h6",{className:"banner",children:"You have selected ".concat(e.totalNomination," movie(s) for\n                  nominations.")})]}):Object(G.jsxs)(a.Fragment,{children:[Object(G.jsx)(D.a,{className:"sms-icon banner-completed"}),Object(G.jsx)("h5",{className:"banner-completed",children:"Your nomination list is ready!"})]})}),Object(G.jsx)(W.a,{active:e.loading,spinner:!0,children:Object(G.jsxs)(v.a,{children:[Object(G.jsx)(p.a,{children:Object(G.jsx)(g.a,{children:t.map((function(e,t){return Object(G.jsx)(N.a,{children:e},t)}))})}),Object(G.jsx)(y.a,{children:e.results&&e.results.map((function(t,n){return Object(G.jsx)(H,Object(f.a)(Object(f.a)({},t),{},{nominate:e.nominate,nominatable:e.totalNomination<=4,mobile:e.mobile}),n)}))}),Object(G.jsx)(S.a,{children:Object(G.jsx)(g.a,{children:Object(G.jsx)(C.a,{rowsPerPageOptions:[10],colSpan:3,count:+e.totalResult,rowsPerPage:e.rowsPerPage,page:e.page,onChangePage:function(t,n){return e.handleChangePage(n)}})})})]})})]})]})}var Q=n(215),U=n(212),V=n(222),X=n(216),Z=n(218),$=n(217),ee=n(219);n(150);function te(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=function(){i(!c)};return Object(G.jsxs)(U.a,{button:!0,className:"row",children:[Object(G.jsx)(X.a,{className:"drag-handle",children:Object(G.jsx)($.a,{})}),Object(G.jsxs)(Z.a,{onClick:s,children:[Object(G.jsx)(T.a,{className:"nom-title",children:e.Title}),Object(G.jsx)(T.a,{className:"nom-year",children:e.Year})]}),Object(G.jsx)(X.a,{className:"remove",children:Object(G.jsx)(P.a,{color:"inherit",onClick:function(){return e.denominate(e)},children:Object(G.jsx)(ee.a,{fontSize:"small"})})}),Object(G.jsx)(q,{open:c,handleClose:s,id:e.imdbID,mobile:e.mobile,movie:e,denominate:e.denominate,nominated:!0})]},e.imdbID)}n(151);var ne=n(220),ae=n(221),ce=n(223),ie=n(224),se=n(65);function oe(e){var t=c.a.useState(!1),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(a.useEffect)((function(){s(!1)}),[e.list]),Object(G.jsxs)("div",{className:"container".concat(e.mobile?"":"-desktop"),children:[Object(G.jsxs)("h5",{className:"container-title",children:[Object(G.jsx)(ne.a,{className:"icon"}),"Your nominations"," ","(".concat(e.list.length,"/5)")]}),Object(G.jsx)(u.a,{className:"paper",elevation:4,children:Object(G.jsxs)(Q.a,{children:[Object(G.jsx)(se.Container,{dragHandleSelector:".drag-handle",lockAxis:"y",onDrop:e.onDrop,children:e.list.length?e.list.map((function(t,n){return Object(G.jsx)(se.Draggable,{children:Object(G.jsx)(te,Object(f.a)(Object(f.a)({},t),{},{denominate:e.denominate,mobile:e.mobile}),n)},e.id)})):Object(G.jsx)(U.a,{children:Object(G.jsxs)(T.a,{fontSize:"small",className:"empty",children:[Object(G.jsx)(ae.a,{className:"empty-icon",fontSize:"small"}),"List empty"]})})}),Object(G.jsx)(V.a,{}),Object(G.jsxs)("div",{className:"nom_buttons",children:[Object(G.jsx)(x.a,{onClick:function(){e.clear()},variant:"contained",color:"secondary",startIcon:Object(G.jsx)(ce.a,{}),size:"small",disabled:!e.list.length,className:"discard",children:"Discard"}),Object(G.jsx)(x.a,{onClick:function(t){e.save(),s(!0)},variant:"contained",color:"primary",size:"small",startIcon:Object(G.jsx)(ie.a,{}),disabled:i||!e.list.length,children:i?"Saved":"Save"})]})]})}),Object(G.jsx)("h6",{className:"nom_subtitle",children:"Your list is saved in your browser's storage so you can always come back later."})]})}var re=function(e){var t;try{t=JSON.parse(window.localStorage.getItem(e))}catch(n){console.log("failed to load '".concat(e,"' localStorage state"))}return t},le=function(e,t){try{var n=JSON.stringify(t);window.localStorage.setItem(e,n)}catch(a){console.log("localStorage:","failed to save state")}},je=n(95);function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.map((function(e){var n=t.some((function(t){return e.imdbID===t.imdbID}));return e.nominated=!!n,e}));return n}n(153);var be=n(225),he=n(226),me=n(227),ue=n(93),Oe=n.n(ue);function xe(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),f=r[0],v=r[1],p=Object(a.useState)([]),g=Object(o.a)(p,2),N=g[0],y=g[1],S=Object(a.useState)(0),C=Object(o.a)(S,2),w=C[0],k=C[1],D=Object(a.useState)(re("nominations")||[]),I=Object(o.a)(D,2),P=I[0],M=I[1],R=Object(a.useState)(0),A=Object(o.a)(R,2),T=A[0],Y=A[1],F=Object(a.useState)(!1),E=Object(o.a)(F,2),_=E[0],J=E[1];Object(a.useEffect)((function(){le("nominations",P),le("nightMode",e.nightMode)}),[P,e.nightMode]);var B=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a,i,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:T,n=s.length>1&&void 0!==s[1]&&s[1],v(""),c){e.next=5;break}return e.abrupt("return");case 5:return J(!0),n&&Y(0),e.next=9,z(c,t+1);case 9:"True"===(a=e.sent).Response&&(i=de(a.Search,P),y(i),k(a.totalResults)),J(!1),a.Error&&(v(a.Error),y([]),k(0));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=de(N,e);y(t)},W=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).filter((function(t){return t.imdbID!==e.imdbID}))}(e,P);M(t),L(t)},q=function(){le("nominations",P)},H=function(){M([]),L([])},Q=function(e){var t=e.removedIndex,n=e.addedIndex;M((function(e){return Oe()(e,t,n)}))},U=Object(d.useMediaQuery)({query:"(max-width: 1000px)"}),V=e.nightMode,X=e.switchMode;return Object(G.jsxs)("div",{className:"homepage",children:[Object(G.jsx)("div",{children:Object(G.jsx)(b.a,{position:"static",color:"inherit",className:"app-bar".concat(V?"":"-sun"),children:Object(G.jsxs)(h.a,{className:"toolbar",variant:"dense",children:[Object(G.jsx)(be.a,{className:"".concat(V?"night":"sun")}),Object(G.jsx)(m.a,{checked:V,color:"default",onChange:X}),Object(G.jsx)(he.a,{className:"".concat(V?"moon":"night")})]})})}),Object(G.jsx)("h3",{className:"headerText-".concat(V?"-night":""),children:"The Shoppies: Movie awards for entrepreneurs"}),Object(G.jsx)("h5",{children:"Find your Top 5 Movies and add them to your Nomination list."}),U&&Object(G.jsx)(oe,{list:P,denominate:W,onDrop:Q,clear:H,save:q,mobile:!0,nightMode:V}),Object(G.jsx)("span",{children:Object(G.jsxs)("h5",{className:"title",children:[Object(G.jsx)(me.a,{className:"movie-icon"}),"Find a movie"]})}),Object(G.jsx)(u.a,{className:"search",elevation:4,children:Object(G.jsxs)("div",{className:"paper",children:[Object(G.jsx)(O.a,{id:"outlined-basic",label:"Enter a movie title",variant:"outlined",placeholder:"The Wolf of Wall Street",value:c,onChange:function(e){return i(e.target.value)},fullWidth:!0,onKeyDown:function(e){"Enter"===e.key&&B(0,!0)}}),Object(G.jsx)("p",{className:"error",children:f}),Object(G.jsxs)("div",{className:"buttons",children:[Object(G.jsx)(x.a,{onClick:function(){i(""),y([]),k(0),Y(0),v("")},variant:"outlined",children:"Clear"}),Object(G.jsx)(x.a,{onClick:function(){return B(0,!0)},variant:"outlined",disabled:!c,children:"Search"})]})]})}),Object(G.jsxs)("div",{className:"list",children:[Object(G.jsx)(K,{loading:_,totalResult:w,results:N,nominate:function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.some((function(t){return e.imdbID===t.imdbID}))?t:[].concat(Object(je.a)(t),[e])}(e,P);M(t),L(t)},totalNomination:P.length,handleChangePage:function(e){B(e),Y(e)},page:T,rowsPerPage:10,mobile:U,nightMode:V}),!U&&Object(G.jsx)(oe,{list:P,denominate:W,onDrop:Q,clear:H,save:q,nightMode:V})]})]})}var fe=n(94),ve=n(228),pe=Object(fe.a)({typography:{fontFamily:["Montserrat","sans-serif"].join(",")}});var ge=function(){var e=re("nightMode"),t="boolean"!==typeof e||e,n=Object(a.useState)(t),c=Object(o.a)(n,2),i=c[0],s=c[1];return Object(G.jsx)("div",{className:"App App".concat(i?"-night":"-day"),children:Object(G.jsx)("header",{className:"App-header",children:Object(G.jsx)(ve.a,{theme:pe,children:Object(G.jsx)(xe,{switchMode:function(){s(!i)},nightMode:i})})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,237)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(ge,{})}),document.getElementById("root")),Ne()}},[[162,1,2]]]);
//# sourceMappingURL=main.d069aaf4.chunk.js.map