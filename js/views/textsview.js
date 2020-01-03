var app = app || {}

app.TextsView = Backbone.View.extend({
  el: "#main",

  events: {
    "keypress #text": "onkeypress",
    "click #click-button": "onClick"
  },


  initialize: function (options) {
    $("#text").val("")
    this.bus = options.bus
    var self = this
    this.listenTo(this.collection, "remove", this.checkremove)
    this.collection.on("change", function () {
      self.render()
    }, this)
    this.listenTo(this.collection, "add", this.renderText)
    this.render()
  },

  checkremove: function (text) {
    if (this.collection.length == 0) {
      this.bus.trigger("clearall")
    } else {
      this.bus.trigger("removetext", text)
    }
  },


  render: function () {
    var self = this
    this.$("#list-view").html("")
    this.collection.each(function (text) {
      self.renderText(text)
    }, this)
    return this
  },

  onkeypress: function (e) {
    if (e.which !== 13) {
      return;
    } else {
      var input = $("#text").val().trim()
      this.collection.add({
        text: input
      })
      $("#text").val("")
    }
  },

  renderText: function (text) {
    var textview = new app.Textview({
      model: text,
      bus: this.bus
    })
    this.$("#list-view").append(textview.render().$el)
  }

})