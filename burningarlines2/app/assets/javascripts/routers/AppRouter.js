var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes:{
    '': 'search',
  //  'flights/:id': 'chosenFlight',
    'planes/:id': 'chosenPlane'
  },

  search: function () {
    var appView = new app.AppView({collection: app.showflights}); //coming from our js file
    appView.render();
  },

  chosenFlight: function () {
    var flight = app.showflights.get(id);
    var flightView = new app.FlightView({model: flight}); // coming from the previous line
    flightView.render();
  },

  chosenPlane: function (id) {
    console.log("Hi There", id);
    var plane = app.showplanes.get(id);
    var planeView = new app.PlaneView({model: plane}); // coming from the previous line
    planeView.render(id);
  }
});
