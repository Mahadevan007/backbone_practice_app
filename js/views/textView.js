var app = app || {}

app.Textview = Backbone.View.extend({

  tagName: "li",

  events: {
    "click #show": "onClick",
    "click #delete": "onDelete",
    "click #edit": "onEdit",
    "click #update": "onUpdate",
    "click #cancel": "onCancel"
  },

  initialize: function (options) {
    this.bus = options.bus
    this.render()
  },


  onClick: function () {
    console.log(this.model.get("text"))
    this.bus.trigger("showcontent", this.model.get("text"))
  },

  onEdit: function (e) {
    this.$("#show").hide()
    this.$("#delete").hide()
    this.$("#edit").hide()
    this.$("#update").slideDown();
    this.$("#cancel").slideDown()
    var text = this.$("#newtext").text()
    this.$("#newtext").html("<input type='text' id='update-input' value=" + text + ">")
  },

  onUpdate: function (e) {
    this.model.set("text", $("#update-input").val())
  },

  onCancel: function () {
    app.textsview.render()
  },

  onDelete: function () {
    this.bus.trigger("removetext", this.model.get("text"))
    this.remove()
    this.model.destroy()
  },

  render: function () {
    var source = $("#newtexttemplate").html()
    var template = _.template(source)
    this.$el.html(template(this.model.toJSON()))
    return this
  }
})