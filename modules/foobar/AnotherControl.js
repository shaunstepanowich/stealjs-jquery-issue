define(['can','modules/foobar/AnotherTemplate.stache!'],function(can,view) {
    
    return can.Control.extend({
		  
        
		init: function (element, options) {

            var viewFrag = can.view(view);
            
            this.element.empty();
            this.element.append(viewFrag);
            
		},
        
                               
    });
    
});