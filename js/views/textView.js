var app = app || {}

app.Textview = Backbone.View.extend({
  
  tagName:"li",
  
  events:{
   "click #show":"onClick",
   "click #delete":"onDelete"
  },

  initialize:function(options){
   this.bus = options.bus
   this.render()
  },


  onClick:function(){
   console.log(this.model.get("text"))
   this.bus.trigger("showcontent",this.model.get("text"))
  },

  onDelete:function(){
   this.bus.trigger("removetext",this.model.get("text"))
   this.remove()
   this.model.destroy()
  },

  render:function(){
   var source = $("#newtexttemplate").html()
   var template = _.template(source)
   this.$el.html(template(this.model.toJSON()))
   return this 
  }
})
