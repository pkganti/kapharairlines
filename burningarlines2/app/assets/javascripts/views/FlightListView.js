var app = app || {};

app.FlightListView = Backbone.View.extend({

  render: function(){
    console.log("Hi there");
    this.$el.text('Phani here');
    this.$el.appendTo('#flightNumber');
  },

  // showPlane: function(){
  //   console.log("Test");
  //   var planeView = new app.PlaneView();
  //   planeView.render();
  // },

  navigateToPlane: function(){
    console.log("test");
    app.router.navigate('/planes' + this.model.get('id'), true);
  }
});
