!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n=C(i(1)),a=C(i(2)),s=C(i(3)),r=C(i(4)),c=C(i(5)),o=C(i(6)),l=C(i(7)),u=C(i(8)),d=C(i(9)),f=C(i(10)),h=C(i(11)),p=C(i(12)),v=C(i(13)),m=C(i(14)),g=C(i(15)),y=C(i(16)),$=C(i(17));function C(e){return e&&e.__esModule?e:{default:e}}n.default.init(),s.default.init(),r.default.init(),a.default.init(),c.default.init(),o.default.init(),l.default.init(),u.default.init(),d.default.markdownLinksNewPage(),f.default.init(),h.default.init(),p.default.init(),v.default.init(),m.default.init(),g.default.init(),y.default.init(),$.default.init()},function(e,t,i){"use strict";var n={handleClick:function(){$(".js-open-accordion").click(function(e){$(e.currentTarget).hasClass("js-active")?$(e.currentTarget).removeClass("js-active"):$(e.currentTarget).addClass("js-active")})},init:function(){this.handleClick()}};e.exports=n},function(e,t,i){"use strict";var n={onClickOverlay:function(){$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")})},init:function(){this.onClickOverlay()}};e.exports=n},function(e,t,i){"use strict";var n={openModal:function(){$(".js-open-modal").click(function(e){$(e.currentTarget).find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")})},closeModal:function(){$("body").on("click",".js-close-modal",function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")})},clickOverlayCloseModal:function(){$("#overlay").click(function(){$("body").removeClass("js-body-modal-active")})},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=n},function(e,t,i){"use strict";var n={mainMenu:function(){$(".js-trigger-menu").click(function(e){$(e.currentTarget).next().addClass("js-active-menu"),$("#overlay").addClass("js-active")})},init:function(){this.mainMenu()}};e.exports=n},function(e,t,i){"use strict";var n={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",function(e){var t=$(e.currentTarget.hash),i=e.currentTarget.hostname,n=window.location.hostname,a=e.currentTarget.pathname.replace(/^\//,""),s=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name="+e.currentTarget.hash.slice(1)+"]")),!t.length||i!==n&&a!==s||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)})},init:function(){this.smoothScrolling()}};e.exports=n},function(e,t,i){"use strict";var n={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")})},init:function(){this.fixedSearchTrigger()}};e.exports=n},function(e,t,i){"use strict";var n={generalSlider:function(){$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]})},init:function(){this.generalSlider()}};e.exports=n},function(e,t,i){"use strict";var n={closeSticky:function(){$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")})},init:function(){this.closeSticky()}};e.exports=n},function(e,t,i){"use strict";var n={markdownLinksNewPage:function(){$(".markdown a").map(function(e,t){return t.setAttribute("target","_blank")})}};e.exports=n},function(e,t,i){"use strict";var n={handleInternalMenu:function(){$(".internal-menu__item").on("click",function(e){e.preventDefault();var t=$(e.currentTarget);$(".internal-menu__item").removeClass("js-active-item"),t.addClass("js-active-item");var i=t.attr("data-order");n.handleNavClick(i)})},getView:function(e){$("[data-nav-order='"+(e||"1")+"']").addClass("js-active-section")},handleNavClick:function(e){$(".js-active-section").removeClass("js-active-section"),n.getView(e)},init:function(){this.handleInternalMenu(),this.getView()}};e.exports=n},function(e,t,i){"use strict";var n={slideTarget:$(".slide-panel__container"),slideContainer:$(".slide-panel"),setupSlideAnimation:function(){n.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),n.slideContainer.removeClass("is-visible")},handleSlideDisplay:function(){$("body").on("click",".slide-panel__open-trigger",function(e){var t=e.currentTarget.getAttribute("data-term"),i=$('[data-value="'+t+'"]');i.hasClass("is-visible")?(n.slideTarget.animate({right:"-100%"},400).fadeOut(5),i.removeClass("is-visible")):(n.slideTarget.animate({right:"0%"},400).css("display","block"),i.addClass("is-visible"))})},handleSlideCloseButton:function(){$("body").on("click",".slide-panel__close-trigger",function(e){e.preventDefault(),n.slideTarget.animate({right:"-100%"},"slow").fadeOut(5),n.slideContainer.removeClass("is-visible")})},init:function(){this.setupSlideAnimation(),this.handleSlideDisplay(),this.handleSlideCloseButton()}};e.exports=n},function(e,t,i){"use strict";var n={openFilters:function(){$(".open-filters").click(function(){$(".filter-container").toggleClass("js-active"),$(".expand").toggleClass("expanded"),$(".expand").hasClass("expanded")?$(".expand").html("expand_less"):$(".expand").html("expand_more")})},init:function(){this.openFilters()}};e.exports=n},function(e,t,i){"use strict";var n={options:{valueNames:["name","uid","version","date","keywords",{name:"type",attr:"type"},{name:"hardware",attr:"hardware"},{name:"documentation",attr:"documentation"},{name:"software",attr:"software"}],fuzzySearch:{searchClass:"fuzzy-search",location:0,distance:100,threshold:.2,multiSearch:!0}},projectList:void 0,searchString:"",allFilters:$(".dropdown"),searchQueries:{documentation:"all",software:"all",hardware:"all"},typeCheckedValues:[],createList:function(){n.projectList=new List("project_data",n.options),document.location.href.indexOf("list")>-1&&n.projectList.sort("name",{order:"asc"})},filterList:function(){n.projectList.search(n.searchString),n.projectList.filter(function(e){if(null!==e.values().hardware&&null!==e.values().documentation&&null!==e.values().software&&null!==e.values().type&&-1!==e.values().hardware.indexOf(n.searchQueries.hardware)&&-1!==e.values().documentation.indexOf(n.searchQueries.documentation)&&-1!==e.values().software.indexOf(n.searchQueries.software)&&n.matchesAllItems(e.values().type,n.typeCheckedValues))return!0}),n.displayResults(),n.displayResultQueries()},filterBySearch:function(){$("#searchfield").on("keyup",function(e){n.searchString=$(e.currentTarget).val(),n.filterList()})},filterByDropdowns:function(){n.allFilters.on("change",function(e){n.allFilters.each(function(t){$(t).each(function(){var t=e.currentTarget.id,i=$(e.currentTarget).children(":selected").attr("id");n.searchQueries[t]=i})}),n.filterList()})},filterByCheckboxes:function(){$(".filter-container").on("change",$('input[type="checkbox"]:checked'),function(){n.typeCheckedValues=$('input[type="checkbox"]:checked').map(function(){return this.value}).get(),0===n.typeCheckedValues.length&&(n.typeCheckedValues=["all"]),n.filterList()})},matchesAllItems:function(e,t){var i=void 0,n=void 0;return e.length>t.length?(i=e,n=t):(i=t,n=e),n.every(function(e){return-1!==i.indexOf(e)})},filterByUrlParams:function(){var e=window.location.search.split("=")[0],t=window.location.search.split("=")[1];switch(e){case"?q":n.searchString=decodeURI(t),n.projectList.search(n.searchString),n.displayResultQueries();break;case"?type":$("input[type=checkbox][value="+t+"]").prop("checked",!0),n.typeCheckedValues.push(t),n.displayResultQueries(),n.projectList.filter(function(e){if(null!==e.values().type&&-1!==e.values().type.indexOf(t))return!0})}},clearAllFilters:function(){$(".clear_filters").on("click",function(e){e.preventDefault(),n.searchString="",n.projectList.search(),n.projectList.filter(),n.projectList.sort("name",{order:"asc"}),$(".search__input").val(""),$(".dropdown").prop("selectedIndex",0),$('input[type="checkbox"]:checked').prop("checked",!1),""!==window.location.search&&(window.location.href=window.location.origin+"/oshwa/list.html"),n.displayResults(),n.displayResultQueries()})},displayResults:function(){var e=$(".project").length;$(".results-count").html("<p>Displaying "+e+" Projects</p>")},displayResultQueries:function(){var e=[];""!==n.searchString&&e.push(n.searchString),$('input[name="type"]:checked').map(function(t,i){return e.push(i.id)}),$(".dropdown").map(function(t,i){return"Select one"!==i.value&&e.push(i.value),e}),e.length>0?($(".results-message").show(),0===$(".project").length?$(".results-message").html("<p>No results for: "+e.join("; ")+"</p>"):$(".results-message").html("<p>Results: "+e.join("; ")+"</p>")):$(".results-message").hide()},init:function(){this.createList(),this.filterBySearch(),this.filterByDropdowns(),this.filterByCheckboxes(),this.filterByUrlParams(),this.clearAllFilters(),this.displayResults()}};e.exports=n},function(e,t,i){"use strict";var n={citationContainer:$(".citations").find("a"),addIcon:function(){n.citationContainer.append('<i class="material-icons launch">launch</i>')},init:function(){this.addIcon()}};e.exports=n},function(e,t,i){"use strict";var n={listUrl:"/oshwa/list.html",searchString:$("#searchfield"),submitSearch:function(){$(".js-search-submit").on("click",function(){var e=n.searchString.val(),t=""+document.location.origin+n.listUrl+"?q="+e;window.location.href=t})},init:function(){this.submitSearch()}};e.exports=n},function(e,t,i){"use strict";var n={listUrl:"/oshwa/list.html",filterByTag:function(){$(".project__type").on("click",function(e){var t=e.target.getAttribute("type-tag"),i=""+document.location.origin+n.listUrl+"?type="+t;window.location.href=i})},init:function(){this.filterByTag()}};e.exports=n},function(e,t,i){"use strict";var n={schematicDescription:document.querySelectorAll(".schematic-description"),targetCircles:function(){$(".circle").on("click",function(e){var t=$(e.currentTarget).attr("circle-attr");$(e.currentTarget).hasClass("active")?$(e.currentTarget).removeClass("active"):($(e.currentTarget).addClass("active"),$(e.currentTarget).siblings().removeClass("active")),n.showData(t)})},showData:function(e){n.schematicDescription=[].slice.call(n.schematicDescription),n.schematicDescription.forEach(function(t){t.classList.contains(e)?t.classList.toggle("display"):t.classList.remove("display")})},activateFirstCircle:function(){var e=$(".circle").first();e.first().addClass("active"),n.showData(e.attr("circle-attr"))},init:function(){this.targetCircles(),this.activateFirstCircle()}};e.exports=n}]);