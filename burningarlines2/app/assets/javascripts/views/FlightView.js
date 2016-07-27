var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#flightlist',


  render: function() {
    var flightViewTemplate = $("#flightTable").html();
    console.log(flightViewTemplate);
    var flightViewTemplater = _.template(flightViewTemplate);
    console.log(flightViewTemplater);
    var originInput = $(".from").val();
    var destinationInput = $(".to").val();

    var results = app.showflights.where({origin: originInput, destination: destinationInput});
    _.each(results, function(r){
      var flight = $("<td>");
          flight.attr("value", r.name);
          flight.text(r.origin);
          $("#flighttable").append(flight);
      });
      // this.$el.html(flightViewTemplater( r));





  }

});
