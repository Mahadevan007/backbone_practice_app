var app = app || {}

app.TextsView =  Backbone.View.extend({
  el:"#main",
  
  events:{
   "keypress #text":"onkeypress",
   "click #click-button":"onClick"
  },


  initialize:function(options){
   $("#text").val("")
   this.bus = options.bus
   this.listenTo(this.collection,"add",this.renderText)
   this.render()
  },

 
  render:function(){
   var self = this
   this.collection.each(function(text){
	console.log(text)
	self.renderText(text)
   },this)
   return this
  },

  onkeypress:function(e){
   if(e.which!==13&&!this.input.val().trim()){
	return;
   }
   else
   {
   var input = $("#text").val().trim()
    this.collection.add({
       	text:input
    })
    $("#text").val("")
   }
  },

  renderText:function(text){
    var textview = new app.Textview({
    	model:text,
        bus:this.bus
    })
    this.$("#list-view").append(textview.render().$el)
  }

})
