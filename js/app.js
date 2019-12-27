var app = app || {}

$(function(){

 var bus = _.extend({},Backbone.Events)
 var collection = [new app.text({text:"hello"}),new app.text({text:"hi"})]
 var textcollection = new app.texts(collection)
 var textsview = new app.TextsView({
	collection:textcollection,
        bus:bus
 })
 var mainview = new app.MainView({
	model:bus
 })

})
