var app = app || {}

app.MainView = Backbone.View.extend({
	el:"#container",

	initialize:function(options){
          this.bus = options.model
          console.log(this.bus)
	  this.bus.on("showcontent",this.show,this)
	  this.render()
	},

        render:function(){
          console.log("Hello")
          return this
  	},

	show:function(content){
	  if(content){
	     this.$el.html(content)
	   }
	}
})
