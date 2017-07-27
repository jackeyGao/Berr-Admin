webpackJsonp([49],{73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(77),o=r(a);t["default"]=o["default"],e.exports=t["default"]},76:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),l=n(2),u=r(l),s=i["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var e=this;this.props.duration&&(this.closeTimer=setTimeout(function(){e.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var e,t=this.props,n=t.prefixCls+"-notice",r=(e={},a(e,""+n,1),a(e,n+"-closable",t.closable),a(e,t.className,!!t.className),e);return i["default"].createElement("div",{className:(0,u["default"])(r),style:t.style},i["default"].createElement("div",{className:n+"-content"},t.children),t.closable?i["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},i["default"].createElement("span",{className:n+"-close-x"})):null)}});t["default"]=s,e.exports=t["default"]},77:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return"rcNotification_"+b+"_"+T++}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),s=r(u),c=n(8),f=r(c),d=n(21),p=r(d),m=n(79),y=r(m),v=n(2),g=r(v),h=n(76),C=r(h),T=0,b=Date.now(),E=s["default"].createClass({displayName:"Notification",propTypes:{prefixCls:u.PropTypes.string,transitionName:u.PropTypes.string,animation:u.PropTypes.oneOfType([u.PropTypes.string,u.PropTypes.object]),style:u.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t},add:function(e){var t=e.key=e.key||i();this.setState(function(n){var r=n.notices;if(!r.filter(function(e){return e.key===t}).length)return{notices:r.concat(e)}})},remove:function(e){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},render:function(){var e,t=this,n=this.props,r=this.state.notices.map(function(e){var r=(0,y["default"])(t.remove.bind(t,e.key),e.onClose);return s["default"].createElement(C["default"],l({prefixCls:n.prefixCls},e,{onClose:r}),e.content)}),a=(e={},o(e,n.prefixCls,1),o(e,n.className,!!n.className),e);return s["default"].createElement("div",{className:(0,g["default"])(a),style:n.style},s["default"].createElement(p["default"],{transitionName:this.getTransitionName()},r))}});E.newInstance=function(e){var t=e||{},n=t.getContainer,r=a(t,["getContainer"]),o=void 0;n?o=n():(o=document.createElement("div"),document.body.appendChild(o));var i=f["default"].render(s["default"].createElement(E,r),o);return{notice:function(e){i.add(e)},removeNotice:function(e){i.remove(e)},component:i,destroy:function(){f["default"].unmountComponentAtNode(o),document.body.removeChild(o)}}},t["default"]=E,e.exports=t["default"]},79:function(e,t){"use strict";function n(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},84:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return m=m||s["default"].newInstance({prefixCls:v,transitionName:"move-up",style:{top:p}})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=arguments[2],r=arguments[3],o={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[n],i=a();return i.notice({key:y,duration:t,style:{},content:l["default"].createElement("div",{className:v+"-custom-content "+v+"-"+n},l["default"].createElement(f["default"],{type:o}),l["default"].createElement("span",null,e)),onClose:r}),function(){var e=y++;return function(){i.removeNotice(e)}}()}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=r(i),u=n(73),s=r(u),c=n(14),f=r(c),d=1.5,p=void 0,m=void 0,y=1,v="ant-message";t["default"]={info:function(e,t,n){return o(e,t,"info",n)},success:function(e,t,n){return o(e,t,"success",n)},error:function(e,t,n){return o(e,t,"error",n)},warn:function(e,t,n){return o(e,t,"warning",n)},warning:function(e,t,n){return o(e,t,"warning",n)},loading:function(e,t,n){return o(e,t,"loading",n)},config:function(e){void 0!==e.top&&(p=e.top,m=null),void 0!==e.duration&&(d=e.duration),void 0!==e.prefixCls&&(v=e.prefixCls)},destroy:function(){m&&(m.destroy(),m=null)}},e.exports=t["default"]},85:[1791,88],88:10,1115:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=(n(27),n(25)),o=r(a),i=(n(31),n(28)),l=r(i),u=(n(39),n(38)),s=r(u),c=(n(26),n(22)),f=r(c),d=(n(85),n(84)),p=r(d),m=n(1),y=r(m);p["default"].config({top:61,duration:2});var v=function(){p["default"].info("This is a normal message")},g=function(){p["default"].success("This is a message of success")},h=function(){p["default"].success("This is a prompt message for success, and it will disappear in 10 seconds",10)},C=function(){var e=p["default"].loading("Action in progress..",0);setTimeout(e,2500)},T=function(){p["default"].error("This is a message of error")},b=function(){p["default"].warning("This is message of warning")},E=function(){return y["default"].createElement("div",null," ",y["default"].createElement(o["default"],{gutter:10},y["default"].createElement(l["default"],{xs:24,md:12,lg:12},y["default"].createElement(s["default"],{title:"Basic Message"},y["default"].createElement(f["default"],{type:"primary",onClick:v},"Display normal message")),y["default"].createElement(s["default"],{title:"Typed Message"},y["default"].createElement(f["default"],{onClick:g},"Success"),y["default"].createElement(f["default"],{onClick:T},"Error"),y["default"].createElement(f["default"],{onClick:b},"Warning"))),y["default"].createElement(l["default"],{xs:24,md:12,lg:12},y["default"].createElement(s["default"],{title:"Customize Duration"},y["default"].createElement(f["default"],{onClick:h},"Customized display duration")),y["default"].createElement(s["default"],{title:"Loading Message"},y["default"].createElement(f["default"],{onClick:C},"Display a loading indicator"))))," ")};t["default"]=E,e.exports=t["default"]}});