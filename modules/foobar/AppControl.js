define(['can','modules/foobar/AppControl.stache'],function(can,view) {
    
    return can.Control.extend({
		  
        
		init: function (element, options) {

            var viewFrag = can.view(view);
            
            this.element.empty();
            this.element.append(viewFrag);
            
		},
        
        '#clickme click' : function(el, ev) {
            
            var me = this;
            
            console.log('click!');
            System.import('modules/foobar/AnotherTemplate.stache!').then(function(renderer){
               
                console.log('here');
                var viewFrag = renderer();
                me.element.empty();
                me.element.append(viewFrag);               
                
            });
            
        }
                               
    });
    
});