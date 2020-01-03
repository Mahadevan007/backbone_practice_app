var app = app || {}

app.exview = Backbone.View.extend({
   
	
	initialize:function(options){
                this.bus = options.bus
		this.render()
                this.bus.on("showcontent",this.show,this)
	},

	render:function(){
          var template = _.template($("#exampletemplate").html())
	  this.$el.html(template);
	  return this
	},
        
        show:function(content){
          
	  if(content){
	     this.$el.html(_.template($("exampletemplate").html()))
	   }
	}
})
