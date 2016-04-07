define(['can','modules/foobar/AppControl.stache'],function(can,view) {
    
    return can.Control.extend({
		  
        
		init: function (element, options) {

            var viewFrag = can.view(view);
            
            this.element.empty();
            this.element.append(viewFrag);
            
		},
        
        '#clickme click' : function(el, ev) {
            
            var me = this;
            
            System.import('modules/foobar/AnotherControl').then(function(AnotherControl){
               
                var anotherControl = new AnotherControl('#anotherControl');
                               
            });
            
        }
                               
    });
    
});