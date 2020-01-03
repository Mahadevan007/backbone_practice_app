var app = app || {};
$(function () {
  var bus = _.extend({}, Backbone.Events);
  var collection = [
    new app.text({
      text: "hello"
    }),
    new app.text({
      text: "hi"
    })
  ];
  var textcollection = new app.texts(collection);
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "textsview",
      main: "mainview"
    },

    textsview: function () {
      app.textsview = new app.TextsView({
        collection: textcollection,
        bus: bus
      });
      app.mainview = new app.MainView({
        model: bus
      });
    },
  });

  var NavView = Backbone.View.extend({
    el: "#nav",

    events: {
      click: "onClick"
    },

    onClick: function (e) {
      console.log("clicked");
      var $li = $(e.target);
      // console.log($li.attr("data-url"));
      router.navigate($li.attr("data-url"), {
        trigger: true
      });
      Backbone.history.loadUrl(Backbone.history.fragment);
    }
  });

  var navview = new NavView();

  var router = new AppRouter();
  Backbone.history.start();
});