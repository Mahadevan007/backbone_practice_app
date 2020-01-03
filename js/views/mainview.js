var app = app || {}

app.MainView = Backbone.View.extend({
	el: "#container",

	initialize: function (options) {
		this.bus = options.model
		console.log(this.bus)
		this.bus.on("showcontent", this.show, this)
		this.bus.on("removetext", this.removetext, this)
		this.bus.on("clearall", this.clear, this)
		this.render()
	},

	render: function () {
		console.log("Hello")
		return this
	},

	clear: function () {
		this.$el.html("")
	},

	removetext: function (text) {
		if (this.$el.html() === text) {
			this.$el.html("")
		}
	},

	show: function (content) {
		if (content) {
			this.$el.html(content)
		}
	}
})