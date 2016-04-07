define(['can','foobar/AppControl.stache'],function(can,view) {
    
    return can.Control.extend({
		  
        
		init: function (element, options) {

            var viewFrag = can.view(view);
            
            this.element.empty();
            this.element.append(viewFrag);
            
		},
        
        '#clickme click' : function(el, ev) {
            
            var me = this;
            
            System.import('foobar/AnotherTemplate.stache',function(anotherView){
                
                var viewFrag = can.view(anotherView);
            
                me.element.empty();
                me.element.append(viewFrag);                                
                
            });
            
        }
                               
    });
    
});