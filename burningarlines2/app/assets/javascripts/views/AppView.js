var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function(){
    var content = $('#flightTable').html();
    this.$el.html( content);
    this.collection.each(function (f){
      var flightListView = new app.FlightListView({model: f});
      flightListView.render();
    });
  }
});
