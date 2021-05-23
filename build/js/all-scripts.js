!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("inputmask", ["inputmask.dependencyLib"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("./inputmask.dependencyLib"));
	} else {
		factory(window.dependencyLib || jQuery);
	}
}
(function ($) {
	var ua = navigator.userAgent,
		mobile = /mobile/i.test(ua),
		iemobile = /iemobile/i.test(ua),
		iphone = /iphone/i.test(ua) && !iemobile,
		android = /android/i.test(ua) && !iemobile;

	function Inputmask(alias, options) {
		//allow instanciating without new
		if (!(this instanceof Inputmask)) {
			return new Inputmask(alias, options);
		}

		if ($.isPlainObject(alias)) {
			options = alias;
		} else {
			options = options || {};
			options.alias = alias;
		}

		this.el = undefined;
		//init options
		this.opts = $.extend(true, {}, this.defaults, options);
		this.maskset = undefined;
		this.noMasksCache = options && options.definitions !== undefined;
		this.userOptions = options || {}; //user passed options
		this.events = {};
		this.dataAttribute = "data-inputmask"; //data attribute prefix used for attribute binding
		this.isRTL = this.opts.numericInput;
		resolveAlias(this.opts.alias, options, this.opts);
	}

	Inputmask.prototype = {
		//options default
		defaults: {
			placeholder: "_",
			optionalmarker: {
				start: "[",
				end: "]"
			},
			quantifiermarker: {
				start: "{",
				end: "}"
			},
			groupmarker: {
				start: "(",
				end: ")"
			},
			alternatormarker: "|",
			escapeChar: "\\",
			mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
			oncomplete: $.noop, //executes when the mask is complete
			onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
			oncleared: $.noop, //executes when the mask is cleared
			repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
			greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
			autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
			removeMaskOnSubmit: false, //remove the mask before submitting the form.
			clearMaskOnLostFocus: true,
			insertMode: true, //insert the input or overwrite the input
			clearIncomplete: false, //clear the incomplete input on blur
			aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
			alias: null,
			onKeyDown: $.noop, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
			onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
			onBeforePaste: function (pastedValue, opts) {
				return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
			}, //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
			onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
			onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
			showMaskOnFocus: true, //show the mask-placeholder when the input has focus
			showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
			onKeyValidation: $.noop, //executes on every key-press with the result of isValid. Params: key, result, opts
			skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
			numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
			rightAlign: false, //align to the right
			undoOnEscape: true, //pressing escape reverts the value to the value before focus
			//numeric basic properties
			radixPoint: "", //".", // | ","
			radixPointDefinitionSymbol: undefined, //set the radixPoint definitionSymbol ~ used for awareness of the radixpoint
			groupSeparator: "", //",", // | "."
			//numeric basic properties
			keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible - null see auto selection for multi masks
			positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
			tabThrough: false, //allows for tabbing through the different parts of the masked field
			supportsInputType: ["text", "tel", "password"], //list with the supported input types
			definitions: {
				"9": {
					validator: "[0-9]",
					cardinality: 1,
					definitionSymbol: "*"
				},
				"a": {
					validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
					cardinality: 1,
					definitionSymbol: "*"
				},
				"*": {
					validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
					cardinality: 1
				}
			},
			//specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
			ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
			isComplete: null, //override for isComplete - args => buffer, opts - return true || false
			canClearPosition: $.noop, //hook to alter the clear behavior in the stripValidPositions args => maskset, position, lastValidPosition, opts => return true|false
			postValidation: null, //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, currentResult, opts => return true/false
			staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
			jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
			nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
			inputEventOnly: false, //dev option - testing inputfallback behavior
			noValuePatching: false, //dev option - disable value property patching
			positionCaretOnClick: "lvp", //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click)
			casing: null, //mask-level casing. Options: null, "upper", "lower" or "title"
			inputmode: "verbatim", //specify the inputmode  - already in place for when browsers will support it
			colorMask: false, //enable css styleable mask
			androidHack: false //see README_android.md
		},
		masksCache: {},
		mask: function (elems) {
			var that = this;

			function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
				var attrOptions = npt.getAttribute(dataAttribute),
					option, dataoptions, optionData, p;

				function importOption(option, optionData) {
					optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
					if (optionData !== null) {
						if (typeof optionData === "string") {
							if (option.indexOf("on") === 0) optionData = window[optionData]; //get function definition
							else if (optionData === "false") optionData = false;
							else if (optionData === "true") optionData = true;
						}
						userOptions[option] = optionData;
					}
				}

				if (attrOptions && attrOptions !== "") {
					attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
					dataoptions = JSON.parse("{" + attrOptions + "}");
				}

				//resolve aliases
				if (dataoptions) { //pickup alias from dataAttribute
					optionData = undefined;
					for (p in dataoptions) {
						if (p.toLowerCase() === "alias") {
							optionData = dataoptions[p];
							break;
						}
					}
				}
				importOption("alias", optionData); //pickup alias from dataAttribute-alias
				if (userOptions.alias) {
					resolveAlias(userOptions.alias, userOptions, opts);
				}

				for (option in opts) {
					if (dataoptions) {
						optionData = undefined;
						for (p in dataoptions) {
							if (p.toLowerCase() === option.toLowerCase()) {
								optionData = dataoptions[p];
								break;
							}
						}
					}
					importOption(option, optionData);
				}

				$.extend(true, opts, userOptions);
				return opts;
			}

			if (typeof elems === "string") {
				elems = document.getElementById(elems) || document.querySelectorAll(elems);
			}
			elems = elems.nodeName ? [elems] : elems;
			$.each(elems, function (ndx, el) {
				var scopedOpts = $.extend(true, {}, that.opts);
				importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute);
				var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
				if (maskset !== undefined) {
					if (el.inputmask !== undefined) {
						el.inputmask.remove();
					}
					//store inputmask instance on the input with element reference
					el.inputmask = new Inputmask();
					el.inputmask.opts = scopedOpts;
					el.inputmask.noMasksCache = that.noMasksCache;
					el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
					el.inputmask.el = el;
					el.inputmask.maskset = maskset;

					$.data(el, "_inputmask_opts", scopedOpts);

					maskScope.call(el.inputmask, {
						"action": "mask"
					});
				}
			});
			return elems && elems[0] ? (elems[0].inputmask || this) : this;
		},
		option: function (options, noremask) { //set extra options || retrieve value of a current option
			if (typeof options === "string") {
				return this.opts[options];
			} else if (typeof options === "object") {
				$.extend(this.userOptions, options); //user passed options
				//remask
				if (this.el && noremask !== true) {
					this.mask(this.el);
				}
				return this;
			}
		},
		unmaskedvalue: function (value) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "unmaskedvalue",
				"value": value
			});
		},
		remove: function () {
			return maskScope.call(this, {
				"action": "remove"
			});
		},
		getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "getemptymask"
			});
		},
		hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
			return !this.opts.autoUnmask;
		},
		isComplete: function () {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "isComplete"
			});
		},
		getmetadata: function () { //return mask metadata if exists
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "getmetadata"
			});
		},
		isValid: function (value) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "isValid",
				"value": value
			});
		},
		format: function (value, metadata) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "format",
				"value": value,
				"metadata": metadata //true/false getmetadata
			});
		},
		analyseMask: function (mask, opts) {
			var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
				escaped = false,
				currentToken = new MaskToken(),
				match,
				m,
				openenings = [],
				maskTokens = [],
				openingToken,
				currentOpeningToken,
				alternator,
				lastMatch,
				groupToken;

			function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
				this.matches = [];
				this.openGroup = isGroup || false;
				this.isGroup = isGroup || false;
				this.isOptional = isOptional || false;
				this.isQuantifier = isQuantifier || false;
				this.isAlternator = isAlternator || false;
				this.quantifier = {
					min: 1,
					max: 1
				};
			}

			//test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
			function insertTestDefinition(mtoken, element, position) {
				var maskdef = opts.definitions[element];
				position = position !== undefined ? position : mtoken.matches.length;
				var prevMatch = mtoken.matches[position - 1];
				if (maskdef && !escaped) {
					maskdef.placeholder = $.isFunction(maskdef.placeholder) ? maskdef.placeholder(opts) : maskdef.placeholder;
					var prevalidators = maskdef.prevalidator,
						prevalidatorsL = prevalidators ? prevalidators.length : 0;
					//handle prevalidators
					for (var i = 1; i < maskdef.cardinality; i++) {
						var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
							validator = prevalidator.validator,
							cardinality = prevalidator.cardinality;
						mtoken.matches.splice(position++, 0, {
							fn: validator ? typeof validator === "string" ? new RegExp(validator) : new function () {
								this.test = validator;
							} : new RegExp("."),
							cardinality: cardinality ? cardinality : 1,
							optionality: mtoken.isOptional,
							newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
							casing: maskdef.casing,
							def: maskdef.definitionSymbol || element,
							placeholder: maskdef.placeholder,
							nativeDef: element
						});
						prevMatch = mtoken.matches[position - 1];
					}
					mtoken.matches.splice(position++, 0, {
						fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator) : new function () {
							this.test = maskdef.validator;
						} : new RegExp("."),
						cardinality: maskdef.cardinality,
						optionality: mtoken.isOptional,
						newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
						casing: maskdef.casing,
						def: maskdef.definitionSymbol || element,
						placeholder: maskdef.placeholder,
						nativeDef: element
					});
				} else {
					mtoken.matches.splice(position++, 0, {
						fn: null,
						cardinality: 0,
						optionality: mtoken.isOptional,
						newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
						casing: null,
						def: opts.staticDefinitionSymbol || element,
						placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
						nativeDef: element
					});
					escaped = false;
				}
			}

			function verifyGroupMarker(maskToken) {
				if (maskToken && maskToken.matches) {
					$.each(maskToken.matches, function (ndx, token) {
							var nextToken = maskToken.matches[ndx + 1];
							if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) { //this is not a group but a normal mask => convert
								token.isGroup = false;
								insertTestDefinition(token, opts.groupmarker.start, 0);
								if (token.openGroup !== true) {
									insertTestDefinition(token, opts.groupmarker.end);
								}
							}
							verifyGroupMarker(token);
						}
					);
				}
			}

			function defaultCase() {
				if (openenings.length > 0) {
					currentOpeningToken = openenings[openenings.length - 1];
					insertTestDefinition(currentOpeningToken, m);
					if (currentOpeningToken.isAlternator) { //handle alternator a | b case
						alternator = openenings.pop();
						for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
							alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
						}
						if (openenings.length > 0) {
							currentOpeningToken = openenings[openenings.length - 1];
							currentOpeningToken.matches.push(alternator);
						} else {
							currentToken.matches.push(alternator);
						}
					}
				} else {
					insertTestDefinition(currentToken, m);
				}
			}

			function reverseTokens(maskToken) {
				function reverseStatic(st) {
					if (st === opts.optionalmarker.start) st = opts.optionalmarker.end;
					else if (st === opts.optionalmarker.end) st = opts.optionalmarker.start;
					else if (st === opts.groupmarker.start) st = opts.groupmarker.end;
					else if (st === opts.groupmarker.end) st = opts.groupmarker.start;

					return st;
				}

				maskToken.matches = maskToken.matches.reverse();
				for (var match in maskToken.matches) {
					var intMatch = parseInt(match);
					if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
						var qt = maskToken.matches[match];
						maskToken.matches.splice(match, 1);
						maskToken.matches.splice(intMatch + 1, 0, qt);
					}
					if (maskToken.matches[match].matches !== undefined) {
						maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
					} else {
						maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
					}
				}

				return maskToken;
			}

			while (match = tokenizer.exec(mask)) {
				m = match[0];

				if (escaped) {
					defaultCase();
					continue;
				}
				switch (m.charAt(0)) {
					case opts.escapeChar:
						escaped = true;
						break;
					case opts.optionalmarker.end:
					// optional closing
					case opts.groupmarker.end:
						// Group closing
						openingToken = openenings.pop();
						openingToken.openGroup = false; //mark group as complete
						if (openingToken !== undefined) {
							if (openenings.length > 0) {
								currentOpeningToken = openenings[openenings.length - 1];
								currentOpeningToken.matches.push(openingToken);
								if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
									alternator = openenings.pop();
									for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
										alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
									}
									if (openenings.length > 0) {
										currentOpeningToken = openenings[openenings.length - 1];
										currentOpeningToken.matches.push(alternator);
									} else {
										currentToken.matches.push(alternator);
									}
								}
							} else {
								currentToken.matches.push(openingToken);
							}
						} else defaultCase();
						break;
					case opts.optionalmarker.start:
						// optional opening
						openenings.push(new MaskToken(false, true));
						break;
					case opts.groupmarker.start:
						// Group opening
						openenings.push(new MaskToken(true));
						break;
					case opts.quantifiermarker.start:
						//Quantifier
						var quantifier = new MaskToken(false, false, true);

						m = m.replace(/[{}]/g, "");
						var mq = m.split(","),
							mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
							mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
						if (mq1 === "*" || mq1 === "+") {
							mq0 = mq1 === "*" ? 0 : 1;
						}
						quantifier.quantifier = {
							min: mq0,
							max: mq1
						};
						if (openenings.length > 0) {
							var matches = openenings[openenings.length - 1].matches;
							match = matches.pop();
							if (!match.isGroup) {
								groupToken = new MaskToken(true);
								groupToken.matches.push(match);
								match = groupToken;
							}
							matches.push(match);
							matches.push(quantifier);
						} else {
							match = currentToken.matches.pop();
							if (!match.isGroup) {
								groupToken = new MaskToken(true);
								groupToken.matches.push(match);
								match = groupToken;
							}
							currentToken.matches.push(match);
							currentToken.matches.push(quantifier);
						}
						break;
					case
					opts.alternatormarker:
						if (openenings.length > 0) {
							currentOpeningToken = openenings[openenings.length - 1];
							lastMatch = currentOpeningToken.matches.pop();
						} else {
							lastMatch = currentToken.matches.pop();
						}
						if (lastMatch.isAlternator) {
							openenings.push(lastMatch);
						} else {
							alternator = new MaskToken(false, false, false, true);
							alternator.matches.push(lastMatch);
							openenings.push(alternator);
						}
						break;
					default:
						defaultCase();
				}
			}

			while (openenings.length > 0) {
				openingToken = openenings.pop();
				currentToken.matches.push(openingToken);
			}
			if (currentToken.matches.length > 0) {
				verifyGroupMarker(currentToken);
				maskTokens.push(currentToken);
			}

			if (opts.numericInput) {
				reverseTokens(maskTokens[0]);
			}
			// console.log(JSON.stringify(maskTokens));
			return maskTokens;
		},

	};

	//apply defaults, definitions, aliases
	Inputmask.extendDefaults = function (options) {
		$.extend(true, Inputmask.prototype.defaults, options);
	};
	Inputmask.extendDefinitions = function (definition) {
		$.extend(true, Inputmask.prototype.defaults.definitions, definition);
	};
	Inputmask.extendAliases = function (alias) {
		$.extend(true, Inputmask.prototype.defaults.aliases, alias);
	};
	//static fn on inputmask
	Inputmask.format = function (value, options, metadata) {
		return Inputmask(options).format(value, metadata);
	};
	Inputmask.unmask = function (value, options) {
		return Inputmask(options).unmaskedvalue(value);
	};
	Inputmask.isValid = function (value, options) {
		return Inputmask(options).isValid(value);
	};
	Inputmask.remove = function (elems) {
		$.each(elems, function (ndx, el) {
			if (el.inputmask) el.inputmask.remove();
		});
	};
	Inputmask.escapeRegex = function (str) {
		var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
		return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
	};
	Inputmask.keyCode = {
		ALT: 18,
		BACKSPACE: 8,
		BACKSPACE_SAFARI: 127,
		CAPS_LOCK: 20,
		COMMA: 188,
		COMMAND: 91,
		COMMAND_LEFT: 91,
		COMMAND_RIGHT: 93,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		MENU: 93,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38,
		WINDOWS: 91,
		X: 88
	};

	function resolveAlias(aliasStr, options, opts) {
		var aliasDefinition = opts.aliases[aliasStr];
		if (aliasDefinition) {
			if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
			$.extend(true, opts, aliasDefinition); //merge alias definition in the options
			$.extend(true, opts, options); //reapply extra given options
			return true;
		} else //alias not found - try as mask
		if (opts.mask === null) {
			opts.mask = aliasStr;
		}

		return false;
	}

	function generateMaskSet(opts, nocache) {
		function generateMask(mask, metadata, opts) {
			if (mask === null || mask === "") {
				return undefined;
			} else {
				if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
					opts.placeholder = "";
				} //hide placeholder with single non-greedy mask
				if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
					var repeatStart = opts.repeat === "*" ? 0 : (opts.repeat === "+" ? 1 : opts.repeat);
					mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
				}

				// console.log(mask);
				var masksetDefinition;
				if (Inputmask.prototype.masksCache[mask] === undefined || nocache === true) {
					masksetDefinition = {
						"mask": mask,
						"maskToken": Inputmask.prototype.analyseMask(mask, opts),
						"validPositions": {},
						"_buffer": undefined,
						"buffer": undefined,
						"tests": {},
						"metadata": metadata,
						maskLength: undefined
					};
					if (nocache !== true) {
						Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition;
						masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);
					}
				} else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);

				return masksetDefinition;
			}
		}

		var ms;

		if ($.isFunction(opts.mask)) { //allow mask to be a preprocessing fn - should return a valid mask
			opts.mask = opts.mask(opts);
		}
		if ($.isArray(opts.mask)) {
			if (opts.mask.length > 1) {
				opts.keepStatic = opts.keepStatic === null ? true : opts.keepStatic; //enable by default when passing multiple masks when the option is not explicitly specified
				var altMask = opts.groupmarker.start;
				$.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
					if (altMask.length > 1) {
						altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start;
					}
					if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
						altMask += msk.mask;
					} else {
						altMask += msk;
					}
				});
				altMask += opts.groupmarker.end;
				// console.log(altMask);
				return generateMask(altMask, opts.mask, opts);
			} else opts.mask = opts.mask.pop();
		}

		if (opts.mask) {
			if (opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
				ms = generateMask(opts.mask.mask, opts.mask, opts);
			} else {
				ms = generateMask(opts.mask, opts.mask, opts);
			}
		}

		return ms;
	};


	//masking scope
	//actionObj definition see below
	function maskScope(actionObj, maskset, opts) {
		maskset = maskset || this.maskset;
		opts = opts || this.opts;
		var el = this.el,
			isRTL = this.isRTL,
			undoValue,
			$el,
			skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
			skipInputEvent = false, //skip when triggered from within inputmask
			composition = false,
			ignorable = false,
			maxLength,
			mouseEnter = false,
			colorMask;

		//maskset helperfunctions
		function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
			//includeMode true => input, undefined => placeholder, false => mask
			minimalPos = minimalPos || 0;
			var maskTemplate = [],
				ndxIntlzr, pos = 0,
				test, testPos, lvp = getLastValidPosition();
			maxLength = el !== undefined ? el.maxLength : undefined;
			if (maxLength === -1) maxLength = undefined;
			do {
				if (baseOnInput === true && getMaskSet().validPositions[pos]) {
					testPos = getMaskSet().validPositions[pos];
					test = testPos.match;
					ndxIntlzr = testPos.locator.slice();
					maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
				} else {
					testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
					test = testPos.match;
					ndxIntlzr = testPos.locator.slice();
					if (opts.jitMasking === false || pos < lvp || (Number.isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
						maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
					}
				}
				pos++;
			} while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
			if (maskTemplate[maskTemplate.length - 1] === "") {
				maskTemplate.pop(); //drop the last one which is empty
			}

			getMaskSet().maskLength = pos + 1;
			return maskTemplate;
		}

		function getMaskSet() {
			return maskset;
		}

		function resetMaskSet(soft) {
			var maskset = getMaskSet();
			maskset.buffer = undefined;
			if (soft !== true) {
				maskset._buffer = undefined;
				maskset.validPositions = {};
				maskset.p = 0;
			}
		}

		function getLastValidPosition(closestTo, strict, validPositions) {
			var before = -1,
				after = -1,
				valids = validPositions || getMaskSet().validPositions; //for use in valhook ~ context switch
			if (closestTo === undefined) closestTo = -1;
			for (var posNdx in valids) {
				var psNdx = parseInt(posNdx);
				if (valids[psNdx] && (strict || valids[psNdx].match.fn !== null)) {
					if (psNdx <= closestTo) before = psNdx;
					if (psNdx >= closestTo) after = psNdx;
				}
			}
			return (before !== -1 && (closestTo - before) > 1) || after < closestTo ? before : after;
		}


		function stripValidPositions(start, end, nocheck, strict) {
			function IsEnclosedStatic(pos) {
				var posMatch = getMaskSet().validPositions[pos];
				if (posMatch !== undefined && posMatch.match.fn === null) {
					var prevMatch = getMaskSet().validPositions[pos - 1],
						nextMatch = getMaskSet().validPositions[pos + 1];
					return prevMatch !== undefined && nextMatch !== undefined;
				}
				return false;
			}

			var i, startPos = start,
				positionsClone = $.extend(true, {}, getMaskSet().validPositions), needsValidation = false;
			getMaskSet().p = start; //needed for alternated position after overtype selection

			for (i = end - 1; i >= startPos; i--) { //clear selection
				if (getMaskSet().validPositions[i] !== undefined) {
					if (nocheck === true ||
						((getMaskSet().validPositions[i].match.optionality || !IsEnclosedStatic(i)) && opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) !== false)) {
						delete getMaskSet().validPositions[i];
					}
				}
			}

			//clear buffer
			resetMaskSet(true);
			for (i = startPos + 1; i <= getLastValidPosition();) {
				while (getMaskSet().validPositions[startPos] !== undefined) startPos++;
				var s = getMaskSet().validPositions[startPos];
				if (i < startPos) i = startPos + 1;
				// while (getMaskSet().validPositions[i] == undefined) i++;
				if ((getMaskSet().validPositions[i] !== undefined || !isMask(i)) && s === undefined) {
					var t = getTestTemplate(i);
					if (needsValidation === false && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def) { //obvious match
						getMaskSet().validPositions[startPos] = $.extend(true, {}, positionsClone[startPos]);
						getMaskSet().validPositions[startPos].input = t.input;
						delete getMaskSet().validPositions[i];
						i++;
					} else if (positionCanMatchDefinition(startPos, t.match.def)) {
						if (isValid(startPos, t.input || getPlaceholder(i), true) !== false) {
							delete getMaskSet().validPositions[i];
							i++;
							needsValidation = true;
						}
					} else if (!isMask(i)) {
						i++;
						startPos--;
					}
					startPos++;
				} else i++;
			}

			resetMaskSet(true);
		}

		function determineTestTemplate(tests, guessNextBest) {
			var testPos,
				testPositions = tests,
				lvp = getLastValidPosition(),
				lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0],
				lvTestAltArr = (lvTest.alternation !== undefined) ? lvTest.locator[lvTest.alternation].toString().split(",") : [];
			for (var ndx = 0; ndx < testPositions.length; ndx++) {
				testPos = testPositions[ndx];

				if (testPos.match &&
					(((opts.greedy && testPos.match.optionalQuantifier !== true) || (testPos.match.optionality === false || testPos.match.newBlockMarker === false) && testPos.match.optionalQuantifier !== true) &&
					((lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation) ||
					(testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))))) {

					if (guessNextBest !== true || (testPos.match.fn === null && !/[0-9a-bA-Z]/.test(testPos.match.def)))
						break;
				}
			}

			return testPos;
		}

		function getTestTemplate(pos, ndxIntlzr, tstPs) {
			return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
		}

		function getTest(pos) {
			if (getMaskSet().validPositions[pos]) {
				return getMaskSet().validPositions[pos];
			}
			return getTests(pos)[0];
		}

		function positionCanMatchDefinition(pos, def) {
			var valid = false,
				tests = getTests(pos);
			for (var tndx = 0; tndx < tests.length; tndx++) {
				if (tests[tndx].match && tests[tndx].match.def === def) {
					valid = true;
					break;
				}
			}
			return valid;
		}


		function getTests(pos, ndxIntlzr, tstPs) {
			var maskTokens = getMaskSet().maskToken,
				testPos = ndxIntlzr ? tstPs : 0,
				ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
				matches = [],
				insertStop = false,
				latestMatch,
				cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

			function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
				function handleMatch(match, loopNdx, quantifierRecurse) {
					function isFirstMatch(latestMatch, tokenGroup) {
						var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
						if (!firstMatch) {
							$.each(tokenGroup.matches, function (ndx, match) {
								if (match.isQuantifier === true) {
									firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
									if (firstMatch) return false;
								}
							});
						}
						return firstMatch;
					}

					function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
						var bestMatch, indexPos;
						if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
							$.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
								var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
									ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
								if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
									bestMatch = lmnt;
									indexPos = ndxPos;
								}
							});
						}
						return bestMatch ?
							bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) :
							targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
					}

					function staticCanMatchDefinition(source, target) {
						if (source.match.fn === null && target.match.fn !== null) {
							return target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false);
						}
						return false;
					}

					if (testPos > 10000) {
						throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
					}
					if (testPos === pos && match.matches === undefined) {
						matches.push({
							"match": match,
							"locator": loopNdx.reverse(),
							"cd": cacheDependency
						});
						return true;
					} else if (match.matches !== undefined) {
						if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
							match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx);
							if (match) return true;
						} else if (match.isOptional) {
							var optionalToken = match;
							match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
							if (match) {
								latestMatch = matches[matches.length - 1].match;
								if (isFirstMatch(latestMatch, optionalToken)) {
									insertStop = true; //insert a stop
									testPos = pos; //match the position after the group
								} else return true;
							}
						} else if (match.isAlternator) {
							var alternateToken = match,
								malternateMatches = [],
								maltMatches,
								currentMatches = matches.slice(),
								loopNdxCnt = loopNdx.length;
							var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
							if (altIndex === -1 || typeof altIndex === "string") {
								var currentPos = testPos,
									ndxInitializerClone = ndxInitializer.slice(),
									altIndexArr = [],
									amndx;
								if (typeof altIndex == "string") {
									altIndexArr = altIndex.split(",");
								} else {
									for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
										altIndexArr.push(amndx);
									}
								}
								for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
									amndx = parseInt(altIndexArr[ndx]);
									matches = [];
									//set the correct ndxInitializer
									ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice();
									match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match;
									if (match !== true && match !== undefined && (altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length)) { //no match in the alternations (length mismatch) => look further
										var ntndx = $.inArray(match, maskToken.matches) + 1;
										if (maskToken.matches.length > ntndx) {
											match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse);
											if (match) {
												altIndexArr.push(ntndx.toString());
												$.each(matches, function (ndx, lmnt) {
													lmnt.alternation = loopNdx.length - 1;
												});
											}
										}
									}
									maltMatches = matches.slice();
									testPos = currentPos;
									matches = [];

									//fuzzy merge matches
									for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
										var altMatch = maltMatches[ndx1], hasMatch = false;
										altMatch.alternation = altMatch.alternation || loopNdxCnt;
										for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
											var altMatch2 = malternateMatches[ndx2];
											//verify equality
											if (typeof altIndex !== "string" || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
												if (altMatch.match.def === altMatch2.match.def || staticCanMatchDefinition(altMatch, altMatch2)) {
													hasMatch = altMatch.match.nativeDef === altMatch2.match.nativeDef;
													// if (altMatch.alternation != altMatch2.alternation) {
													// 	console.log("alternation mismatch");
													// }
													if (altMatch.alternation == altMatch2.alternation && //can we merge if the alternation is different??  TODO TOCHECK INVESTIGATE
														altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
														altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation];
														altMatch2.alternation = altMatch.alternation; //we pass the alternation index => used in determineLastRequiredPosition
														if (altMatch.match.fn == null) { //staticCanMatchDefinition => set no alternate on match
															altMatch2.na = altMatch2.na || altMatch.locator[altMatch.alternation].toString();
															if (altMatch2.na.indexOf(altMatch.locator[altMatch.alternation]) === -1)
																altMatch2.na = altMatch2.na + "," + altMatch.locator[altMatch.alternation];
														}
													}
													break;
												}
											}
										}
										if (!hasMatch) {
											malternateMatches.push(altMatch);
										}
									}
								}
								if (typeof altIndex == "string") { //filter matches
									malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
										if (isFinite(ndx)) {
											var mamatch,
												alternation = lmnt.alternation,
												altLocArr = lmnt.locator[alternation].toString().split(",");
											lmnt.locator[alternation] = undefined;
											lmnt.alternation = undefined;

											for (var alndx = 0; alndx < altLocArr.length; alndx++) {
												mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1;
												if (mamatch) { //rebuild the locator with valid entries
													if (lmnt.locator[alternation] !== undefined) {
														lmnt.locator[alternation] += ",";
														lmnt.locator[alternation] += altLocArr[alndx];
													} else lmnt.locator[alternation] = parseInt(altLocArr[alndx]);

													lmnt.alternation = alternation;
												}
											}

											if (lmnt.locator[alternation] !== undefined) return lmnt;
										}
									});
								}

								matches = currentMatches.concat(malternateMatches);
								testPos = pos;
								insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option

								//cloneback
								ndxInitializer = ndxInitializerClone.slice();
							} else {
								// if (alternateToken.matches[altIndex]) { //if not in the initial alternation => look further
								match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
								// } else match = false;
							}
							if (match) return true;
						} else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
							var qt = match;
							for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
								var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
								match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
								if (match) {
									//get latest match
									latestMatch = matches[matches.length - 1].match;
									latestMatch.optionalQuantifier = qndx > (qt.quantifier.min - 1);
									if (isFirstMatch(latestMatch, tokenGroup)) { //search for next possible match
										if (qndx > (qt.quantifier.min - 1)) {
											insertStop = true;
											testPos = pos; //match the position after the group
											break; //stop quantifierloop
										} else return true;
									} else {
										return true;
									}
								}
							}
						} else {
							match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
							if (match) return true;
						}
					}

					else
						testPos++;
				}

				for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
					if (maskToken.matches[tndx].isQuantifier !== true) {
						var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
						if (match && testPos === pos) {
							return match;
						} else if (testPos > pos) {
							break;
						}
					}
				}
			}

			function mergeLocators(tests) {
				var locator = [];
				if (!$.isArray(tests)) tests = [tests];
				if (tests.length > 0) {
					if (tests[0].alternation === undefined) {
						locator = determineTestTemplate(tests.slice()).locator.slice();
						if (locator.length === 0) locator = tests[0].locator.slice();
					}
					else {
						$.each(tests, function (ndx, tst) {
							if (tst.def !== "") {
								if (locator.length === 0) locator = tst.locator.slice();
								else {
									for (var i = 0; i < locator.length; i++) {
										if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
											locator[i] += "," + tst.locator[i];
										}
									}
								}
							}
						});
					}
				}
				return locator;
			}

			function filterTests(tests) {
				if (opts.keepStatic && pos > 0) {
					if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
						if (tests[0].match.optionality !== true &&
							tests[0].match.optionalQuantifier !== true &&
							tests[0].match.fn === null && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
							return [determineTestTemplate(tests)];
						}
					}
				}

				return tests;
			}

			if (pos > -1) {
				if (ndxIntlzr === undefined) { //determine index initializer
					var previousPos = pos - 1,
						test;
					while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
						previousPos--;
					}
					if (test !== undefined && previousPos > -1) {
						ndxInitializer = mergeLocators(test);
						cacheDependency = ndxInitializer.join("");
						testPos = previousPos;
					}
				}
				if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
					//console.log("cache hit " + pos + " - " + ndxIntlzr);
					return filterTests(getMaskSet().tests[pos]);
				}
				for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
					var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
					if ((match && testPos === pos) || testPos > pos) {
						break;
					}
				}
			}
			if (matches.length === 0 || insertStop) {
				matches.push({
					match: {
						fn: null,
						cardinality: 0,
						optionality: true,
						casing: null,
						def: "",
						placeholder: ""
					},
					locator: [],
					cd: cacheDependency
				});
			}

			if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) { //prioritize full tests for caching
				return filterTests($.extend(true, [], matches));
			}
			getMaskSet().tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
			// console.log(pos + " - " + JSON.stringify(matches));
			return filterTests(getMaskSet().tests[pos]);
		}

		function getBufferTemplate() {
			if (getMaskSet()._buffer === undefined) {
				//generate template
				getMaskSet()._buffer = getMaskTemplate(false, 1);
				if (getMaskSet().buffer === undefined) {
					getMaskSet()._buffer.slice();
				}
			}
			return getMaskSet()._buffer;
		}

		function getBuffer(noCache) {
			if (getMaskSet().buffer === undefined || noCache === true) {
				getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
			}
			return getMaskSet().buffer;
		}

		function refreshFromBuffer(start, end, buffer) {
			var i;
			if (start === true) {
				resetMaskSet();
				start = 0;
				end = buffer.length;
			} else {
				for (i = start; i < end; i++) {
					delete getMaskSet().validPositions[i];
				}
			}
			for (i = start; i < end; i++) {
				resetMaskSet(true); //prevents clobber from the buffer
				if (buffer[i] !== opts.skipOptionalPartCharacter) {
					isValid(i, buffer[i], true, true);
				}
			}
		}

		function casing(elem, test, pos) {
			switch (opts.casing || test.casing) {
				case "upper":
					elem = elem.toUpperCase();
					break;
				case "lower":
					elem = elem.toLowerCase();
					break;
				case "title":
					var posBefore = getMaskSet().validPositions[pos - 1];
					if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
						elem = elem.toUpperCase();
					} else {
						elem = elem.toLowerCase();
					}
					break;
			}

			return elem;
		}

		function checkAlternationMatch(altArr1, altArr2) {
			var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
				isMatch = false;
			for (var alndx = 0; alndx < altArr1.length; alndx++) {
				if ($.inArray(altArr1[alndx], altArrC) !== -1) {
					isMatch = true;
					break;
				}
			}
			return isMatch;
		}

		function isValid(pos, c, strict, fromSetValid, fromAlternate) { //strict true ~ no correction or autofill
			function isSelection(posObj) {
				var selection = isRTL ? (posObj.begin - posObj.end) > 1 || ((posObj.begin - posObj.end) === 1 && opts.insertMode) :
				(posObj.end - posObj.begin) > 1 || ((posObj.end - posObj.begin) === 1 && opts.insertMode);

				return selection && posObj.begin === 0 && posObj.end === getMaskSet().maskLength ? "full" : selection;
			}

			strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

			var maskPos = pos;
			if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
				maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin;
			}

			function _isValid(position, c, strict) {
				var rslt = false;
				$.each(getTests(position), function (ndx, tst) {
						var test = tst.match,
							loopend = c ? 1 : 0,
							chrs = "";
						for (var i = test.cardinality; i > loopend; i--) {
							chrs += getBufferElement(position - (i - 1));
						}
						if (c) {
							chrs += c;
						}

						//make sure the buffer is set and correct
						getBuffer(true);
						//return is false or a json object => { pos: ??, c: ??} or true
						rslt = test.fn != null ?
							test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
							{
								c: test.placeholder || test.def,
								pos: position
							} : false;

						if (rslt !== false) {
							var elem = rslt.c !== undefined ? rslt.c : c;
							elem = (elem === opts.skipOptionalPartCharacter && test.fn === null) ? (test.placeholder || test.def) : elem;

							var validatedPos = position,
								possibleModifiedBuffer = getBuffer();

							if (rslt.remove !== undefined) { //remove position(s)
								if (!$.isArray(rslt.remove)) rslt.remove = [rslt.remove];
								$.each(rslt.remove.sort(function (a, b) {
									return b - a;
								}), function (ndx, lmnt) {
									stripValidPositions(lmnt, lmnt + 1, true);
								});
							}
							if (rslt.insert !== undefined) { //insert position(s)
								if (!$.isArray(rslt.insert)) rslt.insert = [rslt.insert];
								$.each(rslt.insert.sort(function (a, b) {
									return a - b;
								}), function (ndx, lmnt) {
									isValid(lmnt.pos, lmnt.c, true, fromSetValid);
								});
							}

							if (rslt.refreshFromBuffer) {
								var refresh = rslt.refreshFromBuffer;
								strict = true;
								refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, possibleModifiedBuffer);
								if (rslt.pos === undefined && rslt.c === undefined) {
									rslt.pos = getLastValidPosition();
									return false; //breakout if refreshFromBuffer && nothing to insert
								}
								validatedPos = rslt.pos !== undefined ? rslt.pos : position;
								if (validatedPos !== position) {
									rslt = $.extend(rslt, isValid(validatedPos, elem, true, fromSetValid)); //revalidate new position strict
									return false;
								}

							} else if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
								validatedPos = rslt.pos;
								refreshFromBuffer(position, validatedPos, getBuffer().slice());
								if (validatedPos !== position) {
									rslt = $.extend(rslt, isValid(validatedPos, elem, true)); //revalidate new position strict
									return false;
								}
							}

							if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
								return false; //breakout if nothing to insert
							}

							if (ndx > 0) {
								resetMaskSet(true);
							}

							if (!setValidPosition(validatedPos, $.extend({}, tst, {
									"input": casing(elem, test, validatedPos)
								}), fromSetValid, isSelection(pos))) {
								rslt = false;
							}
							return false; //break from $.each
						}
					}
				);
				return rslt;
			}

			function alternate(pos, c, strict) {
				var validPsClone = $.extend(true, {}, getMaskSet().validPositions),
					lastAlt,
					alternation,
					isValidRslt = false,
					altPos, prevAltPos, i, validPos, lAltPos = getLastValidPosition(), altNdxs, decisionPos;
				//find last modified alternation
				prevAltPos = getMaskSet().validPositions[lAltPos];
				for (; lAltPos >= 0; lAltPos--) {
					altPos = getMaskSet().validPositions[lAltPos];
					if (altPos && altPos.alternation !== undefined) {
						lastAlt = lAltPos;
						alternation = getMaskSet().validPositions[lastAlt].alternation;
						if (prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
							break;
						}
						prevAltPos = altPos;
					}
				}
				if (alternation !== undefined) {
					decisionPos = parseInt(lastAlt);
					var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0]; //no match in the alternations (length mismatch)
					if (decisionTaker.length > 0) { //no decision taken ~ take first one as decider
						decisionTaker = decisionTaker.split(",")[0];
					}
					var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
					$.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function (ndx, test) {
						altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
						for (var mndx = 0; mndx < altNdxs.length; mndx++) {
							var validInputs = [],
								staticInputsBeforePos = 0,
								staticInputsBeforePosAlternate = 0,
								verifyValidInput = false;
							if (decisionTaker < altNdxs[mndx] && (test.na === undefined || $.inArray(altNdxs[mndx], test.na.split(",")) === -1)) {
								getMaskSet().validPositions[decisionPos] = $.extend(true, {}, test);
								var possibilities = getMaskSet().validPositions[decisionPos].locator;
								getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]); //set forced decision
								if (test.match.fn == null) {
									if (possibilityPos.input !== test.match.def) {
										verifyValidInput = true; //verify that the new definition matches the input
										if (possibilityPos.generatedInput !== true) {
											validInputs.push(possibilityPos.input);
										}
									}
									staticInputsBeforePosAlternate++;
									getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def);
									getMaskSet().validPositions[decisionPos].input = test.match.def;
								} else {
									getMaskSet().validPositions[decisionPos].input = possibilityPos.input;
								}
								for (i = decisionPos + 1; i < getLastValidPosition(undefined, true) + 1; i++) {
									validPos = getMaskSet().validPositions[i];
									if (validPos && validPos.generatedInput !== true && /[0-9a-bA-Z]/.test(validPos.input)) {
										validInputs.push(validPos.input);
									} else if (i < pos) staticInputsBeforePos++;
									delete getMaskSet().validPositions[i];
								}
								if (verifyValidInput && validInputs[0] === test.match.def) {
									validInputs.shift();
								}
								resetMaskSet(true); //clear getbuffer
								isValidRslt = true;
								while (validInputs.length > 0) {
									var input = validInputs.shift();
									if (input !== opts.skipOptionalPartCharacter) {
										if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
											break;
										}
									}
								}

								if (isValidRslt) {
									getMaskSet().validPositions[decisionPos].locator = possibilities; //reset forceddecision ~ needed for proper delete
									var targetLvp = getLastValidPosition(pos) + 1;
									for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
										validPos = getMaskSet().validPositions[i];
										if ((validPos === undefined || validPos.match.fn == null) && i < (pos + (staticInputsBeforePosAlternate - staticInputsBeforePos))) {
											staticInputsBeforePosAlternate++;
										}
									}
									pos = pos + (staticInputsBeforePosAlternate - staticInputsBeforePos);
									isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
								}
								if (!isValidRslt) {
									resetMaskSet();
									getMaskSet().validPositions = $.extend(true, {}, validPsClone);
								} else return false; //exit $.each
							}
						}
					});
				}

				return isValidRslt;
			}

			//set alternator choice on previous skipped placeholder positions
			function trackbackAlternations(originalPos, newPos) {
				var vp = getMaskSet().validPositions[newPos];
				if (vp) {
					var targetLocator = vp.locator,
						tll = targetLocator.length;

					for (var ps = originalPos; ps < newPos; ps++) {
						if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
							var tests = getTests(ps),
								bestMatch = tests[0],
								equality = -1;
							$.each(tests, function (ndx, tst) { //find best matching
								for (var i = 0; i < tll; i++) {
									if (tst.locator[i] !== undefined && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","))) {
										if (equality < i) {
											equality = i;
											bestMatch = tst;
										}
									} else break;
								}
							});
							setValidPosition(ps, $.extend({}, bestMatch, {
								"input": bestMatch.match.placeholder || bestMatch.match.def
							}), true);
						}
					}
				}
			}

			function setValidPosition(pos, validTest, fromSetValid, isSelection) {
				if (isSelection || (opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined)) {
					//reposition & revalidate others
					var positionsClone = $.extend(true, {}, getMaskSet().validPositions),
						lvp = getLastValidPosition(undefined, true),
						i;
					for (i = pos; i <= lvp; i++) { //clear selection
						delete getMaskSet().validPositions[i];
					}
					getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
					var valid = true,
						j, vps = getMaskSet().validPositions, needsValidation = false,
						initialLength = getMaskSet().maskLength;
					for (i = (j = pos); i <= lvp; i++) {
						var t = positionsClone[i];
						if (t !== undefined && (t.generatedInput !== true || t.match.fn === null)) {
							var posMatch = j;
							while (posMatch < getMaskSet().maskLength && ((t.match.fn === null && vps[i] && (vps[i].match.optionalQuantifier === true || vps[i].match.optionality === true)) || t.match.fn != null)) {
								posMatch++;
								if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) { //obvious match
									getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
									getMaskSet().validPositions[posMatch].input = t.input;
									fillMissingNonMask(posMatch);
									j = posMatch;
									valid = true;
								} else if (positionCanMatchDefinition(posMatch, t.match.def)) { //validated match
									var result = isValid(posMatch, t.input, true, true);
									valid = result !== false;
									j = (result.caret || result.insert) ? getLastValidPosition() : posMatch;
									needsValidation = true;
								} else {
									valid = t.generatedInput === true;
								}
								if (getMaskSet().maskLength < initialLength) getMaskSet().maskLength = initialLength; //a bit hacky but the masklength is corrected later on
								if (valid) break;
							}
						}
						if (!valid) break;
					}

					if (!valid) {
						getMaskSet().validPositions = $.extend(true, {}, positionsClone);
						resetMaskSet(true);
						return false;
					}
				}

				else
					getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
				;

				resetMaskSet(true);
				return true;
			}

			function fillMissingNonMask(maskPos) {
				//Check for a nonmask before the pos
				//find previous valid
				for (var pndx = maskPos - 1; pndx > -1; pndx--) {
					if (getMaskSet().validPositions[pndx]) break;
				}
				////fill missing nonmask and valid placeholders
				var testTemplate, testsFromPos;
				for (pndx++; pndx < maskPos; pndx++) {
					if (getMaskSet().validPositions[pndx] === undefined && (opts.jitMasking === false || opts.jitMasking > pndx)) {
						testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice();
						if (testsFromPos[testsFromPos.length - 1].match.def === "") testsFromPos.pop();
						testTemplate = determineTestTemplate(testsFromPos);
						if (testTemplate && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, true) ||
							($.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, false, opts)))) {
							result = _isValid(pndx, testTemplate.match.placeholder || (testTemplate.match.fn == null ? testTemplate.match.def : (getPlaceholder(pndx) !== "" ? getPlaceholder(pndx) : getBuffer()[pndx])), true);
							if (result !== false) {
								getMaskSet().validPositions[result.pos || pndx].generatedInput = true;
							}
						}
					}
				}
			}

			var result = false,
				positionsClone = $.extend(true, {}, getMaskSet().validPositions); //clone the currentPositions

			fillMissingNonMask(maskPos);

			if (isSelection(pos)) {
				handleRemove(undefined, Inputmask.keyCode.DELETE, pos);
				maskPos = getMaskSet().p;
			}

			if (maskPos < getMaskSet().maskLength) {
				result = _isValid(maskPos, c, strict);
				if ((!strict || fromSetValid === true) && result === false) {
					var currentPosValid = getMaskSet().validPositions[maskPos];
					if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
						result = {
							"caret": seekNext(maskPos)
						};
					} else if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, true)) { //does the input match on a further position?
						var testsFromPos = getTests(maskPos).slice();
						if (testsFromPos[testsFromPos.length - 1].match.def === "") testsFromPos.pop();
						var staticChar = determineTestTemplate(testsFromPos, true);
						if (staticChar && staticChar.match.fn === null) {
							staticChar = staticChar.match.placeholder || staticChar.match.def;
							_isValid(maskPos, staticChar, strict);
							getMaskSet().validPositions[maskPos].generatedInput = true;
						}
						for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
							result = _isValid(nPos, c, strict);
							if (result !== false) {
								trackbackAlternations(maskPos, result.pos !== undefined ? result.pos : nPos);
								maskPos = nPos;
								break;
							}
						}
					}
				}
			}
			if (result === false && opts.keepStatic && !strict && fromAlternate !== true) { //try fuzzy alternator logic
				result = alternate(maskPos, c, strict);
			}
			if (result === true) {
				result = {
					"pos": maskPos
				};
			}
			if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true) {
				result = opts.postValidation(getBuffer(true), result, opts) ? result : false;
			}

			if (result.pos === undefined) {
				result.pos = maskPos;
			}

			if (result === false) {
				resetMaskSet(true);
				getMaskSet().validPositions = $.extend(true, {}, positionsClone); //revert validation changes
			}

			return result;
		}

		function isMask(pos, strict) {
			var test;
			if (strict) {
				test = getTestTemplate(pos).match;
				if (test.def === "") test = getTest(pos).match;
			} else test = getTest(pos).match;

			if (test.fn != null) {
				return test.fn;
			} else if (strict !== true && pos > -1) {
				var tests = getTests(pos);
				return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
			}
			return false;
		}

		function seekNext(pos, newBlock) {
			var maskL = getMaskSet().maskLength;
			if (pos >= maskL) return maskL;
			var position = pos;
			while (++position < maskL &&
			((newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position))) ||
			(newBlock !== true && !isMask(position)))) {
			}
			return position;
		}

		function seekPrevious(pos, newBlock) {
			var position = pos, tests;
			if (position <= 0) return 0;

			while (--position > 0 &&
			((newBlock === true && getTest(position).match.newBlockMarker !== true) ||
			(newBlock !== true && !isMask(position) &&
			(tests = getTests(position), tests.length < 2 || (tests.length === 2 && tests[1].match.def === ""))))) {
			}

			return position;
		}

		function getBufferElement(position) {
			return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
		}

		function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
			if (event && $.isFunction(opts.onBeforeWrite)) {
				var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
				if (result) {
					if (result.refreshFromBuffer) {
						var refresh = result.refreshFromBuffer;
						refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
						buffer = getBuffer(true);
					}
					//only alter when intented !== undefined
					if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
				}
			}
			input.inputmask._valueSet(buffer.join(""));
			if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
				caret(input, caretPos);
			} else renderColorMask(input, buffer, caretPos);
			if (triggerInputEvent === true) {
				skipInputEvent = true;
				$(input).trigger("input");
			}
		}

		function getPlaceholder(pos, test) {
			test = test || getTest(pos).match;
			if (test.placeholder !== undefined) {
				return test.placeholder;
			} else if (test.fn === null) {
				if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
					var tests = getTests(pos),
						staticAlternations = [],
						prevTest;
					if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
						for (var i = 0; i < tests.length; i++) {
							if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
								(tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
								staticAlternations.push(tests[i]);
								if (tests[i].match.fn === null) prevTest = tests[i];
								if (staticAlternations.length > 1) {
									if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
										return opts.placeholder.charAt(pos % opts.placeholder.length);
									}
								}
							}
						}
					}
				}
				return test.def;
			}

			return opts.placeholder.charAt(pos % opts.placeholder.length);
		}

		function checkVal(input, writeOut, strict, nptvl, initiatingEvent, stickyCaret) {
			var inputValue = nptvl.slice(),
				charCodes = "",
				initialNdx = 0, result = undefined;

			function isTemplateMatch() {
				var isMatch = false;
				var charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
				if (charCodeNdx !== -1 && !isMask(initialNdx)) {
					isMatch = true;
					var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx);
					for (var i = 0; i < bufferTemplateArr.length; i++) {
						if (bufferTemplateArr[i] !== " ") {
							isMatch = false;
							break;
						}
					}
				}

				return isMatch;
			}

			resetMaskSet();
			getMaskSet().p = seekNext(-1);
			// if (writeOut) input.inputmask._valueSet(""); //initial clear

			if (!strict) {
				if (opts.autoUnmask !== true) {
					var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
						matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
					if (matches && matches.length > 0) {
						inputValue.splice(0, matches.length * staticInput.length);
						initialNdx = seekNext(initialNdx);
					}
				} else {
					initialNdx = seekNext(initialNdx);
				}
			}


			$.each(inputValue, function (ndx, charCode) {
				if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
					var keypress = new $.Event("keypress");
					keypress.which = charCode.charCodeAt(0);
					charCodes += charCode;
					var lvp = getLastValidPosition(undefined, true),
						lvTest = getMaskSet().validPositions[lvp],
						nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
					if (!isTemplateMatch() || strict || opts.autoUnmask) {
						var pos = strict ? ndx : (nextTest.match.fn == null && nextTest.match.optionality && (lvp + 1) < getMaskSet().p ? lvp + 1 : getMaskSet().p);
						result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, pos);
						initialNdx = pos + 1;
						charCodes = "";
					} else {
						result = EventHandlers.keypressEvent.call(input, keypress, true, false, true, lvp + 1);
					}
					if (!strict && $.isFunction(opts.onBeforeWrite)) {
						result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts);
						if (result && result.refreshFromBuffer) {
							var refresh = result.refreshFromBuffer;
							refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer);
							resetMaskSet(true);
							if (result.caret) {
								getMaskSet().p = result.caret;
							}
						}
					}
				}
			});
			if (writeOut) {
				var caretPos = undefined, lvp = getLastValidPosition();
				if (document.activeElement === input && (initiatingEvent || result)) {
					caretPos = caret(input).begin;
					if (initiatingEvent && result === false) caretPos = seekNext(getLastValidPosition(caretPos));
					if (result && stickyCaret !== true && (caretPos < lvp + 1 || lvp === -1))
						caretPos = (opts.numericInput && result.caret === undefined) ? seekPrevious(result.forwardPosition) : result.forwardPosition;
				}
				writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"));
			}
		}

		function unmaskedvalue(input) {
			if (input && input.inputmask === undefined) {
				return input.value;
			}

			var umValue = [],
				vps = getMaskSet().validPositions;
			for (var pndx in vps) {
				if (vps[pndx].match && vps[pndx].match.fn != null) {
					umValue.push(vps[pndx].input);
				}
			}
			var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
			if ($.isFunction(opts.onUnMask)) {
				var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
				unmaskedValue = (opts.onUnMask(bufferValue, unmaskedValue, opts) || unmaskedValue);
			}
			return unmaskedValue;
		}

		function caret(input, begin, end, notranslate) {
			function translatePosition(pos) {
				if (notranslate !== true && isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "")) {
					var bffrLght = getBuffer().join("").length; //join is needed because sometimes we get an empty buffer element which must not be counted for the caret position (numeric alias)
					pos = bffrLght - pos;
				}
				return pos;
			}

			var range;
			if (typeof begin === "number") {
				begin = translatePosition(begin);
				end = translatePosition(end);
				end = (typeof end == "number") ? end : begin;
				// if (!$(input).is(":visible")) {
				// 	return;
				// }

				var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
				input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;

				if (!mobile && opts.insertMode === false && begin === end) end++; //set visualization for insert/overwrite mode
				if (input.setSelectionRange) {
					input.selectionStart = begin;
					input.selectionEnd = end;
				} else if (window.getSelection) {
					range = document.createRange();
					if (input.firstChild === undefined || input.firstChild === null) {
						var textNode = document.createTextNode("");
						input.appendChild(textNode);
					}
					range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
					range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
					range.collapse(true);
					var sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					//input.focus();
				} else if (input.createTextRange) {
					range = input.createTextRange();
					range.collapse(true);
					range.moveEnd("character", end);
					range.moveStart("character", begin);
					range.select();

				}
				renderColorMask(input, undefined, {begin: begin, end: end});
			} else {
				if (input.setSelectionRange) {
					begin = input.selectionStart;
					end = input.selectionEnd;
				} else if (window.getSelection) {
					range = window.getSelection().getRangeAt(0);
					if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
						begin = range.startOffset;
						end = range.endOffset;
					}
				} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
					end = begin + range.text.length;
				}
				/*eslint-disable consistent-return */
				return {
					"begin": translatePosition(begin),
					"end": translatePosition(end)
				};
				/*eslint-enable consistent-return */
			}
		}

		function determineLastRequiredPosition(returnDefinition) {
			var buffer = getBuffer(),
				bl = buffer.length,
				pos, lvp = getLastValidPosition(),
				positions = {},
				lvTest = getMaskSet().validPositions[lvp],
				ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
				testPos;
			for (pos = lvp + 1; pos < buffer.length; pos++) {
				testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
				ndxIntlzr = testPos.locator.slice();
				positions[pos] = $.extend(true, {}, testPos);
			}

			var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
			for (pos = bl - 1; pos > lvp; pos--) {
				testPos = positions[pos];
				if ((testPos.match.optionality ||
					testPos.match.optionalQuantifier ||
					(lvTestAlt && ((lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null) ||
					(testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")))) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
					bl--;
				} else break;
			}
			return returnDefinition ? {
				"l": bl,
				"def": positions[bl] ? positions[bl].match : undefined
			} : bl;
		}

		function clearOptionalTail(buffer) {
			var rl = determineLastRequiredPosition(),
				lmib = buffer.length - 1;
			for (; lmib > rl; lmib--) {
				if (isMask(lmib)) break; //fixme ismask is not good enough
			}
			buffer.splice(rl, lmib + 1 - rl);

			return buffer;
		}

		function isComplete(buffer) { //return true / false / undefined (repeat *)
			if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
			if (opts.repeat === "*") return undefined;
			var complete = false,
				lrp = determineLastRequiredPosition(true),
				aml = seekPrevious(lrp.l);

			if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
				complete = true;
				for (var i = 0; i <= aml; i++) {
					var test = getTestTemplate(i).match;
					if ((test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.fn === null && buffer[i] !== getPlaceholder(i, test))) {
						complete = false;
						break;
					}
				}
			}
			return complete;
		}


		function handleRemove(input, k, pos, strict) {
			function generalize() {
				if (opts.keepStatic) {
					var validInputs = [],
						lastAlt = getLastValidPosition(-1, true), positionsClone = $.extend(true, {}, getMaskSet().validPositions),
						prevAltPos = getMaskSet().validPositions[lastAlt];
					//find last alternation
					for (; lastAlt >= 0; lastAlt--) {
						var altPos = getMaskSet().validPositions[lastAlt];
						if (altPos) {
							if (altPos.generatedInput !== true && /[0-9a-bA-Z]/.test(altPos.input)) {
								validInputs.push(altPos.input);
							}
							delete getMaskSet().validPositions[lastAlt];
							if (altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) {
								break;
							}
							prevAltPos = altPos;
						}
					}

					if (lastAlt > -1) {
						getMaskSet().p = seekNext(getLastValidPosition(-1, true));
						while (validInputs.length > 0) {
							var keypress = new $.Event("keypress");
							keypress.which = validInputs.pop().charCodeAt(0);
							EventHandlers.keypressEvent.call(input, keypress, true, false, false, getMaskSet().p);
						}
					} else getMaskSet().validPositions = $.extend(true, {}, positionsClone); //restore original positions
				}
			}

			if (opts.numericInput || isRTL) {
				if (k === Inputmask.keyCode.BACKSPACE) {
					k = Inputmask.keyCode.DELETE;
				} else if (k === Inputmask.keyCode.DELETE) {
					k = Inputmask.keyCode.BACKSPACE;
				}

				if (isRTL) {
					var pend = pos.end;
					pos.end = pos.begin;
					pos.begin = pend;
				}
			}

			if (k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === false)) {
				pos.begin = seekPrevious(pos.begin);
				if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
					pos.begin--;
				}
			} else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
				pos.end = isMask(pos.end, true) ? pos.end + 1 : seekNext(pos.end) + 1;
				if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
					pos.end++;
				}
			}

			stripValidPositions(pos.begin, pos.end, false, strict);
			if (strict !== true) {
				generalize(); //revert the alternation
			}
			var lvp = getLastValidPosition(pos.begin, true);
			if (lvp < pos.begin) {
				//if (lvp === -1) resetMaskSet();
				getMaskSet().p = seekNext(lvp);
			} else if (strict !== true) {
				getMaskSet().p = pos.begin;
			}
		}

		var EventRuler = {
			on: function (input, eventName, eventHandler) {
				var ev = function (e) {
					// console.log("triggered " + e.type);

					if (this.inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
						var imOpts = $.data(this, "_inputmask_opts");
						if (imOpts) (new Inputmask(imOpts)).mask(this);
						else EventRuler.off(this);
					} else if (e.type !== "setvalue" && (this.disabled || (this.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || (opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))))) {
						e.preventDefault();
					} else {
						switch (e.type) {
							case "input":
								if (skipInputEvent === true) {
									skipInputEvent = false;
									return e.preventDefault();
								}
								break;
							case "keydown":
								//Safari 5.1.x - modal dialog fires keypress twice workaround
								skipKeyPressEvent = false;
								skipInputEvent = false;
								break;
							case "keypress":
								if (skipKeyPressEvent === true) {
									return e.preventDefault();
								}
								skipKeyPressEvent = true;
								break;
							case "click":
								if (iemobile || iphone) {
									var that = this, args = arguments;
									setTimeout(function () {
										eventHandler.apply(that, args);
									}, 0);
									return false;
								}
								break;
						}
						// console.log("executed " + e.type);
						var returnVal = eventHandler.apply(this, arguments);
						if (returnVal === false) {
							e.preventDefault();
							e.stopPropagation();
						}
						return returnVal;
					}
				};
				//keep instance of the event
				input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
				input.inputmask.events[eventName].push(ev);

				if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
					if (input.form != null) $(input.form).on(eventName, ev);
				} else {
					$(input).on(eventName, ev);
				}
			},
			off: function (input, event) {
				if (input.inputmask && input.inputmask.events) {
					var events;
					if (event) {
						events = [];
						events[event] = input.inputmask.events[event];
					} else {
						events = input.inputmask.events;
					}
					$.each(events, function (eventName, evArr) {
						while (evArr.length > 0) {
							var ev = evArr.pop();
							if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
								if (input.form != null) $(input.form).off(eventName, ev);
							} else {
								$(input).off(eventName, ev);
							}
						}
						delete input.inputmask.events[eventName];
					});
				}
			}
		};
		var EventHandlers = {
			keydownEvent: function (e) {
				function isInputEventSupported(eventName) {
					var el = document.createElement("input"),
						evName = "on" + eventName,
						isSupported = (evName in el);
					if (!isSupported) {
						el.setAttribute(evName, "return;");
						isSupported = typeof el[evName] == "function";
					}
					el = null;
					return isSupported;
				}

				var input = this,
					$input = $(input),
					k = e.keyCode,
					pos = caret(input);

				//backspace, delete, and escape get special treatment
				if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || (iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI) || (e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut"))) { //backspace/delete
					e.preventDefault(); //stop default action but allow propagation
					handleRemove(input, k, pos);
					writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
					if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
						$input.trigger("cleared");
					} else if (isComplete(getBuffer()) === true) {
						$input.trigger("complete");
					}
				} else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
					e.preventDefault();
					var caretPos = seekNext(getLastValidPosition());
					if (!opts.insertMode && caretPos === getMaskSet().maskLength && !e.shiftKey) caretPos--;
					caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
				} else if ((k === Inputmask.keyCode.HOME && !e.shiftKey) || k === Inputmask.keyCode.PAGE_UP) { //Home or page_up
					e.preventDefault();
					caret(input, 0, e.shiftKey ? pos.begin : 0, true);
				} else if (((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE) || (k === 90 && e.ctrlKey)) && e.altKey !== true) { //escape && undo && #762
					checkVal(input, true, false, undoValue.split(""));
					$input.trigger("click");
				} else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) { //insert
					opts.insertMode = !opts.insertMode;
					caret(input, !opts.insertMode && pos.begin === getMaskSet().maskLength ? pos.begin - 1 : pos.begin);
				} else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
					if (e.shiftKey === true) {
						if (getTest(pos.begin).match.fn === null) {
							pos.begin = seekNext(pos.begin);
						}
						pos.end = seekPrevious(pos.begin, true);
						pos.begin = seekPrevious(pos.end, true);
					} else {
						pos.begin = seekNext(pos.begin, true);
						pos.end = seekNext(pos.begin, true);
						if (pos.end < getMaskSet().maskLength) pos.end--;
					}
					if (pos.begin < getMaskSet().maskLength) {
						e.preventDefault();
						caret(input, pos.begin, pos.end);
					}
				} else if (!e.shiftKey) {
					if (opts.insertMode === false) {
						if (k === Inputmask.keyCode.RIGHT) {
							setTimeout(function () {
								var caretPos = caret(input);
								caret(input, caretPos.begin);
							}, 0);
						} else if (k === Inputmask.keyCode.LEFT) {
							setTimeout(function () {
								var caretPos = caret(input);
								caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
							}, 0);
						}
					}
				}
				opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
				ignorable = $.inArray(k, opts.ignorables) !== -1;
			},
			keypressEvent: function (e, checkval, writeOut, strict, ndx) {
				var input = this,
					$input = $(input),
					k = e.which || e.charCode || e.keyCode;

				if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
					if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
						undoValue = getBuffer().join("");
						// e.preventDefault();
						setTimeout(function () {
							$input.trigger("change");
						}, 0);
					}
					return true;
				} else {
					if (k) {
						//special treat the decimal separator
						if (k === 46 && e.shiftKey === false && opts.radixPoint === ",") k = 44;
						var pos = checkval ? {
								begin: ndx,
								end: ndx
							} : caret(input),
							forwardPosition, c = String.fromCharCode(k);

						getMaskSet().writeOutBuffer = true;
						var valResult = isValid(pos, c, strict);
						if (valResult !== false) {
							resetMaskSet(true);
							forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos);
							getMaskSet().p = forwardPosition; //needed for checkval
						}

						if (writeOut !== false) {
							var self = this;
							setTimeout(function () {
								opts.onKeyValidation.call(self, k, valResult, opts);
							}, 0);
							if (getMaskSet().writeOutBuffer && valResult !== false) {
								var buffer = getBuffer();
								writeBuffer(input, buffer, (opts.numericInput && valResult.caret === undefined) ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== true);
								if (checkval !== true) {
									setTimeout(function () { //timeout needed for IE
										if (isComplete(buffer) === true) $input.trigger("complete");
									}, 0);
								}
							}
						}

						e.preventDefault();

						if (checkval) {
							valResult.forwardPosition = forwardPosition;
							return valResult;
						}
					}
				}
			},
			pasteEvent: function (e) {
				var input = this,
					ev = e.originalEvent || e,
					$input = $(input),
					inputValue = input.inputmask._valueGet(true),
					caretPos = caret(input),
					tempValue;

				if (isRTL) {
					tempValue = caretPos.end;
					caretPos.end = caretPos.begin;
					caretPos.begin = tempValue;
				}

				var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
					valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

				if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
				if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
				if (isRTL) {
					tempValue = valueBeforeCaret;
					valueBeforeCaret = valueAfterCaret;
					valueAfterCaret = tempValue;
				}

				if (window.clipboardData && window.clipboardData.getData) { // IE
					inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
				} else if (ev.clipboardData && ev.clipboardData.getData) {
					inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
				} else return true; //allow native paste event as fallback ~ masking will continue by inputfallback

				var pasteValue = inputValue;
				if ($.isFunction(opts.onBeforePaste)) {
					pasteValue = opts.onBeforePaste(inputValue, opts);
					if (pasteValue === false) {
						return e.preventDefault();
					}
					if (!pasteValue) {
						pasteValue = inputValue;
					}
				}
				checkVal(input, false, false, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split(""));
				writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
				if (isComplete(getBuffer()) === true) {
					$input.trigger("complete");
				}

				return e.preventDefault();
			},
			inputFallBackEvent: function (e) { //fallback when keypress fails
				var input = this,
					inputValue = input.inputmask._valueGet();

				//console.log(inputValue);
				if (getBuffer().join("") !== inputValue) {
					var caretPos = caret(input);
					inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), "");

					if (iemobile) { //iemobile just set the character at the end althought the caret position is correctly set
						var inputChar = inputValue.replace(getBuffer().join(""), "");
						if (inputChar.length === 1) {
							var keypress = new $.Event("keypress");
							keypress.which = inputChar.charCodeAt(0);
							EventHandlers.keypressEvent.call(input, keypress, true, true, false, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1);
							return false;
						}
					}

					if (caretPos.begin > inputValue.length) {
						caret(input, inputValue.length);
						caretPos = caret(input);
					}
					//detect & treat possible backspace before static
					if ((getBuffer().length - inputValue.length) === 1 && inputValue.charAt(caretPos.begin) !== getBuffer()[caretPos.begin] && inputValue.charAt(caretPos.begin + 1) !== getBuffer()[caretPos.begin] && !isMask(caretPos.begin)) {
						e.keyCode = Inputmask.keyCode.BACKSPACE;
						EventHandlers.keydownEvent.call(input, e);
					} else {
						var lvp = getLastValidPosition() + 1;
						var bufferTemplate = getBufferTemplate().join(""); //getBuffer().slice(lvp).join('');
						while (inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
							bufferTemplate = bufferTemplate.slice(1);
						}
						inputValue = inputValue.replace(bufferTemplate, "");
						inputValue = inputValue.split("");
						checkVal(input, true, false, inputValue, e, caretPos.begin < lvp);

						if (isComplete(getBuffer()) === true) {
							$(input).trigger("complete");
						}
					}
					e.preventDefault();
				}
			},
			setValueEvent: function (e) {
				var input = this,
					value = input.inputmask._valueGet();
				checkVal(input, true, false, ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(value, opts) || value) : value).split(""));
				undoValue = getBuffer().join("");
				if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
					input.inputmask._valueSet("");
				}
			},
			focusEvent: function (e) {
				var input = this,
					nptValue = input.inputmask._valueGet();
				if (opts.showMaskOnFocus && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue === ""))) {
					if (input.inputmask._valueGet() !== getBuffer().join("")) {
						writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
					} else if (mouseEnter === false) { //only executed on focus without mouseenter
						caret(input, seekNext(getLastValidPosition()));
					}
				}
				if (opts.positionCaretOnTab === true) {
					EventHandlers.clickEvent.apply(input, [e, true]);
				}
				undoValue = getBuffer().join("");
			},
			mouseleaveEvent: function (e) {
				var input = this;
				mouseEnter = false;
				if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
					var buffer = getBuffer().slice(),
						nptValue = input.inputmask._valueGet();
					if (nptValue !== input.getAttribute("placeholder") && nptValue !== "") {
						if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
							buffer = [];
						} else { //clearout optional tail of the mask
							clearOptionalTail(buffer);
						}
						writeBuffer(input, buffer);
					}
				}
			},
			clickEvent: function (e, tabbed) {
				function doRadixFocus(clickPos) {
					if (opts.radixPoint !== "") {
						var vps = getMaskSet().validPositions;
						if (vps[clickPos] === undefined || (vps[clickPos].input === getPlaceholder(clickPos))) {
							if (clickPos < seekNext(-1)) return true;
							var radixPos = $.inArray(opts.radixPoint, getBuffer());
							if (radixPos !== -1) {
								for (var vp in vps) {
									if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
										return false;
									}
								}
								return true;
							}
						}
					}
					return false;
				}

				var input = this;
				setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
					if (document.activeElement === input) {
						var selectedCaret = caret(input);
						if (tabbed) selectedCaret.begin = selectedCaret.end;
						if (selectedCaret.begin === selectedCaret.end) {
							switch (opts.positionCaretOnClick) {
								case "none":
									break;
								case "radixFocus":
									if (doRadixFocus(selectedCaret.begin)) {
										var radixPos = $.inArray(opts.radixPoint, getBuffer().join(""));
										caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
										break;
									}
								default: //lvp:
									var clickPosition = selectedCaret.begin,
										lvclickPosition = getLastValidPosition(clickPosition, true),
										lastPosition = seekNext(lvclickPosition);

									if (clickPosition < lastPosition) {
										caret(input, !isMask(clickPosition) && !isMask(clickPosition - 1) ? seekNext(clickPosition) : clickPosition);
									} else {
										var placeholder = getPlaceholder(lastPosition);
										if ((placeholder !== "" && getBuffer()[lastPosition] !== placeholder && getTest(lastPosition).match.optionalQuantifier !== true) || (!isMask(lastPosition) && getTest(lastPosition).match.def === placeholder)) {
											lastPosition = seekNext(lastPosition);
										}
										caret(input, lastPosition);
									}
									break;
							}
						}
					}
				}, 0);
			},
			dblclickEvent: function (e) {
				var input = this;
				setTimeout(function () {
					caret(input, 0, seekNext(getLastValidPosition()));
				}, 0);
			},
			cutEvent: function (e) {
				var input = this,
					$input = $(input),
					pos = caret(input),
					ev = e.originalEvent || e;

				//correct clipboardData
				var clipboardData = window.clipboardData || ev.clipboardData,
					clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
				clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
				if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

				handleRemove(input, Inputmask.keyCode.DELETE, pos);
				writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));

				if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
					$input.trigger("cleared");
				}
			},
			blurEvent: function (e) {
				var $input = $(this),
					input = this;
				if (input.inputmask) {
					var nptValue = input.inputmask._valueGet(),
						buffer = getBuffer().slice();
					if (undoValue !== buffer.join("")) {
						setTimeout(function () { //change event should be triggered after the other buffer manipulations on blur
							$input.trigger("change");
							undoValue = buffer.join("");
						}, 0);
					}
					if (nptValue !== "") {
						if (opts.clearMaskOnLostFocus) {
							if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
								buffer = [];
							} else { //clearout optional tail of the mask
								clearOptionalTail(buffer);
							}
						}
						if (isComplete(buffer) === false) {
							setTimeout(function () {
								$input.trigger("incomplete");
							}, 0);
							if (opts.clearIncomplete) {
								resetMaskSet();
								if (opts.clearMaskOnLostFocus) {
									buffer = [];
								} else {
									buffer = getBufferTemplate().slice();
								}
							}
						}

						writeBuffer(input, buffer, undefined, e);
					}
				}
			},
			mouseenterEvent: function (e) {
				var input = this;
				mouseEnter = true;
				if (document.activeElement !== input && opts.showMaskOnHover) {
					if (input.inputmask._valueGet() !== getBuffer().join("")) {
						writeBuffer(input, getBuffer());
					}
				}
			},
			submitEvent: function (e) { //trigger change on submit if any
				if (undoValue !== getBuffer().join("")) {
					$el.trigger("change");
				}
				if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
					el.inputmask._valueSet(""); //clear masktemplete on submit and still has focus
				}
				if (opts.removeMaskOnSubmit) {
					el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
					setTimeout(function () {
						writeBuffer(el, getBuffer());
					}, 0);
				}
			},
			resetEvent: function (e) {
				setTimeout(function () {
					$el.trigger("setvalue");
				}, 0);
			}
		};


		function initializeColorMask(input) {
			function findCaretPos(clientx) {
				//calculate text width
				var e = document.createElement('span'), caretPos;
				for (var style in computedStyle) { //clone styles
					if (isNaN(style) && style.indexOf("font") !== -1) {
						e.style[style] = computedStyle[style];
					}
				}
				e.style.textTransform = computedStyle.textTransform;
				e.style.letterSpacing = computedStyle.letterSpacing;
				e.style.position = "absolute";
				e.style.height = "auto";
				e.style.width = "auto";
				e.style.visibility = "hidden";
				e.style.whiteSpace = "nowrap";

				document.body.appendChild(e);
				var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
				for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
					e.innerHTML += inputText.charAt(caretPos) || "_";
					if (e.offsetWidth >= clientx) {
						var offset1 = (clientx - previousWidth);
						var offset2 = e.offsetWidth - clientx;
						e.innerHTML = inputText.charAt(caretPos);
						offset1 -= (e.offsetWidth / 3);
						caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
						break;
					}
					previousWidth = e.offsetWidth;
				}
				document.body.removeChild(e);
				return caretPos;
			}

			function position() {
				colorMask.style.position = "absolute";
				colorMask.style.top = offset.top + "px";
				colorMask.style.left = offset.left + "px";
				colorMask.style.width = parseInt(input.offsetWidth) - parseInt(computedStyle.paddingLeft) - parseInt(computedStyle.paddingRight) - parseInt(computedStyle.borderLeftWidth) - parseInt(computedStyle.borderRightWidth) + "px";
				colorMask.style.height = parseInt(input.offsetHeight) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.borderTopWidth) - parseInt(computedStyle.borderBottomWidth) + "px";

				colorMask.style.lineHeight = colorMask.style.height;
				colorMask.style.zIndex = isNaN(computedStyle.zIndex) ? -1 : computedStyle.zIndex - 1;
				colorMask.style.webkitAppearance = "textfield";
				colorMask.style.mozAppearance = "textfield";
				colorMask.style.Appearance = "textfield";

			}

			var offset = $(input).position(),
				computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
				parentNode = input.parentNode;

			colorMask = document.createElement("div");
			document.body.appendChild(colorMask); //insert at body to prevent css clash :last-child for example
			for (var style in computedStyle) { //clone styles
				if (isNaN(style) && style !== "cssText" && style.indexOf("webkit") == -1) {
					colorMask.style[style] = computedStyle[style];
				}
			}

			//restyle input
			input.style.backgroundColor = "transparent";
			input.style.color = "transparent";
			input.style.webkitAppearance = "caret";
			input.style.mozAppearance = "caret";
			input.style.Appearance = "caret";

			position();

			//event passthrough
			$(window).on("resize", function (e) {
				offset = $(input).position();
				computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
				position();
			});
			$(input).on("click", function (e) {
				caret(input, findCaretPos(e.clientX));
				return EventHandlers.clickEvent.call(this, [e]);
			});
			$(input).on("keydown", function (e) {
				if (!e.shiftKey && opts.insertMode !== false) {
					setTimeout(function () {
						renderColorMask(input);
					}, 0);
				}
			});
		}

		function renderColorMask(input, buffer, caretPos) {
			function handleStatic() {
				if (!static && (test.fn === null || testPos.input === undefined)) {
					static = true;
					maskTemplate += "<span class='im-static''>"
				} else if (static && (test.fn !== null && testPos.input !== undefined)) {
					static = false;
					maskTemplate += "</span>"
				}
			}

			if (colorMask !== undefined) {
				buffer = buffer || getBuffer();
				if (caretPos === undefined) {
					caretPos = caret(input);
				} else if (caretPos.begin === undefined) {
					caretPos = {begin: caretPos, end: caretPos};
				}

				var maskTemplate = "", static = false;
				if (buffer != "") {
					var ndxIntlzr, pos = 0,
						test, testPos, lvp = getLastValidPosition();
					do {
						if (pos === caretPos.begin && document.activeElement === input) {
							maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>";
						}
						if (getMaskSet().validPositions[pos]) {
							testPos = getMaskSet().validPositions[pos];
							test = testPos.match;
							ndxIntlzr = testPos.locator.slice();
							handleStatic();
							maskTemplate += testPos.input;
						} else {
							testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
							test = testPos.match;
							ndxIntlzr = testPos.locator.slice();
							if (opts.jitMasking === false || pos < lvp || (Number.isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
								handleStatic();
								maskTemplate += getPlaceholder(pos, test);
							}
						}
						pos++;
					} while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos);
				}
				colorMask.innerHTML = maskTemplate;
			}
		}

		function mask(elem) {
			function isElementTypeSupported(input, opts) {
				function patchValueProperty(npt) {
					var valueGet;
					var valueSet;

					function patchValhook(type) {
						if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
							var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
								return elem.value;
							};
							var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
								elem.value = value;
								return elem;
							};

							$.valHooks[type] = {
								get: function (elem) {
									if (elem.inputmask) {
										if (elem.inputmask.opts.autoUnmask) {
											return elem.inputmask.unmaskedvalue();
										} else {
											var result = valhookGet(elem);
											return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
										}
									} else return valhookGet(elem);
								},
								set: function (elem, value) {
									var $elem = $(elem),
										result;
									result = valhookSet(elem, value);
									if (elem.inputmask) {
										$elem.trigger("setvalue");
									}
									return result;
								},
								inputmaskpatch: true
							};
						}
					}

					function getter() {
						if (this.inputmask) {
							return this.inputmask.opts.autoUnmask ?
								this.inputmask.unmaskedvalue() :
								(getLastValidPosition() !== -1 || opts.nullable !== true ?
									(document.activeElement === this && opts.clearMaskOnLostFocus ?
										(isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") :
										valueGet.call(this)) :
									"");
						} else return valueGet.call(this);
					}

					function setter(value) {
						valueSet.call(this, value);
						if (this.inputmask) {
							$(this).trigger("setvalue");
						}
					}

					function installNativeValueSetFallback(npt) {
						EventRuler.on(npt, "mouseenter", function (event) {
							var $input = $(this),
								input = this,
								value = input.inputmask._valueGet();
							if (value !== getBuffer().join("") /*&& getLastValidPosition() > 0*/) {
								$input.trigger("setvalue");
							}
						});
					}

					if (!npt.inputmask.__valueGet) {
						if (opts.noValuePatching !== true) {
							if (Object.getOwnPropertyDescriptor) {
								if (typeof Object.getPrototypeOf !== "function") {
									Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function (object) {
										return object.__proto__;
									} : function (object) {
										return object.constructor.prototype;
									};
								}

								var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
								if (valueProperty && valueProperty.get && valueProperty.set) {
									valueGet = valueProperty.get;
									valueSet = valueProperty.set;
									Object.defineProperty(npt, "value", {
										get: getter,
										set: setter,
										configurable: true
									});
								} else if (npt.tagName !== "INPUT") {
									valueGet = function () {
										return this.textContent;
									};
									valueSet = function (value) {
										this.textContent = value;
									};
									Object.defineProperty(npt, "value", {
										get: getter,
										set: setter,
										configurable: true
									});
								}
							} else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
								valueGet = npt.__lookupGetter__("value");
								valueSet = npt.__lookupSetter__("value");

								npt.__defineGetter__("value", getter);
								npt.__defineSetter__("value", setter);
							}
							npt.inputmask.__valueGet = valueGet; //store native property getter
							npt.inputmask.__valueSet = valueSet; //store native property setter
						}
						npt.inputmask._valueGet = function (overruleRTL) {
							return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
						};
						npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
							valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && isRTL) ? value.split("").reverse().join("") : value));
						};

						if (valueGet === undefined) { //jquery.val fallback
							valueGet = function () {
								return this.value;
							};
							valueSet = function (value) {
								this.value = value;
							};
							patchValhook(npt.type);
							installNativeValueSetFallback(npt);
						}
					}
				}

				var elementType = input.getAttribute("type");
				var isSupported = (input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1) || input.isContentEditable || input.tagName === "TEXTAREA";
				if (!isSupported) {
					if (input.tagName === "INPUT") {
						var el = document.createElement("input");
						el.setAttribute("type", elementType);
						isSupported = el.type === "text"; //apply mask only if the type is not natively supported
						el = null;
					} else isSupported = "partial";
				}
				if (isSupported !== false) {
					patchValueProperty(input);
				}
				return isSupported;
			}

			var isSupported = isElementTypeSupported(elem, opts);
			if (isSupported !== false) {
				el = elem;
				$el = $(el);

				if (el.dir === "rtl" || opts.rightAlign) {
					el.style.textAlign = "right";
				}

				if (el.dir === "rtl" || opts.numericInput) {
					el.dir = "ltr";
					el.removeAttribute("dir");
					el.inputmask.isRTL = true;
					isRTL = true;
				}

				if (opts.colorMask === true) {
					initializeColorMask(el);
				}

				if (android) {
					if (el.hasOwnProperty("inputmode")) {
						el.inputmode = opts.inputmode;
						el.setAttribute("inputmode", opts.inputmode);
					}
					if (opts.androidHack === "rtfm") {
						if (opts.colorMask !== true) {
							initializeColorMask(el);
						}
						el.type = "password";
					}
				}

				//unbind all events - to make sure that no other mask will interfere when re-masking
				EventRuler.off(el);
				if (isSupported === true) {
					//bind events
					EventRuler.on(el, "submit", EventHandlers.submitEvent);
					EventRuler.on(el, "reset", EventHandlers.resetEvent);

					EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
					EventRuler.on(el, "blur", EventHandlers.blurEvent);
					EventRuler.on(el, "focus", EventHandlers.focusEvent);
					EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
					if (opts.colorMask !== true)
						EventRuler.on(el, "click", EventHandlers.clickEvent);
					EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent);
					EventRuler.on(el, "paste", EventHandlers.pasteEvent);
					EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent);
					EventRuler.on(el, "drop", EventHandlers.pasteEvent);
					EventRuler.on(el, "cut", EventHandlers.cutEvent);
					EventRuler.on(el, "complete", opts.oncomplete);
					EventRuler.on(el, "incomplete", opts.onincomplete);
					EventRuler.on(el, "cleared", opts.oncleared);
					if (opts.inputEventOnly !== true) {
						EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
						EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
					}
					EventRuler.on(el, "compositionstart", $.noop);
					EventRuler.on(el, "compositionupdate", $.noop);
					EventRuler.on(el, "compositionend", $.noop);
					EventRuler.on(el, "keyup", $.noop);
					EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
				}
				EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);

				//apply mask
				getBufferTemplate(); //initialize the buffer and getmasklength
				if (el.inputmask._valueGet() !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
					var initialValue = $.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(el.inputmask._valueGet(), opts) || el.inputmask._valueGet()) : el.inputmask._valueGet();
					checkVal(el, true, false, initialValue.split(""));
					var buffer = getBuffer().slice();
					undoValue = buffer.join("");
					// Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
					if (isComplete(buffer) === false) {
						if (opts.clearIncomplete) {
							resetMaskSet();
						}
					}
					if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
						if (getLastValidPosition() === -1) {
							buffer = [];
						} else {
							clearOptionalTail(buffer);
						}
					}
					writeBuffer(el, buffer);
					if (document.activeElement === el) { //position the caret when in focus
						caret(el, seekNext(getLastValidPosition()));
					}
				}
			}
		}

//action object
		var valueBuffer;
		if (actionObj !== undefined) {
			switch (actionObj.action) {
				case "isComplete":
					el = actionObj.el;
					return isComplete(getBuffer());
				case "unmaskedvalue":
					if (el === undefined || actionObj.value !== undefined) {
						valueBuffer = actionObj.value;
						valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(valueBuffer, opts) || valueBuffer) : valueBuffer).split("");
						checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
						if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);
					}
					return unmaskedvalue(el);
				case "mask":
					mask(el);
					break;
				case "format":
					valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(actionObj.value, opts) || actionObj.value) : actionObj.value).split("");
					checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
					if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);

					if (actionObj.metadata) {
						return {
							value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
							metadata: maskScope.call(this, {
								"action": "getmetadata"
							}, maskset, opts)
						};
					}

					return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
				case "isValid":
					if (actionObj.value) {
						valueBuffer = actionObj.value.split("");
						checkVal(undefined, false, true, isRTL ? valueBuffer.reverse() : valueBuffer);
					} else {
						actionObj.value = getBuffer().join("");
					}
					var buffer = getBuffer();
					var rl = determineLastRequiredPosition(),
						lmib = buffer.length - 1;
					for (; lmib > rl; lmib--) {
						if (isMask(lmib)) break;
					}
					buffer.splice(rl, lmib + 1 - rl);

					return isComplete(buffer) && actionObj.value === getBuffer().join("");
				case "getemptymask":
					return getBufferTemplate().join("");
				case "remove":
					if (el) {
						$el = $(el);
						//writeout the unmaskedvalue
						el.inputmask._valueSet(unmaskedvalue(el));
						//unbind all events
						EventRuler.off(el);
						//restore the value property
						var valueProperty;
						if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
							valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
							if (valueProperty) {
								if (el.inputmask.__valueGet) {
									Object.defineProperty(el, "value", {
										get: el.inputmask.__valueGet,
										set: el.inputmask.__valueSet,
										configurable: true
									});
								}
							}
						} else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
							if (el.inputmask.__valueGet) {
								el.__defineGetter__("value", el.inputmask.__valueGet);
								el.__defineSetter__("value", el.inputmask.__valueSet);
							}
						}
						//clear data
						el.inputmask = undefined;
					}
					return el;
					break;
				case "getmetadata":
					if ($.isArray(maskset.metadata)) {
						var maskTarget = getMaskTemplate(true, 0, false).join("");
						$.each(maskset.metadata, function (ndx, mtdt) {
							if (mtdt.mask === maskTarget) {
								maskTarget = mtdt;
								return false;
							}
						});
						return maskTarget;
					}

					return maskset.metadata;
			}
		}
	}

//make inputmask available
	window.Inputmask = Inputmask;
	return Inputmask;
}));

/*
 * Input Mask plugin for jquery
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery", "inputmask"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"), require("./inputmask"));
	} else {
		factory(jQuery, window.Inputmask);
	}
}
(function ($, Inputmask) {
	if ($.fn.inputmask === undefined) {
		//jquery plugin
		$.fn.inputmask = function (fn, options) {
			var nptmask, input = this[0];
			if (options === undefined) options = {};
			if (typeof fn === "string") {
				switch (fn) {
					case "unmaskedvalue":
						return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
					case "remove":
						return this.each(function () {
							if (this.inputmask) this.inputmask.remove();
						});
					case "getemptymask":
						return input && input.inputmask ? input.inputmask.getemptymask() : "";
					case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
						return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
					case "isComplete":
						return input && input.inputmask ? input.inputmask.isComplete() : true;
					case "getmetadata": //return mask metadata if exists
						return input && input.inputmask ? input.inputmask.getmetadata() : undefined;
					case "setvalue":
						$(input).val(options);
						if (input && input.inputmask === undefined) { //reactivate jquery.clone
							$(input).triggerHandler("setvalue");
						}
						break;
					case "option":
						if (typeof options === "string") {
							if (input && input.inputmask !== undefined) {
								return input.inputmask.option(options);
							}
						} else {
							return this.each(function () {
								if (this.inputmask !== undefined) {
									return this.inputmask.option(options);
								}
							});
						}
						break;
					default:
						options.alias = fn;
						nptmask = new Inputmask(options);
						return this.each(function () {
							nptmask.mask(this);
						});
				}
			} else if (typeof fn == "object") {
				nptmask = new Inputmask(fn);
				if (fn.mask === undefined && fn.alias === undefined) {
					return this.each(function () {
						if (this.inputmask !== undefined) {
							return this.inputmask.option(fn);
						} else nptmask.mask(this);
					});
				} else {
					return this.each(function () {
						nptmask.mask(this);
					});
				}
			} else if (fn === undefined) {
				//look for data-inputmask atributes
				return this.each(function () {
					nptmask = new Inputmask(options);
					nptmask.mask(this);
				});
			}
		};
	}
	return $.fn.inputmask;
}));

$(document).ready(function() {


    if ($('.advantages__slider').length > 0) {

        $('.owl-carousel').owlCarousel({
            loop:true,
            items: 3,
            autoWidth: true,
            center: true,
            nav: false,
            dots: true,
            smartSpeed: 700,
            dotsSpeed: 700,
            dragEndSpeed: 700
        });

        $('.advantages__slider .advantages-item').click(function (e) {
            const id = $(this).attr('data-slide');

            //advantagesSlider.slick('slickGoTo', id-1);
            $('.owl-carousel').trigger('to.owl.carousel', id-1);
        });

    };

});
$(document).ready(function(e) {

    // triggers for pagination
	$('.pagination__arrow--next').on('click', function(e) {
		e.preventDefault()
		if ($('.pagination__pages .next').length > 0) {
			window.location.href = $('.pagination__pages .next').attr('href')
		}
	})


	$('.pagination__arrow--prev').on('click', function(e) {
		e.preventDefault()
		if ($('.pagination__pages .prev').length > 0) {
			window.location.href = $('.pagination__pages .prev').attr('href')
		}
	})


    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scroll');

            if ($(window).scrollTop() > $('#startMenu').offset().top) {
                $('.header-menu').addClass('header-menu--visible');
            }
            else {
                $('.header-menu').removeClass('header-menu--visible');
            }
        }
        else {
            $('.header').removeClass('header--scroll');
        }
    });

    $('.top-menu__item').mouseover(function(e) {
        $(this).find('.top-menu__list').slideDown(300);
    });
    $('.top-menu__item').mouseleave(function(e) {
        $(this).find('.top-menu__list').slideUp();
    });

    $('.header-menu').click(function(e) {
        e.preventDefault();

        $(this).toggleClass('header-menu--active');
        $('.menu-screen').toggleClass('menu-screen--active');
        $('body').toggleClass('fixed');
    });

    if ($(window).width() < 768) {
        $('.footer-menu__title').click(function (e) {
            $(this).toggleClass('footer-menu__title--active');
            $(this).parents('.footer-menu__column').find('.footer-menu__list').slideToggle();
        });
    }

    if ($('.tel-input').length > 0) {
        $('.tel-input').inputmask({
            "mask": "+7 (999) 999-99-99"
            , "placeholder": "_"
            , showMaskOnHover: false
            , showMaskOnFocus: true
        });
    }    

    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().slideUp();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').slideUp();
            $(this).addClass('open');
            $(this).next().slideDown();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().slideUp();
        $(this).parent().prev().addClass('select__item--full').text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').slideUp();
        }
    });

    $('.cseModalButton').click(function (e) {
        e.preventDefault();
        $('.cse-modal').addClass('cse-modal--active');
        $('body, html').animate({scrollTop: $('.cse-modal').offset().top + 'px'});
    });

    $('.cse-modal__close').click(function(e) {
        e.preventDefault();
        $('.cse-modal').removeClass('cse-modal--active');
    });

  });