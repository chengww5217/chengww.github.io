// build time:Fri Mar 22 2019 18:20:49 GMT+0800 (China Standard Time)
$(function(){var t=false;$("a.icon-social.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow","hidden");$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$("#local-search-input input").focus()}});$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300});if(!t){a(GLOBAL_CONFIG.localSearch.path);t=true}document.addEventListener("keydown",function i(t){if(t.code=="Escape"){e();document.removeEventListener("keydown",i)}})});var e=function(){$("body").css("overflow","auto");$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})};$(".search-mask, .search-close-button").on("click",e);function a(t){$.ajax({url:"/"+t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var a=$("#local-search-input input")[0];var i=$("#local-hits")[0];a.addEventListener("input",function(){var t='<div class="search-result-list">';var a=this.value.trim().toLowerCase().split(/[\s]+/);i.innerHTML="";if(this.value.trim().length<=0){$(".local-search-stats__hr").hide();return}var r=0;e.forEach(function(e){var i=true;var n=e.title.trim().toLowerCase();var o=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var s=e.url;var c=-1;var l=-1;if(n!==""&&o!==""){a.forEach(function(t,e){c=n.indexOf(t);l=o.indexOf(t);if(c<0&&l<0){i=false}else{if(l<0){l=0}}})}if(i){t+='<div class="local-search__hit-item"><a href="'+s+'" class="search-result-title" target="_blank">'+n+"</a>"+"</div>";r+=1;$(".local-search-stats__hr").show()}});if(r===0){t+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"}i.innerHTML=t})}})}});
//rebuild by neat 