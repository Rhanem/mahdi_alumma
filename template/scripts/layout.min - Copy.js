/*
  Copyright © 2015 Adobe Systems Incorporated.  All rights reserved.
  Generated by Adobe RoboHelp 2015
*/

(function(){var t,e,i,n,r;n=window.rh,r=n._,t=n.$,e=n.consts,i=n.model,r.getRootUrl=function(){var t;return t=null,function(){return null!=t?t:t=""+r.getHostFolder()+e("START_FILEPATH")}}(),r.runTopicLoadingAnimation=function(){var t,n;return t=null,n=!1,function(o){return n=o,o?(null==t&&(t=r.debounce(function(){return i.publish(e("EVT_TOPIC_LOADING"),n)},700)),t()):(t=null,i.publish(e("EVT_TOPIC_LOADING"),!1))}}(),r.getTopicFrame=function(){var e;return e=window.gTopicFrameName||"rh_default_topic_frame_name",t("[name="+e+"]",0)}}).call(this),function(){var t,e,i,n,r,o,s;o=window.rh,s=o._,t=o.$,e=o.consts,n=o.model,n.publish(e("KEY_SHOW_TAGS"),"true"===o._params.showtags),n.publish(e("KEY_IFRAME_EVENTS"),{click:!0}),r={},i=function(){var t;return t=s.hashParams(),n.publish(e("EVT_HASH_CHANGE"),{oldMap:r,newMap:t},{sync:!0}),r=t},s.addEventListener(window,"hashchange",i),s.addEventListener(window,"orientationchange",function(){var t,i;return n.publish(e("EVT_ORIENTATION_CHANGE"),null),n.get(e("KEY_SCREEN_IPAD"))&&(i=s.getTopicFrame())?(t=i.style.display,i.style.display="none",i.offsetHeight,s.defer(function(){return i.style.display=t,s.delay(function(){return i.offsetHeight,s.delay(function(){return i.offsetHeight},500)},200)})):void 0}),n.subscribe(e("EVT_WIDGET_LOADED"),function(){var t;return n.subscribe(e("KEY_MERGED_FILTER_KEY"),function(){return new o.widgets.ExpressionBuilder}),new o.widgets.BrowseSequenceBuilder,i(),o.layoutPrint=window.print,window.print=function(){return n.publish(e("EVT_PRINT_TOPIC"),null)},(t=s.getTopicFrame())?t.onload=function(){return n.publish(e("EVT_TOPIC_LOADED"),null)}:void 0}),n.subscribe(""+e("EVT_BOOKMARK")+"#content_top_placeholder",function(){return n.publish(e("EVT_SCROLL_TO_TOP"),null)}),n.subscribe(e("KEY_PROJECT_LIST"),function(){return new o.MergeProj})}.call(this),function(){var t,e,i,n,r;n=window.rh,i=n.model,r=n._,e=n.consts,t=function(){function t(){this.tagCombs=[],this.idmap={},this.filter=[],this.grpType="group",this.dataLoaded=!1,this.loadTagData(i.get(e("KEY_PROJECT_LIST"))),this.caption=this.type=this.defFilter=void 0}var n,o;return t.prototype.updateTagCombs=function(t){var n,o;return n=i.get(e("KEY_PROJECT_TAG_COMBINATIONS")),null!=n?(t=r.parseProjectName(t),null!=(o=this.idmap)[t]?o[t]:o[t]=n):void 0},t.prototype.lookup=function(t,e,i){var n,r,o,s,u;if(null==i&&(i=!0),null!=t&&null!=e)for(s=0,u=t.length;u>s&&(n=t[s],null==n||(r=n.name||n.display,i===(null!=n.children)&&r===e?o=n:null==n.children||i||(o=this.lookup(n.children,e,i)),null==o));s++);return o},n=function(t){var e;return e={type:this.grpType,display:t,children:[]}},t.prototype.addTag=function(t,e){var i;return null==this.lookup(this.filter,e.name,!1)?(i={display:e.display,name:e.name},t.push(i)):void 0},t.prototype.addGroup=function(t){var e,i,r,o,s;for(i=this.lookup(this.filter,t.display),null==i&&(i=n(t.display),this.filter.push(i)),s=t.children,r=0,o=s.length;o>r;r++)e=s[r],null!=e&&null==e.children&&this.addTag(i.children,e);return 0===i.children.length&&this.filter.indexOf(i)>-1?this.filter.splice(this.filter.indexOf(i),1):void 0},t.prototype.updateFilter=function(){var t,n,r,o,s;for(t=i.get(e("KEY_TEMP_DATA"))||[],this.caption||(this.caption=t.caption),this.type||(this.type=t.type),"undefined"==typeof this.defFilter&&(this.defFilter=t["default"]),t=t.tags||[],i.publish(e("KEY_TEMP_DATA")),s=[],r=0,o=t.length;o>r;r++)n=t[r],null!=n&&s.push(null!=n.children?this.addGroup(n):this.addTag(this.filter,n));return s},o=function(t,n){return this.updateTagCombs(t),this.updateFilter(),n?void 0:(i.publish(e("KEY_MERGED_FILTER_KEY"),this.filter),i.publish(e("KEY_MERGED_PROJECT_MAP"),this.idmap),i.publish(e("KEY_PROJECT_FILTER_CAPTION"),this.caption),i.publish(e("KEY_PROJECT_FILTER_TYPE"),this.type),i.publish(e("KEY_DEFAULT_FILTER"),this.defFilter),this.dataLoaded=!0)},t.prototype.loadTagData=function(t){var i,n,s,u,a;if(!this.dataLoaded){for(i=t.length,a=[],s=0,u=t.length;u>s;s++)n=t[s],a.push(null!=n?r.loadScript(n+e("PATH_PROJECT_TAGDATA_FILE"),!1,o.bind(this,n,--i)):void 0);return a}},t}(),n.MergeProj=t}.call(this),function(){var t,e,i,n,r,o,s,u=function(t,e){return function(){return t.apply(e,arguments)}};n=window.rh,s=n._,t=n.$,i=n.consts,r=n.storage,o=n._params.filter,e=function(){function t(){this.handleTagStates=u(this.handleTagStates,this),this.getUnchecked=u(this.getUnchecked,this),r.init(i("HELP_ID")),this.allTagNames=this.computeNames(n.model.get(i("KEY_MERGED_FILTER_KEY"))),this.prepareTagStates(),this.handleTagStates(n.model.get(i("KEY_PROJECT_TAG_STATES"))),n.model.subscribe(i("KEY_PROJECT_TAG_STATES"),s.debounce(this.handleTagStates,300),{initDone:!0})}var e,a,c;return a=":",c=";",e=",",t.prototype.computeNames=function(t){return s.reduce(t,function(t,e){return t.push(e.children?this.computeNames(e.children):e.name),t},[],this)},t.prototype.getUnchecked=function(t,e){return s.filter(this.allTagNames[t],function(t){return-1===e.indexOf(t)})},t.prototype.computeExpression=function(t){var e;return t&&this.allTagNames?(e=s.reduce(t,function(t,e,i){var n;return s.isString(e)?t.push({c:[e],u:[]}):null!=e&&(n=s.compact(e))&&n.length>0&&t.push({c:n,u:this.getUnchecked(i,n)}),t},[],this),n.model.publish(i("KEY_TAG_EXPRESSION"),e)):n.model.publish(i("KEY_TAG_EXPRESSION"),[])},t.prototype.handleTagStates=function(t){return null==t&&(t={}),this.computeExpression(t),r.persist("tag_states",t)},t.prototype.prepareTagStates=function(){return n.model.subscribe(i("KEY_PROJECT_FILTER_TYPE"),function(t){return function(){var u,a;return o&&(u=n.model.get(i("KEY_MERGED_FILTER_KEY")),a=t.parseUrlFilter(u,o.split(e))),a||(a=r.fetch("tag_states")),a||(a=s.clone(n.model.get(i("KEY_DEFAULT_FILTER")))),a?n.model.publish(i("KEY_PROJECT_TAG_STATES"),a):void 0}}(this))},t.prototype.parseFilterElemnt=function(t,e){var i,n,r,o;return o=e.split(a),r=o[0],i=o[1]&&o[1].split(c),n=s.findIndex(t,function(t){return null!=i==(null!=t.children)&&t.display===r}),{index:n,elements:i}},t.prototype.parseUrlFilter=function(t,e){var r,o;if(e||e.length)return o="radio"===n.model.get(i("KEY_PROJECT_FILTER_TYPE")),r=!0,s.reduce(e,function(e,i,n){var s,u,a;return a=this.parseFilterElemnt(t,i),n=a.index,s=a.elements,-1!==n&&(u=t[n],u.children?e[n]=this.parseUrlFilter(u.children,s):(!o||r)&&(r=!1,e[n]=u.name)),e},{},this)},t}(),n.widgets.ExpressionBuilder=e}.call(this),function(){var t,e,i,n;i=window.rh,n=i._,t=i.$,e=function(){function t(){var t,e;t=function(){var t,e,r,o;return t=i.model.get("t.brsmap"),null!=t?(r=t.n&&t.n[0]||"",o=t.p&&t.p[0]||"",e=window.decodeURI(document.location.href),n.isEmptyString(r)||(r=window._getRelativeFileName(e,r)),n.isEmptyString||(o=window._getRelativeFileName(e,o)),i.model.publish("l.brsBack",o),i.model.publish("l.brsNext",r)):void 0},e=function(){var t,e,n,r;return r=i.model.get(i.consts("KEY_UI_MODE")),e=i.model.get("l.brsBack"),t=i.model.get("l.brsNext"),n=r||!e&&!t?!1:!0,i.model.publish("l.show_brs",n)},i.model.subscribe("t.topicurl",n.debounce(t,200)),i.model.subscribe("t.brsmap",n.debounce(t,200)),i.model.subscribe("l.brsBack",e),i.model.subscribe("l.brsNext",e),i.model.subscribe(i.consts("KEY_UI_MODE"),e)}return t}(),i.widgets.BrowseSequenceBuilder=e}.call(this),function(){var t,e,i,n,r,o,s,u,a,c,l,d,h,p,f,g,_,E,b,T,v;_=window.rh,v=_._,t=_.$,u=_.consts,p=_.model,n=u("HASH_KEY_RH_SEARCH"),o=u("HASH_KEY_TOPIC"),s=u("HASH_KEY_UIMODE"),r=u("HASH_KEY_RH_TOCID"),i=u("HASH_KEY_RH_HIGHLIGHT"),e=u("HASH_KEY_RANDOM"),h=[i,u("HASH_KEY_RH_SYNS"),r],c=function(t){var e,i;return i=v.urlParams(v.extractParamString(t)),e=v.hashParams(v.extractHashString(t)),v.extend(i,e)},l=function(t,i){var n,r,o,s,a,c,l;for(i=i,r=v.filePath(i),n=v.extractHashString(i),n.length>0&&(n="#"+n),a=v.urlParams(v.extractParamString(i)),c=0,l=h.length;l>c;c++)o=h[c],null!=t[o]&&(a[o]=t[o]);return p.get(u("KEY_SCREEN_IOS"))&&(a[e]=v.uniqueId()),s=v.mapToEncodedString(a),s.length>0&&(s="?"+s),""+r+s+n},g=function(t,e){return v.defer(function(){return v.updateHashMap(t,e)})},a=function(t){return null==t&&(t={}),t[s]=null,t[e]=null,t[r]||(t[r]=null),t[i]||(t[i]=null),t},b=function(t,e){var i;return t=v.fixRelativeUrl(t),i=v.urlParams(v.extractParamString(t)),i[o]=v.stripParam(t),i=a(i),g(i,e)},E=function(t,e){var i;return i={},i[o]=t,i=a(i),g(i,e)},d=function(t){var e,a,c,d,h,f,g,_,E,b;return a=t.newMap,c=t.oldMap,h=c[s],E=a[s],n in a&&(f=a[n],g=f!==p.get(u("KEY_SEARCHED_TERM")),p.publish(u("KEY_SEARCH_TERM"),f,{sync:!0})),"search"===E&&g&&window.gHost&&window.doSearch(),(!E||a[o])&&(d=p.get(u("KEY_TOPIC_IN_IFRAME")),o in a&&(_=a[o]),null==_&&(_=d),_||(_=null!=(b=window.gDefaultTopic)?b.substring(1):void 0),e=_&&(_!==d||h!==E||c[i]!==a[i]||c[r]!==a[r]),e&&(v.stripBookmark(_)!==v.stripBookmark(d)&&v.runTopicLoadingAnimation(!0),p.publish(u("KEY_TOPIC_IN_IFRAME"),_),window.loadTopic(l(a,_)))),p.publish(u("KEY_UI_MODE"),a[s])},T=function(t){var e,i,n,r;return i=v.hashParams(),!t||i[s]||(e=decodeURI(document.location.href),r=window._getRelativeFileName(e,t),n=i[o],n&&v.filePath(r)===v.filePath(n))?void 0:(p.publish(u("KEY_TOPIC_IN_IFRAME"),r),b(r,!1))},f=function(t){var e,i,n,r,o;return o=t.absUrl,v.isRootUrl()?v.isUrlAllowdInIframe(o)?(o=v.makeRelativeUrl(v.fixRelativeUrl(o)),e=o&&v.filePath(o),e===u("START_FILEPATH")?o=o.substring(e.length):o||(o="#ux"),"#"===o[0]||"?"===o[0]?(i=v.hashParams(v.extractHashString(o)),s in i||(i[s]=null),g(i,!0)):o?b(o,!0):void 0):E(o,!0):(v.isRootUrl(o)||(r=v.getRootUrl(),n=v.isExternalUrl(o)?o:v.fixRelativeUrl(v.makeRelativePath(o,r)),o=""+r+"#t="+encodeURIComponent(n)),document.location.href=o)},p.subscribe(u("EVT_WIDGET_LOADED"),function(){return v.addEventListener(document,"click",v.hookClick),p.subscribe(u("EVT_HASH_CHANGE"),d),p.subscribe(u("KEY_TOPIC_URL"),T),p.subscribe(u("EVT_NAVIGATE_TO_URL"),f),p.subscribe(u("KEY_TOPIC_IN_IFRAME"),function(){return""+window.gHost+window.gHostPath!="/"&&(window.setTopic&&window.setTopic(),window.changeTopicLink)?window.changeTopicLink(document.location.toString()):void 0}),p.subscribe(u("EVT_TOPIC_LOADED"),function(){return v.runTopicLoadingAnimation(!1)}),p.subscribe(u("EVT_INSIDE_IFRAME_DOM_CONTENTLOADED"),function(){return v.runTopicLoadingAnimation(!1)})})}.call(this),function(){var t,e,i,n,r,o;n=window.rh,o=n._,t=n.$,e=n.consts,i=n.model,r=null,r=i.subscribe(e("KEY_TAG_EXPRESSION"),function(){var t;return t=!1,function(){return r&&r(),t?void 0:(t=!0,i.subscribe(e("KEY_SEARCHED_TERM"),function(){return i.publish(e("KEY_ONSEARCH_TAG_EXPR"),JSON.stringify(i.get(e("KEY_TAG_EXPRESSION"))))}))}}()),i.subscribe(e("EVT_SEARCH_TERM"),function(){

	

if(document.getElementById("checkbox_id1").checked){
var hh = document.getElementById("wSearchField").value;
hh = '"'+hh.replace(/["']/g, "")+'"';	
document.getElementById("wSearchField").value = hh;
}
else{
var hh = document.getElementById("wSearchField").value;
hh = hh.replace(/["']/g, "");	
document.getElementById("wSearchField").value = hh;	
}

	
var t,n,r;
return t=i.get(e("KEY_CAN_HANDLE_SEARCH")),r=document.getElementById("wSearchField").value||null,n={},n[e("HASH_KEY_RH_SEARCH")]=r,n[e("HASH_KEY_UIMODE")]="search",t!==!0?document.location=""+window.gRootRelPath+"/"+(window.gSearchPageFilePath||e("START_FILEPATH"))+("?#"+o.mapToEncodedString(n)):(window.doSearch(document.getElementById("wSearchField").value),o.defer(function(){return o.updateHashMap(n,!0)}))


})
,i.subscribe(e("EVT_PROJECT_LOADED"),function(){return window.readSetting&&window.readSetting(RHANDSEARCH,function(t){return i.publish(e("KEY_AND_SEARCH"),t)}),i.subscribe(e("KEY_AND_SEARCH"),function(t){return saveSetting(RHANDSEARCH,"1"===t?"1":"0",!0)})})}.call(this),function(){var t,e,i,n;i=window.rh,n=i._,t=i.$,e=i.consts,i.model.subscribe(e("EVT_WIDGET_BEFORELOAD"),function(){var e;return null!==t("a.wShow",0)?(e=t(".contenttopic",0),t.setAttribute(e,"data-rhwidget","Basic"),t.setAttribute(e,"data-class","govt_csh:@.l.csh_mode;govt_nocsh:!@.l.csh_mode")):void 0})}.call(this),function(){var t,e,i,n,r,o,s,u,a=function(t,e){return function(){return t.apply(e,arguments)}};s=window.rh,u=s._,t=s.$,o=s.consts,i=o("KEY_TOC_DRILL_DOWN"),e=700,n=function(){function i(){}return i.prototype.sync=function(t,e){var i;return t.updateActiveBookInfo(0,"_"),i=t.widget.node,this.reset(e),this.syncToProjectToc(t,i.children,function(e){return function(i){return e.syncToTocItem(t,i)}}(this))},i.prototype.reset=function(t){var e;return this.parseTocInfo(t),e=this.order.lastIndexOf("@"),this.parentOrder=-1!==e?this.order.substring(0,e):""},i.prototype.parseTocInfo=function(t){var e;return this.order=t.childOrder||"",e=u.splitAndTrim(t.childPrefix,"."),this.tocPath=u.reduce(e,function(t,e){var i,n;return i=u.splitAndTrim(e,"@"),(n=i.shift())&&t.push({bookNo:u.parseInt(n,0),order:i.length>0?"@"+i.join("@"):""}),t},[]),e=u.splitAndTrim(t.topicID||"0","_"),this.bookNos=u.map(e.shift().split("."),function(t){return u.parseInt(t,0)}),this.pageNo=u.parseInt(e.shift(),0)},i.prototype.syncToProjectToc=function(e,i,n){var r,o,s;if(this.tocPath.length>0){if(r=0,s=this.tocPath.shift(),o=u.findIndex(i,function(i){var n;return n=t.dataset(i,"childorder")||"",n===s.order&&e.isBookNode(i)&&(r++,r===s.bookNo)?!0:!1}),-1!==o)return e.openBook(i[o],!0,function(t){return function(){return u.defer(function(){var r,s;return r=i[o+1],(s=r.children&&r.children[0])?t.syncToProjectToc(e,s.children,n):void 0})}}(this))}else if(n)return n(i)},i.prototype.syncToTocItem=function(i,n,r){var o,s,a;return null==r&&(r=1),s=0,o=0,a=null,u.any(n,function(n){return function(c){var l,d,h,p,f;if(d=t.dataset(c,"childorder")||"",d===n.order&&(i.isBookNode(c)&&(l=c,a=l),l&&o++,n.bookNos[0]===o)){if(i.isPageNode(c)&&(p=c),p&&s++,1===n.bookNos.length)0===n.pageNo?(f=c,a&&i.openBook(a,!0,function(){return i.updateBookInfo()})):p&&s===n.pageNo&&(f=c),i.updateBookInfo(),f&&i.selectLink(f,!0,r);else if(a&&(h=t.hasClass(c,"child")))return n.bookNos.shift(),i.openBook(a,!0,function(){return u.defer(function(){var t;return(t=c.children&&c.children[0])?n.syncToTocItem(i,t.children,e):void 0})}),!0;return null!=f}}}(this))},i}(),r=function(){function r(t){this.widget=t,this.subscribeTopicID=a(this.subscribeTopicID,this),this.onClick=a(this.onClick,this),this.updateBookInfo=a(this.updateBookInfo,this),this._data={},this.projectAbsRef=[],null==this.syncToc&&(this.syncToc=new n),this.widget.publish(_,0),this.widget.publish(g,"_"),this.loadToc(b,"",function(t){return function(){return t.widget.publish(o("EVT_TOC_LOADED"),!0),t.widget.subscribe(s.consts("KEY_TOPIC_ID"),t.subscribeTopicID)}}(this))}var c,l,d,h,p,f,g,_,E,b,T,v;return d="expanded",c="active",l="collapsing",h="expanding",T="loading-book",v="selected",E="show_child",g="bookid",p="active_bookid",_="level",f="active_level",b=".p.toc",r.prototype.updateBookInfo=function(){var t,e;return t=this.widget.get(p),null!=t&&t!==this.widget.get(g)&&this.widget.publish(g,t),e=this.widget.get(f),null!=e&&e!==this.widget.get(_)?this.widget.publish(_,e):void 0},r.prototype.updateActiveBookInfo=function(t,e){return this.widget.publish(p,e),this.widget.publish(f,t)},r.prototype.nextLevel=function(e){var i;return i=u.parseInt(t.dataset(e,"itemlevel"),0),t.hasClass(e,d)?i:i+1},r.prototype.onClick=function(t){var e,i,n,r;return r=t.currentTarget,e=t.target,i=this.hasLink(e),n=this.getItemNode(e,r),this.isBookNode(n)&&(i&&this.selectedNode!==n&&this.isOpenBook(n)||this.toggleBook(n,!1)),!i||this.isUrlNode(n)&&this.hasExternalLink(e)?void 0:this.selectLink(n,!1)},r.prototype.selectLink=function(i,n,r){return null==r&&(r=e),this.selectedNode&&t.removeClass(this.selectedNode,v)
,n&&this.selectedNode!==i&&u.delay(function(){
	
/*jomart*/	
if(getbooleanindexopage()== 1)
{
	if(i != null){					
		$(".selected")[0].scrollIntoView(); 
	}
}	
return i.scrollIntoView(!1)



},r),this.selectedNode=i,i?t.addClass(i,v):void 0},r.prototype.getItemNode=function(e,i){return u.findParentNode(e,i,function(e){return"LI"===t.nodeName(e)})},r.prototype.hasLink=function(e){var i;return i=t.getAttribute(e,"href"),i&&"#"!==i},r.prototype.isBookNode=function(e){return t.hasClass(e,"book")},r.prototype.isTopicNode=function(e){return t.hasClass(e,"item")},r.prototype.isUrlNode=function(e){return t.hasClass(e,"url")},r.prototype.isPageNode=function(t){return this.isTopicNode(t)||this.isUrlNode(t)},r.prototype.isOpenBook=function(e){return this.widget.get(i)?t.hasClass(e,c):t.hasClass(e,d)},r.prototype.hasExternalLink=function(e){var i;return i=t.getAttribute(e,"href"),!i||u.isRelativeUrl(i)?!1:!u.isUrlAllowdInIframe(i)},r.prototype.getBookNode=function(t,e){var i;return i=this.getItemNode(t,e),this.isBookNode(i)?i:null},r.prototype.animateCollapse=function(i){return u.each([i,i.nextElementSibling],function(i){return t.addClass(i,l),u.delay(function(){return t.removeClass(i,l)},e)})},r.prototype.animateExpand=function(i){return u.each([i,i.nextElementSibling],function(i){return t.addClass(i,h),u.delay(function(){return t.removeClass(i,h)},e)})},r.prototype.toggleBook=function(t,e){return null==e&&(e=!0),this.isOpenBook(t)?this.closeBook(t):this.openBook(t,e)},r.prototype.closeBook=function(e){var i,n;return i=t.dataset(e,"itemid"),n=""+E+i,!1!==this.widget.get(n)&&this.widget.publish(n,!1),this.updateActiveBookInfo(this.nextLevel(e),this.pid(i)),this.updateBookInfo(),t.hasClass(e,d)?(t.removeClass(e,d),this.animateCollapse(e)):void 0},r.prototype.openBook=function(e,i,n){var r,o,s,u;return null==n&&(n=this.updateBookInfo),s=t.dataset(e,"itemkey"),o=t.dataset(e,"itemid"),r=t.dataset(e,"childorder"),u=""+E+o,!0!==this.widget.get(u)&&this.widget.publish(u,!0),this.updateActiveBookInfo(this.nextLevel(e),o),this.widget.get(s)?(t.hasClass(e,d)||(t.addClass(e,d),this.animateExpand(e)),n()):(t.addClass(e,T),i&&e.scrollIntoView(!1),this.loadToc(s,r,function(i){return function(){return t.removeClass(e,T),t.addClass(e,d),i.animateExpand(e),n()}}(this)))},r.prototype.extractTempData=function(){var t;return t=this.widget.get(s.consts("KEY_TEMP_DATA")),this.widget.publish(s.consts("KEY_TEMP_DATA")),t},r.prototype.loadToc=function(t,e,i){var n,r,o,s;return s=this.parseKey(t),n=s.absRef,r=s.key,o=n?""+n+"/":"",u.loadScript(""+o+"whxdata/"+r+".new.js",!0,function(r){return function(){var o;return o=r.extractTempData()||[],u.each(o,function(t){return t.absRef=n,e?t.childOrder=e:void 0}),r.loadRefToc(o,r.childOrder(e),function(e){return r.widget.publish(t,e),i?i():void 0})}}(this))},r.prototype.loadRefToc=function(t,e,i){var n,r,o;return null==t&&(t=[]),r=u.findIndex(t,function(t){return t.ref?!0:void 0}),-1!==r?(o=t[r],n=o.absRef||"",n&&(n+="/"),n+=o.ref,u.loadScript(""+n+"/whxdata/toc.new.js",!0,function(o){return function(){var s;return s=o.extractTempData()||[],u.each(s,function(t){return t.absRef=n,e?t.childOrder=e:void 0}),Array.prototype.splice.apply(t,[r,1].concat(s)),o.loadRefToc(t,o.nextChildOrder(e),i)}}(this))):i?i(t):void 0},r.prototype.nextChildOrder=function(t){var e;return e=t.split("@"),e[e.length-1]=1+u.parseInt(e[e.length-1],0),e.join("@")},r.prototype.childOrder=function(t){return t?""+t+"@1":"@1"},r.prototype.pid=function(t){var e;return e=t.split("_"),e.pop(),e.join("_")||"_"},r.prototype.key=function(t,e){var i;return null==t&&(t=""),i=u.findIndex(this.projectAbsRef,function(e){return e===t}),-1===i&&(i=this.projectAbsRef.length,this.projectAbsRef.push(t)),".p.child_toc."+i+"."+e},r.prototype.parseKey=function(t){var e,i,n;return t=t.substring(3),i=t.split("."),n=i.pop(),e=this.projectAbsRef[i.pop()]||"",{key:n,absRef:e}},r.prototype.url=function(t,e){var i,n,r,o,s,a;return t.url?(s=t.absRef?""+t.absRef+"/":"",a=""+s+t.url,i=u.extractHashString(a),i.length>0&&(i="#"+i,n=u.filePath(a),o=u.urlParams(u.extractParamString(a)),o.rhtocid=e,r=u.mapToEncodedString(o),r.length>0&&(r="?"+r),a=""+n+r+i),a):"#"},r.prototype.tags=function(t){var e;return e=t.absRef?"+"+t.absRef:"",t["data-rhtags"]?t["data-rhtags"]+e:""},r.prototype["class"]=function(t){return"remoteitem"===t.type?"url":t.type},r.prototype.subscribeTopicID=function(t){var e,i;return null==t&&(t={}),i=u.hashParams().rhtocid,i?(e=i.split("_"),e.shift(),e=u.map(e,function(t){return u.parseInt(t,0)}),this.selectTocById(e,this.widget.node)):this.syncToc.sync(this,t)},r.prototype.selectTocById=function(t,i,n){var r,o;return null==n&&(n=1),i&&i.children&&(o=t.shift(),r=u.find(i.children,function(t){if(this.isBookNode(t)||this.isPageNode(t)){if(0===o)return!0;o--}return!1},this))?(0===t.length&&this.selectLink(r,!0,n),this.isBookNode(r)?this.openBook(r,!0,function(i){return function(){return u.defer(function(){var n,o;return 0===t.length?i.updateBookInfo():(n=r.nextElementSibling,o=n.children&&n.children[0],i.selectTocById(t,o,e))})}}(this)):this.updateBookInfo()):void 0},r}(),s.registerController("TocController",r)}.call(this),function(){var t,e,i,n,r,o=function(t,e){return function(){return t.apply(e,arguments)}};n=window.rh,r=n._,t=n.$,i=n.consts,e=function(){function e(t){this.widget=t,this.click=o(this.click,this)}var n,s,u;return n="group",s="item",u=i("KEY_PROJECT_FILTER_TYPE"),e.prototype.click=function(t){var e,n,o,s,u;return u=t.currentTarget,e=t.target,n=this.getItemNode(e,u),s=""+i("KEY_PROJECT_TAG_STATES")+this.getItemKey(n),o=this.widget.get(s),"radio"!==this.filterType()?this.handleCheckboxClick(n,s,o):this.handleRadioClick(n,s,o),r.preventDefault(t)},e.prototype.handleRadioClick=function(t,e,i){var n,o,s,u;return this.isGroupNode(t)||i?void 0:(u=r.splitKey(e),s=u.parentKey,n=u.key,o={},o[n]=this.getItemValue(t),this.widget.publish(s,o))},e.prototype.handleCheckboxClick=function(t,e,i){var n,o;return this.isGroupNode(t)?(n=r.any(i,function(t){return t}),o=n?void 0:this.getGroupItemExprs(t),this.widget.publish(e,o)):(o=i?void 0:this.getItemValue(t),this.widget.publish(e,o))},e.prototype.getItemNode=function(e,i){return r.findParentNode(e,i,function(e){return"LI"===t.nodeName(e)})},e.prototype.getItemValue=function(e){return t.dataset(e,"itemvalue")},e.prototype.getGroupItemExprs=function(e){var i,n;return n=t.dataset(e,"itemkey"),i=this.widget.get(""+this.widget.key+n),r.map(i.children,function(t){return t.name})},e.prototype.getItemKey=function(e){return t.dataset(e,"itemkey")},e.prototype.isGroupNode=function(e){return t.hasClass(e,n)},e.prototype.isItemNode=function(e){return t.hasClass(e,s)},e.prototype["class"]=function(t){return t.children?n:s},e.prototype.value=function(t){return t.children?null:t.name},e.prototype.filterType=function(){return this.widget.get(u)||"checkbox"},e.prototype.inputType=function(t){var e;return e=this.filterType(),t.children&&"radio"===e&&(e=void 0),e},e}(),n.registerController("FilterController",e)}.call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(t){this.widget=t,this.triggerDelayLoadWidgets=e(this.triggerDelayLoadWidgets,this),this.init(),this.subscribeActiveTab(),this.subscribeToLocations(),this.subscribeScreens(),this.widget.subscribe(f("EVT_PROJECT_LOADED"),function(t){return function(){return t.subscribeUIMode(),t.subscribeMergedFilter(),t.subscribeTopicClick(),t.subscribeTopicScroll(),t.subscribForSearchResult(),t.subscribeTopicNavigate(),t.subscribeToDelayLoadEvents(),t.widget.publish(f("KEY_IFRAME_EVENTS"),{click:!0,scroll:!1})}}(this))}var i,n,r,o,s,u,a,c,l,d,h,p,f,g,_,E,b,T;return _=window.rh,T=_._,i=_.$,f=_.consts,o=f("KEY_FEATURE"),s=f("KEY_FILTER_LOCATION"),a=f("KEY_SEARCH_LOCATION"),r=f("KEY_ACTIVE_TAB"),l=f("KEY_UI_MODE"),u=f("KEY_MOBILE_TOC_DRILL_DOWN"),c=f("KEY_TOC_DRILL_DOWN"),n="desktop",p="tablet",d="phone",h="filter"!==_._params.hideUI,b={desktop:["toc","idx","glo","filter","fts"],tablet:["toc","idx","glo","filter","fts"],phone:["toc","idx","glo","filter","fts"]},E={desktop:["toc","idx","glo","filter","fts"],tablet:["toc","idx","glo","filter","fts"],phone:["toc","idx","glo"]},g={idx:{evt:"EVT_LOAD_IDX",f_key:"delay_load_idx"},glo:{evt:"EVT_LOAD_GLO",f_key:"delay_load_glo"}},t.prototype.init=function(){return this.screens=this.widget.get(f("KEY_SCREEN_NAMES")),_.storage.init(f("HELP_ID")),this.activeScreen=T.find(this.screens,function(t){return this.widget.get(""+f("KEY_SCREEN")+"."+t+".attached")},this),null==this.activeScreen&&(this.activeScreen=this.widget.get(f("KEY_DEFAULT_SCREEN"))),this.assureLocations(this.activeScreen),this.initDefauls(),this.initActiveTab()},t.prototype.initDefauls=function(){var t;return t=this.widget.get(f("KEY_DEFAULT_TAB")),this.hasFeature(t)||(t=null),this.defaultTabs={},T.each(this.screens,function(e){return b[e]=T.filter(b[e],function(t){return this.hasFeature(t)},this),E[e]=T.filter(E[e],function(t){return this.hasFeature(t)},this),this.defaultTabs[e]=t&&-1!==b[e].indexOf(t)?t:b[e][0]},this)},t.prototype.initActiveTab=function(){var t;return t=_.storage.fetch("activetab"),void 0!==t&&t&&this.hasFeature(t)?this.widget.publish(r,t):void 0},t.prototype.isValidTab=function(t,e){return null==e&&(e=this.activeScreen),t&&this.hasFeature(t)?e===n&&("filter"===t&&"content"===this.widget.get(s)||"fts"===t&&"content"===this.widget.get(a))?!1:-1!==b[e].indexOf(t):!1},t.prototype.defaultTab=function(t){var e;return null==t&&(t=this.activeScreen),e=this.defaultTabs[t],this.isValidTab(e)||(e=T.find(b[t],function(t){return this.isValidTab(t)},this)),e},t.prototype.assureValidActiveTab=function(t){var e;return null==t&&(t=this.activeScreen),e=this.widget.get(r),t===n||e?(this.isValidTab(e)||(e=this.defaultTab()),this.widget.publish(r,e)):void 0},t.prototype.toggleSideBar=function(){return this.widget.get(r)?this.widget.publish(r,null):this.widget.publish(r,this.lastMobileTab||this.defaultTab())},t.prototype.toggleActiveTab=function(t){return this.widget.publish(r,this.isDesktopScreen()||t!==this.widget.get(r)?t:null)},t.prototype.triggerDelayLoadWidgets=function(t){var e;return e=g[t],e&&this.hasFeature(e.f_key)?this.widget.publish(f(e.evt),!0):void 0},t.prototype.subscribeToDelayLoadEvents=function(){return this.widget.subscribe(r,this.triggerDelayLoadWidgets)},t.prototype.filterDone=function(){return this.widget.publish(r,this.searchMode?"fts":null)},t.prototype.hasFeature=function(t){return void 0===t||!1!==this.widget.get(""+o+"."+t)},t.prototype.subscribeUIMode=function(){var t;return t=function(t){return function(){return t.isValidTab("fts")?t.isDesktopScreen()&&"tabbar"!==t.widget.get(a)?void 0:t.widget.publish(r,"fts"):void 0}}(this),this.widget.subscribe(l,function(t){return function(e){return t.widget.publish("active_content",e)}}(this))
,this.widget.subscribe("active_content",function(e){	
return function(i){
	
//jomart
/*function gotobrwosertab() 
{
$(".tabView").addClass("hide");	
$("#home_header").removeClass("hide").trigger('resize');
$("#toc_header").addClass("hide");
$("#search_header").addClass("hide");
$("#home_footer").removeClass("hide").trigger('resize');
$("#toc_footer").addClass("hide");
$("#search_footer").addClass("hide");	
$("#one").removeClass("hide").trigger('resize');	
}

if(getbooleanindexopage()== 1){
	if(i == null){					
	alert();
	gotobrwosertab(); 
	 }
						    
}*/
	
return e.isMobileScreen()&&!i?e.widget.publish(r,null):"search"===i?t():void 0
	
}
}(this),{initDone:!0}),"search"===this.widget.get("active_content")?t():void 0},t.prototype.subscribeMergedFilter=function(){var t;return this.widget.get(t=""+o+".filter")?this.widget.subscribe(f("KEY_MERGED_FILTER_KEY"),function(e){return function(i){return e.widget.publish(t,i&&i.length&&h?!0:!1),e.assureValidActiveTab()}}(this)):void 0},t.prototype.subscribeTopicClick=function(){return this.widget.subscribe(f("EVT_CLICK_INSIDE_IFRAME"),function(t){return function(){return t.activeScreen===d&&t.widget.get(r)?t.toggleSideBar():void 0}}(this))},t.prototype.subscribeTopicNavigate=function(){return this.widget.subscribe(f("EVT_NAVIGATE_TO_URL"),function(t){return function(e){return e.absUrl&&T.isUrlAllowdInIframe(e.absUrl)?t.widget.publish("active_content",null):void 0}}(this))},t.prototype.subscribeTopicScroll=function(){return this.widget.subscribe(f("EVT_SCROLL_INSIDE_IFRAME"),function(t){return function(e){var i,n;return i="down"===e.dir||e.scrollTop>10,t.widget.publish("hide_header",i),n="down"===e.dir&&e.scrollTop>10,t.widget.publish("hide_mobile_functions",n)}}(this))},t.prototype.subscribeActiveTab=function(){return this.widget.subscribe(r,function(t){return function(e){return _.storage.persist("activetab",e),t.isMobileScreen()?(t.isSidebarTab(e)&&(t.lastMobileTab=e),t.searchMode="fts"===e||t.searchMode&&"filter"===e):t.searchMode=!1}}(this))},t.prototype.subscribeScreens=function(){return T.each(this.screens,function(t){var e;return e=""+f("KEY_SCREEN")+"."+t+".attached",this.widget.get(e)&&this.handleScreen(!0,t),this.widget.subscribe(e,function(e){return function(i){return e.handleScreen(i,t)}}(this),{initDone:!0})},this)},t.prototype.subscribeToLocations=function(){return this.widget.subscribe(a,function(t){return function(){return t.assureValidActiveTab(t.activeScreen)}}(this)),this.widget.subscribe(s,function(t){return function(){return t.assureValidActiveTab(t.activeScreen)}}(this))},t.prototype.subscribForSearchResult=function(){var t;return t=function(t){return function(){var e,i;return i=t.widget.get(f("KEY_TAG_EXPRESSION")),e=t.widget.get(f("KEY_ONSEARCH_TAG_EXPR")),e&&e!==JSON.stringify(i)?t.widget.publish(f("EVT_SEARCH_TERMmm"),!0):void 0}}(this),this.widget.subscribe(f("KEY_TAG_EXPRESSION"),T.debounce(function(e){return function(){return e.isValidTab("fts")&&"fts"!==e.widget.get(r)?void 0:t()}}(this),300)),this.widget.subscribe(r,function(e){return"fts"===e?t():void 0})},t.prototype.isMobileScreen=function(){return this.activeScreen===d},t.prototype.isDesktopScreen=function(){return this.activeScreen===n},t.prototype.isTabletScreen=function(){return this.activeScreen===p},t.prototype.isSidebarTab=function(t){return t&&-1!==E[this.activeScreen].indexOf(t)},t.prototype.isSearchMode=function(t){var e;return e=this.widget.get("active_content"),"fts"===t||"search"===e&&this.isDesktopScreen()&&"content"===this.widget.get(a)},t.prototype.handleScreen=function(t,e){return t?(this.activeScreen=e,this.handleAttached(e)):this.handleDetached(e)},t.prototype.handleDetached=function(t){return T.defer(function(e){return function(){return t===n?e.widget.publish(r,"search"===e.widget.get("active_content")&&e.isValidTab("fts")?"fts":null):void 0}}(this))},t.prototype.handleAttached=function(t){return this.assureLocations(t),this.assureValidActiveTab(t),this.assureTOCMode(t)},t.prototype.assureLocations=function(t){return null==t&&(t=this.activeScreen),this.widget.publish(a,t===n?this.widget.get(f("KEY_DEFAULT_SEARCH_LOCATION")):t===p?"tabbar":"content"),this.widget.publish(s,t===n||t===p?"tabbar":"content")},t.prototype.assureTOCMode=function(t){return null==t&&(t=this.activeScreen),this.widget.publish(c,t!==n&&this.widget.get(u))}

,t.prototype.newSearch=function(t,e,i){

if(document.getElementById("checkbox_id1").checked){
t = '"'+t.replace(/["']/g, "")+'"';	
}
else{
t = t.replace(/["']/g, "");	
}


var n;
return 13===e&&(

n=this.widget.get(f("KEY_SEARCH_TERM"))
,n!==t&&this.widget.publish(f("KEY_SEARCH_TERM"),t)
,null!=i?i.target:void 0
,this.widget.publish(f("EVT_SEARCH_TERM"),!0)
)?i.target.blur():void 0

}
,t.prototype.isTagStatesChanged=function(){var t,e;return t=T.compactObject(this.widget.get(f("KEY_PROJECT_TAG_STATES"))),e=T.compactObject(this.widget.get(f("KEY_DEFAULT_FILTER"))),!T.isEqual(t,e)},t.prototype.setDefaultTagStates=function(){var t;return t=this.widget.get(f("KEY_DEFAULT_FILTER")),this.widget.publish(f("KEY_PROJECT_TAG_STATES"),T.clone(t))},t}(),window.rh.registerController("ModernLayoutController",t)}.call(this),function(){var t;t=function(){function t(t,i){var r;r=(null!=i?i.removeClasses:void 0)||["hide-children","loading"],n.each(r,function(i){return e.removeClass(t.node,i)}),n.each(null!=i?i.addClasses:void 0,function(i){return e.addClass(t.node,i)})}var e,i,n;return i=window.rh,e=i.$,n=i._,t}(),window.rh.registerController("JsLoadingController",t)}.call(this);