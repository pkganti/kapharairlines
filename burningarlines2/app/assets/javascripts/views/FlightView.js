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
    console.log(results);
    _.each(results, function(r){
      var number = $("<td>");
      var origin = $("<td>");
      var destination = $("<td>");
      var date = $("<td>");
      date.text(r.get('date'));

      var url = "http://localhost:3000/planes/"+r.get('id');

      var aTag = $('<a>', {href: url });
      aTag.text(r.get('number'));// Populate the text with what's already there
      number.text('').append(aTag);

      origin.text(r.get('origin'));
      destination.text(r.get('destination'));
      var $row = $("#flightTableBody").append('<tr>');
      $row.append(number).append(origin).append(destination).append(date);//

      });
      // this.$el.html(flightViewTemplater( r));





  }

});
