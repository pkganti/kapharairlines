var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#flightlist',
  events: {
    'click a': 'showplanes'
  },

  render: function() {
    $("#flightTableBody").empty();
    var flightViewTemplate = $("#flightTable").html();

    var flightViewTemplater = _.template(flightViewTemplate);

    var originInput = $(".from").val();
    var destinationInput = $(".to").val();

    var results = app.showflights.where({origin: originInput, destination: destinationInput});

    _.each(results, function(r){
      var number = $("<td>");
      var origin = $("<td>");
      var destination = $("<td>");
      var date = $("<td>");
      date.text(r.get('date'));

      var url = "http://localhost:3000/planes/"+r.get('id');

      var aTag = $('<a flight="' + r.get('id') + '">', {href: "#" });
      aTag.text(r.get('number'));// Populate the text with what's already there
      number.text('').append(aTag);

      origin.text(r.get('origin'));
      destination.text(r.get('destination'));

      $("#flightTableBody").append(number).append(origin).append(destination).append(date).append('<tr>');//

      });

    },

    showplanes: function(t){
      app.router.navigate('/planes/' + $(t.target).attr('flight'), true);
    }



});
