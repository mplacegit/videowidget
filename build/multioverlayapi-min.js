!function n(o,i,e){function t(c,d){if(!i[c]){if(!o[c]){var a="function"==typeof require&&require;if(!d&&a)return a(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+c+"'")}var f=i[c]={exports:{}};o[c][0].call(f.exports,function(n){var i=o[c][1][n];return t(i||n)},f,f.exports,n,o,i,e)}return i[c].exports}for(var r="function"==typeof require&&require,c=0;c<e.length;c++)t(e[c]);return t}({1:[function(n,o,i){window.colorTrailer=!0,function(){function n(n,o){function i(n){CallAction("die",{index:n.page_index},window.parent)}if(void 0===window.MyMpWidgetsV){window.MyMpWidgetsV=1;try{var e=function(){var n={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(o,i,e){n[i]=e});return n}();void 0===e.index&&(e.index="broadcast");new Bridge(e.index).addAction("execute",function(n){console.log(["config",n]),void 0!==n.config&&(n.config.page_index=e.index,window.colorPixels=new multiDispatcher("mycontoller","container","placeholder"),window.colorPixels.playType=1,window.colorPixels.setConfig(n.config,i))})}catch(n){console.log(n.message)}}}var o="test",i={};void 0!==window.attachEvent?window.attachEvent("onload",function(){n(o,i)}):window.addEventListener("load",function(){n(o,i)},!1),setTimeout(function(){n(o,i)},5)}()},{}]},{},[1]);