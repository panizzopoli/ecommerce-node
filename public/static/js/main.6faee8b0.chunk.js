(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,r){e.exports=r(265)},140:function(e,t,r){},142:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},143:function(e,t,r){},265:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(25),i=r.n(c),s=(r(140),r(16)),u=r.n(s),o=r(26),l=r(54),f=r(111),m=r(112),p=r(124),d=r(125),h=(r(142),r(143),r(270)),v=r(273),y=r(271),b=r(274),k=r(32),x=function(e){return n.a.createElement(v.a,null,n.a.createElement(v.a.Image,{size:"tiny",src:"https://react.semantic-ui.com/images/wireframe/image.png"}),n.a.createElement(v.a.Content,null,n.a.createElement(v.a.Header,{as:"a"},e.name),n.a.createElement(v.a.Meta,null,"Availbility: ",e.available_quantity),n.a.createElement(v.a.Description,null,n.a.createElement("p",null,"Price: ",e.price,"$"),n.a.createElement("p",null,"Quantity: ",e.qty))),n.a.createElement(v.a.Extra,null,n.a.createElement(b.a,{icon:!0,floated:"right",onClick:function(){e.addOneArticle()}},n.a.createElement(k.a,{name:"plus square"})),n.a.createElement(b.a,{icon:!0,floated:"right",onClick:function(){e.removeArticle()}},n.a.createElement(k.a,{name:"remove circle"}))))},E=function(e){var t=e.items?function(e){var t=0;return Array.isArray(e)&&(t=e.reduce((function(e,t){return e+(t.price||0)*(t.qty||0)}),0)),t}(e.items):0,r=Array.isArray(e.items)?e.items.map((function(t){return n.a.createElement(x,{name:t.name,available_quantity:t.available_quantity,price:t.price,qty:t.qty,removeArticle:function(){e.removeArticleFromCart(t.article_id)},addOneArticle:function(){e.addOneArticleToCart(t.article_id)}})})):[];return n.a.createElement("div",null,n.a.createElement(h.a,null,n.a.createElement(v.a.Group,{divided:!0},r)),n.a.createElement(y.a,null),n.a.createElement(h.a,null,n.a.createElement("p",null,"Total Amount is $ ",t),n.a.createElement(b.a,{onClick:function(){return e.checkOut()}},"Checkout")))},O=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(f.a)(this,r),(a=t.call(this,e)).removeArticleFromCart=function(e){if(a.state.cart&&a.state.cart.articles&&e){var t=a.state.cart,r=t.articles;if(Array.isArray(r)){var n=r.filter((function(t){return t.article_id!==e}));t.articles=n,a.setState({cart:t})}}},a.addOneArticleToCart=function(e){if(a.state.cart&&a.state.cart.articles&&e){var t=a.state.cart.articles,r=t.findIndex((function(t){return t.article_id===e}));if(-1!==r){var n=t[r];n.qty=t[r].qty+1,t[r]=n,a.setState({cart:Object(l.a)({},a.state.cart,{articles:t})})}}},a.render=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Hello user ",a.state.userInfo&&a.state.userInfo.name||a.state.user_id),a.state.cart&&a.state.cart.articles&&a.state.cart.articles.length>0&&"pending"===a.state.cart.status?n.a.createElement(E,{items:a.state.cart&&a.state.cart.articles,addOneArticleToCart:a.addOneArticleToCart,removeArticleFromCart:a.removeArticleFromCart,checkOut:function(){return a.checkOut()}}):n.a.createElement("h2",null,"Your Cart is Empty"))},a.state={user_id:"5e4fde5d21146d12587ffd98"},a}return Object(m.a)(r,[{key:"getArticles",value:function(){var e=Object(o.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}return e.prev=2,e.next=5,fetch("/articles/".concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(o.a)(u.a.mark((function e(t){var r,a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t,!t||!t._id){e.next=17;break}return a=Array.isArray(t.articles)?t.articles.map((function(e){return{article_id:e.article_id,qty:e.qty}})):null,n={status:t.status,articles:a},e.prev=4,e.next=7,fetch("/orders/".concat(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return c=e.sent,e.next=10,c.json();case 10:return r=e.sent,e.abrupt("return",r);case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getOrdersPending",value:function(){var e=Object(o.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=14;break}return e.prev=2,e.next=5,fetch("/users/".concat(t,"/cart"));case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t,r,a,n,c,i,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.user_id){e.next=20;break}return e.next=3,fetch("/users/".concat(this.state.user_id));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,a={},e.next=10,this.getOrdersPending(this.state.user_id);case 10:if(!((n=e.sent).length>0)){e.next=19;break}if(!(a=n[0]).articles||!Array.isArray(a.articles)){e.next=19;break}return c=a.articles.map(function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getArticles(t.article_id);case 2:return r=e.sent,e.abrupt("return",Object(l.a)({},t,{},r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=17,Promise.all(c);case 17:i=e.sent,a.articles=i;case 19:this.setState({userInfo:r,cart:a});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkOut",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.cart){e.next=7;break}return t=this.state.cart,r=Object(l.a)({},t,{status:"sold"}),e.next=5,this.updateOrder(r);case 5:a=e.sent,this.setState({cart:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.6faee8b0.chunk.js.map