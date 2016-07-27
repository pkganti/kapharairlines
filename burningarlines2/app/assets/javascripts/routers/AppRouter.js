var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes:{
    '': 'search',
    'flight/:id': 'chosenFlight'
  },

  search: function () {
    var appView = new app.AppView({collection: app.showflights}); //coming from our js file
    appView.render();
  },

  chosenFlight: function () {
    var flight = app.showflights.get(id);
    var flightView = new app.FlightView({model: flight}); // coming from the previous line
    flightView.render();
  }
});
