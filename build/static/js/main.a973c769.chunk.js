(this["webpackJsonptrello-version-2"]=this["webpackJsonptrello-version-2"]||[]).push([[0],{46:function(e,n,t){e.exports={container:"AddNote_container__2-v0H",formContainer:"AddNote_formContainer__2XRpu",inputContainer:"AddNote_inputContainer__ICo73"}},47:function(e,n,t){e.exports={container:"Column_container__1-EF3",titleContainer:"Column_titleContainer__3qSKc",title:"Column_title__23xzE"}},48:function(e,n,t){e.exports={container:"AddColumn_container__7JK5Z",formContainer:"AddColumn_formContainer__F-q6p",button:"AddColumn_button__28_r8"}},49:function(e,n,t){e.exports={note:"Note_note__1UNcz",noteTitle:"Note_noteTitle__cqtX5",user:"Note_user__2RWIw"}},50:function(e,n,t){e.exports={container:"Board_container__NTJQL",title:"Board_title__3nLKm",columnContainer:"Board_columnContainer__D4fui"}},91:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(10),o=t.n(a),r=t(14),i=t(18),l=t(11),u=t(19),s=t(122),d=t(128),b=t(51),j="CHANGE_NOTE_LOCATION",m="ADD_COLUMN",O="ADD_NOTE",f=function(e){return{type:j,payload:e}},p=function(e){return{type:m,payload:e}},v=function(e){return{type:O,payload:e}},h=t(132),_=t(129),x=t(66),C=t.n(x),N=t(130),I=t(127),g=t(121),y=t(46),A=t.n(y),k=t(4),S=Object(i.b)("",(function(e){return Object(r.b)({addNote:v},e)}))((function(e){var n=e.id,t=e.onBlur,a=e.addNote,o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],l=r[1];return Object(k.jsx)("div",{className:A.a.container,children:Object(k.jsx)(g.a,{onClickAway:function(){return t()},children:Object(k.jsxs)("div",{className:A.a.formContainer,children:[Object(k.jsx)(s.a,{className:A.a.inputContainer,children:Object(k.jsx)(N.a,{id:"add-note",autoFocus:!0,value:i,onChange:function(e){var n=e.target.value;return l(n)}})}),Object(k.jsx)(I.a,{variant:"contained",color:"secondary",onClick:function(){""!==i&&(a({columnId:n,title:i}),l(""),t())},style:{fontSize:12,marginTop:10,background:"seagreen"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})]})})})})),T=t(47),B=t.n(T),D=function(e){var n=e.id,t=e.title,a=e.available,o=e.children,r=Object(c.useState)(!1),i=Object(u.a)(r,2),l=i[0],s=i[1];return Object(k.jsxs)("div",{className:B.a.container,style:{background:a?"#f4f5f7":"red"},children:[Object(k.jsxs)("div",{className:B.a.titleContainer,children:[Object(k.jsx)(d.a,{component:"p",variant:"body1",className:B.a.title,children:t}),Object(k.jsx)(h.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443","aria-label":"add",children:Object(k.jsx)(_.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",size:"small",onClick:function(){return s(!0)},children:Object(k.jsx)(C.a,{fontSize:"small"})})})]}),Object(k.jsx)("div",{children:o}),l&&Object(k.jsx)(S,{id:n,onBlur:function(){return s(!1)}})]})};D.defaultProps={available:!0,children:[],title:""};var F=D,L=t(67),P=t.n(L),q=t(48),w=t.n(q),E=Object(i.b)("",(function(e){return Object(r.b)({addColumn:p},e)}))((function(e){var n=e.addColumn,t=Object(c.useState)(!0),a=Object(u.a)(t,2),o=a[0],r=a[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),s=l[0],d=l[1];return Object(k.jsx)("div",{className:w.a.container,children:o?Object(k.jsx)(I.a,{variant:"outlined",color:"default",startIcon:Object(k.jsx)(P.a,{}),onClick:function(){return r(!1)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"}):Object(k.jsx)(g.a,{onClickAway:function(){return r(!0)},children:Object(k.jsxs)("div",{className:w.a.formContainer,children:[Object(k.jsx)(N.a,{id:"add-column",autoFocus:!0,value:s,onChange:function(e){var n=e.target.value;return d(n)}}),Object(k.jsx)(I.a,{variant:"contained",color:"secondary",onClick:function(){""!==s&&(n(s),r(!0),d(""))},className:w.a.button,style:{fontSize:12,marginTop:10,background:"seagreen"},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})})),z=t(133),J=t(49),R=t.n(J),H=function(e){var n=e.title;return Object(k.jsxs)(s.a,{className:R.a.note,children:[Object(k.jsx)(d.a,{component:"p",variant:"caption",className:R.a.noteTitle,children:n}),Object(k.jsx)("div",{className:R.a.user,children:Object(k.jsx)(z.a,{style:{width:35,height:35},children:"A"})})]})};H.defaultProps={title:""};var K=H,U=t(50),X=t.n(U),G=function(e){var n=e.boardId,t=e.columns,a=e.changeLocation,o=Object(c.useState)([]),r=Object(u.a)(o,2),i=r[0],j=r[1];return Object(k.jsxs)(s.a,{elevation:3,className:X.a.container,children:[Object(k.jsx)(d.a,{component:"h3",variant:"h3",className:X.a.title,children:"Board"}),Object(k.jsxs)("div",{className:X.a.columnContainer,children:[Object(k.jsx)(b.a,{onDragEnd:function(e){var n=e.source,t=e.destination;if(t){i.includes(+t.droppableId.split("-").pop())&&a({begin:function(e){var n=e.droppableId;return{beginNote:e.index,beginColumn:+n.split("-").pop()}}(n),end:function(e){var n=e.droppableId;return{endNote:e.index,endColumn:+n.split("-").pop()}}(t)}),j([])}},onDragStart:function(e){var n=+e.source.droppableId.split("-").pop();j([n-1,n,n+1])},children:t.map((function(e){var n=e.columnId,t=e.name,c=e.notes;return Object(k.jsx)(b.c,{droppableId:"column-".concat(n),children:function(e){return Object(k.jsxs)("div",Object(l.a)(Object(l.a)({className:"column-".concat(n),ref:e.innerRef},e.droppableProps),{},{children:[Object(k.jsx)(F,{id:n,title:t,available:0===i.length||i.includes(n),children:c.map((function(e,t){var c=e.noteId,a=e.title;return Object(k.jsx)(b.b,{draggableId:"column-".concat(n,"_note-").concat(c),index:t,children:function(e){return Object(k.jsx)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(k.jsx)(K,{title:a})}))}},"column-".concat(n,"_note-").concat(c))}))}),e.placeholder]}),n)}},"column-".concat(n))}))}),Object(k.jsx)(E,{})]},n)]})};G.defaultProps={columns:[]};var M=Object(i.b)((function(e){return{boardId:e.board.boardId||0,columns:e.board.columns||[]}}),(function(e){return Object(r.b)({changeLocation:f},e)}))(G);var Q=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(M,{})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,134)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))},Z=t(23),V={boardId:1,quantityNotes:8,columns:[{columnId:1,name:"\u041d\u0430\u0440\u044f\u0434\u044b",notes:[{noteId:1,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"},{noteId:2,title:"\u0417\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u043b\u0438\u0442 \u0434\u043b\u044f \u043d\u0435\u0441\u0443\u0449\u0435\u0439 \u0441\u0442\u0435\u043d\u044b"}]},{columnId:2,name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",notes:[{noteId:3,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"},{noteId:4,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"}]},{columnId:3,name:"\u041f\u0440\u0438\u0451\u043c\u043a\u0430",notes:[{noteId:5,title:"\u0417\u0435\u043c\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u043b\u0438\u0442 \u0434\u043b\u044f \u043d\u0435\u0441\u0443\u0449\u0435\u0439 \u0441\u0442\u0435\u043d\u044b"},{noteId:6,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"}]},{columnId:4,name:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",notes:[{noteId:7,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"},{noteId:8,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043b\u0438\u0442 \u043f\u043e\u0434 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442"}]}]},Y=function(e,n){var t=n.end,c=t.endColumn,a=t.endNote,o=n.begin,r=o.beginColumn,i=o.beginNote;if(c===r){var s=Object(Z.a)(e.columns[c-1].notes),d=s.splice(i,1),b=Object(u.a)(d,1)[0];return s.splice(a,0,b),Object(l.a)(Object(l.a)({},e),{},{columns:Object(Z.a)(e.columns).map((function(e){return e.columnId===c?Object(l.a)(Object(l.a)({},e),{},{notes:Object(Z.a)(s)}):e}))})}var j=Object(Z.a)(e.columns[r-1].notes),m=Object(Z.a)(e.columns[c-1].notes),O=j.splice(i,1),f=Object(u.a)(O,1)[0];m.splice(a,0,f);var p=Object(l.a)({},e.columns[r-1]),v=Object(l.a)({},e.columns[c-1]);return p.notes=j,v.notes=m,Object(l.a)(Object(l.a)({},e),{},{columns:Object(Z.a)(e.columns).map((function(e){return e.columnId===c?Object(l.a)({},v):e.columnId===r?Object(l.a)({},p):e}))})},$=function(e,n){return Object(l.a)(Object(l.a)({},e),{},{columns:[].concat(Object(Z.a)(e.columns),[{columnId:e.columns.length+1,name:n,notes:[]}])})},ee=function(e,n){var t=n.columnId,c=n.title;return Object(l.a)(Object(l.a)({},e),{},{quantityNotes:e.quantityNotes+1,columns:Object(Z.a)(e.columns).map((function(n){return n.columnId===t?Object(l.a)(Object(l.a)({},n),{},{notes:[].concat(Object(Z.a)(n.notes),[{noteId:e.quantityNotes+1,title:c}])}):n}))})},ne=Object(r.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0,t=n.type,c=n.payload;switch(t){case j:return Y(e,c);case m:return $(e,c);case O:return ee(e,c);default:return e}}}),te=(t(91),Object(r.e)(ne));o.a.render(Object(k.jsxs)(i.a,{store:te,children:[Object(k.jsx)(Q,{})," "]}),document.getElementById("root")),W()}},[[92,1,2]]]);
//# sourceMappingURL=main.a973c769.chunk.js.map