(this["webpackJsonpimage-slider"]=this["webpackJsonpimage-slider"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);a(9);var n=a(1),r=a.n(n),c=a(3),i=a.n(c),s=a(0),o=a(4),d=a(5),l=a(7),u=a(6);var h=r.a.memo((function(t){var e=t.image;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__image",src:e,alt:"hey"}))})),m=r.a.memo((function(t){var e=t.activeIndex,a=t.index,n=t.handlerCheckSlide;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return n(a)},className:e===a?"carousel__dot active":"carousel__dot"}))})),v=r.a.memo((function(t){var e=t.slides,a=t.activeIndex,n=t.handlerCheckSlide;return r.a.createElement("div",{className:"carousel__dots"},e.map((function(t,e){return r.a.createElement(m,{key:t,activeIndex:a,index:e,handlerCheckSlide:n})})))})),f=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).widthResize=function(){n.setState(Object(s.a)(Object(s.a)({},n.state),{},{widthCard:n.cardContainer.children[0].offsetWidth}),(function(){n.moveCard(0,n.state.widthCard*n.state.currentCard)}))},n.slideShow=function(t){t>0?n.handleNext():n.handlePrevios()},n.handleNext=function(){if(n.state.currentCard<n.cardContainer.children.length-1){var t=n.state.currentCard+1;n.setState(Object(s.a)(Object(s.a)({},n.state),{},{currentCard:t}),(function(){n.moveCard(.5,n.state.widthCard*n.state.currentCard),n.state.currentCard===n.cardContainer.children.length-1&&setTimeout((function(){n.setState(Object(s.a)(Object(s.a)({},n.state),{},{currentCard:1}),(function(){return n.moveCard(0,n.state.widthCard)}))}),502)}))}},n.handlePrevios=function(){if(n.state.currentCard>0){var t=n.state.currentCard-1;n.setState(Object(s.a)(Object(s.a)({},n.state),{},{currentCard:t}),(function(){n.moveCard(.5,n.state.widthCard*n.state.currentCard),0===n.state.currentCard&&setTimeout((function(){n.setState(Object(s.a)(Object(s.a)({},n.state),{},{currentCard:n.cardContainer.children.length-2}),(function(){return n.moveCard(0,n.state.widthCard*(n.cardContainer.children.length-2))}))}),502)}))}},n.handleAutorun=function(){n.state.timerId?(clearInterval(n.state.timerId),n.setState(Object(s.a)(Object(s.a)({},n.state),{},{timerId:null}))):n.setState(Object(s.a)(Object(s.a)({},n.state),{},{timerId:setInterval(n.handleNext,2e3)}))},n.checkSlide=function(t){n.setState({currentCard:t+1},(function(){n.moveCard(.5,n.state.widthCard*n.state.currentCard)}))},n.moveCard=function(t,e){n.cardContainer.style.transitionDuration="".concat(t,"s"),n.cardContainer.style.transform="translate(-".concat(e,"px)")},n.state={currentCard:1,widthCard:null,timerId:null,start:null,change:null},n.setCardContainer=function(t){n.cardContainer=t},n.setViewPort=function(t){n.viewPort=t},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.cardContainer.children[0].cloneNode(!0),a=this.cardContainer.children[this.cardContainer.children.length-1].cloneNode(!0),n=this.viewPort;n.addEventListener("dragstart",(function(e){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{start:e.clientX}))})),n.addEventListener("dragover",(function(e){e.preventDefault();var a=e.clientX;t.setState(Object(s.a)(Object(s.a)({},t.state),{},{change:t.state.start-a}))})),n.addEventListener("dragend",(function(){t.slideShow(t.state.change)})),n.addEventListener("touchstart",(function(e){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{start:e.touches[0].clientX}))})),n.addEventListener("touchmove",(function(e){e.preventDefault();var a=e.touches[0];t.setState(Object(s.a)(Object(s.a)({},t.state),{},{change:t.state.start-a.clientX}))})),n.addEventListener("touchend",(function(){t.slideShow(t.state.change)})),this.setState(Object(s.a)(Object(s.a)({},this.state),{},{widthCard:this.cardContainer.children[0].offsetWidth}),(function(){t.cardContainer.insertBefore(a,t.cardContainer.children[0]),t.cardContainer.append(e),t.moveCard(0,t.state.widthCard)})),window.addEventListener("resize",this.widthResize)}},{key:"componentWillUnmount",value:function(){var t=this,e=this.viewPort;e.removeEventListener("dragstart",(function(e){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{start:e.clientX}))})),e.removeEventListener("dragover",(function(e){e.preventDefault();var a=e.clientX;t.setState(Object(s.a)(Object(s.a)({},t.state),{},{change:t.state.start-a}))})),e.removeEventListener("dragend",(function(){t.slideShow(t.state.change)})),e.removeEventListener("touchstart",(function(e){t.setState(Object(s.a)(Object(s.a)({},t.state),{},{start:e.touches[0].clientX}))})),e.removeEventListener("touchmove",(function(e){e.preventDefault();var a=e.touches[0];t.setState(Object(s.a)(Object(s.a)({},t.state),{},{change:t.state.start-a.clientX}))})),e.removeEventListener("touchend",(function(){t.slideShow(t.state.change)})),window.removeEventListener("resize",this.widthResize)}},{key:"render",value:function(){return r.a.createElement("div",{className:"carousel"},r.a.createElement("div",{className:"carousel__controls"},r.a.createElement("button",{onClick:this.handlePrevios,className:"btn btn-info"},"Previous"),r.a.createElement("button",{onClick:this.handleNext,className:"btn btn-info"},"Next"),r.a.createElement("button",{onClick:this.handleAutorun,className:"btn btn-info"},this.state.timerId?"Stop":"Autorun")),r.a.createElement("div",{className:"carousel__view-port",ref:this.setViewPort},r.a.createElement("div",{ref:this.setCardContainer,className:"carousel__card-container"},this.props.images.map((function(t){return r.a.createElement(h,{image:t,key:t})})))),r.a.createElement(v,{slides:this.props.images,activeIndex:this.state.currentCard-1,handlerCheckSlide:this.checkSlide}))}}]),a}(n.PureComponent);var C=function(t){var e=t.images;return r.a.createElement("div",{className:"app"},r.a.createElement(f,{images:e}))};a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,{images:["http://picsum.photos/400/200","http://picsum.photos/350/200","http://picsum.photos/500/200","http://picsum.photos/600/200"]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1819e57c.chunk.js.map