// (function(d, s, id){
var d = document;
var s = "script";
var id = "foo";
var js, fjs = document.getElementById("jobs");
// if (d.getElementById(id)){ return; }
js = d.createElement(s);
js.id = "_remotehq_js";
js.dataset.remotehqcompany = "Unlock";
js.onload = function(){};
js.src = "https://cdn.remotehq.net/remotehq.js";
fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'remotehqads'));
