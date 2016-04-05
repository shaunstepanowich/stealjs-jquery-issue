steal('can',
      'foobar/AppControl.stache',
//      'foobar/AnotherTemplate.stache',      
function (can,
          view) {
'use strict';

    return can.Control.extend({
		  
        
		init: function (element, options) {

            var viewFrag = can.view(view);
            
            this.element.empty();
            this.element.append(viewFrag);
            
		},
        
        '#clickme click' : function(el, ev) {
            
            var me = this;
            
            steal('foobar/AnotherTemplate.stache',function(another){
                
                var viewFrag = can.view(another);
            
                me.element.empty();
                me.element.append(viewFrag);                
                
            });
            
            
        }
                               
    });

});