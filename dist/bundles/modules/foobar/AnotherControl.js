/*modules/foobar/AnotherTemplate.stache!can@2.3.22#view/stache/system*/
define("modules/foobar/AnotherTemplate.stache!can@2.3.22#view/stache/system",["module","can/view/stache/stache","can/view/stache/mustache_core"],function(e,t,n){var a=t([{tokenType:"start",args:["h1",!1]},{tokenType:"end",args:["h1",!1]},{tokenType:"chars",args:["Another Template"]},{tokenType:"close",args:["h1"]},{tokenType:"done",args:[]}]);return function(t,o,s){var r={module:e};return o instanceof n.Options||(o=new n.Options(o||{})),a(t,o.add(r),s)}});
/*modules/foobar/AnotherControl*/
define("modules/foobar/AnotherControl",["can","modules/foobar/AnotherTemplate.stache!"],function(e,n){return e.Control.extend({init:function(t,o){var r=e.view(n);this.element.empty(),this.element.append(r)}})});