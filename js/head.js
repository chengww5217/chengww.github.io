// build time:Thu Oct 11 2018 12:00:46 GMT+0800 (China Standard Time)
$(function(){$(".toggle-menu").on("click",function(){if(!$(".menus").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideDownIn",{duration:300})}else{$(".menus").velocity("stop").velocity("transition.slideUpOut",{duration:300})}});$(document).on("click",function(i){var n=$(".menus")[0].contains(i.target)||$(".toggle-menu")[0].contains(i.target);if(!n&&$(".toggle-menu").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideUpOut",{duration:300})}});$(window).on("resize",function(i){if(!$(".toggle-menu").is(":visible")){if(!$(".menus").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideDownIn",{duration:300})}}})});
//rebuild by neat 