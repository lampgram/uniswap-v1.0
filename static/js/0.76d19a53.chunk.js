(this.webpackJsonpuniswap=this.webpackJsonpuniswap||[]).push([[0],{1167:function(e,n,t){"use strict";var r=/[|\\{}()[\]^$+*?.-]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},1168:function(e,n,t){},692:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r,o=t(0),a=t.n(o),i=["svgRef","title"];function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=function(e){var n=e.svgRef,t=e.title,o=l(e,i);return a.a.createElement("svg",c({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},o),t?a.a.createElement("title",null,t):null,r||(r=a.a.createElement("path",{d:"M11.4673 6L6.23364 1L0.999995 6",stroke:"#388DFF"})))},s=a.a.forwardRef((function(e,n){return a.a.createElement(u,c({svgRef:n},e))}));t.p},694:function(e,n,t){"use strict";var r,o,a,i,c,l,u,s,d,f,m,b=t(7),p=t(3),h=t(0),g=t.n(h),v=t(4),O=t(10),j=t(59),y=t(8),w=t(13),x=t(822),E=t(78),k=t(148),B=t.n(k),R=v.d.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]))),C=v.d.div(o||(o=Object(p.a)(["\n  background: rgba(243, 190, 30, 0.1);\n  position: relative;\n  padding: 1rem;\n  border: 0.5px solid #f3be1e;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-row-gap: 10px;\n"]))),T=v.d.div(a||(a=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-items: flex-start;\n  & > * {\n    margin-right: 6px;\n  }\n"]))),L=Object(v.d)(E.a)(i||(i=Object(p.a)(["\n  color: #aeaeae;\n"]))),N=v.d.div(c||(c=Object(p.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  & > * {\n    height: 14px;\n    width: 14px;\n  }\n"]))),M=v.d.button(l||(l=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]))),S=v.d.img(u||(u=Object(p.a)(["\n  height: 18px;\n  width: 18px;\n"]))),z=Object(v.e)(s||(s=Object(p.a)(["\n  from {\n    opacity : 0;\n  }\n\n  to {\n    opacity : 1;\n  }\n"]))),P=Object(v.d)(R)(d||(d=Object(p.a)(["\n  position: absolute;\n  width: 228px;\n  right: 110px;\n  top: 4px;\n  z-index: 10;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 8px;\n  animation: "," 0.15s linear;\n  color: ",";\n  font-style: italic;\n\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n\n  ","\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.mercuryGray}),z,(function(e){return e.theme.textColor}),(function(e){return e.theme.mediaWidth.upToSmall(f||(f=Object(p.a)(["\n    left: 2px;\n    top: 50px;\n  "])))})),A=v.d.div(m||(m=Object(p.a)(["\n  color: ",";\n"])),(function(e){return e.theme.textColor}));n.a=function(e){var n=e.onDismiss,t=e.urlAddedTokens,r=e.currency,o=Object(h.useState)(),a=Object(b.a)(o,2),i=a[0],c=a[1],l=Object(O.k)().chainId,u=Object(j.d)(r),s=u.symbol,d=u.name,f=t.hasOwnProperty(r);return g.a.createElement(C,null,g.a.createElement(N,{onClick:function(){return n()}},g.a.createElement(L,{alt:"close icon"})),g.a.createElement(T,{style:{fontSize:"12px"}},g.a.createElement(A,null,f?"Token imported by URL ":"Token imported by user"),g.a.createElement(M,{onClick:function(){c(!i)},onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)}},g.a.createElement(S,{src:B.a,alt:"popup"})),i?g.a.createElement(P,null,g.a.createElement(A,null,"The Uniswap smart contracts are designed to support any ERC20 token on Ethereum. Any token can be loaded into the interface by entering its Ethereum address into the search field or passing it as a URL parameter. Be careful when interacting with imported tokens as they have not been verified.")):""),g.a.createElement(T,null,g.a.createElement(x.a,{address:r}),g.a.createElement("div",{style:{fontWeight:500}},d&&s?d+" ("+s+")":""),g.a.createElement(w.d,{style:{fontWeight:400},href:Object(y.j)(l,r,"address")},"(View on Etherscan)")),g.a.createElement(T,{style:{fontSize:"12px",fontStyle:"italic"}},g.a.createElement(A,null,"Please verify the legitimacy of this token before making any transactions.")))}},696:function(e,n,t){"use strict";t.d(n,"a",(function(){return Mn}));var r,o=t(1),a=t(16),i=t.n(a),c=t(28),l=t(7),u=t(3),s=t(0),d=t.n(s),f=t(76),m=t(40),b=t(17),p=t(24),h=t(4),g=t(1167),v=t.n(g),O=t(11),j=0,y=function(){var e=Object(s.useState)(null),n=e[0],t=e[1];return Object(s.useEffect)((function(){return t(++j)}),[]),n},w=t(54),x=t(103),E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute"},B=function(e){return d.a.createElement("div",E({style:k},e))},R=t(65),C=["bottom","height","left","right","top","width"],T=new Map,L=function e(){var n=[];T.forEach((function(e,t){var r,o,a=t.getBoundingClientRect();r=a,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),C.some((function(e){return r[e]!==o[e]}))&&(e.rect=a,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),r=window.requestAnimationFrame(e)};var N=function(e,n){return{observe:function(){var t=0===T.size;T.has(e)?T.get(e).callbacks.push(n):T.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&L()},unobserve:function(){var t=T.get(e);if(t){var o=t.callbacks.indexOf(n);o>=0&&t.callbacks.splice(o,1),t.callbacks.length||T.delete(e),T.size||cancelAnimationFrame(r)}}}},M=(t(2),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}),S=function(e){var n=e.refs;return(0,e.props.children)({ref:function(e){return n.node=e},rect:e.state.rect})},z=function(e){var n=e.setState,t=e.refs,r=e.props;t.node?(t.observer=N(t.node,(function(e){r.onChange&&r.onChange(e),n({rect:e})})),r.observe&&t.observer.observe()):console.warn("You need to place the ref")},P=function(e){var n=e.refs,t=e.props,r=e.prevProps;t.observe&&!r.observe?n.observer.observe():!t.observe&&r.observe&&n.observer.unobserve()},A=function(e){e.refs.observer.unobserve()},W=function(e){return d.a.createElement(R.a,M({},e,{refs:{node:void 0,observer:void 0},initialState:{rect:void 0},didMount:z,didUpdate:P,willUnmount:A,render:S}))};function G(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(s.useState)(null),r=t[0],o=t[1],a=Object(s.useRef)(null);return Object(s.useLayoutEffect)((function(){return a.current||(a.current=N(e.current,o)),n&&a.current.observe(),function(){return a.current.unobserve()}}),[n]),r}W.defaultProps={observe:!0};var D,U=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function V(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var F="idle",H="focused",Y="visible",I={initial:F,states:(D={},D[F]={enter:Q,on:{mouseenter:H,focus:Y}},D[H]={enter:function(){clearTimeout(Z),Z=setTimeout((function(){return $("rest")}),100)},leave:function(){clearTimeout(Z)},on:{mousemove:H,mouseleave:F,mousedown:"dismissed",blur:F,rest:Y}},D[Y]={on:{focus:H,mouseenter:H,mouseleave:"leavingVisible",blur:"leavingVisible",mousedown:"dismissed",selectWithKeyboard:"dismissed",globalMouseMove:"leavingVisible"}},D.leavingVisible={enter:function(){clearTimeout(q),q=setTimeout((function(){return $("timecomplete")}),500)},leave:function(){clearTimeout(q),Q()},on:{mouseenter:Y,focus:Y,timecomplete:F}},D.dismissed={leave:function(){_.id=null},on:{mouseleave:F,blur:F}},D)},_={id:null},K=I.initial;function $(e,n){var t=I.states[K],r=t.on[e];if(!r)throw new Error('Unknown state for action "'+e+'" from state "'+K+'"');t.leave&&t.leave(),n&&(_=n);var o=I.states[r];o.enter&&o.enter(),K=r,X.forEach((function(e){return e(K,_)}))}var X=[];function J(e){return X.push(e),function(){X.splice(X.indexOf(e),1)}}var Z=void 0;var q=void 0;function Q(){_.id=null}function ee(e){var n=e.children,t=e.label,r=e.ariaLabel,o=e.DEBUG_STYLE,a=V(e,["children","label","ariaLabel","DEBUG_STYLE"]),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onMouseEnter,t=e.onMouseMove,r=e.onMouseLeave,o=e.onFocus,a=(e.onBlur,e.onKeyDown),i=e.onMouseDown,c=e.ref,l=e.DEBUG_STYLE,u="tooltip:"+y(),d=Object(s.useState)(!!l||_.id===u&&K===Y),f=d[0],m=d[1],b=c||Object(s.useRef)(),p=G(b,f);Object(s.useEffect)((function(){return J((function(){_.id!==u||K!==Y&&"leavingVisible"!==K?m(!1):m(!0)}))}),[u]),Object(s.useEffect)((function(){return Object(w.b)("tooltip")}));var h=function(){switch(K){case F:case Y:case"leavingVisible":$("mouseenter",{id:u})}},g=function(){switch(K){case H:$("mousemove",{id:u})}},v=function(e){if(!window.__REACH_DISABLE_TOOLTIPS)switch(K){case F:case Y:case"leavingVisible":$("focus",{id:u})}},O=function(){switch(K){case H:case Y:case"dismissed":$("mouseleave")}},j=function(){if(_.id===u)switch(K){case H:case Y:case"dismissed":$("blur")}},x=function(){if(_.id===u)switch(K){case H:case Y:$("mousedown")}},E=function(e){if("Enter"===e.key||" "===e.key)switch(K){case Y:$("selectWithKeyboard")}},k={"aria-describedby":u,"data-reach-tooltip-trigger":"",ref:b,onMouseEnter:Object(w.c)(n,h),onMouseMove:Object(w.c)(t,g),onFocus:Object(w.c)(o,v),onBlur:Object(w.c)(o,j),onMouseLeave:Object(w.c)(r,O),onKeyDown:Object(w.c)(a,E),onMouseDown:Object(w.c)(i,x)},B={id:u,triggerRect:p,isVisible:f};return[k,B,f]}({DEBUG_STYLE:o}),c=i[0],l=i[1];return d.a.createElement(s.Fragment,null,Object(s.cloneElement)(s.Children.only(n),c),d.a.createElement(te,U({label:t,ariaLabel:r},l,a)))}var ne,te=Object(s.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,o=e.position,a=e.isVisible,i=e.id,c=e.triggerRect,l=V(e,["label","ariaLabel","position","isVisible","id","triggerRect"]);return a?d.a.createElement(x.a,null,d.a.createElement(re,U({label:t,ariaLabel:r,position:o,isVisible:a,id:i,triggerRect:c,ref:n},l))):null})),re=Object(s.forwardRef)((function(e,n){var t=e.label,r=e.ariaLabel,o=e.position,a=void 0===o?ae:o,i=e.isVisible,c=e.id,l=e.triggerRect,u=e.style,f=V(e,["label","ariaLabel","position","isVisible","id","triggerRect","style"]),m=null!=r,b=Object(s.useRef)(),p=G(b,i);return d.a.createElement(s.Fragment,null,d.a.createElement("div",U({"data-reach-tooltip":!0,role:m?void 0:"tooltip",id:m?void 0:c,children:t,style:U({},u,oe(a,l,p)),ref:function(e){b.current=e,n&&n(e)}},f)),m&&d.a.createElement(B,{role:"tooltip",id:c},r))})),oe=function(e,n,t){return!t?{visibility:"hidden"}:e(n,t)},ae=function(e,n){var t={left:e.left+window.pageXOffset+"px",top:e.top+e.height+window.pageYOffset+"px"},r={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width,bottom:window.innerHeight<e.bottom+n.height+8,left:e.left-n.width<0},o=r.bottom&&!r.top;return U({},t,{left:r.right&&!r.left?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px",top:o?e.top-8-n.height+window.pageYOffset+"px":e.top+8+e.height+window.pageYOffset+"px"})},ie=(t(1168),t(30)),ce=t(13),le=t(10),ue=t(8),se=["svgRef","title"];function de(){return(de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function fe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var me,be,pe,he,ge,ve,Oe,je,ye,we,xe,Ee,ke,Be,Re,Ce,Te,Le,Ne,Me,Se,ze,Pe,Ae,We,Ge,De,Ue,Ve,Fe,He=function(e){var n=e.svgRef,t=e.title,r=fe(e,se);return d.a.createElement("svg",de({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?d.a.createElement("title",null,t):null,ne||(ne=d.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#AEAEAE"})))},Ye=d.a.forwardRef((function(e,n){return d.a.createElement(He,de({svgRef:n},e))})),Ie=(t.p,t(96)),_e=t(822),Ke=t(152),$e=t.n(Ke),Xe=t(60),Je=t(59),Ze=t(55),qe=t(78),Qe=t(151),en=t.n(Qe),nn=b.ethers.utils.bigNumberify(1e3),tn=h.d.button(me||(me=Object(u.a)(["\n  ","\n  padding: 4px 50px 4px 15px;\n  margin-right: -40px;\n  line-height: 0;\n  height: 2rem;\n  align-items: center;\n  border-radius: 2.5rem;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  background: ",";\n  border: 1px solid ",";\n  color: ",";\n"])),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.zumthorBlue}),(function(e){return e.theme.royalBlue}),(function(e){return e.theme.royalBlue})),rn=h.d.div(be||(be=Object(u.a)(["\n  ","\n  align-items: center;\n\n  padding: 0.25rem 0.85rem 0.75rem;\n"])),(function(e){return e.theme.flexRowNoWrap})),on=Object(h.d)(ce.a)(pe||(pe=Object(u.a)(["\n  font-size: 1.5rem;\n  color: ",";\n  background-color: ",";\n  -moz-appearance: textfield;\n"])),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){return e.theme.inputBackground})),an=Object(h.d)(ce.a)(he||(he=Object(u.a)(["\n  min-height: 2.5rem;\n  flex-shrink: 0;\n  text-align: left;\n  padding-left: 1.6rem;\n  background-color: ",";\n"])),(function(e){return e.theme.concreteGray})),cn=h.d.button(ge||(ge=Object(u.a)(["\n  align-items: center;\n  font-size: 1rem;\n  color: ",";\n  height: 2rem;\n  border: 1px solid ",";\n  border-radius: 2.5rem;\n  background-color: ",";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n\n  :hover {\n    border: 1px solid\n      ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  :active {\n    background-color: ",";\n  }\n"])),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.mercuryGray:t.royalBlue}),(function(e){var n=e.selected,t=e.theme;return n?t.concreteGray:t.zumthorBlue}),(function(e){var n=e.selected,t=e.theme;return n?Object(O.a)(.1,t.mercuryGray):Object(O.a)(.1,t.royalBlue)}),(function(e){var n=e.theme;return Object(O.a)(.1,n.royalBlue)}),(function(e){return e.theme.zumthorBlue})),ln=h.d.span(ve||(ve=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),un=Object(h.d)(Ye)(Oe||(Oe=Object(u.a)(["\n  margin: 0 0.5rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ",";\n  }\n"])),(function(e){var n=e.selected,t=e.theme;return n?t.textColor:t.royalBlue})),sn=h.d.div(je||(je=Object(u.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(O.c)(.95,n.shadowColor)}),(function(e){return e.theme.inputBackground})),dn=h.d.div(ye||(ye=Object(u.a)(["\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n  :focus-within {\n    border: 1px solid ",";\n  }\n"])),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.malibuBlue})),fn=h.d.div(we||(we=Object(u.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray}),(function(e){var n=e.theme;return Object(O.a)(.2,n.doveGray)})),mn=h.d.div(xe||(xe=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),bn=h.d.span(Ee||(Ee=Object(u.a)(["\n  color: ",";\n  :hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed}),(function(e){var n=e.error,t=e.theme;return n&&Object(O.a)(.1,t.salmonRed)})),pn=h.d.div(ke||(ke=Object(u.a)(["\n  ","\n  width: 100%;\n"])),(function(e){return e.theme.flexColumnNoWrap})),hn=h.d.div(Be||(Be=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 0px 0px 1rem;\n  height: 60px;\n"]))),gn=Object(h.d)(qe.a)(Re||(Re=Object(u.a)(["\n  path {\n    stroke: ",";\n  }\n"])),(function(e){return e.theme.textColor})),vn=h.d.div(Ce||(Ce=Object(u.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),On=h.d.div(Te||(Te=Object(u.a)(["\n  ","\n  justify-content: flex-start;\n  padding: 0.5rem 1.5rem;\n  background-color: ",";\n"])),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.concreteGray})),jn=h.d.div(Le||(Le=Object(u.a)(["\n  ","\n  align-items: center;\n  padding: 1rem 1.5rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  user-select: none;\n"])),(function(e){return e.theme.flexRowNoWrap})),yn=h.d.div(Ne||(Ne=Object(u.a)(["\n  flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n"]))),wn=h.d.div(Me||(Me=Object(u.a)(["\n  ","\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  cursor: pointer;\n  user-select: none;\n\n  #symbol {\n    color: ",";\n  }\n\n  :hover {\n    background-color: ",";\n  }\n\n  ","\n"])),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGrey}),(function(e){return e.theme.tokenRowHover}),(function(e){return e.theme.mediaWidth.upToMedium(Se||(Se=Object(u.a)(["\n    padding: 0.8rem 1rem;\n    padding-right: 2rem;\n  "])))})),xn=h.d.div(ze||(ze=Object(u.a)(["\n  ","\n  align-items : center;\n"])),(function(e){return e.theme.flexRowNoWrap})),En=h.d.div(Pe||(Pe=Object(u.a)(["\n  ",";\n  margin-left: 1rem;\n"])),(function(e){return e.theme.flexColumnNoWrap})),kn=h.d.div(Ae||(Ae=Object(u.a)(["\n  color: ",";\n"])),(function(e){return e.theme.chaliceGray})),Bn=h.d.span(We||(We=Object(u.a)(["\n  color: ",";\n"])),(function(e){return e.theme.royalBlue})),Rn=h.d.div(Ge||(Ge=Object(u.a)(["\n  font-size: 1rem;\n  line-height: 20px;\n"]))),Cn=h.d.div(De||(De=Object(u.a)(["\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: ",";\n"])),(function(e){return e.theme.chaliceGray})),Tn=h.d.div(Ue||(Ue=Object(u.a)(["\n  ",";\n  align-items: flex-end;\n"])),(function(e){return e.theme.flexColumnNoWrap})),Ln=h.d.span(Ve||(Ve=Object(u.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n"]))),Nn=Object(h.d)(ce.e)(Fe||(Fe=Object(u.a)(["\n  margin: 0 0.25rem 0 0.25rem;\n  color: ",";\n  opacity: 0.6;\n"])),(function(e){return e.theme.chaliceGray}));function Mn(e){var n=e.onValueChange,t=void 0===n?function(){}:n,r=e.allBalances,o=e.renderInput,a=e.onCurrencySelected,u=void 0===a?function(){}:a,f=e.title,p=e.description,h=e.extraText,g=e.extraTextClickHander,v=void 0===g?function(){}:g,O=e.errorMessage,j=e.disableUnlock,y=e.disableTokenSelect,w=e.selectedTokenAddress,x=void 0===w?"":w,E=e.showUnlock,k=e.value,B=e.urlAddedTokens,R=e.hideETH,C=void 0!==R&&R,T=Object(m.b)().t,L=Object(s.useState)(!1),N=Object(l.a)(L,2),M=N[0],S=N[1],z=Object(le.j)(x),P=Object(Je.d)(x).exchangeAddress,A=Object(Xe.d)(x),W=Object(Xe.e)(),G=Object(Je.c)(),D=Object(le.k)().account,U=Object(Ze.c)(D,x);return d.a.createElement(sn,null,d.a.createElement(dn,{error:!!O},d.a.createElement(fn,null,d.a.createElement(mn,null,d.a.createElement("span",null,f)," ",d.a.createElement("span",null,p)),d.a.createElement(bn,{"data-tip":"Enter max",error:!!O,onClick:function(){v()}},d.a.createElement(ee,{label:"Enter Max",style:{background:"hsla(0, 0%, 0%, 0.75)",color:"white",border:"none",borderRadius:"24px",padding:"0.5em 1em",marginTop:"-64px"}},d.a.createElement("span",null,h)))),"function"===typeof o?o():d.a.createElement(rn,null,d.a.createElement(on,{type:"number",min:"0",step:"0.000000000000000001",error:!!O,placeholder:"0.0",onChange:function(e){return t(e.target.value)},onKeyPress:function(e){45===(e.which?e.which:e.keyCode)&&(e.preventDefault(),e.stopPropagation())},value:k}),!j&&E&&"BNB"!==x&&x?A?d.a.createElement(tn,null,T("pending")):d.a.createElement(tn,{onClick:Object(c.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,z.estimate.approve(P,b.ethers.constants.MaxUint256).catch((function(e){console.log("Error setting max token approval.")}));case 3:if(n=e.sent){e.next=9;break}return e.next=7,z.estimate.approve(P,U);case 7:n=e.sent,t=!0;case 9:z.approve(P,t?U:b.ethers.constants.MaxUint256,{gasLimit:Object(ue.b)(n,nn)}).then((function(e){W(e,{approval:x})}));case 10:case"end":return e.stop()}}),e)})))},T("unlock")):null,d.a.createElement(cn,{selected:!!x,onClick:function(){y||S(!0)}},d.a.createElement(ln,null,x?d.a.createElement(_e.a,{address:x}):null,d.a.createElement(Ln,null,G[x]&&G[x].symbol||T("selectToken")),!y&&d.a.createElement(un,{selected:!!x}))))),!y&&d.a.createElement(Sn,{isOpen:M,onDismiss:function(){S(!1)},urlAddedTokens:B,onTokenSelect:u,allBalances:r,hideETH:C}))}function Sn(e){var n=e.isOpen,t=e.onDismiss,r=e.onTokenSelect,a=e.urlAddedTokens,i=e.hideETH,c=Object(m.b)().t,u=Object(s.useState)(""),h=Object(l.a)(u,2),g=h[0],O=h[1],j=Object(Je.d)(g).exchangeAddress,y=Object(Je.c)(),w=Object(le.k)(),x=w.account,E=w.chainId,k=Object(Ze.e)(),B=Object(Ze.d)(),R=Object.keys(y).map((function(e){if(k&&B[x]&&B[x][e]&&B[x][e].value){var n=1,t=B[y[e].exchangeAddress];if(t&&t[e]&&t[e].value&&t.BNB&&t.BNB.value){var r=new p.BigNumber(t[e].value);n=new p.BigNumber(t.BNB.value).times(new p.BigNumber(10).pow(y[e].decimals)).div(r).div(new p.BigNumber(10).pow(18))}var o=k.times(n);return new p.BigNumber(B[x][e].value).times(o).div(new p.BigNumber(10).pow(y[e].decimals))}return null})),C=R&&Object.keys(y).reduce((function(e,n,t){return Object.assign(Object(o.a)({},n,R[t]),e)}),{}),T=Object(s.useMemo)((function(){return Object.keys(y).sort((function(e,n){if(y[e].symbol&&y[n].symbol){var t=y[e].symbol.toLowerCase(),r=y[n].symbol.toLowerCase();if(t==="BNB".toLowerCase()||r==="BNB".toLowerCase())return t===r?0:t==="BNB".toLowerCase()?-1:1;if(C[e]&&!C[n])return-1;if(C[n]&&!C[e])return 1;if(C[e]&&C[n]){var o=C[e],a=C[n];return o.gt(a)?-1:o.lt(a)?1:0}return t<r?-1:t>r?1:0}return 0})).map((function(e){var n,t;return"BNB"===e&&B[x]&&B[x][e]&&B[x][e].value?(n=Object(ue.d)(b.ethers.utils.bigNumberify(B[x][e].value)),t=C[e]):B[x]&&B[x][e]&&B[x][e].value&&(n=Object(ue.f)(b.ethers.utils.bigNumberify(B[x][e].value),y[e].decimals),t=C[e]),{name:y[e].name,symbol:y[e].symbol,address:e,balance:n,usdBalance:t}}))}),[B,y,C,x]),L=Object(s.useMemo)((function(){var e=T.filter((function(e){var n="0x"===g.slice(0,2);return Object.keys(e).map((function(t){return"address"===t?n&&"string"===typeof e[t]&&!!e[t].match(new RegExp(v()(g),"i")):"string"===typeof e[t]&&!!e[t].match(new RegExp(v()(g),"i"))})).some((function(e){return e}))}));return""===g?e:e.sort((function(e,n){return e.symbol.toLowerCase()===g.toLowerCase()?-1:1}))}),[T,g]);var N=Object(s.useRef)();function M(){O(""),t()}return d.a.createElement(Ie.a,{isOpen:n,onDismiss:M,minHeight:60,maxHeight:50,initialFocusRef:ie.isMobile?void 0:N},d.a.createElement(pn,null,d.a.createElement(hn,null,d.a.createElement("p",null,c("selectToken")),d.a.createElement(vn,{onClick:M},d.a.createElement(gn,{alt:"close icon"}))),d.a.createElement(On,null,d.a.createElement("img",{src:$e.a,alt:"search"}),d.a.createElement(an,{ref:N,type:"text",placeholder:ie.isMobile?c("searchOrPasteMobile"):c("searchOrPaste"),onChange:function(e){var n=e.target.value,t=Object(ue.t)(n);O(t||n)}})),d.a.createElement(yn,null,Object(ue.t)(g)&&void 0===j?d.a.createElement(jn,null,"Searching for Exchange..."):Object(ue.t)(g)&&j===b.ethers.constants.AddressZero?d.a.createElement(d.a.Fragment,null,d.a.createElement(jn,null,c("noExchange")),d.a.createElement(jn,null,d.a.createElement(f.b,{to:"/create-exchange/".concat(g)},c("createExchange")))):L.length?L.map((function(e){var n=e.address,o=e.symbol,c=e.name,l=e.balance,u=e.usdBalance,s=a&&a.hasOwnProperty(n),f="BNB"!==n&&Je.a[E]&&!Je.a[E].hasOwnProperty(n)&&!s;return i&&"BNB"===n?null:d.a.createElement(wn,{key:n,onClick:function(){return function(e){O(""),r(e),t()}(n)}},d.a.createElement(xn,null,d.a.createElement(_e.a,{address:n,size:"2rem"}),d.a.createElement(En,null,d.a.createElement("div",null,d.a.createElement("span",{id:"symbol"},o),d.a.createElement(Bn,null,s&&"(Added by URL)"," ",f&&"(Added by user)")),d.a.createElement(kn,null," ",c))),d.a.createElement(Tn,null,l?d.a.createElement(Rn,null,l&&(l>0||"<0.0001"===l)?l:"-"):x?d.a.createElement(Nn,{src:en.a,alt:"loader"}):"-",d.a.createElement(Cn,null,u&&!u.isNaN()?u.isZero()?"":u.lt(.01)?"<$0.01":"$"+Object(ue.e)(u):"")))})):d.a.createElement(jn,null,c("noExchange")))))}},822:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var r,o=t(7),a=t(80),i=t(3),c=t(0),l=t.n(c),u=t(4),s=t(8),d=["svgRef","title"];function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b,p,h,g=function(e){var n=e.svgRef,t=e.title,o=m(e,d);return l.a.createElement("svg",f({width:"256px",height:"417px",viewBox:"0 0 256 417",preserveAspectRatio:"xMidYMid",ref:n},o),t?l.a.createElement("title",null,t):null,r||(r=l.a.createElement("g",null,l.a.createElement("polygon",{fill:"#343434",points:"127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"}),l.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 0 0 212.32 127.962 287.959 127.962 154.158"}),l.a.createElement("polygon",{fill:"#3C3C3B",points:"127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"}),l.a.createElement("polygon",{fill:"#8C8C8C",points:"127.962 416.9052 127.962 312.1852 0 236.5852"}),l.a.createElement("polygon",{fill:"#141414",points:"127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"}),l.a.createElement("polygon",{fill:"#393939",points:"0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"}))))},v=l.a.forwardRef((function(e,n){return l.a.createElement(g,f({svgRef:n},e))})),O=(t.p,["address","size"]),j={},y=u.d.img(b||(b=Object(i.a)(["\n  width: ",";\n  height: ",";\n  background-color: white;\n  border-radius: 1rem;\n"])),(function(e){return e.size}),(function(e){return e.size})),w=u.d.span(p||(p=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ",";\n  height: ",";\n"])),(function(e){return e.size}),(function(e){return e.size})),x=Object(u.d)(v)(h||(h=Object(i.a)(["\n  width: ",";\n  height: ",";\n"])),(function(e){return e.size}),(function(e){return e.size}));function E(e){var n=e.address,t=e.size,r=void 0===t?"1rem":t,i=Object(a.a)(e,O),u=Object(c.useState)(!1),d=Object(o.a)(u,2),f=d[0],m=d[1],b="";return"BNB"===n?l.a.createElement(x,{size:r}):f||j[n]?l.a.createElement(w,Object.assign({},i,{size:r}),l.a.createElement("span",{role:"img","aria-label":"Thinking"},"\ud83e\udd14")):(b=function(e){return"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(Object(s.t)(e),"/logo.png")}(n.toLowerCase()),l.a.createElement(y,Object.assign({},i,{alt:n,src:b,size:r,onError:function(){j[n]=!0,m(!0)}})))}}}]);
//# sourceMappingURL=0.76d19a53.chunk.js.map